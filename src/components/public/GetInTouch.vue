<template>
  <v-layout row justify-center>
    <v-dialog v-model="showModal" max-width="60%" scrollable>
      <v-card>
        <!-- <v-card-title>
          <span class="Headline">Message</span>
        </v-card-title> -->
        <v-card-text>
          <v-container>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="fullname"
                      :rules="nameRules"
                      label="First name"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      label="Last name"
                      required
                    ></v-text-field>
                  </v-col>
                  <!-- <v-col class="d-flex" cols="12" sm="4">
                    <v-select
                      :items="companyName"
                      label="Company Name"
                      required
                    ></v-select>
                  </v-col> -->
                </v-row>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="phonenumber"
                      :rules="nameRules"
                      label="Phone No"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-textarea
                      clearable
                      clear-icon="mdi-close-circle"
                      label="Message"
                      value="Send Message to black swan:  "
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="hide">Close</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="green" dark @click="submit()">Send Message</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  name: "formModal",
  data: () => ({
    showModal: false,

    // id: Number,
    fullname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    // companyName: ['DigitalKungfu', 'FireSaleHardware', 'Pipleline Generator', 'TechLeadBay','TechDealNetwork'],
    message: "",
    
    nameRules: [(v) => !!v || "Required Field"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed:{
 
      loggedIN : function(){ return this.$store.getters.loggedIN},
      userId: function(){ return this.$store.getters.loggedInUser}
    
  },
  methods: {
    submit() {
      this.$store
        .dispatch("POST_MESSAGE", {
          fullname: this.fullname,
          lastname: this.lastname,
          ponenumber: this.phonenumber,
          email: this.email,
          message: this.message,
          user:this.userId
        })
        .then((response) => {
          this.$store.commit("SET_NOTIFICATION", {
            display: true,
            text: "Message Sent",
            alertClass: "success",
          });
          (this.fullname = ""),
            (this.lastname = ""),
            (this.phonenumber = ""),
            (this.email = ""),
            (this.message = "");
          this.$router.push({
            name: "employeedetails",
            params: {
              id: response.data.id,
            },
          });
        });
    },

    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
  },
};
</script>