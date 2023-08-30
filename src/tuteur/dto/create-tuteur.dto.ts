import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateTuteurDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nom: string;

    @IsString()
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
