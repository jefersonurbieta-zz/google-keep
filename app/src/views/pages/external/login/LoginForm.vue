<template>
    <v-card-text>
        <v-container pa-0>
            <v-form v-on:submit.prevent="submitForm" autocomplete="off">
                <v-text-field name="email" type="text" maxlength="255"
                              :data-vv-as="$t('login.email')"
                              :placeholder="$t('login.email')"
                              outlined
                              :error-messages="errors.collect('email')"
                              v-model="email"
                              v-validate="'required'"/>
                <v-text-field name="password" type="password" maxlength="20"
                              :data-vv-as="$t('login.password')"
                              :placeholder="$t('login.password')"
                              outlined
                              :error-messages="errors.collect('password')"
                              v-model="password"
                              v-validate="'required'"/>
                <v-btn color="success" type="submit" block large
                       :disabled="(submitted && errors.any())"> {{ $t('login.login') }}
                </v-btn>
            </v-form>
        </v-container>
    </v-card-text>
</template>

<script>
    export default {
        name: 'login-form',
        data() {
            return {
                email: '',
                password: '',
                submitted: false
            }
        },
        methods: {
            async submitForm() {
                this.submitted = true
                const isValid = await this.$validator.validateAll()
                if (isValid) {
                    const credentials = {email: this.email, password: this.password}
                    console.log(credentials)
                    this.$emit('submit', credentials)
                }
            }
        }
    }
</script>
