import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

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

    @IsNumber()
    @ApiProperty()
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

    @ApiProperty({ required: false })
    idLocalisation: number;

}
