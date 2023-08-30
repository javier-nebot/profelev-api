import { ApiProperty } from "@nestjs/swagger";
import { Eleve } from "@prisma/client";
import { TuteurEntity } from "src/tuteur/entities/tuteur.entity";

export class EleveEntity implements Eleve {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nom: string;

    @ApiProperty()
    prenom: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    idTuteur: number;

    @ApiProperty({ type: TuteurEntity})
    tuteur: TuteurEntity;

    constructor({ tuteur, ...data }: Partial<EleveEntity>) {
        Object.assign(this, data);

        if (tuteur) {
            this.tuteur = new TuteurEntity(tuteur);
        }
    }
}
