class Status {
    async execute (responder) {
        try {
            const status = {
                status: 'ok'
            }
            responder.success(status)
        } catch (e) {
            responder.error(e)
        }
    }
}

export default new Status()
