<template>
    <v-row
        align="center"
        justify="center">
        <v-col cols="8">
            <v-card>
                <v-text-field
                    v-show="editing"
                    v-model="note.title"
                    name="title"
                    placeholder="Titulo"
                    solo
                    flat
                    hide-details
                ></v-text-field>

                <v-text-field
                    v-model="note.description"
                    name="description"
                    placeholder="Criar uma nota..."
                    ref="descriptionNote"
                    solo
                    flat
                    hide-details
                    @focus="startEditing"
                ></v-text-field>

                <v-card-actions v-show="editing">
                    <v-spacer/>
                    <v-btn
                        depressed
                        @click="cancelEditing">
                        Fechar
                    </v-btn>
                    <v-btn
                        color="primary"
                        depressed
                        @click="finishEditing">
                        Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import actionTypes from "../../../../core/constants/action-types";

    export default {
        name: 'add-note',
        data() {
            return {
                editing: false,
                note: {}
            }
        },
        methods: {
            startEditing(start) {
                this.editing = start
                this.$refs.descriptionNote.$el.focus()
            },
            cancelEditing() {
                this.editing = false
                this.note = {}
            },
            async finishEditing() {
                this.editing = false
                await this.$store.dispatch(actionTypes.ADD_NOTE, this.note)
                this.note = {}
            }
        }
    }
</script>

<style scoped>

</style>
