import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationUserDto } from './dto/registration-user.dto';
const passwordHash = require('password-hash');
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  registration(@Body() registrationUserDto: RegistrationUserDto) {
    return this.authService.create(registrationUserDto);
  }
}
