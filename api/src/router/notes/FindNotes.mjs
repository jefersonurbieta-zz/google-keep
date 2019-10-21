import express from 'express'
import {Responder} from '@codate/commons'
import {authorization} from '../../middleware'
import findNotes from '../../usecase/notes/FindNotes'
import Token from '../../commons/utils/Token'

const permissions = []

const router = express.Router()
router.get('/notes', authorization(permissions), (req, res, next) => {
    const authenticationData = Token.verify(req.headers.authorization)
    const userId = authenticationData.id
    findNotes.execute({userId}, new Responder(req, res, next))
})

export default router
