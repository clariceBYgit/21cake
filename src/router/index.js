import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products'
import Index from '../views/Index'
import Details from '../views/Details'
Vue.use(VueRouter)
const routes = [
  // 路由传参  {path：'details/:lid',component:Details,props:true}
  //                       1.  /:lid  变量名   props:true 让URL中的参数自动成为props中的自定义属性；          
  // 2.在要接收的目标组件中，添加与路由参数同名的自定义属性变量props:['lid']   lid就是一个普通变量
  // 3.跳转时：应该在相对路径之后加/相对路径/参数值
  {path: '/',name: 'index',component:Index},
  {path: '/products',name: 'products',component:Products},
  {path: '/details',name: 'details',component:Details}
 
]

const router = new VueRouter({
  routes
})

export default router
