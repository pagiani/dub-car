import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entity/usuario.entity"
import { Imagem } from "./entity/imagem.entity"
import { Mensagem } from "./entity/mensagem.entity"
import { Veiculo } from "./entity/veiculo.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Usuario, Imagem, Mensagem, Veiculo],
    migrations: [],
    subscribers: [],
})
