import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/core/i18n'

Vue.use(Vuetify)

export default new Vuetify({
    lang: {
        t: (key, ...params) => i18n.t(key, params)
    },
    theme: {
        primary: '#3b5bfd',
        secondary: '#ed8732'
    },
    icons: {
        iconfont: 'fa'
    },
    options: {
        customProperties: true
    }
})
