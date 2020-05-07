import Vue from 'vue'
import Vuex from 'vuex'
import VueLocalStorage from 'vue-localstorage'

Vue.use(Vuex)

Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true,
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customerList: [],
    reservationList: [],
    showReservationRoom: {},
  },
  mutations: {
    setShowReservationRoom(state, val) {
      state.showReservationRoom = val
    },
  },
  actions: {},
  modules: {},
})
