import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class CreateTuteurDto {
    @IsNotEmpty()
    @ApiProperty()
    nom: string;

    @IsNotEmpty()
    @ApiProperty()
    prenom: string;

    @IsNotEmpty()
    @IsPhoneNumber('FR')
    @ApiProperty()
    telephone: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string;

    @IsNotEmpty()
    @ApiProperty()
    password: string;

    @IsNotEmpty()
    @ApiProperty()
    relationEleve: string;

    @ApiProperty()
    idLocalisation: number;
}
