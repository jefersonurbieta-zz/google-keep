import Vue from 'vue'
import {mutationTypes, product} from '@/core/constants'

export default {

    [mutationTypes.SET_LOGGED_USER](state, user) {
        const newUser = {
            id: user.id,
            name: user.email,
            fullName: user.name,
            photo: user.photo,
            source: user.source,
            isAdmin: user.isAdmin,
            authorities: [
                {name: 'admin', hasAccess: user.isAdmin},
                {name: 'participant', hasAccess: !user.isAdmin}
            ]
        }
        Vue.set(state, 'user', newUser)
    },

    [mutationTypes.SET_PRODUCT](state) {
        state.product = {}
        state.product.name = product.NAME
        state.product.mainLogo = product.MAIN_LOGO
        state.product.symbolLogo = product.SYMBOL_LOGO
        state.product.version = product.VERSION
        state.product.copywrite = product.COPYRIGHT
        state.product.logoutUrl = product.LOGOUT_URL
    },

    [mutationTypes.SET_TOKEN](state, token) {
        state.token = token
    },

    [mutationTypes.SET_UPLOAD_FILE_PROGRESS](state, uploadProgress) {
        Vue.set(state.uploadFileProgress, uploadProgress.hashName, {filename: uploadProgress.filename, progress: uploadProgress.progress})
    },

    [mutationTypes.SET_UPLOAD_FILE_PROGRESS_ERROR](state, filename) {
        const progress = state.uploadFileProgress[filename].progress
        Vue.set(state.uploadFileProgress, filename, {filename, progress, error: true})
    },

    [mutationTypes.REMOVE_UPLOAD_FILE_PROGRESS](state, filename) {
        Vue.delete(state.uploadFileProgress, filename)
    },

    [mutationTypes.ADD_UPLOADED_FILE](state, uploadedFile) {
        state.uploadedFiles.push(uploadedFile)
    },

    [mutationTypes.TOGGLE_ASIDE](state, open) {
        state.asideOpen = open
    },

    [mutationTypes.SET_NOTES](state, notes) {
        state.notes = notes
    },

    [mutationTypes.ADD_NOTE](state, note) {
        state.notes.unshift(note)
    },
}
