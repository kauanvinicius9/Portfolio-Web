import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { pool } from "./database";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-im1j.onrender.com"
    ],
    methods: ["POST"],
  })
);

// Teste de conexão com o Postgres
pool
  .connect()
  .then(() => console.log("PostgreSQL conectado"))
  .catch(err => console.error("Erro ao conectar no Postgres:", err));

  console.log(pool)
