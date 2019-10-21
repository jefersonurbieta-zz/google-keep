import '@babel/polyfill'
import '@/plugins'
import '@/views/filters'
import '@/views/mixins'

class Register {

    registerAll() {
        console.log('Todas as libs foram carregadas e registradas no Vuejs')
    }
}

export default new Register()
