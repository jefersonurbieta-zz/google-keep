import { apiClient } from './ApiClient'

class UserApiClient {
    constructor () {
        this.RESOUCE_URL = 'api/auth'
    }

    async register (userData) {
        return await apiClient.post(`${this.RESOUCE_URL}/register`, userData)
    }

    async login (credencials) {
        const requestData = {
            email: credencials.email,
            password: credencials.password
        }

        return await apiClient.post(`${this.RESOUCE_URL}/login`, requestData)
    }

    async forgetPassword (email) {
        return await apiClient.post(`${this.RESOUCE_URL}/password/${email}`)
    }

    async confirmEmail (emailConfirmedToken) {
        return await apiClient.get(`api/auth/confirm/${emailConfirmedToken}`)
    }

    async updatePassword (credencials) {
        return await apiClient.put(`${this.RESOUCE_URL}/password`, credencials)
    }

    async profile (token) {
        if (token) {
            return await apiClient.get(`${this.RESOUCE_URL}/verify/${token}`)
        }
    }
}

export default new UserApiClient()
