import { Pool } from "pg";

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

});

pool.on("connect", () => {
  console.log("PostgreSQL conectado");

});

pool.on("error", (err) => {
  console.error("Erro no Postgres:", err);
  
});
