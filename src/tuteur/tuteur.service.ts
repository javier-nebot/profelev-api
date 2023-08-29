import { Injectable } from '@nestjs/common';
import { CreateTuteurDto } from './dto/create-tuteur.dto';
import { UpdateTuteurDto } from './dto/update-tuteur.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TuteurService {
  constructor(private prisma: PrismaService) {}

  create(createTuteurDto: CreateTuteurDto) {
    return this.prisma.tuteur.create({ data: createTuteurDto});;
  }

  findAll() {
    return this.prisma.tuteur.findMany();
  }

  findOne(id: number) {
    return this.prisma.tuteur.findUnique({ where: { id }});
  }

  update(id: number, updateTuteurDto: UpdateTuteurDto) {
    return this.prisma.tuteur.update({
      where: { id },
      data: updateTuteurDto,
    });
  }

  remove(id: number) {
    return this.prisma.tuteur.delete({ where: { id }});
  }
}
