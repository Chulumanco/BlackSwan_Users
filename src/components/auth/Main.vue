<template>
<div style="max-height:96.6vh; max-height:100%">
  <v-container  fluid fill-height pl-0 pb-0 pt-0> 
 <v-layout row align-space-between justify-space-between>
        <v-flex lg3 pr-2>
        <!-- <router-view></router-view> --><Lists />
        </v-flex>
        <v-flex lg6 pr-2 pl-2>
        <router-view name="employeedetails" :key="$route.fullPath"></router-view> 
        </v-flex>
        <v-flex lg3 pr-2>
          <Options />
        </v-flex>
    </v-layout>
  </v-container>
  <div class="footer">
    <p>&copy; BlackSwan Group</p>
</div>
  <!-- <v-footer height="auto" color="black">
      <v-layout justify-center>
          <v-flex black white--text text-xs-center>
              &copy;2021
              <strong >Blackswan Group</strong>
          </v-flex>
      </v-layout>
  </v-footer> -->
  <Notification />
  <!-- <v-footer>
      <v-layout justify-center>
          <v-flex indigo>
              &copy:2021
          </v-flex>
      </v-layout>

  </v-footer> -->
</div>
</template>

<script>
import Lists from './Lists'
// import Details from '../auth/Details'
 import Options from '../auth/Options'
 import Notification from '../auth/Notification'
export default {
    name:"Main",
    components: { Lists,Options,Notification }
};

</script>
<style lang="scss">
@import 'src/assets/styles/_variables.scss'
</style>
