<template>
  <div>
    <!-- <LayOut /> -->
    <!-- <v-container> -->
      <v-row class="">
        <v-col class=" pt-0 pr-8" cols="9">
          <v-card class="py-6 pr-2 elevation-0 scrollchangecustom mt-4" color="#F1F3F8" height="345px">
            <p style="color:#000000;font-weight: 559;font-size: 24px;line-height: 24px;letter-spacing: -0.8px;" class=" pl-8 mb-2">Featured Collections</p>
            <p style="color:#666666;font-weight: 469;font-size: 14px;line-height: 20px;letter-spacing: -0.2px;" class="pl-8">Collections of stocks (baskets) curated<br> by experts</p>
            <div class="pl-6 pt-3" style="overflow-x: scroll;">
            <div class="d-inline-flex">
<v-card class="elevation-0 ml-2 py-3 px-5 mb-2 rounded-lg" width="173px" height="188px" v-for="featurecol in FeaturedCollections" :key="featurecol"   :to="featurecol.link">
  <img alt="" class="shrink mb-1" :src="featurecol.image" width="46px" height="46px" />
  <p style="color:#000000;font-weight: 559;font-size: 16px;line-height: 16px;letter-spacing: -0.8px;" class="mb-1">{{featurecol.title}}</p>
  <p style="color:#666666;font-weight: 469;font-size: 12px;line-height: 14px;letter-spacing: -0.3px;" class="pt-1 mb-2">{{featurecol.subtitle}}</p>
  <p style="color:#000000;font-weight: 559;font-size: 16px;line-height:16px;letter-spacing:;" class="mb-0 pt-3">{{featurecol.subtitleone}}</p>
  <p style="color:#43A833;font-weight: 559;font-size: 12px;line-height:16px;letter-spacing:;" class="pt-1 mb-0">{{featurecol.subtitletwo}}</p>
</v-card>

      </div></div>
      
      
          </v-card>


          <p class=" py-4 mt-1 mb-1" style="color:#000000;font-weight: 559;font-size: 20px;line-height: 16px;letter-spacing: -0.8px;" >More filters you can try</p>
          <div class="d-inline-flex ml-n3" >
            <v-card class="mr- ml-3 pb-3 py-2 pl-3" outlined v-for="Filter in Filters" :key="Filter" width="163px " height="72px"> 
              <p style="color:#000000;font-weight: 559;font-size: 14px;line-height: 16px;letter-spacing: px;" class="mb-1">{{Filter.title}}</p>
              <v-divider class="mt-3"  width="24px"  style="border: 1px solid #000000;"></v-divider>
              <p style="color:#666666;font-weight: 469;font-size: 12px;line-height: 16px;letter-spacing: px;" class="mb-0 pt-3">{{Filter.noOfBasket}}</p>
            </v-card>

          </div>
          <p class="mt-10 mb-3" style="color:#000000;font-weight: 559;font-size: 20px;line-height: 16px;letter-spacing: -0.4px;">Top Collections </p>
<v-row class="mt-1">
  <v-col cols="4" class="" v-for="topcollc in Topcollection"  :key="topcollc">
    <v-card  class="pa-4" outlined height="175px">
      <v-row>
        <v-col class="pt-2" cols="6">
          <img alt="" class="shrink" :src="topcollc.imageone" width="40px" />
        </v-col>
        <v-col  cols="6" align="end">
<div class="display-flex row pt-2">
  <v-btn height="fit-content" class="pa-0 rounded-xl ml-1" text><img alt="" class="shrink "  :src="topcollc.imagetwo" width="85px" /></v-btn>
  <v-btn  height="fit-content"  class="pa-0 ml-1 rounded-circle" style="min-width:0px" text><img alt="" class="shrink" :src="topcollc.imagethree" width="27px" /></v-btn>
</div>

        </v-col>
      </v-row>
      <p style="color:#000000;font-weight: 559;font-size: 16px;line-height: 16px;letter-spacing: -0.5px;" class="pl-1 pt-3 mb-0">{{topcollc.title}}</p>
      <div class="display-flex row mt-2 pl-4">
        <!-- <v-card width="68px" height="16px" color="#F1F3F8">
          <p style="color:#666666;font-size:11px" class="font-weight-medium  mb-0 text-center  ">Multicap</p>
        </v-card> -->
        <v-card class=" elevation-0" color="#F1F3F8" width="68px" height="16px" > 
                                                            <p class=" mb-0 text-center"
                                                                style="color:#666666;font-size:9px;font-weight:469;line-height: 12px;border-radius: 3px;padding-top: 2px;letter-spacing: 0.9px;font-style: normal">
                                                                <!-- {{ folder.subtitlefirst }} -->
                                                                MULTICAP
                                                              
                                                              </p>
                                                        </v-card>
                                                        <v-card class=" elevation-0 ml-1" color="#F1F3F8" width="72px" height="16px" > 
                                                            <p class=" mb-0 text-center"
                                                                style="color:#666666;font-size:9px;font-weight:469;line-height: 12px;border-radius: 3px;padding-top: 2px;letter-spacing: 0.9px;font-style: normal;">
                                                                <!-- {{ folder.subtitlefirst }} -->
                                                                LONGTERM
                                                              
                                                              </p>
                                                        </v-card>

      </div>




      <v-row class="pt-4" >
        <v-col cols="4" class="pa-0">
          <v-list-item-content class="pt-0 pb-0 pl-4">
                                                <v-list-item-title class=""> <span class=""
                                                        style="font-size:9px;font-weight: 469;line-height: 12px; letter-spacing:0.72px;color: #666666;font-style: normal;">
                                                        <!-- {{ folder.subsecfirst }} --> MIN. INVEST


                                                    </span></v-list-item-title>
                                                <v-list-item-subtitle><span class=""
                                                        style="font-size:13px;font-style: normal;font-weight: 569;line-height: 16px; color: #000;">
                                                        <!-- {{ folder.subsecsecond }} -->
                                                        ₹ 45,324

                                                      </span>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
        </v-col>
        <v-col cols="3" class="pa-0" align="center">
          <v-list-item-content class="pt-0 pb-0">
                                                <v-list-item-title class=""> <span class=""
                                                  style="font-size:9px;font-weight: 469;line-height: 12px; letter-spacing:0.72px;color: #666666;font-style: normal;">
                                                        <!-- {{folder.subthreefirst }} -->  3Y CAGR

                                                      </span></v-list-item-title>
                                                <v-list-item-subtitle><span class=""
                                                        style="font-size:13px ; color: #43A833;font-style: normal;font-weight: 569;line-height: 16px;">
                                                        <!-- {{folder.subthreesecond}} -->23.2%

                                                      </span></v-list-item-subtitle>
                                            </v-list-item-content>
        </v-col>
        <v-col cols="5" class="pt-0 pb-0" align="center">
          <v-list-item-content class="pt-0 pb-0">
                                                <v-list-item-title class=""><span class=""
                                                  style="font-size:9px;font-weight: 469;line-height: 12px; letter-spacing:0.72px;color: #666666;font-style: normal;">
                                                        <!-- {{folder.subfourfirst}} --> TOTAL STOCKS

                                                      </span></v-list-item-title>
                                                <v-list-item-subtitle class="text-start"> <span class="text-start pl-1"
                                                  style="font-size:13px;font-style: normal;font-weight: 569;line-height: 16px; color: #000;">
                                                        <!-- {{folder.subfoursecond }} -->
                                                        14 stocks

                                                      </span>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</v-row>




<p class="pt-12 mb-8" style="font-size: 20px;font-style: normal;font-weight: 559;line-height: 16px;letter-spacing: -0.4px;color:#000000" >All Collections</p>
<v-row>
  <v-col cols="4" v-for="allcollct in AllCollection" :key="allcollct">
    <v-card class="pt-6 pl-8" outlined height="143px">

     <div class="display-flex row">
    
      <img alt="" class="shrink mb-1" :src="allcollct.imageone" width="46px" />
      

      <div class="ml-auto mr-6">
        <v-card class=" elevation-0" color="#F1F3F8" width="73px" height="16px" > 
        <p class=" mb-0 text-center "
       style="color:#666666;font-size:9px;font-style: normal;font-weight: 469;line-height: 12px;letter-spacing: 0.9px;border-radius: 3px;padding-top: 2px;padding-bottom: 2px;">
        {{ allcollct.noOFBasket }}</p>
      


                                                        </v-card></div>
     </div>
     <p class="mt-6 mb-0 ml-n3" style="color:#000000;font-size: 16px;font-style: normal;font-weight: 599;line-height: 16px;letter-spacing: -0.32px;" >{{ allcollct.title }}</p>
     <p style="color:#666666;font-size: 12px;font-style: normal;font-weight: 469;line-height: 16px;" class="mb-0 mt-1 ml-n3 mr-2">{{allcollct.subtitle}}</p>
    </v-card>

  </v-col>
</v-row>

          
        </v-col>
<v-col cols="3" class=" mt-n4">
  <v-toolbar class="toolbar-contant" elevation="0" color="white">
                    <v-toolbar-title class="font-weight-bold"
                        style="color: #000000;font-size:16px;min-height:0px;">Watchlists</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">

                            <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class=" " icon>
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

                <div class="yourwatchlisttextfield">
                <v-select v-model="nnnnnnnnn" label="Your watchlist" append-icon="mdi-chevron-down" class="rounded-lg "
                    color="gray" dense>
                    <template v-slot:append>
                        <p class="mb-1" style="font-size: 14px !important;
        font-weight: 469 !important;
        line-height: 16px !important;
        color:#666666 !important;">0 items <v-icon color="black">
                                mdi-chevron-down</v-icon> </p>
                    </template>
                </v-select></div>


                

                <div class="text-center mt-12">
                    <img class="" :src="require('@/assets/zebu-stocks/nowstocks.svg')" width="32px" height="28px" />
                    <p class="font-weight-medium px-3" style="font-size:16px;color: #000000;letter-spacing:-1px">Now track your favorite
                        stocks by adding them to your watchlist.</p>
                </div>
                <div class=" mx-auto mt-12 pt-14  mb-1 pl-1">
                    <div class="display-flex row mx-auto  justify-center"  >
                        <img class="" :src="require('@/assets/zebu-stocks/create-watchlist.svg')" width="16px" height="16px" />
                        <P  class=" text-center mb-0 ml-1" style="font-size:14px;color: #0037B7;font-weight:559;line-height:16px;cursor: pointer;">
                        Create new watchlist</p>
                    </div>
                </div>
                <v-divider class="mt-6"></v-divider>
               

                <v-toolbar class="mt-5 toolbar-contant" elevation="0" color="white">
                    <v-toolbar-title class="" style="color: #000000;font-size:16px;font-weight: 559;line-height: 16px;">Stocks in
                        news</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">

                            <v-btn v-bind="attrs" v-on="on" :ripple="false" class="buttoncontant pr-1" plain icon>
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



                <v-card class="elevation-0 " v-for="stocknews in stocksinnews" :key="stocknews.title">
                    <v-card class="  mt-2 elevation-0">
                        <div class="borderlines">
                        <p class="pl-3 mb-1" style="font-size:14px;color: #000000;font-weight: 469;line-height: 18px;letter-spacing: -0.5px;">{{ stocknews.title
                        }}
                        </p>
                        <p class="pl-3 mb-2" style="font-size:10px;color:#999999;font-weight:469;line-height:12px">22 May, 2023</p></div>
                    </v-card>
                    <v-toolbar class="mb-4" elevation="0" color="#F1F3F8" height="24px" style="border-radius:4px">
                        <v-toolbar-title class="" style="color: #000000;font-size:12px;font-weight:559;line-height:16px">{{
                            stocknews.bank }}</v-toolbar-title>
                        <v-toolbar-title class=" ml-2" style="color: #666666;font-size:12px;font-weight:469">{{
                            stocknews.subtitleone }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <p class="mb-0 pr-3" style="color: #666666;font-size:12px;font-weight:559;line-height:16px">
                            <img alt="" class="shrink " :src="stocknews.image" height="8px" width="8px" />
                            <span v-if="stocknews.bulliesh == 'Bearish'" style="color:#FF1717;"> {{ stocknews.bulliesh
                            }}</span>
                            <span v-else style="color:#43A833"> {{ stocknews.bulliesh }}</span>
                        </p>
                    </v-toolbar>
                </v-card>
                <div class="text-center">
                    <v-btn class="pt-4 block text-none mx-auto" justify-center text @click="readmore()">
                        <p class=" text-center " style="color: #0037B7;font-size:14px;font-weight:559"> <img class=""
                                :src="require('@/assets/zebu-stocks/readnews.svg')" width="14px" height="14px" /> Read other
                            news
                        </p>
                    </v-btn>
                </div>
</v-col>
      </v-row>
      

    <!-- </v-container> -->
  </div>
  </template>
  <script>
  // import LayOut from '../components/LayOut.vue';
  export default {
    components:{
      // LayOut
    },
    data () {
      return {
        FeaturedCollections : [
  {
    image: require('@/assets/zebu-collection/highrisk.svg'),
    title: "High Risk",
    subtitle: "Ideal for investors with a high risk appetite",
    subtitleone: "12 baskets",
    subtitletwo: "2 recommended", 
 },
 {
    image: require('@/assets/zebu-collection/Balancescale.svg'),
    title: "Balanced Wealth",
    subtitle: "Stable income and growth",
    subtitleone: "16 baskets",
    subtitletwo: "2 recommended", link: '/collectioncat'
 },
 {
    image: require('@/assets/zebu-collection/top100infinity.svg'),
    title: "Top 100 Infinity",
    subtitle: "Hybrid of active and passive",
    subtitleone: "8 baskets",
    subtitletwo: "2 recommended",
 },
 {
    image: require('@/assets/zebu-collection/Jewelry.svg'),
    title: "Hidden Gems",
    subtitle: "Diversify your portfolio globally",
    subtitleone: "8 baskets",
    subtitletwo: "2 recommended",
 },
 {
    image: require('@/assets/zebu-collection/gold-coin 2.svg'),
    title: "Popular Star",
    subtitle: "Long term wealth creation at low cost",
    subtitleone: "8 baskets",
    subtitletwo: "2 recommended",
 },
 {
    image: require('@/assets/zebu-collection/highrisk.svg'),
    title: "High Risk",
    subtitle: "Ideal for investors with a high risk appetite",
    subtitleone: "12 baskets",
    subtitletwo: "2 recommended",
 },
 {
    image: require('@/assets/zebu-collection/Balancescale.svg'),
    title: "Balanced Wealth",
    subtitle: "Stable income and growth",
    subtitleone: "16 baskets",
    subtitletwo: "2 recommended",
 },
 {
    image: require('@/assets/zebu-collection/top100infinity.svg'),
    title: "Top 100 Infinity",
    subtitle: "Hybrid of active and passive",
    subtitleone: "8 baskets",
    subtitletwo: "2 recommended",
 },
 {
    image: require('@/assets/zebu-collection/Jewelry.svg'),
    title: "Hidden Gems",
    subtitle: "Diversify your portfolio globally",
    subtitleone: "8 baskets",
    subtitletwo: "2 recommended",
 },
 {
    image: require('@/assets/zebu-collection/gold-coin 2.svg'),
    title: "Popular Star",
    subtitle: "Long term wealth creation at low cost",
    subtitleone: "8 baskets",
    subtitletwo: "2 recommended",
 },
],
Filters:[
  {
    title:"Top Gainer in 1 year",
    noOfBasket:"5 baskets",
  },
  {
    title:"Low Performer",
    noOfBasket:"6 baskets",
  },
  {
    title:"Shadow Basket",
    noOfBasket:"4 baskets",
  },
  {
    title:"Growth Basket",
    noOfBasket:"9 baskets",
  },
  {
    title:"Longterm Performer",
    noOfBasket:"10 baskets",
  },

],
Topcollection:[
  {
    imageone: require('@/assets/zebu-collection/medicine.svg'),
    imagetwo: require('@/assets/zebu-collection/lowrisk.svg'),
    imagethree: require('@/assets/zebu-collection/lowriskRight.svg'),
    title:"Pharma Track",
  },
  {
    imageone: require('@/assets/zebu-collection/greenenergy.svg'),
    imagetwo: require('@/assets/zebu-collection/highriskred.svg'),
    imagethree: require('@/assets/zebu-collection/lowriskRight.svg'),
    title:"Green Energy",
  },
  {
    imageone: require('@/assets/zebu-collection/computedwealth.svg'),
    imagetwo: require('@/assets/zebu-collection/highriskred.svg'),
    imagethree: require('@/assets/zebu-collection/lowriskRight.svg'),
    title:"Compound Wealth",
  },
  {
    imageone: require('@/assets/zebu-collection/vistion.svg'),
    imagetwo: require('@/assets/zebu-collection/highriskred.svg'),
    imagethree: require('@/assets/zebu-collection/lowriskRight.svg'),
    title:"Vision 2030",
  },
  {
    imageone: require('@/assets/zebu-collection/Hundred.svg'),
    imagetwo: require('@/assets/zebu-collection/lowrisk.svg'),
    imagethree: require('@/assets/zebu-collection/lowriskRight.svg'),
    title:"Top 100 Stocks",
  },
  {
    imageone: require('@/assets/zebu-collection/electricstrick.svg'),
    imagetwo: require('@/assets/zebu-collection/lowrisk.svg'),
    imagethree: require('@/assets/zebu-collection/lowriskRight.svg'),
    title:"Electric City",
  },

],
AllCollection:[
  {
    imageone: require('@/assets/zebu-collection/popularunder.svg'),
    noOFBasket:"6 BASKETS",
    title:"Popular under ₹500",
    subtitle:"Low-volatility zebu trade with minimum investment amount less than ₹500",
  },
  {
    imageone: require('@/assets/zebu-collection/wealthdefender.svg'),
    noOFBasket:"3 BASKETS",
    title:"Wealth Defenders",
    subtitle:"Low-volatility zebu to park & sustainably grow emergency funds",
  },
  {
    imageone: require('@/assets/zebu-collection/dividenthighgrowth.svg'),
    noOFBasket:"10 BASKETS",
    title:"Dividend High Growth",
    subtitle:"Multi-asset Fund-of-fund that invests across asset classes, geographies.",
  },
  {
    imageone: require('@/assets/zebu-collection/hightreturnbasket.svg'),
    noOFBasket:"12 BASKETS",
    title:"High Return Baskets",
    subtitle:"Superior longterm-adjusted returns with high market correlations",
  },
  {
    imageone: require('@/assets/zebu-collection/zebugroth.svg'),
    noOFBasket:"12 BASKETS",
    title:"Zebu Growth IND-Class",
    subtitle:"An actively managed ETF portfolio focused on capital appreciation.",
  },
  {
    imageone: require('@/assets/zebu-collection/balancedwealth.svg'),
    noOFBasket:"6 BASKETS",
    title:"Balanced Wealth Basket",
    subtitle:"Low-volatility zebu trade with minimum investment amount less than ₹500",
  },
],

         
         
            stocksinnews: [
                {
                    title: "HDFC Bank proposes to raise Rs 50,000 crore funds via bonds over next 12 months",
                    subtitle: "22 May, 2023",
                    bank: "HDFC bank",

                    subtitleone: "₹1,798.05",
                    bulliesh: "Bullish",
                    image: require('@/assets/zebu-stocks/arrowgreen.svg'),
                },
                {
                    title: "State Bank of India to consider fund raising up to $2 billion on April 18",
                    subtitle: "22 May, 2023",
                    bank: "SBIN",
                    subtitleone: "₹175.05",
                    bulliesh: "Bullish",
                    image: require('@/assets/zebu-stocks/arrowgreen.svg'),
                },
                {
                    title: "Kotak Mahindra Bank may weigh heavier on MSCI as foreign holding dips to 41.22%",
                    subtitle: "22 May, 2023",
                    bank: "Kotak Bank",
                    subtitleone: "₹2,347.05",
                    bulliesh: "Bearish",
                    image: require('@/assets/zebu-stocks/redarrow.svg'),
                },
                {
                    title: "HDFC Bank proposes to raise Rs 50,000 crore funds via bonds over next 12 months",
                    subtitle: "22 May, 2023",
                    bank: "HDFC bank",

                    subtitleone: "₹1,798.05",
                    bulliesh: "Bullish",
                    image: require('@/assets/zebu-stocks/arrowgreen.svg'),
                },
                {
                    title: "Shapoorji Pallonji Group weighs $2 billion asset sales",
                    subtitle: "22 May, 2023",
                    bank: "SW Solar",
                    subtitleone: "₹175.05",
                    bulliesh: "Bullish",
                    image: require('@/assets/zebu-stocks/arrowgreen.svg'),
                },
                {
                    title: "ONGC bets on deepwater oil to offset imports",
                    subtitle: "22 May, 2023",
                    bank: "ONGC",
                    subtitleone: "₹2,347.05",
                    bulliesh: "Bearish",
                    image: require('@/assets/zebu-stocks/redarrow.svg'),
                },

            ],
            itemsmenu: [
                { title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me 2' },
            ],
      }
    },
    mounted () {
        const axios = require('axios');
let data = JSON.stringify({
  "sector": "Construction"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://192.168.5.217:5000/getSectorStockData',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
//   console.log(JSON.stringify(response.data));
console.log("response",response)
})
.catch((error) => {
  console.log(error);
});

    },
    methods: {
      readmore() {
            this.stocksinnews.push(this.stocksinnews[0])
        },
    }
  }
</script>
<style lang="scss">
.borderlines {
    // border-left: 3px solid #0037B7 !important;
    // border-left: 2px solid #0037B7 !important;
    // border-left-color:solid #0037B7 !important ;
    // border-left-color: coral;
    // border-left-width: ;
    border-left-style: solid;
  border-left-color: #0037B7;

    // border: 0px, 0px, 0px, 0px !important;
border-radius: 1px !important;
}

.scrollchangecustom {
::-webkit-scrollbar {
  width: 2px;
  height: 6px;
  // margin-left:-392px !important;
}
}
.scrollchangecustom { 
::-webkit-scrollbar-track {
  background-color: white !important;
  // margin-top:-100px !important;
  // margin-left: 400px !important;
  // margin-right: 400px !important;
  border-radius: 5px !important;
}
}

.scrollchangecustom {
::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 16px;
  max-width: 5px !important;
}}
.yourwatchlisttextfield {
    .v-input .v-label { 
        font-size: 14px !important;
        font-weight: 469 !important;
        line-height: 16px !important;
        color:#666666 !important;

    } 
  }

</style>
