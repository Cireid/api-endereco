import { Endereco } from './endereco.model';
import { ENDERECO_REPOSITORY } from '../../core/constants';

export const enderecosProviders = [{
    provide: ENDERECO_REPOSITORY,
    useValue: Endereco
}];