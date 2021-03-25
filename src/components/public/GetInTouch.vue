<template>
  <div>
    <form class="vue-form">
         <div class="error-message">
      <p v-show="!email.valid">Oh, please enter a valid email address.</p>
    </div>
      <fieldset>

        <legend class="reservation-form-title">Get In Touch</legend>
        <div>
          <label class="label" for="name">Name</label>
          <input type="text" name="name" v-model="name" required="" />
        </div>
         <div>
          <label class="label" for="name">Surname</label>
          <input type="text" name="name" v-model="surname" required="" />
        </div>
        <div>
          <label class="label" for="phone">Phone Number</label>
          <input type="text" name="phone" v-model="phone" required="" />
        </div>
        <div>
          <label class="label" for="email">Email</label>
          <input type="email" name="email" :class="{ email , error: !email.valid }"
               v-model="email.value"  />
        </div>

        <div>
          <label class="label" for="textarea">Message</label>
          <textarea class="message" name="textarea" v-model="message" required="" ></textarea>
          <span class="counter"></span>
        </div>
      </fieldset>
      <v-spacer></v-spacer>
     <v-btn rounded color="success" @click="createMessage()">Sende Message</v-btn>
    </form>
  </div>
</template>

<script>
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default {
  name: "getInTouch",
  data: () => ({
    errored: false,
    name: "",
    surname: "",
    phone: "",
    email: {
        value: "jo@hnd.oe",
        valid: true
      },
    message: "",
    user:""
      
  }),
  methods:{
      createMessage() {
        
          this.$store.dispatch("ADD_MESSAGE",{
                        name:this.name,
                        surname:this.surname,
                        phone:this.phone,
                        email:this.email,
                        message:this.message,
                        user:this.user
          // eslint-disable-next-line no-unused-vars
          }).then(({status})=>{
             console.log("Message sent")
          // eslint-disable-next-line no-unused-vars
          }).catch(error=>{
            this.errored=true; 
          })
      

      },
     
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    
  watch: {
    // watching nested property
    "email.value": function(value) {
      this.validate("email", value);
    }
  }
  }
};
</script>
<style lang="scss">
@import "src/assets/styles/form.scss";
</style>