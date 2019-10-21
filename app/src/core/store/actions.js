import { tokenApiClient, userApiClient } from '@/core/apiclient'
import { actionTypes, mutationTypes } from '@/core/constants'
import axios from 'axios'

export default {

    [actionTypes.ADD_TOKEN] (context, token) {
        tokenApiClient.saveToken(token)
    },

    [actionTypes.REMOVE_TOKEN] () {
        tokenApiClient.removeToken()
    },

    async [actionTypes.AFTER_LOGIN] ({ dispatch, commit }, data) {
        dispatch(actionTypes.ADD_TOKEN, data.token)
        commit(mutationTypes.SET_TOKEN, data.token)
        commit(mutationTypes.SET_LOGGED_USER, data.payload)
    },

    async [actionTypes.CONFIRM_EMAIL] ({ dispatch }, emailConfirmedToken) {
        const { data } = await userApiClient.confirmEmail(emailConfirmedToken)
        await dispatch(actionTypes.AFTER_LOGIN, data)
    },

    async [actionTypes.FORGET_PASSWORD] (context, email) {
        const { data } = await userApiClient.forgetPassword(email)
        return data
    },

    async [actionTypes.LOGIN] ({ dispatch }, credencials) {
        const { data } = await userApiClient.login(credencials)
        await dispatch(actionTypes.AFTER_LOGIN, data)
    },

    async [actionTypes.LOGOUT] ({ dispatch, commit }) {
        dispatch(actionTypes.REMOVE_TOKEN)
        commit(mutationTypes.SET_TOKEN, '')
        commit(mutationTypes.SET_LOGGED_USER, '')
    },

    async [actionTypes.REGISTER] (context, userData) {
        const { data } = await userApiClient.register(userData)
        return data
    },

    async [actionTypes.UPDATE_PASSWORD] ({ dispatch }, credencials) {
        const { data } = await userApiClient.updatePassword(credencials)
        await dispatch(actionTypes.AFTER_LOGIN, data)
    },

    async [actionTypes.VERIFY_TOKEN] ({ commit }) {
        if(tokenApiClient.existToken()) {
            const { data } = await userApiClient.profile(tokenApiClient.getToken())
            commit(mutationTypes.SET_TOKEN, tokenApiClient.getToken())
            commit(mutationTypes.SET_LOGGED_USER, data)
            return data
        }
    },

    async  [actionTypes.UPLOAD_FILE] ({commit, state}, {filename, formData}) {

        const hashName = filename + (new Date()).getTime()
        commit(mutationTypes.SET_UPLOAD_FILE_PROGRESS, {hashName, filename, progress: 0})

        const onUploadProgress = (progressEvent) => {
            const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
            commit(mutationTypes.SET_UPLOAD_FILE_PROGRESS, {hashName, filename, progress})
        }
        const options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: onUploadProgress
        }

        try {
            const {data} = await axios.post(state.file.api, formData, options)
            data.name = filename
            commit(mutationTypes.REMOVE_UPLOAD_FILE_PROGRESS, hashName)
            commit(mutationTypes.ADD_UPLOADED_FILE, Object.assign({}, data, {status: 'success'}))
            return data
        } catch (e) {
            commit(mutationTypes.SET_UPLOAD_FILE_PROGRESS_ERROR, hashName)
        }
    },

    async [actionTypes.ADD_POST] ({ commit }, P) {
        if(tokenApiClient.existToken()) {
            const { data } = await userApiClient.profile(tokenApiClient.getToken())
            commit(mutationTypes.SET_TOKEN, tokenApiClient.getToken())
            commit(mutationTypes.SET_LOGGED_USER, data)
            return data
        }
    },
}
