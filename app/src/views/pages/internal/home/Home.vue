<template>
    <div>
        <v-container>
            <add-note/>
            <list-notes :notes="$store.state.notes"/>
        </v-container>
    </div>
</template>

<script>
    import AddNote from '@/views/pages/internal/home/AddNote'
    import ListNotes from '@/views/pages/internal/home/ListNotes'
    import {actionTypes} from '@/core/constants'

    export default {
        name: 'home',
        components: {AddNote, ListNotes},
        async mounted() {
            await this.findNotes()
        },
        methods: {
            async findNotes() {
                await this.$store.dispatch(actionTypes.FIND_NOTES)
            }
        }
    }
</script>

<style lang="stylus">
    .area-info
        position fixed
        right 5%
</style>
