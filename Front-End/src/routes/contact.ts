import { Router } from "express";
import { validate } from "../middlewares/validate";
import { contactSchema } from "../schemas/contactSchema";
import { contactLimiter } from "../middlewares/rateLimit";

const router = Router();

router.post(
    "/contact",
    contactLimiter,
    validate(contactSchema),
    async (req, res) => {
        return res.status(200).json({
            message: "Mensagem enviada"
        });
    }
);

export default router;