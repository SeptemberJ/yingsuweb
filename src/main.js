// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// mycss
import '../static/css/carousel.css'
import '../static/css/style.css'
import '../static/css/responsive.css'
// css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueSwiper from 'vue-awesome-swiper'
import '../theme/index.css'

Vue.use(vueSwiper)

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
