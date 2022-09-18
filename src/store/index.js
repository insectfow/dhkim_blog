import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isModal: false,
    isModalText: ""
  },
  getters: {
  },
  mutations: {
    toggleModal(state, payload) {
      console.log(payload, payload.text);
      if (payload & payload.text) {
        state.isModalText = payload.text;
        state.isModal = true;
      } else {
        state.isModalText = "";
        state.isModal = false;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
