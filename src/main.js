import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局组件  头。尾
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'

Vue.use(MyHeader); //自定义全局组件
Vue.use(MyFooter); //自定义全局组件
Vue.component('my-header',MyHeader);
Vue.component('my-footer',MyFooter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components:{
    MyHeader,
    MyFooter
  },
  render: h => h(App)
}).$mount('#app')
