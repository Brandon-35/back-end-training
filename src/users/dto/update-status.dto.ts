import { IsEmpty, IsNumber, IsString } from "class-validator";

export class UpdateStatusDto {
    @IsString()
    id:string;

    @IsNumber()
    status: any;
}
