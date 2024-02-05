import { ApiProperty } from "@nestjs/swagger";

export class CreateManagementDto {
    @ApiProperty({example: 'Gimnasio_23'})
    username: string;

    @ApiProperty({example: 'gym_93@gmail.com'})
    email: string;

    @ApiProperty({example: 'passwordFito'})
    password: string;

    @ApiProperty({example: 'Av.Antonio Ricaurte'})
    countLastSee: number;

}
