import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        markets: []
    },
    actions: {
        getMarkets({ commit }) {
            axios({
                method: 'get',
                url: 'https://api.litebit.eu/markets'
            })
                .then(function (response) {
                    commit('SET_MARKETS', {
                        markets: response.data.result
                    })
                });
        },
    },
    mutations: {
        SET_MARKETS(state, markets) {
            const objMarkets = Object.values(markets)[0];
            Object.values(objMarkets).forEach(market => {
                market = Object.assign({ 'logo': market['abbr'] }, market);
                market['buy'] = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(market['buy']);
                market['sell'] = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(market['sell']);
                state.markets.push(market);
            })
        }
    },
    modules: {
    }
})
