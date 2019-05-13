import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import store from "./store/index"
import Head from "@/common/head"
import HotActive from "@/common/hotActive"
import listSecond from "@/common/listSecond"
import List from "@/common/list"
import Loading from "@/common/loading/loading.vue"
import BScroll from "@/common/BScroll"
import FList from "@/components/first/FList"
import FF from "@/components/first/FF"
import FFit from "@/components/first/FFit"
import FRunning from "@/components/first/FRunning"
import FBaskt from "@/components/first/FBaskt"

Vue.config.productionTip = false
Vue.component("Head", Head)
Vue.component("HotActive", HotActive)
Vue.component("listSecond", listSecond)
Vue.component("List", List)
Vue.component("BScroll", BScroll)
Vue.component("Loading",Loading)
Vue.component("FList",FList)
Vue.component("FFit",FFit)
Vue.component("FF",FF)
Vue.component("FRunning",FRunning)
Vue.component("FBaskt",FBaskt)

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')