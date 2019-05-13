import Vue from 'vue'
import Router from 'vue-router'
import index from './first'
import sale from './sale'
import find from './find'
import equipment from './equipment'
import more from './more'
import tuangou from './children/tuangou'
import zhuanqu from './children/zhuanqu'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'index'
      }
    },
    index,
    sale,
    find,
    equipment,
    more,
    tuangou,
    zhuanqu
  ]
})