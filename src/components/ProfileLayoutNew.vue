<template>
    <div>
      <div>

        
        <AppBarProfile />


      </div>
      <v-main class="pa-0">
        <div class="">
          <router-view />
        </div>
      </v-main>
    </div>
  </template>
  
  <script>
  import AppBarProfile from '../components/AppBarProfile.vue';
  
  export default {
    name: 'HomeW',
  
    components: {
        AppBarProfile,
    },
  }
  </script>
  
  <style>
  @import "../assets/style/style.css";
  html,
  body,
  .v-application,
  .v-application .display-1,
  .v-application .headline,
  .v-application .title,
  .v-application .subtitle-1,
  .v-application .subtitle-2,
  .v-application .body-1,
  .v-application .body-2,
  .v-application .caption,
  .v-application .overline {
    font-family: 'Inter var', sans-serif !important;
    /* -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important; */
  }
  
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent !important;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #E5EBEC;
    border-radius: 16px;
  }
  </style>
  
  