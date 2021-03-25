import Vue from 'vue'
import Vuex from 'vuex'

import UIModule from './modules/ui'
import User from './modules/user'
import Public from './modules/public'
import  Data from './modules/data'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    ui: UIModule,
    user: User,
    public: Public,
    data:Data
  }
})
