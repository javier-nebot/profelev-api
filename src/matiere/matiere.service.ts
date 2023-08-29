import { Injectable } from '@nestjs/common';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MatiereService {
  constructor(private prisma: PrismaService) {}

  create(createMatiereDto: CreateMatiereDto) {
    return this.prisma.matiere.create({ data: createMatiereDto});
  }

  findAll() {
    return this.prisma.matiere.findMany();
  }

  findOne(id: number) {
    return this.prisma.matiere.findUnique({ where: { id }});
  }

  update(id: number, updateMatiereDto: UpdateMatiereDto) {
    return this.prisma.matiere.update({
      where: { id },
      data: updateMatiereDto,
    });
  }

  remove(id: number) {
    return this.prisma.matiere.delete({ where: { id }});
  }
}
