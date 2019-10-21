<template>
    <v-layout row wrap align-center class="fa-multi-string">
        <v-flex xs12 d-flex class="mt-0 pt-0" v-if="editing">
            <a @click.prevent.stop="add" style="color: green !important">
                <v-icon color="green">add_circle</v-icon>
                {{addLabel}}
            </a>
        </v-flex>
        <div class="listagem" v-if="hasItems">
            <v-flex xs12 d-flex class="mb-0 pb-0 mt-0 pt-0" v-for="(item, index) in items" :key="index">
                <v-text-field
                    :name="name"
                    :placeholder="placeholder"
                    :disabled="!editing"
                    v-mask="mask"
                    v-model="item.value"
                    v-if="mask">
                    <v-tooltip slot="append-outer" bottom v-if="editing">
                        <v-icon slot="activator" @click="remove(index)">clear</v-icon>
                        {{removeLabel}}
                    </v-tooltip>
                </v-text-field>
                <v-text-field
                    :name="name"
                    :placeholder="placeholder"
                    :disabled="!editing"
                    v-model="item.value"
                    v-else>
                    <v-tooltip slot="append-outer" bottom v-if="editing">
                        <v-icon slot="activator" @click="remove(index)">clear</v-icon>
                        {{removeLabel}}
                    </v-tooltip>
                </v-text-field>
            </v-flex>
        </div>
        <v-flex xs12 d-flex class="mb-0 pb-0 mt-0 pt-0" v-if="!hasItems && !editing">
            <az-text-view label="" :text="emptyDataText"/>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: 'multi-string',
        props: {
            items: {
                required: true
            },
            name: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            placeholder: {
                type: String,
                required: true
            },
            mask: {
                default: null
            },
            addLabel: {
                type: String,
                default: 'Adicionar'
            },
            removeLabel: {
                type: String,
                default: 'Remover'
            },
            editing: {
                type: Boolean,
                default: false
            },
            emptyDataText: {
                type: String,
                default: ''
            }
        },
        computed: {
            hasItems() {
                return this.items.length > 0
            }
        },
        methods: {
            add() {
                this.$emit('add')
            },
            remove(index) {
                this.$emit('remove', index)
            }
        }
    }
</script>

<style lang="stylus">
    .fa-multi-string
        .listagem
            padding 20px !important
            border 1px dashed #ccc
            margin-bottom 10px !important
            width 100% !important
</style>