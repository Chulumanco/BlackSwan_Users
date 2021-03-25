<template >
<!-- App.vue -->

<v-app>
  <v-navigation-drawer app >
       <v-toolbar>
            <v-btn
              icon
              class="hidden-xs-only"
            >
            
            </v-btn>

            <v-toolbar-title >Search</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>

       <v-toolbar dark color="orange">
        
                        <v-toolbar-title>
                          All Messages
                        </v-toolbar-title>
                    </v-toolbar>
    <!-- -->
  </v-navigation-drawer>

  <v-app-bar app>
    <!-- -->
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      Message
    </v-container>
  </v-main>

 
</v-app>


</template>
<script>
export default {
    name:"Lists",

};

</script>
