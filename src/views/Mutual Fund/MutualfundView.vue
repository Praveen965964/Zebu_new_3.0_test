<template>
  <div>
      <v-row>
          <v-col cols="12" md="9" class="pr-md-8 pt-8 ">
            <p class=" mb-4 fs-20 fw-559 Lh-16 Ls-0_4 text-BlackColor">Mutual fund categories</p>
       <div class="MutualFundScrolHorizantal">
        <div class="OverfLowscroll">
        <div class="d-inline-flex">
          <v-card class="mr-3 pl-3 py-2 pr-2 border2 " outlined height="" width="162.5px" v-for="(item, index) in 5" :key="index">
            <p class=" mb-1 fs-14 fw-559 Lh-16 text-BlackColor" >Equity funds</p>
            <v-divider  class="mt-2 paddingTopcustom2px"  width="24px"  color="#000" />
            <p class="mt-3 mb-0 fs-12 font-weight-medium  Lh-16 text-666Color" >395 funds</p>
            <p class="mb-1 paddingTopcustom2px fs-12 font-weight-medium Lh-16 text-GreenColor"> 18 recommended</p>
          </v-card>
        </div>
      </div>
      </div>
              <v-card class="mt-6 py-5 pr-2 elevation-0" color="#F1F3F8"  >
          <p class="pl-8 mb-3 fs-24 fw-559 Lh-24 text-BlackColor Ls-0_48">Best mutual funds</p>
          <p class="pl-8 fs-14 font-weight-regular Lh-20 text-666Color">Find the right mutual fund across these <br> asset classes</p>
         <div class="MutualFundScrolHorizantal">
          <div class="pl-6 pt-3 OverfLowscroll">
          <div class="d-inline-flex">
      <v-card class="elevation-0 ml-2 py-3 pr-3 pl-4 mb-2 rounded-lg" width="173px" v-for="c in MFBeatItems" :key="c.title" @click="$router.push('commoditescategory')">
<img alt="commodites-svg"  class="shrink " :src="c.image" width="46px" height="46px" />
<p class="mb-2 pt-2 fs-16 fw-559 Lh-16 text-BlackColor Ls-032" >{{c.title}}</p>
<p class="pt-0 mb-5  fs-12 font-weight-medium Lh-14 text-666Color" >{{c.subtitle}}</p>
<p class="mb-0 fs-16 fw-559 Lh-16 text-BlackColor">46 funds</p>
<p class="pt-1 mb-0 fs-12 font-weight-medium Lh-16 text-GreenColor" >2 recommended</p>
      </v-card>
         </div>
        </div>
        </div>
              </v-card>
              <div class="d-flex pt-5 pb-2">
            <p class="fs-20 fw-559 Lh-16 Ls-0_4 text-BlackColor my-auto" >Top 100 mutual funds</p>
            <v-text-field hide-details class="TextfiledHeightCus ml-auto" background-color="#F1F3F8"
              solo rounded flat dense>
              <template v-slot:label>
                <p class="mb-0 LabelclassCustom">Search funds</p>
              </template>
              <template v-slot:prepend-inner>
                <img alt="Search_icon" class="mt-1 shrink" src="@/assets/searchicon.svg" width="28px"  height="17px" />
              </template>
            </v-text-field>
          </div>   
          <v-data-table   :headers="MFHeaders" 
            item-key="id"  class="elevation-0 mt-1 border1" hide-default-footer >
            <template v-slot:footer>
                  <v-divider></v-divider>
                  <div class="text-center" >
                    <v-btn text  dark class="my-1 text-none" @click="MutualShowmore =!MutualShowmore">
                      <span v-if="MutualShowmore" class="text-blueColor fs-14 fw-559 Lh-16">Show more funds</span> 
                      <span v-else class="text-blueColor fs-14 fw-559 Lh-16">Show Less funds</span> 
                    </v-btn>
                  </div>
                </template>
            <template v-slot:[`header.Aum`]="{header}">
              <p class="mb-0">{{ header.text }}<span class="text-999Color fs-12 font-weight-regular Lh-16 pl-1">(cr)</span></p>
            </template>
            <template v-slot:[`header.TerPercentage`]="{header}">
              <p class="mb-0">{{ header.text }}<span class="text-999Color fs-12 font-weight-regular Lh-16 pl-1">(%)</span></p>
            </template>
        
            <template v-slot:[`header.ThreeYearChange`]="{ header }">
              <div class="d-flex ">
                <p class="mb-0 pt-2 ">{{ header.text }}</p>
                <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn  v-bind="attrs" v-on="on"   class="pa-0 ml-auto " width="fit-content" icon>
                                <v-icon color="black" size="19">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in MFIMenuItems" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
              </div>
         </template>
            <template v-slot:body>
            <tbody>
                  <tr @mouseover="selectItem(d)" @mouseleave="unSelectItem(d)" v-for="(d,index) in MutualShowmore ? 5 : 10" :key="d">
                    <td class="pt-3 pb-6 pr-0" >
                  <v-row>
                    <v-col cols="9" class="pr-0">
                      <div class="d-flex">
<div>
  <p class="text-BlackColor fs-14 fw-559 Lh-16 pt-1 mb-0"  >HDFC Large and Mid Cap Fund</p>
                       <div class="display-flex row pt-5">
                        <v-card :color="d === selectedItem ? 'white' : '#F1F3F8'"   height="18px" class="px-2 py-1 ml-2" elevation="0">
                          <p class="mb-0 text-center fs-9 text-666Color font-weight-medium Lh-12 Ls-0-9 text-uppercase" >Growth</p>
                        </v-card>
                        <v-card :color="d === selectedItem ? 'white' : '#F1F3F8'"   height="18px" class="px-2 py-1 ml-2" elevation="0">
                          <p class="mb-0 text-center fs-9 text-666Color font-weight-medium Lh-12 Ls-0-9 text-uppercase" >Equity</p>
                        </v-card>
                      </div>
</div>
<v-card  v-if="index == '0'" class="px-2 py-1 rounded-lg elevation-0 ml-2" color="#ECF5EA" width="fit-content" height="24px">
                        <p class="mb-0 fs-12 fw-559 Lh-16 text-GreenColor">Reco</p>
                      </v-card>
                      </div>
                    </v-col>
                    <v-col cols="3" class="pl- pr-0 pt-">
                      <div class="pt-4" v-if="d === selectedItem">
                            <div class="display-flex row ">
                            <v-btn class="ml-1 pa-0 elevation-0 ChartMenuCustam" outlined dense small>
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                                fill="#666666" />
                              </svg>
                            </v-btn>
                          <v-btn class="ml-1 pa-0  elevation-0 ChartMenuCustam" outlined small >
                            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path  d="M9 11L5 8.61905L1 11V1.95238C1 1.69979 1.09365 1.45755 1.26035 1.27895C1.42705 1.10034 1.65314 1 1.88889 1H8.11111C8.34686 1 8.57295 1.10034 8.73965 1.27895C8.90635 1.45755 9 1.69979 9 1.95238V11Z"
                                stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </td>
                    <td class="pb-6">
                      <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16">₹29,534 <span class="fs-13 text-666Color font-weight-regular Lh-16">Cr</span></p>
                    </td>
                    <td class="pb-6">
                      <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16" >1.15%</p>
                    </td>
                    <td class="pb-6">
                      <p class="mb-0 text-BlackColor font-weight-medium fs-13 Lh-16">₹27,400</p>
                    </td>
                    <td class="pb-6"><span class="fs-13 text-GreenColor font-weight-regular Lh-16">+20.2%</span>
                    </td>
                    <td class="pb-6"><span class="fs-13 text-GreenColor font-weight-regular Lh-16">+82.1%</span></td>
                  </tr>
            </tbody>
            </template>
          </v-data-table>
          </v-col>
          <v-col cols="12" md="3" class="pr-0 pl-3">
        <v-toolbar class="MFToolbarPaddReduce" elevation="0" color="white">
          <v-toolbar-title class="fs-16 fw-559 text-BlackColor Lh-16 Ls-032" >Watchlists</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu left offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="" icon>
                <v-icon color="black">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in MFIMenuItems" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <div class="MFWatchlistLabel">
          <v-select  label="Your watchlist" append-icon="mdi-chevron-down" class="rounded-lg " color="gray" dense>
            <template v-slot:append>
              <p class="mb-1 fs-14 font-weight-medium Lh-16 text-666Color" > 0 items <v-icon color="black"> mdi-chevron-down</v-icon> </p>
            </template>
          </v-select>
        </div>
        <div class="text-center mt-13 pb-3">
          <img class="" src="@/assets/BondsImgs/BondFavAdd.svg" width="32px" height="28px" />
          <p class="font-weight-medium pl-2 text-BlackColor fs-16 Lh-20 Ls-032 pt-3">Now track your favourite MFs by adding them to your watchlist.</p>
        </div>
        <div class=" mx-auto mt-16 pt-16 pt-sm-5 mb-1 pl-1">
          <div class="display-flex row mx-auto  justify-center">
            <img class="" src="@/assets/BondsImgs/BondCreate_watchlist.svg" width="12px" alt="create-watchlist-svg"/>
            <p class="text-center mb-0 ml-1 fs-14 fw-559 text-blueColor Lh-16" > Create new watchlist</p>
          </div>
        </div>
        <v-divider class="mt-6 border1Divider" ></v-divider>
       <div class="pt-6">
        <v-card class="py-6 px-6 brd-4 border1 elevation-0 mb-4" v-for="v in MFInvstExplorItems" :key="v">
          <img  :src="v.icon" >
          <p class="fs-11 font-weight-medium Lh-12 Ls-1-32 text-uppercase  text-blueColor mb-2 pt-4">{{ v.title }}</p>
          <p class="mb-2 fs-18 fw-559 Lh-20 Ls-036   text-BlackColor">{{ v.titleone }}</p>
          <p class="mb-5 fs-12 font-weight-regular Lh-16 Ls-036   text-666Color">{{v.subtitle}}</p>
<div class="d-flex ">
  <img src="@/assets/MutualFund/Seeallnfos.png" /> 
  <span class="fs-14 fw-559 Lh-16 text-blueColor pl-1">{{v.seeallnfos}}</span>
</div>
        </v-card>
      </div>
      </v-col>
      </v-row>
  </div>
</template>
<script>
export default {
data () {
  return {
    MutualShowmore:true,
        MFBeatItems : [
{
image: require('@/assets/MutualFund/savetaxes.svg'),
title: "Save taxes",
subtitle: "Build wealth and save taxes",
},
{
  
image: require('@/assets/MutualFund/equitybeta.svg'),
title: "Energy",
subtitle: "Includes crude oil,  gasoline, natural gas.",
},
{
image: require('@/assets/MutualFund/smartbeta.svg'),
title: "Smart beta",
subtitle: "Hybrid of active and passive",
},
{
image: require('@/assets/MutualFund/internationfund.svg'),
title: "International funds",
subtitle: "Diversify your portfolio globally",
},
{
image: require('@/assets/MutualFund/lowcost.svg'),
title: "Low-cost",
subtitle: "Long term wealth creation at low cost",
},
           ],
           MFHeaders: [
          { text: 'Fund name', align: 'start',sortable: false,value: 'CommoName',class:"TableHeaderFntColor",width:"42%"},
          { text: 'AUM', value: 'Aum' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'TER', value: 'TerPercentage' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Min. Invest', value: 'LastPrice', sortable: false,class:"TableHeaderFntColor" },
          { text: '1yr CAGR', value: 'ch' , sortable: false,class:"TableHeaderFntColor" },
          { text: '3yr CAGR', value: 'ThreeYearChange' , sortable: false, width:"%" , class:"TableHeaderFntColor HeaderPadingAlinRightcus"},
        ],
        MFInvstExplorItems: [
        {
          icon: require('@/assets/MutualFund/newfundoffring.svg'),
          title: "INVEST IN",
          titleone: "Ongoing new fund offerings",
          subtitle: "A new fund offer (NFO) is the first subscription for any new fund by an investment company.",
          seeallnfos: "See all NFOs",


        },
        {
          icon: require('@/assets/MutualFund/fundoffering.svg'),
          title: "EXPLORE BY",
          titleone: "Comparing Funds",
          subtitle: "Find the best suited Mutual Funds for wealth creation by comparing multiple funds",
          seeallnfos: "Compare funds",

        },
        {
          icon: require('@/assets/MutualFund/sipcalculator.svg'),
          title: "ESTIMATE WITH",
          titleone: "SIP calculators",
          subtitle: "Find the best suited Mutual Funds for wealth creation by comparing multiple funds",
          seeallnfos: "Checkout calculators",

        },
      ],
        selectedItem: false,
        MFIMenuItems: [{ title: 'Click Me' }, { title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me 2' },],
  }
},
methods: {
    selectItem(item) {
      this.selectedItem = item
    },
    unSelectItem() {
      this.selectedItem = false
    },
}
}
</script>
<style lang="scss">

.MutualFundScrolHorizantal {
  ::-webkit-scrollbar {
      display: none !important;
  }
}
.MFWatchlistLabel {
.v-input .v-label {
  font-size: 14px !important;
  font-weight: 469 !important;
  line-height: 16px !important;
  color: #666666 !important;
}
}
.MFToolbarPaddReduce {
.v-toolbar__content {
  padding-top: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
}

</style>