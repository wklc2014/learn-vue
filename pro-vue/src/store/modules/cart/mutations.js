import * as MUTION_TYPES from '../../mutation-types.js';

export default {
    addAmount: (state, payload) => {
        state.amount += payload || 1;
    },
    reduceAmount: (state, payload) => {
        state.amount -= payload || 1;
    }
}
