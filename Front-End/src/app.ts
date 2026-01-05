import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
cors({
  origin: ["http://localhost:5173", "https://portfolio-im1j.onrender.com"],
  methods: ["POST"],
});

// Impede a API de ser usada por sites aleatórios
