export default {
  state: {
     drawer:false,
     notification: {
         display:false,
         text:"Notification placeholder text",
         timeout:3000,
         class: 'success'
     },
     displaySearchList:false
 },
 getters: {
    DRAWER:state=>{
       return state.drawer;
    },
    NOTIFICATION:state =>{
        return state.notification;
    },
    DISPLAY_SEARCH_LIST: state =>{
        return state.displaySearchList;
    }
},
mutations:{
    SET_DRAWER: (state,payload)=>{
        state.drawer =payload;
        
    },
    SET_NOTIFICATION: (state,{display,text,alertClass})=>{
        state.notification.display =display
        state.notification.text =text
        state.notification.alertClass =alertClass
    },
    SET_DISPLAY_SEARCH_LIST:(state,payload)=>{
        state.displaySearchList=payload;
    }
},
actions: {

},

}
