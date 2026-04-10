import "reflect-metadata"
import { DataSource } from "typeorm"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.entity{.ts,.js}"],
    migrations: ["src/migration/*{.ts,.js}"],
    subscribers: [],
})
