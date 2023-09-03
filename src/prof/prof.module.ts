import { Module } from '@nestjs/common';
import { ProfService } from './prof.service';
import { ProfController } from './prof.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProfController],
  providers: [ProfService],
  imports: [PrismaModule],
  exports: [ProfService]
})
export class ProfModule {}
