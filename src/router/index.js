import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products'
import Index from '../views/Index'
import Details from '../views/Details'
Vue.use(VueRouter)
const routes = [
  {path: '/',name: 'index',component:Index},
  {path: '/products',name: 'products',component:Products},
  {path: '/details',name: 'details',component:Details}
 
]

const router = new VueRouter({
  routes
})

export default router
