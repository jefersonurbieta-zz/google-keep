import { logger } from '@codate/commons'
import http from 'http'
import moment from 'moment-timezone'
import mm from 'mongodb-migrations'
import mongoose from 'mongoose'

export default class Server {
    constructor (app) {
        this.app = app
    }

    async start () {
        this.setupServerTimezone()
        this.registerGlobalEvents()
        await this.connectDb()
        await this.migrationDb()
        return await this.startApp()
    }

    setupServerTimezone () {
        moment.tz.setDefault('America/Sao_Paulo')
    }

    registerGlobalEvents () {
        process.on('unhandledRejection', (reason, p) => {
            throw reason
        })
        process.on('uncaughtException', (error) => {
            logger.error('Error not handled %s', error)
            process.exit(1)
        })
    }

    async connectDb () {
        mongoose.Promise = global.Promise
        const options = {
            autoIndex: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 3,
            bufferMaxEntries: 0
        }
        return mongoose.connect(process.env.DB_URL, options)
    }

    async migrationDb () {
        return new Promise((resolve, reject) => {
            const migrator = new mm.Migrator({ url: process.env.DB_URL })

            const directory = `${process.cwd()}/src/migrations`

            migrator.runFromDir(directory, (err, results) => {
                if (err) return reject(err)
                logger.info('As scripts de migration foram executadas com sucesso')
                return resolve(results)
            })
        })
    }

    async startApp () {
        return new Promise((resolve, reject) => {
            try {
                const serverOn = http.createServer(this.app).listen(process.env.PORT, () => {
                    logger.info('Server started on port %s', process.env.PORT)
                    resolve(serverOn)
                })
            } catch (err) {
                logger.error('Error on starting server %s', err)
                reject(err)
            }
        })
    }
}
