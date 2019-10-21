import { apiClient } from './ApiClient'

class UserApiClient {
    constructor () {
        this.RESOUCE_URL = 'api/notes'
    }

    async find () {
        return await apiClient.get(`${this.RESOUCE_URL}`)
    }

    async add (note) {
        return await apiClient.post(`${this.RESOUCE_URL}`, note)
    }

}

export default new UserApiClient()
