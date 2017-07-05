import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router/index'
import axios from 'axios';
import './mock/index'
Vue.use(ElementUI)
Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
