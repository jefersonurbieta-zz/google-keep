<template>
    <container>
        <v-card flat class="login-card border-default pa-5">
            <headerbar/>
            <login-form @submit="login"/>
            <login-footer/>
        </v-card>

        <login-invate/>
    </container>
</template>

<script>
    import { actionTypes } from '@/core/constants'
    import LoginInvate from '@/views/pages/external/login/LoginInvate'
    import Container from '../../commons/Container'
    import Headerbar from '../../commons/Headerbar'
    import LoginFooter from './LoginFooter'
    import LoginForm from './LoginForm'

    export default {
        components: {
            LoginInvate,
            Container,
            Headerbar,
            LoginFooter,
            LoginForm
        },
        mounted () {
            if (this.$route.query.lostSession) {
                this.showErrorFrontEnd('exceptions.ERRO_PERDA_SESSAO')
            }
        },
        methods: {
            async login (credentials) {
                try {
                    await this.$store.dispatch(actionTypes.LOGIN, credentials)
                    this.redirectToHome()
                } catch (err) {
                    this.showError(err)
                }
            },
            async redirectToHome () {
                if (this.$route.query.redirect) {
                    this.$router.push({ path: this.$route.query.redirect })
                } else {
                    this.$router.push({ name: 'home' })
                }
            }
        }
    }
</script>
