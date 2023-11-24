<template>
    <div>
   <P class="text-center">ujddjjjjs</P>
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
  