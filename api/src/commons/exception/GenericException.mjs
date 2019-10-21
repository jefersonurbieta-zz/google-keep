export default class GenericException extends Error {
    constructor (message) {
        super(message)
        this.message = message
        this.exception = {
            ignorarNotificacaoDefault: true
        }
    }
}
