import type { Request, Response, NextFunction } from "express";
import { ZodType} from "zod";

export const validate =
    (schema: ZodType) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch {
            return res.status(400).json({
                error: "Dados inválidos"
            });
        }
    };