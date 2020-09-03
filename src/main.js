// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import chai from 'chai'
import spies from 'chai-spies'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
chai.use(spies)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// eslint-disable-next-line no-lone-blocks
{
  // const Construct = Vue.extend()
  // const vm = new Construct({

  // })

  // const expect = chai.expect
  // expect(4).to.eq('4')

  // const spy = chai.spy(() => {})
  // vm.$on('click', spy)
  // expect(spy).to.have.been.called()

}
