<template>
    <div>
        <v-autocomplete
            :label="getLabel()"
            :items="options"
            placeholder="Selecione"
            v-model="newValue"
            @input="add"
            v-if="editing"/>
        <az-text-view :label="getLabel()" text="" v-else/>
        <v-chip v-for="value in selected" :key="getKey(value)" :close="editing" @input="remove(value)">
            <span v-if="displayField">{{value[displayField]}}</span>
            <span v-else>{{value}}</span>
        </v-chip>
    </div>
</template>

<script>
    export default {
        name: 'location-picker',
        props: {
            selected: {
                type: Array,
                required: true
            },
            options: {
                type: Array,
                required: true
            },
            displayField: {
                type: String,
                required: false
            },
            label: {
                type: String,
                required: true
            },
            required: {
                type: Boolean,
                default: false
            },
            editing: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                newValue: null,
            }
        },
        methods: {
            add() {
                this.$emit('add', this.newValue)
                this.newValue = {}
            },
            getLabel() {
                if (this.required) {
                    return `${this.label}*`
                }
                return this.label
            },
            getKey(value) {
                if (this.displayField) {
                    return value[this.displayField]
                }
                return value
            },
            remove(value) {
                this.$emit('remove', value)
            }
        }
    }
</script>