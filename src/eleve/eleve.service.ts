import { Injectable } from '@nestjs/common';
import { CreateEleveDto } from './dto/create-eleve.dto';
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EleveService {
  constructor(private prisma: PrismaService) {}

  create(createEleveDto: CreateEleveDto) {
    return this.prisma.eleve.create({ data: createEleveDto });
  }

  findAll() {
    return this.prisma.eleve.findMany();
  }

  findOne(id: number) {
    return this.prisma.eleve.findUnique({
      where: { id },
      include: {
        tuteur: true,
      }});
  }

  update(id: number, updateEleveDto: UpdateEleveDto) {
    return this.prisma.eleve.update({ where: { id }, data: updateEleveDto });
  }

  remove(id: number) {
    return this.prisma.eleve.delete({ where: { id }});
  }
}
