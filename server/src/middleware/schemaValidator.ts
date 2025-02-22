import type { Request, Response, NextFunction } from 'express'
import { z } from 'zod'

export const schemaValidator = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: error.errors.map((err) => err.message)
            })
        }
        next(error)
    }

}