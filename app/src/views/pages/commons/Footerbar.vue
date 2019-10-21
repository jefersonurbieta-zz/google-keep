<template>
    <div class="text-sm-center text-xs-center text-md-center">
        <v-divider light></v-divider>
        <v-btn flat icon color="primary" @click="redirectToTarget">
            <v-icon>arrow_back</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        props: ['target'],
        methods: {
            redirectToTarget(){
                this.$router.push({name: 'empresaBusca'})
            }
        }
    }
</script>
