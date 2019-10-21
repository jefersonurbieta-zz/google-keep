export default {
    methods: {
        buildDownloadLink(slug, download = true) {
            // return `${this.$store.state.loki.file.api}/${slug}/${download}`
        },
        resetUploadedFiles() {
            // this.$store.commit('SET_UPLOADED_FILES', [])
        },
        treatFileUploadError() {
            // this.mostrarNotificacaoErro('exceptions.FILE_BIGGER_THAN_ACCEPTED')
        }
    }
}
