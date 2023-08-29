import { ApiProperty } from "@nestjs/swagger";

export class CreateProfDto {
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
