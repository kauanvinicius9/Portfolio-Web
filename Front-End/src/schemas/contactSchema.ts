// ZOD: Usamos para validação de formulários + segurança
import { z } from "zod";

export const contactSchema = z.object({
    email: z
        .string()
        .email("Email inválido")
        .max(255),

    message: z
        .string()
        .min(5)
        .max(1000)
});

// Evita playload malicioso;
// Evita lixo no banco ou logs;
// Evita spam.