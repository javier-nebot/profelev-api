import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfService } from './prof.service';
import { CreateProfDto } from './dto/create-prof.dto';
import { UpdateProfDto } from './dto/update-prof.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProfEntity } from './entities/prof.entity';

@Controller('prof')
@ApiTags('Prof')
export class ProfController {
  constructor(private readonly profService: ProfService) {}

  @Post()
  @ApiCreatedResponse({ type: ProfEntity })
  create(@Body() createProfDto: CreateProfDto) {
    return this.profService.create(createProfDto);
  }

  @Get()
  @ApiOkResponse({ type: ProfEntity })
  findAll() {
    return this.profService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProfEntity })
  findOne(@Param('id') id: string) {
    return this.profService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProfEntity })
  update(@Param('id') id: string, @Body() updateProfDto: UpdateProfDto) {
    return this.profService.update(+id, updateProfDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProfEntity })
  remove(@Param('id') id: string) {
    return this.profService.remove(+id);
  }
}
