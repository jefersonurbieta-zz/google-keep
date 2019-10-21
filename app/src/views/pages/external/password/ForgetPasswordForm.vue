<template>
    <v-card-text>
        <v-container>
            <titlebar :title="$t('forgetPassword.title')" :subtitle="$t('forgetPassword.subtitle')"></titlebar>
            <v-form v-on:submit.prevent="submitForm" autocomplete="off">
                <v-text-field prepend-icon="email" name="email" type="text" maxlength="255"
                              :data-vv-as="$t('forgetPassword.email')"
                              :placeholder="$t('forgetPassword.email')"
                              :error-messages="errors.collect('email')"
                              v-model="email"
                              v-validate="'required|email'"/>

                <v-btn color="success" class="mt-4" type="submit" block large
                       :loading="$store.state.loki.isLoading"
                       :disabled="(submitted && errors.any()) || $store.state.loki.isLoading">
                    {{$t('forgetPassword.submit')}}
                </v-btn>
            </v-form>
        </v-container>
    </v-card-text>
</template>

<script>
    import Titlebar from '../../commons/Titlebar'
    export default {
        name: 'forget-password-form',
        components: {Titlebar},
        data() {
            return {
                email: '',
                submitted: false
            }
        },
        methods: {
            async submitForm() {
                this.submitted = true
                const isValid = await this.$validator.validateAll()
                if (isValid) {
                    this.$emit('submit', this.email)
                }
            }
        }
    }
</script>
