import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity
} from 'typeorm'

@Entity()
export class User extends  BaseEntity{

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombres!:string

  @Column()
  usuario!:string

  @Column()
  password!:string

  @Column({default: true})
  activo!: boolean;

  @CreateDateColumn({ type: 'timestamp'})
  createdAt!: Date

}