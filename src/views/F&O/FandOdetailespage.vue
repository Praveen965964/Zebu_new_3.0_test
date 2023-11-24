<template>
  <div class="mt-sm-3 mt-4">
    <v-row class="">
      <v-col cols="12" md="9" class="pr-md-8 pr-3 pl-0 pl-sm-3 ">
        <v-card class="border1" elevation="0" rounded-lg outlined>
          <v-card color="#FAFBFF" elevation="0" class="pl-sm-1 pl-8 pr-4 pr-sm-6 mt pb-5 pt-6">
            <v-toolbar dense class="elevation-0" color="transparent">
              <div class="text-start">
              <p class="mb-2 text-BlackColor fs-20 font-weight-medium Lh-16 Ls-0_4">NIFTY 27 Jul 19800 Put</p>
              <div class="d-flex">
                  <v-chip class=" pt-0 mt-0 text-666Color fs-9 backColorWhite Lh-12 font-weight-medium text-uppercase" label
                    x-small>Nifty 50 options</v-chip>
                  <v-chip label x-small class="ml-2 text-666Color fs-9 backColorWhite Lh-12 font-weight-medium text-uppercase">Secured </v-chip>
                </div>
            </div>
            <v-spacer></v-spacer> 
                 <div class="mb-auto pr-10">
                    <p class="mb-2 text-right text-BlackColor fs-16 fw-559 Lh-16">₹ 18,392.60 </p>
                    <p class=" mb-0 text-GreenColor fs-12 font-weight-medium Lh-16">+62.60 (0.34%)</p>
                  </div>
                  <v-btn class="mb-auto mr-3" width="25" height="25" fab dark elevation="0" color="#EBEBED" outlined>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
<path d="M7.5824 10.9C7.32292 11.5475 6.73069 12 6.04167 12C5.35264 12 4.76108 11.5475 4.50093 10.9007M9.06667 4.51707V4.3C9.06667 2.47767 7.71214 1 6.04167 1C4.37119 1 3.01667 2.47767 3.01667 4.3V4.51707C3.01667 5.5606 2.50779 6.5308 1.6776 7.05C1.24671 7.31987 1 7.63227 1 7.96667C1 8.9794 3.25732 9.8 6.04167 9.8C8.82601 9.8 11.0833 8.9794 11.0833 7.96667C11.0833 7.63227 10.8366 7.31987 10.4057 7.05C9.57554 6.53153 9.06667 5.5606 9.06667 4.51707Z" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </v-btn>
                  <v-btn class="mb-auto mr-1" fab dark width="25" height="25" elevation="0" color="#EBEBED" outlined>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
<path d="M10.084 11.5L5.58398 9L1.08398 11.5V2C1.08398 1.73478 1.18934 1.48043 1.37688 1.29289C1.56441 1.10536 1.81877 1 2.08398 1H9.08398C9.3492 1 9.60356 1.10536 9.79109 1.29289C9.97863 1.48043 10.084 1.73478 10.084 2V11.5Z" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </v-btn>
                  <v-btn class="mb-auto" fab dark width="25" height="25" elevation="0" color="#fafbff" outlined>
                    <v-icon size="20" color="#3E4763"> mdi-dots-vertical </v-icon>
                  </v-btn>
            </v-toolbar>
          </v-card>
         
<v-row>
  <v-col cols="3">
    <p class="mb-0 pt-5 pl-5 fs-16 fw-559 Lh-16 Ls-032">Spot Price Chart</p>
  </v-col>
  <v-col cols="9" class="" >
    <div class="pr-5">
    <v-tabs class="" color="#000" right>
              <v-tab v-for="k in FandODeatilesChartTabItems" :key="k"><span class="fs-14 fw-559 Lh-16 Ls-0-28">{{k}}</span></v-tab>
            </v-tabs>
          </div>
  </v-col>
</v-row>
<v-divider class=""></v-divider>
            <div class="pl-sm-6 pr-sm-0 pl-7 pr-7 pb-6 pt-7"> 
              <v-row>
                <v-col cols="12" sm="3" class="pr-0">
                  <p class="mb-2 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8 text-uppercase">Total Traded Volume</p>
                  <p class="mb-2 font-weight-medium fs-14 text-BlackColor Lh-16">5,32,88,000</p>
                  <v-divider class=""></v-divider>
                  <v-row>
                    <v-col cols="6" class="pr-">
                      <p class="mb-2 pt-5 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8 text-uppercase">OI</p>
                  <p class="mb-2 font-weight-medium fs-14 text-BlackColor Lh-16">80,15,650</p>
                  <v-divider class=""></v-divider>
                    </v-col>
                    <v-col cols="6" class="pr-0">
                      <p class="mb-2 pt-5 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8 text-uppercase">OI Change% </p>
                  <p class="mb-2 font-weight-medium fs-14 text-GreenColor Lh-16">+19.89%</p>
                  <v-divider class=""></v-divider>
                    </v-col>
                  </v-row>
                  <p class="mb-0 pt-4 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8">HIGH - LOW</p>
                  <div class="d-flex">
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">₹1,348.95</p>
                    <v-slider  disabled :ripple="false" class="mb-auto mt-0 pt-0 mb-0 commoditesDetaiErrmMb0" value="50" thumb-color="black"
                      track-color="#D9D9D9" :thumb-size="0" />
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">1,322.65</p>
                  </div>
                  <v-divider class=""></v-divider>
                  <p class="mb-0 pt-4 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8">52 WEEKS HIGH - 52 WEEKS LOW
                  </p>
                  <div class="d-flex">
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">₹1,348.95</p>
                    <v-slider disabled :ripple="false" class="mb-auto mt-0 pt-0 mb-0 commoditesDetaiErrmMb0" value="50" thumb-color="black"
                      track-color="#D9D9D9" :thumb-size="0" />
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">1,322.65</p>
                  </div>
                </v-col>
                <v-col cols="9">
                  <p>chart</p>
                </v-col>
              </v-row>
            </div>
            <v-divider class=""></v-divider>
            <div class="d-flex pt-6 pb-5">
              <p class="mb-0 pl-5 fw-559 text-BlackColor fs-20 Lh-16 Ls-0_4">Similar Nifty 50 Options</p>
              <v-btn text class="text-none pa-1 ml-auto mr-4" to="StckOptinchain" height="fit-content" max-width="fit-content">
                    <p class="mb-0 fw-559 text-blueColor fs-14 Lh-16">See all Options Chain</p>
                  </v-btn>
            </div>
            <div class="CurencyDetailsHoriztalScrolHide">
              <div class="mr-1" style="overflow:scroll">
                <div class="d-inline-flex">
                  <v-card class="elevation-0 rounded-lg ml-5 mb-5 border2" width="244px" v-for="k in 16" :key="k">
                    <v-card class="py-3 elevation-0 pl-4" color="#FAFBFF">
                      <p class="mb-0 fs-14 fw-559 text-BlackColor Lh-16">Housing & Urban Develop.</p>
                    </v-card>
                    <div class="d-flex px-4 py-2">
                      <p class="mb-0 text-999Color fs-13 font-weight-medium Lh-16">LTP</p>
                      <p class="mb-0 pl-3 text-BlackColor fs-13 font-weight-medium Lh-16">₹1,234</p>
                      <p class="mb-0 ml-auto text-999Color fs-13 font-weight-medium Lh-16">Chg%</p>
                      <p class="mb-0 pl-3 text-GreenColor fs-13 font-weight-medium Lh-16">+2.2%</p>
                    </div>
                    <v-divider></v-divider>
                    <div class="d-flex px-4 py-2">
                      <p class="mb-0 text-999Color fs-13 font-weight-medium Lh-16">High</p>
                      <p class="mb-0 pl-3 text-BlackColor fs-13 font-weight-medium Lh-16">₹1,234</p>
                      <p class="mb-0 ml-auto text-999Color fs-13 font-weight-medium Lh-16">Low</p>
                      <p class="mb-0 pl- text-GreenColor fs-13 font-weight-medium Lh-16">+2.2%</p>
                    </div>
                  </v-card>
                </div>
              </div>
            </div>
        </v-card>
       
        <v-card class="pt-3 mt-sm-5 px-6 MobborderNone elevation-0 border1" width="100%" rounded-lg >
        <p class="pt-5 mb-sm-0 mb-5 fs-20 fw-559 Lh-16 Ls-0_4 text-BlackColor">Market Depth</p>
             <div class="d-flex pt-7 ">
                <p class="mb-0 fs-12 fw-559 Lh-12 font-weight-regular text-666Color Ls-0-9 text-uppercase" style=""> Buy order Quantity</p>
                <p class="ml-auto mb-0 fs-12 fw-559 Lh-12 font-weight-regular text-666Color Ls-0-9 text-uppercase">Sell order Quantity</p>
             </div>
<div class=" ">
    <v-row no-gutters class="pt-2 pb-4">
      <v-col cols="1" class="pr-0">
        <p class="mb-0 fs-14 font-weight-medium Lh-16 text-BlackColor"> 60%</p>
      </v-col>
      <v-col cols="10" class="pt-2 pl-0 pr-0">
        <v-card height="4px" class="d-flex elevation-0">
          <v-card width="60%" color="#DAECE7" class="elevation-0"></v-card>
          <v-card width="40%" color="#FCDDDC" class="elevation-0"></v-card>
        </v-card>
      </v-col>
      <v-col cols="1" class="pl-0" align="end">
        <p class="mb-0 fs-14 font-weight-medium Lh-16 text-BlackColor"> 40%</p>
      </v-col>
    </v-row>
  </div>
    <v-row class="">
      <v-col cols="5" class="pr-0">
        <v-card height="20px" class="elevation-0 mb-3">
          <v-card-actions class="pt-1 pb-1 pa-0 ">
            <p class="mb-3 fs-14 font-weight-medium text-Color506D84" >Quantity</p>
            <v-spacer></v-spacer>
            <p class="mb-3 fs-14 fw-559 text-Color148564 Ls-0"> Bid  </p>
          </v-card-actions>
        </v-card>
        <div class="" v-for="n in 5 " :key="n" style="position:relative">
          <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
            <v-card-actions class="pa-0 px-1">
              <p class="mb-0 text-Color515559 fs-13 font-weight-medium" >8,951</p>
              <v-spacer></v-spacer>
              <p class="mb-0 text-end float-right text-BlackColor fs-13 font-weight-medium" >116.55</p>
            </v-card-actions>
          </v-card>
          <v-card width="100%" color="#DAECE7" class="elevation-0" height="20px" style="position:absolute;left:0;top:0;z-index:1" >
          </v-card>
        </div>
      </v-col>

      <v-col cols="2" class="pl-0 pr-0" align="center">
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="210" viewBox="0 0 2 189" fill="none">
          <path
            d="M1.70001 1C1.70001 0.613403 1.38661 0.300003 1.00001 0.300003C0.613409 0.300003 0.300008 0.613403 0.300008 1L1.70001 1ZM1.7 189L1.7 187.484L0.3 187.484L0.3 189L1.7 189ZM1.7 184.452L1.7 181.419L0.3 181.419L0.3 184.452L1.7 184.452ZM1.7 178.387L1.7 175.355L0.300001 175.355L0.3 178.387L1.7 178.387ZM1.7 172.323L1.7 169.29L0.300001 169.29L0.300001 172.323L1.7 172.323ZM1.7 166.258L1.7 163.226L0.300001 163.226L0.300001 166.258L1.7 166.258ZM1.7 160.194L1.7 157.161L0.300001 157.161L0.300001 160.194L1.7 160.194ZM1.7 154.129L1.7 151.097L0.300002 151.097L0.300002 154.129L1.7 154.129ZM1.7 148.065L1.7 145.032L0.300002 145.032L0.300002 148.065L1.7 148.065ZM1.7 142L1.7 138.968L0.300002 138.968L0.300002 142L1.7 142ZM1.7 135.935L1.7 132.903L0.300002 132.903L0.300002 135.935L1.7 135.935ZM1.7 129.871L1.7 126.839L0.300003 126.839L0.300003 129.871L1.7 129.871ZM1.7 123.806L1.7 120.774L0.300003 120.774L0.300003 123.806L1.7 123.806ZM1.7 117.742L1.7 114.71L0.300003 114.71L0.300003 117.742L1.7 117.742ZM1.7 111.677L1.7 108.645L0.300004 108.645L0.300003 111.677L1.7 111.677ZM1.7 105.613L1.7 102.581L0.300004 102.581L0.300004 105.613L1.7 105.613ZM1.7 99.5484L1.7 96.5162L0.300004 96.5162L0.300004 99.5484L1.7 99.5484ZM1.7 93.4839L1.7 90.4516L0.300004 90.4516L0.300004 93.4839L1.7 93.4839ZM1.7 87.4194L1.7 84.3871L0.300005 84.3871L0.300004 87.4194L1.7 87.4194ZM1.7 81.3549L1.7 78.3226L0.300005 78.3226L0.300005 81.3549L1.7 81.3549ZM1.7 75.2904L1.70001 72.2581L0.300005 72.2581L0.300005 75.2904L1.7 75.2904ZM1.70001 69.2258L1.70001 66.1936L0.300005 66.1936L0.300005 69.2258L1.70001 69.2258ZM1.70001 63.1613L1.70001 60.1291L0.300006 60.1291L0.300006 63.1613L1.70001 63.1613ZM1.70001 57.0968L1.70001 54.0645L0.300006 54.0645L0.300006 57.0968L1.70001 57.0968ZM1.70001 51.0323L1.70001 48L0.300006 48L0.300006 51.0323L1.70001 51.0323ZM1.70001 44.9678L1.70001 41.9355L0.300006 41.9355L0.300006 44.9678L1.70001 44.9678ZM1.70001 38.9033L1.70001 35.871L0.300007 35.871L0.300007 38.9033L1.70001 38.9033ZM1.70001 32.8387L1.70001 29.8065L0.300007 29.8065L0.300007 32.8387L1.70001 32.8387ZM1.70001 26.7742L1.70001 23.742L0.300007 23.742L0.300007 26.7742L1.70001 26.7742ZM1.70001 20.7097L1.70001 17.6775L0.300008 17.6775L0.300007 20.7097L1.70001 20.7097ZM1.70001 14.6452L1.70001 11.613L0.300008 11.613L0.300008 14.6452L1.70001 14.6452ZM1.70001 8.5807L1.70001 5.54843L0.300008 5.54843L0.300008 8.5807L1.70001 8.5807ZM1.70001 2.51617L1.70001 1L0.300008 1L0.300008 2.51617L1.70001 2.51617Z"
            fill="#D9DBDC" />
        </svg>
      </v-col>
      <v-col cols="5" class=" pl-0 ">
        <v-card height="20px" class="elevation-0 mb-3">
          <v-card-actions class="pt-1 pb-1 pa-0 ">
            <p class="mb-3 text-ColorD34645 fs-14 fw-559 Ls-0" >Ask </p>
            <v-spacer></v-spacer>
            <p class="mb-3 text-Color506D84 fs-14 fw-559 Ls-0" >Quantity</p>
          </v-card-actions>
        </v-card>
        <div class="" v-for="n in 5" :key="n" style="position:relative">
          <v-card color="transparent" style="z-index:2" class="elevation-0  mb-4 ">
            <v-card-actions class="pa-0 px-1">
              <p class="mb-0 fs-13 text-BlackColor fw-559" >116.80</p>
              <v-spacer></v-spacer>
              <p class="mb-0 fs-13 text-Color515559 fw-559">5,007</p>
            </v-card-actions>
          </v-card>
          <v-card width="100%" style="position:absolute;right:0;top:0;z-index:1" color="#FCDDDC" class="elevation-0" height="20px">
          </v-card>
        </div>
      </v-col>
    </v-row>
      </v-card>
      </v-col>
      <v-col cols="12" md="3" class="">
        <div class="">
          <v-card class="border1 " outlined rounded-lg elevation="0">
            <v-card class="d-flex elevation-0 px-3 py-4" color="#FAFBFF">
            <v-btn class="rounded-pill elevation-0 fs-14 fe-559 text-WhiteColor Ls-0-14" color="#43A833" width="48%"> Buy</v-btn>
            <v-btn class="ml-3 rounded-pill elevation-0 fs-14 fe-559 text-666Color Ls-0-14" width="48%"> Sell</v-btn>
           </v-card>
           <v-tabs class="mt-1 pl-3" color="#000" dense height="35px">
            <v-tab   v-for="(k ,i ) in FandOOrderTabsitems" :key="i" ><span class="text-none fs-13 fw-559 Lh-16">{{ k }}</span>   </v-tab>
           </v-tabs>
           <v-divider></v-divider>
           <div class="px-3 py-5"> 
            <p class="mb-0 fs-12 font-weight-medium Lh-14 text-666Color">Investment type</p>
            <v-radio-group class="pa-0 ma-0 pt-2 mb-5" v-model="FandoRadiobtn" color="black" dense row mandatory>
              <v-radio class="" color="black" v-bind:checked="active === 0" value="Delivery">
                <template v-slot:label>
                  <p class="mb-0 fs-13 text-Color3E4 font-weight-medium Lh-16"> Delivery</p>
                </template></v-radio>
              <v-radio color="black" value="Intraday">
                <template v-slot:label>
                  <p class="mb-0 fs-13 text-Color3E4 font-weight-medium Lh-16"> Intraday</p>
                </template></v-radio>
            </v-radio-group>
            <v-row>
              <v-col cols="6" class="pb-0">
                <p class="mb-3 text-BlackColor fs-13 fw-559 Lh-16">Quantity</p>
                <v-text-field class="TextFiledCustmazHei textFiedColorChange  ml-0 pl-0 mt-1 pa-0 centered-input"
                  hide-spin-buttons v-model="FandoQtyTxtFledModel" :step="FandoQtyTxtFledModel"
                  :value="FandoQtyTxtFledModel" type="number" background-color="#F1F3F8" solo rounded flat dense :min="1">
                  <template v-slot:prepend-inner>
                    <v-btn class="ml-0 pl-0 backColorWhite" width="18px" height="18px" elevation="0" small outlined
                      v-if="FandoQtyTxtFledModel > 1" fab dark @click="FandoQtyTxtFledModel--">
                      <v-icon size="13" color="#000">mdi-minus</v-icon>
                    </v-btn>
                  </template>
                  <template v-slot:append>
                    <v-btn class="mr-2 backColorWhite" width="18px" height="18px" elevation="0" small outlined fab dark
                      @click="FandoQtyTxtFledModel++">
                      <v-icon size="13" color="#000">mdi-plus</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="6" class="pb-0">
                <p class="mb-3 text-BlackColor fs-13 fw-559 Lh-16">Price</p>
                <v-text-field class="ml-0 pl-0 mt-1 pa-0 TextFiledCustmazHei textFiedColorChange" hide-spin-buttons
                  type="number" background-color="#F1F3F8" solo rounded flat dense>
                  <template v-slot:label>
                    <p class="text-BlackColor fs-13 fw-559">₹ 1,288.90</p>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <p class="fs-12 text-666Color font-weight-medium Lh-14 pt-4 mb-1">Order type</p>
            <v-chip-group class="ChipSlideNextIconHide" mandatory active-class="FandOOrdersChipActive" next-icon=""
              prev-icon="">
              <v-chip v-for="b in FandOOrderChip" class="rounded-pill backColorF1F3 elevation-0" :key="b"> <span
                  class="fs-12 font-weight-medium Lh-16">{{ b }}</span> </v-chip>
            </v-chip-group>
            <p class="mb-3 pt-4 text-BlackColor fs-13 fw-559 Lh-16">Trigger price</p>
            <v-text-field class="ml-0 pl-0 mt-1 pa-0 TextFiledCustmazHei textFiedColorChange" hide-spin-buttons
              type="number" background-color="#F1F3F8" solo rounded flat>
              <template v-slot:label>
                <p class="mb-0 text-BlackColor fs-13 fw-559">₹ 1,288.90</p>
              </template>
            </v-text-field>
            <p class=" fs-10 font-weight-medium Lh-14 text-666Color mt-n3">Your order wil executed after a stock crosses
              this trigger price set for you</p>
            <p class="pt-3 text-center mb-0  fs-20 font-weight-medium text-GreenColor">₹ 10,31,566</p>
            <p class=" text-center  fs-12 font-weight-medium Lh-20 text-666Color">Required amount to buy 34 qty bonds</p>
            <v-btn color="#000" width="100%"
              class="text-capitalize fs-14 fw-559 Lh-20 Ls-0-28 text-WhiteColor elevation-0 rounded-pill">Start Investing
              Now!</v-btn>
            </div>
          </v-card>
          <v-toolbar class="mt-4 FandOtoolbar-contant pb-2" elevation="0" color="white">
            <v-toolbar-title class="text-BlackColor fs-16 fw-559 Ls-032">FandODeatilesNews</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu left offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" :ripple="false" class="ButtonAlignMent pr-1" plain icon>
                  <v-icon class="" color="black">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-card class="elevation-0 mb-6" v-for="bn in FandODeatilesNews" :key="bn.title">
            <v-card class=" elevation-0">
              <div class="">
                <p class="pl-2 mb-1 fs-14 text-BlackColor font-weight-medium Lh-18"
                  style="border-left: 2.5px solid #0037B7;">{{ bn.title }}<br><span
                    class="fs-10 text-999Color Lh-12 font-weight-medium">22 May, 2023</span>
                </p>
              </div>
            </v-card>
          </v-card>
          <div class="text-center mb-15 mb-sm-0 ">
            <v-btn class="text-none" justify-center text @click="readmore()">
              <img class="Read_News" src="@/assets/BondsImgs/ReadOtherNews.svg" width="14px" height="14px" />
              <p class="pl-1 mb-0 text-blueColor fs-14 fw-559 Lh-16">Read other news </p>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      FandODeatilesChartTabItems:["1M","3M","6M","1YR","3YR","5YR","MAX"],
      itemsmenu: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }],
      FandOOrderChip: ["Market", "Limit", "SL Limit", "SL Mkt"],
      FandOOrderTabsitems:["Regular","Cover","AMO"],
      FandoRadiobtn: null,
      FandoQtyTxtFledModel: 1,
      FandODeatilesNews: [
        {
          title: "INR Strengthens Against USD, Dollar Index Slides; March USD/INR Levels?",
        },
        {
          title: "HDFC’s exit from corporate bond market brings cheer to smaller issuers",
        },
        {
          title: "Bank bond issuance may fall to Rs 90,000 crore in FY24, says ICRA",
        },
        {
          title: "Corporate bond issuances nosedive in April on low requirement of funds",
        },
        {
          title: "Are corporate green bonds losing sheen? Issuances halve since 2022 due",
        },
        {
          title: "3 Stocks to Buy Now That Are Yielding 3.5% to 8.8%",
        },

      ],
    };
  },
};
</script>
<style lang="scss">
.ChipSlideNextIconHide {
  .v-slide-group__next {
    flex: 0 !important;
    min-width: 0px !important;
  }
}

.FandOOrdersChipActive {
  color: #FFF !important;
  background-color: #000000 !important;
  font-size: 13px !important;
  height: 20px !important;
}

.textFiedColorChange input {
  color: #000 !important;
  font-size: 13px !important;
  font-weight: 469 !important;
  line-height: 100% !important;
}

.TextFiledCustmazHei {
  .v-input__slot {
    min-height: 34px !important;
  }
}

.FOOverFlowScrollHide {
  ::-webkit-scrollbar {
    display: none !important;
  }
}

.FandOtoolbar-contant {
  .v-toolbar__content {
    padding: 0px !important;
  }
}</style>