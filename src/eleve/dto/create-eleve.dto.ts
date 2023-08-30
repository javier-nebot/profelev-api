import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEleveDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nom: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    prenom: string;

    @IsNotEmpty()
    @MaxLength(2)
    @MinLength(1)
    @ApiProperty()
    age: number;

    @IsNotEmpty()
    @ApiProperty()
    idTuteur: number;
}
