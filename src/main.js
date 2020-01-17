import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 导入全局组件  头。尾
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
Vue.use(MyHeader); //自定义全局组件
Vue.use(MyFooter); //自定义全局组件
Vue.component('my-header',MyHeader);
Vue.component('my-footer',MyFooter);
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// Vue.prototype.qs = qs  //全局注册，使用方法为  this.qs  可以忽略安装 作用将json格式转为data所需的格式
new Vue({
  router,
  store,
  components:{
    MyHeader,
    MyFooter
  },
  render: h => h(App)
}).$mount('#app')
