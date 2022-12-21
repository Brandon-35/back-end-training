import { Expose, Transform } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";
import { BaseDto } from "src/common/base.dto";

export class UserDto extends BaseDto {

    @IsNotEmpty()
    @Expose()
    username: string;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
    fullName: string;

    @IsNotEmpty()
    @Expose()
    @Length(5, 10)
    password: string;
}