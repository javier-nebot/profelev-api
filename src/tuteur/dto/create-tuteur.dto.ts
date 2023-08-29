import { ApiProperty } from "@nestjs/swagger";

export class CreateTuteurDto {
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
