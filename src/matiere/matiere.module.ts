import { Module } from '@nestjs/common';
import { MatiereService } from './matiere.service';
import { MatiereController } from './matiere.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MatiereController],
  providers: [MatiereService],
  imports: [PrismaModule]
})
export class MatiereModule {}
