<template>
    <b-container fluid>
        <b-alert class="mt-4" show>{{ defaultText }}</b-alert>

        <b-form-group
            id="fieldset-1"
            description="Let us know your name."
            label="Enter your name"
            label-for="input-1"
            valid-feedback="Thank you!"
        >
            <b-form-input
                id="input-1"
                v-model="name"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-1"
            description="Let us know your name."
            label="Enter your name"
            label-for="input-1"
            valid-feedback="Thank you!"
        >
            <b-form-input
                id="input-1"
                v-model="name"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-1"
            description="Let us know your name."
            label="Enter your name"
            label-for="input-1"
            valid-feedback="Thank you!"
        >
            <b-form-input
                id="input-1"
                v-model="name"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-button variant="primary" class="mb-4">Valider</b-button>
    </b-container>
</template>

<script>
export default {
    name: "Options",
    components: {},
    computed: {
        defaultText() {
            return browser.i18n.getMessage("extName");
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/options.scss";
</style>
