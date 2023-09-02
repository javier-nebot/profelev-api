import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup') 
  signup() {
    return this.authService.signup();
  }

  @Post('loginProf')
  @ApiOkResponse({ type: AuthEntity})
  loginProf(@Body() {email, password}: LoginDto) {
    return this.authService.loginProf(email, password);
  }

  @Post('loginTuteur')
  @ApiOkResponse({ type: AuthEntity})
  loginTuteur(@Body() {email, password}: LoginDto) {
    return this.authService.loginTuteur(email, password);
  }
}


