import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { MatiereService } from './matiere.service';
import { CreateMatiereDto } from './dto/create-matiere.dto';
import { UpdateMatiereDto } from './dto/update-matiere.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MatiereEntity } from './entities/matiere.entity';

@Controller('matiere')
@ApiTags('Matiere')
export class MatiereController {
  constructor(private readonly matiereService: MatiereService) {}

  @Post()
  @ApiCreatedResponse({ type: MatiereEntity})
  create(@Body() createMatiereDto: CreateMatiereDto) {
    return this.matiereService.create(createMatiereDto);
  }

  @Get()
  @ApiOkResponse({ type: MatiereEntity})
  findAll() {
    return this.matiereService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MatiereEntity})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const matiere = await this.matiereService.findOne(id);
    if(!matiere) {
      throw new NotFoundException(`Matiere avec id ${id} nèxiste pas`)
    }
    return this.matiereService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: MatiereEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMatiereDto: UpdateMatiereDto) {
    return this.matiereService.update(id, updateMatiereDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MatiereEntity})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.matiereService.remove(id);
  }
}
