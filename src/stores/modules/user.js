/* eslint-disable no-unused-vars */
import axios from "axios";

export default {
    state: { status: '',
    token: localStorage.getItem('token') || '',
    users : {}
},
    getters: {
    loggedIN(state){
        return state.token!==null;
    },
    loggedInUser: state=>{
        return state.users
    }
   
    },
    mutations: {
        retrieveToken(state,token,user){
        state.status = 'success'
        state.token = token
        state.users =user
        },
        LOGOUT(state){
            state.token=null
        }
    },
    actions:
    {
         LOGIN({commit},payload) {
            return new Promise((resolve,reject)=>{
        axios.post(`login_check`,{email:payload.email,
            password:payload.password,
           
        })
        .then(response =>{
            const token = response.data.token
            const user =response.data.payload
            localStorage.setItem('access_token',token)
            axios.defaults.headers.common['Authorization']=token
            commit('retrieveToken',token,user)  
            resolve(response)
        })
        .catch(error =>{
            console.log(error)
            reject(error)
        })
    })
    },
   
        REGISTER: ({ commit }, {  email,name,surname,phone, companyName,plainPassword }) => {
            return new Promise((resolve, reject) => {
                axios
                    .post(`register`, {
                        
                        email,
                        name,
                        surname,
                        phone,
                        companyName,
                        plainPassword
                    })
                    .then(({ data, status }) => {
                        if (status === 201) {
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        
        // LOGOUT(context){
        //     axios.defaults.headers.common['Authorization'] ='Bearer' +context.state.token
        //     if(context.getters.loggedIN)
        //     return new Promise((resolve, reject) => {
        //      axios.post('/logout')
        //      .then(response=>{
        //          localStorage.removeItem('access_token')
        //          context.commit('LOGOUT')
        //          resolve(response)
        //      })
        //      .catch(error =>{
        //          localStorage.removeItem('access_token')
        //          context.commit('LOGOUT')
        //          reject(error)
        //      })
        //     })
            
        // },
        REFRESH_TOKEN: () => {
            return new Promise((resolve, reject) => {
                axios
                    .post(`token/refresh`)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    }
};