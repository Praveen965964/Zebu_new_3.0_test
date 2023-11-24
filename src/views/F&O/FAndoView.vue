<template>
    <div>
      <div class="pl-md-0 pl-4 pr-md-0 pr-1 d-none d-sm-block">
        <v-row no-gutters>
          <v-col cols="12" md="9" class="pr-md-8 pt-5">
            <v-card class="pl-7 pr-10 elevation-0 py-6 elevation-0" color="#0D6CCA" height="220px">
              <v-row style="position:relative">
                <v-col cols="4" class="pr-0">
                  <p class="mb-4 fs-36 text-WhiteColor Lh-32 font-weight-medium Ls-0_72" >  F&O Market </p>
                  <p class="mb-lg-8 mb-2 text-WhiteColor fs-16 font-weight-light Lh-18 Ls-032 opc-08">
                    Get updates on today’s <br>stock from the broader <br> market indices and sectors</p>
                  <v-btn class="text-capitalize brd-32 elevation-0" color="#000">
                    <p class="mb-0 text-WhiteColor fs-14 font-weight-regular Lh-20  Ls-0-28" >
                        Invest in F&O Stocks</p>
                  </v-btn>
                </v-col>
                <v-col cols="8">
                  <div>
                    <v-row style="position:absolute;top:38px;right:">
                      <v-col cols="4" class="pl-md-2 pr-md-2 pl-0 pr-0">
                        <v-card class="text-center pb-5 pt-7  brd-16 cardBoxShadLInearGradi" width="181px">
                          <img alt="investGovtSecurits-svg" class="" src="@/assets/FO/indiciesFutreAndOpton.svg" >
                          <p class="mb-0 pt-5 text-BlackColor fs-16 fw-559 Lh-16 Ls-032 text-center" >Invest in Market <br> Indices Futures &<br> Options</p>
                        </v-card>
                      </v-col>
                      <v-col cols="4" class="pl-2 pr-2 pl-md-2 pr-md-2">
                        <v-card class="text-center pb-5 pt-7 brd-16 cardBoxShadLInearGradi" width="181px">
                          <img alt="InvestGoldBond-svg" class="" src="@/assets/FO/InvestSectorFur.svg" />
                          <p class="mb-0 pt-5 text-BlackColor fs-16 fw-559 Lh-16 Ls-032 text-center" > I  nvesting in <br>Sectors Futures & <br> Options</p>
                        </v-card>
                      </v-col>
                      <v-col cols="4" class="pl-2 pl-md-2 pr-md-2 pl-sm-0">
                        <v-card class="text-center pb-5 pt-6  brd-16 cardBoxShadLInearGradi" width="181px" >
                          <img alt="CheckoutTaxFreebonds-svg" class="" src="@/assets/BondsImgs/CheckoutTaxFreebonds.svg" />
                          <p class="mb-0 pt-5 text-BlackColor fs-16 fw-559 Lh-16 Ls-032" > Checkout top <br> rated Futures & <br> Options </p>
                        </v-card>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          <div class="pt-13">
            <v-row>
                <v-col cols="6">
                    <p class="mb-5 text-BlackColor fs-20 Lh-16 Ls-0_4 fw-559">Index Options</p>
                    <v-card class="elevation-0 border1">
                        <v-data-table :headers="headersFandOOptions"   :items-per-page="itemsperPage"
                            item-key="id" class="elevation-0" hide-default-footer >
                            <template v-slot:footer>
                                <v-divider></v-divider>
<div class="text-center">
 <v-btn text color="primary" dark class="ma-2 text-none" @click="ShowmoreIndexOption = !ShowmoreIndexOption">
 <span class=" text-blueColor fs-14 Lh-16 fw-559" v-if="ShowmoreIndexOption">Show more index options</span> 
 <span class=" text-blueColor fs-14 Lh-16 fw-559" v-else>Show Less index options </span> 
</v-btn>
</div>
  
                            </template>
                            <template v-slot:body>
      <tbody>
                  <tr class="CursorPointerEnable" @click="$router.push('fodetailes')" v-for="d in ShowmoreIndexOption ? 5 : 8" :key="d">
                   
                    <td class="py-3">
                        <p class="mb-2 text-BlackColor fs-14 font-weight-medium Lh-16"> BANKNIFTY 46000 PE</p>
                        <p class="mb-0  text-999Color fs-12 font-weight-regular Lh-16" >NFO 27JUL23</p>
                    </td>
                    <td class="text-end">
                        <p class="text-BlackColor fs-12 font-weight-medium Lh-16 mb-0" >₹236.05 <span class="text-GreenColor fs-12 font-weight-medium Lh-16" style="line-height: 16px;"> (+1.65%)</span></p>
                        <p class=" mb-0 pt-1 text-BlackColor fs-12 font-weight-medium Lh-16" >17,47,578 <span class="text-RedColor fs-12 font-weight-medium Lh-16"   > (-0.47%)</span></p>
                    </td>
                  </tr>
      </tbody>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <p class="mb-5 text-BlackColor fs-20 Lh-16 Ls-0_4 fw-559">Index Futures</p>
                    <v-card class="elevation-0 border1">
                        <v-data-table :headers="headersFandOOptions"   :items-per-page="itemsperPage"
                            item-key="id" class="elevation-0" hide-default-footer >
                            <template v-slot:footer>
                                <v-divider></v-divider>
                                <div class="text-center">
 <v-btn text color="primary" dark class="ma-2 text-none" @click="ShowmoreindexFutres = !ShowmoreindexFutres">
 <span class=" text-blueColor fs-14 Lh-16 fw-559" v-if="ShowmoreindexFutres">Show more index futures</span> 
 <span class=" text-blueColor fs-14 Lh-16 fw-559" v-else>Show Less index futures </span> 
</v-btn>
</div>
                            </template>
                            <template v-slot:body>
      <tbody>
                  <tr class="CursorPointerEnable" @click="$router.push('fodetailes')" v-for="d in ShowmoreindexFutres ? 5 :8 " :key="d">
                   
                    <td class="py-3">
                        <p class="mb-2 text-BlackColor fs-14 font-weight-medium Lh-16"> NIFTY FUT</p>
                        <p class="mb-0  text-999Color fs-12 font-weight-regular Lh-16" >NFO 27JUL23</p>
                    </td>
                    <td class="text-end">
                        <p class="text-BlackColor fs-12 font-weight-medium Lh-16 mb-0" >₹236.05 <span class="text-GreenColor fs-12 font-weight-medium Lh-16" style="line-height: 16px;"> (+1.65%)</span></p>
                        <p class=" mb-0 pt-1 text-BlackColor fs-12 font-weight-medium Lh-16" >17,47,578 <span class="text-RedColor fs-12 font-weight-medium Lh-16"   > (-0.47%)</span></p>
                    </td>
                  </tr>
      </tbody>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
            <p class="mb-0 pt-8 text-BlackColor fs-20 Lh-16 Ls-0_4 fw-559">Filters</p>
            <div class="FilterCustoomX-Scroll_hide">
        <div class="OverfLowscroll">
        <div class="d-inline-flex ml-n3 pt-4">
          <v-card class="ml-3 px-3 py-2 brd-4 border2 elevation-0"   width="161px" v-for="item  in 5" :key="item">
            <p class="mb-0 fs-14 fw-559 Lh-16 text-BlackColor" >Most Active</p>
            <v-divider class="my-3"  width="24px" height="1px" color="#000000"></v-divider>
        <div class="d-flex ">
            <v-card class="px-2 py-1 elevation-0 brd-4" color="#F1F3F8">
                <p class="mb-0 text-uppercase fs-9 font-weight-regular Lh-12 Ls-0-9">Futures</p>
            </v-card>
            <v-card class="px-2 py-1 elevation-0 brd-4 ml-2" color="#F1F3F8">
                <p class="mb-0 text-uppercase fs-9 font-weight-regular Lh-12 Ls-0-9">Options</p>
            </v-card>

        </div>
          </v-card>
        </div>
      </div>
           </div>   
           <v-row class="pt-10">
                <v-col cols="6">
                    <p class="mb-5 text-BlackColor fs-20 Lh-16 Ls-0_4 fw-559">Stocks Options</p>
                    <v-card class="elevation-0 border1">
                        <v-data-table :headers="headersFandOOptions"   :items-per-page="itemsperPage"
                            item-key="id" class="elevation-0" hide-default-footer >
                            <template v-slot:footer>
                                <v-divider></v-divider>
                                <div class="text-center">
 <v-btn text color="primary" dark class="ma-2 text-none" @click="ShowmoreStocksOption = !ShowmoreStocksOption">
 <span class=" text-blueColor fs-14 Lh-16 fw-559" v-if="ShowmoreStocksOption">Show more stocks options</span> 
 <span class=" text-blueColor fs-14 Lh-16 fw-559" v-else>Show Less stocks options </span> 
</v-btn>
</div>
                            </template>
                            <template v-slot:body>
      <tbody>
                  <tr class="CursorPointerEnable" @click="$router.push('stocksfo')" v-for="d in ShowmoreStocksOption ? 5 : 8" :key="d">
                   
                    <td class="py-3">
                        <p class="mb-2 text-BlackColor fs-14 font-weight-medium Lh-16"> RELIANCE 2600 CE</p>
                        <p class="mb-0  text-999Color fs-12 font-weight-regular Lh-16" >NFO 27JUL23</p>
                    </td>
                    <td class="text-end">
                        <p class="text-BlackColor fs-12 font-weight-medium Lh-16 mb-0" >₹236.05 <span class="text-GreenColor fs-12 font-weight-medium Lh-16" style="line-height: 16px;"> (+1.65%)</span></p>
                        <p class=" mb-0 pt-1 text-BlackColor fs-12 font-weight-medium Lh-16" >17,47,578 <span class="text-RedColor fs-12 font-weight-medium Lh-16"   > (-0.47%)</span></p>
                    </td>
                  </tr>
      </tbody>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <p class="mb-5 text-BlackColor fs-20 Lh-16 Ls-0_4 fw-559">Stocks Futures</p>
                    <v-card class="elevation-0 border1">
                        <v-data-table :headers="headersFandOOptions"   :items-per-page="itemsperPage"
                            item-key="id" class="elevation-0" hide-default-footer >
                            <template v-slot:footer>
                                <v-divider></v-divider>
                                <div class="text-center">
 <v-btn text color="primary" dark class="ma-2 text-none" @click="ShowmoreStocksFutures = !ShowmoreStocksFutures">
 <span class=" text-blueColor fs-14 Lh-16 fw-559" v-if="ShowmoreStocksFutures">Show more Stocks Futures</span> 
 <span class=" text-blueColor fs-14 Lh-16 fw-559" v-else>Show Less Stocks Futures </span> 
</v-btn>
</div>
                            </template>
                            <template v-slot:body>
      <tbody>
                  <tr class="CursorPointerEnable" @click="$router.push('stocksfo')" v-for="d in ShowmoreStocksFutures ? 5 : 8" :key="d">
                   
                    <td class="py-3">
                        <p class="mb-2 text-BlackColor fs-14 font-weight-medium Lh-16"> HDFCBANK FUT</p>
                        <p class="mb-0  text-999Color fs-12 font-weight-regular Lh-16" >NFO 27JUL23</p>
                    </td>
                    <td class="text-end">
                        <p class="text-BlackColor fs-12 font-weight-medium Lh-16 mb-0" >₹236.05 <span class="text-GreenColor fs-12 font-weight-medium Lh-16" style="line-height: 16px;"> (+1.65%)</span></p>
                        <p class=" mb-0 pt-1 text-BlackColor fs-12 font-weight-medium Lh-16" >17,47,578 <span class="text-RedColor fs-12 font-weight-medium Lh-16"   > (-0.47%)</span></p>
                    </td>
                  </tr>
      </tbody>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
            <div>

            </div>
          </div>
          </v-col>
          <v-col cols="12" md="3" class="pr-0 pl-3">
            <v-toolbar class="toolbar-contant" elevation="0" color="white">
              <v-toolbar-title class="fs-16 fw-559 text-BlackColor Lh-16 Ls-032" >F&O Watchlists</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu left offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="mr-1" icon>
                    <v-icon color="black">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
            <div class="FandoWatchlist">
              <v-select  label="Your watchlist" append-icon="mdi-chevron-down" class="rounded-lg " color="gray" dense>
                <template v-slot:append>
                  
                  <p class="mb-1 fs-14 font-weight-medium Lh-16 text-666Color" > 0 items <v-icon color="black"> mdi-chevron-down</v-icon> </p>
                </template>
              </v-select>
            </div>
            <div class="text-center mt-13 pb-3">
              <img class="" src="@/assets/BondsImgs/BondFavAdd.svg" width="32px" height="28px" />
              <p class="font-weight-medium px-3 text-BlackColor fs-16 Lh-20 Ls-032 pt-3">Now track your favorite F&O by adding them to your watchlist.</p>
            </div>
            <div class=" mx-auto mt-16 pt-16 pt-sm-5 mb-1 pl-1">
              <div class="display-flex row mx-auto  justify-center">
                <img class="" src="@/assets/BondsImgs/BondCreate_watchlist.svg" width="12px" alt="create-watchlist-svg"/>
                <p class="text-center mb-0 ml-1 fs-14 fw-559 text-blueColor Lh-16" > Create new watchlist</p>
              </div>
            </div>
            <v-divider class="mt-6 border1Divider" ></v-divider>
            <v-toolbar class="mt-4 toolbar-contant" elevation="0" color="white">
              <v-toolbar-title class="text-BlackColor fs-16 fw-559 Lh-16 Ls-032">F&O stocks in news</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu left offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" :ripple="false" class="ButtonAlignMent" plain icon>
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
            <v-card class="elevation-0 mb-6" v-for="bn in FandostocksinNews" :key="bn.title">
              <v-card class="mt-2 elevation-0">
                <div class="">
                  <p class="pl-2 mb-1 fs-14 text-BlackColor font-weight-regular Lh-18"
                    style="border-left: 2.5px solid #0037B7;">{{ bn.title}}<br><span class="fs-10 text-999Color Lh-12 font-weight-medium">22 May, 2023</span>
                  </p>
                </div>
              </v-card>
            </v-card>
            <div class="text-center pb-5 btnBackgroundNone">
              <v-btn class="text-none" ripple="false"   text @click="readmore()">
                <img class="" src="@/assets/BondsImgs/ReadOtherNews.svg" alt="ReadeOtherNews-svg" width="14px" height="14px" />
                <p class="pl-1 mb-0 text-blueColor fs-14 fw-559 Lh-16" >Read other news </p>
              </v-btn>
              <v-divider class="mt- border1Divider" ></v-divider>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        ShowmoreStocksOption:true,
        ShowmoreStocksFutures:true,
        ShowmoreIndexOption:true,
        headersFandOOptions:[
        { text: 'Script Name', align: 'start', sortable: false, value: 'CommoName', class: "TableHeaderFntColor" },
        { text: 'Price & Traded Value',align: 'end',  sortable: false, class: "TableHeaderFntColor" },
        ],
        ShowmoreindexFutres:true,
        ShowLessindexFutres:false,
        selectedItem: false,
        Showmore: true,
        ShowLess: false,
        itemsmenu: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' },
        ],
        FandostocksinNews: [
          {
            title: "The following securities are in ban period for trade date Jul 21 2023: DELTACORP",
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
    methods: {
      readmore() {
        this.FandostocksinNews.push(this.FandostocksinNews[0])
      },
    },
  }
  </script>
  <style lang="scss">
  .FilterCustoomX-Scroll_hide {
    ::-webkit-scrollbar {
        display: none !important;
    } 
}
  .FandoWatchlist {
    .v-input .v-label {
      font-size: 14px !important;
      font-weight: 469 !important;
      line-height: 16px !important;
      color: #666666 !important;
    }
  }
  .toolbar-contant {
    .v-toolbar__content {
      padding-top: 0px !important;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
  }
  .ButtonAlignMent {
    .v-btn__content {
      justify-content: end !important;
    }
  }
 
  </style>