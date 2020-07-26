import * as MUTION_TYPES from '../../mutation-types.js';

export default {
    [MUTION_TYPES.AMOUNT_INCREASE]: (state, payload) => {
        state.amount += payload || 1;
    },
    [MUTION_TYPES.AMOUNT_DECREASE]: (state, payload) => {
        state.amount -= payload || 1;
    }
}
