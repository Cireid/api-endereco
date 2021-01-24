import { Controller, Get, Param, NotFoundException, Post, Body, Put, Delete } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { Endereco } from './endereco.model';
import { EnderecoDTO } from './dto/endereco.dto';

@Controller('enderecos')
export class EnderecosController {
    constructor(private readonly enderecoService: EnderecosService) {}

    @Get('todos')
    async all() {
        return await this.enderecoService.all();
    }

    @Post('guardar')
    async store(@Body() endereco: EnderecoDTO): Promise<Endereco> {
        return await this.enderecoService.store(endereco)
    }

    @Get('mostrar/:id')
    async show(@Param('id') id: string): Promise<Endereco> {
        const endereco = await this.enderecoService.show(id);

        if (!endereco){ 
            throw new NotFoundException('Endereço não encontrado');
        }
        return endereco;
    }

    @Get('mostrar/cep/:cep')
    async showByCep(@Param('cep') cep: string): Promise<Endereco> {
        const endereco = await this.enderecoService.showByCep(cep);

        if (!endereco) {
            throw new NotFoundException('Endereço não encontrado');
        }
        return endereco;
    }

    @Put('editar/:id')
    async update(@Param('id') id: string, @Body() endereco: EnderecoDTO): Promise<Endereco> {
        const { numberOfAffectedRows, updatedEndereco } = await this.enderecoService.update(id, endereco);
        
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException("Endereço não encontrado");
        }
        return updatedEndereco;
    }

    @Delete('apagar/:id')
    async delete(@Param('id') id: string) {
        const deleted = await this.enderecoService.delete(id);

        if (deleted === 0) {
            throw new NotFoundException('Endereco não encontrado');
        }
        return { message: 'Excluído com sucesso' };
    }
}
