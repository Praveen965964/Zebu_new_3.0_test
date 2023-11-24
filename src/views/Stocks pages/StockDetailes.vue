<style>
*,
html,
body .v-application,
.v-application .display-4,
.v-application .display-3,
.v-application .display-1,
.v-application .headline,
.v-application .title,
.v-application .subtitle-1,
.v-application .subtitle-2,
.v-application .body-1,
.v-application .body-2,
.v-application .caption,
.v-application .overline {
  font-family: "Inter var", sans-serif !important;
}

.custom-active-class {
  background-color: red; /* Set your desired background color */
  color: white; /* Set your desired text color */
}

.switch {
  position: relative;
  display: inline-block;
  width: 35px;
  height: 20px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.sliderr {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.sliderr:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 10px;
  left: 0px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .sliderr {
  background-color: #2196F3;
}

input:focus + .sliderr {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .sliderr:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* roundded sliderrs */
.sliderr.roundd {
  border-radius: 34px;
}

.sliderr.roundd:before {
  border-radius: 50%;
}






/* ---------------------------------------------------------------  */
.floating-tooltip {
  width: 96px;
  height: 80px;
  position: absolute;
  display: none;
  padding: 8px;
  box-sizing: border-box;
  font-size: 12px;
  color: #131722;
  background-color: rgba(255, 255, 255, 1);
  text-align: left;
  z-index: 1000;
  top: 12px;
  left: 12px;
  pointer-events: none;
  border: 1px solid rgba(0, 150, 136, 1);
  border-radius: 2px;
}
.scrollable-content {
  height: 900px;
  /* Adjust the height as per your requirement */
  /* overflow-x: auto; */
}

.custom-divider {
  border-left: 4px solid #000;
  /* Adjust the thickness and color as per your preference */
}

.text-animation {
  overflow: hidden;
  white-space: nowrap;
}

.moving-text {
  position: relative;
  animation: moveText 20s linear infinite;
}

@keyframes moveText {
  0% {
    left: 100%;
  }

  100% {
    left: -100%;
  }
}

.slidecontainer {
  /* width: 100%; */
}

.slider {
  -webkit-appearance: none;
  /* width: 100%; */
  height: 11px;
  background: linear-gradient(
    90deg,
    rgba(242, 100, 89, 0.9) 0.66%,
    rgba(74, 200, 119, 0.9) 100%
  );
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 13px;
}

.inside {
  position: absolute;
  top: 185px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 23px;
  background: #3e4763;
  border-radius: 11px;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 20px;
  background: #04aa6d;
  cursor: pointer;
}

.headerd {
  position: sticky;
  width: 100%;
  height: 100%;
}

.nav-link {
  /* padding: 0 20px; */
  /* border-left: 2px; */
}

.nav-link.active {
  border-left: 5px solid #0037b7;
  color: #000000 !important;
  background-color: #f1f3f8;
}

.section {
  width: 100%;
  display: absolute;
  flex-direction: column;
}

.sce1 {
  color: #677788;
}

/* .navlist {
  font-size: 16px;
} */
.subhead {
  color: black;
  font-size: 18px;
  margin-bottom: 10px;
}

.v-application a link {
  text-decoration: none;
}

.link {
  color: rgb(0, 0, 0);
}

.fix {
  position: absolute;
  left: 0px;
  top: 15px;
  z-index: 1;
}

.custom-table th {
  background-color: #f5f7fa;
}
</style>

<template>
  <div style="background-color: #fcfcfc">
    <!-- <v-container> -->
    <div id="app" class="ml-14 mr-14">
      <div>
        <v-card outlined class="hidden-md-and-up pa-2">
          <span class="menubtn">Menu</span>
          <v-btn
            icon
            plain
            color="blue"
            class="hidden-md-and-up togglemenu-icon float-right pb-2 mt-0"
            @click="toggleMenu = !toggleMenu"
          >
            <v-icon v-if="toggleMenu">mdi-menu</v-icon>
            <v-icon :ripple="false" v-else color="black" size="18"
              >mdi-close</v-icon
            >
          </v-btn>
        </v-card>
        <p v-if="toggleMenu"></p>
        <v-card
          enable-resize-watcher
          elevation="0"
          class="position-fixed grpitem d-lg-none d-xl-flex overflow-y-auto"
          v-else
          v-model="selectedItem"
          :absolute="toggleMenu"
          :attach="'#toolbar'"
          :content-class="'px-2 elevation-0'"
          :nudge-top="$vuetify.breakpoint.smAndDown ? -52 : -12"
          min-width="100%"
        >
          <v-list dense>
            <v-list-item-group v-model="selectedItem">
              <v-list nav class="nav rounded-0">
                <v-list-item
                  link
                  class="nav-link"
                  href="#tradingaccount"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist" @click="toggleMenu = true"
                    >Company Overview</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  link
                  class="nav-link"
                  href="#investment"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist" @click="toggleMenu = true">
                    Forecasts</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  link
                  class="nav-link"
                  href="#rules"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist" @click="toggleMenu = true">
                    Financials</v-list-item-title
                  >
                </v-list-item>
                <v-list-item
                  link
                  class="nav-link"
                  href="#eligibility"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist" @click="toggleMenu = true">
                   Peers</v-list-item-title
                  >
                </v-list-item>
                <v-list-item
                  link
                  class="nav-link"
                  href="#depository"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist" @click="toggleMenu = true">
                    Holdings</v-list-item-title
                  >
                </v-list-item>
                <v-list-item
                  link
                  class="nav-link"
                  href="#exposure"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist" @click="toggleMenu = true">
                    Events and news</v-list-item-title
                  >
                </v-list-item>
                <v-list-item
                  link
                  class="nav-link"
                  href="#disclosure"
                  rel="noopener nofollow"
                >
                  <!-- <v-list-item-title class="navlist" @click="toggleMenu = true"
                    >Disclosure of information</v-list-item-title
                  > -->
                </v-list-item>
              </v-list>
            </v-list-item-group>
          </v-list>
        </v-card>
        <!-- </v-container>        -->
        <v-layout>
          <v-navigation-drawer
            style="background-color: #fcfcfc"
            floating
            left
            v-model="drawer"
            permanent
            width="280"
            class="headerd rounded-0 elevation-0 d-none d-md-flex"
          >
            <div link class="nav-link" href="#first" rel="">
              <div>
                <div class="d-flex">
                  <div>
                    <p class=" mb-0 mt-1 font-weight-bold subtitle-1" >
                      Market overview
                    </p>
                  </div>

                  <div class="ml-auto">
                    <v-menu offset-y class="">
                      <template v-slot:activator="{ on }">
                        <v-btn
                          :ripple="false"
                          id="no-background-hover"
                          v-on="on"
                          icon
                        >
                          <v-icon color="black" class=""
                            >mdi-dots-vertical</v-icon
                          >
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item @click="handleMenuItemClick('Option 1')">
                          <v-list-item-title>name</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleMenuItemClick('Option 2')">
                          <v-list-item-title>logout</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </div>

                <p class="pa-0 caption ma-0 mb-0" style="color: #cccccc">
                - - -
                <v-btn @click="valu(val=true) " elevation="0" style="font-size:9px" class=" mt-1 mb-3" color="white" x-small><v-icon size="12">mdi-minus</v-icon> NIFITY 50</v-btn>
                -
                - - - - - - - - - - - 
              </p>

                  <div v-if="nifity == true" class="" ref="chartContainer2"></div>


                  <div v-else class="" ref="chartContainerred"></div>

<!-- <p  ">kjdbkjbxkxbkjxb1111111

</p> -->
<!-- <p v-else>jhvcxjxbxkjbcx2222</p> -->
<!--  -->


                <p class="caption" style="color: #cccccc">
                - - -
                <v-btn @click="valu(val= false) " elevation="0" class="mt-1 " style="font-size:9px" color="white" x-small><v-icon size="12">mdi-plus</v-icon> BANK NIFITY</v-btn>           
                - - - - - - - - - - 
              </p>
              </div>
            </div>
            <div>
              <v-list nav class="nav pa-0 ma-0 rounded-0">
                <v-list-item
                  style="min-height: 35px"
                  link
                  class="nav-link"
                  href="#tradingaccount"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist pa-0 ma-0 body-2"
                    >Company overview</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  style="min-height: 35px"
                  link
                  class="nav-link"
                  href="#investment"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist body-2">
                    Forecasts</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  style="min-height: 35px"
                  link
                  class="nav-link"
                  href="#rules"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist body-2">
                    Financials</v-list-item-title
                  >
                </v-list-item>
                <v-list-item
                  style="min-height: 35px"
                  link
                  class="nav-link"
                  href="#eligibility"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist body-2">
                    Peers</v-list-item-title
                  >
                </v-list-item>
                <v-list-item
                  style="min-height: 35px"
                  link
                  class="nav-link"
                  href="#depository"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist body-2">
                    Holding</v-list-item-title
                  >
                </v-list-item>
                <v-list-item
                  style="min-height: 35px"
                  link
                  class="nav-link"
                  href="#exposure"
                  rel="noopener nofollow"
                >
                  <v-list-item-title class="navlist body-2">
                    Events & News</v-list-item-title
                  >
                </v-list-item>
                <!-- <v-list-item link class="nav-link" href="#disclosure" rel="noopener nofollow">
              <v-list-item-title class="navlist">Disclosure of information</v-list-item-title>
            </v-list-item> -->
              </v-list>
            </div>
          </v-navigation-drawer>
          <v-container>
            <div>
              <v-card
                class="mb-0 pa-7"
                elevation=""
                outlined
                style="
                  background: linear-gradient(0deg, #ffffff, #ffffff), #ffffff;

                  border-radius: 12px;
                "
              >
                <p class="body-2" style="color: #475569">
                  Home / Stocks / Reliance Industries Ltd
                </p>
                <v-row>
                  <!-- <v-col cols=""> -->
                  <div class="d-flex">
                    <div>
                      <img alt="" class="ml-4 mt-4" :src="require('@/assets/cir.svg')"  width="50px" height="50px" />



                    </div>
                    <div class="ml-4 mt-3">
                      <p class="mb-0" style="font-size: 20px; font-weight: 600">
                        Reliance Industries Ltd
                      </p>
                      <p
                        class="mb-0 mt-1 body-2"
                        style="color: #7f7f7f; font-weight: 500"
                      >
                        Sector:
                        <span class="mb-0 mt-1 body-2" style="color: #404042">
                          Refineries (Large Cap) |
                        </span>
                        <span> Volume: </span>
                        <span class="mb-0 mt-1 body-2" style="color: #404042">
                          1881223</span
                        >
                      </p>
                      <p class="mb-0 pt-1 body-2" style="font-weight: 600">
                        APR 20, 2023 11:57 IST
                        <span style="color: #148564">OPEN</span>
                      </p>
                      <p class="mt-2" style="font-size: 20px; font-weight: 600">
                        ₹ 2,340.30
                        <span style="color: #148564; font-size: 16px"
                          ><v-icon color="#148564" size="15"
                            >mdi-triangle</v-icon
                          >+0.61%</span
                        ><span
                          class="pl-2 font-weight-bold"
                          style="color: #404042; font-size: 16px"
                          >(+361.05)</span
                        >
                      </p>
                    </div>
                  </div>

                  <div class="ml-auto">
                    <v-chip class="ma-2 mt-4 black--text" outlined>
                      <v-icon left color="#3E4763">
                        mdi-shape-rectangle-plus
                      </v-icon>
                      Add to Watchlist
                    </v-chip>
                    <v-btn
                      class="mx-2 mt-2"
                      width="30px"
                      height="30px"
                      fab
                      dark
                      small
                      elevation="0"
                      color="#EBEBED"
                      outlined
                    >
                      <v-icon size="17" color="#3E4763">
                        mdi-bell-outline
                      </v-icon>
                    </v-btn>
                    <v-btn
                      class="mx-2 mr-3 mt-2"
                      width="30px"
                      height="30px"
                      fab
                      dark
                      small
                      elevation="0"
                      color="#EBEBED"
                      outlined
                    >
                      <v-icon size="17" color="#3E4763">
                        mdi-share-variant-outline
                      </v-icon>
                    </v-btn>
                    <!-- </div> -->
                    <div class="mt-4">
                      <v-btn
                        class="white--text ml-2 pl-7 pr-7 text-right text-none elevation-0"
                        rounded
                        color="#148564"
                      >
                        Buy
                      </v-btn>
                      <v-btn
                        class="white--text ml-4 pl-7 pr-7 text-right text-none elevation-0"
                        rounded
                        color="#E00000"
                      >
                        Sell
                      </v-btn>
                    </div>
                  </div>
                  <!-- </v-col> -->
                </v-row>
              </v-card>
            </div>

            <section class="sce1 section active mt-7" id="tradingaccount">
              <v-card
                class="mb-0 pa-7"
                elevation=""
                outlined
                style="border-radius: 12px"
              >
                <p
                  class="mb-0 subtitle-1 font-weight-bold"
                  style="font-size: 18px"
                >
                  Price History & Performance
                </p>
                <p class="pt-1 pr-9 mb-0 body-2" color="#666666">
                  Past performance of this portfolio takes into account the
                  monthly rebalancing of the portfolio at the start of each
                  month. However, it does not guarantee future returns
                </p>
                <div class="d-flex">
                  <div>
                    <p class="pt-7 body-2 mb-0" color="#656C77">High Value</p>
                    <p class="font-weight-bold" color="#252C3B">₹2,445.95</p>
                  </div>
                  <div class="ml-10">
                    <p class="pt-7 body-2 mb-0" color="#656C77">Low Value</p>
                    <p class="font-weight-bold" color="#252C3B">₹2,445.95</p>
                  </div>
                  <div class="ml-10">
                    <p class="pt-7 body-2 mb-0" color="#656C77">Return Value</p>
                    <p class="font-weight-bold" style="color: #148564">
                      + 0.32%
                    </p>
                  </div>
                </div>

                <div class="pa-3">
                  <div ref="chartContainer1"></div>
                </div>
<v-chip-group active-class="custom-active-class">
                <v-row class="mt-3">
                  <v-col>
                    <!-- <v-chip @click="chipp" :color="this.chha === 'false' ? 'green' : 'red'" label x-small class="caption font-weight-bold" style="background-color: white;color: #000000;" >1M</v-chip> -->
                    <v-chip  label x-small class="caption font-weight-bold" style="background-color: white;color: #000000;" >1M</v-chip>

                  </v-col>
                  <!-- {{ this.chha }} -->
                  <v-col>
                    <v-chip  label x-small class="caption font-weight-bold" style="background-color: white;color: #000000;" >1M</v-chip>
                  </v-col>
                  <v-col>
                    <div class="">
                      <v-btn
                        color="#32363F"
                        height="27px"
                        width="90px"
                        class="elevation-0 caption white--text"
                        >3M</v-btn
                      >
                    </div>
                  </v-col>
                  <v-col>
                    <v-chip  label x-small class="caption font-weight-bold" style="background-color: white;color: #000000;" >1M</v-chip>
                  </v-col>
                  <v-col>
                    <v-chip  label x-small class="caption font-weight-bold" style="background-color: white;color: #000000;" >1M</v-chip>
                  </v-col>
                  <v-col>
                    <v-chip  label x-small class="caption font-weight-bold" style="background-color: white;color: #000000;" >1M</v-chip>
                  </v-col>
                </v-row>
</v-chip-group>
                <v-card
                  height="25"
                  color="#f9fafc"
                  outlined
                  style="border-radius: 5px"
                  class="mt-3"
                >
                 
                  <img alt="" class="ml-2 mt-1 mb-" :src="require('@/assets/line.svg')"  width="880px" />

                  <div>
                    <v-row style="position: relative; top: -20px">
                      <v-col>
                        <p class="font-weight-bold mb-0 ml-2 caption">2018</p>
                      </v-col>
                      <v-col>
                        <p class="font-weight-bold mb-0 caption">2019</p>
                      </v-col>
                      <v-col>
                        <p class="font-weight-bold mb-0 caption">2020</p>
                      </v-col>
                      <v-col>
                        <p class="font-weight-bold mb-0 caption">2021</p>
                      </v-col>
                      <v-col>
                        <p class="font-weight-bold mb-0 caption">2022</p>
                      </v-col>
                      <v-col>
                        <p class="font-weight-bold mb-0 caption">2023</p>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-card>

              <!-- relince stock view  -->

              <v-card class="mt-7 pa-7" outlined style="border-radius: 12px">
                <p class="mb-0 font-weight-bold subtitle-1">
                  RELIANCE Stock Overview
                </p>
                <p class="pt-2 mb-0 body-2" color="#666666">
                  Reliance Industries Limited engages in hydrocarbon exploration
                  and <br />
                  production, oil and chemicals, textile, retail, digital, and
                  financial services <br />businesses worldwide.
                </p>
                <a :href="linkUrl" style="text-decoration: none">
                  <p
                    class="pt-1 mb-0 font-weight-bold body-1"
                    style="color: #0037b7"
                  >
                    About the company
                    <v-icon color="#0037B7"> mdi-arrow-right-thin </v-icon>
                  </p>
                </a>
                <p
                  class="pt-3 mb-0 " 
                  style="color: #506d84; letter-spacing: 5px; font-size: 13px;"
                >
                  REWARDS
                </p>
                <div style="display: flex">
                  <div>
                  
                    <img alt=""  class="mt-2 mb-2 mt-3 mr-4" :src="require('@/assets/star.svg')" width="14px" height="14px" />
                  </div>
                  <p class="mt-2 body-2 mb-0" color="#666666">
                    Earnings are forecast to grow 12.65% per year
                  </p>
                </div>
                <div style="display: flex">
                  <div>
                    

                    <img alt=""  class="mt-1 mb-2 mr-4" :src="require('@/assets/star.svg')"   width="14px"
                      height="14px" />
                  </div>
                  <p class="mb-0 body-2" color="#666666">
                    Earnings are forecast to grow 12.65% per year
                  </p>
                </div>
                <p
                  class="pt-4 mb-0 "
                  style="color: #506d84; letter-spacing: 5px; font-size: 13px;"
                >
                  RISK ANALYSIS
                </p>
                <p class="pt-2 mb-0 body-2" color="#666666">
                  No risks detected for RELIANCE from our risk checks.
                </p>
                <v-btn
                  class="mmt-2 mr-2 rounded-lg mt-5"
                  outlined
                  color="indigo"
                  style="background-color: #f5f8ff"
                >
                  See All Risk Checks
                </v-btn>
                <v-divider color="#E4E7F1" class="mt-4 mb-4"></v-divider>
                <p class="mb-0 font-weight-bold subtitle-1" >
                  Market Stats
                </p>

                <div>
                  <v-row class="">
                    <v-col v-for="(item, index) in items" :key="index" cols="">
                      <v-card
                        elevation="0"
                        color="#F5F7FA"
                        class="mt-2 ml-1 mb-2 pb-2 rounded-lg"
                      >
                        <p class="pl-4 pr-4 pt-2 mb-0 body-2" color="#666666">
                          {{ item.title }}
                        </p>
                        <p
                          class="pl-4 pt-1 mb-0 body-2 font-weight-bold"
                          color="#000000"
                        >
                          {{ item.description }}
                        </p>
                      </v-card>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="">
                      <p class="pt-5 mb-0 body-2" style="color: #666666">
                        DAY' PRICE RANGE
                      </p>
                      <div class="d-flex">
                        <p class="pt-3 mb-0 body-1 font-weight-bold">
                          ₹2341.05
                        </p>

                        <p class="pt-3 mb-0 body-1 ml-auto font-weight-bold">
                          ₹2341.05
                        </p>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max=""
                        style="width: 410px"
                        value="0"
                        class="slider mt-4"
                        id="myRange"
                      />
                    </v-col>
                    <v-col cols="1">
                      <v-divider
                        vertical
                        class="pl-7 mt-7"
                        style="min-height: 80px"
                      >
                      </v-divider>
                    </v-col>
                    <v-col cols="" class="">
                      <p class="pt-5 mb-0 body-2" style="color: #666666">
                        Day’ Price Range
                      </p>
                      <div class="d-flex">
                        <p class="mr-9 pt-3 mb-0 body-1 font-weight-bold">
                          ₹2341.05
                        </p>

                        <p class="pt-3 mb-0 body-1 ml-auto font-weight-bold">
                          ₹2341.05
                        </p>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value="50"
                        style="width: 410px"
                        class="slider mt-4"
                        id="myRange"
                      />
                    </v-col>
                  </v-row>

                  <v-divider class="mt-6 mb-6"></v-divider>
                  <p class="mb-0 font-weight-bold" style="font-size: 18px">
                    Return %
                  </p>
                  <v-row class="mt-1">
                    <v-col v-for="(item, index) in items1" :key="index" cols="">
                      <v-card
                        :color="getCardColor(index)"
                        elevation="0"
                        class="pl-4 pr-4 pb-3 pt-3 rounded-lg"
                      >
                        <p class="mb-0 body-2" style="color: #666666">
                          {{ item.title }}
                        </p>
                        <p class="mb-0 font-weight-bold">
                          {{ item.description }}
                        </p>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </section>

            <section class="sce1 section active" id="investment">
              <!-- <section class="sce1 section" id="investment"> -->
              <v-card class="mt-7 pa-7" outlined style="border-radius: 12px">
                <p class="mb-0 subtitle-1 font-weight-bold">Key Indicators</p>

                <v-row class="pr-2">
                  <v-col cols="4">
                    <p class=" pt-2 mb-0 caption" style="color: #465b72">
                      Which metric is best to use when looking <br />
                      at relative valuation for
                      <span class="font-weight-bold" style="color: #000000"
                        >RELIANCE</span
                      >?
                    </p>
                    <a :href="linkUrl" style="text-decoration: none">
                      <v-chip
                        class="mr-2 mt-2 mb-2 caption rounded-lg"
                        style="max-width: 41px; height: 21px"
                        color="black"
                        label
                        text-color="white"
                      >
                        PE
                      </v-chip></a
                    >
                    <a :href="linkUrl" style="text-decoration: none">
                      <v-chip
                        class="ma-2 caption rounded-lg ml-2"
                        style="max-width: 41px; height: 21px"
                        label
                      >
                        PE
                      </v-chip></a
                    >
                    <a :href="linkUrl" style="text-decoration: none">
                      <v-chip
                        class="ma-2 caption rounded-lg ml-2"
                        style="max-width: 41px; height: 21px"
                        label
                      >
                        PE
                      </v-chip></a
                    >

                    <v-row>
                      <v-col>
                        <div>
                      
                          <img alt="" class="mb-0 mt-5 pb-0 " :src="require('@/assets/circ.svg')"    height="148px"
                            width="148px" />
                          <div class="inside">
                            <p
                              class="pl-7 ml-3 pt-7 mb-0 body-2"
                              color="#505668"
                            >
                              Market Cap
                            </p>
                            <p
                              class="pl-8  mb-0 font-weight-bold body-2"
                              style="color: #000000"
                            >
                              1575681.48Cr
                            </p>
                          </div>
                          <!-- 
                        <div>
                          <canvas id="myChart" style="height: 50px"></canvas>
                        </div> -->
                        </div>
                      </v-col>
                      <v-col>
                        <p class="mb-0 body-1 mt-10 font-weight-bold">
                          ₹667.02Cr
                        </p>
                        <p class="caption font-weight-bold mb-0" style="color:#505668">Earning <v-icon color="#3E54AC">mdi-ray-vertex</v-icon></p>
                        <p class="mb-0 body-1 mt-5 font-weight-bold">37.39x</p>
                        <p class="caption font-weight-bold mb-0" style="color:#505668;border-bottom-style:  dashed; width:fit-content">PE Ratio</p>
                      </v-col>
                    </v-row>
                    <p class="pt-3 mb-0 caption" style="color:#666666">
                      For RELIANCE we can also use its Price-To-Book Ratio for
                      relative valuation analysis, however this may not be
                      useful for all companies.
                    </p>
                  </v-col>
                  <v-col cols="4" class="">
                    <v-card  elevation="0">
                      <v-simple-table
                        outlined class="rounded-lg"
                        style="background-color: #F8F9FB;border:2px solid#EEF1F7"
                      >
                        <template v-slot:default>
                          <tbody>
                            <tr v-for="item in dessertss" :key="item.name">
                              <td class="caption" style="color: #666666">
                                {{ item.name }}
                              </td>
                              <td
                                class="caption font-weight-bold"
                                style="color: black"
                              >
                                {{ item.calories }}
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-col>
                  <v-col cols="4" class="">
                    <v-card  elevation="0">
                      <v-simple-table
                        outlined class="rounded-lg"
                        style="background-color: #F8F9FB;border:2px solid#EEF1F7"
                      >
                        <template v-slot:default>
                          <tbody>
                            <tr v-for="item in dessertss" :key="item.name">
                              <td class="caption" style="color: #666666">
                                {{ item.name }}
                              </td>
                              <td
                                class="caption font-weight-bold"
                                style="color: black"
                              >
                                {{ item.calories }}
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>

              <v-card
                class="mt-7 pr-7 pb-7 pl-2 pt-2"
                elevation=""
                outlined
                style="border-radius: 12px"
              >
                <div style="display: flex">
                  <div>
                 
                    <img alt=""   class="mt-7 mb-2 ml-5 mr-4" :src="require('@/assets/all.svg')"    width="50px"
                      height="50px" />
                    
                  </div>
                  <p class="black--text font-weight-bold mt-10 ml-">81.5%</p>
                  <v-icon color="black" class="pl-1 mt-4" size="21"
                    >mdi-account</v-icon
                  >
                  <div>
                
                    
                    <img alt=""   class="mt-7 mb-2 ml-5 mr-4" :src="require('@/assets/load.svg')"    width="270px"
                      height="10px" />
                    <!-- <v-card outlined class="rounded-pill " color="rgba(236, 239, 248, 1)" width="300" height="10">
                      <v-card outlined class="rounded-pill" height="10" color="rgba(51, 163, 77, 1)" max-width="240"></v-card>
                      </v-card> -->
                  </div>
                  <div>
                    <p class="black--text font-weight-bold mt-7 mb-0 body-2">
                      Analyst Rating
                    </p>
                    <p class="caption mt-1 mb-0" style="color: #666666">
                      Based on 33 analysts offering long term price targets for
                      Reliance Industries Ltd. An average target of ₹2856.09
                    </p>
                  </div>
                </div>
                <v-divider class="mt-5 mb-5 ml-5 "></v-divider>
                <p class="pl-7 mb-0 font-weight-bold subtitle-1">
                  Analyst Forecasts
                </p>
                <p class="pl-7 pt-2 mb-0 caption" color="#666666">
                  Forecasting uses historical data as inputs to make informed
                  predictive estimates determining the direction of future
                  trends. Price, revenue & earnings forecasts represent where
                  the stock level, business prospects and profits are
                  potentially expected to be at the end of the forecast period
                </p>

                <v-row class="ml-2">
                  <v-col cols="4">
                    <div>
                      <v-card elevation="0">
                        <p
                          class="body-1 mt-7 pl- mb-0 font-weight-bold"
                          style="text-align: center; color: #666666"
                        >
                          Price Forecasts
                        </p>
                        <div class="d-flex">
                          <a :href="linkUrl" class="mx-auto">
                            <v-icon style="align-items: center; color: #666666"
                              >mdi-chevron-double-down</v-icon
                            >
                          </a>
                        </div>
                      

                        <img alt=""   class="mt-5 mb-2 ml-4 mr-4" :src="require('@/assets/pic.svg')"     />

                        <v-card
                          elevation="0"
                          class="pl-3 rounded-pill pt-1 mt-5 pb-1"
                          color="#F5F7FA"
                        >
                          <div class="d-flex">
                            <p class="caption mb-0 ml-5">
                              Forecasts for May 2023
                            </p>
                            <v-icon class="ml-auto mr-7">mdi-menu-down</v-icon>
                          </div>
                        </v-card>

                        <div class="d-flex">
                          <div class="ml-3">
                           
                            <img alt=""   class="mt-5 mb-2 ml-3 mr-4" :src="require('@/assets/ret.svg')"    width="57px"
                              height="3px" />
                            <p class="caption mb-0 ml-3" style="color: #666666">
                              High
                            </p>
                            <p
                              class="caption mb-0 ml-3 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0 ml-3" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="mx-auto">
                            
                            <img alt=""    class="mt-5 mb-2 ml-3 mr-4" :src="require('@/assets/ret.svg')"    width="57px"
                              height="3px" />
                            <p class="caption mb-0 ml-3" style="color: #666666">
                              Medium
                            </p>
                            <p
                              class="caption mb-0 ml-3 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0 ml-3" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="my-auto">
                            <!-- <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2 ml- mr-4"
                              width="57px"
                              height="3px"
                            ></v-img> -->
                            <img alt=""    class="mt-5 mb-2 ml- mr-4" :src="require('@/assets/ret.svg')"    width="57px"
                              height="3px" />
                            <p class="caption mb-0 ml-" style="color: #666666">
                              Low
                            </p>
                            <p
                              class="caption mb-0 ml- font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0 ml-" style="color: red">
                              +37.64%
                            </p>
                          </div>
                        </div>

                        <v-card
                          v-if="isCardVisible"
                          class="mt-3 ml-6 mr-6"
                          elevation="0"
                          color="#F1FAF7"
                        >
                          <div style="display: flex">
                            <p
                              class="pl-4 caption pt-3 mb-0 font-weight-bold body-1"
                              style="font-size: 18px"
                            >
                              Higher Return Expection
                            </p>
                            <v-icon color="green" class="pl-7 pt-3" size="15"
                              >mdi-arrow-up-circle</v-icon
                            >
                          </div>

                          <p
                            class="pl-4 mb-0 pr-3 caption"
                            style="color: #666666"
                          >
                            Expected return of 14.5% from current price level is
                            less than last 3 tr CAGR of 22.5%
                          </p>
                        </v-card>

                        <v-btn
                          @click="toggleCardVisibility"
                          class="grey--text elevation-0 body-2 mt-3 text-none"
                          color="white"
                          >{{ buttonText
                          }}<v-icon>mdi-chevron-down</v-icon></v-btn
                        >
                      </v-card>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div>
                      <v-card elevation="0">
                        <p
                          class="body-1 mt-7 pl- mb-0 font-weight-bold"
                          style="text-align: center; color: #666666"
                        >
                          Price Forecasts
                        </p>
                        <div class="d-flex">
                          <a :href="linkUrl" class="mx-auto">
                            <v-icon style="align-items: center; color: #666666"
                              >mdi-chevron-double-down</v-icon
                            >
                          </a>
                        </div>
                        <!-- <v-img
                        :src="require('../assets/pic.svg')"
                        class="mt-2 mb-2 ml-4 mr-4"
                        width=""
                        height=""
                      ></v-img> -->
                        <template>
                          <Bar :data="chartData" height="190px" />
                        </template>
                        <v-card
                          elevation="0"
                          class="pl-3 rounded-pill pt-1 mt-5 pb-1"
                          color="#F5F7FA"
                        >
                          <div class="d-flex">
                            <p class="caption mb-0 ml-5">
                              Forecasts for May 2023
                            </p>
                            <v-icon class="ml-auto mr-7">mdi-menu-down</v-icon>
                          </div>
                        </v-card>

                        <div class="d-flex">
                          <div class="ml-3">
                            <!-- <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2 ml-3 mr-4"
                              width="57px"
                              height="3px"
                            ></v-img> -->
                            <img alt=""    class="mt-5 mb-2 ml-3 mr-4" :src="require('@/assets/ret.svg')"    width="57px"
                              height="3px" />
                            <p class="caption mb-0 ml-3" style="color: #666666">
                              High
                            </p>
                            <p
                              class="caption mb-0 ml-3 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0 ml-3" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="mx-auto">
                            <!-- <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2 ml-3 mr-4"
                              width="57px"
                              height="3px"
                            ></v-img> -->
                            <img alt=""    class="mt-5 mb-2 ml-3 mr-4" :src="require('@/assets/ret.svg')"    width="57px"
                              height="3px" />
                            <p class="caption mb-0 ml-3" style="color: #666666">
                              Medium
                            </p>
                            <p
                              class="caption mb-0 ml-3 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0 ml-3" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="my-auto">
                            <!-- <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2 ml- mr-4"
                              width="57px"
                              height="3px"
                            ></v-img> -->
                            <img alt=""    class="mt-5 mb-2 ml- mr-4" :src="require('@/assets/ret.svg')"    width="57px"
                              height="3px" />
                            <p class="caption mb-0 ml-" style="color: #666666">
                              Low
                            </p>
                            <p
                              class="caption mb-0 ml- font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0 ml-" style="color: red">
                              +37.64%
                            </p>
                          </div>
                        </div>

                        <v-card
                          v-if="isCable"
                          class="mt-3 ml-6 mr-6"
                          elevation="0"
                          color="#F1FAF7"
                        >
                          <div style="display: flex">
                            <p
                              class="pl-4 caption pt-3 mb-0 font-weight-bold body-1"
                              style="font-size: 18px"
                            >
                              Higher Return Expection
                            </p>
                            <v-icon color="green" class="pl-7 pt-3" size="15"
                              >mdi-arrow-up-circle</v-icon
                            >
                          </div>

                          <p
                            class="pl-4 mb-0 pr-3 caption"
                            style="color: #666666"
                          >
                            Expected return of 14.5% from current price level is
                            less than last 3 tr CAGR of 22.5%
                          </p>
                        </v-card>

                        <v-btn
                          @click="toggleCardVisibility"
                          class="grey--text elevation-0 body-2 mt-3 text-none"
                          color="white"
                          >{{ buttonText
                          }}<v-icon>mdi-chevron-down</v-icon></v-btn
                        >
                      </v-card>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div>
                      <v-card elevation="0">
                        <p
                          class="body-1 mt-7 pl- mb-0 font-weight-bold"
                          style="text-align: center; color: #666666"
                        >
                          Price Forecasts
                        </p>
                        <div class="d-flex">
                          <a :href="linkUrl" class="mx-auto">
                            <v-icon style="align-items: center; color: #666666"
                              >mdi-chevron-double-down</v-icon
                            >
                          </a>
                        </div>
                        <!-- <v-img
                        :src="require('../assets/pic.svg')"
                        class="mt-2 mb-2 ml-4 mr-4"
                        width=""
                        height=""
                      ></v-img> -->
                        <template>
                          <Bar :data="chartData" height="190px" />
                        </template>

                        <v-card
                          elevation="0"
                          class="pl-3 rounded-pill pt-1 mt-5 pb-1"
                          color="#F5F7FA"
                        >
                          <div class="d-flex">
                            <p class="caption mb-0 ml-5">
                              Forecasts for May 2023
                            </p>
                            <v-icon class="ml-auto mr-7">mdi-menu-down</v-icon>
                          </div>
                        </v-card>

                        <div class="d-flex">
                          <div class="ml-3">
                            <!-- <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2 ml-3 mr-4"
                              width="57px"
                              height="3px"
                            ></v-img> -->
                            <img alt=""    class="mt-5 mb-2 ml-3 mr-4" :src="require('@/assets/ret.svg')"    width="57px"
                              height="3px" />
                            <p class="caption mb-0 ml-3" style="color: #666666">
                              High
                            </p>
                            <p
                              class="caption mb-0 ml-3 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0 ml-3" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="mx-auto">
                            <!-- <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2 ml-3 mr-4"
                              width="57px"
                              height="3px"
                            ></v-img> -->
                            <img alt=""    class="mt-5 mb-2 ml-3 mr-4" :src="require('@/assets/ret.svg')"    width="57px"
                              height="3px" />
                            <p class="caption mb-0 ml-3" style="color: #666666">
                              Medium
                            </p>
                            <p
                              class="caption mb-0 ml-3 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0 ml-3" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="my-auto">
                            <!-- <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2 ml- mr-4"
                              width="57px"
                              height="3px"
                            ></v-img> -->
                            <img alt=""    class="mt-5 mb-2 ml- mr-4" :src="require('@/assets/ret.svg')"    width="57px"
                              height="3px" />
                            <p class="caption mb-0 ml-" style="color: #666666">
                              Low
                            </p>
                            <p
                              class="caption mb-0 ml- font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0 ml-" style="color: red">
                              +37.64%
                            </p>
                          </div>
                        </div>

                        <v-card
                          v-if="isCardVi"
                          class="mt-3 ml-6 mr-6"
                          elevation="0"
                          color="#F1FAF7"
                        >
                          <div style="display: flex">
                            <p
                              class="pl-4 caption pt-3 mb-0 font-weight-bold body-1"
                              style="font-size: 18px"
                            >
                              Higher Return Expection
                            </p>
                            <v-icon color="green" class="pl-7 pt-3" size="15"
                              >mdi-arrow-up-circle</v-icon
                            >
                          </div>

                          <p
                            class="pl-4 mb-0 pr-3 caption"
                            style="color: #666666"
                          >
                            Expected return of 14.5% from current price level is
                            less than last 3 tr CAGR of 22.5%
                          </p>
                        </v-card>

                        <v-btn
                          @click="toggleCardVisibility"
                          class="grey--text elevation-0 body-2 mt-3 text-none"
                          color="white"
                          >{{ buttonText
                          }}<v-icon>mdi-chevron-down</v-icon></v-btn
                        >
                      </v-card>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
              <!-- </section> -->
            </section>

            <section class="sce1 section active" id="rules">
              <div class="anchor"></div>
              <!-- <div class=""> -->
              <v-card class="pa-7 mt-7" outlined style="border-radius: 12px">
                <p class="mb-0 font-weight-bold subtitle-1">Financial Health</p>
                <v-card
                  elevation="0"
                  color="#F5F7FA"
                  class="rounded-lg pa-4 mt-4"
                >
                  <div style="display: flex">
                    <p class="mb-0 subtitle-1 font-weight-bold">
                      Financial Health criteria checks 6/6
                    </p>
                    <v-icon color="green" class="pl-2" size="20"
                      >mdi-check-circle</v-icon
                    >
                    <v-icon color="green" class="pl-2" size="20"
                      >mdi-check-circle</v-icon
                    >
                    <v-icon color="green" class="pl-2" size="20"
                      >mdi-check-circle</v-icon
                    >
                    <v-icon color="green" class="pl-2" size="20"
                      >mdi-check-circle</v-icon
                    >
                    <v-icon color="green" class="pl-2" size="20"
                      >mdi-check-circle</v-icon
                    >
                    <v-icon color="red" class="pl-" size="20"
                      >mdi-close-circle</v-icon
                    >
                    <v-btn
                      class=" ml-auto"
                      width="30px"
                      height="30px"
                      fab
                      dark
                      small
                      elevation="0"
                      color="#EBEBED"
                      style="background-color: white;"
                      outlined
                    >
                      <v-icon size="19" color="#3E4763">
                        mdi-chevron-down
                      </v-icon>
                    </v-btn>
                  </div>

                  <p class="mb-0 caption" style="color: #666666">
                    Forecasting uses historical data as inputs to make informed
                    predictive estimates determining the direction of future
                    trends. Price, revenue & earnings forecasts represent where
                    the stock level, business prospects and profits are
                    potentially expected to be at the end of the forecast period
                  </p>
                </v-card>
                <v-btn class="mt-3 rounded-lg text-none body-2" outlined color="#AFB5BA">
                  Overview
                </v-btn>
                <v-btn
                  class="ma-2 mt-5 rounded-lg text-none body-2"
                  outlined
                  color="#AFB5BA"
                >
                  Income
                </v-btn>
                <v-btn
                  class="ma-2 mt-5 rounded-lg text-none white--text body-2"
                  elevation="0"
                  color="#3E54AC"
                >
                  Balance Sheet
                </v-btn>
                <v-btn
                  class="ma-2 mt-5 text-none rounded-lg body-2"
                  outlined
                  color="#AFB5BA"
                >
                  Cash Flow
                </v-btn>
                <p class="pt-5 mb-0 subtitle-1 rounded-lg font-weight-bold">
                  Reliance Global Group Balance Sheet
                </p>
                <p class="pt-2 pr-7 mb-0 caption" style="color: #666666">
                  Reliance Global Group's total assets for Q1 2023 were $33.88M,
                  a decrease of -11.82% from the previous quarter. RELI total
                  liabilities were $21.65M for the fiscal quarter, a -26.66% a
                  decrease from the previous quarter. See a summary of the
                  company’s assets, liabilities, and equity.
                </p>
                <v-btn elevation="0" outlined style="border : 1px solid#DBE1E7" rounded class="mt-8 pt-4 pb-4">
                  <div style="display: flex">
                    <div>
                      <!-- <v-img
                        :src="require('../assets/cat.svg')"
                        class="mt-4"
                        width="15px"
                      ></v-img> -->
                      <img alt=""    class="mt-5 mb-2 ml-3 mr-4" :src="require('@/assets/cat.svg')"     width="15px"
                            />
                    </div>
                    <p class="ml-3 pt-4">Graph</p>
                    <!-- <div> <v-img :src="require('../assets/cat1.svg')" class=" ml-3 mt-4 mb-2 "
                                                    width="25px"></v-img></div> -->
                    <!-- <v-switch
                      v-model="active"
                      :elevation="0"
                      class="pl-4"
                    ></v-switch> -->
                    <label class="switch mt-4 ml-3">
  <input type="checkbox" checked>
  <span class="sliderr roundd"></span>
</label>
                  </div>
                </v-btn>
                <!-- <div> -->
                <!-- <v-img
                    :src="require('../assets/cat2.svg')"
                    class="ml-7 mr-7 mt-4 "
                    style="width:850px"
                  ></v-img> -->
                  <img alt=""    class="ml-7 mr-7 mt-4 " :src="require('@/assets/cat2.svg')"    style="width:850px"
                              />
                <!-- <div>
                  <canvas id="linebar" style="height: 50px"></canvas>
                </div> -->
                <!-- </div> -->
                <v-divider class=" mt-7 mb-7"></v-divider>

                <v-row>
                  <v-col>
                    <div class="d-flex">
                      <div>
                        <p
                          class="mb-0 subtitle-1 font-weight-bold"
                          
                        >
                          Balance Sheet Statement
                        </p>
                        <p class="mb-0 body-2" style="color: #3e54ac">
                          All Figures in Cr.
                        </p>
                      </div>
                      <p class="body-2 ml-auto" style="color: #7b879d">
                        Sort by :
                      </p>
                      <p class="body-2 pl-2" style="color: #000000">
                        Yearly
                        <v-icon class="pl-">mdi-chevron-down</v-icon>
                      </p>

                      <p class="body-2 pl-14" style="color: #7b879d">
                        Annual Report :
                      </p>
                      <p class="body-2 pl-2" style="color: #000000">
                        2023
                        <v-chip
                          class="body-2 blue--text"
                          color="#F5F7FA"
                          label
                          x-small
                        >
                          PDF
                        </v-chip>
                        <v-icon class="">mdi-chevron-down</v-icon>
                      </p>
                    </div>
                  </v-col>
                </v-row>

                <v-data-table
                  :headers="headers"
                  :items="dataTableItems"
                  :search="search"
                  class="custom-table mt-3"
                  hide-default-footer
                >
                  <template #item="{ item }">
                    <tr>
                      <td class="">
                        <p class="body-2">
                          <v-icon size="18" class="">mdi-plus</v-icon
                          >{{ item.name }}
                        </p>
                      </td>
                      <td>
                        <p class="mb-0 body-2">{{ item.List }}</p>
                      </td>

                      <td class="mb-0 body-2">{{ item.loca }}</td>
                      <td class="mb-0 body-2">{{ item.Issue }}</td>
                      <td class="mb-0 body-2">{{ item.Listing }}</td>
                      <td class="mb-0 body-2">{{ item.CMP }}</td>
                      <td class="mb-0 body-2">{{ item.Current }}</td>
                      <td class="mb-0 pa-0 body-2">{{ item.Curr }}</td>
                    </tr>
                  </template>
                </v-data-table>

                <v-data-table
                  :headers="headers"
                  :items="dataTableItems"
                  :search="search"
                  class="custom-table"
                  hide-default-footer
                >
                  <template #item="{ item }">
                    <tr>
                      <td>
                        <p class="mb-0 body-2">
                          <v-icon size="18" class="">mdi-plus</v-icon
                          >{{ item.name }}
                        </p>
                      </td>
                      <td>
                        <p class="mb-0 body-2">{{ item.List }}</p>
                      </td>

                      <td class="mb-0 body-2">{{ item.loca }}</td>
                      <td class="mb-0 body-2">{{ item.Issue }}</td>
                      <td class="mb-0 body-2">{{ item.Listing }}</td>
                      <td class="mb-0 body-2">{{ item.CMP }}</td>
                      <td class="mb-0 body-2">{{ item.Current }}</td>
                      <td class="mb-0 body-2">{{ item.Curr }}</td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card>
              <!-- </div> -->
              <!-- </section> -->
            </section>

            <section class="sce1 section active" id="eligibility">
              <div class="anchor"></div>
              <v-card class="pa-7 mt-7" outlined style="border-radius: 12px">
                <v-row>
                  <v-col cols="7">
                    <p class="mb-0 font-weight-bold" style="font-size: 18px">
                      Peers & Comparison
                    </p>

                    <v-btn
                      class="mt-3 rounded-lg text-none white--text body-2"
                      elevation="0"
                      color="#3E54AC"
                    >
                      Valuation
                    </v-btn>
                    <v-btn
                      class="ma-2 mt-5 text-none rounded-lg body-2"
                      elevation="0"
                      outlined
                    >
                      Technical
                    </v-btn>
                    <v-btn
                      class="ma-2 mt-5 text-none rounded-lg body-2"
                      elevation="0"
                      outlined
                    >
                      Forecasts
                    </v-btn>
                    <v-data-table
                      :headers="headerss"
                      :items="firstab"
                      :search="search"
                      class="custom-table mt-5"
                      hide-default-footer
                    >
                      <template #item="{ item }">
                        <tr>
                          <td>
                            <p class="mb-0 body-2">
                              <v-icon size="18" class="ml-">mdi-minus</v-icon
                              >{{ item.name1 }}
                            </p>
                          </td>
                          <td>
                            <p class="mb-0 body-2">{{ item.one1 }}</p>
                          </td>
                          <td class="mb-0 body-2">{{ item.two1 }}</td>
                          <td class="mb-0 body-2">{{ item.three1 }}</td>
                        </tr>
                      </template>
                    </v-data-table>

                    <v-row class="pt-4">
                      <v-col cols="7">
                        <v-text-field
                          dense
                          outlined
                          label="Search Stocks"
                          style="height: 50px"
                          prepend-inner-icon="mdi-magnify"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="5">
                    <v-card elevation="0" color="#F1F5F8" class="pa-7">
                      <p class="mb-0 caption" style="color: #3e5466">
                        Reliance Industries Ltd. competitor comparison and
                        performance for its industry
                      </p>

                      <!-- <v-row> -->
                      <!-- <v-col cols="6"> -->
                      <div class="d-flex">
                        <v-btn
                          rounded
                          color="#FCFCFC"
                          class="black--text mt-2 mr-2 mb-2 caption"
                          x-small
                          outlined
                          style="
                            text-transform: capitalize;
                            border: 1px solid#CAD3DA;
                          "
                          height=""
                          elevation="0"
                          dark
                        >
                          Price to Book
                          <v-icon size="15">mdi-chevron-down</v-icon>
                        </v-btn>

                        <v-btn
                          rounded
                          color="#FCFCFC"
                          class="black--text ma-2 caption"
                          x-small
                          outlined
                          style="
                            text-transform: capitalize;
                            border: 1px solid#CAD3DA;
                          "
                          elevation="0"
                          dark
                        >
                          Edit peers
                          <v-icon size="15" class="pl-2">mdi-pencil</v-icon>
                        </v-btn>
                      </div>

                      <div>
                        <!-- <v-img
                          :src="require('../assets/barr.svg')"
                          class="mt-4 mb-2"
                        ></v-img> -->

                        <img alt=""   class="mt-4 mb-2" :src="require('@/assets/barr.svg')"   
                              />
                      </div>

                      <v-card
                        outlined
                        class="mt-3"
                        color="#FFFAFA"
                        style="border-color: #fc5a5a"
                      >
                        <p
                          style="color: #fc5a5a; font-size: 14px"
                          class="mb-0 pl-2"
                        >
                          <v-icon color="#FC5A5A" size="13">mdi-medal</v-icon>
                          Ranked in the bottom 3 out of 10 companies
                        </p>
                      </v-card>
                    </v-card>
                  </v-col>
                </v-row>

                <v-card
                  class="mt-3 rounded-lg pa-4"
                  elevation="0"
                  color="#F5F7FA"
                  style="
                    border: 1px solid #f5f7fa;
                    box-shadow: 0px 5px 22px rgba(145, 146, 148, 0.02),
                      0px 4px 10px rgba(210, 210, 211, 0.03);
                  "
                >
                  <v-row>
                    <v-col cols="8">
                      <div>
                        <p
                          class="mb-0 font-weight-bold subtitle-1"
                          
                        >
                          Price Comparison
                        </p>
                        <p class="caption" style="color: #505668">
                          Compare
                          <span
                            style="color: #3e54ac; font-weight: 550"
                            class="font-weight-font"
                            >RELIANCE</span
                          >
                          with any stock or ETF
                        </p>
                      </div>
                    </v-col>
                    <v-col>
                      <div>
                        <v-card outlined elevation="0" class="mt-7 mr-5">
                          <!-- <p class="mb-0 caption pl-1  pt-1  pb-1"> <v-icon class="pr-2"
                                                                size="17">mdi-calendar-month-outline </v-icon>May 17, 2022 -
                                                            May
                                                            17,
                                                            2023 <v-icon>mdi-chevron-down</v-icon>
                                                        </p> -->
                          <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                v-model="date"
                                hide-details
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                class="ma-0 ml-3 pa-0"
                                style="
                                  text-decoration: none;
                                  border-bottom: none !important;
                                "
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="date"
                              @input="menu2 = false"
                            ></v-date-picker>
                          </v-menu>
                        </v-card>
                      </div>
                    </v-col>
                  </v-row>
                  <v-chip outlined class="caption"  style="font-weight: 600;border:1px solid #CAD4DB" color="#505668"
                    ><v-icon size="18" color="#9D70FF">mdi-square-rounded</v-icon
                    >RELIANCE</v-chip
                  >
                  <v-btn
                    v-if="!chip1 && !chip2 && !chip3 && !chip4"
                    close
                    color="primary"
                    dark
                    @click="
                      (chip1 = true),
                        (chip2 = true),
                        (chip3 = true),
                        (chip4 = true)
                    "
                  >
                    Reset Chips
                  </v-btn>

                  <v-chip
                    outlined style="font-weight: 600;border:1px solid #CAD4DB" color="#505668"
                    v-if="chip1"
                    class="ma-2 caption"
                    close
                    @click:close="chip1 = false"
                  >
                    <v-icon size="18" color="#EE89DF">mdi-square-rounded</v-icon> INDIAN
                    OIL...
                  </v-chip>


                  <v-chip
                    outlined style="font-weight: 600;border:1px solid #CAD4DB" color="#505668"
                    v-if="chip1"
                    class="ma-2 caption"
                    close
                    @click:close="chip1 = false"
                  >
                    <v-icon size="18" color="#F9CD6C">mdi-square-rounded</v-icon> HDFC BANK
                  </v-chip>

                  <v-chip outlined style="font-weight: 600;" color="#3E54AC" 
                    ><v-icon size="18" class="caption" color="#3E54AC">mdi-plus</v-icon>Add stock</v-chip
                  >
                </v-card>
                <!-- <v-img
                  :src="require('../assets/lass.svg')"
                  class="ml-7 mr-7 mt-7 mb-2"
                  style="width: 750px"
                ></v-img> -->
                <div ref="chartContainer3" class="mt-7 "></div>
                <!-- <div ref="chartContainerred"></div> -->
                <p class=" pt-4 mb-0 caption" style="color: #506d84">
                  Reliance Global Group's total assets for Q1 2023 were $33.88M,
                  a decrease of -11.82% from the previous quarter. RELI total
                  liabilities were $21.65M for the fiscal quarter, a -26.66% a
                  decrease from the previous quarter. See a summary of the
                  company’s assets, liabilities, and equity.
                </p>
              </v-card>
            </section>

            <section class="sce1 section active" id="depository">
              <div class="anchor"></div>
              <div class="">
                <!-- Shareholding Pattern 5 -->

                <v-card class="mt-7 pa-7" outlined style="border-radius: 12px">
                  <p class="mb-0 subtitle-1 font-weight-bold">
                    Shareholding Pattern
                  </p>

                  <v-btn
                    class="ma-2 mt-5 rounded-lg  white--text caption"
                    elevation="0"
                    color="#3E54AC"
                  >
                    Mar 2023
                  </v-btn>
                  <v-btn
                    class="ma-2 mt-5 rounded-lg  caption"
                    elevation="0"
                    outlined
                  >
                    Sep 2023
                  </v-btn>
                  <v-btn class="ma-2 mt-5 rounded-lg caption" elevation="0" outlined>
                    Oct 2023
                  </v-btn>

                  <v-row>
                    <v-col cols="8">
                      <p
                        class="pt-5 mb-0 font-weight-bold"
                        style="font-size: 16px"
                      >
                        Shareholding Breakdown
                      </p>

                      <div class="mt-2">
                        <!-- <v-img
                        :src="require('../assets/barrr.svg')"
                        class="ml-7 mr-7 mt-4 mb-2"
                      ></v-img> -->
                        <v-card
                          outlined
                          height="30"
                          max-width="600"
                          class="d-flex"
                        >
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-card
                                class="elevation-0 py-3 rounded-0"
                                :width="
                                  widthdat.slice(0, 1).length <= 2
                                    ? widthdat.slice(0, 1).toString() * 10
                                    : widthdat.slice(0, 1)
                                "
                                color="#978FED"
                                v-bind="attrs"
                                v-on="on"
                              ></v-card>
                            </template>
                            <span
                              ><div class="d-flex">
                                <v-card
                                  outlined
                                  class="pa-2 mx-2"
                                  max-height="10"
                                  style="
                                    border-color: gray;
                                    background-color: #978fed;
                                  "
                                ></v-card
                                >{{ widthdat.slice(0, 1).toString() }}
                              </div></span
                            >
                            <!-- <span>{{(widthdat.slice(0,1)).toString()}}</span> -->
                          </v-tooltip>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-card
                                class="elevation-0 py-3 rounded-0"
                                :width="
                                  widthdat.slice(1, 2).length <= 2
                                    ? widthdat.slice(1, 2).toString() * 10
                                    : widthdat.slice(1, 2)
                                "
                                color="#EE89DF"
                                v-bind="attrs"
                                v-on="on"
                              ></v-card>
                            </template>
                            <span
                              ><div class="d-flex">
                                <v-card
                                  outlined
                                  class="pa-2 mx-2"
                                  max-height="10"
                                  style="
                                    border-color: gray;
                                    background-color: #ee89df;
                                  "
                                ></v-card
                                >{{ widthdat.slice(1, 2).toString() }}
                              </div></span
                            >
                            <!-- <span>{{(widthdat.slice(1,2)).toString()}}</span> -->
                          </v-tooltip>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-card
                                class="elevation-0 py-3 rounded-0"
                                :width="
                                  widthdat.slice(2, 3).length <= 2
                                    ? widthdat.slice(2, 3).toString() * 10
                                    : widthdat.slice(2, 3)
                                "
                                color="#F6CF7D"
                                v-bind="attrs"
                                v-on="on"
                              ></v-card>
                            </template>
                            <span
                              ><div class="d-flex">
                                <v-card
                                  outlined
                                  class="pa-2 mx-2"
                                  max-height="10"
                                  style="
                                    border-color: gray;
                                    background-color: #f6cf7d;
                                  "
                                ></v-card
                                >{{ widthdat.slice(2, 3).toString() }}
                              </div></span
                            >
                            <!-- <span>{{(widthdat.slice(2,3)).toString()}}</span> -->
                          </v-tooltip>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-card
                                class="elevation-0 py-3 rounded-0"
                                :width="
                                  widthdat.slice(3, 4).length <= 2
                                    ? widthdat.slice(3, 4).toString() * 10
                                    : widthdat.slice(3, 4)
                                "
                                color="#4E93EF"
                                v-bind="attrs"
                                v-on="on"
                              ></v-card>
                            </template>
                            <span
                              ><div class="d-flex">
                                <v-card
                                  outlined
                                  class="pa-2 mx-2"
                                  max-height="10"
                                  style="
                                    border-color: gray;
                                    background-color: #4e93ef;
                                  "
                                ></v-card
                                >{{ widthdat.slice(3, 4).toString() }}
                              </div></span
                            >
                            <!-- <span>{{(widthdat.slice(3,4)).toString()}}</span> -->
                          </v-tooltip>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-card
                                class="elevation-0 py-3 rounded-0"
                                :width="
                                  widthdat.slice(4).length <= 2
                                    ? widthdat.slice(4).toString() * 10
                                    : widthdat.slice(4)
                                "
                                color="#674188"
                                v-bind="attrs"
                                v-on="on"
                              ></v-card>
                            </template>
                            <span
                              ><div class="d-flex">
                                <v-card
                                  outlined
                                  class="pa-2 mx-2"
                                  max-height="10"
                                  style="
                                    border-color: gray;
                                    background-color: #674188;
                                  "
                                ></v-card
                                >{{ widthdat.slice(4).toString() }}
                              </div></span
                            >
                          </v-tooltip>
                        </v-card>
                      </div>

                      <v-data-table
                        :headers="small"       
                        :items="datasmall"
                        class=""
                        hide-default-footer
                  
                      >
                        <template #item="{ item }">
                          <tr >
                            <td>
                              <p class="mb-0 body-2">
                                <v-icon size="22" color="items.colo" class="">{{
                                  item.icoo
                                }}</v-icon>
                                {{ item.inv }}
                              </p>
                            </td>
                            <td>
                              <div class="mb-0 body-2">
                                {{ item.hold }}
                              </div>
                            </td>
                            <td class="mb-0 body-2">{{ item.sha }}</td>
                          </tr>
                        </template>
                      </v-data-table>
                    </v-col>
                    <v-col cols="4" class="">
                      <v-card
                        class="mt-14 mr-7 pa-5"
                        elevation="0"
                        color="#F1F5F8"
                        style="
                          border: 1px solid #f2f2f2;
                          box-shadow: 0px 5px 22px rgba(145, 146, 148, 0.02),
                            0px 4px 10px rgba(210, 210, 211, 0.03);
                        "
                      >
                        <p
                          class="mb-0 font-weight-bold"
                          style="font-size: 16px; color: #3a3b41"
                        >
                          Shareholding History
                        </p>
                        <p class="mb-0 caption" style="color: #3a3b41">
                          Select a segment from the breakdowns to see its
                          pattern here
                        </p>
                        <v-btn
                          elevation="0"
                          class="caption mr-12 mt-2 mb-0"
                          style="
                            text-transform: capitalize;
                            background-color: white;
                            border: 1px solid #ffffff;
                          "
                          >Total Promoter Holding
                          <v-icon class="pl-6">mdi-chevron-down</v-icon></v-btn
                        >

                        <div>
                          <!-- <v-img
                          :src="require('../assets/blue.svg')"
                          class="ml-7 mr-7 mt-4 mb-2"
                          height
                        ></v-img> -->
                          <canvas id="sharholders"></canvas>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-divider class="mt-7"></v-divider>
                  <p
                    class="pt-5 mb-0 font-weight-bold"
                    style="font-size: 18px; color: #3a3b41"
                  >
                    Mutual Funds Holding Trend
                    <v-icon color="#90949D" size="18"
                      >mdi-information-variant-circle</v-icon
                    >
                  </p>

                  <v-row>
                    <v-col cols="8">
                      <p class="pt-2 mb-0 caption" style="color: #3a3b41">
                        In last 3 months, mutual fund holding of the company has
                        almost stayed constant
                      </p>
                    </v-col>
                    <v-col cols="4">
                      <p class="body-2 mb-0" style="color: #26324a">
                        Annual Report :
                        <span style="color: black" class="font-weight-bold"
                          >2023</span
                        ><v-chip
                          class="ma-2 body-2 blue--text"
                          color="#F5F7FA"
                          label
                          x-small
                        >
                          PDF
                        </v-chip>
                        <v-icon>mdi-chevron-down</v-icon>
                      </p>
                    </v-col>
                  </v-row>

                  <v-data-table
                    :headers="last"
                    :items="datalast"
                    class=""
                    hide-default-footer
                  >
                    <template #item="{ item }">
                      <tr>
                        <td>
                          <div class="mb-0 caption d-flex">
                            <div>
                             
                              <img alt=""      class="mb-0" :src="require('@/assets/icic.svg')"    width="15px"
                                height="15px" />
                            </div>
                            <div class="pl-3">{{ item.fun }}</div>
                          </div>
                        </td>
                        <td class="mb-0 caption">{{ item.mar }}</td>
                        <td class="mb-0 caption">{{ item.wei }}</td>
                        <td class="mb-0 caption">{{ item.cha }}</td>
                        <td class="mb-0 caption">{{ item.port }}</td>
                      </tr>
                    </template>
                  </v-data-table>
                </v-card>
              </div>
            </section>

            <section class="sce1 section active" id="exposure">
              <div class="anchor"></div>

              <div class="">
                <!-- Events and News  6 and 7 -->

                <v-card class="mt-7 pa-7" outlined style="border-radius: 12px">
                  <p class="mb-0 subtitle-1 font-weight-bold">
                    Events and News
                  </p>
                  <v-card
                    elevation="0"
                    color="#F5F7FA"
                    class="rounded-lg mt-4 pa-5"
                  >
                    <div style="display: flex">
                      <p
                        class="mb-0 body-1 font-weight-bold"
                        style="font-size: 18px"
                      >
                      Event criteria checks 6/6
                      </p>
                      <v-icon color="green" class="pl-5" size="20"
                        >mdi-check-circle</v-icon
                      >
                      <v-icon color="green" class="pl-2" size="20"
                        >mdi-check-circle</v-icon
                      >
                      <v-icon color="green" class="pl-2" size="20"
                        >mdi-check-circle</v-icon
                      >
                      <v-icon color="green" class="pl-2" size="20"
                        >mdi-check-circle</v-icon
                      >
                      <v-icon color="green" class="pl-2" size="20"
                        >mdi-check-circle</v-icon
                      >
                      <v-icon color="red" class="pl-2" size="20"
                        >mdi-close-circle</v-icon
                      >
                      <v-btn
                      class=" ml-auto"
                      width="30px"
                      height="30px"
                      fab
                      dark
                      small
                      elevation="0"
                      color="#EBEBED"
                      style="background-color: white;"
                      outlined
                    >
                      <v-icon size="19" color="#3E4763">
                        mdi-chevron-down
                      </v-icon>
                    </v-btn>
                    </div>

                    <p class="pt-2 mb-0 caption" style="color: #666666">
                      Forecasting uses historical data as inputs to make
                      informed predictive estimates determining the direction of
                      future trends. Price, revenue & earnings forecasts
                      represent where the stock level, business prospects and
                      profits are potentially expected to be at the end of the
                      forecast period
                    </p>
                  </v-card>

                  <v-row>
                    <v-col cols="8">
                      <v-btn
                        class="ma-2 mt-5 rounded-lg text-none white--text body-2"
                        elevation="0"
                        color="#3E54AC"
                      >
                      Dividends
                      </v-btn>
                      <v-btn
                        class="mt-2 mr-2 mb-2 mt-5 text-none rounded-lg body-2"
                        outlined
                        color="#AFB5BA"
                        style="border:1px solid #AFB5BA"
                      >
                      Corp. Action
                      </v-btn>
                      <v-btn
                        class="ma-2 mt-5 text-none rounded-lg body-2"
                        outlined
                        color="#AFB5BA"
                      >
                      Announcement
                      </v-btn>
                     
                      <v-btn
                        class="ma-2 mt-5 text-none rounded-lg body-2"
                        outlined
                        color="#AFB5BA"
                      >
                      Legal Order
                      </v-btn>
                      <p
                        class="pt-5 mb-0 font-weight-bold"
                        style="font-size: 18px"
                      >
                        Dividends Summary
                      </p>
                      <p class="pt-2 mb-0 caption" style="color: #666666">
                        The year ending March 20223 RelianceCompany has declared
                        an equity dividend of 60.00% amounting to Rs 3 per
                        share. At the current share price of Rs 0 this results
                        in a dividend yield of 0%.
                      </p>

                      <div style="display: flex">
                        <p
                          class="mt-5 mb-0 "
                          style="color: #506d84; letter-spacing: 5px; font-size: 13px;text-transform: uppercase;"
                        >
                          Upcoming Dividends
                        </p>
                        <div>
                          <!-- <v-img
                            :src="require('../assets/star.svg')"
                            class="mt-5 mb-2 ml-2 mt-3 mr-4"
                            width="14px"
                            height="14px"
                          ></v-img> -->
                          <img alt=""    class="mt-5 mb-2 ml-2 mt-3 mr-4" :src="require('@/assets/star.svg')"    width="14px"
                            height="14px" />
                        </div>
                      </div>
                      <v-card
                        color="#F4FCD9"
                        elevation=""
                        outlined
                        style="border: 1px solid #c5d8a4"
                        class="rounded-lg mt-3 pb-3 pr-3 pt-1"
                      >
                        <v-row>
                          <v-col cols="6" class="pl-8">
                            <p class="mb-0 pt-2 body-2 font-weight-bold">
                              12 May, 2023
                            </p>
                            <p class="mb-0 caption">Ex Date</p>
                          </v-col>

                          <v-col cols="3" class="pl-8">
                            <p class="mb-0 pt-2 body-2 font-weight-bold">
                              Final
                            </p>
                            <p class="mb-0 caption">Cash Dividend</p>
                          </v-col>
                          <v-col cols="3" class="pl-8">
                            <p
                              class="mb-0 pt-2 body-2 font-weight-bold"
                              style="color: #148f71"
                            >
                              ₹55.09
                            </p>
                            <p class="mb-0 caption">Cash Dividend</p>
                          </v-col>
                        </v-row>
                      </v-card>
                      <p
                        class="mt-5 mb-0 "
                        style="color: #506d84; letter-spacing: 5px; font-size: 13px;text-transform: uppercase;"
                      >
                        Past Dividends
                      </p>
                      <v-card
                        color="#F9F9F9"
                        elevation="0"
                        class="mt-6 rounded-lg pr-3"
                      >
                        <v-row>
                          <v-col cols="6" class="pl-8">
                            <p class="mb-0 body-2 font-weight-bold">
                              12 May, 2023
                            </p>
                            <p class="mb-0 caption">Ex Date</p>
                          </v-col>

                          <v-col cols="3" class="pl-8">
                            <p class="mb-0 body-2 font-weight-bold">Final</p>
                            <p class="mb-0 caption">Cash Dividend</p>
                          </v-col>
                          <v-col cols="3" class="pl-8">
                            <p
                              class="mb-0 body-2 font-weight-bold"
                              style="color: #148f71"
                            >
                              ₹55.09
                            </p>
                            <p class="mb-0 caption">Cash Dividend</p>
                          </v-col>
                        </v-row>
                      </v-card>
                      <v-card
                        color="#F9F9F9"
                        elevation="0"
                        class="rounded-lg mt-6 pr-3"
                      >
                        <v-row>
                          <v-col cols="6" class="pl-8">
                            <p class="mb-0 body-2 font-weight-bold">
                              12 May, 2023
                            </p>
                            <p class="mb-0 caption">Ex Date</p>
                          </v-col>

                          <v-col cols="3" class="pl-8">
                            <p class="mb-0 body-2 font-weight-bold">Final</p>
                            <p class="mb-0 caption">Cash Dividend</p>
                          </v-col>
                          <v-col cols="3" class="pl-8">
                            <p
                              class="mb-0 body-2 font-weight-bold"
                              style="color: #148f71"
                            >
                              ₹55.09
                            </p>
                            <p class="mb-0 caption">Cash Dividend</p>
                          </v-col>
                        </v-row>
                      </v-card>
                      <v-card
                        color="#F9F9F9"
                        elevation="0"
                        class="mt-6 pr-3 rounded-lg"
                      >
                        <v-row>
                          <v-col cols="6" class="pl-8">
                            <p class="mb-0 body-2 font-weight-bold">
                              12 May, 2023
                            </p>
                            <p class="mb-0 caption">Ex Date</p>
                          </v-col>

                          <v-col cols="3" class="pl-8">
                            <p class="mb-0 body-2 font-weight-bold">Final</p>
                            <p class="mb-0 caption">Cash Dividend</p>
                          </v-col>
                          <v-col cols="3" class="pl-8">
                            <p
                              class="mb-0 body-2 font-weight-bold"
                              style="color: #148f71"
                            >
                              ₹55.09
                            </p>
                            <p class="mb-0 caption">Cash Dividend</p>
                          </v-col>
                        </v-row>
                      </v-card>
                      <p style="color: #1371ec" class="body-2 pt-10">
                        Load More Dividends
                        <v-icon color="#1371EC" size="18"
                          >mdi-arrow-right</v-icon
                        >
                      </p>
                    </v-col>
                    <v-col cols="4">
                      <v-card
                        color="#F7F9FB"
                        class="mt-3 pb-3 pl-2 pr-2"
                        elevation="0"
                      >
                        <p
                          class="pl-2 pt-5 mb-0 font-weight-bold"
                          style="font-size: 18px"
                        >
                          Stocks in News
                        </p>
                        <p
                          class="pl-2 pt-2 mb-0 caption"
                          style="color: #3e5466"
                        >
                          Select a segment from the breakdowns to see its
                          pattern here
                        </p>

                        <v-row>
                          <v-col cols="12">
                            <div style="display: flex">
                              <v-divider
                                vertical
                                class="ml-3 mt-3"
                                style="border-left: 3px solid #0037b7"
                              ></v-divider>
                              <div>
                                <p
                                  class="caption mb-0 mt-3 ml-3"
                                  style="color: #506d84"
                                >
                                  <v-icon class="" color="#506D84" size="19">
                                    mdi-lightning-bolt-outline</v-icon
                                  >2 hours ago
                                  <v-icon color="#506D84"
                                    >mdi-circle-small</v-icon
                                  >Economic Times
                                </p>

                                <p
                                  class="caption mb-0 ml-3"
                                  style="color: #000000"
                                >
                                  Third quarter 2023 earnings: EPS and revenues
                                  miss analyst expectations
                                </p>
                              </div>
                            </div>

                            <div style="display: flex">
                              <v-divider
                                vertical
                                class="ml-3 mt-3"
                                style="border-left: 3px solid #0037b7"
                              ></v-divider>
                              <div>
                                <p
                                  class="caption mb-0 mt-3 ml-3"
                                  style="color: #506d84"
                                >
                                  <v-icon class="" color="#506D84" size="19">
                                    mdi-lightning-bolt-outline</v-icon
                                  >2 hours ago
                                  <v-icon color="#506D84"
                                    >mdi-circle-small</v-icon
                                  >Economic Times
                                </p>

                                <p
                                  class="caption mb-0 ml-3"
                                  style="color: #000000"
                                >
                                  Third quarter 2023 earnings: EPS and revenues
                                  miss analyst expectations
                                </p>
                              </div>
                            </div>

                            <div style="display: flex">
                              <v-divider
                                vertical
                                class="ml-3 mt-3"
                                style="border-left: 3px solid #0037b7"
                              ></v-divider>
                              <div>
                                <p
                                  class="caption mb-0 mt-3 ml-3"
                                  style="color: #506d84"
                                >
                                  <v-icon class="" color="#506D84" size="19">
                                    mdi-lightning-bolt-outline</v-icon
                                  >2 hours ago
                                  <v-icon color="#506D84"
                                    >mdi-circle-small</v-icon
                                  >Economic Times
                                </p>

                                <p
                                  class="caption mb-0 ml-3"
                                  style="color: #000000"
                                >
                                  Third quarter 2023 earnings: EPS and revenues
                                  miss analyst expectations
                                </p>
                              </div>
                            </div>

                            <div style="display: flex">
                              <v-divider
                                vertical
                                class="ml-3 mt-3"
                                style="border-left: 3px solid #0037b7"
                              ></v-divider>
                              <div>
                                <p
                                  class="caption mb-0 mt-3 ml-3"
                                  style="color: #506d84"
                                >
                                  <v-icon class="" color="#506D84" size="19">
                                    mdi-lightning-bolt-outline</v-icon
                                  >2 hours ago
                                  <v-icon color="#506D84"
                                    >mdi-circle-small</v-icon
                                  >Economic Times
                                </p>

                                <p
                                  class="caption mb-0 ml-3"
                                  style="color: #000000"
                                >
                                  Third quarter 2023 earnings: EPS and revenues
                                  miss analyst expectations
                                </p>
                              </div>
                            </div>

                            <div style="display: flex">
                              <v-divider
                                vertical
                                class="ml-3 mt-3"
                                style="border-left: 3px solid #0037b7"
                              ></v-divider>
                              <div>
                                <p
                                  class="caption mb-0 mt-3 ml-3"
                                  style="color: #506d84"
                                >
                                  <v-icon class="" color="#506D84" size="19">
                                    mdi-lightning-bolt-outline</v-icon
                                  >2 hours ago
                                  <v-icon color="#506D84"
                                    >mdi-circle-small</v-icon
                                  >Economic Times
                                </p>

                                <p
                                  class="caption mb-0 ml-3"
                                  style="color: #000000"
                                >
                                  Third quarter 2023 earnings: EPS and revenues
                                  miss analyst expectations
                                </p>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                        <v-card outlined class="ml-2 mt-4 pt-2 pb-2 mr-4">
                          <p class="mb-0 pl-2 caption" style="color: #0037b7">
                            <v-icon size="18" color="#0037B7" class="pr-2"
                              >mdi-file-outline</v-icon
                            >Read other news
                            <v-icon size="18" class="ml-10" color="#0037B7"
                              >mdi-arrow-right</v-icon
                            >
                          </p>
                        </v-card>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </div>
            </section>
          </v-container>
        </v-layout>
      </div>
      <footer-screen />
    </div>
    <!-- </v-container> -->
  </div>
</template>



<script>
import { Bar } from "vue-chartjs";
import { createChart } from "lightweight-charts";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, registerables } from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chha:false,
      nifity: true,
      isCardVisible: false,
      widthdat: [50, 50, 50, 50, 80],
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      linkUrl: "#",
      zebu: "https://zebuetrade.com/",
      toggleMenu: true,
      drawer: false,
      selectedItem: true,
      tab: 0,

      small: [
        { text: "Investor", value: "inv" },
        { text: "Holding %", value: "hold" },
        { text: "No. of shares", value: "sha" },
      ],
      datasmall: [
        {
          icoo: "mdi-square-medium",
          colo: "#978FED",
          inv: "Total Promoter Holding",
          hold: "50.41 %",
          sha: "3,487,884,852",
        },
        {
          icoo: "mdi-square-medium",

          inv: "Total Promoter Holding",
          hold: "50.41 %",
          colo: "#978FED",
          sha: "3,487,884,852",
        },
        {
          icoo: "mdi-square-medium",

          inv: "Total Promoter Holding",
          hold: "50.41 %",
          sha: "3,487,884,852",
          colo: "#978FED",
        },
        {
          icoo: "mdi-square-medium",

          inv: "Total Promoter Holding",
          hold: "50.41 %",
          sha: "3,487,884,852",
          colo: "#978FED",
        },
        {
          icoo: "mdi-square-medium",

          inv: "Total Promoter Holding",
          hold: "50.41 %",
          sha: "3,487,884,852",
          colo: "#978FED",
        },
      ],
      last: [
        { text: "Funds (Top 5)", value: "fun" },
        { text: "Market-cap held", value: "mar" },
        { text: "Weight", value: "wei" },
        { text: "3M Change", value: "cha" },
        { text: "Portfolio rank", value: "port" },
      ],
      datalast: [
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 (0)",
        },
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 (0)",
        },
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 (0)",
        },
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 (0)",
        },
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 (0)",
        },
      ],

      headers: [
        {
          text: "Financial Years",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "Mar 2023", value: "List" },
        { text: "Mar 2023", value: "Issue" },
        { text: "Mar 2023", value: "Listing" },
        { text: "Mar 2023", value: "CMP" },
        { text: "Mar 2023", value: "Current" },
        { text: "Mar 2023", value: "Curr" },
      ],
      dataTableItems: [
        {
          name: "Share Capital",
          List: "₹6,766",
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
        {
          name: "Share Capital",
          List: "₹6,766",
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
        {
          name: "Share Capital",
          List: "₹6,766",
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
        {
          name: "Share Capital",
          List: "₹6,766",
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
        {
          name: "Share Capital",
          List: "₹6,766",
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
      ],
      headersss: [
        {
          text: "Stocks",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "PE Ratio", value: "one" },
        { text: "PB Ratio", value: "two" },
        { text: "Dividend Yield", value: "three" },
      ],

      headerss: [
        {
          text: "Reliance",
          align: "start",
          sortable: false,
          value: "name1",
        },

        { text: "3.28%", value: "one1" },
        { text: "1.86", value: "two1" },
        { text: "24.75", value: "three1" },
      ],
      firstab: [
        {
          name1: "MIOC",
          one1: "12.86",
          two1: "₹8,766",
          three1: "----",
        },
        {
          name1: "MIOC",
          one1: "12.86",
          two1: "₹8,766",
          three1: "----",
        },

        {
          name1: "MIOC",
          one1: "12.86",
          two1: "₹8,766",
          three1: "----",
        },
      ],

      items: [
        { title: "Market Cap", description: "₹1575681.48Cr" },
        { title: "Volume", description: "8,00,231.00" },
        { title: "Open Value", description: "₹2,441.95" },
        { title: "Close Value", description: "₹2,435.00" },
        { title: "Avg. Traded", description: "₹2,435.00" },
      ],
      items1: [
        { title: "1 M Return", description: "+2.21%" },
        { title: "1 M Return", description: "+2.21%" },
        { title: "6 M Return", description: "-2.21%" },
        { title: "3 Y Return", description: "+2.21%" },
        { title: "5 Y Return", description: "+2.21%" },
      ],
      dessertss: [
        {
          name: "PE Ratio",
          calories: 159,
        },
        {
          name: "PB Ratio",
          calories: 37.39,
        },
        {
          name: "ROCE",
          calories: 262,
        },
        {
          name: "Price to Sale",
          calories: '1.14%',
        },
        {
          name: "Dividend Yield",
          calories: 356,
        },
        {
          name: "Book Value",
          calories: '9.86%',
        },
        {
          name: "Book Value",
          calories: '₹52.2',
        },
      ],
      headerProps: {
        class: "custom-header",
      },
      chartData: {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [
          {
            // label: 'Data One',
            backgroundColor: "#ECEFF8",
            data: [40, 20, 12, 32],
          },
        ],
      },
    };
  },
  methods: {
    valu(val){
console.log(val,'val')
      const validat=val
      if(validat == false){
      this.createChartsred()
    }
    },
    chipp(){
this.chha = !this.chha
    },
    getCardColor(index) {
      // Custom logic to determine the card color based on the index or other conditions
      if (index % 2 === 0) {
        return "#ECF9EF"; // Example: Blue color for even index cards
      } else {
        return "#FAEAEA"; // Example: Green color for odd index cards
      }
    },
    toggleCardVisibility() {
      this.isCardVisible = !this.isCardVisible;
      this.buttonText = this.isCardVisible ? "view less" : "view more";
    },

    createCharts() {
      const chartOptions1 = {
        height: 257,
        grid: {
          vertLines: {
            // color: '#2B2B43',
            visible: false,
          },
        },
        leftPriceScale: {
          visible: true,
          borderVisible: false,
        },
        rightPriceScale: {
          visible: false,
        },
        // Add your chart options for chart 1 here
      };

      const chart1 = createChart(this.$refs.chartContainer1, chartOptions1);

      const lineSeries1 = chart1.addBaselineSeries({
        baseValue: { type: "price", price: 200 },
        topLineColor: "#33A34D",
        topFillColor1: "rgba( 38, 166, 154, 0.28)",
        topFillColor2: "rgba( 38, 166, 154, 0.05)",
        bottomLineColor: "rgba( 239, 83, 80, 1)",
        bottomFillColor1: "rgba( 239, 83, 80, 0.05)",
        bottomFillColor2: "rgba( 239, 83, 80, 0.28)",
        // lineColor: 'blue',
        lineWidth: 2,
        crosshairMarkerVisible: true,
        // crosshairMarkerRadius: 4,
      });

      const data1 = [
        { time: "2023-03-01", value: 200 },
        { time: "2023-03-02", value: 150 },
        { time: "2023-03-03", value: 120 },
        { time: "2023-03-04", value: 180 },
        { time: "2023-03-05", value: 200 },
        { time: "2023-03-06", value: 10 },
        { time: "2023-03-07", value: 90 },
        { time: "2023-03-08", value: 170 },
        { time: "2023-03-09", value: 80 },
        { time: "2023-04-01", value: 200 },
        { time: "2023-04-02", value: 150 },
        { time: "2023-04-03", value: 120 },
        { time: "2023-04-04", value: 180 },
        { time: "2023-04-05", value: 200 },
        { time: "2023-04-06", value: 10 },
        { time: "2023-04-07", value: 90 },
        { time: "2023-04-08", value: 170 },
        { time: "2023-04-09", value: 80 },
        { time: "2023-05-01", value: 200 },
        { time: "2023-05-02", value: 150 },
        { time: "2023-05-03", value: 120 },
        { time: "2023-05-04", value: 180 },
        { time: "2023-05-05", value: 200 },
        { time: "2023-05-06", value: 10 },
        { time: "2023-05-07", value: 90 },
        { time: "2023-05-08", value: 170 },
        { time: "2023-05-09", value: 80 },
        { time: "2023-06-01", value: 280 },
        { time: "2023-06-02", value: 150 },
        { time: "2023-06-03", value: 120 },
        { time: "2023-06-04", value: 180 },
        { time: "2023-06-05", value: 200 },
        { time: "2023-06-06", value: 10 },
        { time: "2023-06-07", value: 90 },
        { time: "2023-06-08", value: 170 },
        { time: "2023-06-09", value: 80 },
        { time: "2023-07-01", value: 100 },
        { time: "2023-07-02", value: 150 },
        { time: "2023-07-03", value: 120 },
        { time: "2023-07-04", value: 180 },
        { time: "2023-07-05", value: 200 },
        { time: "2023-07-06", value: 10 },
        { time: "2023-07-07", value: 90 },
        { time: "2023-07-08", value: 170 },
        { time: "2023-07-09", value: 80 },
        { time: "2023-08-01", value: 100 },
        { time: "2023-08-02", value: 150 },
        { time: "2023-08-03", value: 120 },
        { time: "2023-08-04", value: 180 },
        { time: "2023-08-05", value: 200 },
        { time: "2023-08-06", value: 10 },
        { time: "2023-08-07", value: 90 },
        { time: "2023-08-08", value: 170 },
        { time: "2023-08-09", value: 80 },
        { time: "2023-09-01", value: 100 },
        { time: "2023-09-02", value: 150 },
        { time: "2023-09-03", value: 120 },
        { time: "2023-09-04", value: 180 },
        { time: "2023-09-05", value: 200 },
        { time: "2023-09-06", value: 10 },
        { time: "2023-09-07", value: 90 },
        { time: "2023-09-08", value: 170 },
        { time: "2023-09-09", value: 80 },
        { time: "2023-10-01", value: 100 },
        { time: "2023-10-02", value: 150 },
        { time: "2023-10-03", value: 120 },
        { time: "2023-10-04", value: 180 },
        { time: "2023-10-05", value: 200 },
        { time: "2023-10-06", value: 10 },
        { time: "2023-10-07", value: 90 },
        { time: "2023-10-08", value: 170 },
        { time: "2023-10-09", value: 80 },
        { time: "2023-11-01", value: 100 },
        { time: "2023-11-02", value: 150 },
        { time: "2023-11-03", value: 120 },
        { time: "2023-11-04", value: 180 },
        { time: "2023-11-05", value: 200 },
        { time: "2023-11-06", value: 10 },
        { time: "2023-11-07", value: 90 },
        { time: "2023-11-08", value: 170 },
        { time: "2023-11-09", value: 80 },
        { time: "2023-12-01", value: 100 },
        { time: "2023-12-02", value: 150 },
        { time: "2023-12-03", value: 120 },
        { time: "2023-12-04", value: 180 },
        { time: "2023-12-05", value: 200 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 90 },
        { time: "2023-12-08", value: 170 },
        { time: "2023-12-09", value: 80 },
      ];

      lineSeries1.setData(data1);

      // Chart 2
      const chartOptions2 = {
        width: 200,
        height: 150,
        grid: {
          vertLines: {
            // color: '#2B2B43',
            visible: false,
          },
          horzLines: {
            // color: '#363C4E',
            visible: false,
          },
        },
        rightPriceScale: {
          visible: false,
        },
        // leftPriceScale: {
        //     visible: false,
        // },
        // Add your chart options for chart 2 here
      };

      const chart2 = createChart(this.$refs.chartContainer2, chartOptions2);

      const lineSeries2 = chart2.addAreaSeries({
        lineColor: "#33A34D",
        
        lineWidth: 2,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 4,
      });

      const data2 = [
        { time: "2023-03-01", value: 200 },
        { time: "2023-03-02", value: 150 },
        { time: "2023-03-03", value: 120 },
        { time: "2023-03-04", value: 180 },
        { time: "2023-03-05", value: 200 },
        { time: "2023-03-06", value: 10 },
        { time: "2023-03-07", value: 90 },
        { time: "2023-03-08", value: 170 },
        { time: "2023-03-09", value: 80 },
        { time: "2023-04-01", value: 200 },
        { time: "2023-04-02", value: 150 },
        { time: "2023-04-03", value: 120 },
        { time: "2023-04-04", value: 180 },
        { time: "2023-04-05", value: 200 },
        { time: "2023-04-06", value: 10 },
        { time: "2023-04-07", value: 90 },
        { time: "2023-04-08", value: 170 },
        { time: "2023-04-09", value: 80 },
        { time: "2023-05-01", value: 200 },
        { time: "2023-05-02", value: 150 },
        { time: "2023-05-03", value: 120 },
        { time: "2023-05-04", value: 180 },
        { time: "2023-05-05", value: 200 },
        { time: "2023-05-06", value: 10 },
        { time: "2023-05-07", value: 90 },
        { time: "2023-05-08", value: 170 },
        { time: "2023-05-09", value: 80 },
        { time: "2023-06-01", value: 280 },
        { time: "2023-06-02", value: 150 },
        { time: "2023-06-03", value: 120 },
        { time: "2023-06-04", value: 180 },
        { time: "2023-06-05", value: 200 },
        { time: "2023-06-06", value: 10 },
        { time: "2023-06-07", value: 90 },
        { time: "2023-06-08", value: 170 },
        { time: "2023-06-09", value: 80 },
        { time: "2023-07-01", value: 100 },
        { time: "2023-07-02", value: 150 },
        { time: "2023-07-03", value: 120 },
        { time: "2023-07-04", value: 180 },
        { time: "2023-07-05", value: 200 },
        { time: "2023-07-06", value: 10 },
        { time: "2023-07-07", value: 90 },
        { time: "2023-07-08", value: 170 },
        { time: "2023-07-09", value: 80 },
        { time: "2023-08-01", value: 100 },
        { time: "2023-08-02", value: 150 },
        { time: "2023-08-03", value: 120 },
        { time: "2023-08-04", value: 180 },
        { time: "2023-08-05", value: 200 },
        { time: "2023-08-06", value: 10 },
        { time: "2023-08-07", value: 90 },
        { time: "2023-08-08", value: 170 },
        { time: "2023-08-09", value: 80 },
        { time: "2023-09-01", value: 100 },
        { time: "2023-09-02", value: 150 },
        { time: "2023-09-03", value: 120 },
        { time: "2023-09-04", value: 180 },
        { time: "2023-09-05", value: 200 },
        { time: "2023-09-06", value: 10 },
        { time: "2023-09-07", value: 90 },
        { time: "2023-09-08", value: 170 },
        { time: "2023-09-09", value: 80 },
        { time: "2023-10-01", value: 100 },
        { time: "2023-10-02", value: 150 },
        { time: "2023-10-03", value: 120 },
        { time: "2023-10-04", value: 180 },
        { time: "2023-10-05", value: 200 },
        { time: "2023-10-06", value: 10 },
        { time: "2023-10-07", value: 90 },
        { time: "2023-10-08", value: 170 },
        { time: "2023-10-09", value: 80 },
        { time: "2023-11-01", value: 100 },
        { time: "2023-11-02", value: 150 },
        { time: "2023-11-03", value: 120 },
        { time: "2023-11-04", value: 180 },
        { time: "2023-11-05", value: 200 },
        { time: "2023-11-06", value: 10 },
        { time: "2023-11-07", value: 90 },
        { time: "2023-11-08", value: 170 },
        { time: "2023-11-09", value: 80 },
        { time: "2023-12-01", value: 100 },
        { time: "2023-12-02", value: 150 },
        { time: "2023-12-03", value: 120 },
        { time: "2023-12-04", value: 180 },
        { time: "2023-12-05", value: 200 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 90 },
        { time: "2023-12-08", value: 170 },
        { time: "2023-12-09", value: 80 },
      ];

      lineSeries2.setData(data2);












      const chartOptions3 = {
        width: 850,
        height: 320,
        crosshair: {
          vertLine: {
            labelVisible: false,
          },
        },
        leftPriceScale: {
          visible: true,
          borderVisible: false,
        },
        rightPriceScale: {
          visible: false,
          borderVisible: false,
        },
        grid: {
          vertLines: {
            // color: '#2B2B43',
            visible: false,
          },
          horzLines: {
            // color: '#363C4E',
            visible: false,
          },
          rightPriceScale: {
            visible: false,
          },
        },
      };

      const chart = createChart(this.$refs.chartContainer3, chartOptions3);

      // var chart= createChart(document.getElementById('chartContainer3'), chartOptions3);
      var lineSeries3 = chart.addAreaSeries({
        lineColor: "#F9CD6C",
        // baseValue: { type: 'price', price: 25 },
        // topLineColor: 'rgba( 38, 166, 154, 1)', topFillColor1: 'rgba( 38, 166, 154, 0.28)', topFillColor2: 'rgba( 38, 166, 154, 0.05)', bottomLineColor: 'rgba( 239, 83, 80, 1)', bottomFillColor1: 'rgba( 239, 83, 80, 0.05)', bottomFillColor2: 'rgba( 239, 83, 80, 0.28)' ,
        lineWidth: 2,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 4,
      });
      const data3 = [
        { time: "2023-09-01", value: 0 },
        { time: "2023-09-02", value: -45 },
        { time: "2023-09-03", value: 42 },
        { time: "2023-09-04", value: 48 },
        { time: "2023-09-05", value: 30 },
        { time: "2023-09-06", value: 40 },
        { time: "2023-09-07", value: 60 },
        { time: "2023-09-08", value: 20 },
        { time: "2023-09-09", value: 10 },
        { time: "2023-09-11", value: 30 },
        { time: "2023-09-12", value: 45 },
        { time: "2023-10-01", value: 30 },
        { time: "2023-10-02", value: 25 },
        { time: "2023-10-03", value: 20 },
        { time: "2023-10-04", value: 28 },
        { time: "2023-10-05", value: 22 },
        { time: "2023-10-06", value: 27 },
        { time: "2023-10-07", value: 39 },
        { time: "2023-10-08", value: 37 },
        { time: "2023-10-09", value: 28 },
        { time: "2023-11-01", value: 40 },
        { time: "2023-11-02", value: 35 },
        { time: "2023-11-03", value: 28 },
        { time: "2023-11-04", value: 38 },
        { time: "2023-11-05", value: 20 },
        { time: "2023-11-06", value: 23 },
        { time: "2023-11-07", value: 29 },
        { time: "2023-11-08", value: 17 },
        { time: "2023-11-09", value: 28 },
        { time: "2023-12-01", value: 13 },
        { time: "2023-12-02", value: 15 },
        { time: "2023-12-03", value: 12 },
        { time: "2023-12-04", value: 18 },
        { time: "2023-12-05", value: 20 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 20 },
        { time: "2023-12-08", value: 17 },
        { time: "2023-12-09", value: 35 },
      ];
      lineSeries3.setData(data3);
      const secondval = chart.addAreaSeries({
        lineColor: "#9D70FF",
      });
      const data4 = [
        { time: "2023-09-01", value: 0 },
        { time: "2023-09-02", value: 25 },
        { time: "2023-09-03", value: 13 },
        { time: "2023-09-04", value: 18 },
        { time: "2023-09-05", value: 20 },
        { time: "2023-09-06", value: 10 },
        { time: "2023-09-07", value: 20 },
        { time: "2023-09-08", value: 17 },
        { time: "2023-09-09", value: 40 },
        { time: "2023-09-11", value: 42 },
        { time: "2023-09-12", value: 45 },
        { time: "2023-10-01", value: 20 },
        { time: "2023-10-02", value: 17 },
        { time: "2023-10-03", value: 12 },
        { time: "2023-10-04", value: 18 },
        { time: "2023-10-05", value: 20 },
        { time: "2023-10-06", value: 10 },
        { time: "2023-10-07", value: 20 },
        { time: "2023-10-08", value: 17 },
        { time: "2023-10-09", value: 19 },
        { time: "2023-11-01", value: 20 },
        { time: "2023-11-02", value: 15 },
        { time: "2023-11-03", value: 10 },
        { time: "2023-11-04", value: 18 },
        { time: "2023-11-05", value: 20 },
        { time: "2023-11-06", value: 10 },
        { time: "2023-11-07", value: 30 },
        { time: "2023-11-08", value: 32 },
        { time: "2023-11-09", value: 34 },
        { time: "2023-12-01", value: 20 },
        { time: "2023-12-02", value: 15 },
        { time: "2023-12-03", value: 31 },
        { time: "2023-12-04", value: 18 },
        { time: "2023-12-05", value: 20 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 26 },
        { time: "2023-12-08", value: 37 },
        { time: "2023-12-09", value: 30 },
      ];
      secondval.setData(data4);
      const thirdval = chart.addAreaSeries({
        lineColor: "#EE89DF",
      });
      const data5 = [
        { time: "2023-09-01", value: 0 },
        { time: "2023-09-02", value: -15 },
        { time: "2023-09-03", value: 22 },
        { time: "2023-09-04", value: 18 },
        { time: "2023-09-05", value: 20 },
        { time: "2023-09-06", value: 10 },
        { time: "2023-09-07", value: 40 },
        { time: "2023-09-08", value: 10 },
        { time: "2023-09-09", value: 30 },
        { time: "2023-09-11", value: 20 },
        { time: "2023-09-12", value: 25 },
        { time: "2023-10-01", value: 10 },
        { time: "2023-10-02", value: 15 },
        { time: "2023-10-03", value: 12 },
        { time: "2023-10-04", value: 18 },
        { time: "2023-10-05", value: 20 },
        { time: "2023-10-06", value: 10 },
        { time: "2023-10-07", value: 29 },
        { time: "2023-10-08", value: 17 },
        { time: "2023-10-09", value: 28 },
        { time: "2023-11-01", value: 10 },
        { time: "2023-11-02", value: 15 },
        { time: "2023-11-03", value: 12 },
        { time: "2023-11-04", value: 18 },
        { time: "2023-11-05", value: 20 },
        { time: "2023-11-06", value: 10 },
        { time: "2023-11-07", value: 29 },
        { time: "2023-11-08", value: 17 },
        { time: "2023-11-09", value: 28 },
        { time: "2023-12-01", value: 13 },
        { time: "2023-12-02", value: 15 },
        { time: "2023-12-03", value: 12 },
        { time: "2023-12-04", value: 18 },
        { time: "2023-12-05", value: 20 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 20 },
        { time: "2023-12-08", value: 17 },
        { time: "2023-12-09", value: 35 },
      ];
      thirdval.setData(data5);

      document.body.style.position = "relative";
      var container = document.createElement("div");
      document.body.appendChild(container);

      var toolTipWidth = 100;
      var toolTipHeight = 80;
      var toolTipMargin = 15;
      var toolTip = document.createElement("div");
      toolTip.style = `width: 96px; height: 80px; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
      toolTip.style.background = "white";
      toolTip.style.color = "black";
      toolTip.style.borderColor = "rgba(0, 150, 136, 1)";
      //   toolTip.className = "floating-tooltip";
      container.appendChild(toolTip);
      chart.subscribeCrosshairMove((param) => {
        console.log("parma", param);
        if (
          param.point === undefined ||
          !param.time ||
          param.point.x < 0 ||
          param.point.x > chart.clientWidth ||
          param.point.y < 0 ||
          param.point.y > chart.clientHeight
        ) {
          toolTip.style.display = "none";
        } else {
          // time will be in the same format that we supplied to setData.
          // thus it will be YYYY-MM-DD
          // const dateStr = param.time;
          // console.log('str dates',dateStr)
          toolTip.style.display = "block";
          var data = param.seriesData.get(lineSeries3);
          // const secdata= param.seriesData.get(secondval);
          var price = data.value !== undefined ? data.value : data.close;
          // const secprice = secdata.value !== undefined ? data.value : data.close;
          console.log("param1", price);
          // toolTip.innerHTML = `<div style="color: ${'rgba(0, 150, 136, 1)'}">Apple Inc.</div><div style="font-size: 24px; margin: 4px 0px; color: ${'black'}">
          // 	${Math.round(100 * price) / 100}

          // 	</div><div style="color: ${'black'}">
          // 	${dateStr}
          // 	</div>`;
          toolTip.innerHTML =
            '<div style="color: #2196f3; font-size: 12px; margin: 4px 0px; ">Relance</div><div style="font-size: 24px; margin: 6px 0px; id=text;>' +
            Math.round(100 * price) / 100 +
            "</div>";
          var coordinate = lineSeries3.priceToCoordinate(price);
          var shiftedCoordinate = param.point.x - 50;
          if (coordinate === null) {
            return;
          }
          shiftedCoordinate = Math.max(
            0,
            Math.min(container.clientWidth - toolTipWidth, shiftedCoordinate)
          );
          var coordinateY =
            coordinate - toolTipHeight - toolTipMargin > 0
              ? coordinate - toolTipHeight - toolTipMargin
              : Math.max(
                  0,
                  Math.min(
                    container.clientHeight - toolTipHeight - toolTipMargin,
                    coordinate + toolTipMargin
                  )
                );

          toolTip.style.left = shiftedCoordinate + "px";
          toolTip.style.top = coordinateY + "px";
        }
      });
      this.createChartsred();
    },
    createChartsred() {
      
      // Chart 2
      const chartOptions22 = {
        width:200,
        height: 150,
        label: {
        font: {
            family: "'Inter', sans-serif"
        }},
        grid: {
          vertLines: {
            // color: '#2B2B43',
            visible: false,
          },
          horzLines: {
            // color: '#363C4E',
            visible: true,
          },
        },
        rightPriceScale: {
          visible: false,
        },
        // leftPriceScale: {
        //     visible: false,
        // },
        // Add your chart options for chart 2 here
        
      };
    
      const chart22 = createChart(this.$refs.chartContainerred, chartOptions22);
    
      const lineSeries22 = chart22.addAreaSeries({
        lineColor: 'rgba(255, 82, 82, 1)',
        bottomColor: 'rgba(255, 82, 82, 0.04)',
         topColor: 'rgba(255, 82, 82, 0.56)',
        // baseValue: { type: 'price', price: 25 },
        // topLineColor: 'rgba( 38, 166, 154, 1)', topFillColor1: 'rgba( 38, 166, 154, 0.28)', topFillColor2: 'rgba( 38, 166, 154, 0.05)', bottomLineColor: 'rgba( 239, 83, 80, 1)', bottomFillColor1: 'rgba( 239, 83, 80, 0.05)', bottomFillColor2: 'rgba( 239, 83, 80, 0.28)' ,
        lineWidth: 2,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 4,
        label: {
        font: {
            family: "'Inter', sans-serif"
        }
      }
      });
    
      const data22 = [
        { time: "2023-03-01", value: 200 },
        { time: "2023-03-02", value: 150 },
        { time: "2023-03-03", value: 120 },
        { time: "2023-03-04", value: 180 },
        { time: "2023-03-05", value: 200 },
        { time: "2023-03-06", value: 10 },
        { time: "2023-03-07", value: 90 },
        { time: "2023-03-08", value: 170 },
        { time: "2023-03-09", value: 80 },
        { time: "2023-04-01", value: 200 },
        { time: "2023-04-02", value: 150 },
        { time: "2023-04-03", value: 120 },
        { time: "2023-04-04", value: 180 },
        { time: "2023-04-05", value: 200 },
        { time: "2023-04-06", value: 10 },
        { time: "2023-04-07", value: 90 },
        { time: "2023-04-08", value: 170 },
        { time: "2023-04-09", value: 80 },
        { time: "2023-05-01", value: 200 },
        { time: "2023-05-02", value: 150 },
        { time: "2023-05-03", value: 120 },
        { time: "2023-05-04", value: 180 },
        { time: "2023-05-05", value: 200 },
        { time: "2023-05-06", value: 10 },
        { time: "2023-05-07", value: 90 },
        { time: "2023-05-08", value: 170 },
        { time: "2023-05-09", value: 80 },
        { time: "2023-06-01", value: 280 },
        { time: "2023-06-02", value: 150 },
        { time: "2023-06-03", value: 120 },
        { time: "2023-06-04", value: 180 },
        { time: "2023-06-05", value: 200 },
        { time: "2023-06-06", value: 10 },
        { time: "2023-06-07", value: 90 },
        { time: "2023-06-08", value: 170 },
        { time: "2023-06-09", value: 80 },
        { time: "2023-07-01", value: 100 },
        { time: "2023-07-02", value: 150 },
        { time: "2023-07-03", value: 120 },
        { time: "2023-07-04", value: 180 },
        { time: "2023-07-05", value: 200 },
        { time: "2023-07-06", value: 10 },
        { time: "2023-07-07", value: 90 },
        { time: "2023-07-08", value: 170 },
        { time: "2023-07-09", value: 80 },
        { time: "2023-08-01", value: 100 },
        { time: "2023-08-02", value: 150 },
        { time: "2023-08-03", value: 120 },
        { time: "2023-08-04", value: 180 },
        { time: "2023-08-05", value: 200 },
        { time: "2023-08-06", value: 10 },
        { time: "2023-08-07", value: 90 },
        { time: "2023-08-08", value: 170 },
        { time: "2023-08-09", value: 80 },
        { time: "2023-09-01", value: 100 },
        { time: "2023-09-02", value: 150 },
        { time: "2023-09-03", value: 120 },
        { time: "2023-09-04", value: 180 },
        { time: "2023-09-05", value: 200 },
        { time: "2023-09-06", value: 10 },
        { time: "2023-09-07", value: 90 },
        { time: "2023-09-08", value: 170 },
        { time: "2023-09-09", value: 80 },
        { time: "2023-10-01", value: 100 },
        { time: "2023-10-02", value: 150 },
        { time: "2023-10-03", value: 120 },
        { time: "2023-10-04", value: 180 },
        { time: "2023-10-05", value: 200 },
        { time: "2023-10-06", value: 10 },
        { time: "2023-10-07", value: 90 },
        { time: "2023-10-08", value: 170 },
        { time: "2023-10-09", value: 80 },
        { time: "2023-11-01", value: 100 },
        { time: "2023-11-02", value: 150 },
        { time: "2023-11-03", value: 120 },
        { time: "2023-11-04", value: 180 },
        { time: "2023-11-05", value: 200 },
        { time: "2023-11-06", value: 10 },
        { time: "2023-11-07", value: 90 },
        { time: "2023-11-08", value: 170 },
        { time: "2023-11-09", value: 80 },
        { time: "2023-12-01", value: 100 },
        { time: "2023-12-02", value: 150 },
        { time: "2023-12-03", value: 120 },
        { time: "2023-12-04", value: 180 },
        { time: "2023-12-05", value: 200 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 90 },
        { time: "2023-12-08", value: 170 },
        { time: "2023-12-09", value: 80 },
      ];
    
      lineSeries22.setData(data22);
    
     
    },
  },
  mounted() {
    this.createCharts();
    

    Chart.register(...registerables);
    // const labels = Utils.months({count: 7});
    const datalabels = [
      { year: "2017", count: 2370 },
      // { year: '09:05 AM', count: 2365 },

      { year: "2018", count: 2380 },
      { year: "2019", count: 2390 },
      { year: "2020", count: 2405 },
      { year: "2021", count: 2330 },
      { year: "2022", count: 2380 },
      { year: "2023", count: 2410 },
    ];
    const dataLinebar = {
      labels: datalabels.map((row) => row.year),
      datasets: [
        {
          label: "DEBT TO ASSETS",
          data: [-100, -20, 25, 40, -81, -101, 75],
          backgroundColor: ["rgba(255, 159, 64)"],
          borderColor: ["rgba(255, 159, 64)"],
          type: "line",
          borderWidth: 2,
          yAxisID: "precent",
        },
        {
          label: "ASSETS",
          data: [0, 65, 59, 80, 50, -56, 55],
          backgroundColor: ["rgba(182, 176, 251, 1)"],
          borderColor: ["rgba(182, 176, 251, 1)"],
          borderWidth: 1,
          yAxisID: "y",
        },
        {
          label: "LIABILITIES",
          data: [0, -20, 25, 40, -81, -101, 75],
          backgroundColor: ["rgba(247, 170, 237, 1) "],
          borderColor: ["rgba(247, 170, 237, 1) "],
          borderWidth: 1,
        },
      ],
    };

    new Chart(this.$el.querySelector("#linebar"), {
      type: "bar",
      data: dataLinebar,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            position: "left",
          },
          precent: {
            beginAtZero: true,
            position: "right",

            ticks: {
              callback: function (value) {
                return value + " %";
              },
            },
          },
        },
        plugins: {
          tooltip: {
            mode: "index",
            backgroundColor: "rgb(255, 255, 255)",
            // multiKeyBackground: '#000000',
            bodyColor: "#000000",
            titleColor: "#000000",
            displayColors: true,
          },
        },
      },
    });
    const datas = {
      labels: datalabels.map((row) => row.year),
      datasets: [
        {
          label: false,
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ["rgba(182, 176, 251, 1)"],
          borderColor: ["rgba(182, 176, 251, 1)"],
          borderWidth: 1,
        },
      ],
    };

    new Chart(this.$el.querySelector("#sharholders"), {
      // labels: datalabels
      plugins: [ChartDataLabels],
      type: "bar",
      data: datas,
      options: {
        // scales: {
        //   y: {
        //     beginAtZero: true
        //   },

        // },
        plugins: {
          tooltip: {
            enabled: false,
          },
          datalabels: {
            anchor: "end",
            align: "top",
            // formatter: Math.round + '%',
            formatter: function (val) {
              return Math.round(val) + "%";
            },
            font: {
              weight: "bold",
              size: 12,
            },
          },
          legend: {
            display: false,
          },
        },
      },
    });
    const data = [
      { year: "09:00 AM", count: 2370 },
      // { year: '09:05 AM', count: 2365 },

      { year: "10:00 AM", count: 2380 },
      { year: "11:00 AM", count: 2390 },
      { year: "12:00 PM", count: 2405 },
      { year: "01:00 PM", count: 2330 },
      { year: "02:00 PM", count: 2380 },
      { year: "03:00 PM", count: 2410 },
    ];

    new Chart(this.$el.querySelector("#acquisitions"), {
      type: "line",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.count),
          },
        ],
      },
    });

    const doughnutData = {
      // labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 150],
          backgroundColor: ["#3E54AC", "#ECEFF8", "rgb(255, 205, 86)"],
          hoverOffset: 1,
        },
      ],
    };

    new Chart(this.$el.querySelector("#myChart"), {
      type: "doughnut",
      data: doughnutData,
    });

    const labels = [
      { year: "2023", count: 2370 },
      // { year: '2018', count: 2365 },
    ];
    const datasa = {
      labels: labels.map((row) => row.year),
      // labels: labels,
      datasets: [
        {
          label: "My First Dataset",
          data: [50],
          backgroundColor: [
            "#978FED",
            // 'rgba(255, 159, 64, 0.2)',
            // 'rgba(255, 205, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            "#978FED",
            // 'rgb(255, 159, 64)',
            // 'rgb(255, 205, 86)',
            // 'rgb(75, 192, 192)',
            // 'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
            // 'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
        },
        {
          label: "My First Dataset",
          data: [30],
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            // 'rgba(255, 159, 64, 0.2)',
            "#EE89DF",
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            // 'rgb(255, 99, 132)',
            // 'rgb(255, 159, 64)',
            "rgba(238, 137, 223)",
            // 'rgb(75, 192, 192)',
            // 'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
            // 'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
        },
        {
          label: "My First Dataset",
          data: [15],
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            "rgb(134, 181, 243,0.2)",
            // 'rgba(255, 205, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            // 'rgb(255, 99, 132)',
            "rgb(134, 181, 243)",
            // 'rgb(255, 205, 86)',
            // 'rgb(75, 192, 192)',
            // 'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
            // 'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
        },
        {
          label: "My First Dataset",
          data: [5],
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)',
            "rgba(151, 143, 237, 1)",
            // 'rgba(255, 205, 86, 0.2)',
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(54, 162, 235, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            // 'rgb(255, 99, 132)',
            "rgb(151, 143, 237, 1)",
            // 'rgb(255, 205, 86)',
            // 'rgb(75, 192, 192)',
            // 'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
            // 'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
        },
      ],
    };
    
    new Chart(this.$el.querySelector("#totalbar"), {
      type: "bar",
      data: datasa,
      options: {
        indexAxis: "y",
        plugins: {
          // tooltip:{
          //   enabled: false,
          // },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            // type:'time',
            // time:{
            //   unit:'hour'
            // },
            display: false,
          },
          y: {
            position: "right",

            beginAtZero: true,
            display: false,
            stacked: true,
          },
          yAxes: [
            {
              type: "bar",
              display: true,
              position: "right",
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  },
};
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let activeLink = null;

window.addEventListener("scroll", () => {
  $$(".section").forEach((section) => {
    const { y } = section.getBoundingClientRect();

    if (y <= 0) {
      if (activeLink != null) {
        activeLink.classList.remove("active");
      }

      activeLink = $(`.nav-link[href~="#${section.id}"]`);
      activeLink.classList.add("active");
    }
  });
});
</script>