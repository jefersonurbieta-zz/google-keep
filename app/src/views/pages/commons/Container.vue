<template>
    <v-app id="container">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md3>
                        <slot></slot>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer color="transparent">
            <v-row justify="center">
                <v-btn text>
                    About Us
                </v-btn>

                <v-btn text>
                    Team
                </v-btn>

                <v-btn text>
                    Contact Us
                </v-btn>

                <v-btn text class="ml-5">
                    © 2019 VUESTAGRAM
                </v-btn>
            </v-row>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
    }
</script>
