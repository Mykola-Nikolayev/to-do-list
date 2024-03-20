import { type Response } from 'express'
import jwt from 'jsonwebtoken'

export class IsConnectedMiddleware {
    execute(req: any, res: Response, next: any) {
        try {
            const authToken = req.headers.authorization?.split(' ')[1]

            if(!authToken) {
                res.status(401).send({
                    error: 'No token'
                })
                return
            }

            const jwtSecret = process.env.JWT_SECRET

            if(!jwtSecret) {
                res.status(500).send('jwt secret is not defined')
                return
            }

            req.user = jwt.verify(authToken, jwtSecret)

            next()
        } catch (error: any) {
            console.error(error)
            res.status(401).send({error: error.message})
        }
    }
}
