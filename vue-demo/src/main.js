import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './defineProperty'
// import './defineProperty/observe.js'
// import './compiler'
// import './proxy'
import './proxy/observe'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
