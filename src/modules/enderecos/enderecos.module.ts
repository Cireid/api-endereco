import { Module } from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { enderecosProviders } from './endereco.providers';
import { EnderecosController } from './enderecos.controller';

@Module({
  providers: [EnderecosService, ...enderecosProviders],
  controllers: [EnderecosController]
})
export class EnderecosModule {}
