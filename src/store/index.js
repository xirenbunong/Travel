import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'

try {
  if (localStorage && localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  // 没有异步操作，actions可以省略，直接commit改变mutations即可
  // actions: {
  //     // ctx是上下文
  //     changeCity (ctx, city) {
  //         ctx.commit('changeCity', city)
  //     }
  // },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        if (localStorage) {
          localStorage.city = city
        }
      } catch (error) {}
    }
  }
})
