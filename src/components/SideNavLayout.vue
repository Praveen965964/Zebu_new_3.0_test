<template>
    <div>
      <v-container class="pr-0">
      <div>
        <!-- <v-container> -->
        <SideNav />
      <!-- </v-container> -->
      </div>
      <v-main class="mt-16 pt-1">
        <div class="">
          <router-view />
        </div>
      </v-main></v-container>
    </div>
  </template>
  
  <script>
  import SideNav from '../components/SideNav.vue';
  
  export default {
    name: 'HomeW',
  
    components: {
      SideNav,
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
  
  