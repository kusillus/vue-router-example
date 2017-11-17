import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/home.vue'
import Images from './components/images.vue'
import NotFound from './components/notFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home},
  { path: '/images', component: Images},
  { path: '*', component: NotFound}
]
const router = new VueRouter(
  {
    mode: 'history',
    routes
  }
)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
