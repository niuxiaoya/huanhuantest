Vue.use(VueRouter)

import WatchList from '@/pages/exchange/watch'

let routes = []
routes.push({
  path: '/exchange/watch/list', name: '腕表列表', component: WatchList
})


export default new VueRouter({
  routes: routes
})
