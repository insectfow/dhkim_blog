import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // gl modal setting
    isModal: false,
    isModalText: "",

    // login & member info
    isLogin: false,
    userData: {
      id: null,
      pw: null
    },
  },
  getters: {
  },
  mutations: {
    toggleModal(state, payload) {
      console.log(payload);
      if (payload.text) {
        state.isModalText = payload.text;
      } else {
        state.isModalText = "";
      }
      state.isModal = !state.isModal;
    },
    setLogin(state, payload) {
      
    }
  },
  actions: {
    getLogin({ commit }, payload) {
      // console.log(payload);
      commit('toggleModal', { text: `${payload.id}님 로그인 되었습니다.`, type: 'login' });
      commit('setLogin', payload);
    }
  },
  modules: {
  }
})
