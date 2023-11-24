<template>
    <div>
      <v-container class="pl-0 pt-0 pb-1 pr-0 mt-5"> 
        <p class="mb-3 pt-4" style="color: #999;font-size: 17px;font-weight: 469;line-height: 16px; letter-spacing: -0.36px;">Holdings</p>
        <v-toolbar class="bodytoolbar pr-0" flat dense>
          <v-tabs fixed ss centered class="ml-n9"   color="#000000" v-model="bodytabs">
            <v-tab @click="positiontab(index)" v-for="(t, index) in maintabs" :key="index" class="text-none text-start ml-2" style="min-width: fit-content">
              <span class="text-center" 
                style=";font-size: 15px;letter-spacing: -0.59px;font-weight:469;line-height:10px;font-style: normal;width:fit-content">{{ t }}</span></v-tab>
            <v-tabs-slider class="" color="#000000"></v-tabs-slider>
          </v-tabs>
          <v-spacer></v-spacer>
          <span class="text-capitalize" style="word-wrap: break-word;font-size:14px;font-weight:400;color:#000000;width:120px;"><v-icon
              color="#1FD601" size="6">mdi-checkbox-blank-circle</v-icon> Market live</span>
        </v-toolbar>
        <v-divider class="ml-"></v-divider>
      </v-container>
      <v-container class="pa-0">
  
        <v-tabs-items v-model="bodytabs">
          <v-tab-item>
          </v-tab-item>
          <v-tab-item>
          </v-tab-item>
          <v-tab-item>
          
          </v-tab-item>
        </v-tabs-items>
      </v-container>
      <v-main class="pa-0">
  
        <div class="">
          <v-container class="px-0">
            <router-view /></v-container>
        </div>
      </v-main>
    </div>
  </template>
  
  <script>
  export default {
  
    data: () => ({
  
      maintabs: [
        'Overview',
        'Stocks',
        'Mutul Funds',
        'Bonds',
 
      ],
      bodytabs: null,
    }),
    methods: {
        positiontab(index) {
        if (this.bodytabs != index) {
          this.bodytabs = index
  
          if (this.bodytabs == "0") {
            this.$router.push('#')
          }
          else if (this.bodytabs == "1") {
            this.$router.push('/holdingstock')
          }
          else if (this.bodytabs == "2") {
            this.$router.push('holdingmutual')
          }
          else if (this.bodytabs == "3") {
            this.$router.push('#')
          }
          
        }
      },
    },
    mounted() {
      let path = window.location.pathname;
      if (path == '') {
        this.bodytabs = "0";
      }
      else if (path == '/holdingstock') {
        this.bodytabs =1;
      }
      else if (path == 'holdingmutual') {
        this.bodytabs = 2;
      }
      else if (path == 'holdingstock') {
        this.bodytabs = 3;
      }
    
    },
  }
  </script>
  <style lang="scss">
  .v-toolbar__content, .v-toolbar__extension { 
    padding-right: 0px !important;
    text-align: end !important;
  }
  .bodytoolbar {
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active){
    color:#666666 !important;
    font-weight: 469 !important;
    letter-spacing: -1px !important;
    font-size: 16px !important;
    line-height: 16px !important;
  }}
  </style>
  