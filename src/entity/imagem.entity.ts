import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Imagem')
export class Imagem {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'IdVeiculo', type: 'integer' })
  idVeiculo: number;

  @Column({ name: 'Conteudo', type: 'bytea' })
  conteudo: Buffer;

  @Column({ name: 'DeletadoEm', type: 'timestamp', nullable: true })
  deletadoEm?: Date;

  @Column({ name: 'CriadoEm', type: 'timestamp' })
  criadoEm: Date;
}
