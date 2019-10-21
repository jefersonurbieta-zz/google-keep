<template>
    <v-app-bar
        color="white"
        flat
        clipped-left
        class="app-bar"
        app>

        <v-app-bar-nav-icon @click="toggleAside"></v-app-bar-nav-icon>

        <img src="/img/main-logo.svg" width="30px"/>
        <span class="title ml-3 mr-5">Keep</span>
        <v-text-field
            class="search-input"
            solo-inverted
            flat
            hide-details
            label="Search"
            prepend-inner-icon="search"
        ></v-text-field>
        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>far fa-user</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    import {mutationTypes} from "../../core/constants";

    export default {
        name: 'app-bar',
        methods: {
            toggleAside() {
                this.$store.commit(mutationTypes.TOGGLE_ASIDE, !this.$store.state.asideOpen)
            }
        }
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

</style>
