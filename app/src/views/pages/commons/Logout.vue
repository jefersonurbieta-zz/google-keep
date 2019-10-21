<template>
    <div></div>
</template>
<script>
    import {actionTypes} from '@/core/constants'
    export default {
        name: 'logout',
        created() {
            this.$store.dispatch(actionTypes.LOGOUT)
            this.$router.push({
                name: 'login',
                query: this.$route.query
            })
        }
    }
</script>
