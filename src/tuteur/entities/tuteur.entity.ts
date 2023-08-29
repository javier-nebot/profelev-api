import { ApiProperty } from "@nestjs/swagger";
import { Tuteur } from "@prisma/client";

export class  TuteurEntity implements Tuteur {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nom: string;

    @ApiProperty()
    prenom: string;

    @ApiProperty()
    telephone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    relationEleve: string;

    @ApiProperty()
    idLocalisation: number;
}
