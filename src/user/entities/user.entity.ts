import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', unique: true })
  email: string;

  @Column({ name: 'cpf', unique: true, nullable: false })
  cpf: string;

  @Column({ name: 'phone', nullable: false })
  phone: string;

  @Column({ name: 'password', nullable: false })
  password: string;
}
