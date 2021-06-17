<template>

<v-app class="grey lighten-3">
  <v-main>
    Mi app de Crowdfunding.hh v content

 <v-container>
        <v-layout
          text-xs-center
          wrap
        >
          <v-flex mb-4>
            <h1 class="display-2 font-weight-bold mb-3">
              Crowdfunding
            </h1>
            <p class="subheading font-weight-regular">
              Utilizing Ethereum for Decentralized Crowdfunding
            </p>
          </v-flex>
        </v-layout>

         <v-layout row justify-center>
        <v-dialog v-model="startProjectDialog" max-width="600px" persistent>
        <v-btn slot="activator" color="primary" dark>Start a Project</v-btn>



        </v-dialog>
        </v-layout>

 </v-card>

                </v-container>











  </v-main>





</v-app>



</template>

<script>
//import crowdfundInstance from '../contracts/crowdfundInstance';


//import crowdfundProject from '../contracts/crowdfundProjectInstance';

//import web3 from '../contracts/web3';



export default {
  name: 'App',

  components: {
 //   HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
