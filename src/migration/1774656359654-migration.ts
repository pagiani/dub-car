import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1774656359654 implements MigrationInterface {
    name = 'Migration1774656359654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "Usuario" (
                "Id" SERIAL NOT NULL,
                "Login" character varying NOT NULL,
                "Senha" character varying NOT NULL,
                "Nome" character varying NOT NULL,
                "CriadoEm" TIMESTAMP NOT NULL,
                "DeletadoEm" TIMESTAMP,
                CONSTRAINT "PK_Usuario" PRIMARY KEY ("Id")
            );
        `);

        await queryRunner.query(`
            CREATE TABLE "Veiculo" (
                "Id" SERIAL NOT NULL,
                "IdComprador" integer,
                "IdVendedor" integer NOT NULL,
                "Valor" numeric NOT NULL,
                "Descricao" character varying NOT NULL,
                "Modelo" character varying NOT NULL,
                "Ano" integer NOT NULL,
                "Cor" character varying NOT NULL,
                "Marca" character varying NOT NULL,
                "Motorização" character varying NOT NULL,
                "Quilometragem" integer NOT NULL,
                "VendidoEm" TIMESTAMP,
                "CriadoEm" TIMESTAMP NOT NULL,
                "DeletadoEm" TIMESTAMP,
                CONSTRAINT "PK_Veiculo" PRIMARY KEY ("Id"),
                CONSTRAINT "FK_Veiculo_Comprador" FOREIGN KEY ("IdComprador") REFERENCES "Usuario"("Id"),
                CONSTRAINT "FK_Veiculo_Vendedor" FOREIGN KEY ("IdVendedor") REFERENCES "Usuario"("Id")
            );
        `);

        await queryRunner.query(`
            CREATE TABLE "Imagem" (
                "Id" SERIAL NOT NULL,
                "IdVeiculo" integer NOT NULL,
                "Conteudo" bytea NOT NULL,
                "DeletadoEm" TIMESTAMP,
                "CriadoEm" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_Imagem" PRIMARY KEY ("Id"),
                CONSTRAINT "FK_Imagem_Veiculo" FOREIGN KEY ("IdVeiculo") REFERENCES "Veiculo"("Id")
            );
        `);

        await queryRunner.query(`
            CREATE TABLE "Mensagem" (
                "Id" SERIAL NOT NULL,
                "Mensagem" character varying NOT NULL,
                "IdRemetente" integer NOT NULL,
                "IdDestinatario" integer NOT NULL,
                "IdVeiculo" integer NOT NULL,
                "CriadoEm" TIMESTAMP NOT NULL,
                CONSTRAINT "PK_Mensagem" PRIMARY KEY ("Id"),
                CONSTRAINT "FK_Mensagem_Remetente" FOREIGN KEY ("IdRemetente") REFERENCES "Usuario"("Id"),
                CONSTRAINT "FK_Mensagem_Destinatario" FOREIGN KEY ("IdDestinatario") REFERENCES "Usuario"("Id"),
                CONSTRAINT "FK_Mensagem_Veiculo" FOREIGN KEY ("IdVeiculo") REFERENCES "Veiculo"("Id")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "Mensagem";
        `);

        await queryRunner.query(`
            DROP TABLE "Imagem";
        `);

        await queryRunner.query(`
            DROP TABLE "Veiculo";
        `);

        await queryRunner.query(`
            DROP TABLE "Usuario";
        `);
    }
}
