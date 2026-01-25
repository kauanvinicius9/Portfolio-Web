import { Router } from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";

const router = Router();

const contactLimit = rateLimit ({
    windowMs: 15 * 60 * 100,
    max: 5,
    message: { message: "Muitas tentativas. Tente novamente mais tarde." }
});

const contactSchema = z.object({
    name: z.string().min(3, "Nome muito curto"),
    email: z.string().email("Email inválido"),
    message: z.string().min(10, "Mensagem muito curta")
});

router.post("/contact", contactLimit, async (req, res) => {
    try {
        const vData = contactSchema.parse(req.body);

        // Processamento do envio de email
        return res.status(200).json({
            message: "Mensagem enviada",
            data: vData
        });

    } catch (error: any) {
        // Tratativa de erro do Zod
        if (error?.errors) {
            return res.status(400).json({
                message: "Dados inválidos",
                errors: error.errors
        });
    }

    // Erros internos/inesperados
    console.error("Erro interno no /contact:", error);
    return res.status(500).json({
        message: "Erro interno. Tente novamente mais tarde"
    });
   }
});

export default router;