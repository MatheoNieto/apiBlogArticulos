import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity()
export class Articulo {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!:string

  @Column()
  imagen!:string

  @Column()
  detalles!:string

  @Column()
  descripcion!:string

  @Column({default: true})
  active!: boolean;

  @CreateDateColumn({ type: 'timestamp'})
  createdAt!: Date

}