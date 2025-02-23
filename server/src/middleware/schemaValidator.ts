import type { Request, Response, NextFunction } from 'express';

export const schemaValidator = (schema: any) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const result = schema.safeParse(req.body);

        if (!result.success) {

            const errorMessage = result.error?.issues?.[0]?.message || 'Invalid data';
            res.status(400).json({ error: errorMessage });
        } else {
            next();
        }
    };
};
