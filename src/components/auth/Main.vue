<template>
<div style="max-height:96.6vh; max-height:100%">
  <v-container  fluid fill-height pl-0 pb-0 pt-0> 
 <v-layout row align-space-between justify-space-between>
        <v-flex lg3 pr-2>
     <Lists />
        </v-flex>
        <v-flex lg6 pr-2 pl-2>
        <router-view name="employeedetails" :key="$route.fullPath"></router-view> 
        </v-flex>
        <v-flex lg3 pr-2>
          <Options />
        </v-flex>
    </v-layout>
  </v-container>
  <!-- <div class="footer">
    <p>&copy; BlackSwan Group</p>
</div> -->
  <Notification />
</div>
</template>

<script>
 import Lists from './Lists'
 import Options from '../auth/Options'
 import Notification from '../auth/Notification'

// import { mapGetters,} from "vuex"

export default {
    name:"Main",
    components: { Lists, Options,Notification },
    computed: {
    // ...mapGetters({Contacts: "", User: "user"}),
  },
  //   computed:{
 
  //     loggedIN : function(){ return this.$store.getters.isLoggedIN}
    
  // },
};

</script>
<style lang="scss">
 @import 'src/assets/styles/_variables.scss'
</style>
