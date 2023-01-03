import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Users } from '../users/entities/users.entity';
import { Repository } from 'typeorm';
import { RegistrationUserDto } from './dto/registration-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { toUserDto, comparePasswords } from '../shared/mapper'
@Injectable()
export class AuthService {
    constructor(
        @Inject('AUTH_RESPOSITORY')
        private authRespository: Repository<Users>,
    ) { }
    async create(registrationUserDto: RegistrationUserDto) {
        const user = this.authRespository.create(registrationUserDto);
        try {
            await user.save();
            delete user.password;
            return {
                success: true,
                message: 'Successfully updated status',
                data: user
            };
        } catch (err) {
            return {
                success: false,
                message: 'Failed create user',
            };
        }

    }

    async findByLogin({ username, password }: LoginUserDto) {
        const user = await this.authRespository.findOne({ where: { username } });

        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }

        // compare passwords    
        const areEqual = await comparePasswords(password, user.password);

        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return toUserDto(user);
    }
}
