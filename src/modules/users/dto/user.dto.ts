import { IsNotEmpty, MinLength, IsEmail, IsEmpty } from 'class-validator';

export class UserDTO {
    @IsNotEmpty()
    readonly nome: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(8)
    readonly senha: string;

    @IsEmpty()
    readonly genero: string;
}