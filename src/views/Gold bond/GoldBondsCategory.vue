<template>
  <div class="">
    <v-row>
      <v-col cols="12" md="9" class="pr-md-8">
        <v-card class="mt-5 " outlined style="border: 1px solid #efeef3;">
          <v-toolbar class="mt-3" elevation="0" color="white">
            <v-list class="pt-" >
              <v-list-item class="">
                <img class="" src="@/assets/BondsImgs/otherBonds.svg" alt="otherBonds-svg" />
                <v-list-item-content class="pl-5 pt-0">
                  <v-list-item-title class="text-start fs-20 text-BlackColor fw-559 Lh-16 Ls-0_4" >Others Bonds</v-list-item-title>
                  <v-list-item-subtitle class="text-start pt-1 text-666Color fs-12 font-weight-medium Lh-14">Stable income and growth
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <v-list class="mr-7 pt-0">
              <v-list-item class="pl-0 pa-0" style="min-height: 0px;">
                <img alt="listView-svg" class="" :src="require('@/assets/BondsImgs/ListViewoterBond.svg')" width="16px" height="16px" />
                <v-list-item-content class="pl-2 pa-0">
                  <v-list-item-title class="text-start text-BlackColor fs-16 fw-559 Lh-14">10 Bonds</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
                <v-list-item-title class="pt-1 text-GreenColor fs-12 fw-559 Lh-16" >2 recommended</v-list-item-title>
            </v-list>
            <v-text-field  class="BondsCatTextfiledLab mt-4 mr-4" height="36px" background-color="#F1F3F8" label="Search bonds" solo rounded flat dense style="max-width:216px"> 
              <template v-slot:prepend-inner>
                <img alt="search-icon" class="shrink" src="@/assets/BondsImgs/searchicon.svg" width="20px"  height="18px" />
              </template>
            </v-text-field>
          </v-toolbar>
          <v-data-table dense  :headers="OtherBondsHeaders" 
            item-key="id"  class="elevation-0 mt-1 " hide-default-footer >
            <template v-slot:body>
            <tbody>
                  <tr @mouseover="selectItem(d)" @mouseleave="unSelectItem(d)" v-for="(d,index) in 7" :key="d">
                    <td class="pt-3 pb-6 pr-0" style="width:340px;">
                  <v-row>
                    <v-col cols="9" class="pr-0">
                      <p class="text-BlackColor fs-14 fw-559 Lh-16 pt-1"  :class="index== '0' ? 'mb-7' : 'mb-5' ">Aditya Birla Housing Finance Limited</p>
                      <div class="display-flex row">
                        <v-card :color="d === selectedItem ? 'white' : '#F1F3F8'"   height="18px" class="px-2 py-1 ml-2" elevation="0">
                          <p class="mb-0 text-center fs-9 text-666Color font-weight-medium Lh-12 Ls-0-9" >SUBORDINATE</p>
                        </v-card>
                      </div>
                    </v-col>
                    <v-col cols="3" class="pl- pr-0 pt-" >
                      <v-card  v-if="index == '0'" class="px-2 py-1 rounded-lg elevation-0" color="#ECF5EA" width="fit-content">
                        <p class="mb-0 fs-12 fw-559 Lh-16 text-GreenColor">Reco</p>
                      </v-card>
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
                    <td class="pb-6">
                      <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16">26 months</p>
                    </td>
                    <td class="pb-6">
                      <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16" >₹1,00,411 </p>
                    </td>
                    <td class="pb-6">
                      <p class="mb-0 text-GreenColor font-weight-medium fs-13 Lh-16">20.2%</p>
                    </td>
                    <td class="pb-6"><span class="fs-13 text-BlackColor font-weight-medium Lh-16">8.23%</span>
                    </td>
                    <td class="pb-6"><span class="fs-13 text-BlackColor font-weight-medium Lh-16">Yearly</span></td>
                  </tr>
            </tbody>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" class="pr-1 menuIconActiveBac">
        <v-toolbar class="ToolBarPaddingReduce pr-4 pb-0" elevation="0" color="white">
          <v-toolbar-title class="text-BlackColor fs-16 fw-559 Lh-16 Ls-032"  >Filters</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text class="pa-1 text-none" min-width="fit-content" height="fit-content" ><span class="text-blueColor fs-14 fw-559 Lh-16 Ls-0-28">Reset</span></v-btn>
          <v-menu left offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="pa-0 " icon v-bind="attrs" v-on="on" max-width="fit-content"  height="fit-content"> 
                <v-icon color="#000000" size="20">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-expansion-panels class="" v-model="ExPansePanelModel" flat multiple>
          <v-expansion-panel class="">
            <v-expansion-panel-header class="pa-0" style="min-height:30px">
              <v-row>
                <v-col class="" cols="9">
                  <p class="mb-0 text-666Color fs-14 font-weight-medium Lh-16" >Tenure Year</p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0 ml-n2 Lh-16 fs-14 text-666Color font-weight-medium"><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-divider class="border1Divider"></v-divider>
            <v-expansion-panel-content class="pa-0 mt-4 pl-2">
              <v-checkbox class="rounded-xl pa-0 ma-0 pt-2 CheckBoxErrorMsgHeiCus" v-for="checkboxs in OtherBondsTenureYear" :key="checkboxs" v-model="selected" :value="checkboxs">
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
                    <p class="mb-0 fs-14 Lh-16 font-weight-medium text-BlackColor" >Coupon Frequency</p>
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
                  <p class="mb-0 fs-14 Lh-16 font-weight-medium text-666Color">Security Statues </p>
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
                  <p class="mb-0 fs-14 Lh-16 font-weight-medium text-666Color" >Risk Profile </p>
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
                  <p class="mb-0 fs-14 Lh-16 font-weight-medium text-666Color" >Return Type </p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0 ml-n2 fs-14 Lh-16 font-weight-medium text-666Color" ><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header><v-divider class="mt-n2 border1Divider"></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="" >
            <v-expansion-panel-header class="pa-0 fs-14 Lh-16 font-weight-medium text-666Color" >Min.rate criteria</v-expansion-panel-header>
            <v-expansion-panel-content class="pa-0">
              <v-range-slider v-model="range" :max="max" :min="min" hide-details class="mt-1" thumb-color="#FF1717" track-color="#FF1717" style="border: #D9D9D9;">
                <template v-slot:prepend>
                  <v-list-item class="pa-0 mt-n5">
                    <v-list-item-content>
                      <v-list-item-title class="text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7">MIN</v-list-item-title>
                      <v-list-item-subtitle class="text-BlackColor fs-13 font-weight-medium Lh-16" >0.0%</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
                <template v-slot:append>
                  <v-list-item class="mt-n5">
                    <v-list-item-content>
                      <v-list-item-title class="text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7" >MAX</v-list-item-title>
                      <v-list-item-subtitle class=" text-BlackColor fs-13 font-weight-medium Lh-16" >3.0%
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-range-slider>
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
      ExPansePanelModel: [0],
      selectedItem: false,
      selected: [],
      itemsmenu: [ { title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me 2' },
      ],
      OtherBondsTenureYear: [
        "0 - 3 yrs", "3 - 7 yrs", "7 -12 Yrs", "12 - 16 yrs", "16+ yrs"
      ],
      OtherBondsHeaders: [
          { text: 'Bonds name', align: 'start',sortable: false,value: 'CommoName',class:"OtherheaderFOntSize"},
          { text: 'Tenure', value: 'ExpiryDate' , sortable: false,class:"OtherheaderFOntSize" },
          { text: 'Min. Invest.', value: 'Lots' , sortable: false,class:"OtherheaderFOntSize" },
          { text: 'Yield(%)', value: 'LastPrice', sortable: false,class:"OtherheaderFOntSize" },
          { text: 'Coupon rate', value: 'ch' , sortable: false,class:"OtherheaderFOntSize" },
          { text: 'Frequency', value: 'Chgpercentage' , sortable: false, class:"OtherheaderFOntSize"},
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
.ToolBarPaddingReduce {
    .v-toolbar__content {
        padding-left: 0px !important;
        padding-bottom:0px !important;
        padding-top:0px !important; 
    }
}
.BondsCatTextfiledLab .v-label {
  padding-top:2px !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 16px !important;
}
.OtherheaderFOntSize {
  color: #666 !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  line-height: 16px !important;
}
.menuIconActiveBac {
  .v-btn::before {
  background-color: transparent !important;
}
}
.CheckBoxErrorMsgHeiCus {
.v-messages { 
  min-height:0px !important;
}
}
</style>