<template>
    <div class="text-xs-center text-sm-center text-md-center text-lg-center mb-4">
        OU
        <v-layout row wrap>
            <v-flex xs12>
                <router-link class="caption font-weight-regular grey--text text--darken-1" to="forget-password">{{ $t('login.forgetPassword') }}</router-link>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
    export default {
        name: 'login-footer'
    }
</script>
