<template>
    <v-card-text>
        <v-container>
            <titlebar :title="$t('updatePassword.title')" :subtitle="$t('updatePassword.subtitle')"></titlebar>
            <v-form v-on:submit.prevent="submitForm" autocomplete="off">
                <v-text-field prepend-icon="lock" name="newpassword" type="password" maxlength="20"
                              :data-vv-as="$t('updatePassword.newpassword')"
                              :placeholder="$t('updatePassword.newpassword')"
                              :error-messages="errors.collect('newpassword')"
                              v-model="password"
                              v-validate="'required'"
                              ref="senhaRef"/>

                <v-text-field prepend-icon="lock" name="confirmation" type="password" maxlength="20"
                              :data-vv-as="$t('updatePassword.confirmation')"
                              :placeholder="$t('updatePassword.confirmation')"
                              :error-messages="errors.collect('confirmation')"
                              v-model="confirmation"
                              v-validate="'required|confirmed:senhaRef'"/>

                <v-btn color="success" class="mt-4" type="submit" block large
                       :loading="$store.state.loki.isLoading"
                       :disabled="(submitted && errors.any()) || $store.state.loki.isLoading">
                    {{$t('updatePassword.submit')}}
                </v-btn>
            </v-form>
        </v-container>
    </v-card-text>
</template>

<script>
    import Titlebar from '../../commons/Titlebar'

    export default {
        name: 'update-password-form',
        components: {
            Titlebar
        },
        data() {
            return {
                token: '',
                password: '',
                confirmation: '',
                submitted: false
            }
        },
        created() {
            this.token = this.$route.query.token
        },
        methods: {
            async submitForm() {
                this.submitted = true
                const isValid = await this.$validator.validateAll()
                if (isValid) {
                    const userData = {token: this.token, password: this.password}
                    this.$emit('submit', userData)
                }
            }
        }
    }
</script>
