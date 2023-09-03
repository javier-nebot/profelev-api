import { Module } from '@nestjs/common';
import { TuteurService } from './tuteur.service';
import { TuteurController } from './tuteur.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TuteurController],
  providers: [TuteurService],
  imports: [PrismaModule],
  exports: [TuteurService]
})
export class TuteurModule {}
