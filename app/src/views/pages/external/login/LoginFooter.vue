<template>
    <div class="grey--text text--darken-1 body-1 font-weight-regular mb-4 pa-7 pt-0 pb-0">
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-left">
                <router-link class="grey--text text--darken-3 discreet-link" to="forget-password">{{ $t('login.forgetPassword') }}</router-link>
            </v-flex>
            <v-flex xs12 sm6 class="text-right">
                <router-link class="grey--text text--darken-3 discreet-link" to="register">{{ $t('login.register') }}</router-link>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
    export default {
        name: 'login-footer'
    }
</script>
