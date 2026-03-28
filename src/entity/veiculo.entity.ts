import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Veiculo')
export class Veiculo {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'IdComprador', type: 'integer', nullable: true })
  idComprador?: number;

  @Column({ name: 'IdVendedor', type: 'integer' })
  idVendedor: number;

  @Column({ name: 'Valor', type: 'decimal' })
  valor: number;

  @Column({ name: 'Descricao', type: 'varchar' })
  descricao: string;

  @Column({ name: 'Modelo', type: 'varchar' })
  modelo: string;

  @Column({ name: 'Ano', type: 'integer' })
  ano: number;

  @Column({ name: 'Cor', type: 'varchar' })
  cor: string;

  @Column({ name: 'Marca', type: 'varchar' })
  marca: string;

  @Column({ name: 'Motorização', type: 'varchar' })
  motorizacao: string;

  @Column({ name: 'Quilometragem', type: 'integer' })
  quilometragem: number;

  @Column({ name: 'VendidoEm', type: 'timestamp', nullable: true })
  vendidoEm?: Date;

  @Column({ name: 'CriadoEm', type: 'timestamp' })
  criadoEm: Date;

  @Column({ name: 'DeletadoEm', type: 'timestamp', nullable: true })
  deletadoEm?: Date;
}
