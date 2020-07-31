import * as services from '@utils/services.js';

export default {
    addAmount: async ({ state, getters, commit, dispatch, rootState, rootGetters }, payload) => {
        const resp = await services.getUser({ a: 1, b: 2 });
        commit('addAmount', resp.data.pages);
    }
}
