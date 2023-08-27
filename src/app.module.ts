import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProfModule } from './prof/prof.module';
import { TuteurModule } from './tuteur/tuteur.module';
import { MatiereModule } from './matiere/matiere.module';
import { LocalisationModule } from './localisation/localisation.module';

@Module({
  imports: [PrismaModule, ProfModule, TuteurModule, MatiereModule, LocalisationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
