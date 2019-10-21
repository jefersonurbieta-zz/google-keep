import { Responder } from '@codate/commons'
import express from 'express'
import Token from '../../commons/utils/Token'
import { authorization } from '../../middleware'
import createNote from '../../usecase/notes/CreateNote'

const permissions = []

const router = express.Router()
router.post('/notes', authorization(permissions), (req, res, next) => {
    const authenticationData = Token.verify(req.headers.authorization)
    const userId = authenticationData.id
    const note = req.body
    createNote.execute({ userId, note }, new Responder(req, res, next))
})

export default router
