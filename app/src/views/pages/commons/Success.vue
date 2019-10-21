<template>
    <container>
        <v-card>
            <headerbar></headerbar>
            <v-container>
                <titlebar :title="$t('success.title')"/>
                <div v-if="action == 'REGISTER'" class="grey--text text-xs-center text-md-center text-sm-center text-lg-center mt-3">
                    <p class="subheading">
                        {{$t('success.registerInstructions')}}
                    </p>
                </div>
                <div v-if="action == 'ESQUECEU_A_SENHA'" class="grey--text text-xs-center text-md-center text-sm-center text-lg-center mt-3">
                    <p class="subheading">
                        {{$t('success.forgetPasswordInstructions')}}
                    </p>
                </div>
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
        name: 'success',
        components: {Footerbar, Container, Headerbar, Titlebar},
        data() {
            return {
                action: 'REGISTER'
            }
        },
        created(){
            this.action = this.$route.params.action
        }
    }
</script>
