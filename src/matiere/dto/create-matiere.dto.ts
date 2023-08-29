import { ApiProperty } from "@nestjs/swagger";

export class CreateMatiereDto {
    @ApiProperty()
    matiere: string;

    @ApiProperty()
    cours:string;
}
