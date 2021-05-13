import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      level: 1,
      xp: 100,

    },
    achievements: [
      {
        name: 'Сделать главную страницу',
        description: 'Накодить чет-там про главную страницу ай донт ноу блин',
        done: 1,
        needed: 1,
        ready: true
      },
      {
        name: 'Сделать страницу образования',
        description: 'Наполнить страницу с образованием контентом',
        done: 0,
        needed: 1,
        ready: false
      },
    ],
    modelPreferences: ['сделать круг', 'сделать квадрат', 'сделать бочку']
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
