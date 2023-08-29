import { Injectable } from '@nestjs/common';
import { CreateLocalisationDto } from './dto/create-localisation.dto';
import { UpdateLocalisationDto } from './dto/update-localisation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocalisationService {
  constructor(private prisma: PrismaService) {}

  create(createLocalisationDto: CreateLocalisationDto) {
    return this.prisma.localisation.create({ data: createLocalisationDto});;
  }

  findAll() {
    return this.prisma.localisation.findMany();
  }

  findOne(id: number) {
    return this.prisma.localisation.findUnique({ where: { id }});
  }

  update(id: number, updateLocalisationDto: UpdateLocalisationDto) {
    return this.prisma.localisation.update({
      where: { id },
      data: updateLocalisationDto,
    });
  }

  remove(id: number) {
    return this.prisma.localisation.delete({ where: { id }});
  }
}
