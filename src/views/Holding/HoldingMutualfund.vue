<template>
    <div>

        <v-row>
            <v-col cols="9">
                <v-card color="#FAFBFF"   class="elevation-0 pt-4 pb-3" style="border: 1.5px solid #DADDE7;">
                    <v-row>
           <v-col cols="7">
            <v-row>
                               <v-col cols="4" class="pl-10">
                    <p class="mb-2" style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">Stocks Value</p>
                    <p class="mb-1" style="color: #000;font-size: 15px;font-weight: 469;line-height: 100%; ">₹56.3K</p>
                </v-col>
                <v-col cols="4">
                    <p class="mb-2" style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">1D Change</p>
                    <p class="mb-1" style="color: #000;font-size: 15px;font-weight: 469;line-height: 100%; ">₹12.5K <span class="" style="color: #FF1717;font-size: 16px;font-weight: 469;line-height: 100%;">-2.56%</span></p>
                </v-col>
                <v-col cols="4">
                    <p class="mb-2" style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">Invested</p>
                    <p class="mb-1" style="color: #000;font-size: 15px;font-weight: 469;line-height: 100%; ">₹48.65K</p>
                </v-col>
            </v-row>
           </v-col>
           <v-col cols="5">
            <v-row>
                <v-col cols="5">
                    <p class="mb-2" style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">1D Change</p>
                    <p class="mb-1" style="color: #000;font-size: 15px;font-weight: 469;line-height: 100%; ">₹12.5K <span class="" style="color: #43A833;font-size: 16px;font-weight: 469;line-height: 100%;">-2.56%</span></p>
                </v-col>
                <v-col cols="7">
                    <p class="mb-2" style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">Stock Position</p>
                   <div class="d-flex row pt-2">
                    <v-card color="#ECF8F1" class="px-2 py-1 ml-3 elevation-0">
                        <p class="mb-0 text-center" style="color: #43A833;font-size: 10px;font-weight: 600;line-height: 16px; letter-spacing: 0.5px;">10 POSITIVE</p>
                    </v-card>
                    <v-card color="#FCF3F3" class="px-2 py-1 ml-2 elevation-0">
                        <p class="mb-0 text-center" style="color: #FF1717;font-size: 10px;font-weight: 600;line-height: 16px; letter-spacing: 0.5px;">10 POSITIVE</p>
                    </v-card>
                   </div>
                </v-col>
            </v-row>
           </v-col>
        </v-row>
                    </v-card>
            </v-col>
            <v-col cols="3">
<v-card color="#FAFBFF"   class="elevation-0 pt-4 pb-3" style="border: 1.5px solid #DADDE7;">
    <v-row>
        <v-col cols="6" class="pl-10">
                    <p class="mb-2" style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;"> Today’s High   </p>
                    <p class="mb-1" style="color: #43A833;font-size: 15px;font-weight: 469;line-height: 100%;">₹56.3K</p>
                </v-col>
                <v-col cols="6">
                    <p class="mb-2" style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">Today’s Low</p>
                    <p class="mb-1" style="color: #FF1717;font-size: 16px;font-weight: 469;line-height: 100%;">-₹2.6K</p>
                </v-col>
    </v-row>
</v-card>
            </v-col>
        </v-row>

      
          <v-tabs  class="mt-5 "  color="#000000" v-model="hdfumutuLFUND">
            <v-tab class="text-none" v-for="fundstab in hdfcFundTab" :key="fundstab.title" @click="fundsclickchnage=fundstab.title" >
              <span class="pr-1 pl-1" style="font-size: 14px;font-family: 559;line-height: 16px;letter-spacing: -1px;">{{fundstab}}</span>
            </v-tab>
            <div class=" ml-auto" >
            <v-text-field class="tophundraedmutual " height="36px" background-color="#F1F3F8"
                label="Search mutual funds" solo rounded flat dense>
                <template v-slot:prepend-inner>
                  <img alt="" class="ml-1  shrink" :src="require('@/assets/zebu-stocks/searchicon.svg')" width="20px"
                    height="18px" />
                </template>
              </v-text-field>
            </div>
           <v-tabs-slider color="#000000"></v-tabs-slider>
          </v-tabs>
          <v-tabs-items v-model="hdfumutuLFUND" class="">
            <v-tab-item>
                <v-data-table dense   :headers="mutualfundheaders"
          :items="Holdingitems"  item-key="id" v-model="selectedRows" class="elevation-0"
          hide-default-footer style="border: 1px solid #efeef3;background-color:white">
          
          <template v-slot:[`header.iron`]="{ header }">
       <v-row class="" no-gutters>
        <v-col cols="8" class="">
<p class="mb-0 pt-2 ">{{ header.text }}</p>
        </v-col>
        <v-col cols="2" class="pl-0 pr-0">
            <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="" width="fit-content" icon>
                                <v-icon color="black">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
        </v-col>
       </v-row>
     </template>
     <template v-slot:[`header.AUM`]="{ header }">
      <p class="mb-0" >{{ header.text }}<span style="color: #999;font-size: 12px;font-weight: 469;line-height: 16px;"> (cr)</span></p>
     </template>
     <template v-slot:[`header.TER`]="{ header }">
      <p class="mb-0" >{{ header.text }}<span style="color: #999;font-size: 12px;font-weight: 469;line-height: 16px;"> (%)</span></p>
     </template>
          <template v-slot:item="{ item }">
            <tr @click="fundnameitems()" class="" style="cursor: pointer" @mouseover="selectItem(item)"
              @mouseleave="unSelectItem(item)">
              <td class="pt-4  pb-2" style="">
                <v-row class="">
                  <v-col cols="6">
                      <p class="mb-0" style="width:;color: #000000;font-size: 14px;font-weight:559;line-height:16px;letter-spacing:-0.5px;  cursor: pointer;"> {{ item.Title }}</p>
                      <div class="display-flex row pb-5 mt-1  pl-2" :class="item.chipname == 'Reco'? 'pt-0' :'pt-1'">
                  <v-card  :color="item === selectedItem ?'white' : '#F1F3F8'" v-if="item.Growth == 'GROWTH'" height="18px" width="61px" class=" ml-1"
                    elevation="0">
                    <p class="mt-1 mb-0 text-center" style="color:#666666;font-size:9px;line-height:12px;font-weight:469;letter-spacing:1px">
                      {{ item.Growth }}</p>
                  </v-card> 
                  <v-card :color="item === selectedItem ?'white' : '#F1F3F8'" v-if="item.ELSS == 'ELSS'" height="18px" width="41px" class="ml-1" elevation="0"
                   >
                    <p class=" mb-0 text-center mt-1" style="color:#666666;font-size:9px;line-height:12px;font-weight:469;letter-spacing:1px">
                      {{ item.ELSS }}</p>
                  </v-card>

                  <v-card :color="item === selectedItem ?'white' : '#F1F3F8'" v-if="item.Equity == 'EQUITY'" height="18px" width="54px" class=" ml-1"
                    elevation="0" >
                    <p class="mt-1 mb-0 text-center" style="color:#666666;font-size:9px;line-height:12px;font-weight:469;letter-spacing:1px">
                      {{ item.Equity }}</p>
                  </v-card>
                </div>
                  </v-col>
                  <v-col cols="6" >
                    
                    <div class="pt-3" v-if="item === selectedItem">
                                        <div class="display-flex row pt-1">
                                            <v-btn class="pa-1 elevation-0 ml-1 white--text" dense small
                                                style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;"
                                                color="#0037B7">
                                                <span
                                                    style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">SIP</span></v-btn>
                                            <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;"
                                                color="#43A833">
                                                <span
                                                    style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">B</span></v-btn>
                                            <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;"
                                                color="#FF1717">
                                                <span
                                                    style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">S</span></v-btn>


                                                  
                                            <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                                                style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M12 9.75H3.75V11.25H12V9.75Z" fill="#666666"/>
  <path d="M2.25 9.75H0V11.25H2.25V9.75Z" fill="#666666"/>
  <path d="M9 5.75H3.75V7.25H9V5.75Z" fill="#666666"/>
  <path d="M2.25 5.75H0V7.25H2.25V5.75Z" fill="#666666"/>
  <path d="M12 1.75H3.75V3.25H12V1.75Z" fill="#666666"/>
  <path d="M2.25 1.75H0V3.25H2.25V1.75Z" fill="#666666"/>
</svg></v-btn>
                                            <v-btn class="ml-1 pa-0  elevation-0" outlined small
                                                style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                                    viewBox="0 0 10 10" fill="none">
                                                    <path
                                                        d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                                                        fill="#666666" />
                                                    <path
                                                        d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"
                                                        fill="#666666" />
                                                    <path
                                                        d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"
                                                        fill="#666666" />
                                                </svg>
                                            </v-btn>
                                        </div>
                                    </div>

                  </v-col>
                </v-row>
              </td>
              <td class=""><p class="mt-n4 mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;"> {{ item.sector
              }}</p></td>
              <td class=""> <p class="mb-0 mt-n4" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">₹29,534<span class="" style="font-size:13px;color:#666666;font-weight:469;line-height:16px;"></span>
              </p></td>
              <td class="">
                <p class="mt-n4 mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">14,968<span class="" style="font-size:13px;color:#666666;font-weight:469;line-height:16px;"></span>
              </p></td>
              <td class=""><p class="mt-n4 mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">₹236.05</p></td>
              <td class=""><p class="mt-n4 mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">₹236.05</p></td>
              <td class=""><p class="mt-n4 mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">₹236.05</p></td>

              <td class=""><p class="mt-n4 mb-0" style="color: #43A833;
font-size: 13px;
font-weight: 469;
line-height: 16px; ">+1.65%</p></td>
              
            </tr>
          </template>
        </v-data-table>
          </v-tab-item>
              <!-- tab 2 -->
           
              <v-tab-item>
                <p class="text-center mt-16 pt-5">NO DATA</p>
              </v-tab-item>
              <v-tab-item>
                <p class="text-center mt-16 pt-5">NO DATA</p>
              </v-tab-item>
              <v-tab-item>
                <p class="text-center mt-16 pt-5">NO DATA</p>
              </v-tab-item>
              <v-tab-item>
                <p class="text-center mt-16 pt-5">NO DATA</p>
              </v-tab-item>
          </v-tabs-items>

          <p class="mt-10 mb-2" style="color: #192129;font-size: 18px;font-weight: 559;line-height: 100%; ">MF Breakdown</p>
           <p style="color: #4D5766;
font-size: 14px;
font-weight: 469;
line-height: 100%;">Mutual fund portfolio distribution</p>
    </div>
</template>
<script>
export default {
  components: {  },
  data() {
    return {
      mutualfundlist:true,
      singleFund:false,
      mutualFundAmc:false,
      mutualFundCategory:true,
      hdfumutuLFUND: null,
      value: "50",
      selectedItem: false,
      fundsclickchnage:"",
      hhdhdhhhdhh: true,
      iiiiiiii: false,
      ggggggggggg: 3,
      selectedRows: [],
      itemsmenu: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      selected:[],
   
      panel: [0],
      panels: [0],
      selectedTab: "",
      cardhide: true,
      mutualfundheaders: [
        {
          text: "Fund name",
          align: "left",
          sortable: false,
          value: "Fundname", class: "successScrips" ,width:"40%"
        },
        { text: "Current", sortable: false, value: "calories", class: "successScrips" },
        { text: "Invested", sortable: false, value: "calories", class: "successScrips" },
        { text: "P&L", sortable: false, value: "carbs", class: "successScrips" },
        { text: "Units", sortable: false, value: "protein", class: "successScrips" },
        { text: "Avg. NAV", sortable: false, value: "protein", class: "successScrips" },
        { text: "Curr. NAV", sortable: false, value: "protein", class: "successScrips" },
        { text: "XIRR", sortable: false, value: "iron", class: "successScrips" },

      ],
      mutualfunditems: [
        {
          id: 1,
          Fundname: "HDFC Large and Mid Cap Fund",
          chipname: "Reco",
          AUMval: "₹29,534",
          TERval: "1.15",
          MinInvest: "₹27,400",
          oneyearCAGR: 20.2,
          threeyrCAGR: 82.1,
          ELSS: "ELSS",
          Equity: "EQUITY",
          chip: "Reco"
        },
        {
          id: 2,
          chipname: "Reco",
          Fundname: "Mirae Asset Tax Saver Fund",
          AUMval: "₹29,534",
          TERval: "1.15",
          MinInvest: "₹27,400",
          oneyearCAGR: 20.2,
          threeyrCAGR: 82.1,
          Growth: "GROWTH",
          ELSS: "ELSS",
          Equity: "EQUITY",
        },
        {
          id: 3,
          Fundname: "Kotak Gold Fund",
          AUMval: "₹29,534",
          TERval: "1.15",
          MinInvest: "₹27,400",
          oneyearCAGR: 20.2,
          threeyrCAGR: 82.1,
          ELSS: "ELSS",

        },
        {
          id: 4,
          Fundname: "Franklin India Feeder Franklin U S Opportunities Fund",
          AUMval: "₹29,534",
          TERval: "1.15",
          MinInvest: "₹27,400",
          oneyearCAGR: 20.2,
          threeyrCAGR: 82.1,
          ELSS: "ELSS",
          Equity: "EQUITY",
        },
        {
          id: 5,
          Fundname: "Bandhan CRISIL IBX Gilt April 2028 Index fund",
          AUMval: "₹29,534",
          TERval: "1.15",
          MinInvest: "₹27,400",
          oneyearCAGR: 20.2,
          threeyrCAGR: 82.1,
          Growth: "GROWTH",
          ELSS: "ELSS",
          Equity: "EQUITY",
        },
        {
          id: 6,
          Fundname: "ICICI Prudential Long Term Equity Fund",
          AUMval: "₹29,534",
          TERval: "1.15",
          MinInvest: "₹27,400",
          oneyearCAGR: 20.2,
          threeyrCAGR: 82.1,
          Equity: "EQUITY",
        },
        {
          id: 6,
          Fundname: "ICICI Prudential Long Term Equity Fund",
          AUMval: "₹29,534",
          TERval: "1.15",
          MinInvest: "₹27,400",
          oneyearCAGR: 20.2,
          threeyrCAGR: 82.1,
          ELSS: "ELSS",
          Equity: "EQUITY",
        },
       
       

      ],
      fundcategery:[
    "Debt funds","Hybrid funds","Equity funds","Sectoral funds","Other funds"
],

      Mutualfundcategories: [
        {
          title: "Equity funds",
          subtitle: "395 funds",
          recommended: "18 recommended",

        },
        {
          title: "Debt funds",
          subtitle: "472 funds",
          recommended: "20 recommended",
        },
        {
          title: "Hybrid funds",
          subtitle: "235 funds",
          recommended: "11 recommended",
        },
        {
          title: "Sectoral funds",
          subtitle: "479 funds",
          recommended: "12 recommended",
        },
        {
          title: "Other funds",
          subtitle: "368 funds",
          recommended: "7 recommended",
        },
      ],



      BestMutualFund: [


        {
          icon: require('@/assets/zebu-stocks/savetaxes.svg'),
          title: "Save taxes",
          subtitle: "Build wealth and save taxes",
          noOfFund: "46 funds",
          recommented: "2 recommended",

        },
        {
          icon: require('@/assets/zebu-stocks/equitybeta.svg'),
          title: "Equity + Debt",
          subtitle: "Stable income and growth",
          noOfFund: "46 funds",
          recommented: "2 recommended",

        },
        {
          icon: require('@/assets/zebu-stocks/smartbeta.svg'),
          title: "Smart beta",
          subtitle: "Hybrid of active and passive",
          noOfFund: "46 funds",
          recommented: "2 recommended",

        },
        {
          icon: require('@/assets/zebu-stocks/internationfund.svg'),
          title: "International funds",
          subtitle: "Diversify your portfolio globally",
          noOfFund: "46 funds",
          recommented: "2 recommended",

        },
        {
          icon: require('@/assets/zebu-stocks/lowcost.svg'),
          title: "Low-cost index",
          subtitle: "Long term wealth creation at low cost",
          noOfFund: "46 funds",
          recommented: "2 recommended",

        },
        {
          icon: require('@/assets/zebu-stocks/internationfund.svg'),
          title: "International funds",
          subtitle: "Diversify your portfolio globally",
          noOfFund: "46 funds",
          recommented: "2 recommended",

        },
      ],



      createwatchlist: [
        {
          icon: require('@/assets/zebu-stocks/newfundoffring.svg'),
          title: "INVEST IN",
          titleone: "Ongoing new fund offerings",
          subtitle: "A new fund offer (NFO) is the first subscription for any new fund by an investment company.",
          seeallnfos: "See all NFOs",


        },
        {
          icon: require('@/assets/zebu-stocks/fundoffering.svg'),
          title: "EXPLORE BY",
          titleone: "Comparing Funds",
          subtitle: "Find the best suited Mutual Funds for wealth creation by comparing multiple funds",
          seeallnfos: "Compare funds",

        },
        {
          icon: require('@/assets/zebu-stocks/sipcalculator.svg'),
          title: "ESTIMATE WITH",
          titleone: "SIP calculators",
          subtitle: "Find the best suited Mutual Funds for wealth creation by comparing multiple funds",
          seeallnfos: "Checkout calculators",

        },

      ],

      Holdingitems: [
            {
                ELSS: "ELSS",
          Equity: "EQUITY", Growth: "GROWTH",
                id: 1,
                Title: "Reliance industries",
                sector:"Oil & Gas",
                alert: "ALERT",
                event: "EVENTS",
image1: require('@/assets/zebu-stocks/alertimg.svg'),
image2: require('@/assets/zebu-stocks/eventesimg.svg'),
            },
            {
                id: 2,
                chipname: "Reco",
                Title: "HCL Technologies",
                sector:"IT services",
                News: "NEWS",
                image3: require('@/assets/zebu-stocks/newsimg.svg'),
                Growth: "GROWTH", ELSS: "ELSS",
          Equity: "EQUITY",
            },
            {
                id: 3,
                Title: "Tata Motors",
                sector:"Autos",
                alert: "ALERT",

image1: require('@/assets/zebu-stocks/alertimg.svg'),
Growth: "GROWTH",ELSS: "ELSS",
            },
            {
                id: 4,
                Title: "Bharti Airtel",
                sector:"Telecom",
                alert: "ALERT",
image1: require('@/assets/zebu-stocks/alertimg.svg'),
News: "News",
image3: require('@/assets/zebu-stocks/newsimg.svg'),Equity: "EQUITY",ELSS: "ELSS",
            },
            {
                id: 5,
                Title: "HDFC bank",sector:"Telecom",
                alert: "ALERT",
                event: "EVENTS",
                image1: require('@/assets/zebu-stocks/alertimg.svg'),
                 image2: require('@/assets/zebu-stocks/eventesimg.svg'),ELSS: "ELSS",Equity: "EQUITY",
            },
            {
                id: 6,
                Title: "Delhivery",sector:"Telecom",
                event: "EVENTS",
image2: require('@/assets/zebu-stocks/eventesimg.svg'),News: "NEWS", Growth: "GROWTH",
image3: require('@/assets/zebu-stocks/newsimg.svg'),

            },
            {
                id: 7,
                Title: "One 97 Paytm",sector:"Telecom",
                alert: "ALERT",
                event: "EVENTS",image1: require('@/assets/zebu-stocks/alertimg.svg'),
image2: require('@/assets/zebu-stocks/eventesimg.svg'), Growth: "GROWTH",
            },
            {
                id: 8,
                Title: "IndusInd Bank",sector:"Telecom",
                alert: "ALERT",
               image1: require('@/assets/zebu-stocks/alertimg.svg'),
News: "News",
image3: require('@/assets/zebu-stocks/newsimg.svg'), Growth: "GROWTH",ELSS: "ELSS",
            },
            {
                id: 9,
                Title: "Laurus Labs",sector:"Telecom",
                alert: "ALERT",
                // event: "EVENTS",
                image1: require('@/assets/zebu-stocks/alertimg.svg'),
// image2: require('@/assets/zebu-stocks/eventesimg.svg'),
News: "NEWS",
image3: require('@/assets/zebu-stocks/newsimg.svg'), Growth: "GROWTH", 
            },
            {
                id: 10,
                Title: "Indian Hotels",sector:"Telecom",
image2: require('@/assets/zebu-stocks/eventesimg.svg'),
News: "NEWS",
image3: require('@/assets/zebu-stocks/newsimg.svg'),Equity: "EQUITY",ELSS: "ELSS",
            },
            
        ],
     
   
  

hdfcFundTab:["Overview","Payments"],
    };
  },
  
methods :{
    selectItem(item) {
            this.selectedItem = item
        },
        unSelectItem() {
            this.selectedItem = false
        },
}
}
</script>
