import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nome: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    genero: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    senha: string;
}