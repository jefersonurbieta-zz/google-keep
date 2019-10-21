<template>
    <v-card-text>
        <v-container>
            <titlebar :title="$t('register.title')" class="mb-3"/>
            <v-form v-on:submit.prevent="submitForm" autocomplete="off">

                <v-text-field name="fullname" type="text" maxlength="255"
                              :data-vv-as="$t('register.fullname')"
                              :placeholder="$t('register.fullname')"
                              outlined
                              :error-messages="errors.collect('fullname')"
                              v-model="name"
                              v-validate="'required'"/>

                <v-text-field name="email" type="text" maxlength="255"
                              :data-vv-as="$t('register.email')"
                              :placeholder="$t('register.email')"
                              outlined
                              :error-messages="errors.collect('email')"
                              v-model="email"
                              v-validate="'required|email'"/>

                <v-text-field name="password" type="password" maxlength="20"
                              :data-vv-as="$t('register.password')"
                              :placeholder="$t('register.password')"
                              outlined
                              :error-messages="errors.collect('password')"
                              v-model="password"
                              v-validate="'required'"
                              ref="passwordRef"/>

                <v-text-field name="confirmation" type="password" maxlength="20"
                              :data-vv-as="$t('register.confirmation')"
                              :placeholder="$t('register.confirmation')"
                              outlined
                              :error-messages="errors.collect('confirmation')"
                              v-model="confirmation"
                              v-validate="'required|confirmed:passwordRef'"/>
                <v-btn color="success" class="mt-4" type="submit" block large
                       :disabled="(submitted && errors.any())">
                    {{$t('register.submit')}}
                </v-btn>
            </v-form>
        </v-container>
    </v-card-text>
</template>

<script>
    import Titlebar from '../../commons/Titlebar'
    export default {
        name: 'register-form',
        components: {
            Titlebar
        },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                confirmation: '',
                submitted: false
            }
        },
        methods: {
            async submitForm() {
                this.submitted = true
                const isValid = await this.$validator.validateAll()
                if (isValid) {
                    const userData = {name: this.name, email: this.email, password: this.password}
                    this.$emit('submit', userData)
                }
            }
        }
    }
</script>
