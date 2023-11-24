<template>
  <div class="pa-0 OverAllPageScroll">
    <div class="pa-0">
      <AppBar />
    </div>
    <v-main class="pa-0">
      <div class="">
        <router-view />
      </div>
    </v-main>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue';

export default {
  name: 'HomeW',

  components: {
    AppBar,
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
  width: 6px !important;
  height: 6px !important;
}

::-webkit-scrollbar-track {
  background-color: transparent !important;
}

::-webkit-scrollbar-thumb {
  background: #E5EBEC;
  border-radius: 16px;
}
</style>

