import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { TuteurService } from './tuteur.service';
import { CreateTuteurDto } from './dto/create-tuteur.dto';
import { UpdateTuteurDto } from './dto/update-tuteur.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TuteurEntity } from './entities/tuteur.entity';
import { NotFoundError } from 'rxjs';

@Controller('tuteur')
@ApiTags('Tuteur')
export class TuteurController {
  constructor(private readonly tuteurService: TuteurService) {}

  @Post()
  @ApiCreatedResponse({ type: TuteurEntity })
  create(@Body() createTuteurDto: CreateTuteurDto) {
    return this.tuteurService.create(createTuteurDto);
  }

  @Get()
  @ApiOkResponse({ type: TuteurEntity})
  findAll() {
    return this.tuteurService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TuteurEntity})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const tuteur = await this.tuteurService.findOne(id);
    if(!tuteur) {
      throw new NotFoundException(`Tuteur avec id ${id} n'existe pas.`)
    }
    return tuteur;
  }

  @Patch(':id')
  @ApiOkResponse({ type: TuteurEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTuteurDto: UpdateTuteurDto) {
    return this.tuteurService.update(id, updateTuteurDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TuteurEntity})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tuteurService.remove(id);
  }
}
