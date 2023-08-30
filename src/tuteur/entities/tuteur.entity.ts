import { ApiProperty } from "@nestjs/swagger";
import { Tuteur } from "@prisma/client";
import { Exclude } from "class-transformer";

export class  TuteurEntity implements Tuteur {
    constructor(partial: Partial<TuteurEntity>) {
        Object.assign(this, partial);
    }

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

    @Exclude()
    password: string;

    @ApiProperty()
    relationEleve: string;

    @ApiProperty()
    idLocalisation: number;
}
