<template>
    <v-card
        flat
        class="suggestions mx-auto">
        <v-toolbar flat height="40">
            <v-toolbar-title class="suggestion-title">{{ $t('suggestion.suggestions') }}</v-toolbar-title>
            <v-spacer/>
            <span class="suggestion-see-all">{{ $t('suggestion.seeAll') }}</span>
        </v-toolbar>

        <v-list max-height="200" class="suggestion-list">
            <v-list-item
                v-for="suggestion in suggestions"
                :key="suggestion.title">
                <v-list-item-avatar class="suggestion-item-avatar" height="35" width="35" min-width="35">
                    <v-img :src="suggestion.avatar" ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-text="suggestion.title" class="suggestion-item-name"></v-list-item-title>
                    <v-list-item-subtitle v-text="suggestion.time" class="suggestion-item-time"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: 'Suggestions',
        props: {
            suggestions: {
                required: true
            }
        }
    }
</script>

<style lang="stylus">
    .suggestions
        border 1px solid #ccc!important
        .suggestion-list
            overflow-y scroll!important
        .suggestion-title
            font-size .9rem!important
        .suggestion-see-all
            font-size .9rem!important
        .suggestion-item-avatar
            margin-right 10px !important
        .suggestion-item-name
            font-size .9rem!important
        .suggestion-item-time
            font-size .7rem!important
            color #ccc

</style>
