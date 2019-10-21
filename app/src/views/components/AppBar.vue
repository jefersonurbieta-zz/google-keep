<template>
    <v-app-bar
        color="white"
        flat
        fixed
        class="app-bar"
        app>

        <v-btn icon>
            <v-icon>fab fa-instagram</v-icon>
        </v-btn>
        |
        <v-toolbar-title>Vuestagram</v-toolbar-title>

        <v-spacer/>

        <v-text-field
            class="search-input"
            outlined
            hide-details
            placeholder="Busca"/>
        <v-spacer/>

        <v-btn icon>
            <v-icon>far fa-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>far fa-user</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'download-link'
    }
</script>

<style lang="stylus">
    .v-application
        .white
            border-color #ccc !important
    .app-bar
        border-bottom 1px solid #ccc !important

        .v-toolbar__title
            padding-left 10px!important

        .search-input
            height 40px
            .v-text-field__slot, fieldset
                height 40px

</style>
