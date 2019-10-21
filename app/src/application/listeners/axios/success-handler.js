import {mutationTypes} from '@/core/constants'
import store from '@/core/store'

class SuccessHandler {
    request(config) {
        // store.commit(mutationTypes.LOKI.SET_GLOBAL_LOADING, true)
        return config
    }

    response(response) {
        // store.commit(mutationTypes.LOKI.SET_GLOBAL_LOADING, false)
        // store.commit(mutationTypes.LOKI.SET_LOADING_MESSAGE, store.state.defaultLoadingMessage)
        return response
    }
}

export default new SuccessHandler()
