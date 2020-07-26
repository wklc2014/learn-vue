export default {
    getMessage: (state, getters, rootState, rootGetters) => {
        return state.message;
    },
    getAmount: (state, getters, rootState, rootGetters) => {
        return state.amount;
    }
}
