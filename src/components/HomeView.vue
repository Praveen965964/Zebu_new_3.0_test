<template>
  <div  class="pl-3 pr-3 pr-md-0 pl-lg-0">
    
    <v-container class="pl-0 pt-0 pb-1 pr-0 mt-5 "> 
      <v-toolbar class="bodytoolbar pr-0 ml-n2 d-none d-sm-block mt-sm-16 mt-md-0" flat dense>
        <v-tabs fixed ss centered class="ml-n"   color="#000000" v-model="bodytab">
          <v-tab @click="hometab(index)" v-for="(t, index) in maintab" :key="index" class="text-none text-start ml-2" style="min-width: fit-content">
            <span class="text-center pl-lg-2 pr-lg-2 pl-sm-2 pr-sm-2 pl-md-0 pr-md-0" 
              style=";font-size: 15px;letter-spacing: -0.20px;font-weight:469;line-height:10px;width:fit-content">{{ t }}</span></v-tab>
          <v-tabs-slider class="" color="#000000"></v-tabs-slider>
        </v-tabs>
        <v-spacer></v-spacer>
        <span class="text-capitalize text-sm-start text-end" style="font-size:14px;font-weight:400;color:#000000;width:120px;"><v-icon
            color="#1FD601" size="6">mdi-checkbox-blank-circle</v-icon> Market live</span>
      </v-toolbar>
      <v-divider class=""></v-divider>
    </v-container>
  
    <v-main class="pa-0">
      <div class="">
        <v-container class="px-0">
          <router-view /></v-container>
      </div>
    </v-main>




    <!-- style="position:fixed;bottom:0" -->
<div class="d-block d-sm-none" >
    <v-bottom-navigation class="" 
    :value="valuess"
    color="#000"
    vertical  style="position:fixed;bottom:0"
  >
  <!-- hide-overlay -->
  <v-bottom-sheet   v-model="bottomsheetControl"  >
      <v-sheet style="margin-top: -389px;border-radius: 16px 16px 0px 0px;"
        class="pt-8"
        height="331px" 
      >
      <p class="mb-3 pl-6" style="color: #000;font-size: 16px;font-weight: 559;line-height: 100%; letter-spacing: -0.32px;">Select Products</p>
<div  v-for="d  in bottomsheetItems"  :key="d.title">
      <div class="display-flex row pr-5 pl-5 pt-3" >
        <v-btn  @click="radioButtonCustamaize(d),column=d.text"  :ripple="false" text plain :to="d.link" width="100%">
  <p class="mb-0 pt-4 " @click="radioButtonCustamaize(d),column=d.text" style="color: var(--Grey, #666);font-size: 14px;font-weight: 469;line-height: 100%;letter-spacing: -0.28px;">{{d.title}}</p>

    <v-radio-group  class="ml-auto mt-2 mb-2" v-model="column" >
      <v-radio dense :ripple="false"  :value="d.text"  color="black">
        <!-- <template v-slot:label>
          <p class="float-left">djdjd</p>
        </template> -->
      </v-radio>
    </v-radio-group></v-btn>
</div>
<v-divider class="mr-5 ml-6 mt-5"></v-divider>
</div>
      </v-sheet>
    </v-bottom-sheet>
    <v-btn  class="pa-0 pl-2 pr-2" text plain @click="bottomsheetControl = !bottomsheetControl"  style="min-width:fit-content ;">
      <span class="" style="color: var(--Black, #000);text-align: center;font-size: 12px;font-weight: 559;line-height: 16px;">Stocks <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
<path d="M9 2L5.5 5.5L2 2" stroke="black" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="square"/>
</svg></span>

     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M16.957 11.916C19.2352 11.916 21.082 10.0692 21.082 7.79102C21.082 5.51284 19.2352 3.66602 16.957 3.66602C14.6789 3.66602 12.832 5.51284 12.832 7.79102C12.832 10.0692 14.6789 11.916 16.957 11.916Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M11.9167 13.75H5.5V20.1667H11.9167V13.75Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M1.83203 9.16667L5.4987 2.75L9.16536 9.16667H1.83203Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="square"/>
</svg>
    </v-btn>

    <v-btn class="pa-0 pl-2 pr-2" text plain >
      <span style="color:var(--Black, #000);text-align: center;font-size: 12px;font-weight: 500;line-height: 16px;">Watchlist</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
<path d="M11.4609 6.99023V11.5617" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.14062 9.27734H13.7824" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.4253 19.1816L11.4626 15.3721L4.5 19.1816V4.70545C4.5 4.30131 4.66301 3.91372 4.95318 3.62795C5.24335 3.34218 5.6369 3.18164 6.04725 3.18164H16.878C17.2884 3.18164 17.6819 3.34218 17.9721 3.62795C18.2623 3.91372 18.4253 4.30131 18.4253 4.70545V19.1816Z" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </v-btn>

    <v-btn class="pa-0 pl-2 pr-2" text plain style="min-width:fit-content ;">
      <span style="color:var(--Black, #000);text-align: center;font-size: 12px;font-weight: 500;line-height: 16px;">Portfolio</span>

      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M7.71484 6.37662V3H13.4291V6.37662" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.85714 13.1302H2V7.50249C2 7.20398 2.12041 6.9177 2.33474 6.70662C2.54906 6.49554 2.83975 6.37695 3.14286 6.37695H18C18.3031 6.37695 18.5938 6.49554 18.8081 6.70662C19.0224 6.9177 19.1429 7.20398 19.1429 7.50249V13.1302H12.2857" stroke="#666666" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9978 15.3809V17.6319C17.9978 17.9305 17.8774 18.2167 17.663 18.4278C17.4487 18.6389 17.158 18.7575 16.8549 18.7575H4.28348C3.98038 18.7575 3.68969 18.6389 3.47536 18.4278C3.26103 18.2167 3.14063 17.9305 3.14062 17.6319V15.3809" stroke="#666666" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.2879 10.8789H8.85938V15.3811H12.2879V10.8789Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </v-btn>
    <v-btn class="pa-0 pl-2 pr-2" text plain style="min-width:fit-content ;" >
      <span style="color:var(--Black, #000);text-align: center;font-size: 12px;font-weight: 500;line-height: 16px;"> Positions</span>

      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
<path d="M6.83333 14.666H3.5V19.666H6.83333V14.666Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M13.5013 8.83398H10.168V19.6673H13.5013V8.83398Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M20.1654 3H16.832V19.6667H20.1654V3Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="square"/>
</svg>
    </v-btn>
    <v-btn class="pa-0 pl-2 pr-2" text plain style="min-width:fit-content ;">
      <span style="color:var(--Black, #000);text-align: center;font-size: 12px;font-weight: 500;line-height: 16px;">Orders</span>

     <div ><svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
<g opacity="0.8">
<path d="M4 6.00195H19" stroke="black" stroke-width="1.4" stroke-miterlimit="10"/>
<path d="M19 19.5H4V6L7 3H16L19 6V19.5Z" stroke="black" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="square"/>
<path d="M15.25 9.75C15.25 11.85 13.6 13.5 11.5 13.5C9.4 13.5 7.75 11.85 7.75 9.75" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="square"/>
</g>
</svg></div>
    </v-btn>

  </v-bottom-navigation>
</div>
    
  </div>
</template>
<script>
export default {
  data: () => ({
    column: '',
    valuess:0,
    radios:null,
    bottomsheetControl:false,
    bottomsheetItems:[
      {
title: "Stocks", link: '/stock',text: 'Radio 1'
      },
      {
    title: "Mutual Funds", link: '/mutualfund' , text: 'Radio 2'
      },
      {
    title: "Future & Options",link:"fo", text: 'Radio 3'
      },
      {
    title: "IPOs", link: '/ipo' , text: 'Radio 4'
      },
      {
    title: "Bonds", link: '/goldbond' , text: 'Radio 5'
      },
      {
    title: "Commodities" , text: 'Radio 5' ,link: '/commoditie'
      },
      {
    title: "Currency", text: 'Radio 6' ,link: '/currency'
      },
    ],
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    maintab: ['Stocks','Mutual Fund','F&O','IPOs','Gold bonds','Commodities','Currency','US stocks' ],
    bodytab: null,
    jjjjsjsjddjdjd:null,
  }),
  methods: {
    radioButtonCustamaize() {

      // if( this.column != '' ) {
      //   this.column  = d.text
console.log(this.column,"ttttttttt")
if(this.column == 'Radio 1') {
  this.$router.push('stock').catch(()=>{});
  this.bottomsheetControl =false
}
else if(this.column == 'Radio 2') {
this.$router.push('mutualfund').catch(()=>{});
this.bottomsheetControl =false
}
else if(this.column == 'Radio 3') {
this.$router.push('fo').catch(()=>{});
this.bottomsheetControl =false
}
else if(this.column == 'Radio 4') {
this.$router.push('ipo').catch(()=>{});   
this.bottomsheetControl =false
}
else if(this.column == 'Radio 5') {
this.$router.push('goldbond').catch(()=>{});
this.bottomsheetControl =false
}
else if(this.column == 'Radio 6') {
this.$router.push('commoditie').catch(()=>{});
this.bottomsheetControl =false
}
else if(this.column == 'Radio 7') {
this.$router.push('currency').catch(()=>{});
this.bottomsheetControl =false
}
// }



    },
    hometab(index) {
      if (this.bodytab != index) {
        this.bodytab = index

        if (this.bodytab == "0") {
          this.$router.push('stock')
        }
      
        else if (this.bodytab == "1") {
          this.$router.push('mutualfund')
        }
        else if (this.bodytab == "2" ) {
          this.$router.push('fo')
        }
        else if (this.bodytab == "3") {
          this.$router.push('ipo')
        }
        else if (this.bodytab == "4") {
          this.$router.push('goldbond')
        }
        else if (this.bodytab == "5") {
          this.$router.push('commoditie')
        }
        else if (this.bodytab == "6") {
          this.$router.push('currency')
        }
        else if (this.bodytab == "7") {
          this.$router.push('usstock')
        }
      }
    },
  },
  mounted() {
    let path = window.location.pathname;
    if (path == '/stock') {
      this.bodytab = 0;
    }
    else if (path == '/mutualfund') {
      this.bodytab = 1;
    }
    else if (path == '/fo' ||  path == '/fodetailes' || path == '/stocksfo' || path == '/StckOptinchain') {
      this.bodytab = 2;
    }
    else if (path == '/ipo') {
      this.bodytab = 3;
    }
    else if (path == '/goldbond' ) {
      this.bodytab = 4;
    }
    else if (path == '/commoditie') {
      this.bodytab = 5;
    }
   
    else if (path == '/commodititesdetailes') {
      this.bodytab = 5;
    }
    else if (path == '/currency') {
      this.bodytab = 6;
    }
    else if (path == '/usstock') {
      this.bodytab = 7;
    }
    else if (path == '/goldbondcategory') {
      this.bodytab = 4;
    }
    // console.log("hhhdh", path)
  },
}
</script>
<style lang="scss">
@media (max-width: 1264px) {
  .container {
    max-width:none !important;
  }
}
.v-item-group.v-bottom-navigation .v-btn.v-btn--active {
  border-top: solid !important;
}
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

// .v-tab.v-tab {
//   color:#000000 !important;
//   font-weight: bold !important;
//   letter-spacing: -1px !important;
//   font-size: 16px !important;
//   line-height: 16px !important;
// }
</style>
