import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { LocalisationService } from './localisation.service';
import { CreateLocalisationDto } from './dto/create-localisation.dto';
import { UpdateLocalisationDto } from './dto/update-localisation.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LocalisationEntity } from './entities/localisation.entity';

@Controller('localisation')
@ApiTags('Localisation')
export class LocalisationController {
  constructor(private readonly localisationService: LocalisationService) {}

  @Post()
  @ApiCreatedResponse({ type: LocalisationEntity})
  create(@Body() createLocalisationDto: CreateLocalisationDto) {
    return this.localisationService.create(createLocalisationDto);
  }

  @Get()
  @ApiOkResponse({ type: LocalisationEntity })
  findAll() {
    return this.localisationService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: LocalisationEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const localisation = await this.localisationService.findOne(id);
    if(!localisation) {
      throw new NotFoundException(`Localisation avec id ${id} n'existe pas`)
    }
    return localisation;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: LocalisationEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateLocalisationDto: UpdateLocalisationDto) {
    return this.localisationService.update(id, updateLocalisationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: LocalisationEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.localisationService.remove(id);
  }
}
