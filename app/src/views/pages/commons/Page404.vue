<template>
    <container>
        <v-card>
            <headerbar></headerbar>
            <v-container>
                <titlebar title="Esta página não existe."/>
            </v-container>
            <footerbar target="home"/>
        </v-card>
    </container>
</template>

<script>
    import Container from './Container'
    import Headerbar from './Headerbar'
    import Footerbar from './Footerbar'
    import Titlebar from './Titlebar'

    export default {
        name: 'Page404',
        components: {Footerbar, Container, Headerbar, Titlebar}
    }
</script>
