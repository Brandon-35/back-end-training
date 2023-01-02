import { IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
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
}
