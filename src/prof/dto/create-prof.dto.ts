import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class CreateProfDto {
    
    @IsNotEmpty()
    @ApiProperty()
    nom: string;

    
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
