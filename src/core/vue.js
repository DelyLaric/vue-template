import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h('router-view'),
  router
}).$mount('#app')
