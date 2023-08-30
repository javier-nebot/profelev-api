import { ApiProperty } from "@nestjs/swagger";
import { Localisation } from "@prisma/client";

export class LocalisationEntity implements Localisation {
    @ApiProperty()
    id: number;

    @ApiProperty()
    adresse: string;

    @ApiProperty()
    ville: string;

    @ApiProperty()
    departement: string;

    @ApiProperty()
    codePostal: string;

    @ApiProperty()
    lat: number;

    @ApiProperty()
    long: number;

    @ApiProperty({ required: false, nullable: true })
    idTuteur: number | null;

    @ApiProperty({ required: false, nullable: true })
    idProf: number | null;
}
