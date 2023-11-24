<template>
    <div>
        <v-row>
            <v-col cols="12" md="9" class="pr-md-8 mt-4">
                <v-card class="py-5 pr-2 elevation-0" color="#F1F3F8"  >
            <p class="pl-8 mb-2 fs-24 fw-559 Lh-24 text-BlackColor Ls-0_48">Featured Commodities</p>
            <p class="pl-8 fs-14 font-weight-medium Lh-20 text-666Color">Find the right real time streaming<br> commodity prices</p>
           <div class="ScrollHorizantalHide">
            <div class="pl-6 pt-3 OverfLowscroll">
            <div class="d-inline-flex">
        <v-card class="elevation-0 ml-2 py-3 pr-3 pl-4 mb-2 rounded-lg" width="173px" v-for="c in FeaturedCommodities" :key="c.title" @click="$router.push('commoditescategory')">
  <img alt="commodites-svg"  class="shrink mb-1" :src="c.image" width="46px" height="46px" />
  <p class="mb-1 fs-16 fw-559 Lh-26 text-BlackColor Ls-032" >{{c.title}}</p>
  <p class="pt-1 mb-2  fs-12 font-weight-medium Lh-14 text-666Color" >{{c.subtitle}}</p>
  <p class="mb-0 pt-3  fs-16 fw-559 Lh-26 text-BlackColor">{{c.subtitleone}}</p>
  <p class="pt-1 mb-0 fs-12 fw-559 Lh-16 text-GreenColor" >{{c.subtitletwo}}</p>
        </v-card>
           </div>
          </div>
          </div>
                </v-card>
          <p class="fs-20 fw-559 Lh-16 Ls-0_4 text-BlackColor  mt-8 " >Commodities</p>      
          <v-tabs  class="mt-5" color="black" v-model="commoditiesmodal">
                    <v-tab v-for="c in commoditiesTab" :key="c" >
                      <span class="fs-14 fw-559 Lh-16 Ls-0-28 text-none pr-0 pl-0">{{ c }} </span> </v-tab>
                </v-tabs>
                <v-tabs-items v-model="commoditiesmodal">
                    <v-tab-item>
                      <v-data-table  :headers="commoditiesHeader"  :items-per-page="ItemPerPageCommodites"
                            item-key="id" v-model="selectedRows" class="elevation-0" hide-default-footer
                            style="border: 1px solid #efeef3;background-color:white">
                            <template v-slot:footer>
                                <v-divider></v-divider>
                                <div class="text-center" v-if="ShowMoreComm">
                                    <v-btn text color="primary" dark class="ma-2 text-none" @click="ShowMoreCOmmodieFun()">
                                        <span class="text-blueColor fs-14 fw-559 Lh-16" >Show more commodities</span> 
                                    </v-btn>
                                </div>
                                <div class="text-center" v-if="ShowLessCommtes">
                                    <v-btn text color="primary" dark class="ma-2 text-none" @click="ShowLessCommoditesFun()">
                                        <span class="text-blueColor fs-14 fw-559 Lh-16"> Show Less commodities</span> 
                                    </v-btn>
                                </div>
                            </template>
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
                            <v-list-item v-for="(item, index) in CommoditesMenuItems" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
        </v-col>
       </v-row>
                            </template>
                            <template v-slot:body>
            <tbody>
                  <tr @click="$router.push('commodititesdetailes')" class="py-5 CursorPointerEnable" v-for="d in 10" :key="d">
                    <td class=" pr-0" >
               <p class="mb-0 fs-14 text-BlackColor fw-559 Lh-16">Silverm </p>
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
                      <p class="text-center mt-16">No Data</p>
                  </v-tab-item>
                  <v-tab-item>
                      <p class="text-center mt-16">No Data</p>
                  </v-tab-item> 
                  </v-tabs-items>
            </v-col>
            <v-col cols="12" md="3" class="pr-0 pl-3">
          <v-toolbar class="CommoditesToolbarPaddReduce" elevation="0" color="white">
            <v-toolbar-title class="fs-16 fw-559 text-BlackColor Lh-16 Ls-032" >Commodities watchlists</v-toolbar-title>
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
          <div class="CommoditesWatchlistLabel">
            <v-select  label="Your watchlist" append-icon="mdi-chevron-down" class="rounded-lg " color="gray" dense>
              <template v-slot:append>
                <p class="mb-1 fs-14 font-weight-medium Lh-16 text-666Color" > 0 items <v-icon color="black"> mdi-chevron-down</v-icon> </p>
              </template>
            </v-select>
          </div>
          <div class="text-center mt-13 pb-3">
            <img class="" src="@/assets/BondsImgs/BondFavAdd.svg" width="32px" height="28px" />
            <p class="font-weight-medium pl-2 text-BlackColor fs-16 Lh-20 Ls-032 pt-3">Now track your favourite Commodities by adding them to watchlist.</p>
          </div>
          <div class=" mx-auto mt-16 pt-16 pt-sm-5 mb-1 pl-1">
            <div class="display-flex row mx-auto  justify-center">
              <img class="" src="@/assets/BondsImgs/BondCreate_watchlist.svg" width="12px" alt="create-watchlist-svg"/>
              <p class="text-center mb-0 ml-1 fs-14 fw-559 text-blueColor Lh-16" > Create new watchlist</p>
            </div>
          </div>
          <v-divider class="mt-6 border1Divider" ></v-divider>
          <v-toolbar class="mt-4 CommoditesToolbarPaddReduce" elevation="0" color="white">
            <v-toolbar-title class="text-BlackColor fs-16 fw-559 Lh-16 Ls-032">Commodities in news</v-toolbar-title>
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
          <v-card class="elevation-0 mb-6" v-for="bn in CommoditesInNews" :key="bn.title">
            <v-card class="mt-2 elevation-0">
              <div class="">
                <p class="pl-2 mb-1 fs-14 text-BlackColor font-weight-medium Lh-18"
                  style="border-left: 2.5px solid #0037B7;">{{ bn.title}}<br><span class="fs-10 text-999Color Lh-12 font-weight-medium">22 May, 2023</span>
                </p>
              </div>
            </v-card>
            <v-toolbar class="mb- py-1 CommoditesToolbarPaddReduce brd-4 mt-2" elevation="0" color="#F1F3F8" height="24px" >
                        <v-toolbar-title class="pl-3 text-BlackColor fs-12 fw-559 Lh-16 ">{{ bn.bank }}</v-toolbar-title>
                        <v-toolbar-title class=" ml-2 text-666Color fs-12 font-weight-medium Lh-16">{{ bn.subtitleone }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                            <img alt="" class="shrink mr-1" :src="bn.image" height="8px" width="8px" />
                            <span class="text-RedColor fs-12 fw-559 Lh-16 pr-3" v-if="bn.bulliesh == 'Bearish'" > {{ bn.bulliesh
                            }}</span>
                            <span class="text-GreenColor fs-12 fw-559 Lh-16 pr-3" v-else style="color:#43A833"> {{ bn.bulliesh }}</span>
                    </v-toolbar>
          </v-card>
          <div class="text-center pb-5 ButtonOrMenuRippleNone">
            <v-btn class="text-none" ripple="false"   text @click="readmore()">
              
              <img class="" src="@/assets/BondsImgs/ReadOtherNews.svg" alt="ReadeOtherNews-svg" width="14px" height="14px" />
              <p class="pl-1 mb-0 text-blueColor fs-14 fw-559 Lh-16" >Read other news </p>
            </v-btn>
            <v-divider class="mt- border1Divider" ></v-divider>
          </div>
        </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      ItemPerPageCommodites:5,
      ShowMoreComm:true,
      commoditiesmodal:null,
      commoditesHeaders:["Commodities Name","Expiry Date","Lots","Last Price","Chg","Chg%",],
          FeaturedCommodities : [
{
  image: require('@/assets/commodities/agriculture.png'),
  title: "Agriculture",
  subtitle: "Fine-tune price exposure on benchmark products",
  subtitleone: "17 commodities",
  subtitletwo: "3 recommended",
},
{
  image: require('@/assets/commodities/energy.png'),
  title: "Energy",
  subtitle: "Includes crude oil,  gasoline, natural gas.",
  subtitleone: "38 commodities",
  subtitletwo: "2 recommended",
},
{
  image: require('@/assets/commodities/industry.png'),
  title: "Industrial",
  subtitle: "Engage in benchmarking to get the best contract ",
  subtitleone: "46 commodities",
  subtitletwo: "1 recommended",
},
{
  image: require('@/assets/commodities/metales.png'),
  title: "Metals",
  subtitle: "Hybrid of active and passive",
  subtitleone: "23 commodities",
  subtitletwo: "5 recommended",
},
{
  image: require('@/assets/commodities/steak.png'),
  title: "Meats",
  subtitle: "Hedge risk, facilitate price discovery and ",
  subtitleone: "8 commodities",
  subtitletwo: "6 recommended",
},
             ],
commoditiesTab: ["Most active", "Top commodities", "OI Change"],
commoditiesHeader: [
          { text: 'Commodities Name', align: 'start',sortable: false,class:"TableHeaderFntColor"},
          { text: 'Expiry Date', value: 'ExpiryDate' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Lots.', value: 'Lots' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Last Price', value: 'LastPrice', sortable: false,class:"TableHeaderFntColor" },
          { text: 'Chg', value: 'ch' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Chg%', value: 'Chgpercentages' , sortable: false, class:"TableHeaderFntColor"},
          { text: 'Day High & Low', value: 'DayHighLow' , sortable: false, class:"TableHeaderFntColor"},
        ],
        CommoditesInNews: [
        {
          title: "The COMEX Gold futures are stabilising above $1980 per ounce mark as the...",
          subtitle: "22 May, 2023",
          subtitleone: "₹1,798.05",
          bulliesh: "Bullish",
          bank: "GOLDM",
          image: require('@/assets/zebu-stocks/arrowgreen.svg'),
        },
        {
          title: "Oil prices up on China economic support pledge, tighter supply",
          subtitle: "22 May, 2023",
          bank: "Crudeoilm",
          subtitleone: "₹175.05",
          bulliesh: "Bullish",
          image: require('@/assets/zebu-stocks/arrowgreen.svg'),
        },
        {
          title: "Gold futures on the MCX have gained by 2.78% or Rs 1,619 per 10 grams.",
          subtitle: "22 May, 2023",
          bank: "SILVERMIC",
          subtitleone: "₹2,347.05",
          bulliesh: "Bearish",
          image: require('@/assets/zebu-stocks/redarrow.svg'),
        },
        {
          title: "Zinc the new gold for your portfolio, can hit Rs 90,000 soon",
          subtitle: "22 May, 2023",
          bank: "ZINCMINI",

          subtitleone: "₹1,798.05",
          bulliesh: "Bullish",
          image: require('@/assets/zebu-stocks/arrowgreen.svg'),
        },
        {
          title: "Silver's the new gold for your portfolio, can hit Rs 90,000 soo",
          subtitle: "22 May, 2023",
          bank: "SW Solar",
          subtitleone: "₹175.05",
          bulliesh: "Bullish",
          image: require('@/assets/zebu-stocks/arrowgreen.svg'),
        },
        {
          title: "Oil prices up on China economic support pledge, tighter supply.",
          subtitle: "22 May, 2023",
          bank: "CRUDEOIL",
          subtitleone: "₹2,347.05",
          bulliesh: "Bearish",
          image: require('@/assets/zebu-stocks/redarrow.svg'),
        },
      ],
          CommoditesMenuItems: [{ title: 'Click Me' }, { title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me 2' },],
    }
  },
  methods: {
    readmore() {
          this.CommoditesInNews.push(this.CommoditesInNews[0])
      },
      ShowMoreCOmmodieFun() {
      this.ItemPerPageCommodites = this.commoditesitems.length
      this.ShowMoreComm = false
      this.ShowLessCommtes = true
    },
    ShowLessCommoditesFun() {
      this.ItemPerPageCommodites = 5
      this.ShowMoreComm = true
      this.ShowLessCommtes = false
    },
  }
}
</script>
<style lang="scss">
.ScrollHorizantalHide {
    ::-webkit-scrollbar {
        display: none !important;
    }
}
.CommoditesWatchlistLabel {
  .v-input .v-label {
    font-size: 14px !important;
    font-weight: 469 !important;
    line-height: 16px !important;
    color: #666666 !important;
  }
}
.CommoditesToolbarPaddReduce {
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
.ButtonOrMenuRippleNone {
.v-btn::before {
  background-color: transparent !important;
}
}
.MessageInpuslotCus {
.v-messages { 
  min-height:0px !important;
}
.v-input__slot {
  margin-bottom:0px !important;
}
}

</style>