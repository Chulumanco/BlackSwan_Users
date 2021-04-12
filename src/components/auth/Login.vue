
<template>
<div>
<v-container fill-height>
    <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
            <v-form>
                <v-card class="elevation-12">
                    <v-toolbar dark color="orange">
                        <v-toolbar-title>
                           Login form 
                        </v-toolbar-title>
                        <v-alert
                        color="red"
                        :value="error"
                        icon="close">
                        Incorrect Credentials</v-alert>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field v-model="email"
                        prepend-icon="person"
                        name="login" 
                        label="Login" 
                        type="text" :rules="[rules.required]">
                        </v-text-field>
                         <v-text-field 
                         v-model="password"
                         prepend-icon="lock"
                        name="password" 
                        label="Password" 
                        type="text"  :rules="[rules.required]">
                        </v-text-field>
                    </v-card-text>
                    <v-divider light></v-divider>
                    <v-card-actions>
                         <v-btn rounded color="black" dark @click.prevent="login()">Login</v-btn>
                         <v-spacer></v-spacer>
                        <v-btn rounded color="black" dark to="/register">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-flex>
    </v-layout>
</v-container>

<!-- <div class="footer">
    <p>&copy; BlackSwan Group</p>
</div> -->
</div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {    
    name:'login',
    data:() =>({
      email:'',
      password:'',
      error:false,
       rules: {
      required: (value) => !!value || "Required Field",
       }
    }),
   
    methods:{
        login(){
            this.$store.dispatch("LOGIN",{
                email:this.email,
                password:this.password,
            })
            // eslint-disable-next-line no-unused-vars
            .then(success =>{
                this.$router.push({name:'home'})
            // eslint-disable-next-line no-unused-vars
            }).catch(error=>{
                this.error=true;

            })
        }
    }
}
</script>
<style lang="scss">
 @import 'src/assets/styles/_variables.scss'
</style>


