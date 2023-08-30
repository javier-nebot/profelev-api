import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateProfDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nom: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    prenom: string;

    @IsNotEmpty()
    @ApiProperty()
    diplome: string;

    @ApiProperty({ required: false })
    age: number;

    
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

    @ApiProperty()
    idLocalisation: number;

}
