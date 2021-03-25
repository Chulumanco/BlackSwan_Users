/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="orange">
            <v-toolbar-title class="flex text-center">
              Register
            </v-toolbar-title>
          </v-toolbar>
          <v-form>
            <v-alert icon="warning" :value="userExists" color="error" dark>
              <!-- add icon="warning"> -->
              User exists
            </v-alert>
             <v-text-field
              prepend-icon="mail"
              v-model="email"
              name="email"
              label="Email"
              :rules="[rules.required, rules.email]"
            >

            </v-text-field>
            <v-text-field
              prepend-icon="person"
              v-model="name"
              name="name"
              label="Name"
              :rules="[rules.required]"
            >
            </v-text-field>

            <v-text-field
              prepend-icon="person"
              v-model="surname"
              name="surname"
              label="Surname"
              :rules="[rules.required]"
            >
            </v-text-field>

            <v-text-field
              prepend-icon="contact_phone"
              v-model="phone"
              name="phone"
              label="Phone"
              :rules="[rules.required]"
            >
            </v-text-field>
            <v-select
              repend-icon="business"
            :v-model="companyName"
            :items="items"
            item-text="name"
            label="Select"
           :rules="[rules.required]"
          ></v-select>

           

            <v-text-field
              prepend-icon="lock"
            
              name="password"
              label="Password"
              :rules="[rules.required]"
              v-model="password"
            >
            </v-text-field>

            <v-text-field
              prepend-icon="lock"
              name="confirm_password"
              label="Confirm Pasword"
              :rules="[rules.required]"
              v-model="confirm_password"
              :error="!valid()"
            >
            </v-text-field>
            <v-divider light></v-divider>
          </v-form>

          <v-card-actions>
            <v-btn rounded color="black" dark to="/login">Login</v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded color="success" @click="register()">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "Register",
  data: () => ({
    userExists:false,
    email: "",
    name: "",
    surname: "",
    phone:"",
    companyName: { name: "" },
    items: [
      { name: "Digital Kungfu" },
      { name: "FireSaleHardware" },
      { name: "Pipeline Generato" },
      { name: "TechLeadBay" },
      { name: "Trident of Poseidon" },
    ],
    password: "",

    confirm_password: "",
    rules: {
      required: (value) => !!value || "Required Field",
      email: (value) => {
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return (
          pattern.test(value) ||
          "Invalid Email, Please enter a valid Email Address"
        );
      },
    },
  }),
  methods: {
   
    register() {
        
      if(this.valid()){
            this.$store.dispatch("REGISTER",{
                email:this.email,
                name:this.name,
                surname:this.surname,
                phone:this.phone,
                companyName:"Digital Kungfu",
                plainPassword: this.password
          // eslint-disable-next-line no-unused-vars
          }).then(({status})=>{
              this.$store.commit("SET_NOTIFICATION",{
                display:true,
                message:"Your Account Has been created", 
                alartClass:"danger"
                });
               this.$router.push("/login");
          // eslint-disable-next-line no-unused-vars
          }).catch(error=>{
            this.userExists=true; 
          })
      }
    
    },
    valid() {
      return (
        this.password === this.confirm_password || "Passwords do not match"
      );
    },
  },
};
</script>
