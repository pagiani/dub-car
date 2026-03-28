import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Relation, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('Mensagem')
export class Mensagem {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Mensagem', type: 'varchar' })
  mensagem: string;

  @Column({ name: 'IdRemetente', type: 'integer' })
  idRemetente: number;

  @Column({ name: 'IdDestinatario', type: 'integer' })
  idDestinatario: number;

  @Column({ name: 'IdVeiculo', type: 'integer' })
  idVeiculo: number;

  @Column({ name: 'CriadoEm', type: 'timestamp' })
  criadoEm: Date;

  @ManyToOne(()=>Usuario)
  @JoinColumn({name:"IdRemetente"})
  remetente: Relation<Usuario>
  
}
