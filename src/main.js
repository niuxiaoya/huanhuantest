// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import App from './App'
import router from './router'


/** 全局注册自定义的公共组件 */
import RsComponent from '@/components/all'
Vue.use(RsComponent)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      eventHub: new Vue(),      //  全局事件管理
      form: {}                  //  全局变量，方便新增tab时，form数据传递（components/rs-layout.vue)
    }
  }
})
