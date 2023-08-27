import { Module } from '@nestjs/common';
import { LocalisationService } from './localisation.service';
import { LocalisationController } from './localisation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LocalisationController],
  providers: [LocalisationService],
  imports: [PrismaModule]
})
export class LocalisationModule {}
