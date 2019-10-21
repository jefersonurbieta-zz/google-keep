<template>
    <v-card
        class="post"
        flat>
        <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{post.user.name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn icon>
                    <v-icon>fas fa-ellipsis-h</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>
        <v-img
            class="white--text"
            height="500px"
            :src="post.image"/>
        <v-container class="post-content">
            <v-row class="actions">
                <v-btn icon>
                    <v-icon>far fa-heart</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>far fa-comment-dots</v-icon>
                </v-btn>
            </v-row>
            <v-row class="views">
                {{post.views}} {{$t('post.views')}}
            </v-row>
            <v-row class="description">
                <p>
                    <span class="description-name">{{post.user.name}}</span> {{post.description}}
                </p>
            </v-row>
            <v-row class="time">
                <p>
                    {{$t('post.ago')}} {{post.time}}
                </p>
            </v-row>
        </v-container>
        <v-card-actions>
            <v-text-field
                hide-details
                full-width
                :placeholder="$t('post.addComment')"/>
            <v-btn depressed text >{{$t('post.publish')}}</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'Post',
        props: {
            post: {
                required: true
            }
        }
    }
</script>

<style lang="stylus">
    .post
        border 1px solid #ccc!important
        margin-bottom 40px
        .post-content
            padding-left 20px
            padding-bottom 0px
        .views
            font-size 0.9rem
            font-weight bold
        .description
            .description-name
                font-weight bold
        .time
            font-size 0.7rem
            color #ccc
        .v-card__actions
            border-top 1px solid #ccc
</style>

