import { ApiProperty } from "@nestjs/swagger";
import { Matiere } from "@prisma/client";

export class MatiereEntity implements Matiere {
    @ApiProperty()
    id: number;

    @ApiProperty()
    matiere: string;

    @ApiProperty()
    cours: string;
}
