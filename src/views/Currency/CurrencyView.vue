<template>
  <div>
    <div class="pl-md-0 pl-4 pr-md-0 pr-1 d-none d-sm-block">
      <v-row no-gutters>
        <v-col cols="12" md="9" class="pr-md-8 pt-5">
          <p class=" mb-1 fs-20 fw-559 Lh-16 Ls-0_4 text-BlackColor">Top currencies</p>
       <div class="currenceCustomScrolHide">
        <div class="OverfLowscroll">
        <div class="d-inline-flex ml-n3 pt-4">
          <v-card class="ml-3 pl-3 py-2 pr-2 brd-4 border2 elevation-0"   width="161px" v-for="(item, index) in 5" :key="index">
            <p class="mb-0 fs-14 fw-559 Lh-16 text-BlackColor" >EUR - INR</p>
            <v-divider class="my-3"  width="24px" height="1px" color="#000000"></v-divider>
            <p class="mt-3 mb-0 fs-12 font-weight-medium  Lh-16 text-666Color" >3 currency pair</p>
          </v-card>
        </div>
      </div>
      </div>
          <div class="d-flex pt-11">
            <p class="fs-20 fw-559 Lh-16 Ls-0_4 text-BlackColor my-auto" >Currency Futures</p>
            <v-text-field hide-details class="CurenciesTextfeld ml-auto" background-color="#F1F3F8"
              label="Search bonds" solo rounded flat dense style="max-width:216px">
              <template v-slot:prepend-inner>
                <img alt="Search_icon" class="mt-1 shrink" src="@/assets/searchicon.svg" width="28px"  height="17px" />
              </template>
            </v-text-field>
          </div>
          <v-tabs background-color="transparent" class="" color="black" v-model="CurenciesFutuTabModeName">
            <v-tab v-for="tabss in currenceFuturesTab" :key="tabss" class="" @click="Topbondtabclick(tabss)">
              <span class=" text-none pr-0 pl-0 fs-14 fw-559 Lh-16 Ls-0-28">{{ tabss }} </span>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="CurenciesFutuTabModeName">
            <v-tab-item>
              <v-data-table  :headers="currenceTableHeaders"  :items-per-page="ItemPerPageCommodites"  item-key="id" class="elevation-0 border1" hide-default-footer >
                            <template v-slot:[`header.DayHighLow`]="{ header }">
       <v-row class="" no-gutters>
        <v-col cols="8" class="">
          <p class="mb-0 pt-2 ">{{ header.text }}</p>
        </v-col>
        <v-col cols="4" class="ButtonOrMenuRippleNone" align="end">
            <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn  v-bind="attrs" v-on="on"   class="pa-0 float-right" width="fit-content" icon>
                                <v-icon color="black" size="19">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in curensMenuItems" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
        </v-col>
       </v-row>
                            </template>
                            <template v-slot:body>
            <tbody>
                  <tr @mouseover="selectItem(d)" @mouseleave="unSelectItem(d)" @click="$router.push('commodititesdetailes')" class="py-5 CursorPointerEnable" v-for="d in 10" :key="d">
                    <td class=" pr-0" >
                      <v-row>
                    <v-col cols="6" class="pr-0">
                      <p class="text-BlackColor fs-14 fw-559 Lh-16 mb-0">INR Futures</p>
                    </v-col>
                    <v-col cols="6" class="pl- pr-0 pt-" >
                      <div class="pt-3" v-if="d === selectedItem">
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
                          <v-btn class="ml-1 pa-0  elevation-0 ChartMenuCustam" outlined small>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"  fill="#666666" />
                              <path  d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"  fill="#666666" />
                              <path d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"  fill="#666666" />
                            </svg>
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </td>
                    <td class="">
                      <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16">31-Aug-23</p>
                    </td>
                    <td class="">
                      <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16" >1200</p>
                    </td>
                    <td class="">
                      <p class="mb-0 text-BlackColor font-weight-medium fs-13 Lh-16">₹59,290</p>
                    </td>
                    <td class=""><span class="fs-13 text-GreenColor font-weight-medium Lh-16">+90.00</span>
                    </td>
                    <td class=""><span class="fs-13 text-GreenColor font-weight-medium Lh-16">+1.65%</span></td>
                    <td>
                    <v-row no-gutters class="">
                                            <v-col class="pt-0 pb-0" cols="3">
                                                <p class="pt-2 mb-0 text-BlackColor font-weight-medium fs-13 Lh-16" >₹6,232</p>
                                            </v-col>
                                            <v-col class="pt-0 pb-0" cols="5">
                                                <v-slider disabled :ripple="false" class="ml-1 mt-0 pt-0 mb-0 MessageInpuslotCus" value="50" thumb-color="black" track-color="#D9D9D9" :thumb-size="0" />
                                            </v-col>
                                            <v-col class="pa- pt-0 pb-0" cols="3">
                                                <p class="pl-0 pt-2 mb-0 text-BlackColor font-weight-medium fs-13 Lh-16">₹6,192</p>
                                            </v-col>
                                        </v-row>
                                    </td>
                  </tr>
            </tbody>
                            </template>
                        </v-data-table>
            </v-tab-item>
            <v-tab-item>
              <p class="black--text pt-16 text-center">No Data</p>
            </v-tab-item>
            <v-tab-item>
              <p class="black--text pt-16 text-center">No Data</p>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
        <v-col cols="12" md="3" class="pr-0 pl-3">
          <v-toolbar class="Curenciestoolbar-contant" elevation="0" color="white">
            <v-toolbar-title class="fs-16 fw-559 text-BlackColor Lh-16 Ls-032" >Currency watchlists</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu left offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="" icon>
                  <v-icon color="black">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in curensMenuItems" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
            <v-select  label="Your watchlist" append-icon="mdi-chevron-down" class="rounded-lg " color="gray" dense>
              <template v-slot:append>
                <p class="mb-1 fs-14 font-weight-medium Lh-16 text-666Color" > 0 items <v-icon color="black"> mdi-chevron-down</v-icon> </p>
              </template>
              <template v-slot:label>
                <p class="mb-1 fs-14 font-weight-medium Lh-16 text-666Color" > Your watchlist</p>
              </template>
            </v-select>
          <div class="text-center mt-13 pb-3">
            <img class="" src="@/assets/BondsImgs/BondFavAdd.svg" width="32px" height="28px" />
            <p class="font-weight-medium pl-3 text-BlackColor fs-16 Lh-20 Ls-032 pt-3">Now track your favourite currency by adding them to your watchlist.</p>
          </div>
          <div class=" mx-auto mt-16 pt-16 pt-sm-5 mb-1 pl-1">
            <div class="display-flex row mx-auto  justify-center">
              <img class="" src="@/assets/BondsImgs/BondCreate_watchlist.svg" width="12px" alt="create-watchlist-svg"/>
              <p class="text-center mb-0 ml-1 fs-14 fw-559 text-blueColor Lh-16" > Create new watchlist</p>
            </div>
          </div>
          <v-divider class="mt-6 border1Divider" ></v-divider>
          <v-toolbar class="mt-4 Curenciestoolbar-contant" elevation="0" color="white">
            <v-toolbar-title class="text-BlackColor fs-16 fw-559 Lh-16 Ls-032">Currency in news</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu left offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" :ripple="false" class="ButtonAlignMent pr-1" plain icon>
                  <v-icon class="" color="black">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in curensMenuItems" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-card class="elevation-0 mb-6" v-for="bn in Bondsinnews" :key="bn.title">
            <v-card class="mt-2 elevation-0">
              <div class="">
                <p class="pl-2 mb-1 fs-14 text-BlackColor font-weight-medium Lh-18"
                  style="border-left: 2.5px solid #0037B7;">{{ bn.title}}<br><span class="fs-10 text-999Color Lh-12 font-weight-medium">22 May, 2023</span>
                </p>
              </div>
            </v-card>
          </v-card>
          <div class="text-center pb-5 btnBackgroundNone">
            <v-btn class="text-none"    text @click="readmore()">
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
      selectedItem: false,
      CurenciesFutuTabModeName: null,
      curensMenuItems: [{ title: 'Click Me' }, { title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me 2' },],
      currenceFuturesTab: [ "Most active", "Top currencies", "OI Change"   ],
      currenceTableHeaders: [
          { text: 'Commodities Name', align: 'start',sortable: false,class:"TableHeaderFntColor",width:"25%"},
          { text: 'Expiry Date', value: 'ExpiryDate' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Lots.', value: 'Lots' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Last Price', value: 'LastPrice', sortable: false,class:"TableHeaderFntColor" },
          { text: 'Chg', value: 'ch' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Chg%', value: 'Chgpercentages' , sortable: false, class:"TableHeaderFntColor"},
          { text: 'Day High & Low', value: 'DayHighLow' , sortable: false, class:"TableHeaderFntColor",width:"23%"},
        ],
      Bondsinnews: [
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
  methods: {
    readmore() {
      this.Bondsinnews.push(this.Bondsinnews[0])
    },
    selectItem(item) {
      this.selectedItem = item
    },
    unSelectItem() {
      this.selectedItem = false
    },
  },
}
</script>
<style lang="scss">
.currenceCustomScrolHide {
    ::-webkit-scrollbar {
        display: none !important;
    }
}
.CurenciesTextfeld .v-label {
  padding-top:2px !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 469 !important;
  line-height: 16px !important;
}
.Curenciestoolbar-contant {
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
.btnBackgroundNone {
.v-btn::before {
  background-color: transparent !important;
}
}
</style>