<template>
    <div>
        <h1 class="green--text text-xs-center text-md-center text-sm-center text-lg-center headline font-weight-medium">
            {{title}}
        </h1>
        <p v-if="subtitle" class="grey--text text-xs-center text-md-center text-sm-center text-lg-center subheading mt-2 text--accent-3">
            {{subtitle}}
        </p>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subtitle']
    }
</script>
