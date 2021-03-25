
import Vue from 'vue'
import App from './App'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios  from 'axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './stores/store'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Main from './components/auth/Main'
import Details from './components/auth/Details'
import DetailsModal  from './components/auth/DetailsModal'
// import Landing from './public/Landing'
// import Main from './components/auth/Main'

Vue.use(VueRouter);
axios.defaults.baseURL='https://assessment.blackswan.tech/api/'
// axios.defaults.withCredentials =true
Vue.use(Vuex)
const routes = [
  {
    // path: '/',
    // component: Landing,
    // name: 'home',
    path: '/',
    components: Main,
    name: 'Main',
    children: [{
      path: '/Lists/:id',
      components: { employeedetails: Details },
      name: 'employeedetails',
      children:[
        {
              path :'/Details/:messageid',
              components: {detailsModal:DetailsModal},
              name:'detailsModal',
          
        }
      ]

    }
    ]
  },

  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/register',
    component: Register,
    name: 'Register'
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/'
})
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')




