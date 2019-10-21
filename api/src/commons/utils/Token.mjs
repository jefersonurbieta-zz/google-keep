import jwt from 'jsonwebtoken'

const secret = process.env.AUTH_SECRET
const algorithm = 'HS256'

export default class Token {
    static create (payload) {
        return jwt.sign(payload, secret, { algorithm })
    }

    static verify (token) {
        return jwt.verify(token, secret, { algorithm })
    }
}
