import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions,
    getters
})

export default store
