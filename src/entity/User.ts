import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm'

@Entity()
export class User{

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