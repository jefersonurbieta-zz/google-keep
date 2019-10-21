<template>
    <a target="_blank"
       class="download-link"
       :href="buildDownloadLink(slug)">
        <slot/>
    </a>
</template>

<script>
    export default {
        name: 'download-link',
        props: ['slug']
    }
</script>

<style lang="stylus">
    .download-link
        text-decoration none
</style>