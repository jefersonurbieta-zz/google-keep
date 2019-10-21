<template>
    <container>
        <v-card>
            <headerbar/>
            <update-password-form @submit="updatePassword"/>
            <footerbar target="login"/>
        </v-card>
    </container>
</template>

<script>
    import {actionTypes} from '@/core/constants'
    import Container from '../../commons/Container'
    import Headerbar from '../../commons/Headerbar'
    import Footerbar from '../../commons/Footerbar'
    import UpdatePasswordForm from './UpdatePasswordForm'

    export default {
        name: 'update-password',
        components: {Container, Headerbar, Footerbar, UpdatePasswordForm},
        methods: {
            async updatePassword(userData) {
                try {
                    await this.$store.dispatch(actionTypes.UPDATE_PASSWORD, userData)
                    this.redirectToConfirmation()
                } catch (err) {
                    this.showError(err)
                }
            },
            redirectToConfirmation() {
                this.$router.push({name: 'home'})
            }
        }
    }
</script>
