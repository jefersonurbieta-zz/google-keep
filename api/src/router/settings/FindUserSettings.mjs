import express from 'express'
import {Responder} from '@codate/commons'
import { authorization } from '../../middleware/index'
import findUserSettings from '../../usecase/settings/FindUserSettings'
import Token from '../../commons/utils/Token'

const permissions = []

const router = express.Router()
router.get('/user/settings', authorization(permissions), (req, res, next) => {
    const authenticationData = Token.verify(req.headers.authorization)
    const userId = authenticationData.id
    findUserSettings.execute({userId}, new Responder(req, res, next))
})

export default router
