import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class RegistrationUserDto {

    @ApiProperty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsString()
    fullname: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    describe_yourself: string;

    @ApiProperty()
    @IsString()
    birthday: string;
    
    @ApiProperty()
    @IsNumber()
    status: number;

    @ApiProperty()
    @IsString()
    password: string;
}
