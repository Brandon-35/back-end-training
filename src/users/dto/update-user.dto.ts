import { PartialType } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    username: string;

    @IsString()
    fullname: string;

    @IsString()
    address: string;

    @IsString()
    describe_yourself: string;

    @IsString()
    birthday: string;

    @IsNumber()
    status: number;
    
    @IsString()
    password: string;
}
