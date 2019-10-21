<template>
    <container>
        <v-card>
            <headerbar></headerbar>
            <v-container>
                <titlebar :title="$t('error.title')"/>
                <div class="grey--text text-xs-center text-md-center text-sm-center text-lg-center mt-3">
                    <p class="subheading" v-if="action == 'PARTICIPANT_WITHOUT_COMPANY'">
                        {{ $t('error.participantWithoutCompany') }}
                    </p>
                    <p class="subheading" v-if="action == 'COMPANY_INACTIVE'">
                        {{ $t('error.companyInactive') }}
                    </p>
                </div>
            </v-container>
        </v-card>
    </container>
</template>

<script>
    import Container from './Container'
    import Headerbar from './Headerbar'
    import Titlebar from './Titlebar'

    export default {
        name: 'error',
        components: {Container, Headerbar, Titlebar},
        data() {
            return {
                action: 'PARTICIPANT_WITHOUT_COMPANY'
            }
        },
        created(){
            this.action = this.$route.params.action
        }
    }
</script>