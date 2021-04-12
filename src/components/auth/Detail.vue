<template>
    <v-list-item @click.prevent="toggle(index)">
        <v-list-item-action>
            <v-btn icon @click="openModal()">
            <v-icon color="red">edit</v-icon>
            </v-btn>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title>{{name}}</v-list-item-title>
            <v-list-item-subtitle>{{message}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action-text></v-list-item-action-text>
        <v-icon v-if="users.isRead" color="green">check_circle</v-icon>
        <v-icon v-else color="pink">check_circle</v-icon>
    </v-list-item>
</template>
<script>
export default {
  name: 'detail',
  props:{
      users: Object,
      index: Number
  },
  data: ()=>({
      selected:[2]
  }),
   computed:{  
       loggedIN(){
           return this.$store.getters.loggedIN
          
   }
   },

  methods:{
      toggle(index){
          console.log(index)
      },
      openModal(){
          this.$router.push({
              name:'detailsModal',
              params:{messageid:this.users.id}
          })
      }
  }
}
</script>