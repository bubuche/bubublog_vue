import Vue from 'vue'
import App from './App'
import './assets/dist/css/bootstrap.min.css'
var VueResource = require('vue-resource');

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

Vue.use(VueResource);