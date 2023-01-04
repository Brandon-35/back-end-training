import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNumber, IsString } from "class-validator";

export class UpdateStatusDto {

    @ApiProperty()
    @IsString()
    id:string;

    @ApiProperty()
    @IsNumber()
    status: number;
}
