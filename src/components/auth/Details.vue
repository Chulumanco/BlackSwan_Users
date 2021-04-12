<template>
  <div style="height: 100%">
    <v-card style="height: 100%; overflow: hidden">
      <v-toolbar color="orange" dark>
        <v-toolbar-title> Message Details {{ listId }} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn search dark>
          <v-icon color="white">search</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list two-line>
        <template v-for="(users, key) in users">
          <Detail v-bind:key="key" :users="users" />
        </template>
      </v-list>
    </v-card>
    <router-view name="detailsModal" :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
import Detail from "./Detail";
//import DetailsModal from './DetailsModal'
export default {
  name: "employeedetails",
  components: { Detail},
  data: () => ({
    users: [
      {
        id: 1,
        user_name: "Kyrie Irving",
        message:
          "Kyrie Andrew Irving is an American professional basketball player for the Brooklyn Nets of the National Basketball Association. He was named the Rookie of the Year after being selected by the Cleveland Cavaliers with the first overall pick in the 2011 NBA draft.",
        company: "Firebase Store",
        isRead: false,
      },
      {
        id: 2,
        user_name: "Aphelele Fassie",
        message:
          "Aphelele Onke Okuhle Fassi is a South African professional rugby union player for the Sharks in Super Rugby and the Currie Cup. His regular position is wing or fullback",
        company: "Ninja",
        isRead: true,
      },
      {
        id: 3,
        user_name: "Mesut Ozil",
        message:
          "Mesut Özil is a German professional footballer who plays as an attacking midfielder for Süper Lig club Fenerbahçe. Nicknamed The Assist King,",
        company: "Black Swan",
        isRead: true,
      },
      {
        id: 4,
        user_name: "Damian Lamonte Ollie Lillard Sr.",
        message:
          "Damian Lamonte Ollie Lillard Sr. is an American professional basketball player for the Portland Trail Blazers of the National Basketball Association. He played college basketball for the Weber State Wildcats and earned third-team All-American honors in 2012",
        company: "Black Swan",
        isRead: false,
      },
      {
        id: 5,
        user_name: "AB de Villiers",
        message:
          "Abraham Benjamin de Villiers is a South African cricketer. Widely regarded as one of the greatest batsmen of all time, he was named as the ICC ODI Player of the Year three times during his 15-year international career ",
        company: "Black swan",
        isRead: true,
      },
      {
        id: 6,
        user_name: "Handrè Pollard",
        message:
          "Handré Pollard is a South African professional rugby union player who currently plays for the South Africa national team and Montpellier in the French Top 14",
        company: "Black Swan",
        isRead: false,
      },
      {
        id: 7,
        user_name: "Damian Willemse ",
        message:
          "Damian Willemse is a South African rugby union player for the South Africa national team and the Stormers in Super Rugby and Western Province in the Currie Cup. His regular position is fly-half, but he can also play as a fullback or inside centre",
        company: "Black Swan",
        isRead: false,
      },
      {
        id: 8,
        user_name: "Martin Ødegaard ",
        message:
          "Martin Ødegaard is a Norwegian professional footballer who plays as an attacking midfielder for Premier League club Arsenal, on loan from Real Madrid of La Liga, and the Norway national team, whom he captains",
        company: "Black Swan",
        isRead: true,
      },
    ],
  }),
  computed: {
    listId () {
      return this.$route.params.id;
    },
  },
};
</script>
