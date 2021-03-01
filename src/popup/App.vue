<template>
    <b-container fluid>
        <b-table
            small
            striped
            bordered
            hover
            head-variant="dark"
            sticky-header
            no-border-collapse
            :items="markets"
            :fields="fields"
            class="mt-1 mb-1"
        >
            <template #cell(logo)="data">
                <b-img
                    :src="`${logosPath}${data.value}.svg`"
                    fluid
                    width="32"
                    :alt="`${data.value}`"
                ></b-img>
            </template>
        </b-table>
        <b-row>
            <b-col class="text-center mb-1"><strong>nextchange</strong> v2.0.0 powered by <b-link href="https://www.litebit.eu" target="_blank">LiteBit</b-link></b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "Popup",
    components: {},
    data() {
        return {
            logosPath: process.env.BASE_URL + "logos/",
            fields: [
                { key: "logo", sortable: false },
                { key: "name", sortable: true },
                { key: "abbr", sortable: true },
                { key: "available", sortable: true, class: "d-none" },
                { key: "volume", sortable: true, class: "d-none" },
                { key: "buy", sortable: true },
                { key: "sell", sortable: true },
            ],
        };
    },
    computed: {
        ...mapState(["markets"]),
    },
    methods: {
        ...mapActions(["getMarkets"]),
    },
    mounted() {
        this.getMarkets();
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/popup.scss";
</style>
