import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Endereco extends Model<Endereco> {
    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    logradouro: string;

    @Column({
        type:DataType.STRING,
        allowNull: false
    })
    logradouro_tipo: string;
    

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    numero: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    complemento: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    cep: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    bairro: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    cidade: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    estado: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    latitude: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    longitude: string

}