<template >
  <v-navigation-drawer permanent style="width: 100%; overflow: hidden">
    <v-toolbar color="orange" dark>
      <v-list-item-title v-if="!DISPLAY_SEARCH_LIST">Company</v-list-item-title>
      <Search  v-if="DISPLAY_SEARCH_LIST"/>
      <v-spacer></v-spacer>
      <v-btn search dark @click.prevent="toggleSearchList()">
        <v-icon color="white">search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-divider></v-divider>
    <v-list style="height: calc(100%-128px):overflow-y:scroll">
      <v-list-item 
      :to="{name: 'employeedetails', params:{id: company.id}}"
      v-for="(contact, key) in contacts" 
      v-bind:key="key">
        <v-list-item-content>
          <v-list-item-title><strong>{{ contact.name }}</strong></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import Search from './Search'
import {mapGetters} from 'vuex'
export default {
  name: "lists",
  components: {Search},
  data: () => ({}),
  computed:{
    ...mapGetters(['DISPLAY_SEARCH_LIST','CONTACTS'])
  },
  methods: {
    toggleSearchList() {
      this.$store.commit("SET_DISPLAY_SEARCH_LIST",!this.SET_DISPLAY_SEARCH_LIST);
    }
  },
  mounted(){
    this.$store.dispatch("GET_CONTACTS")
  }
};
</script>