<template>
    <v-container fluid fill-height>
        <v-layout justify-center  align-content>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                 <v-toolbar dark color="orange">
                  <v-toolbar-title class="flex text-center">
                      Register
                  </v-toolbar-title>
                 </v-toolbar>
                 <v-form>
                     <v-alert
                     icon="warning"
                     :value="true"
                     color="error" dark
                    >
                        <!-- add icon="warning"> -->
                      User exists  
                     </v-alert>
                     <v-text-field 
                     prepend-icon="person"
                     name="username"
                     label="Username"
                      :rules="[rules.required]">
                 <!-- .//  add icon  append-icon="person" -->
                     </v-text-field>

                     <v-text-field  
                     prepend-icon="mail" 
                     name="email"
                     label="Email"
                    :rules="[rules.required,rules.email]">
                     </v-text-field>

                       <v-text-field   
                       prepend-icon="lock"
                     name="password"
                     label="Password"
                    :rules="[rules.required]"
                    type="password"
                    v-model="password">
                     </v-text-field>

                       <v-text-field  
                       prepend-icon="lock" 
                     name="confirm_password"
                     label="Confirm Pasword"
                    :rules="[rules.required]"
                     type="password"
                     v-model="confirm_password"
                     :error="!valid()">
                     </v-text-field>
                         <v-divider light></v-divider>
                 </v-form>
             
                     <v-card-actions>
                         <v-btn rounded color="black" dark>Login</v-btn>
                         <v-spacer></v-spacer>
                         <v-btn rounded color="success">Register</v-btn>
                     </v-card-actions>
                </v-card>
               
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'


export default {
  name:"Register",
  data: ()=>({
    password:"",
    confirm_password:"",
      rules: {
          required: value => !!value || "Required Field",
          email: value => {
             const pattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
             return pattern.test(value) || "Invalid Email, Please enter a valid Email Address";  
          }

      }
        }),
        methods:{
            valid(){
                return this.password===this.confirm_password ||"Passwords do not match"
            }
        }
    }

</script>
