import { IsEmpty, IsNotEmpty } from 'class-validator';

export class EnderecoDTO {
    @IsNotEmpty()
    readonly logradouro: string;

    @IsNotEmpty()
    readonly logradouro_tipo: string;

    @IsNotEmpty()
    readonly numero: string;

    @IsEmpty()
    readonly complement: string;

    @IsNotEmpty()
    readonly cep: string;

    @IsNotEmpty()
    readonly bairro: string;

    @IsNotEmpty()
    readonly cidade: string;

    @IsNotEmpty()
    readonly estado: string;

    @IsNotEmpty()
    readonly latitude: string;

    @IsNotEmpty()
    readonly longitude: string;
}