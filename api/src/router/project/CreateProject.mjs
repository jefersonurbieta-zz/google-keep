import { Responder } from '@codate/commons'
import express from 'express'
import Token from '../../commons/utils/Token'
import { authorization } from '../../middleware'
import createProject from '../../usecase/project/CreateProject'

const permissions = []

const router = express.Router()
router.post('/project', authorization(permissions), (req, res, next) => {
    const authenticationData = Token.verify(req.headers.authorization)
    const userId = authenticationData.id
    const project = req.body
    createProject.execute({ userId, project }, new Responder(req, res, next))
})

export default router
