<template>
    <div>
        <v-btn
            color="primary"
            dark
            block
            depressed
            @click.stop="dialog = true">
            {{ $t('addPost.callButton') }}
        </v-btn>

        <v-dialog
            v-model="dialog"
            max-width="500">
            <v-card>
                <v-card-title class="headline">{{ $t('addPost.title') }}</v-card-title>

                <div class="ma-10 mb-1">
                    <az-file-upload
                        repository=""
                        ref="azFileUploadPost"
                        accept="image/png,image/jpg">
                        <a @click="openFileSelector">
                            <v-icon>archive</v-icon>
                            {{ $t('addPost.addPhoto') }}
                        </a>
                        <p @click="openFileSelector">
                            {{ $t('addPost.helpMessage') }}
                        </p>
                    </az-file-upload>

                    <v-chip
                        class="ma-2"
                        close
                        v-for="file in $store.state.uploadedFiles"
                        :key="file.id">
                        {{file.originalname}}
                    </v-chip>

                    <v-textarea
                        outlined
                        :placeholder="$t('addPost.description')"
                    ></v-textarea>
                </div>

                <v-card-actions>
                    <div class="flex-grow-1"></div>

                    <v-btn
                        color="primary"
                        depressed
                        @click="dialog = false">
                        {{ $t('addPost.addButton') }}
                    </v-btn>

                    <div class="flex-grow-1"></div>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: 'AddPost',
        data () {
            return {
                dialog: false,
            }
        },
        methods: {
            openFileSelector() {
                this.$refs.azFileUploadPost.openFileSelector()
            }
        }
    }
</script>

<style scoped>

</style>
