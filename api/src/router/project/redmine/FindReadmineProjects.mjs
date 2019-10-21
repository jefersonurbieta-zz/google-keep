import express from 'express'
import {Responder} from '@codate/commons'
import { authorization } from '../../../middleware'
import findReadmineProjects from '../../../usecase/project/redmine/FindReadmineProjects'
import Token from '../../../commons/utils/Token'

const permissions = []

const router = express.Router()
router.get('/project/redmine', authorization(permissions), (req, res, next) => {
    const authenticationData = Token.verify(req.headers.authorization)
    const userId = authenticationData.id
    findReadmineProjects.execute({userId}, new Responder(req, res, next))
})

export default router
