import { Injectable } from '@nestjs/common';
import { CreateTuteurDto } from './dto/create-tuteur.dto';
import { UpdateTuteurDto } from './dto/update-tuteur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10

@Injectable()
export class TuteurService {
  constructor(private prisma: PrismaService) {}

  async create(createTuteurDto: CreateTuteurDto) {
    const hashedPassword = await bcrypt.hash(
      createTuteurDto.password,
      roundsOfHashing,
    );
    createTuteurDto.password = hashedPassword
    return this.prisma.tuteur.create({ data: createTuteurDto});
  }

  findAll() {
    return this.prisma.tuteur.findMany();
  }

  findOne(id: number) {
    return this.prisma.tuteur.findUnique({
      where: { id },
      include: {
        eleve: true,
      }});
  }

  async update(id: number, updateTuteurDto: UpdateTuteurDto) {
    if (updateTuteurDto.password) {
      updateTuteurDto.password = await bcrypt.hash(
        updateTuteurDto.password,
        roundsOfHashing,
      );
    }
    return this.prisma.tuteur.findUnique({ where: { id }});
  }

  remove(id: number) {
    return this.prisma.tuteur.delete({ where: { id }});
  }
}
