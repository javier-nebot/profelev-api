import { Injectable } from '@nestjs/common';
import { CreateProfDto } from './dto/create-prof.dto';
import { UpdateProfDto } from './dto/update-prof.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfService {
  constructor(private prisma: PrismaService) {}

  create(createProfDto: CreateProfDto) {
    return this.prisma.prof.create({ data: createProfDto});
  }

  findAll() {
    return  this.prisma.prof.findMany();
  }

  findOne(id: number) {
    return this.prisma.prof.findUnique({ where: { id }});
  }

  update(id: number, updateProfDto: UpdateProfDto) {
    return this.prisma.prof.update({
      where: { id },
      data: updateProfDto,
    });
  }

  remove(id: number) {
    return this.prisma.prof.delete({ where: { id }});
  }
}
