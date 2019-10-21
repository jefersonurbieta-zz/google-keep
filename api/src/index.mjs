import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import { generalError, joiError, mongoError, validationError } from '@codate/commons'
import { confirm, exists, forgetPassword, getUser, login, register, updatePassword, updateUser, verifyToken } from '@codate/auth'
import { createFile, getFile, removeFile } from '@codate/file'
import { sendEmail } from '@codate/email'

//  publico/proposta
import status from './router/public/status/Status'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

app.use('/api', createFile)
app.use('/api', getFile)
app.use('/api', removeFile)

app.use('/api', exists)
app.use('/api', register)
app.use('/api', confirm)
app.use('/api', login)
app.use('/api', updatePassword)
app.use('/api', verifyToken)
app.use('/api', createFile)
app.use('/api', getFile)
app.use('/api', removeFile)
app.use('/api', forgetPassword)
app.use('/api', getUser)
app.use('/api', updateUser)
app.use('/api', sendEmail)

//  publico/status
app.use('/api', status)

app.use(validationError)
app.use(joiError)
app.use(mongoError)
app.use(generalError)

export default app
