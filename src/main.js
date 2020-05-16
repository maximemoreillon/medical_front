import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import {access_control} from '@moreillon/vue_access_control'

Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {

  access_control(next)

});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
