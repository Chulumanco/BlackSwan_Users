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
        }
    },
    actions: {
        GET_CONTACTS: async({commit})=>{
             let {data} =await axios.get(`contacts`)
            console.log(data)
            commit("SET_CONTACTS",data)
        }
    }
}