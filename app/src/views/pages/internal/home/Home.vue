<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="8">
                    <post v-for="post in posts" :post="post" :key="post._id" />
                </v-col>

                <v-col cols="4" class="area-info">
                    <user-info/>

                    <add-post class="mt-3 mb-3"/>

                    <suggestions :suggestions="suggestions"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import AddPost from '@/views/pages/internal/home/AddPost'
    import Post from '@/views/pages/internal/home/Post'
    import Suggestions from '@/views/pages/internal/home/Suggestions'
    import UserInfo from '@/views/pages/internal/home/UserInfo'

    export default {
        name: 'home',
        components: { AddPost, Suggestions, UserInfo, Post },
        data: () => ({
            suggestions: [
                { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', time: 'HÁ 5 HORAS' },
                { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', time: 'HÁ 5 HORAS' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', time: 'HÁ 5 HORAS' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', time: 'HÁ 5 HORAS' },
                { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', time: 'HÁ 5 HORAS' },
                { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', time: 'HÁ 5 HORAS' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', time: 'HÁ 5 HORAS' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', time: 'HÁ 5 HORAS' },
            ],
            posts: [
                { _id: 'dasasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'dasasdasdasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'dadasdassasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'dadasdadsasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'daq3334sasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'da432sasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'da234sasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'dawerwesasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'da23234sasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'darrwresasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'daerwersasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'daw4234sasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
                { _id: 'dasrdfsasd', user: {name: 'omelete'}, views: 4851, time: '2 HORAS', description: 'sdosap kdapsk apsokpa oksdpoaks pdokasp kodapsko dapsokd paskdpaskod paskd paodskpaokds', image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg' },
            ],
        })
    }
</script>

<style lang="stylus">
    .area-info
        position fixed
        right 5%
</style>
