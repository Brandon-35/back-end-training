import { IsNumber, IsString } from "class-validator";

export class RegistrationUserDto {

    @IsString()
    username: string;

    @IsNumber()
    status: number;

    @IsString()
    password: number;
}
