import { Module } from '@nestjs/common';
import { EleveService } from './eleve.service';
import { EleveController } from './eleve.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EleveController],
  providers: [EleveService],
  imports: [PrismaModule]
})
export class EleveModule {}
