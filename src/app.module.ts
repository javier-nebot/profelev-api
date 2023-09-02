import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProfModule } from './prof/prof.module';
import { TuteurModule } from './tuteur/tuteur.module';
import { MatiereModule } from './matiere/matiere.module';
import { LocalisationModule } from './localisation/localisation.module';
import { EleveModule } from './eleve/eleve.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, ProfModule, TuteurModule, MatiereModule, LocalisationModule, EleveModule, AuthModule],
})
export class AppModule {}
