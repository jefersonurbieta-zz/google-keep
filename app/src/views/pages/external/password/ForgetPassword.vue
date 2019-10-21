<template>
    <container>
        <v-card>
            <headerbar/>
            <forget-password-form @submit="forgetPassword"/>
            <footerbar target="login"/>
        </v-card>
    </container>
</template>

<script>
    import {actionTypes} from '@/core/constants'
    import Container from '../../commons/Container'
    import Headerbar from '../../commons/Headerbar'
    import Footerbar from '../../commons/Footerbar'
    import ForgetPasswordForm from './ForgetPasswordForm'

    export default {
        name: 'forget-password',
        components: {Container, Headerbar, Footerbar, ForgetPasswordForm},
        methods: {
            async forgetPassword(email) {
                try {
                    await this.$store.dispatch(actionTypes.FORGET_PASSWORD, email)
                    this.redirectToConfirmation()
                } catch (err) {
                    this.showError(err)
                }
            },
            redirectToConfirmation() {
                this.$router.push({name: 'success', params: {action: 'FORGET_PASSWORD'}})
            }
        }
    }
</script>
