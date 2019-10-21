import { actionTypes } from '@/core/constants'
import store from '@/core/store'

class SearchLoggedUser {
    async execute () {
        try {
            return await store.dispatch(actionTypes.VERIFY_TOKEN)
        } catch (e) {
            await store.dispatch(actionTypes.LOGOUT)
        }
    }
}

export default new SearchLoggedUser()
