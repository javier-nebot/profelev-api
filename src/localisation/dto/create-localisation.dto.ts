import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsLatitude, IsLongitude, IsNotEmpty, IsPostalCode, IsString, MaxLength, MinLength } from "class-validator";

export class CreateLocalisationDto {
    @IsNotEmpty()
    @ApiProperty()
    adresse: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    ville: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    departement: string;

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(5)
    @IsAlphanumeric()
    @IsPostalCode('FR')
    @ApiProperty()
    codePostal: string;

    @IsLatitude()
    @ApiProperty()
    lat: number;

    @IsLongitude()
    @ApiProperty()
    long: number;

    @ApiProperty({ required: false })
    idTuteur: number | null;

    @ApiProperty({ required: false })
    idProf: number | null;
}
