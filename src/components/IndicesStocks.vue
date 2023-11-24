<template>
    <div>
      
  
      <div class="sec-four pt-16 d-inline-flex">
              <v-card class="rounded-0 pl-4 elevation-0 pt-2" color="#000000" width="165px">
                  <v-card class="elevation-0 rounded-0" color="transparent" width="100%">
                      <img class="pl-7" width="100%" src="@/assets/indices&stock.svg">
                  </v-card>
              </v-card>
              <v-card class="rounded-0 px-4 elevation-0" color="#000000" style="max-width:100%">
                  <div class="wrapper">
                      <div class="secfour-scroll " style="max-width:100%">
                          <div class="d-inline-flex" v-for="f in appbarindex" :key="f.text">
                              <v-badge left overlap dot color="#999999" class="barbadge">
                                  <v-list-item style="width: 190px;">
                                      <v-list-item-content class="pb-0">
                                          <v-list-item-title class="caption text-none white--text font-weight-bold">{{ f.name
                                          }}</v-list-item-title>
                                          <v-list-item-subtitle style="color: #999999;" class="caption font-weight-medium">{{
                                              f.price }}</v-list-item-subtitle>
                                      </v-list-item-content>
                                      <v-list-item-content class="text-right pb-1">
                                          <v-list-item-title
                                              :style="`color:${f.per > 0 ? '#43A833' : f.per < 0 ? '#FF1717' : '#999999'} ;`">{{
                                                  f.per > 0 ? '+' : '' }}{{ f.per }}%</v-list-item-title>
                                          <v-list-item-subtitle style="color: #999999;" class="caption font-weight-medium">vol
                                              {{ f.vol / 100000 }}K</v-list-item-subtitle>
                                      </v-list-item-content>
                                  </v-list-item>
                              </v-badge>
                          </div>
                          <div class="d-inline-flex" v-for="f in appbarindex" :key="f.text">
                              <v-badge left overlap dot color="#999999" class="barbadge">
                                  <v-list-item style="width: 190px;">
                                      <v-list-item-content class="pb-0">
                                          <v-list-item-title class="caption text-none white--text font-weight-bold">{{ f.name
                                          }}</v-list-item-title>
                                          <v-list-item-subtitle style="color: #999999;" class="caption font-weight-medium">{{
                                              f.price }}</v-list-item-subtitle>
                                      </v-list-item-content>
                                      <v-list-item-content class="text-right pb-1">
                                          <v-list-item-title
                                              :style="`color:${f.per > 0 ? '#43A833' : f.per < 0 ? '#FF1717' : '#999999'} ;`">{{
                                                  f.per > 0 ? '+' : '' }}{{ f.per }}%</v-list-item-title>
                                          <v-list-item-subtitle style="color: #999999;" class="caption font-weight-medium">vol
                                              {{ f.vol / 100000 }}K</v-list-item-subtitle>
                                      </v-list-item-content>
                                  </v-list-item>
                              </v-badge>
                          </div>
                      </div>
                  </div>
              </v-card>
          </div>
      
    
    </div>
  </template>
  
  <script>
  export default {
  
    data: () => ({
  
  
  
      appbarindex: [
              { name: 'Nifty 50', per: 0.39, price: '₹17,398.05', vol: 2450000, status: true },
              { name: 'Nifty Bank', per: -0.19, price: '₹17,398.05', vol: 160000, status: true },
              { name: 'HDFC Bank', per: 0.18, price: '₹17,398.05', vol: 1450000, status: true },
              { name: 'Sun Pharma', per: -0.05, price: '₹17,398.05', vol: 2350000, status: true },
              { name: 'Adani Ent', per: 0.21, price: '₹17,398.05', vol: 35000, status: true },
              { name: 'ITC', per: 0.29, price: '₹17,398.05', vol: 770000, status: true },
              { name: 'HUL', per: 0.19, price: '₹17,398.05', vol: 650000, status: true },
          ],
    }),
   
  }
  </script>
  <style lang="scss">
  
  
  .barbadge .v-badge__badge {
      position: absolute !important;
      top: 16px !important;
      margin-right: 4px;
  }
  .wrapper {
      max-width: 100% !important; 
      overflow: hidden !important;
  }
  .secfour-scroll {
      white-space: nowrap !important;
      overflow: hidden;
      display: inline-block !important;
      animation: secfour-scroll 24s linear infinite;
  }
  .secfour-scroll p {
      padding-top: 3px;
      color: white;
      display: inline-block;
  }
  @keyframes secfour-scroll {
      0% {
          transform: translate3d(0, 0, 0);
      }
      100% {
          transform: translate3d(-50%, 0, 0);
      }
  }
  
 
  </style>
  