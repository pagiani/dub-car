import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1774656359654 implements MigrationInterface {
    name = 'Migration1774656359654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Usuario" ("Id" SERIAL NOT NULL, "Login" character varying NOT NULL, "Senha" character varying NOT NULL, "Nome" character varying NOT NULL, "CriadoEm" TIMESTAMP NOT NULL, "DeletadoEm" TIMESTAMP, CONSTRAINT "PK_63bb41c4f32013353061f32c561" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "Imagem" ("Id" SERIAL NOT NULL, "IdVeiculo" integer NOT NULL, "Conteudo" bytea NOT NULL, "DeletadoEm" TIMESTAMP, "CriadoEm" TIMESTAMP NOT NULL, CONSTRAINT "PK_3968c5207d49a5efdf750276b46" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "Mensagem" ("Id" SERIAL NOT NULL, "Mensagem" character varying NOT NULL, "IdRemetente" integer NOT NULL, "IdDestinatario" integer NOT NULL, "IdVeiculo" integer NOT NULL, "CriadoEm" TIMESTAMP NOT NULL, CONSTRAINT "PK_4efa8c4c9df0047f83b1ad19e7e" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "Veiculo" ("Id" SERIAL NOT NULL, "IdComprador" integer, "IdVendedor" integer NOT NULL, "Valor" numeric NOT NULL, "Descricao" character varying NOT NULL, "Modelo" character varying NOT NULL, "Ano" integer NOT NULL, "Cor" character varying NOT NULL, "Marca" character varying NOT NULL, "Motorização" character varying NOT NULL, "Quilometragem" integer NOT NULL, "VendidoEm" TIMESTAMP, "CriadoEm" TIMESTAMP NOT NULL, "DeletadoEm" TIMESTAMP, CONSTRAINT "PK_660a4f34378ba61ecb43aa549d5" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "Mensagem" ADD CONSTRAINT "FK_97149982209e9492bbcdadb345c" FOREIGN KEY ("IdRemetente") REFERENCES "Usuario"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Mensagem" DROP CONSTRAINT "FK_97149982209e9492bbcdadb345c"`);
        await queryRunner.query(`DROP TABLE "Veiculo"`);
        await queryRunner.query(`DROP TABLE "Mensagem"`);
        await queryRunner.query(`DROP TABLE "Imagem"`);
        await queryRunner.query(`DROP TABLE "Usuario"`);
    }

}
