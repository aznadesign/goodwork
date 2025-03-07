import Vuex from 'vuex'
import cycle from './modules/cycle'
import dropdown from './modules/dropdown'
import notification from './modules/notification'
import timer from './modules/timer'

window.Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cycle,
    dropdown,
    notification,
    timer
  },

  state: {
    loading: false,
    members: office.members,
    groupType: 'office',
    groupId: office.id,
    office
  },
})
