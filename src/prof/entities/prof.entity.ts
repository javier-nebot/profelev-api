import { ApiProperty } from "@nestjs/swagger";
import { Prof } from "@prisma/client";
import { Exclude } from "class-transformer";

export class ProfEntity implements Prof {
    constructor(partial: Partial<ProfEntity>) {
        Object.assign(this, partial);
    }
    
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

    @Exclude()
    password: string;

    @ApiProperty()
    idLocalisation: number;
}
