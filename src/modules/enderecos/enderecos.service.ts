import { Injectable, Inject } from '@nestjs/common';
import { ENDERECO_REPOSITORY } from 'src/core/constants';
import { Endereco } from './endereco.model';
import { EnderecoDTO } from './dto/endereco.dto';

@Injectable()
export class EnderecosService {
    constructor(@Inject(ENDERECO_REPOSITORY) private readonly enderecoRepository: typeof Endereco) {}

    async all(): Promise<Endereco[]> {
        return await this.enderecoRepository.findAll<Endereco>();
    }

    async store(endereco: EnderecoDTO): Promise<Endereco> {
        return await this.enderecoRepository.create<Endereco>(endereco);
    }

    async show(id: string): Promise<Endereco> {
        return await this.enderecoRepository.findOne<Endereco>({ where: { id } });
    }

    async showByCep(cep: string): Promise<Endereco> {
        return await this.enderecoRepository.findOne<Endereco>({ where: { cep } });
    }

    async update(id, endereco) {
        const [numberOfAffectedRows, [updatedEndereco]] = await this.enderecoRepository.update(
            { ...endereco },
            {
                where: { id },
                returning: true
            }
        );

        return { numberOfAffectedRows, updatedEndereco }
    }

    async delete(id: string) {
        return await this.enderecoRepository.destroy({ where: { id }});
    }
}
