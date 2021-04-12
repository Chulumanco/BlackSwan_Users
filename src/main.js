
import Vue from 'vue'
import App from './App'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from 'axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './stores/store'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import Main from './components/auth/Main'
import Details from './components/auth/Details'
import DetailsModal from './components/auth/DetailsModal'
import Landing from './components/public/Landing'



Vue.use(VueRouter);
axios.defaults.baseURL = 'https://assessment.blackswan.tech/api/'
axios.defaults.withCredentials =true
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    const auth = token ? `Bearer ${token}` : '';
    config.headers.common['Authorization'] = auth;
    return config;
  },
  error => Promise.reject(error),
);

Vue.use(Vuex)
const routes = [
  {
    path: '/',
    component: Landing,
    name: 'home',
  },
  {

    path: '/Main',
    component: Main,
    name: 'Main',
    children: [{
      path: '/Lists/:id',
      components: { employeedetails: Details },
      name: 'employeedetails',
      children: [
        {
          path: '/Details/:messageid',
          components: { detailsModal: DetailsModal },
          name: 'detailsModal',
          meta:{
          requiresAuth:true
          }
      

        }
      ]

    }
    ]
  },

  {
    path: '/login',
    component: Login,
    name: 'Login',
    meta:{
      requireiresVisitor:true
    }

  },
  {
    path: '/register',
    component: Register,
    name: 'Register',
    meta:{
      requireiresVisitor:true
    }

  },
  {
    path: '/logout',
    component: Logout,
    name: 'Logout'
  }
];


const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/'
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){

  if(!store.getters.loggedIN){
    next({
      name:'login',
    })
  }else{
    next()
  }
}else if(to.matched.some(record => record.meta.requireiresVisitor)){
    
  if(store.getters.loggedIN){
    next({
      name:Main,
    })
  }else{
    next()
  }
}else{
  next()
}
})
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')




