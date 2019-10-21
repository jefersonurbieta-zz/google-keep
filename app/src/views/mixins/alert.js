import {mutationTypes, defaultNotifications} from '@/core/constants'

export default {
    methods: {
        showError(error) {
            console.log(error)
            // this.$store.commit(mutationTypes.LOKI.SHOW_ALERT, {
            //     message: error,
            //     type: 'error'
            // })
        },
        mostrarNotificacaoErro(error) {
            // this.$store.commit(mutationTypes.LOKI.SHOW_ALERT, {
            //     message: error,
            //     type: 'error'
            // })
        },
        mostrarNotificacaoSucesso(message = defaultNotifications.SUCESSO_DEFAULT) {
            // this.$store.commit(mutationTypes.LOKI.SHOW_ALERT, {
            //     message: message,
            //     type: 'success'
            // })
        }
    }
}
