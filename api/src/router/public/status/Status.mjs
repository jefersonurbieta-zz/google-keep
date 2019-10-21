import express from 'express'
import { Responder } from '@codate/commons'
import status from '../../../usecase/public/status/Status'

const router = express.Router()
router.get('/public/status', (req, res, next) => {
    status.execute(new Responder(req, res, next))
})

export default router
