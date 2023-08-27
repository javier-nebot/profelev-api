import { Injectable } from '@nestjs/common';
import { CreateTuteurDto } from './dto/create-tuteur.dto';
import { UpdateTuteurDto } from './dto/update-tuteur.dto';

@Injectable()
export class TuteurService {
  create(createTuteurDto: CreateTuteurDto) {
    return 'This action adds a new tuteur';
  }

  findAll() {
    return `This action returns all tuteur`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tuteur`;
  }

  update(id: number, updateTuteurDto: UpdateTuteurDto) {
    return `This action updates a #${id} tuteur`;
  }

  remove(id: number) {
    return `This action removes a #${id} tuteur`;
  }
}
