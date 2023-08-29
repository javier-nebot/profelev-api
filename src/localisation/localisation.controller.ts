import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LocalisationService } from './localisation.service';
import { CreateLocalisationDto } from './dto/create-localisation.dto';
import { UpdateLocalisationDto } from './dto/update-localisation.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('localisation')
@ApiTags('Localisation')
export class LocalisationController {
  constructor(private readonly localisationService: LocalisationService) {}

  @Post()
  create(@Body() createLocalisationDto: CreateLocalisationDto) {
    return this.localisationService.create(createLocalisationDto);
  }

  @Get()
  findAll() {
    return this.localisationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.localisationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocalisationDto: UpdateLocalisationDto) {
    return this.localisationService.update(+id, updateLocalisationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.localisationService.remove(+id);
  }
}
