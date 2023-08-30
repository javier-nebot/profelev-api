import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EleveService } from './eleve.service';
import { CreateEleveDto } from './dto/create-eleve.dto';
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EleveEntity } from './entities/eleve.entity';
import eleve from 'prisma/seed/eleve';

@Controller('eleve')
@ApiTags('Eleve')
export class EleveController {
  constructor(private readonly eleveService: EleveService) {}

  @Post()
  @ApiCreatedResponse({type: EleveEntity})
  async create(@Body() createEleveDto: CreateEleveDto) {
    return new EleveEntity( await this.eleveService.create(createEleveDto));
  }

  @Get()
  @ApiOkResponse({ type: EleveEntity })
  async findAll() {
    const eleves = await this.eleveService.findAll();
    return eleves.map((eleve) => new EleveEntity(eleve));
  }

  @Get(':id')
  @ApiOkResponse({ type: EleveEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new EleveEntity(await this.eleveService.findOne(id));
  }

  @Patch(':id')
  @ApiCreatedResponse({type: EleveEntity})
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateEleveDto: UpdateEleveDto) {
    return new EleveEntity(await this.eleveService.update(id, updateEleveDto));
  }

  @Delete(':id')
  @ApiOkResponse({ type: EleveEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new EleveEntity(await this.eleveService.remove(id));
  }
}
