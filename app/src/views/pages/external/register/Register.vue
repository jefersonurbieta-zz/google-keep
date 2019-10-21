<template>
    <container>
        <v-card flat class="register-card border-default pa-5">
            <headerbar/>
            <register-form @submit="register"/>
        </v-card>
        <register-back/>
    </container>
</template>

<script>
    import {actionTypes} from '@/core/constants'
    import Container from "../../commons/Container"
    import Headerbar from "../../commons/Headerbar"
    import RegisterForm from "./RegisterForm"
    import RegisterBack from "./RegisterBack"

    export default {
        components: {Container, Headerbar, RegisterBack, RegisterForm},
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmation: '',
                submitted: false
            }
        },
        methods: {
            async register(userData) {
                try {
                    await this.$store.dispatch(actionTypes.REGISTER, userData)
                    this.redirectToConfirmation()
                } catch (err) {
                    this.showError(err)
                }
            },
            redirectToConfirmation() {
                this.$router.push({name: 'success', params: {action: 'REGISTER'}})
            }
        }
    }
</script>
