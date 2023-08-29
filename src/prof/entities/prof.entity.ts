import { ApiProperty } from "@nestjs/swagger";
import { Prof } from "@prisma/client";

export class ProfEntity implements Prof {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nom: string;

    @ApiProperty()
    prenom: string;

    @ApiProperty()
    diplome: string;

    @ApiProperty({ required: false })
    age: number;

    @ApiProperty()
    telephone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    idLocalisation: number;
}
