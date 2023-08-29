import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateMatiereDto {
    @IsString()
    @ApiProperty()
    matiere: string;

    @ApiProperty()
    cours:string;
}
