<template >
  <div v-if="show">
  <v-card height="100%">
    <v-toolbar color="pink" dark>
      <v-toolbar-title>Options</v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-list-group
        v-for="(item, key) in items"
        v-bind:key="key"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action  
      >
        <v-list-item slot="activator">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(subItem, key) in items"
          v-bind:key="key"
          v-on="
            item.action === 'sort'
              ? { click: () => subItem.by }
              : { click: () => filter(subItem.by) }
          "
          active-class
        >
          <v-list-item-content>
            <v-list-item-title>{{subItem.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-group prepend-icon="filter" no-action>
        <v-list-item slot="activator">
          <v-list-item-content>
            List Options
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Remove List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item @click.prevent="openDrawer()">
          <v-list-item-content>
            <v-list-item-title>Change Background</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
  <MoreOptions v-if="true"/>
  </div>
</template>
<script>
import MoreOptions from './MoreOptions'
export default {
  name: "Options",
  components:{ MoreOptions },
  data: () => ({
    items: [
      {
        action: "sort",
        title: "Sort By",
        active: true,
        items: [
          {
            title: "Name",
            by: "user_name",
          },
          {
            title: "Company",
            by: "company",
          },
        ],
      },
        {
        action: "filter_list",
        title: "Filter By",
        active: true,
        items: [
          {
            id:1,
            title: "Answered",
            by: "Answered",
          },
          {
            id:2,
            title: "Unanswered",
            by: "unanswered",
          },
        ],
      },
    ],
  }),
  computed:{
    show(){
      return this.$route.params.id;
    }
  },
  methods: {
    sort(value) {
      console.log("Sort By" + value);
    },
    filter(value) {
      console.log("Filter by " + value);
    },
    openDrawer(){
      this.$store.commit("SET_DRAWER",true);
    }
  },
};
</script>