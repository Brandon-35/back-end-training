import { Inject, Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { RegistrationUserDto } from './dto/registration-user.dto';
@Injectable()
export class AuthService {
    constructor(
        @Inject('AUTH_RESPOSITORY')
        private authRespository: Repository<User>,
      ) { }
    create(registrationUserDto: RegistrationUserDto) {
        return registrationUserDto;
    }
}
