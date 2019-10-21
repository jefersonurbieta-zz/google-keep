class TokenApiClient {

    constructor() {
        this.TOKEN_KEY = 'access_token'
    }

    getToken() {
        return sessionStorage.getItem(this.TOKEN_KEY)
    }

    existToken() {
        return sessionStorage.getItem(this.TOKEN_KEY) !== null && sessionStorage.getItem(this.TOKEN_KEY) !== ''
    }

    saveToken(accessToken) {
        sessionStorage.setItem(this.TOKEN_KEY, accessToken)
    }

    removeToken() {
        sessionStorage.removeItem(this.TOKEN_KEY)
    }
}

export default new TokenApiClient()
