import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Imagem')
export class Imagem {
  @PrimaryGeneratedColumn("uuid", { name: 'Id' })
  id: string;

  @Column({ name: 'IdVeiculo', type: 'uuid' })
  idVeiculo: string;

  @Column({ name: 'Conteudo', type: 'bytea' })
  conteudo: Buffer;

  @Column({ name: 'DeletadoEm', type: 'timestamp', nullable: true })
  deletadoEm?: Date;

  @Column({ name: 'CriadoEm', type: 'timestamp' })
  criadoEm: Date;
}
