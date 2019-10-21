import { Responder } from '@codate/commons'
import express from 'express'
import Token from '../../commons/utils/Token'
import { authorization } from '../../middleware/index'
import saveUserSettings from '../../usecase/settings/SaveUserSettings'

const permissions = []

const router = express.Router()
router.post('/user/settings', authorization(permissions), (req, res, next) => {
    const authenticationData = Token.verify(req.headers.authorization)
    const userId = authenticationData.id
    const userSettings = req.body
    saveUserSettings.execute({ userId, userSettings }, new Responder(req, res, next))
})

export default router
