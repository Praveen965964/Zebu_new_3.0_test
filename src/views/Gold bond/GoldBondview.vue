<template>
  <div>
    <div class="pl-md-0 pl-4 pr-md-0 pr-1 d-none d-sm-block">
      <v-row no-gutters>
        <v-col cols="12" md="9" class="pr-md-8 pt-5">
          <v-card class="pl-7 pr-10 elevation-0 py-6 elevation-0" color="#148564" height="220px">
            <v-row style="position:relative">
              <v-col cols="4" class="pr-0">
                <p class="mb-4 fs-36 text-WhiteColor Lh-32 fw-559 Ls-1" >
                  Invest in Bonds</p>
                <p class="mb-lg-8 mb-2 text-WhiteColor fs-16 font-weight-regular Lh-18 Ls-032 opc-08">
                  Handpicked bonds from<br> our experts that meet your<br> investment needs</p>
                <v-btn class="text-capitalize brd-32 elevation-0" color="#000">
                  <p class="mb-0 text-WhiteColor fs-14 fw-559 Lh-20  Ls-0-28" >
                    Invest in Bonds</p>
                </v-btn>
              </v-col>
              <v-col cols="8">
                <div>
                  <v-row style="position:absolute;top:40px;right:">
                    <v-col cols="4" class="pl-md-2 pr-md-2 pl-0 pr-0">
                      <v-card class="text-center pb-4 pt-6 px-lg-7 px-md-5 px-sm-6 brd-16"
                        style="background: linear-gradient(270deg, #FFF 77.04%, #F6F6F6 115%), #FFF;box-shadow: 0px 38.5185px 25.4815px 0px rgba(83, 30, 0, 0.04), 0px 20px 13px 0px rgba(83, 30, 0, 0.04), 0px 8.14815px 6.51852px 0px rgba(83, 30, 0, 0.03), 0px 1.85185px 3.14815px 0px rgba(83, 30, 0, 0.02);">
                        <img alt="investGovtSecurits-svg" class="" src="@/assets/BondsImgs/investGovtSecurits.svg" >
                        <p class="mb-0 pt-5 text-BlackColor fs-16 fw-559 Lh-16 Ls-032" > Invest in Government Securities</p>
                      </v-card>
                    </v-col>
                    <v-col cols="4" class="pl-2 pr-2 pl-md-2 pr-md-2 pl-0 pr-0">
                      <v-card class="text-center pb-4 pt-6 px-lg-5 px-md-3 px-sm-4 brd-16" style="background: linear-gradient(270deg, #FFF 77.04%, #F6F6F6 115%), #FFF;box-shadow: 0px 38.5185px 25.4815px 0px rgba(83, 30, 0, 0.04), 0px 20px 13px 0px rgba(83, 30, 0, 0.04), 0px 8.14815px 6.51852px 0px rgba(83, 30, 0, 0.03), 0px 1.85185px 3.14815px 0px rgba(83, 30, 0, 0.02);">
                        <img alt="InvestGoldBond-svg" class="" src="@/assets/BondsImgs/InvestingSovereignGoldBonds.svg" />
                        <p class="mb-0 pt-5 text-BlackColor fs-16 fw-559 Lh-16 Ls-032" > Investing in Sovereign Gold Bonds is easy</p>
                      </v-card>
                    </v-col>
                    <v-col cols="4" class="pl-2 pl-md-2 pr-md-2 pl-sm-0 pr-md-0 ">
                      <v-card class="text-center pb-4 pt-6 px-lg-6 px-sm-7 brd-16" style="background: linear-gradient(270deg, #FFF 77.04%, #F6F6F6 115%), #FFF;box-shadow: 0px 38.5185px 25.4815px 0px rgba(83, 30, 0, 0.04), 0px 20px 13px 0px rgba(83, 30, 0, 0.04), 0px 8.14815px 6.51852px 0px rgba(83, 30, 0, 0.03), 0px 1.85185px 3.14815px 0px rgba(83, 30, 0, 0.02);">
                        <img alt="CheckoutTaxFreebonds-svg" class="" src="@/assets/BondsImgs/CheckoutTaxFreebonds.svg" />
                        <p class="mb-0 pt-5 text-BlackColor fs-16 fw-559 Lh-16 Ls-032" > Checkout tax free bonds in market </p>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <div class="d-flex pt-11">
            <p class="fs-20 fw-559 Lh-16 Ls-0_4 text-BlackColor my-auto" >Top Bonds</p>
            <v-text-field hide-details class="TopBondsTextfeld ml-auto mr-3" background-color="#F1F3F8"
              label="Search bonds" solo rounded flat dense style="max-width:216px">
              <template v-slot:prepend-inner>
                <img alt="Search_icon" class="mt-1 shrink" src="@/assets/BondsImgs/searchicon.svg" width="28px"  height="17px" />
              </template>
            </v-text-field>
            <v-card color="#F1F3F8" class=" elevation-0  pr-3 pl-4 brd-24" height="38px" >
              <v-row>
                <v-col cols="9" class="text-start pr-0">
                  <p class="mb-0 pt-3 fs-14 font-weight-medium text-666Color Lh-16">Active bonds</p>
                </v-col>
                <v-col cols="3" class="pl-1">
                  <v-btn height="12px" class="pa-0 rounded-xl mt-2" text style="min-width:7px;">
                    <v-icon class="" size="15" color="#212121"> mdi-chevron-up </v-icon>
                  </v-btn>
                  <v-btn height="10px" class="pa-0 rounded-xl mt-n6" text style="min-width:7px;">
                    <v-icon class="m" size="15" color="#000000"> mdi-chevron-down </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </div>
          <v-tabs background-color="transparent" class="" color="black" v-model="tabtopgainer">
            <v-tab v-for="tabss in TradeActionTab" :key="tabss" class="" @click="Topbondtabclick(tabss)">
              <span class=" text-none pr-0 pl-0 fs-14 fw-559 Lh-16 Ls-0-28">{{ tabss }} </span>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabtopgainer">
            <v-tab-item>
              <v-data-table  :headers="BondsTableHeaders" :search="search"  :items-per-page="ItemPrePageBond" item-key="id" v-model="selectedRows" class="elevation-0 brd-4 border1 mb-2"   hide-default-footer>
                <template v-slot:footer>
                  <v-divider></v-divider>
                  <div class="text-center" v-if="Showmore">
                    <v-btn text  dark class="my-1 text-none" @click="ShowmoreFun()">
                      <span class="text-blueColor fs-14 fw-559 Lh-16">Show more bonds</span> 
                    </v-btn>
                  </div>
                  <div class="text-center" v-if="ShowLess">
                    <v-btn text dark class="my-1 text-none" @click="ShowLessFun()">
                      <span class="text-blueColor fs-14 fw-559 Lh-16" > Show Less bonds</span>
                    </v-btn>
                  </div>
                </template>
                <template v-slot:body>
      <tbody>
                  <tr @click="$router.push('goldbonddetailes')" @mouseover="selectItem(item)" @mouseleave="unSelectItem(item)" v-for="d in 7" :key="d">
                    <td class="pt-3 pb-6 pr-0">
                      <p class="text-BlackColor fs-14 fw-559 Lh-16 ">Housing Development Corporation</p>
                      <div class="display-flex row pt-1">
                        <v-card  :color="item === selectedItem ? 'white' : '#F1F3F8'" 
                          height="18px" width="" class="px-2 py-1 ml-3" elevation="0">
                          <p class=" mb-0 text-center text-666Color fs-9 Lh-12 fw-469 Ls-0-9"> SECURED </p>
                        </v-card>
                        <v-card :color="item === selectedItem ? 'white' : '#F1F3F8'"  height="18px" class="px-2 py-1 ml-1" elevation="0">
                          <p class=" mb-0 text-center text-666Color fs-9 Lh-12 fw-469 Ls-0-9" > REGULARINCOME </p>
                        </v-card>
                      </div>
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
            </v-tab-item>
          </v-tabs-items>
        </v-col>
        <v-col cols="12" md="3" class="pr-0 pl-3">
          <v-toolbar class="toolbar-contant" elevation="0" color="white">
            <v-toolbar-title class="fs-16 fw-559 text-BlackColor Lh-16 Ls-032" >Bonds Watchlists</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu left offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="" icon>
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
          <div class="BondsWatchlist">
            <v-select  label="Your watchlist" append-icon="mdi-chevron-down" class="rounded-lg " color="gray" dense>
              <template v-slot:append>
                <p class="mb-1 fs-14 font-weight-medium Lh-16 text-666Color" > 0 items <v-icon color="black"> mdi-chevron-down</v-icon> </p>
              </template>
            </v-select>
          </div>
          <div class="text-center mt-13 pb-3">
            <img class="" src="@/assets/BondsImgs/BondFavAdd.svg" width="32px" height="28px" />
            <p class="font-weight-medium px-3 text-BlackColor fs-16 Lh-20 Ls-032 pt-3">Now track your favorite bonds by adding them to your watchlist.</p>
          </div>
          <div class=" mx-auto mt-16 pt-16 pt-sm-5 mb-1 pl-1">
            <div class="display-flex row mx-auto  justify-center">
              <img class="" src="@/assets/BondsImgs/BondCreate_watchlist.svg" width="12px" alt="create-watchlist-svg"/>
              <p class="text-center mb-0 ml-1 fs-14 fw-559 text-blueColor Lh-16" > Create new watchlist</p>
            </div>
          </div>
          <v-divider class="mt-6 border1Divider" ></v-divider>
          <v-toolbar class="mt-4 toolbar-contant" elevation="0" color="white">
            <v-toolbar-title class="text-BlackColor fs-16 fw-559 Lh-16 Ls-032">Bonds in news</v-toolbar-title>
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
      selectedItem: false,
      Showmore: true,
      ShowLess: false,
      ItemPrePageBond: 6,
      tabtopgainer: null,
      selectedRows: [],
      itemsmenu: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' },
      ],
      TradeActionTab: [
        "Govt. bonds", "State bonds", "Sovereign Gold Bond", "Others Bond"
      ],
      BondsTableHeaders: [
        { text: 'Bonds name', align: 'start', sortable: false, value: 'CommoName', class: "TableHeaderFntColor" },
        { text: 'Tenure',  sortable: false, class: "TableHeaderFntColor" },
        { text: 'Min. Invest.',  sortable: false, class: "TableHeaderFntColor" },
        { text: 'Yield(%)',  sortable: false, class: "TableHeaderFntColor" },
        { text: 'Coupon rate',sortable: false, class: "TableHeaderFntColor" },
        { text: 'Frequency', sortable: false, class: "TableHeaderFntColor" },
      ],
      Bondsinnews: [
        {
          title: "INR Strengthens Against USD, Dollar Index Slides; March USD/INR Levels?",
          subtitle: "22 May, 2023",
          subtitleone: "₹1,798.05",
          bulliesh: "Bullish",
          image: require('@/assets/zebu-stocks/arrowgreen.svg'),
        },
        {
          title: "HDFC’s exit from corporate bond market brings cheer to smaller issuers",
          subtitle: "22 May, 2023",
          bank: "SBIN",
          subtitleone: "₹175.05",
          bulliesh: "Bullish",
          image: require('@/assets/zebu-stocks/arrowgreen.svg'),
        },
        {
          title: "Bank bond issuance may fall to Rs 90,000 crore in FY24, says ICRA",
          subtitle: "22 May, 2023",
          bank: "Kotak Bank",
          subtitleone: "₹2,347.05",
          bulliesh: "Bearish",
          image: require('@/assets/zebu-stocks/redarrow.svg'),
        },
        {
          title: "Corporate bond issuances nosedive in April on low requirement of funds",
          subtitle: "22 May, 2023",
          bank: "HDFC bank",

          subtitleone: "₹1,798.05",
          bulliesh: "Bullish",
          image: require('@/assets/zebu-stocks/arrowgreen.svg'),
        },
        {
          title: "Are corporate green bonds losing sheen? Issuances halve since 2022 due",
          subtitle: "22 May, 2023",
          bank: "SW Solar",
          subtitleone: "₹175.05",
          bulliesh: "Bullish",
          image: require('@/assets/zebu-stocks/arrowgreen.svg'),
        },
        {
          title: "3 Stocks to Buy Now That Are Yielding 3.5% to 8.8%",
          subtitle: "22 May, 2023",
          bank: "ONGC",
          subtitleone: "₹2,347.05",
          bulliesh: "Bearish",
          image: require('@/assets/zebu-stocks/redarrow.svg'),
        },
      ],
    };
  },
  methods: {
    Topbondtabclick(val) {
      if (val == "Others Bond") {
        this.$router.push('goldbondcategory')
      }
    },
    readmore() {
      this.Bondsinnews.push(this.Bondsinnews[0])
    },
    ShowmoreFun() {
      this.ItemPrePageBond = this.BondsItems.length
      this.Showmore = false
      this.ShowLess = true
    },
    ShowLessFun() {
      this.ItemPrePageBond = 6
      this.Showmore = true
      this.ShowLess = false
    },
    selectItem(item) {
      this.selectedItem = item
    },
    unSelectItem() {
      this.selectedItem = false
    },
  },
  components: {},
}
</script>
<style lang="scss">
.TopBondsTextfeld .v-label {
  padding-top:2px !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 469 !important;
  line-height: 16px !important;
}
.BondsWatchlist {
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
.btnBackgroundNone {
.v-btn::before {
  background-color: transparent !important;
}
}
</style>