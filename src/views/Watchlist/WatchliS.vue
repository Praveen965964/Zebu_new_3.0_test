<template>
  <v-container class="">
    <v-progress-circular  v-if="loaderInitiate"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
<v-dialog  v-model="BuyPagePopUpShow" v-if="BuyPagePopUpShow"   hide-overlay max-width="620px" style="background-color:transparent">
  <BuyPage  :message="itemGetData" />
</v-dialog>
    <v-snackbar top right outlined color="black" transition="slide-x-reverse-transition" v-model="WatchlistIndexAdd"
      :timeout="timeout">
      This watchList name <strong> already exist</strong> .

    </v-snackbar>
    <v-dialog v-model="ScriptInfoDetailesPopup" persistent max-width="68%" height="200px">
      <v-card class="pt-1 px-1" width="100%" height="70%" style="overflow-y:hidden">
        <v-card color="#203464" class="ma-1" height="70px">
          <div class="d-flex pt-3">
            <p class="white--text mb-0 subtitle-1 font-weight-bold pl-5">{{ storeScriptDet.tsym }}</p>
            <v-card color="white" class=" ml-2 mt-2" height="20px">
              <p class="mb-0 fontsizeonetwo">{{ storeScriptDet.exch }}</p>
            </v-card>
            <v-btn class="pa-0 ml-auto mr-3 white--text" @click="ScriptInfoDetailesPopup = false" width="fit-content" icon
              height="fit-content">
              <v-icon icon size="15">mdi-close</v-icon></v-btn>
          </div>
        </v-card>
        <v-row no-gutters>
          <v-col cols="6">
            <v-row>
              <v-col cols="6" class="pl-5">
                <p class="fontsizeonetwo font-weight-regular mb-1">Company Name</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Segment</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Instrument Name</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Option Type</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Tick Size</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Price precision</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">gn/gd * pn/pd</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Price Quote Qty</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Delivery Units</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Gsm Ind</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Additional Long Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Additional Short Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Delivery Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Tender Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Exercise Start Date</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Exercise End Date</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Var Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Elm Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-0">Exposure Margin</p>

              </v-col>
              <v-col cols="6" class="" align="end">
                <p class=" font-weight-regular mb-1 fontsizeonetwo">{{ storeScriptDet.cname }}</p>
                <p class=" font-weight-regular mb-1" style="font-size:12px">{{ storeScriptDet.seg }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.instname }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1 pt-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.ti }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.pp }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.prcftr_d }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1 ">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1 ">-</p>
                <p>-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.delmrg }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.varmrg }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.elmmrg }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-0">-</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" class="pr-0">
            <v-row no-gutters>
              <v-col cols="6" class="pl-10">
                <p class="fontsizeonetwo font-weight-regular mb-1">Symbol Name</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Expiry Date</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Strike Price</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">ISIN</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Lot Size</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Multiplier</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Price Units</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Trade Units</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Freeze Qty</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Elm Buy Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Elm Sell Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Special Long Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Special Short Margin</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Tender Start Date</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Tender End Date</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Contract Token</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">Last Trading Date</p>
                <p class="fontsizeonetwo font-weight-regular mb-0">Expiry Time</p>
              </v-col>
              <v-col cols="6" class="pr-10" align="end">

                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.symname }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.isin }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.ls }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.mult }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.frzqty }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">{{ storeScriptDet.token }}</p>
                <p class="fontsizeonetwo font-weight-regular mb-1">-</p>
                <p class="fontsizeonetwo font-weight-regular mb-0">-</p>

              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <v-dialog v-model="FundamentalsPopup" persistent max-width="60%" height="200px">
      <v-card class="pt-3 px-6 py-6" width="100%" height="70%" style="overflow-y:hidden">

        <v-row>
          <v-col cols="10">
            <p class="mb-1 pt-2"
              style="color: #000;font-size: 20px;font-weight: 559;line-height: 16px;letter-spacing: -0.4px;">Fundamentals
            </p>
            <p class="pt-1" style="color: #666;font-size: 12px;font-weight: 469;line-height: 14px;">Fundamental breakdown of RELIANCE information</p>
          </v-col>
          <v-col cols="2">
            <v-btn class="pa-0 mt-1 ml-auto black--text float-right" @click="FundamentalsPopup = false" width="fit-content" icon
              height="fit-content">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="white" />
                <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="url(#paint0_linear_6141_15815)"
                  fill-opacity="0.2" />
                <path d="M17.5 10.5L10.5 17.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.5 10.5L17.5 17.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#CCCCCC" />
                <defs>
                  <linearGradient id="paint0_linear_6141_15815" x1="14" y1="0" x2="14" y2="28"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FBFBFB" />
                    <stop offset="1" stop-color="#F9FAFA" />
                  </linearGradient>
                </defs>
              </svg>
            </v-btn>
          </v-col>
        </v-row>
        <div v-for="  bbbbbbbb in arrsgv" :key="bbbbbbbb.ColHeaderOne">
        <v-row >
          <v-col cols="4" class="" >
            <p class="mb-1" style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px;letter-spacing: 0.8px;">{{bbbbbbbb.ColHeaderOne}}</p>
            <p class="mb-1" style="color: #000;font-size: 13px;font-weight: 469;line-height: 16px;">{{bbbbbbbb.valOne}}</p>
         <v-divider class="mr-7"></v-divider>
          </v-col>
          <v-col cols="4" class="" >
            <p class="mb-1" style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px;letter-spacing: 0.8px;">{{bbbbbbbb.ColHeaderTwo}}</p>
            <p class="mb-1" style="color: #000;font-size: 13px;font-weight: 469;line-height: 16px;">{{bbbbbbbb.valTwo}}</p>
         <v-divider class="mr-7"></v-divider>
        </v-col>
        <v-col cols="4" class="" >
            <p class="mb-1" style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px;letter-spacing: 0.8px;">{{bbbbbbbb.ColHeaderThree}}</p>
            <p class="mb-1" style="color: #000;font-size: 13px;font-weight: 469;line-height: 16px;">{{bbbbbbbb.valThree}}</p>
         <v-divider class="mr-7"></v-divider>
        </v-col>
      
        </v-row>  </div>
      </v-card>
    </v-dialog>

    <v-dialog v-model="MarketDepthPopup" persistent max-width="60%" height="200px">
      <v-card class="pt-3 px-6" width="100%" height="70%" style="overflow-y:hidden">
        <!-- <v-card class="ma-1" height="70px"> -->
        <v-row>
          <v-col cols="10">
            <p class="mb-0 pt-2"
              style="color: #000;font-size: 16px;font-weight: 559;line-height: 100%;letter-spacing: 0.64px;">
              {{ MarketDetailes.tsym }}
              <span class="pl-1"
                style="color: #666;font-size: 11px;font-weight: 500;line-height: 100%; letter-spacing: 0.44px;">{{ MarketDetailes.exch }}</span>
            </p>
            <p class="mb-0 pt-2"
              style="color: #000;font-size: 14px;font-weight: 559;line-height: 100%;letter-spacing: 0.64px;">
              ₹{{ MarketDetailes.lp }}</p>
          </v-col>
          <v-col cols="2">
            <v-btn class="pa-0 ml-auto black--text float-right" @click="MarketDepthPopup = false" width="fit-content" icon
              height="fit-content">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="white" />
                <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" fill="url(#paint0_linear_6141_15815)"
                  fill-opacity="0.2" />
                <path d="M17.5 10.5L10.5 17.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.5 10.5L17.5 17.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                  stroke-linecap="round" stroke-linejoin="round" />
                <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#CCCCCC" />
                <defs>
                  <linearGradient id="paint0_linear_6141_15815" x1="14" y1="0" x2="14" y2="28"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FBFBFB" />
                    <stop offset="1" stop-color="#F9FAFA" />
                  </linearGradient>
                </defs>
              </svg>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-row>
              <v-col cols="6">
                <p class="mb-1 "
                  style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px; letter-spacing: 0.8px;">OPEN
                  VALUE</p>
                <p class="mb-2 pt-1" style="color: #000;font-size: 12px;font-weight: 469;line-height: 16px;">
                  ₹{{ MarketDetailes.o }}</p>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="6">
                <p class="mb-1"
                  style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px; letter-spacing: 0.8px;">CLOSE
                  VALUE</p>
                <p class="mb-2 pt-1" style="color: #000;font-size: 12px;font-weight: 469;line-height: 16px;">
                  ₹{{ MarketDetailes.o }}</p>
                <v-divider></v-divider>
              </v-col>
            </v-row></v-col>

          <v-col cols="7">
            <v-row>
              <v-col cols="6">
                <p class="mb-1"
                  style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px; letter-spacing: 0.8px;">HIGH -
                  LOW</p>
                <div class="d-flex pt-1">
                  <p class="mb-0" style="color: #000;font-size: 12px;font-weight: 469;line-height: 16px;">
                    ₹{{ MarketDetailes.h }}</p>
                  <v-slider class="mb-0 mt-n2" hide-details color="#D9D9D9" thumb-color="black" track-color="#D9D9D9"
                    dense disabled hint="Im a hint" v-model="MarketDetailes.lp" :max="MarketDetailes.h"
                    :min="MarketDetailes.l" style="width:30%;"></v-slider>
                  <p class="mb-0" style="color: #000;font-size: 12px;font-weight: 469;line-height: 16px;">
                    ₹{{ MarketDetailes.l }}</p>
                </div>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="6">
                <p class="mb-1"
                  style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px; letter-spacing: 0.8px;">52 WEEKS
                  HIGH-52 WEEKS LOW</p>
                <div class="d-flex pt-1">
                  <p class="mb-0" style="color: #000;font-size: 12px;font-weight: 469;line-height: 16px;">
                    ₹{{ MarketDetailes.wk52_h }}</p>
                  <v-slider class="mb-0 mt-n2" hide-details color="#D9D9D9" thumb-color="black" track-color="#D9D9D9"
                    dense disabled hint="Im a hint" v-model="MarketDetailes.lp" :max="MarketDetailes.wk52_h"
                    :min="MarketDetailes.wk52_l" style="width:30%;"></v-slider>
                  <p class="mb-0" style="color: #000;font-size: 12px;font-weight: 469;line-height: 16px;">
                    ₹{{ MarketDetailes.wk52_l }}</p>
                </div>
                <v-divider></v-divider>
              </v-col>
            </v-row>

          </v-col>
        </v-row>

        <p class="pt-5 mb-0"
          style="color: #000;font-size: 16px;font-weight: 559;line-height: 16px;letter-spacing: -0.36px;">Market Depth</p>

        <div class="d-flex pt-7 ">
          <p class="mb-0" style="color: #666;font-size: 12px;font-weight: 469;line-height: 12px;letter-spacing: 0.96px;">
            Buy order Quantity</p>
          <p class="ml-auto mb-0"
            style="color: #666;font-size: 12px;font-weight: 469;line-height: 12px;letter-spacing: 0.96px;">Sell order
            Quantity</p>
        </div>

        <v-row no-gutters class="pt-2">
          <v-col cols="1" class="">
            <p class="mb-0" style="color: #000;font-size: 12px;font-weight: 469;line-height: 16px;">
              {{ ((parseFloat(MarketDetailes.tbq) /
                (parseFloat(MarketDetailes.tbq) + parseFloat(MarketDetailes.tsq))) * 100).toFixed() }}%</p>
          </v-col>
          <v-col cols="10" class="pt-2">
            <v-card height="4px" class="d-flex elevation-0">
              <v-card
                :width="`${(((parseFloat(MarketDetailes.tbq) / (parseFloat(MarketDetailes.tbq) + parseFloat(MarketDetailes.tsq)))) * 100).toPrecision(2)}%`"
                color="#DAECE7" class="elevation-0"></v-card>
              <v-card
                :width="`${(((parseFloat(MarketDetailes.tsq) / (parseFloat(MarketDetailes.tbq) + parseFloat(MarketDetailes.tsq)))) * 100).toPrecision(2)}%`"
                color="#FCDDDC" class="elevation-0"></v-card>
            </v-card>
          </v-col>
          <v-col cols="1" align="end">
            <p class="mb-0" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">
              {{ ((parseFloat(MarketDetailes.tsq) /
                (parseFloat(MarketDetailes.tbq) + parseFloat(MarketDetailes.tsq))) * 100).toFixed() }}%</p>
          </v-col>
        </v-row>


        
        <v-row>
          <v-col cols="5" class="pr-0">
            <v-card height="20px" class="elevation-0 mb-3">
              <v-card-actions class="pt-1 pb-1 pa-0 ">
                <p class="mb-3" style="color: #506D84;font-size: 14px;font-weight: 559;line-height: 100%;">Quantity</p>
                <v-spacer></v-spacer>
                <p class="mb-3"
                  style="color: #148564;font-size: 14px;font-weight: 600;line-height: 100%; letter-spacing: 0.14px;">BID
                </p>
              </v-card-actions>
            </v-card>

            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.bq1 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0 text-end float-right" style="color: #000;font-size: 13px;font-weight: 500;">
                    {{ MarketDetailes.bp1 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseInt(MarketDetailes.bq1) / parseInt(HeightQtyGetValue)) * 100)}%`"
                style="position:absolute;left:0;top:0;z-index:1" color="#DAECE7" class="elevation-0" height="20px">
              </v-card>
            </div>

            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.bq2 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0 text-end float-right" style="color: #000;font-size: 13px;font-weight: 500;">
                    {{ MarketDetailes.bp2 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseFloat(MarketDetailes.bq2) / parseFloat(HeightQtyGetValue)) * 100)}%`"
                style="position:absolute;left:0;top:0;z-index:1" color="#DAECE7" class="elevation-0" height="20px">
              </v-card>
            </div>

            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.bq3 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0 text-end float-right" style="color: #000;font-size: 13px;font-weight: 500;">
                    {{ MarketDetailes.bp3 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseFloat(MarketDetailes.bq3) / parseFloat(HeightQtyGetValue)) * 100)}%`"
                style="position:absolute;left:0;top:0;z-index:1" color="#DAECE7" class="elevation-0" height="20px">
              </v-card>
            </div>

            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.bq4 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0 text-end float-right" style="color: #000;font-size: 13px;font-weight: 500;">
                    {{ MarketDetailes.bp4 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseFloat(MarketDetailes.bq4) / parseFloat(HeightQtyGetValue)) * 100)}%`"
                style="position:absolute;left:0;top:0;z-index:1" color="#DAECE7" class="elevation-0" height="20px">
              </v-card>
            </div>

            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.bq5 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0 text-end float-right" style="color: #000;font-size: 13px;font-weight: 500;">
                    {{ MarketDetailes.bp5 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseFloat(MarketDetailes.bq5) / parseFloat(HeightQtyGetValue)) * 100)}%`"
                style="position:absolute;left:0;top:0;z-index:1" color="#DAECE7" class="elevation-0" height="20px">
              </v-card>
            </div>
          </v-col>

          <v-col cols="2" align="center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="210" viewBox="0 0 2 189" fill="none">
              <path
                d="M1.70001 1C1.70001 0.613403 1.38661 0.300003 1.00001 0.300003C0.613409 0.300003 0.300008 0.613403 0.300008 1L1.70001 1ZM1.7 189L1.7 187.484L0.3 187.484L0.3 189L1.7 189ZM1.7 184.452L1.7 181.419L0.3 181.419L0.3 184.452L1.7 184.452ZM1.7 178.387L1.7 175.355L0.300001 175.355L0.3 178.387L1.7 178.387ZM1.7 172.323L1.7 169.29L0.300001 169.29L0.300001 172.323L1.7 172.323ZM1.7 166.258L1.7 163.226L0.300001 163.226L0.300001 166.258L1.7 166.258ZM1.7 160.194L1.7 157.161L0.300001 157.161L0.300001 160.194L1.7 160.194ZM1.7 154.129L1.7 151.097L0.300002 151.097L0.300002 154.129L1.7 154.129ZM1.7 148.065L1.7 145.032L0.300002 145.032L0.300002 148.065L1.7 148.065ZM1.7 142L1.7 138.968L0.300002 138.968L0.300002 142L1.7 142ZM1.7 135.935L1.7 132.903L0.300002 132.903L0.300002 135.935L1.7 135.935ZM1.7 129.871L1.7 126.839L0.300003 126.839L0.300003 129.871L1.7 129.871ZM1.7 123.806L1.7 120.774L0.300003 120.774L0.300003 123.806L1.7 123.806ZM1.7 117.742L1.7 114.71L0.300003 114.71L0.300003 117.742L1.7 117.742ZM1.7 111.677L1.7 108.645L0.300004 108.645L0.300003 111.677L1.7 111.677ZM1.7 105.613L1.7 102.581L0.300004 102.581L0.300004 105.613L1.7 105.613ZM1.7 99.5484L1.7 96.5162L0.300004 96.5162L0.300004 99.5484L1.7 99.5484ZM1.7 93.4839L1.7 90.4516L0.300004 90.4516L0.300004 93.4839L1.7 93.4839ZM1.7 87.4194L1.7 84.3871L0.300005 84.3871L0.300004 87.4194L1.7 87.4194ZM1.7 81.3549L1.7 78.3226L0.300005 78.3226L0.300005 81.3549L1.7 81.3549ZM1.7 75.2904L1.70001 72.2581L0.300005 72.2581L0.300005 75.2904L1.7 75.2904ZM1.70001 69.2258L1.70001 66.1936L0.300005 66.1936L0.300005 69.2258L1.70001 69.2258ZM1.70001 63.1613L1.70001 60.1291L0.300006 60.1291L0.300006 63.1613L1.70001 63.1613ZM1.70001 57.0968L1.70001 54.0645L0.300006 54.0645L0.300006 57.0968L1.70001 57.0968ZM1.70001 51.0323L1.70001 48L0.300006 48L0.300006 51.0323L1.70001 51.0323ZM1.70001 44.9678L1.70001 41.9355L0.300006 41.9355L0.300006 44.9678L1.70001 44.9678ZM1.70001 38.9033L1.70001 35.871L0.300007 35.871L0.300007 38.9033L1.70001 38.9033ZM1.70001 32.8387L1.70001 29.8065L0.300007 29.8065L0.300007 32.8387L1.70001 32.8387ZM1.70001 26.7742L1.70001 23.742L0.300007 23.742L0.300007 26.7742L1.70001 26.7742ZM1.70001 20.7097L1.70001 17.6775L0.300008 17.6775L0.300007 20.7097L1.70001 20.7097ZM1.70001 14.6452L1.70001 11.613L0.300008 11.613L0.300008 14.6452L1.70001 14.6452ZM1.70001 8.5807L1.70001 5.54843L0.300008 5.54843L0.300008 8.5807L1.70001 8.5807ZM1.70001 2.51617L1.70001 1L0.300008 1L0.300008 2.51617L1.70001 2.51617Z"
                fill="#D9DBDC" />
            </svg>
          </v-col>

          <v-col cols="5" class=" pl-0">
            <v-card height="20px" class="elevation-0 mb-3">
              <v-card-actions class="pt-1 pb-1 pa-0 ">
                <p class="mb-3"
                  style="color: #D34645;font-size: 14px;font-weight: 600;line-height: 100%; letter-spacing: 0.14px;">Ask
                </p>
                <v-spacer></v-spacer>
                <p class="mb-3" style="color: #506D84;font-size: 14px;font-weight: 559;line-height: 100%;">Quantity</p>
              </v-card-actions>
            </v-card>
            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #000;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sq1 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sp1 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseInt(MarketDetailes.sq1) / parseInt(SELLHeightQtyGetValue)) * 100)}%`"
                style="position:absolute;right:0;top:0;z-index:1" color="#FCDDDC" class="elevation-0" height="20px">
              </v-card>
            </div>

            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #000;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sq2 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sp2 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseInt(MarketDetailes.sq2) / parseInt(SELLHeightQtyGetValue)) * 100)}%`"
                style="position:absolute;right:0;top:0;z-index:1" color="#FCDDDC" class="elevation-0" height="20px">
              </v-card>
            </div>

            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #000;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sq3 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sp3 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseInt(MarketDetailes.sq3) / parseInt(SELLHeightQtyGetValue)) * 100)}%`"
                style="position:absolute;right:0;top:0;z-index:1" color="#FCDDDC" class="elevation-0" height="20px">
              </v-card>
            </div>

            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #000;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sq4 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sp4 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseInt(MarketDetailes.sq4) / parseInt(SELLHeightQtyGetValue)) * 100)}%`"
                style="position:absolute;right:0;top:0;z-index:1" color="#FCDDDC" class="elevation-0" height="20px">
              </v-card>
            </div>

            <div class="" style="position:relative">
              <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
                <v-card-actions class="pa-0 px-1">
                  <p class="mb-0" style="color: #000;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sq5 }}</p>
                  <v-spacer></v-spacer>
                  <p class="mb-0" style="color: #515559;font-size: 13px;font-weight: 500;">{{ MarketDetailes.sp5 }}</p>
                </v-card-actions>
              </v-card>
              <v-card :width="`${((parseInt(MarketDetailes.sq5) / parseInt(SELLHeightQtyGetValue)) * 100)}%`"
                style="position:absolute;right:0;top:0;z-index:1" color="#FCDDDC" class="elevation-0" height="20px">
              </v-card>
            </div>

          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
    <div class="mt-6">
      <p class="mb-0 " style="color: #000;
font-size: 20px;
font-weight: 559;
line-height: 16px;
letter-spacing: -0.4px;">Your Watchlist</p>
      <v-row>
        <v-col cols="9" class="pr-8">
          <div class="d-flex">
            <v-tabs v-model="tab" show-arrows class="mt-4" color="#000">
              <v-tab class="black--text captio n text-none "> Overview </v-tab>
              <v-tab class="black--text captio n text-none"> Fundamentals </v-tab>
              <v-tab class="black--text captio n text-none"> Technical </v-tab>
              <v-tab class="black--text captio n text-none"> News & Events </v-tab>
              <div v-if="tab === 0" class="ml-auto">
              </div>
              <div v-else-if="tab === 1" class="ml-auto">
                <v-text-field class="searchforcommiditytexts   pa-0" background-color="#F1F3F8" label="Search watchlist"
                  solo rounded flat dense style="max-width:212px" v-model="tab2">
                  <template v-slot:prepend-inner>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_2682_15138)">
                        <path d="M14.6667 14.6667L12 12" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10"
                          stroke-linecap="round" />
                        <path
                          d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                          stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2682_15138">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </template>
                </v-text-field>
              </div>
              <div v-else-if="tab === 2" class="ml-auto">
                <v-text-field class="searchforcommiditytexts   pa-0" background-color="#F1F3F8" label="Search watchlist"
                  solo rounded flat dense style="max-width:212px" v-model="tab3">
                  <template v-slot:prepend-inner>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_2682_15138)">
                        <path d="M14.6667 14.6667L12 12" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10"
                          stroke-linecap="round" />
                        <path
                          d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                          stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2682_15138">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </template>
                </v-text-field>
              </div>
              <div v-else-if="tab === 3" class="ml-auto">
                <v-text-field class="searchforcommiditytexts   pa-0" background-color="#F1F3F8" label="Search watchlist"
                  solo rounded flat dense style="max-width:212px" v-model="tab4">
                  <template v-slot:prepend-inner>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_2682_15138)">
                        <path d="M14.6667 14.6667L12 12" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10"
                          stroke-linecap="round" />
                        <path
                          d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                          stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2682_15138">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </template>
                </v-text-field>
              </div>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-data-table :headers="WatchlistTable" :items="ltpvalues" :items-per-page="perpage" item-key="id"
                    :search="tab1"  class="elevation-0 mt-" hide-default-footer
                    style="background-color: white; border: 1px #dddddd solid">
                    <template v-slot:footer>
                      <v-divider></v-divider>
                    </template>
                    <template v-slot:[`header.%Chg`]="{ header }">
                      <v-row class="" no-gutters>
                        <v-col cols="10" class="">
                          <p class="mb-0 pt-2 ">{{ header.text }}</p>
                        </v-col>
                        <v-col cols="2" class="pl-0 pr-0">
                          <v-menu left offset-y>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="" width="fit-content" icon>
                                <v-icon color="black">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>
                            <v-list>
                              <v-list-item v-for="item in itemsmenu" :key="item.title">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-col>
                      </v-row>
                    </template>

                    <template v-slot:item="{ item }">
                      <tr class="eeeeeeeee " style="" @mouseover="selectItem(item)" @mouseleave="unSelectItem(item)">
                        <td class="font-weight-bold pt-4 pb-3 " style="color: #000000; font-size: 13px;width:32%">
                          <v-row>
                            <v-col cols="6">
                              <p class="tabhead11 text-wrap">{{ item.tsym }}</p>
                            </v-col>
                            <v-col cols="6" class="pl-0 pr-0">
                              <div class=" pt-3" style="visibility:hidden">
                                <div class="d-flex row  cccccccccc">
                                  <v-btn class="pa-0 elevation-0 ml-1 white--text" @click="BuySellPopup(item)" dense small
                                    style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;"
                                    color="#43A833">
                                    <span
                                      style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">B</span></v-btn>
                                  <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                    style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;"
                                    color="#FF1717">
                                    <span
                                      style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">S</span></v-btn>

                                  <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                                    style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                        d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                                        fill="#666666" />
                                    </svg></v-btn>

                                  <v-menu transition="slide-x-transition" left offset-x class="dhhdddhhdhdhd"
                                    style="border: 1px solid #EBEEF0;background: linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF;box-shadow: 0px 4px 10px 0px rgba(210, 210, 211, 0.03), 0px 5px 22px 0px rgba(145, 146, 148, 0.02);">
                                    <template v-slot:activator="{ on, attrs }">
                                      <v-btn class="ml-1 pa-0  elevation-0" outlined small v-bind="attrs" v-on="on"
                                        @click="hhhhhhhhhh(item)"
                                        style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white;z-index:; ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                          fill="none">
                                          <path
                                            d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                                            fill="#666666" />
                                          <path
                                            d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"
                                            fill="#666666" />
                                          <path
                                            d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"
                                            fill="#666666" />
                                        </svg>
                                      </v-btn></template>
                                    <v-list dense class="rounde-xl">
                                      <v-list-item-group v-model="selectedItem" color="primary">
                                        <v-list-item @click="ScriptInfoDetailes(k, item)" v-for="k in itemsaaass" :key="k.text">
                                          <v-list-item-icon>
                                            <img class="" :src="k.icon" width="14px">
                                            <v-list-item-title class="pl-2 pa-0 pt-n16"
                                              v-text="k.text"></v-list-item-title>
                                          </v-list-item-icon>
                                        </v-list-item>
                                      </v-list-item-group>
                                    </v-list>
                                  </v-menu>

                                </div>
                              </div>

                            </v-col>
                          </v-row>


                        </td>
                        <td class="pr-0">
                          <span class="sidtabval2"></span>
                        </td>
                        <td>
                          <span class="sidtabval2"></span>
                        </td>
                        <td class="pr-0 pl-2">
                          <span class="sidtabval2"></span>
                        </td>

                        <td class="pr-0">
                          <span class="sidtabval2"> {{ (parseInt(item.volum) / 1000).toFixed(2)   }} K</span>
                        </td>

                        <td>
                          <span class="sidtabval2 pl-1">{{ item.lp }} </span>
                        </td>

                        <td class="pr-0" v-if="(item.lp - item.prev_close_price) >= 0">
                          <span class="text-wrap font-weight-medium ml-"
                            style="color: #43a833 !important; font-size: 13px">{{ (item.lp - item.prev_close_price).toFixed(2) }} %</span>
                        </td>
                        <td class="pr-0" v-else>
                          <span class="font-weight-medium" style="color: red !important; font-size: 13px">{{
                            (item.lp - item.prev_close_price).toFixed(2) }} %</span>
                        </td>


                      </tr>
                    </template>
                  </v-data-table>
                  <v-card v-if="showmore2" class="elevation-0 mt-0 text-center" outlined
                    style="outline: 1px solid #e7e7e7">
                    <v-btn color="primary" @click="showmore" class="text-capitalize" text dense>See more companies</v-btn>
                  </v-card>
                  <v-card v-if="showmore23" class="elevation-0 mt-0 text-center" outlined
                    style="outline: 1px solid #e7e7e7">
                    <v-btn color="primary" @click="showmore1" class="text-capitalize" text dense>See Less
                      companies</v-btn>
                  </v-card>

                  <!-- ................................SEO................................... -->
                </v-tab-item>

                <v-tab-item>







                  <v-data-table hide-default-header :headers="mutualfundheaders" :items="mutualfunditems"
                    :items-per-page="perpage" item-key="id" :search="tab1"  class="elevation-0 mt-"
                    hide-default-footer style="background-color: white; border: 1px #dddddd solid">
                    <template v-slot:footer>
                      <v-divider></v-divider>
                      
                    </template>
                    <template v-slot:header>
                      <tr class="" style="background-color: #fafbff; border: 1px solid red">
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Fund Scrips</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Sector</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Weight%</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-2 pt-1 pb-1 thtab1st">Mkt cap (cr)</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Volume (k)</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Price</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">%Chg</span>
                        </th>
                        <th>
                          <v-menu transition="slide-x-transition" bottom right>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark class="ml-auto" icon v-bind="attrs" v-on="on">
                                <v-icon size="20" color="black">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item v-for="item in items" :key="item.title">
                                <v-list-item-title>{{
                                  item.title
                                }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </th>
                      </tr>
                    </template>

                    <template v-slot:item="{ item }">
                      <tr class="" style="background-color: ; position: relative" @mouseover="selectItem(item)"
                        @mouseleave="unSelectItem(item)">
                        <td class="font-weight-bold pb-4 pt-2" style="color: #000000; font-size: 13px; width: 315px">

                          <p class="tabhead11" style="width: 195px">{{ item.Fundname }}</p>

                          <div class="display-flex row pt-1 pb-1">
                            <v-card v-if="item.NEWS == 'NEWS'" height="20px" width="56px"
                              class="pl-2 pr-2 pb-1 ml-2 d-flex" elevation="0" color="#F1F3F8">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                                  fill="none">
                                  <g clip-path="url(#clip0_331_10953)">
                                    <path
                                      d="M7.33333 0.666504H0.666667C0.489856 0.666504 0.320286 0.736742 0.195262 0.861766C0.0702379 0.98679 0 1.15636 0 1.33317L0 6.6665C0 6.84331 0.0702379 7.01288 0.195262 7.13791C0.320286 7.26293 0.489856 7.33317 0.666667 7.33317H7.33333C7.51014 7.33317 7.67971 7.26293 7.80474 7.13791C7.92976 7.01288 8 6.84331 8 6.6665V1.33317C8 1.15636 7.92976 0.98679 7.80474 0.861766C7.67971 0.736742 7.51014 0.666504 7.33333 0.666504ZM3.66667 5.33317H1.66667C1.57826 5.33317 1.49348 5.29805 1.43096 5.23554C1.36845 5.17303 1.33333 5.08824 1.33333 4.99984C1.33333 4.91143 1.36845 4.82665 1.43096 4.76413C1.49348 4.70162 1.57826 4.6665 1.66667 4.6665H3.66667C3.75507 4.6665 3.83986 4.70162 3.90237 4.76413C3.96488 4.82665 4 4.91143 4 4.99984C4 5.08824 3.96488 5.17303 3.90237 5.23554C3.83986 5.29805 3.75507 5.33317 3.66667 5.33317ZM6.33333 3.33317H1.66667C1.57826 3.33317 1.49348 3.29805 1.43096 3.23554C1.36845 3.17303 1.33333 3.08824 1.33333 2.99984C1.33333 2.91143 1.36845 2.82665 1.43096 2.76413C1.49348 2.70162 1.57826 2.6665 1.66667 2.6665H6.33333C6.42174 2.6665 6.50652 2.70162 6.56904 2.76413C6.63155 2.82665 6.66667 2.91143 6.66667 2.99984C6.66667 3.08824 6.63155 3.17303 6.56904 3.23554C6.50652 3.29805 6.42174 3.33317 6.33333 3.33317Z"
                                      fill="#666666" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_331_10953">
                                      <rect width="8" height="8" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <p class="font-weight-medium mb-0 ml-1" style="
                        color: #666666;
                        font-size: 11px;
                        margin-top: 3px;
                      ">
                                {{ item.NEWS }}
                              </p>
                            </v-card>

                            <v-card v-if="item.ALERT == 'ALERT'" height="20px" width="56px"
                              class="pl-2 pr-2 pb-1 ml-2 d-flex" elevation="0" color="#F1F3F8">
                              <div> <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                                  fill="none">
                                  <path
                                    d="M1.99992 8C1.82311 8 1.65354 7.92976 1.52851 7.80474C1.40349 7.67971 1.33325 7.51014 1.33325 7.33333V0.666667C1.33325 0.489856 1.40349 0.320286 1.52851 0.195262C1.65354 0.0702379 1.82311 0 1.99992 0C2.17673 0 2.3463 0.0702379 2.47132 0.195262C2.59635 0.320286 2.66659 0.489856 2.66659 0.666667V7.33333C2.66659 7.51014 2.59635 7.67971 2.47132 7.80474C2.3463 7.92976 2.17673 8 1.99992 8Z"
                                    fill="#666666" />
                                  <path d="M3.33325 4.33317V0.666504L7.33325 0.666504V4.33317H3.33325Z" fill="#666666" />
                                </svg></div>
                              <p class="font-weight-medium mb-0 ml-1" style="
                        color: #666666;
                        font-size: 11px;
                        margin-top: 3px;
                      ">
                                {{ item.ALERT }}
                              </p>
                            </v-card>

                            <v-card v-if="item.EVENT == 'EVENT'" height="20px" width="56px"
                              class="pl-2 pr-2 pb-1 ml-2 d-flex" elevation="0" color="#F1F3F8">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                                  fill="none">
                                  <g clip-path="url(#clip0_331_10892)">
                                    <path
                                      d="M6.66667 1.33333V0.333333C6.66667 0.244928 6.63155 0.160143 6.56904 0.0976311C6.50652 0.035119 6.42174 0 6.33333 0L5.66667 0C5.57826 0 5.49348 0.035119 5.43096 0.0976311C5.36845 0.160143 5.33333 0.244928 5.33333 0.333333V1.33333H2.66667V0.333333C2.66667 0.244928 2.63155 0.160143 2.56904 0.0976311C2.50652 0.035119 2.42174 0 2.33333 0L1.66667 0C1.57826 0 1.49348 0.035119 1.43096 0.0976311C1.36845 0.160143 1.33333 0.244928 1.33333 0.333333V1.33333C0.979711 1.33333 0.640573 1.47381 0.390524 1.72386C0.140476 1.97391 0 2.31304 0 2.66667L0 6.66667C0 7.02029 0.140476 7.35943 0.390524 7.60948C0.640573 7.85952 0.979711 8 1.33333 8H6.66667C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V2.66667C8 2.31304 7.85952 1.97391 7.60948 1.72386C7.35943 1.47381 7.02029 1.33333 6.66667 1.33333ZM6.66667 6.66667H1.33333V3.33333H6.66667V6.66667Z"
                                      fill="#666666" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_331_10892">
                                      <rect width="8" height="8" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <p class="font-weight-medium mb-0 ml-1" style="
                        color: #666666;
                        font-size: 11px;
                        margin-top: 3px;
                      ">
                                {{ item.EVENT }}
                              </p>
                            </v-card>
                          </div>
                          <div class=" " v-if="item === selectedItem">
                            <div class="display-flex row postionchangeopenpostions">
                              <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;" color="#43A833">
                                <span
                                  style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">B</span></v-btn>
                              <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;" color="#FF1717">
                                <span
                                  style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">S</span></v-btn>

                              <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                                style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                                    fill="#666666" />
                                </svg></v-btn>

                              <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;" color="#43A833">
                                <span
                                  style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">B</span></v-btn>
                              <v-btn class="ml-1 pa-0  elevation-0" outlined small
                                style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                  fill="none">
                                  <path
                                    d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                                    fill="#666666" />
                                  <path
                                    d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"
                                    fill="#666666" />
                                  <path
                                    d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"
                                    fill="#666666" />
                                </svg>
                              </v-btn>
                            </div>
                          </div>
                        </td>
                        <td class="pr-0">
                          <span class="sidtabval2">{{ item.AUMval }}</span>
                        </td>
                        <td>
                          <span class="sidtabval2">{{ item.TERval }}</span>
                        </td>
                        <td class="pr-0 pl-2">
                          <span class="sidtabval2">{{ item.MinInvest }}</span>
                        </td>

                        <td class="pr-0">
                          <span class="sidtabval2">{{ item.oneyearCAGR }} %</span>
                        </td>

                        <td>
                          <span class="sidtabval2">{{ item.lp }} %</span>
                        </td>

                        <td class="pr-0" v-if="item.threeyrCAGR > 0">
                          <span class="text-wrap font-weight-medium ml-"
                            style="color: #43a833 !important; font-size: 13px">{{ item.threeyrCAGR }} %</span>
                        </td>
                        <td class="pr-0" v-else>
                          <span class="font-weight-medium" style="color: red !important; font-size: 13px">{{
                            item.threeyrCAGR }} %</span>
                        </td>

                        <td></td>
                      </tr>
                    </template>
                  </v-data-table>
                  <v-card v-if="showmore2" class="elevation-0 mt-0 text-center" outlined
                    style="outline: 1px solid #e7e7e7">
                    <v-btn color="primary" @click="showmore" class="text-capitalize" text dense>See more companies</v-btn>
                  </v-card>
                  <v-card v-if="showmore23" class="elevation-0 mt-0 text-center" outlined
                    style="outline: 1px solid #e7e7e7">
                    <v-btn color="primary" @click="showmore1" class="text-capitalize" text dense>See Less
                      companies</v-btn>
                  </v-card>

                  <!-- ................................SEO................................... -->
                </v-tab-item>


                <v-tab-item>







                  <v-data-table hide-default-header :headers="mutualfundheaders" :items="mutualfunditems"
                    :items-per-page="perpage" item-key="id" :search="tab1"  class="elevation-0 mt-"
                    hide-default-footer style="background-color: white; border: 1px #dddddd solid">
                    <template v-slot:footer>
                      <v-divider></v-divider>
                    </template>
                    <template v-slot:header>
                      <tr class="" style="background-color: #fafbff; border: 1px solid red">
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Fund Scrips</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Sector</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Weight%</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-2 pt-1 pb-1 thtab1st">Mkt cap (cr)</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Volume (k)</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">Price</span>
                        </th>
                        <th class="text-start">
                          <span class="pl-4 pt-1 pb-1 thtab1st">%Chg</span>
                        </th>
                        <th>
                          <v-menu transition="slide-x-transition" bottom right>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark class="ml-auto" icon v-bind="attrs" v-on="on">
                                <v-icon size="20" color="black">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item v-for="item in items" :key="item.title">
                                <v-list-item-title>{{
                                  item.title
                                }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </th>
                      </tr>
                    </template>

                    <template v-slot:item="{ item }">
                      <tr class="" style="background-color: ; position: relative" @mouseover="selectItem(item)"
                        @mouseleave="unSelectItem(item)">
                        <td class="font-weight-bold pb-4 pt-2" style="color: #000000; font-size: 13px; width: 315px">

                          <p class="tabhead11" style="width: 195px">{{ item.Fundname }}</p>

                          <div class="display-flex row pt-1 pb-1">
                            <v-card v-if="item.NEWS == 'NEWS'" height="20px" width="56px"
                              class="pl-2 pr-2 pb-1 ml-2 d-flex" elevation="0" color="#F1F3F8">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                                  fill="none">
                                  <g clip-path="url(#clip0_331_10953)">
                                    <path
                                      d="M7.33333 0.666504H0.666667C0.489856 0.666504 0.320286 0.736742 0.195262 0.861766C0.0702379 0.98679 0 1.15636 0 1.33317L0 6.6665C0 6.84331 0.0702379 7.01288 0.195262 7.13791C0.320286 7.26293 0.489856 7.33317 0.666667 7.33317H7.33333C7.51014 7.33317 7.67971 7.26293 7.80474 7.13791C7.92976 7.01288 8 6.84331 8 6.6665V1.33317C8 1.15636 7.92976 0.98679 7.80474 0.861766C7.67971 0.736742 7.51014 0.666504 7.33333 0.666504ZM3.66667 5.33317H1.66667C1.57826 5.33317 1.49348 5.29805 1.43096 5.23554C1.36845 5.17303 1.33333 5.08824 1.33333 4.99984C1.33333 4.91143 1.36845 4.82665 1.43096 4.76413C1.49348 4.70162 1.57826 4.6665 1.66667 4.6665H3.66667C3.75507 4.6665 3.83986 4.70162 3.90237 4.76413C3.96488 4.82665 4 4.91143 4 4.99984C4 5.08824 3.96488 5.17303 3.90237 5.23554C3.83986 5.29805 3.75507 5.33317 3.66667 5.33317ZM6.33333 3.33317H1.66667C1.57826 3.33317 1.49348 3.29805 1.43096 3.23554C1.36845 3.17303 1.33333 3.08824 1.33333 2.99984C1.33333 2.91143 1.36845 2.82665 1.43096 2.76413C1.49348 2.70162 1.57826 2.6665 1.66667 2.6665H6.33333C6.42174 2.6665 6.50652 2.70162 6.56904 2.76413C6.63155 2.82665 6.66667 2.91143 6.66667 2.99984C6.66667 3.08824 6.63155 3.17303 6.56904 3.23554C6.50652 3.29805 6.42174 3.33317 6.33333 3.33317Z"
                                      fill="#666666" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_331_10953">
                                      <rect width="8" height="8" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <p class="font-weight-medium mb-0 ml-1" style="
                        color: #666666;
                        font-size: 11px;
                        margin-top: 3px;
                      ">
                                {{ item.NEWS }}
                              </p>
                            </v-card>

                            <v-card v-if="item.ALERT == 'ALERT'" height="20px" width="56px"
                              class="pl-2 pr-2 pb-1 ml-2 d-flex" elevation="0" color="#F1F3F8">
                              <div> <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                                  fill="none">
                                  <path
                                    d="M1.99992 8C1.82311 8 1.65354 7.92976 1.52851 7.80474C1.40349 7.67971 1.33325 7.51014 1.33325 7.33333V0.666667C1.33325 0.489856 1.40349 0.320286 1.52851 0.195262C1.65354 0.0702379 1.82311 0 1.99992 0C2.17673 0 2.3463 0.0702379 2.47132 0.195262C2.59635 0.320286 2.66659 0.489856 2.66659 0.666667V7.33333C2.66659 7.51014 2.59635 7.67971 2.47132 7.80474C2.3463 7.92976 2.17673 8 1.99992 8Z"
                                    fill="#666666" />
                                  <path d="M3.33325 4.33317V0.666504L7.33325 0.666504V4.33317H3.33325Z" fill="#666666" />
                                </svg></div>
                              <p class="font-weight-medium mb-0 ml-1" style="
                        color: #666666;
                        font-size: 11px;
                        margin-top: 3px;
                      ">
                                {{ item.ALERT }}
                              </p>
                            </v-card>

                            <v-card v-if="item.EVENT == 'EVENT'" height="20px" width="56px"
                              class="pl-2 pr-2 pb-1 ml-2 d-flex" elevation="0" color="#F1F3F8">
                              <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"
                                  fill="none">
                                  <g clip-path="url(#clip0_331_10892)">
                                    <path
                                      d="M6.66667 1.33333V0.333333C6.66667 0.244928 6.63155 0.160143 6.56904 0.0976311C6.50652 0.035119 6.42174 0 6.33333 0L5.66667 0C5.57826 0 5.49348 0.035119 5.43096 0.0976311C5.36845 0.160143 5.33333 0.244928 5.33333 0.333333V1.33333H2.66667V0.333333C2.66667 0.244928 2.63155 0.160143 2.56904 0.0976311C2.50652 0.035119 2.42174 0 2.33333 0L1.66667 0C1.57826 0 1.49348 0.035119 1.43096 0.0976311C1.36845 0.160143 1.33333 0.244928 1.33333 0.333333V1.33333C0.979711 1.33333 0.640573 1.47381 0.390524 1.72386C0.140476 1.97391 0 2.31304 0 2.66667L0 6.66667C0 7.02029 0.140476 7.35943 0.390524 7.60948C0.640573 7.85952 0.979711 8 1.33333 8H6.66667C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V2.66667C8 2.31304 7.85952 1.97391 7.60948 1.72386C7.35943 1.47381 7.02029 1.33333 6.66667 1.33333ZM6.66667 6.66667H1.33333V3.33333H6.66667V6.66667Z"
                                      fill="#666666" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_331_10892">
                                      <rect width="8" height="8" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <p class="font-weight-medium mb-0 ml-1" style="
                        color: #666666;
                        font-size: 11px;
                        margin-top: 3px;
                      ">
                                {{ item.EVENT }}
                              </p>
                            </v-card>
                          </div>
                          <div class=" " v-if="item === selectedItem">
                            <div class="display-flex row postionchangeopenpostions">
                              <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;" color="#43A833">
                                <span
                                  style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">B</span></v-btn>
                              <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;" color="#FF1717">
                                <span
                                  style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">S</span></v-btn>

                              <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                                style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                                <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                                    fill="#666666" />
                                </svg></v-btn>
                              <v-btn class="ml-1 pa-0  elevation-0" outlined small
                                style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                  fill="none">
                                  <path
                                    d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                                    fill="#666666" />
                                  <path
                                    d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"
                                    fill="#666666" />
                                  <path
                                    d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"
                                    fill="#666666" />
                                </svg>
                              </v-btn>
                            </div>
                          </div>
                        </td>
                        <td class="pr-0">
                          <span class="sidtabval2">{{ item.AUMval }}</span>
                        </td>
                        <td>
                          <span class="sidtabval2">{{ item.TERval }}</span>
                        </td>
                        <td class="pr-0 pl-2">
                          <span class="sidtabval2">{{ item.MinInvest }}</span>
                        </td>

                        <td class="pr-0">
                          <span class="sidtabval2">{{ item.oneyearCAGR }} %</span>
                        </td>

                        <td>
                          <span class="sidtabval2">{{ item.price }} %</span>
                        </td>

                        <td class="pr-0" v-if="item.threeyrCAGR > 0">
                          <span class="text-wrap font-weight-medium ml-"
                            style="color: #43a833 !important; font-size: 13px">{{ item.threeyrCAGR }} %</span>
                        </td>
                        <td class="pr-0" v-else>
                          <span class="font-weight-medium" style="color: red !important; font-size: 13px">{{
                            item.threeyrCAGR }} %</span>
                        </td>

                        <td></td>
                      </tr>
                    </template>
                  </v-data-table>
                  <v-card v-if="showmore2" class="elevation-0 mt-0 text-center" outlined
                    style="outline: 1px solid #e7e7e7">
                    <v-btn color="primary" @click="showmore" class="text-capitalize" text dense>See more companies</v-btn>
                  </v-card>
                  <v-card v-if="showmore23" class="elevation-0 mt-0 text-center" outlined
                    style="outline: 1px solid #e7e7e7">
                    <v-btn color="primary" @click="showmore1" class="text-capitalize" text dense>See Less
                      companies</v-btn>
                  </v-card>

                  <!-- ................................SEO................................... -->
                </v-tab-item>


                <v-tab-item>
                  <template>
                    <v-card style="background-color:#F0FFEE" class="mt-3 pa-5">





                      <v-card v-for="(card, index) in Cards" :key="card.title" v-show="firstvisi(index)" cols="12"
                        class=" pl-2 pr-2 pb-2 mt-4" elevation="0">
                        <v-row class="pa-0 ma-0" no-gutters>
                          <v-col cols="1" class="pa-0 ma-0">
                            <img :src="card.imm" class="ml-2 mb-1 mt-2  pb-0">


                          </v-col>
                          <v-col class="pa-0 ma-0 ">
                            <p class=" pl-12 pb-0 mt-2 mb-0 " style="color: #999;
font-size: 12px;
font-weight: 469;line-height: 16px;">
                              {{ card.title }}
                            </p>
                            <p class=" body-2 pl-12 pb-0 mb-0 " style="color: #000;
font-size: 12px;
font-weight: 469;
line-height: 16px; /* 133.333% */">
                              {{ card.description }}
                            </p>


                          </v-col>
                        </v-row>
                      </v-card>
                      <v-col cols="12" class="text-center">
                        <v-btn v-if="!showAll" @click="allvisi"
                          class="body-2   font-weight-bold elevation-0 mb-0 text-none" color="#F0FFEE"
                          style="color:#0037B7">See More News <v-icon>mdi-chevron-down</v-icon></v-btn>
                        <v-btn v-else @click="hide" class="body-2  font-weight-bold elevation-0 mb-0 text-none"
                          color="#F0FFEE" style="color:#0037B7">See Less News <v-icon>mdi-chevron-up</v-icon></v-btn>
                      </v-col>

                    </v-card>
                  </template>
                </v-tab-item>


              </v-tabs-items>
            </v-tabs>
          </div>
        </v-col>

        <v-col cols="3" class="pr-1 pt-0">
          <v-autocomplete fade flat no-data-text="" rounded dense background-color="#F1F3F8" append-icon="" solo
            v-model="select" :loading="loading" placeholder="Search Scripts" :search-input.sync="search"
            class="searchforcommiditytexts VmenucontentHeight " clearable @change="valuechange()"  item-text="tsym"
            item-key="tsym" return-object width="100%">
            <template v-slot:prepend-inner>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_2682_15138)">
                  <path d="M14.6667 14.6667L12 12" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" />
                  <path
                    d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                    stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2682_15138">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </template>
            <template v-slot:no-data v-if="aaaaaaaaaaa">
              <p class="text-center mt-5 font-weight-bold subtitle-2">Type more than 2 letter</p>
              <p class="text-center  subtitle-2 font-weight-medium ">Eg. for Nifty Type: Nif</p>
            </template>


            <div slot="prepend-item">
              <v-card class="elevation-0 px-2" v-if="jjjdjdjj">
                <v-chip-group class="chipcustamaize mt-3" mandatory active-class="primary--text">
                  <v-chip outlined @click="hhhhhhh = tag" v-for="tag in tags" :key="tag">
                    <p class="pt-4" style="color: #666;font-size: 12px;font-weight: 469;line-height: 100%;"> {{ tag }}</p>
                  </v-chip>
                </v-chip-group>
                <v-card class="mb-1 elevation-0" style="height:50vh;overflow-y:scroll">
                  <div v-if="hhhhhhh == 'All'">
                    <v-list dense class="mx-3">
                      <v-list-item-group color="primary">
                        <v-list-item v-for="f in SearchScriptsList" :key="f.tsym">
                          <v-list-item-content @click="valuechange(f)">
                            <v-list-item-title>{{ f.tsym }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </div>
                  <div v-if="hhhhhhh == 'Equity'">
                    <v-list dense class="mx-3">
                      <v-list-item-group color="primary">
                        <v-list-item v-for="f in SearchEquity" :key="f.tsym">
                          <v-list-item-content @click="valuechange(f)">
                            <v-list-item-title>{{ f.tsym }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </div>
                  <div v-if="hhhhhhh == 'Currency'">
                    <v-list dense class="mx-3">
                      <v-list-item-group color="primary">
                        <v-list-item v-for="f in Searchcurrencies" :key="f.tsym">
                          <v-list-item-content @click="valuechange(f)">
                            <v-list-item-title>{{ f.tsym }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                    <div class="pt-5" v-if="Searchcurrencies.length <= 0">
                      <p class="text-center font-weight-bold subtitle-1 mb-1" style=""> No Data Available</p>
                      <p class="text-center font-weight-medium subtitle-2">Try search for diff name</p>
                    </div>
                  </div>

                  <div v-if="hhhhhhh == 'F&O'">
                    <v-list dense class="mx-3">
                      <v-list-item-group color="primary">
                        <v-list-item v-for="f in Searchfo" :key="f.tsym">
                          <v-list-item-content @click="valuechange(f)">
                            <v-list-item-title>{{ f.tsym }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </div>


                  <div v-if="hhhhhhh == 'Commodity'">
                    <v-list dense class="mx-3">
                      <v-list-item-group color="primary">
                        <v-list-item v-for="f in Searchcommodities" :key="f.tsym">
                          <v-list-item-content @click="valuechange(f)">
                            <v-list-item-title>{{ f.tsym }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                    <div class="pt-5" v-if="Searchcommodities.length <= 0">
                      <p class="text-center font-weight-bold subtitle-1 mb-1" style=""> No Data Available</p>
                      <p class="text-center font-weight-medium subtitle-2">Try search for diff name</p>
                    </div>

                  </div>
                </v-card>
              </v-card>
            </div>

          </v-autocomplete>
          <v-row>
            <v-col cols="9" class="pt-2 pb-0">
              <v-dialog Create WatchList hide-overlay persistent v-model="WatchListAddPopup" max-width="300px">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-card class="py-3 elevation-0">
                    <v-card-title>
                      <span class="mb-1" style="color: #162342;font-size: 16px;font-weight: 559;line-height: 100%;">Create
                        WatchList</span>
                    </v-card-title>
                    <v-card-text>
                      <v-text-field style="max-width: 360px;height: 36px;" flat dense solo v-model="createwatchlist"
                        :rules="Rulescreatewatchlist" background-color="#F1F3F8"
                        class="menu-search elevation-0 mr-2 rounded-pill caption"
                        placeholder="Create Watchlist"></v-text-field>

                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="text-none" @click="fromrestvalidations()" color=" " text>
                        Close
                      </v-btn>
                      <v-btn :disabled="!valid" class="mr-4 text-none" @click="validate" text>
                        Create
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-form>
              </v-dialog>

              <p class="mb-0 pt-1"
                style="color: var(--Black, #000);font-size: 16px;font-weight: 559;line-height: 16px;letter-spacing: -0.32px;">
                WatchList Add</p>
            </v-col>
            <v-col cols="3" class="pt-0" align="end">
              <v-btn icon @click="WatchListAddPopup = true">
                <v-icon color="black">mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-expansion-panels class="mt-1" v-model="panel" flat multiple>
            <v-expansion-panel class="" style="">
              <v-expansion-panel-header class="pa-0">
                <v-row>
                  <v-col class="" cols="9">
                    <p class="mb-0" style="color: #666666;font-size: 14px;font-weight:469;line-height:16px;">WatchList</p>
                  </v-col>

                  <v-col class="" cols="3">
                    <p class="mb-0 ml-n2" style="color: #666666;font-size: 14px;font-weight:469;line-height:16px;"><span
                        class="pr-1">{{ MarketWatchList.length }}</span>List</p>
                  </v-col>
                </v-row>
              </v-expansion-panel-header><v-divider class="mt-n2"></v-divider>
              <v-expansion-panel-content class="pa-0 mt-4 pl-5 checkboxfontlabel">

                <div class="d-flex row mb-1" v-for="n in MarketWatchList" :key="n">
                  <v-card class="elevation-0 mt-3" :color="jddhhd == n ? ' primary' : '#F1F3F8'" width="16px"
                    height="16px" @click="bbbg = n, radiobuttonclickchange(n)" style="border-radius: 4px;">

                  </v-card>
                  <p class="ml-3 mt-2 mb-0" @click="bbbg = n, radiobuttonclickchange(n)"
                    :class="jddhhd == n ? 'primary--text' : 'black--text'" style="cursor: pointer;">{{ n }}</p>

                  <div class="ml-auto mr-2">
                    <v-btn icon @click="DeletemwLists(n)" v-if="MarketWatchList.length > 1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
                        <path fill="currentColor" fill-rule="evenodd"
                          d="M11.5 6a.5.5 0 0 0-.5.5V8h6V6.5a.5.5 0 0 0-.5-.5h-5zM18 8V6.5c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5V8H5.5a.5.5 0 0 0 0 1H7v12.5A2.5 2.5 0 0 0 9.5 24h9a2.5 2.5 0 0 0 2.5-2.5V9h1.5a.5.5 0 0 0 0-1H18zm2 1H8v12.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9zm-8.5 3c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5zm5.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z">
                        </path>
                      </svg>
                    </v-btn>
                  </div>
                </div>

              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </div>



  </v-container>
</template>
<script>
import BuyPage from '../../views/BuySell/BuyPage.vue'
import axios from 'axios'
import Vue from "vue";
import { api } from '../../apiUrl.js'
import { Userid1 } from '../../apiUrl.js'
import { Usersession } from '../../apiUrl.js'
import Datafeed from '../../../src/alldata/feedFactory';

export default {
  components: { BuyPage },
  // props: ['message'],
  data() {
    return {
      // Fundamentals
      loaderInitiate:false,
      BuyPagePopUpShow:false,
      itemGetData:'',
      arrsgv:[
        {ColHeaderOne:"PE RATIO",ColHeaderTwo:"SECTOR PE",ColHeaderThree:"EVEBITDA",valOne:"37.39",valTwo:"16.45",valThree:"16.4"},
        {ColHeaderOne:"PE RATIO",ColHeaderTwo:"SECTOR PB", ColHeaderThree:"DIVIDEND YIELD",valOne:"3.29",valTwo:"2.35",valThree:"1.14%"},
        {ColHeaderOne:"ROCE",ColHeaderTwo:"ROE", ColHeaderThree:"DEBT TO EQITY",valOne:"9.86%",valTwo:"5.69%",valThree:"0.98%"},
        {ColHeaderOne:"Price to Sale",ColHeaderTwo:"BOOK VALUE",ColHeaderThree:"FACE VALUE",valOne:"1.64",valTwo:"₹52.2",valThree:"27.6"},
      ],
      FundamentalsPopup: false,
      SELLHeightQtyGetValue: "",
      HeightQtyGetValue: "",
      MarketDetailes: [],
      MarketDepthPopup: true,
      $hostname: "",
      aaaaaaaaaaa: true,
      SearchNoData: true,
      SearchScriptsList: [],
      Searchcommodities: [],
      SearchEquity: [],
      Searchcurrencies: [],
      Searchfo: [],
      hhhhhhh: ['All'],
      noDatacheck: true,
      jjjdjdjj: false,
      tags: [
        'All',
        'Equity',
        'F&O',
        'Currency',
        'Commodity',
      ],
      WatchlistIndexAdd: false,
      timeout: 2000,
      ValuesToken: [],
      ValuesExch: [],
      createwatchlist: "",
      Rulescreatewatchlist: [
        v => !!v || 'create watchlist is required',
      ],
      valid: true,
      panel: [0],
      ExpansepanelEquity: [0],
      ExpansepanelSearchAll: [0],
      Expansepanelcommodities: [0],
      ExpansepanelFo: [0],
      WatchListAddPopup: false,
      storeScriptDet: [],
      ScriptInfoDetailesPopup: false,
      icon: require('@/assets/zebu-stocks/newfundoffring.svg'),
      itemsaaass: [
        // { text: 'Add', icon: require('@/assets/Menuicon/add.svg'), },
        // { text: 'Exit', icon: require('@/assets/Menuicon/Exit.svg'), },
        // { text: 'View Breakdown', icon: require('@/assets/Menuicon/viewBreakedown.svg'), },
        { text: 'Info', icon: require('@/assets/Menuicon/info.svg'), },
        { text: 'Create GTT / GTC', icon: require('@/assets/Menuicon/info.svg'), },
        { text: 'Create Alert', icon: require('@/assets/Menuicon/Alert.svg'), },
        { text: 'Market Depth', icon: require('@/assets/Menuicon/MarketDepth.svg'), },
        { text: 'Chart', icon: require('@/assets/Menuicon/Charts.svg'), },
        { text: 'Add to market watch', icon: require('@/assets/Menuicon/AddToMarketWatch.svg'), },
        { text: 'Fundamentals', icon: require('@/assets/Menuicon/Fundamentales.svg'), },

      ],
      nnnnnnnn: "",
      bbbg: '',
      radioGroup: "5",
      newcreate: "",
      newcreatessss: true,
      watchlistindex: false,
      divvaluechage: [],
      MarketWatchList: [],
      loading: false,
      search: "",
      select: "",
      selected: "",
      ltpvalues:[],
      selectedItem: false,
      showmore2: true,
      showmore23: false,
      perpage: 5,
      activeCard: 2,
      tab: 0,
      checkbox: true,
      tab1: '',
      tab2: '',
      tab3: '',
      tab4: '',
      dddjdjdd: false,
      itemsmenu: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      items: [
        { title: "name" },
        { title: "edit" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      fundcategery: [
        "0 - 3 yrs", "3 - 7 yrs", "7 -12 Yrs", "12 - 16 yrs", "16+ yrs"
      ],
      //  ................................SEO...................................
      mutualfundheaders: [
        {
          text: "Scrips",
          align: "left",
          sortable: false,
          value: "Fundname",
          class: "successScrips",
        },
        {
          text: "Sector",
          sortable: false,
          value: "calories",
          class: "successtitle",
        },
        {
          text: "Weight%",
          sortable: false,
          value: "calories",
          class: "successvolume",
        },
        {
          text: "Mkt cap (cr)",
          sortable: false,
          value: "carbs",
          class: "successprice",
        },
        {
          text: "Volume (k)",
          sortable: false,
          value: "protein",
          class: "successchg",
        },
        { text: "Price", sortable: false, value: "iron", class: "successma" },
        { text: "%Chg", sortable: false, value: "iron", class: "successma" },
      ],

      mutualfunditems: [
        {
          id: 1,
          Fundname: "Reliance industries",
          AUMval: "Oil & Gas",
          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          price: "₹236.05",
          ALERT: "ALERT",
          EVENT: "EVENT",
        },
        {
          id: 2,
          Fundname: "HCL Technologies",
          AUMval: "IT services",
          price: "₹236.05",

          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: -1.65,
          NEWS: "NEWS",
        },
        {
          id: 3,
          Fundname: "Tata Motors",
          AUMval: "Autos",
          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          price: "₹236.05",

          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          NEWS: "NEWS",
          EVENT: "EVENT",
        },
        {
          id: 4,
          Fundname: "HDFC bank",
          AUMval: "Telecom",
          price: "₹236.05",

          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: -1.65,
          ALERT: "ALERT",
          EVENT: "EVENT",
        },
        {
          id: 5,
          Fundname: "Delhivery",
          AUMval: "Banks",
          TERval: "10.63%",
          price: "₹236.05",

          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          NEWS: "NEWS",
        },
        {
          id: 6,
          Fundname: "Laurus Labs",
          AUMval: "Logistics",
          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          price: "₹236.05",

          NEWS: "NEWS",
          EVENT: "EVENT",
        },
        {
          id: 6,
          Fundname: "Indian Hotels",
          AUMval: "Oil & Gas",
          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: -1.65,
          NEWS: "NEWS",
          EVENT: "EVENT",
          price: "₹236.05",
        },
        {
          id: 6,
          Fundname: "HDFC bank",
          AUMval: "Hospitality",
          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          NEWS: "NEWS",
          EVENT: "EVENT",
          price: "₹236.05",
        },
        {
          id: 6,
          Fundname: "Delhivery",
          AUMval: "Oil & Gas",
          TERval: "10.63%",
          price: "₹236.05",

          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          NEWS: "NEWS",
        },
        {
          id: 6,
          Fundname: "Laurus Labs",
          AUMval: "Healthcare",
          TERval: "10.63%",
          price: "₹236.05",

          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          NEWS: "NEWS",
          EVENT: "EVENT",
        },
        {
          id: 6,
          Fundname: "Indian Hotels",
          AUMval: "IT services",
          TERval: "10.63%",
          price: "₹236.05",

          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: -1.65,
          NEWS: "NEWS",
          EVENT: "EVENT",
        },
        {
          id: 6,
          Fundname: "Indian Hotels",
          AUMval: "Autos",
          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          price: "₹236.05",

          threeyrCAGR: +1.65,
          NEWS: "NEWS",
        },
        {
          id: 7,
          Fundname: "Delhivery",
          AUMval: "Telecom",
          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          price: "₹236.05",

          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          NEWS: "NEWS",
          EVENT: "EVENT",
        },
        {
          id: 8,
          Fundname: "Indian Hotels",
          AUMval: "Banks",
          price: "₹236.05",

          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          ALERT: "ALERT",
          EVENT: "EVENT",
        },
        {
          id: 9,
          Fundname: "Reliance industries",
          AUMval: "Logistics",
          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          price: "₹236.05",

          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          NEWS: "NEWS",
          ALERT: "ALERT",
        },
        {
          id: 10,
          Fundname: "Laurus Labs",
          AUMval: "Healthcare",
          TERval: "10.63%",
          price: "₹236.05",

          MinInvest: "₹29,534 ",
          oneyearCAGR: "14,968 k",
          threeyrCAGR: +1.65,
          NEWS: "NEWS",
          EVENT: "EVENT",
        },
        {
          id: 11,
          Fundname: "HCL Technologies",
          AUMval: "Hospitality",
          TERval: "10.63%",
          MinInvest: "₹29,534 ",
          price: "₹236.05",

          oneyearCAGR: "14,968 k",
          threeyrCAGR: -1.65,
          ALERT: "ALERT",
          EVENT: "EVENT",
        },
      ],
      extra: false,
      cards: [
        {
          title: 'Disposal of 17,333 equity shares worth Rs 68.47 lacs by director',
          imm: require('@/assets/neew.svg'),
          description: 'Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India'
        },
        {
          title: 'Disposal of 17,333 equity shares worth Rs 68.47 lacs by director',
          imm: require('@/assets/neew.svg'),
          description: 'tata Industries Limited has informed the Exchange regarding UpdateBoard of India'
        },
        {
          title: 'Disposal of 17,333 equity shares worth Rs 68.47 lacs by director',
          imm: require('@/assets/neew.svg'),
          description: 'hcl Industries Limited has informed the Exchange regarding UpdateBoard of India'
        },


      ],
      hhhhhhhhhhhh: "",
      jddhhd: "",
      showAll: false,
      maxVisibleCards: 2,
      shdhdhdhdhd: "",
      WatchlistTable: [
        {
          text: "Fund Scrips",
          align: "left",
          sortable: true,
          value: "tsym", class: "successScrips"
        },
        { text: "Sector", sortable: false, value: "calories", class: "successScrips" },
        { text: "Weight%", sortable: false, value: "calories", class: "successScrips" },
        { text: "Mkt cap (cr)", sortable: false, value: "carbs", class: "successScrips" },
        { text: "Volume (k)	", sortable: false, value: "protein", class: "successScrips" },
        { text: "Price", sortable: false, value: "iron", class: "successScrips" },
        { text: "%Chg", sortable: false, value: "%Chg", class: "successScrips" },// AUCSO COM FUTCOM FUTIDX OPTFUT
      ],
    };
  },
  watch: {
    search(val) {
      console.log("val chaeck", val);
      // if (val.length>2) {
      val && val !== this.select && this.querySelections(val)
        
      // }
    }
  },
  methods: {

    BuySellPopup(item) {
    
      this.itemGetData = item
      this.BuyPagePopUpShow =true
     
      
    },
closePopUp() {
  this.BuyPagePopUpShow = false
},

    fromrestvalidations() {
      this.WatchListAddPopup = false,
        this.$refs.form.reset()
    },
    validate() {

      if (this.$refs.form.validate() == !false) {

        var axiosthis = this
        let data = JSON.stringify({
          "userId": Userid1,
          "wlname": this.createwatchlist,
          "scripToken": "",
          "add_delete_MW": "AddMultiScripsToMW",
          "session": Usersession
        });
        console.log(data, "data");
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          // `${api}/getTopGainersLosers`,
          url: `${api}/AddDeleteMW`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        axios.request(config)
          .then((response) => {
            if (response.data.stat == "Ok") {

              if (!axiosthis.MarketWatchList.includes(this.createwatchlist)) {
                axiosthis.MarketWatchList.push(this.createwatchlist);
                this.$refs.form.reset()
                this.WatchListAddPopup = false
              }
              else {
                this.WatchlistIndexAdd = true
              }
            }

          })
          .catch((error) => {
            console.log(error);
          });


      }
    },


    DeletemwLists(n) {


      var input = ""
      for (let l = 0; l < this.divvaluechage.length; l++) {
        input += `${this.divvaluechage[l].exch}|${this.divvaluechage[l].token}#`

      }

      let data = JSON.stringify({
        "userId": Userid1,
        "wlname": n,
        "scripToken": input,
        "add_delete_MW": "DeleteMultiMWScrips",
        "session": Usersession
      });
      console.log(data, "7777777777");
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/AddDeleteMW`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(response, "response");
          this.firstinisialRun();
        })
        .catch((error) => {
          console.log(error);
        });

    },
    ScriptInfoDetailes(k, item) {
      console.log("ssnnnns", item);
      if (k.text == 'Info') {
        this.ScriptInfoDetailesPopup = true
      }
      else if (k.text == 'Market Depth') {
        this.MarketDepthPopup = true
      }
      else if (k.text == 'Fundamentals') {
        this.FundamentalsPopup = true
      }
      var axiosthis = this;
      let data = JSON.stringify({
        "userId": Userid1,
        "exch": item.exch,
        "scriptDetailReq": "GetQuotes",
        "token": item.token,
        "session": Usersession
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/ScriptDetails`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          console.log("responseresponse", response.data);
          axiosthis.MarketDetailes = response.data


          var HeightBuyQty = [axiosthis.MarketDetailes.bq1, axiosthis.MarketDetailes.bq2, axiosthis.MarketDetailes.bq3, axiosthis.MarketDetailes.bq4, axiosthis.MarketDetailes.bq5]
          console.log("HeightBuyQty", HeightBuyQty)
          axiosthis.HeightQtyGetValue = Math.max(...HeightBuyQty)
          console.log(axiosthis.HeightQtyGetValue, "kkkkkkkkkks")

          var HeightSELLQty = [axiosthis.MarketDetailes.sq1, axiosthis.MarketDetailes.sq2, axiosthis.MarketDetailes.sq3, axiosthis.MarketDetailes.sq4, axiosthis.MarketDetailes.sq5]
          console.log("HeightBuyQty", HeightSELLQty)
          axiosthis.SELLHeightQtyGetValue = Math.max(...HeightSELLQty)
          console.log(axiosthis.SELLHeightQtyGetValue, "kkkkkkkkkks")


        })
        .catch((error) => {
          console.log(error);
        });

    },
    radiobuttonclickchange(g) {
      this.divvaluechage=[]
      this.ltpvalues=[];
      console.log("radiobutton check",)
      Vue.prototype.$hostname = g,
        console.log(this.$hostname);
      this.jddhhd = g
      console.log("mmmmmmmm", this.jddhhd)


      var axiosthis = this;
      let data = JSON.stringify({
        "userId": Userid1,
        "wlname": g,
        "session": Usersession
      });
      console.log("datadatadata", data);
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/MarketWatch`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log("responseccheck", response);


          axiosthis.divvaluechage = response.data.values
          axiosthis.ltpvalues= response.data.values
          console.log("responseccheck", axiosthis.divvaluechage);
          // let les=response.data.values
          
          Datafeed.subscribeQuotesChain(axiosthis.divvaluechage, this.optionChainDataParse,undefined)
        
        })
        .catch((error) => {
          console.log(error);
        });

    },

    valuechange(f) {
      console.log("eeee", f);
      var tokenstore = f.token
      var exchstore = f.exch

      console.log("tokenstore", tokenstore);
      console.log("exchstore", exchstore);
      let data = JSON.stringify({
        "userId": Userid1,
        "wlname": this.bbbg,
        "scripToken": `${exchstore}|${tokenstore}`,
        "add_delete_MW": "AddMultiScripsToMW",
        "session": Usersession
      });
      console.log(data, "log data check");
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/AddDeleteMW`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      var axiosthis = this;
      axios.request(config)
        .then((response) => {
          console.log("response", response);

          if (response.data) {
            let n = axiosthis.bbbg
            axiosthis.radiobuttonclickchange(n);
          }
        })
        .catch((error) => {
          console.log(error);
        });




    },
    querySelections(v) {
      console.log("queryselection cheeck",this.select);

      if (v.length > 2) {

        var axiosthis = this;
        let data = JSON.stringify({
          "userId": Userid1,
          "searchText": v,
          "session": Usersession
        });

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${api}/SearchScrip`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };

        axios.request(config)
          .then((response) => {

            console.log("responsestoredata", response)


            if (response.data.stat == "Ok") {
              this.jjjdjdjj = true
              this.loading = true
              this.aaaaaaaaaaa = false
              var responsestoredata = response.data.values
              axiosthis.SearchScriptsList = []
              axiosthis.Searchcurrencies = []
              axiosthis.Searchcommodities = []
              axiosthis.Searchfo = []
              axiosthis.SearchEquity = []
              axiosthis.SearchScriptsList = responsestoredata
              for (let k = 0; k < axiosthis.SearchScriptsList.length; k++) {
                if (axiosthis.SearchScriptsList[k].instname == 'FUTCUR' || axiosthis.SearchScriptsList[k].instname == 'FUTIRC' || axiosthis.SearchScriptsList[k].instname == 'FUTIRT' || axiosthis.SearchScriptsList[k].instname == 'OPTCUR' || axiosthis.SearchScriptsList[k].instname == 'OPTIRC') {
                  axiosthis.Searchcurrencies.push(axiosthis.SearchScriptsList[k])
                  console.log(axiosthis.Searchcurrencies, "axiosthis.Curency");
                }
                else if (axiosthis.SearchScriptsList[k].instname == 'AUCSO' || axiosthis.SearchScriptsList[k].instname == 'COM' || axiosthis.SearchScriptsList[k].instname == 'FUTCOM' || axiosthis.SearchScriptsList[k].instname == 'FUTIDX' || axiosthis.SearchScriptsList[k].instname == 'OPTFUT') {
                  axiosthis.Searchcommodities.push(axiosthis.SearchScriptsList[k])
                  console.log(axiosthis.Searchcommodities, "axiosthis.Searchcommodities");
                }
                else if (axiosthis.SearchScriptsList[k].instname == "FUTSTK" || axiosthis.SearchScriptsList[k].instname == 'OPTIDX' || axiosthis.SearchScriptsList[k].instname == 'OPTSTK') {
                  axiosthis.Searchfo.push(axiosthis.SearchScriptsList[k])
                  console.log(axiosthis.Searchfo, "axiosthis.Searchfo");
                }
                else {
                  axiosthis.SearchEquity.push(axiosthis.SearchScriptsList[k]);
                }
                console.log("SearchEquity", this.SearchEquity);
              }
            }
            else if (response.data.stat == "Not_Ok") {
              this.aaaaaaaaaaa = true
              this.jjjdjdjj = false
            }

          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false
          })
      }
      else {
        this.aaaaaaaaaaa = true
        this.jjjdjdjj = false
        // this.SearchScriptsList=[]
      }


    },
    selectItem() {
      this.selectedItem = true;
    },
    firstvisi(index) {
      return this.showAll || index < this.maxVisibleCards;
    },
    allvisi() {
      this.showAll = true;
    },
    hide() {
      this.showAll = false;
    },
    name() {
      this.extra = !this.extra;
    },


    unSelectItem() {
      this.selectedItem = false;
    },
    showmore() {
      this.perpage = this.mutualfunditems.length;
      this.showmore2 = !this.showmore2;
      this.showmore23 = !this.showmore23;
    },
    showmore1() {
      this.perpage = 8;
      this.showmore2 = !this.showmore2;
      this.showmore23 = !this.showmore23;
    },
    changeBackground(cardNumber) {
      this.activeCard = cardNumber;
    },

    hhhhhhhhhh(item) {
      console.log(item, "oooooooooo");
      var ScriptDetailstokenStrore = item.token
      var scriptdetailExchStrore = item.exch
      var axiosthis = this;
      // const axios = require('axios');
      let data = JSON.stringify({
        "userId": Userid1,
        "exch": scriptdetailExchStrore,
        "scriptDetailReq": "GetSecurityInfo",
        "token": ScriptDetailstokenStrore,
        "session": Usersession
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/ScriptDetails`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));

          axiosthis.storeScriptDet = response.data
          console.log("response check scripteDetails", axiosthis.storeScriptDet);
        })
        .catch((error) => {
          console.log(error);
        });


    },
    firstinisialRun() {
      var axiosthis = this;
      let data = JSON.stringify({
        "userId": Userid1,
        "session": Usersession
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/MWList`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log("response firstinitial", response);
          axiosthis.MarketWatchList = response.data.values
          let n = response.data.values[0]
          axiosthis.bbbg = n;

          axiosthis.radiobuttonclickchange(n);
           // this.
          // console.log(axiosthis.MarketWatchList,"Market index");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    optionChainDataParse(data) {

      // console.log(data,'ltp')
      var upd_obj = this.ltpvalues.map(obj => {

        if (obj.token == data[0].v.token) {
          obj.lp = data[0].v.lp;
          obj.volum =data[0].v.volume
          obj.prev_close_price = data[0].v.prev_close_price
        }
        return obj;
      })
      if (this.tkchart == data[0].v.token) {
        this.lp = (data[0].v.lp);
        this.lpclose = ((data[0].v.lp - data[0].v.prev_close_price) / data[0].v.lp) * 100
        this.change = data[0].v.lp - data[0].v.prev_close_price
      }

        this.ltpvalues = (upd_obj)
    },

  },
  mounted() {
   
  



    this.firstinisialRun();
  },
  computed: {
    Cards() {
      if (this.tab4) {
        const searchTerm = this.tab4.toLowerCase();
        return this.cards.filter(card => card.description.toLowerCase().includes(searchTerm));
      } else {
        return this.cards;
      }
    },
  },
};
</script>
  
<style lang="scss">
.VmenucontentHeight {
  .v-autocomplete__content {
    z-index: 200 !important;
    max-height: 65vh !important;
    overflow-y: hidden !important;
  }

}

.chipcustamaize {

  .v-chip.v-size--default {
    height: 20px !important;
    padding: 2px !important;
  }
}

.fontsizeonetwo {
  font-size: 11px !important;
}

.eeeeeeeee:hover .cccccccccc {

  visibility: visible !important;

}

.dhhdddhhdhdhd,
.eeeeeeeee {
  visibility: visible !important;
}

.slidecontainer {
  width: 60%;
}

.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 3px;
  background: #a3a3a3;
  /* border: 2px solid rgba(222, 226, 235, 1); */
  /* border-radius: 12px; */
  /* outline: none; */
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slidecontainerlist {
  width: 60%;
}

.sliderlist {
  -webkit-appearance: none;
  width: 33%;
  height: 3px;
  background: #a3a3a3;
  /* border: 2px solid rgba(222, 226, 235, 1); */
  /* border-radius: 12px; */
  /* outline: none; */
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.sliderlist::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 8px;
  height: 8px;
  /* background: linear-gradient(0deg, #5c92f7, #4c80e2),
    linear-gradient(0deg, #BDD0F4, #dce8ff); */
  border-radius: 12px;
  background-color: black;
  cursor: pointer;
  border: 1px solid rgb(0, 0, 0);
}

/* .scrolldiv {
    ::-webkit-scrollbar {
      display: none !important;
    }
  } */

.postionchange {
  position: absolute !important;
  top: 25px !important;
  left: 70px !important;
  right: 200px;
}

.gray-background {
  background-color: #cccccc;
  transition: background-color 0.5s ease-in-out;
}

.thtab1st {
  color: #666;
  font-size: 13px;
  font-weight: 469;
  line-height: 16px;
}

.tabhead11 {
  color: #000;
  font-size: 14px;
  font-weight: 559;
  line-height: 16px;
}

.sidtabval2 {
  color: #000;
  font-size: 13px;
  font-weight: 469;
  line-height: 16px;
}

.v-tab {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 0 1 auto;
  color: #000;
  font-size: 14px !important;
  font-weight: 559;
  line-height: 16px;
  letter-spacing: -0.28px;
  justify-content: center;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  min-width: 90px;
  /* max-width: 0px; */
  outline: none;
  padding: 0 0px !important;

}

.v-application .fontsizeonetwo {
  font-size: 14px !important;
}

.v-application {
  color: #000 !important;
  caret-color: #000 !important;
}

.newcol {
  color: #0037b7;
}


.searchforcommiditytext .v-label {
  color: #000000 !important;
  font-size: 13px !important;
  font-weight: 569 !important;
}

.searchforcommiditytext {
  .v-input_control>.v-input_slot {
    padding-left: 8px !important;
    padding-right: 0px !important;
  }
}

.searchforcommidityfilter .v-label {
  color: #000000 !important;
  font-size: 13px !important;
  font-weight: 569 !important;
  padding-left: 6px !important;
}

.searchforcommidityfilter {
  .v-input_control>.v-input_slot {
    padding-left: 14px !important;
    padding-right: 5px !important;
  }
}



.searchforcommiditytexts .v-label {
  color: #000000 !important;
  font-size: 13px !important;
  font-weight: 569 !important;
  padding-left: 5px !important;
}

.v-text-field--rounded>.v-input__control>.v-input__slot {
  padding: 0 0px !important;
  padding-left: 16px !important;
}

.ssss {
  .v-text-field--rounded>.v-input_control>.v-input_slot {
    padding-left: 16px !important;
    padding-right: 0px !important;
  }
}

.searchforcommidityfilter .v-label {
  color: #000000 !important;
  font-size: 13px !important;
  font-weight: 569 !important;
  padding-left: 6px !important;
}

.searchforcommidityfilter {
  .v-input_control>.v-input_slot {
    padding-left: 14px !important;
    padding-right: 5px !important;
  }
}

.postionchangeopenpostions {
  position: absolute !important;
  top: 30px !important;
  left: 234px !important;
  right: 20px !important;
}</style>
  