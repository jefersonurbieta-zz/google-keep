<template>
    <div class="profile-picture">
        <div v-if="hasImage" class="text-sm-center">
            <v-img
                height="150px"
                :contain=true
                :src="buildDownloadLink(slug)">
                <div class="action" v-if="editing">
                    <v-icon large color="#ddd" @click="clearImage">
                        close
                    </v-icon>
                </div>
            </v-img>
        </div>
        <az-file-upload
            v-else
            height="150px"
            repository=""
            ref="azFileUploadEdital"
            accept="image/png,image/jpg"
            @error="treatFileUploadError">
            <slot name="upload-area"/>
        </az-file-upload>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'profile-picture',
        props: {
            slug: {
                type: String,
                required: true
            },
            editing: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapState(['loki']),
            hasImage() {
                return this.slug
            }
        },
        watch: {
            'loki.uploadedFiles'() {
                if (this.loki.uploadedFiles.length) {
                    this.$emit('change', this.loki.uploadedFiles[0].filename)
                    this.resetUploadedFiles()
                }
            }
        },
        mounted() {
            this.resetUploadedFiles()
        },
        methods: {
            clearImage() {
                this.$emit('change', '')
            },
            openFileSelector() {
                this.$refs.azFileUploadEdital.openFileSelector()
            }
        }
    }
</script>

<style lang="stylus">
    .profile-picture
        .action
            opacity 0
            width: 100%
            height: 100%
            display flex
            justify-content center
            background-color: rgba(0, 0, 0, 0.75)
            transition 0.3s
        &:hover
            .action
                opacity 1
                transition 0.5s
</style>