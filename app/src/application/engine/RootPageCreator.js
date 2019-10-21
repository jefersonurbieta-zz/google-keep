import Vue from 'vue'
import RootPage from '@/views/pages/RootPage.vue'
import router from '@/views/routers'
import store from '@/core/store'
import i18n from '@/core/i18n'
import vuetify from '@/plugins/vuetify'

class RootPageCreator {

    createInstance() {
        new Vue({
            i18n,
            vuetify,
            router,
            store,
            render: h => h(RootPage)
        }).$mount('#app')
    }

    createBootstrapError() {
        new Vue({
            el: '#app',
            render(createElement) {
                return createElement('h2', 'Ocorreu um erro na inicialização desta aplicação.');
            }
        })
    }
}

export default new RootPageCreator()
