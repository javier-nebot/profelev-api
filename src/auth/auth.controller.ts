import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AuthEntity } from './entity/auth.entity';
import { AuthDto } from './dto/auth.dto';
import { CreateProfDto } from 'src/prof/dto/create-prof.dto';
import { CreateTuteurDto } from 'src/tuteur/dto/create-tuteur.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signupProf') 
  async signupProf(@Body() newProf: CreateProfDto) {
    return this.authService.signupProf(newProf)
  }

  @Post('signupTuteur') 
  async signupTuteur(@Body() newTuteur:  CreateTuteurDto) {
    return this.authService.signupTuteur(newTuteur);
  }

  @Post('loginProf')
  @ApiOkResponse({ type: AuthEntity})
  loginProf(@Body() {email, password}: AuthDto) {
    return this.authService.loginProf(email, password);
  }

  @Post('loginTuteur')
  @ApiOkResponse({ type: AuthEntity})
  loginTuteur(@Body() {email, password}: AuthDto) {
    return this.authService.loginTuteur(email, password);
  }
}


