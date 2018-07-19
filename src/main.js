// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout'
import router from './router'
import leftNav from './components/leftNav'
import ElementUI from 'element-ui'
import vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import $ from 'jquery'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { layout},
  template: '<layout/>'
})
