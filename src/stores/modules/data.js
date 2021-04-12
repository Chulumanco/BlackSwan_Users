import axios from "axios";
export default {
    state:{
        contacts:[]
    },
    getters: {
        CONTACTS: state=>{
            return state.contacts
        }
    },
    mutations:{
        SET_CONTACTS:(state,payload)=>{
            state.contacts=payload
        },
        ADD_MESSAGE:(state,fullname)=>{
            state.lists.unshift(fullname)
        }
        
    },
    actions: {
        GET_CONTACTS: async({commit})=>{
             let {data} =await axios.get(`contacts`)
            console.log(data)
            commit("SET_CONTACTS",data)
        },
        POST_MESSAGE: ({commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios.post(`contacts`,payload)
                .then(({data,status})=>{
                    commit("ADD_MESSAGE",data)
                    if(status===200){
                    resolve({data,status})
                    }
                })
                .catch(error =>{
                    reject(error);
                })
            })
        }
    }
}