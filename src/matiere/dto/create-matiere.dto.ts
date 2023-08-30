import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMatiereDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    matiere: string;

    @IsNotEmpty()
    @ApiProperty()
    cours:string;
}
