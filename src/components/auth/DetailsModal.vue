<template>
    <v-layout row justify-center>
        <v-dialog v-model="open" max-width="60%" scrollable>
            <v-card>
                 <v-card-title>
                     <span class="Headline">Message</span>
                 </v-card-title>
          
            <v-card-text>
                <v-container>
                    <v-form>
                   <v-list three-line subheader>
                       <v-list-item v-for="(user,key) in userdetails"  v-bind:key="key">
                    <v-subheader>
                     {{name}}{{' '}}{{surname}}
                    </v-subheader>
                    <v-subheader>
                   {{companyname}}
                    </v-subheader>
                     <v-subheader>
                    {{phonenumber}}
                    </v-subheader>
                     <v-subheader>
                    {{email}}
                    </v-subheader>
                        <template>
                        <v-textarea outlined>
                         {{message}}
                        </v-textarea>
                        </template>
                     </v-list-item>
               
                 </v-list>
                    </v-form>
                </v-container>
               
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary">Close</v-btn>
                <v-spacer></v-spacer>
                  <v-btn color="red" dark>Delete Message</v-btn>
            </v-card-actions>
              </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
export default {
   name:"detailsModal",
   data: ()=>({
       open: true,
       userdetails:[
           {
            id:1,
            fullname:"Chulumanco",
            surname: "Mchiza",
            phonenumber:"0760404025",
            email:"chulzmch@gmail.com",
            companyname:"Black Swan",
            message:"I would like for a couple of things to be fixed"
           }
       ]
   })
}
</script>