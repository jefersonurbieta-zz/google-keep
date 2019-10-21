<template>
    <v-card flat class="border-default mt-3 pa-2">
        <p class="grey--text text--darken-1 body-1 mt-3 font-weight-regular text-center">
            {{ $t('register.alreadyHaveAnAccount')}}
            <router-link class="grey--text text--darken-3 font-weight-bold discreet-link" to="login">{{ $t('register.inviteToLogin')}}</router-link>
        </p>
    </v-card>
</template>
<script>
    export default {
        name: 'login-invate'
    }
</script>
