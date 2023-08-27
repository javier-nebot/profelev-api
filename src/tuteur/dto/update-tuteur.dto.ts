import { PartialType } from '@nestjs/swagger';
import { CreateTuteurDto } from './create-tuteur.dto';

export class UpdateTuteurDto extends PartialType(CreateTuteurDto) {}
