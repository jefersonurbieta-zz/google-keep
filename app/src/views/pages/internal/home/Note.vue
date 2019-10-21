<template>
    <v-hover
        v-slot:default="{ hover }"
        open-delay="300"
        close-delay="400">
        <v-card
            class="note"
            flat>
            <v-btn
                v-show="hover"
                icon
                small
                class="check">
                <v-icon>fas fa-check-circle</v-icon>
            </v-btn>
            <v-btn
                v-show="hover"
                icon
                small
                class="mark">
                <v-icon>fas fa-thumbtack</v-icon>
            </v-btn>
            <v-container class="note-content">
                <v-row class="title">
                    {{note.title}}
                </v-row>
                <v-row class="description">
                    {{note.description}}
                </v-row>
            </v-container>
            <v-card-actions>
                <v-btn
                    v-show="!hover"
                    icon
                    x-small>
                </v-btn>
                <v-btn
                    v-show="hover"
                    icon
                    x-small>
                    <v-icon>fas fa-palette</v-icon>
                </v-btn>
                <v-btn
                    v-show="hover"
                    icon
                    x-small>
                    <v-icon>fas fa-archive</v-icon>
                </v-btn>
                <v-spacer/>
                <v-menu offset-x
                        offset-y
                        v-show="hover">
                    <template v-slot:activator="{ on: menu }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on: tooltip }">
                                <v-btn
                                    v-show="hover"
                                    icon
                                    x-small
                                    v-on="{ ...tooltip, ...menu }">
                                    <v-icon>fas fa-ellipsis-v</v-icon>
                                </v-btn>
                            </template>
                            <span>Mais</span>
                        </v-tooltip>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>Excluir nota</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Excluir nota</v-list-item-title>
                        </v-list-item>
                        <v-menu offset-x
                                offset-y>
                            <template v-slot:activator="{ on }">
                                <v-list>
                                    <v-list-item
                                        v-on="{ on }">
                                        <v-list-item-title>Excluir nota 2</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>Excluir nota 2</v-list-item-title>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-title>Excluir nota 2</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list>
                </v-menu>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        name: 'Note',
        props: {
            note: {
                required: true
            }
        },
        data: () => ({
            hoverOn: false,
        }),
        methods: {}
    }
</script>

<style lang="stylus">
    .note
        border 1px solid #ccc !important
        margin-bottom 10px

        .note-content
            padding 20px

        .check
            position absolute
            top -15px
            left -15px

        .mark
            position absolute
            left 85%
            top 8px
</style>

