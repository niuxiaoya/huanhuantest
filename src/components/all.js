import RSSearch from '@/components/rs-search'
import RSList from '@/components/rs-list'
import RSLayout from '@/components/rs-layout'
import RSAside from '@/components/rs-aside'
import RSHeader from '@/components/rs-header'

export default {
  install: function(Vue) {
      Vue.component('rs-search', RSSearch),
      Vue.component('rs-list', RSList),
      Vue.component('rs-layout', RSLayout),
      Vue.component('rs-aside', RSAside),
      Vue.component('rs-header', RSHeader)
  }
}
