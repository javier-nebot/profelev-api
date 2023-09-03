import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException, UseGuards } from '@nestjs/common';
import { ProfService } from './prof.service';
import { CreateProfDto } from './dto/create-prof.dto';
import { UpdateProfDto } from './dto/update-prof.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProfEntity } from './entities/prof.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('prof')
@ApiTags('Prof')
export class ProfController {
  constructor(private readonly profService: ProfService) {}

  @Post()
  @ApiCreatedResponse({ type: ProfEntity })
  async create(@Body() createProfDto: CreateProfDto) {
    return new ProfEntity( await this.profService.create(createProfDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ProfEntity })
  async findAll() {
    const prof = await this.profService.findAll();
    return prof.map((prof) => new ProfEntity(prof));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ProfEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const prof = new ProfEntity(await this.profService.findOne(id));
    if (!prof) {
      throw new NotFoundException(`Prof avec id ${id} n'existe pas.`)
    }
    return prof;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: ProfEntity })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateProfDto: UpdateProfDto) {
    return new ProfEntity(await this.profService.update(id, updateProfDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ProfEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new ProfEntity(await this.profService.remove(id));
  }
}
