<template>
    <v-hover
        v-slot:default="{ hover }"
        open-delay="300"
        close-delay="400">
        <v-card
            class="note"
            :class="{check: note.check}"
            flat>
<!--            <v-tooltip bottom>-->
<!--                <template v-slot:activator="{ on }">-->
<!--                    <v-btn-->
<!--                        v-show="hover"-->
<!--                        v-on="on"-->
<!--                        icon-->
<!--                        small-->
<!--                        @click="check(note)"-->
<!--                        class="check">-->
<!--                        <v-icon>fas fa-check-circle</v-icon>-->
<!--                    </v-btn>-->
<!--                </template>-->
<!--                <span>Selecionar nota</span>-->
<!--            </v-tooltip>-->
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn
                        v-show="hover"
                        v-on="on"
                        icon
                        small
                        @click="fix(note)"
                        class="mark">
                        <v-icon>fas fa-thumbtack</v-icon>
                    </v-btn>
                </template>
                <span>Fixar nota</span>
            </v-tooltip>
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
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            v-show="hover"
                            v-on="on"
                            @click="archive(note)"
                            icon
                            x-small>
                            <v-icon>archive</v-icon>
                        </v-btn>
                    </template>
                    <span>Arquivar nota</span>
                </v-tooltip>
                <v-spacer/>
                <v-menu offset-x
                        offset-y
                        v-model="menuNote"
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
                        <v-list-item @click="remove(note)">
                            <v-list-item-title>Excluir nota</v-list-item-title>
                        </v-list-item>
<!--                        <v-list-item @click="addLabel(note)">-->
<!--                            <v-list-item-title>Adicionar marcador</v-list-item-title>-->
<!--                        </v-list-item>-->
                    </v-list>
                </v-menu>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>

<script>
    import { actionTypes } from '../../../../core/constants'

    export default {
        name: 'Note',
        props: {
            note: {
                required: true
            }
        },
        data: () => ({
            hoverOn: false,
            menuNote: false,
            menuLabel: false,
        }),
        methods: {
            async fix (note) {
                await this.$store.dispatch(actionTypes.FIX_NOTE, note)
            },
            async remove (note) {
                await this.$store.dispatch(actionTypes.REMOVE_NOTE, note)
            },
            async archive (note) {
                await this.$store.dispatch(actionTypes.ARCHIVE_NOTE, note)
            },
            check (note) {
                this.$emit('check', note)
            },
            addLabel (note) {
                this.menuNote = false
                this.menuLabel = true
                this.$emit('mark', note)
            },
        }
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

    .check
        border 2px solid #ccc !important

</style>

