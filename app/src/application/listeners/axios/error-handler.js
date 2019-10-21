import location from './location'
import {mutationTypes} from '@/core/constants'
import {geterror} from '@/core/utils'
import i18n from '@/core/i18n'
import store from '@/core/store'

function isDisconnected(error) {
    return error.response
}

function isStatusCode(error, code) {
    return error.response.status === code
}

function handleDisconnected() {
    handleDefault('ERRO_SEM_CONEXAO_INTERNET')
}

function handleStatusCode500(error) {
    const message = geterror(error)
    handleDefault(message)
}

function handleStatusCode401() {
    handleDefault('ERRO_PERDA_SESSAO')
    location.reload()
}

function handleStatusCode404(error) {
    handleStatusCode500(error)
    location.redirect('/')
}

function handleDefault(key) {
    const fullkey = `exceptions.${key}`
    const translatedMessage = i18n.t(fullkey)
    // store.commit(mutationTypes.LOKI.SHOW_ALERT, {
    //     message: translatedMessage,
    //     type: 'error'
    // })
}

class ErrorHandler {

    requestOrResponse(error) {
        if (isDisconnected(error)) {
            handleDisconnected()

        } else if (isStatusCode(error, 401)) {
            handleStatusCode401()

        } else if (isStatusCode(error, 404)) {
            handleStatusCode404(error)

        } else if (isStatusCode(error, 500)) {
            handleStatusCode500(error)

        } else {
            handleDefault('ERRO_DEFAULT')
        }

        return Promise.reject(error)
    }
}

export default new ErrorHandler()

