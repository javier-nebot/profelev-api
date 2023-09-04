import { Injectable } from '@nestjs/common';
import { CreateProfDto } from './dto/create-prof.dto';
import { UpdateProfDto } from './dto/update-prof.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10

@Injectable()
export class ProfService {
  constructor(private prisma: PrismaService) {}

  async create(createProfDto: CreateProfDto) {
    const hashedPassword = await bcrypt.hash(
      createProfDto.password,
      roundsOfHashing,
    );
    createProfDto.password = hashedPassword
    return this.prisma.prof.create({ data: createProfDto});
  }

  findAll() {
    return  this.prisma.prof.findMany();
  }

  findOne(id: number) {
    return this.prisma.prof.findUnique({ where: { id } });
  }

  async update(id: number, updateProfDto: UpdateProfDto) {
    if (updateProfDto.password) {
      updateProfDto.password = await bcrypt.hash(
        updateProfDto.password,
        roundsOfHashing,
      );
    }
    return this.prisma.prof.findUnique({ where: { id }});
  }

  remove(id: number) {
    return this.prisma.prof.delete({ where: { id }});
  }
}
