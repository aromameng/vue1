import Vue from 'vue'
import App from './App'
import routeConfig from './config/route.js'
var VueRouter = require('vue-router')
import VueResource from 'vue-resource'

/*引入js文件*/
//import Zepto from './assets/js/lib/zepto.min.js'
import helper from './assets/js/util.js'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

/*注册*/
Vue.use(VueResource)
Vue.use(VueRouter)

var router = new VueRouter()

router.map(routeConfig)

router.redirect({
  '*': '/home'
})
/* eslint-disable no-new */
router.start(App, '#app')
