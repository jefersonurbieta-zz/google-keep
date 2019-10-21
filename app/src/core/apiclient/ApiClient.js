import axios from 'axios'
import tokenApiClient from './TokenApiClient'

class ResponseError extends Error {
    constructor(status, message, errors) {
        super(message)
        this.status = status
        this.message = message
        this.errors = errors
    }
}

class ApiClient {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    }

    getHTTPClient() {
        if (tokenApiClient.getToken()) {
            axios.defaults.headers.common['Authorization'] = `${tokenApiClient.getToken()}`
        }

        return axios
    }

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `${tokenApiClient.getToken()}`
    }

    removeHeader() {
        axios.defaults.headers.common = {}
    }

    get(resource) {
        return this.getHTTPClient()
            .get(resource)
            .catch(error => {
                throw new ResponseError(error.response.status, error.response.data.message, error.response.data.errors)
            })
    }

    post(resource, data) {
        return this.getHTTPClient()
            .post(resource, data)
            .catch(error => {
                console.log(error)
                throw new ResponseError(error.response.status, error.response.data.message, error.response.data.errors)
            })
    }

    put(resource, data) {
        return this.getHTTPClient()
            .put(resource, data)
            .catch(error => {
                throw new ResponseError(error.response.status, error.response.data.message, error.response.data.errors)
            })
    }

    delete(resource) {
        return this.getHTTPClient()
            .delete(resource)
            .catch(error => {
                throw new ResponseError(error.response.status, error.response.data.message, error.response.data.errors)
            })
    }
}

export default new ApiClient()

const apiClient = new ApiClient()
export {apiClient, ResponseError}
