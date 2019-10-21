<template>
    <my-template-default v-if="$route.meta.requiresAuth">
        <router-view/>
    </my-template-default>
    <div v-else>
        <router-view/>
    </div>
</template>

<script>
    import MyTemplateDefault from '@/views/pages/commons/MyTemplateDefault'
    export default {
        components: { MyTemplateDefault }
    }
</script>

<style lang="stylus">
    .v-content__wrap
        overflow-y scroll

    .az-form-content .container
        background-color white !important

</style>
