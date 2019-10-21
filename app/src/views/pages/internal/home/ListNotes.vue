<template>
    <div>
        <v-row class="list-notes">
            <v-col class="col-notes">
                <note :note="note" v-for="note in col0" :key="note._id"/>
            </v-col>

            <v-col class="col-notes">
                <note :note="note" v-for="note in col1" :key="note._id"/>
            </v-col>

            <v-col class="col-notes">
                <note :note="note" v-for="note in col2" :key="note._id"/>
            </v-col>

            <v-col class="col-notes">
                <note :note="note" v-for="note in col3" :key="note._id"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import Note from '@/views/pages/internal/home/Note'

    export default {
        name: 'ListNotes',
        components: {Note},
        props: {
            notes: {
                required: true
            }
        },
        computed: {
            col0() {
                return this.splitNotes(0)
            },
            col1() {
                return this.splitNotes(1)
            },
            col2() {
                return this.splitNotes(2)
            },
            col3() {
                return this.splitNotes(3)
            }
        },
        methods: {
            splitNotes(col) {
                const matched = []
                this.notes.forEach((item, index) => {
                    if (index % 4 === col) {
                        matched.push(item)
                    }
                })
                return matched
            }
        }
    }
</script>

<style lang="stylus">
    .col-notes
        padding 8px
</style>
