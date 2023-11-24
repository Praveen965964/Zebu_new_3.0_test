<template>
  <div class="">
    <p class="pt-5 mb-4 fs-20 fw-559 Lh-16 Ls-0_4 text-BlackColor">Mutual fund categories</p>
       <div class=" MFICatHiseScroolHorizantal">
        <div class="OverfLowscroll">
        <div class="d-inline-flex">
          <v-card class="mr-3 pl-3 py-2 pr-2 border1 " outlined height="" width="162.5px" v-for="(item, index) in 5" :key="index">
            <p class=" mb-1 fs-14 fw-559 Lh-16 text-BlackColor" >Equity funds</p>
            <v-divider  class="mt-2 paddingTopcustom2px"  width="24px"  color="#000" />
            <p class="mt-3 mb-0 fs-12 font-weight-medium  Lh-16 text-666Color" >395 funds</p>
            <p class="mb-1 paddingTopcustom2px fs-12 font-weight-medium Lh-16 text-GreenColor"> 18 recommended</p>
          </v-card>
        </div>
      </div>
      </div>
    <v-row class="pt-6">
      <v-col cols="12" md="9" class="pr-md-8">
        
        <v-card class="border1 " outlined>
          <v-toolbar class="mt-3 pl-2" elevation="0" color="white">
            <img class="mb-auto" src="@/assets/MutualFund/savetaxes.svg" alt="otherBonds-svg" />
            <div class="mb-auto pl-5">
              <p class="mb-0 text-start fs-20 text-BlackColor fw-559 Lh-16 Ls-0_4" >Others Bonds</p>
              <p class="mb-0 text-start pt-1 text-666Color fs-12 font-weight-medium Lh-14">Stable income and growth</p>
            </div>
            <v-spacer></v-spacer>
            <v-list class="mr-7 pt-0 mb-auto">
              <v-list-item class="pl-0 pa-0" style="min-height: 0px;">
                <img alt="listView-svg" class="" :src="require('@/assets/BondsImgs/ListViewoterBond.svg')" width="16px" height="16px" />
                <v-list-item-content class="pl-2 pa-0">
                  <v-list-item-title class="text-start text-BlackColor fs-16 fw-559 Lh-14">46 Bonds</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
                <v-list-item-title class="text-start pt-1 text-GreenColor fs-12 fw-559 Lh-16" >2 recommended</v-list-item-title>
            </v-list>
            <v-text-field  class=" mr-6" height="36px" background-color="#F1F3F8"  solo rounded flat dense style="max-width:216px"> 
              <template v-slot:prepend-inner>
                <img alt="search-icon" class="shrink" src="@/assets/searchicon.svg" width="20px"  height="18px" />
              </template>
              <template v-slot:label>
               <p class="LabelclassCustom">Search funds</p>
              </template>
            </v-text-field>
          </v-toolbar>
          <v-data-table   :headers="MFHeaders" 
            item-key="id"  class="elevation-0 mt-1 " hide-default-footer >
            <template v-slot:footer>
                  <v-divider></v-divider>
                  <div class="text-center" >
                    <v-btn text  dark class="my-1 text-none" @click="MFCatShowmore =!MFCatShowmore">
                      <span v-if="MFCatShowmore" class="text-blueColor fs-14 fw-559 Lh-16">More tax saving funds</span> 
                      <span v-else class="text-blueColor fs-14 fw-559 Lh-16">Show Less tax saving funds</span> 
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
                <p class=" my-auto">{{ header.text }}</p>
                <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn   v-bind="attrs" v-on="on"   class="pa-0 ml-auto " width="fit-content" icon>
                                <v-icon color="black" size="19">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in mfmenuitems" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
              </div>
         </template>
            <template v-slot:body>
            <tbody>
                  <tr @mouseover="selectItem(d)" @mouseleave="unSelectItem(d)" v-for="(d,index) in MFCatShowmore ? 5 : 10" :key="d">
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
        </v-card>
      </v-col>
      <v-col cols="12" md="3" class="pr-2 mFCatmenuIconActiveBac">
        <v-toolbar class="mb-4 MFCATToolBarPaddingReduce pb-0 pr-3" elevation="0" color="white" height="fit-content">
          <p class="mb-0 text-BlackColor fs-16 fw-559 Lh-16 Ls-032 mb-auto"> Filters</p>
          <v-spacer></v-spacer>
          <v-btn text class="pa-1 text-none mb-auto text-blueColor fs-14 fw-559 Lh-16 Ls-0-28" min-width="fit-content" height="fit-content" >Reset</v-btn>
          <v-menu left offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="pa-0 mb-auto" icon v-bind="attrs" v-on="on" max-width="fit-content"  height="fit-content"> 
                <v-icon color="#000000" size="20">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in mfmenuitems" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-expansion-panels class="CustamMenudownMinHeight" v-model="ExPansePanelModel" flat multiple>
          <v-expansion-panel class="">
            <v-expansion-panel-header class="pa-0 MinHeightcus" >
              <v-row>
                <v-col class="" cols="9">
                  <p class="mb-0 text-666Color fs-14 font-weight-medium Lh-16" >Fund category</p>
                </v-col>
                <v-col class="pl-1" cols="3">
                  <p class="mb-0  Lh-16 fs-14 text-666Color font-weight-medium "><span class="mr-1">{{ selected.length }}</span><span class="">items</span></p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-divider class="border1Divider"></v-divider>
            <v-expansion-panel-content class="pa-0 mt-4 pl-2">
              <v-checkbox class="rounded-xl pa-0 ma-0 pt-2 MFCatCheckBoxErrorMsgHeiCus MFCatCheckBoxRippleFalse" v-for="checkboxs in OtherBondsTenureYear" :key="checkboxs" v-model="selected" :value="checkboxs">
                <template v-slot:label>
                  <span class="text-BlackColor fs-12 font-weight-medium Lh-14">{{ checkboxs }}</span>
                </template>
              </v-checkbox>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="">
            <v-expansion-panel-header class="pa-0">
              <v-row>
                <v-col class="" cols="9">
                  <v-badge class="pa-0" color="transparent"> <template v-slot:badge>
                      <v-avatar color="#0037B7" size="6"></v-avatar>
                    </template>
                    <p class="mb-0 fs-14 Lh-16 font-weight-medium text-BlackColor" >Asset manager</p>
                  </v-badge>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0  ml-n2 text-666Color fs-14 Lh-16 font-weight-medium"><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header><v-divider class="mt-n2"></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="pt-1">
            <v-expansion-panel-header class="pa-0">
              <v-row>
                <v-col class="" cols="9">
                  <p class="mb-0 fs-14 Lh-16 font-weight-medium text-666Color">Sub category </p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0 ml-n2 fs-14 Lh-16 font-weight-medium text-666Color"><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header><v-divider class="mt-n2 border1Divider "></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="pt-1">
            <v-expansion-panel-header class="pa-0">
              <v-row>
                <v-col class="" cols="9">
                  <p class="mb-0 fs-14 Lh-16 font-weight-medium text-666Color" >Dividend type</p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0 ml-n2 fs-14 Lh-16 font-weight-medium text-666Color" ><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-divider class="mt-n2 border1Divider"></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="pt-1">
            <v-expansion-panel-header class="pa-0">
              <v-row>
                <v-col class="" cols="9">
                  <p class="mb-0 fs-14 Lh-16 font-weight-medium text-666Color" >Expense ratio </p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0 ml-n2 fs-14 Lh-16 font-weight-medium text-666Color" ><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-divider class="mt-n2 border1Divider"></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="" >
            <v-expansion-panel-header class="pa-0 fs-14 Lh-16 font-weight-medium text-666Color" >Min. purchase amount</v-expansion-panel-header>
            <v-expansion-panel-content class="pl-3 pr-6">
<v-row class="py-5">
  <v-col cols="2 " class="pa-0" align="end">
    <p class="mb-0 text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7 text-uppercase"> MIN</p>
    <p class="mb-0 text-BlackColor fs-13 font-weight-medium Lh-16"> 0.0%</p>
  </v-col>
  <v-col cols="8" class="pa-0 px-1">
    <v-range-slider class="pt-1" v-model="range" :max="max" :min="min" hide-details  thumb-color="#FF1717" track-color="#FF1717">
      </v-range-slider>
  </v-col>
  <v-col cols="2" class="pl-0 py-0">
    <p class="mb-0 text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7 text-uppercase"> MAX</p>
    <p class="mb-0 text-BlackColor fs-13 font-weight-medium Lh-16">3.0%</p>
  </v-col>
</v-row>
            </v-expansion-panel-content>
            <v-divider class="border1Divider"></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="" >
            <v-expansion-panel-header class="pa-0 fs-14 Lh-16 font-weight-medium text-666Color" >AUM</v-expansion-panel-header>
            <v-expansion-panel-content class="pl-3 pr-5">
<v-row class="py-5">
  <v-col cols="2 " class="pa-0" align="end">
    <p class="mb-0 text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7 text-uppercase"> MIN</p>
    <p class="mb-0 text-BlackColor fs-13 font-weight-medium Lh-16"> ₹0 <span class="text-666Color fs-13 font-weight-medium Lh-16">Cr</span></p>
  </v-col>
  <v-col cols="7" class="pa-0 px-1">
    <v-range-slider class="pt-1" v-model="range" :max="max" :min="min" hide-details  thumb-color="#FF1717" track-color="#FF1717">
      </v-range-slider>
  </v-col>
  <v-col cols="3" class="pl-0 py-0">
    <p class="mb-0 text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7 text-uppercase"> MAX</p>
    <p class="mb-0 text-BlackColor fs-13 font-weight-medium Lh-16"> ₹100k <span class="text-666Color fs-13 font-weight-medium Lh-16">Cr</span></p>
  </v-col>
</v-row>
            </v-expansion-panel-content>
            <v-divider class="border1Divider"></v-divider>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      MFCatShowmore:true,
      ExPansePanelModel: [0,5,6],
      selectedItem: false,
      selected: [],
      mfmenuitems: [ { title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me 2' },
      ],
      OtherBondsTenureYear: [
        "Debt funds", "Hybrid funds", "Equity funds", "Sectoral funds", "Other funds"
      ],
      MFHeaders: [
          { text: 'Fund name', align: 'start',sortable: false,value: 'CommoName',class:"TableHeaderFntColor",width:"42%"},
          { text: 'AUM', value: 'Aum' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'TER', value: 'TerPercentage' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Min. Invest', value: 'LastPrice', sortable: false,class:"TableHeaderFntColor" },
          { text: '1yr CAGR', value: 'ch' , sortable: false,class:"TableHeaderFntColor" },
          { text: '3yr CAGR', value: 'ThreeYearChange' , sortable: false, width:"%" , class:"TableHeaderFntColor HeaderPadingAlinRightcus"},
        ],
    };
  },
  methods: {
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
.CustamMenudownMinHeight {
.mdi-chevron-down::before {
  margin:0px !important;
  color:#000 !important;
 }
 .v-expansion-panel--active > .v-expansion-panel-header {
min-height:30px !important;
 }
}

.MFICatHiseScroolHorizantal {
  ::-webkit-scrollbar {
      display: none !important;
  }
} 
.MFCATToolBarPaddingReduce {
    .v-toolbar__content {
        padding-left: 0px !important;
        padding-bottom:0px !important;
        padding-top:0px !important; 
    }
}
.mFCatmenuIconActiveBac {
  .v-btn::before {
  background-color: transparent !important;
}
}
.MFCatCheckBoxErrorMsgHeiCus {
.v-messages { 
  min-height:0px !important;
}
}
.MFCatCheckBoxRippleFalse {
.v-input--selection-controls__ripple { 
    width: 0px !important;
}
}

</style>