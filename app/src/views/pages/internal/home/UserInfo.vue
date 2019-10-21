<template>
    <v-list-item class="user-info">
        <v-list-item-avatar class="user-info-avatar" height="45" width="45" min-width="45">
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title>{{$store.state.user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{$store.state.user.fullName}}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        name: 'UserInfo'
    }
</script>

<style lang="stylus">
    .user-info
        .user-info-avatar
            margin-right 10px !important
</style>
