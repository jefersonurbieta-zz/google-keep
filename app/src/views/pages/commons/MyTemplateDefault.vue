<template>
    <v-app class="my-template-default">
        <app-bar/>
        <v-content>
            <v-container class="app-container">
                <slot/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        components: {}
    }
</script>

<style lang="stylus">
    .app-container
        height 100%
        max-width 960px!important

    body
        background-color: #eee

    .application.theme--light
        background: unset !important

    .application--wrap
        min-height: unset !important


    html
        overflow-y: auto
</style>
