import { PartialType } from '@nestjs/swagger';
import { CreateProfDto } from './create-prof.dto';

export class UpdateProfDto extends PartialType(CreateProfDto) {}
