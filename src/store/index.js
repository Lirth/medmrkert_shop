import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDropDownVisible: false,
    },
    mutations: {
        CHANGE_DROPDOWN: (state) => {
            state.isDropDownVisible = !state.isDropDownVisible;
        }
    },
    actions: {
        TOGGLE_DROPDOWN({commit}) {
            commit('CHANGE_DROPDOWN')
        }
    },
    getters: {
        DROPDOWN_STATE(state) {
            return state.isDropDownVisible;
        }
    },
})
