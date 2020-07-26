export default {
    addAmount: ({ state, getters, commit, dispatch, rootState, rootGetters }, payload) => {
        console.log('actions state>>>', state);
        console.log('actions commit>>>', commit);
        console.log('actions payload>>>', payload);
        commit
    }
}
