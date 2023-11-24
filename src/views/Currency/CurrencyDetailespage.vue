<template>
  <div class="mt-sm-3 mt-4">
    <v-row class="">
      <v-col cols="12" md="9" class="pr-md-8 pr-3 pl-0 pl-sm-3 ">
        <v-card class="border1" elevation="0" rounded-lg outlined>
          <v-card color="#FAFBFF" elevation="0" class="pl-sm-1 pl-8 pr-4 pr-sm-6 mt pb-5 pt-6">
            <v-toolbar dense class="elevation-0" color="transparent">
              <div class="text-start">
              <p class="mb-2 text-BlackColor fs-20 fw-559 Lh-16 Ls-0_4">USDINR 83.5 PE</p>
              <p class="mb-0 fs-12 Lh-14 font-weight-medium text-666Color">USDINR is expected to trade at 77.49 USD/BBL by the end of this quarter,<br> according to Trading Economics global macro models and analysts expectations.</p>
            </div>
            <v-spacer></v-spacer> 
                 <div class="mb-auto pr-10">
                    <p class="mb-2 text-right text-BlackColor fs-16 fw-559 Lh-16">₹ 1257.00 </p>
                    <p class=" mb-0 text-GreenColor fs-12 fw-559 Lh-16">+33.00 (0.53%)</p>
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
    <div class="pr-3">
    <v-tabs class="" color="#000" right>
              <v-tab v-for="k in ChartTabItems" :key="k"><span class="fs-14 fw-559 Lh-16 Ls-0-28">{{k}}</span></v-tab>
            </v-tabs>
          </div>
  </v-col>
</v-row>
<v-divider class=""></v-divider>
            <div class="pl-sm-6 pr-sm-0 pl-7 pr-7 pb-4 pt-7">
              <v-row>
                <v-col cols="12" sm="3" class="pr-0">
                  <p class="mb-2 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8 text-uppercase">Market Lot</p>
                  <p class="mb-2 font-weight-medium fs-14 text-BlackColor Lh-16">₹1,000</p>
                  <v-divider class="border1"></v-divider>
                  <v-row>
                    <v-col cols="6" class="pr-">
                      <p class="mb-2 pt-5 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8 text-uppercase">Open interest </p>
                  <p class="mb-2 font-weight-medium fs-14 text-BlackColor Lh-16">₹1,251.00</p>
                  <v-divider class="border1"></v-divider>
                    </v-col>
                    <v-col cols="6" class="pr-0">
                      <p class="mb-2 pt-5 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8 text-uppercase">1wk OI change </p>
                  <p class="mb-2 font-weight-medium fs-14 text-BlackColor Lh-16">₹1,251.00</p>
                  <v-divider class="border1"></v-divider>
                    </v-col>
                  </v-row>
                  <p class="mb-0 pt-4 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8">HIGH - LOW</p>
                  <div class="d-flex">
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">₹1,348.95</p>
                    <v-slider  disabled :ripple="false" class="mb-auto mt-0 pt-0 mb-0 commoditesDetaiErrmMb0" value="50" thumb-color="black"
                      track-color="#D9D9D9" :thumb-size="0" />
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">1,322.65</p>
                  </div>
                  <v-divider class="border1"></v-divider>
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
              <p class="mb-0 pl-5 fw-559 text-BlackColor fs-20 Lh-16 Ls-0_4">Similar Currencies</p>
              <v-btn text class="text-none pa-0 ml-auto mr-4" height="fit-content" max-width="fit-content">
                    <p class="mb-0 fw-559 text-blueColor fs-14 Lh-16">See all currency</p>
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
       
      </v-col>
      <v-col cols="12" md="3" class="">
          <v-card class="border1" outlined rounded-lg elevation="0">
           <v-card class="d-flex elevation-0 px-3 py-4" color="#FAFBFF">
            <v-btn class="rounded-pill elevation-0 fs-14 fe-559 text-WhiteColor Ls-0-14" color="#43A833" width="48%"> Buy</v-btn>
            <v-btn class="ml-3 rounded-pill elevation-0 fs-14 fe-559 text-666Color Ls-0-14" width="48%"> Sell</v-btn>
           </v-card>

           <v-tabs class="mt-1 pl-3" color="#000" dense height="35px">
            <v-tab   v-for="(k ,i ) in CommodityOrderTabItems" :key="i" ><span class="text-none fs-13 fw-559 Lh-16">{{ k }}</span>   </v-tab>
           </v-tabs>
           <v-divider></v-divider>
           <div class="px-3 py-4">
            <p class="mb-0 fs-12 font-weight-medium Lh-14 text-666Color">Investment type</p>
            <v-radio-group class="pa-0 ma-0 pt-2 " v-model="BondsRadiobtn" color="black" dense row mandatory>
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
                  hide-spin-buttons v-model="BondsQtyTxtFledModel" :step="BondsQtyTxtFledModel"
                  :value="BondsQtyTxtFledModel" type="number" background-color="#F1F3F8" solo rounded flat dense :min="1">
                  <template v-slot:prepend-inner>
                    <v-btn class="ml-0 pl-0 backColorWhite" width="18px" height="18px" elevation="0" small outlined
                      v-if="BondsQtyTxtFledModel > 1" fab dark @click="BondsQtyTxtFledModel--">
                      <v-icon size="13" color="#000">mdi-minus</v-icon>
                    </v-btn>
                  </template>
                  <template v-slot:append>
                    <v-btn class="mr-2 backColorWhite" width="18px" height="18px" elevation="0" small outlined fab dark
                      @click="BondsQtyTxtFledModel++">
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
            <v-chip-group class="ChipSlideNextIconHide" mandatory active-class="BondOrdersChipActive" next-icon=""
              prev-icon="">
              <v-chip v-for="b in BondOrderChip" class="rounded-pill backColorF1F3 elevation-0" :key="b"> <span
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
          <v-toolbar class="mt-4 CommoditesNewsToolBar pb-2" elevation="0" color="white">
            <v-toolbar-title class="text-BlackColor fs-16 fw-559 Ls-032">USDINR in news</v-toolbar-title>
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
          <v-card class="elevation-0 mb-6" v-for="bn in CommoditesDetils" :key="bn.title">
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
              <p class="pl-1 mb-0 text-blueColor fs-14 fw-559 Lh-16" >Read other news </p>
            </v-btn>
          </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggle_exclusive: 0,
      isDisabled:false,
      itemsmenu: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }],
      BondOrderChip: ["Market", "Limit", "SL Limit", "SL Mkt"],
      BondsRadiobtn: null,
      BondsQtyTxtFledModel: 1,
      CommoditesDeatailsHeader: [
        { text: 'Month', align: 'start', sortable: false, class: "TableHeaderFntColor" },
        { text: 'Time', value: 'ExpiryDate', sortable: false, class: "TableHeaderFntColor" },
        { text: 'Last Price.', value: 'Lots', sortable: false, class: "TableHeaderFntColor" },
        { text: 'Chg (%)', value: 'LastPrice', sortable: false, class: "TableHeaderFntColor" },
        { text: 'High', value: 'ch', sortable: false, class: "TableHeaderFntColor" },
        { text: 'Low', value: 'Chgpercentage', sortable: false, class: "TableHeaderFntColor" },
        { text: 'Volume', value: 'Chgpercentage', sortable: false, class: "TableHeaderFntColor" },
      ],
      CommoditesDetils: [
        {
          title: "INR Strengthens Against USD, Dollar Index Slides; March USD/INR Levels?",
        },
        {
          title: "Rupee rises 12 paise to close at 82.05 against US dollar",
        },
        {
          title: "Banks to issue RuPay forex cards; PPIs can issue e-RUPI vouchers:RBI",
        },
        {
          title: "Rupee falls 11 paise to 82.76 against US dollar in early trade",
        },
        {
          title: "INR Strengthens Against USD, Dollar Index Slides; March USD/INR Levels?",
        },
        {
          title: "Dollar heading for first monthly gain since September",
        },
      ],
      ChartTabItems:["1M","3M","6M","1YR","3YR","5YR","MAX"],
      CommodityOrderTabItems:["Regular","AMO"],
    };
  },
  methods: {
    readmore() {
      this.CommoditesDetils.push(this.CommoditesDetils[0])
    },
  }
};
</script>
<style lang="scss">
.CurencyDetailsHoriztalScrolHide {
  ::-webkit-scrollbar {
    display: none !important;
  }
}
.ChipSlideNextIconHide {
  .v-slide-group__next {
    flex: 0 !important;
    min-width: 0px !important;
  }
}

.BondOrdersChipActive {
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
.CommoditesNewsToolBar {
  .v-toolbar__content {
    padding: 0px !important;
  }
}
.commoditesDetaiErrmMb0 {
.v-messages { 
  min-height:0px !important;
}
.v-input__slot {
  margin-bottom:0px !important;
}
}
</style>