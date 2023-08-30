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
  async create(@Body() createTuteurDto: CreateTuteurDto) {
    return new TuteurEntity(await this.tuteurService.create(createTuteurDto));
  }

  @Get()
  @ApiOkResponse({ type: TuteurEntity})
  async findAll() {
    const tuteur = await this.tuteurService.findAll();
    return tuteur.map((tuteur) => new TuteurEntity(tuteur));
  }

  @Get(':id')
  @ApiOkResponse({ type: TuteurEntity})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const tuteur = new TuteurEntity(await this.tuteurService.findOne(id));
    if(!tuteur) {
      throw new NotFoundException(`Tuteur avec id ${id} n'existe pas.`)
    }
    return tuteur;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: TuteurEntity})
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateTuteurDto: UpdateTuteurDto) {
    return new TuteurEntity( await this.tuteurService.update(id, updateTuteurDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: TuteurEntity})
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new TuteurEntity(await this.tuteurService.remove(id));
  }
}
