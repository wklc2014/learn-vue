import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const state = () => ({
  message: 'Hello My World...',
  amount: 15,
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
