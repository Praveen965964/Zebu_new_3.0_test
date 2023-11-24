<template>
    <div>
        <v-row>
            <v-col cols="9" class="pr-8 pl-0">
                <p class=" " style="font-size:20px;font-weight: 559;line-height: 16px;color:#000000;letter-spacing: -0.7px;">Collection categories</p>
        <div class="display-flex row pt-4 mb-7">
          <v-card class="ml-3 pl-3 py-2 pr-2 " outlined height="x" width="18.5%" v-for="(item, index) in collectioncategories"
            :key="index">
            <p class=" mb-1" style="font-weight:559;font-size: 14px; color: #000000;line-height: 16px;letter-spacing: -0.4px;">{{ item.title }}</p>
            <v-divider class="mt-2" style="border:solid px #000000" width="24px" color="#000000"></v-divider>
            <p class="mt-3 mb-1 " style="color:#666666;font-size: 12px;font-weight:469;line-height: 16px;">{{
              item.fund }}</p>
            <p class="mb-0" style="color:#43A833;font-size: 12px;font-weight:559;line-height: 16px;letter-spacing: -0.4px;">
              {{ item.rec }}</p>
          </v-card>

        </div>

        


        <v-card class="mt-5 " outlined style="border: 1px solid #efeef3;">
            <v-toolbar class="mt-3 mb-1 px-1 toolbar-contant" elevation="0" color="white">
            <v-list class="" style="background-color: transparent;">
            <v-list-item class=" pt-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
<path d="M41.46 29.3099C41.1153 29.3191 40.778 29.2093 40.5048 28.999C40.2316 28.7886 40.0392 28.4905 39.96 28.1549L37.5 17.2199L34.995 28.1549C34.9056 28.5397 34.6679 28.8737 34.3337 29.0843C33.9995 29.2949 33.5957 29.3652 33.21 29.2799C33.0165 29.2374 32.8334 29.1569 32.6712 29.0432C32.509 28.9296 32.3709 28.7848 32.2649 28.6175C32.1589 28.4501 32.0871 28.2635 32.0536 28.0682C32.0202 27.873 32.0257 27.673 32.07 27.4799L36 10.1699C36.0813 9.84558 36.2686 9.5577 36.5322 9.352C36.7958 9.1463 37.1206 9.03458 37.455 9.03458C37.7894 9.03458 38.1141 9.1463 38.3778 9.352C38.6414 9.5577 38.8287 9.84558 38.91 10.1699L42.885 27.4799C42.9292 27.673 42.9348 27.873 42.9013 28.0682C42.8679 28.2635 42.7961 28.4501 42.6901 28.6175C42.5841 28.7848 42.446 28.9296 42.2838 29.0432C42.1216 29.1569 41.9385 29.2374 41.745 29.2799C41.6515 29.301 41.5558 29.3111 41.46 29.3099ZM14.46 29.3099C14.1153 29.3191 13.778 29.2093 13.5048 28.999C13.2316 28.7886 13.0392 28.4905 12.96 28.1549L10.5 17.2199L7.99499 28.1549C7.90555 28.5397 7.66793 28.8737 7.33372 29.0843C6.99952 29.2949 6.59571 29.3652 6.20999 29.2799C6.01652 29.2374 5.83339 29.1569 5.67117 29.0432C5.50896 28.9296 5.37087 28.7848 5.26488 28.6175C5.15889 28.4501 5.08709 28.2635 5.05364 28.0682C5.02019 27.873 5.02575 27.673 5.06999 27.4799L8.99999 10.1699C8.99999 9.7721 9.15803 9.39057 9.43933 9.10926C9.72063 8.82796 10.1022 8.66992 10.5 8.66992C10.8978 8.66992 11.2793 8.82796 11.5606 9.10926C11.842 9.39057 12 9.7721 12 10.1699L15.975 27.4799C16.0192 27.673 16.0248 27.873 15.9913 28.0682C15.9579 28.2635 15.8861 28.4501 15.7801 28.6175C15.6741 28.7848 15.536 28.9296 15.3738 29.0432C15.2116 29.1569 15.0285 29.2374 14.835 29.2799C14.7123 29.3091 14.5858 29.3192 14.46 29.3099Z" fill="#ECEEF0"/>
<path d="M40.5 12H7.5C7.10218 12 6.72064 11.842 6.43934 11.5607C6.15804 11.2794 6 10.8978 6 10.5C6 10.1022 6.15804 9.72064 6.43934 9.43934C6.72064 9.15804 7.10218 9 7.5 9H40.5C40.8978 9 41.2794 9.15804 41.5607 9.43934C41.842 9.72064 42 10.1022 42 10.5C42 10.8978 41.842 11.2794 41.5607 11.5607C41.2794 11.842 40.8978 12 40.5 12Z" fill="#70564A"/>
<path d="M24 39C23.6022 39 23.2206 38.842 22.9393 38.5607C22.658 38.2794 22.5 37.8978 22.5 37.5V4.5C22.5 4.10218 22.658 3.72064 22.9393 3.43934C23.2206 3.15804 23.6022 3 24 3C24.3978 3 24.7794 3.15804 25.0607 3.43934C25.342 3.72064 25.5 4.10218 25.5 4.5V37.5C25.5 37.8978 25.342 38.2794 25.0607 38.5607C24.7794 38.842 24.3978 39 24 39Z" fill="#ECEEF0"/>
<path d="M24 13.5C25.6569 13.5 27 12.1569 27 10.5C27 8.84315 25.6569 7.5 24 7.5C22.3431 7.5 21 8.84315 21 10.5C21 12.1569 22.3431 13.5 24 13.5Z" fill="#F4D45A"/>
<path d="M43.5 27V30C43.5 30.7956 43.1839 31.5587 42.6213 32.1213C42.0587 32.6839 41.2956 33 40.5 33H34.5C33.7044 33 32.9413 32.6839 32.3787 32.1213C31.8161 31.5587 31.5 30.7956 31.5 30V27H43.5Z" fill="#F4D45A"/>
<path d="M13.5 33H7.5C6.70435 33 5.94129 32.6839 5.37868 32.1213C4.81607 31.5587 4.5 30.7956 4.5 30V27H16.5V30C16.5 30.7956 16.1839 31.5587 15.6213 32.1213C15.0587 32.6839 14.2956 33 13.5 33Z" fill="#F4D45A"/>
<path d="M18 37.5H30C30.7956 37.5 31.5587 37.8161 32.1213 38.3787C32.6839 38.9413 33 39.7044 33 40.5V42C33 42.3978 32.842 42.7794 32.5607 43.0607C32.2794 43.342 31.8978 43.5 31.5 43.5H16.5C16.1022 43.5 15.7206 43.342 15.4393 43.0607C15.158 42.7794 15 42.3978 15 42V40.5C15 39.7044 15.3161 38.9413 15.8787 38.3787C16.4413 37.8161 17.2044 37.5 18 37.5Z" fill="#654D43"/>
</svg>
            <v-list-item-content class="pl-5">
                    <v-list-item-title class="text-start" style="color: #000000;font-size: 20px;font-weight:559;line-height:16px;letter-spacing:-1px">Balanced Wealth</v-list-item-title>
 
                    <v-list-item-subtitle class="text-start pt-1" style="color: #666666;font-size: 12px;font-weight:469;line-height:14px">Stable income and growth
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-spacer></v-spacer>
              <v-text-field class="tophundraedmutual mt-6 mr-5" height="36px" background-color="#F1F3F8"
                label="Search baskets" solo rounded flat dense>
                <template v-slot:prepend-inner>
                  <img alt="" class="shrink" :src="require('@/assets/zebu-stocks/searchicon.svg')" width="20px"
                    height="18px" />
                </template>
            
              </v-text-field>
            </v-toolbar>
            <v-data-table   :headers="collectionheaders"  dense
          :items="mutualfunditems" :items-per-page="ggggggggggg" item-key="id" v-model="selectedRows" class="elevation-0"
          hide-default-footer style="border: 1px solid #efeef3;background-color:white">
          <template v-slot:[`header.iron`]="{ header }">
       <v-row class="pr-0" no-gutters>
        <v-col cols="9" class="">
<p class="mb-0 pt-2 ">{{ header.text }}</p>
        </v-col>
        <v-col cols="3">
            <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="buttoncontant" icon>
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
          <template v-slot:footer>
            <v-divider></v-divider>
            <div class="text-center" v-if="hhdhdhhhdhh">
              <v-btn text color="primary" dark class="ma-2 text-none" @click="sssssssssss">
              <span class="" style="color: #0037B7;font-size: 14px;font-weight:559;line-height:16px"> More tax saving funds
</span>   <v-icon color="black"> mdi-chevron-down</v-icon>
              </v-btn>
            </div>

            <div class="text-center" v-if="iiiiiiii">

              <v-btn text color="primary" dark class="ma-2 text-none" @click="Seemorestocksup">
                <span class="" style="color: #0037B7;font-size: 14px;font-weight:559;line-height:16px"> Less tax saving funds
</span>       <v-icon color="black"> mdi-chevron-up</v-icon>
              </v-btn>
            </div>
          </template>
          <v-divider></v-divider>
          <template v-slot:item="{ item }">
                <tr class="" @click="newcreatechange(item)" style="cursor: pointer;position: relative;" @mouseover="selectItem(item)"
              @mouseleave="unSelectItem(item)">
              <td class="pt-4" style="width:368px;">
                <v-row>
                    <v-col cols="8">
                        <p  to="collectionsingle" class="mb-2" style="width:285px;color: #000000;font-size: 14px;font-weight:559;line-height:16px;letter-spacing:-0.5px;  "> {{ item.Fundname }}</p>
            <p class="" style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px;letter-spacing: 0.8px;text-transform: uppercase;">{{item.mby  }}</p>
                    </v-col>
                    <v-col cols="2" class="pr-0" v-if="item.chipname == 'Reco'" >
                        <v-card class="px-2 py-1 rounded-lg elevation-0" color="#ECF5EA">
                            <p class="text-center mb-0" style="font-size:12px;font-weight:559;line-height:16px;color:#43A833">{{ item.chipname }}</p> 
                        </v-card>
                    </v-col>
                </v-row>
                <div class="postionchangemutualfundchangeone" v-if="item === selectedItem">
                  <div class="display-flex row ">
                    <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                      style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                      <img
                                                        alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/tradingsymbol.svg')"
                                                        width="12px"  height="6px"/></v-btn>
                    <v-btn class="ml-1 pa-0  elevation-0"  outlined small
                      style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white" >
                      <img alt="" class="shrink " :src="require('@/assets/zebu-stocks/tradinnote.svg')"
                        /></v-btn>
                  </div>
                </div>
              </td>
              <td class=""> <p class="mb-0 mt-n4" style="color: #000;font-size: 13px;font-weight: 469;line-height: 16px;">
                {{item.risk}}
              </p></td>
              <td class="">
                <p class="mt-n4 mb-0" style="font-size:13px;color:#000000;font-weight:469;line-height:16px;">{{
                item.stock }}
              </p></td>
              <td class=""><p class="mt-n4 mb-0" style="font-size:13px;color:#000000;font-weight:469;line-height:16px;"> {{ item.MinInvest
              }}</p></td>
              <td class="" >
                <p v-if="item.oneyearCAGR > 0" class="text-wrap mt-n4 mb-0" style="color:#43A833 !important;font-size: 13px;font-weight:469;line-height:16px;">{{
                  item.oneyearCAGR }}
                  %</p>
                  <p class="mb-0" v-else style="color:red !important; font-size: 13px;font-weight:469;line-height:16px;">{{
                item.oneyearCAGR }}
                  %</p>
              </td>
              <td class="" >
                <p v-if="item.threeyrCAGR > 0" class="text-wrap pl-1 mt-n4  mb-0" style="color:#43A833 !important;font-size: 13px;font-weight:469;line-height:16px;">{{
                  item.threeyrCAGR }}
                  %</p>
                  <p  v-else class="mt-n4" style="color:red !important; font-size: 13px;font-weight:469;line-height:16px;">{{
                item.threeyrCAGR }}
                  %</p>
              </td>
            </tr>
          </template>
        </v-data-table>
          </v-card>
            </v-col>
            <v-col cols="3" class="pt-9">
                <div class="pt-16 mt-16">
                <v-row class="d-flex " style="width: 370px">
                    <v-col>
                        <p class="body-2 font-weight-bold">Filters</p>
                    </v-col>
                    <v-col class="ml-auto mt-n2 ">
                        <v-btn text color="#0037B7 " dark class="ml-4 mr-n2  body-2 px-0 font-weight-bold  text-capitalize"
                            @click="reset">
                            Reset
                        </v-btn>
                        <v-menu class="" bottom left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn dark class="ml-auto mt-1" icon v-bind="attrs" v-on="on">
                                    <v-icon size="20" color="black">mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(item, i) in items" :key="i">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>
                <!-- select  -->
                    <div class="ml-n4" style="width: 315px">
                    <v-list>
                    <v-list-group v-for="group in groups" :key="group.id" :prepend-icon="group.icon">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <div class="d-flex">
                                    <p class="mb-0 body-2 font-weight-medium " style="color: #666666;">{{ group.title }}</p>
                                    <p class="ml-auto pr-n3 mb-0 caption font-weight-medium" style="color: #666666;">{{ getSelectedItemCount(group) }} {{ group.lsi }}</p>
                                </div>
                            </v-list-item-content>
                        </template>
                        
                        <v-list-item v-for="item in group.items" :key="item.id">
                            <v-list-item-content>
                                <div class="d-flex  " >
                                    <v-card  width="16" height="16" v-model="value" label x-small
                                        :color="item.selected ? '#0037B7' : '#F1F3F8'" :text-color="item.selected ? 'white' : ''"
                                        @click="toggleChipSelection1(item)" class=" elevation-0">
                                    </v-card>
                                    <p @click="toggleChipSelection1(item)" class="mb-0 ml-3  caption font-weight-bold" style="margin-top: -2px;" :style="getTitleColorStyle1(item)">{{
                                        item.title }}</p>
                                </div>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </v-list>

                
                    <v-list class="mt-n4">
                        <v-list-group>
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <p class="body-2"> Min. purchase amount</p>
                                </v-list-item-content>
                            </template>
                            <v-list-item>
                                <v-list-item-content>
                                    <div class="d-flex flex-row px-3">
                                        <p class="  mt-1" style="font-size: 10px;">MIN</p>
                                        <p class="  ml-auto" style="font-size: 10px;">MAX</p>
                                    </div>
                                    <v-range-slider  v-model="range" :max="max" :min="min" hide-details track-color="red"
                                        thumb-color="red" class="align-center mt-n7">
                                        <template v-slot:prepend>
                                            <div>
                                                <p class="caption mt-4  font-weight-bold">0.0%</p>
                                            </div>
                                        </template>
                                        <template v-slot:append>
                                            <P class="caption mt-4  font-weight-bold">3.0%</P>
                                        </template>
                                    </v-range-slider>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                    <v-list class="mt-n7">
                        <v-list-group>
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <p class="body-2"> AUM</p>
                                </v-list-item-content>
                            </template>
                            <v-list-item>
                                <v-list-item-content>
                                    <div class="d-flex flex-row px-3">
                                        <p class="  mt-1" style="font-size: 10px;">MIN</p>
                                        <p class="  ml-auto" style="font-size: 10px;">MAX</p>
                                    </div>

                                    <v-range-slider  v-model="range" :max="max" :min="min" hide-details track-color="red"
                                        thumb-color="red" class="align-center mt-n7">
                                        <template v-slot:prepend>
                                            <div>
                                                <p class="caption mt-4 d-flex  font-weight-bold" >₹0 <span style="color: #666666 ; font-size: 10px;">Cr</span></p>
                                            </div>
                                        </template>
                                        <template v-slot:append>
                                            <p class="caption font-weight-bold mt-4 d-flex" >₹100k <span style="color: #666666 ; font-size: 10px;">Cr</span></p>
                                        </template>
                                    </v-range-slider>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                </div></div>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data() {
        return {

            showmore2: true,
            showmore23: false,
            perpage: 8,
            items1: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],
            itemsmenu: [
                { title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me 2' },
            ],
            
            data1: [
                {
                    title: "NIFTY 25 MAY FUT",
                    chip: "FUT",
                    exp: "Expiry",
                    day: "May 25",
                    price: "₹236.05",
                    per: "(+1.65%)",
                    price2: "17,47,578",
                    per2: "(+1.65%)"
                },
                {
                    title: "NIFTY 25 MAY FUT",
                    chip: "FUT",
                    exp: "Expiry",
                    day: "May 25",
                    price: "₹236.05",
                    per: "(+1.65%)",
                    price2: "17,47,578",
                    per2: "(+1.65%)"
                },
                {
                    title: "NIFTY 25 MAY FUT",
                    chip: "FUT",
                    exp: "Expiry",
                    day: "May 25",
                    price: "₹236.05",
                    per: "(+1.65%)",
                    price2: "17,47,578",
                    per2: "(+1.65%)"
                },
                {
                    title: "NIFTY 25 MAY FUT",
                    chip: "FUT",
                    exp: "Expiry",
                    day: "May 25",
                    price: "₹236.05",
                    per: "(+1.65%)",
                    price2: "17,47,578",
                    per2: "(+1.65%)"
                },
                {
                    title: "NIFTY 25 MAY FUT",
                    chip: "FUT",
                    exp: "Expiry",
                    day: "May 25",
                    price: "₹236.05",
                    per: "(+1.65%)",
                    price2: "17,47,578",
                    per2: "(+1.65%)"
                },


            ],
            data2: [
                {
                    chip: "CALL",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: +1.65,
                },
                {
                    chip: "CALL",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: -1.65,
                },
                {
                    chip: "PUT",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: +1.65,
                },
                {
                    chip: "CALL",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: -1.65,
                },
                {
                    chip: "CALL",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: +1.65,
                },
                {
                    chip: "CALL",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: +1.65,
                },
                {
                    chip: "PUT",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: -1.65,
                },
                {
                    chip: "CALL",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: +1.65,
                },
                {
                    chip: "CALL",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: -1.65,
                },
                {
                    chip: "PUT",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: +1.65,
                },
                {
                    chip: "CALL",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: -1.65,
                },
                {
                    chip: "CALL",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: +1.65,
                },
                {
                    chip: "PUT",
                    title: "Nifty 18400",
                    price: "₹236.05",
                    per: -1.65,
                },

            ],
            




            // ..............................................................................................................
            min: -50,
            max: 90,
            range: [-20, 70],
            min1: -10,
            max1: 150,
            range1: [-10, 50],
            value: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            selectedItem: false,
            collectioncategories: [
                {

                    title: "Balanced Wealth",
                    fund: "395 Baskets",
                    rec: "18 recommended",  
                },
                {
                    title: "Balanced Wealth",
                    fund: "472 Baskets",
                    rec: "20 recommended",
                },
                {
                    title: "Balanced Wealth",
                    fund: "235 Baskets",
                    rec: "11 recommended",
                },{
                    title: "Balanced Wealth",
                    fund: "235 Baskets",
                    rec: "11 recommended",
                },{
                    title: "Balanced Wealth",
                    fund: "235 Baskets",
                    rec: "11 recommended",
                },
            ],
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
            drop: [
                'Debt funds',
                'Hybrid funds ',
                'Equity funds ',
                'Sectoral funds  ',
                'Other funds  ',
            ],
            drop2: [
                'Debt funds',
                'Hybrid funds ',
                'Equity funds ',
                'Sectoral funds  ',
                'Other funds  ',
            ],
            drop3: [
                'Debt funds',
                'Hybrid funds ',
                'Equity funds ',
                'Sectoral funds  ',
                'Other funds  ',
            ],
            drop4: [
                'Debt funds',
                'Hybrid funds ',
                'Equity funds ',
                'Sectoral funds  ',
                'Other funds  ',
            ],
            groups: [
                {
                    id: 1,
                    title: "Stocks",
                    lsi: " lists",
                    items: [
                        { id: 1, title: "My top stocks", selected: false },
                        { id: 2, title: "2022 Stocks", selected: false },
                        { id: 3, title: "2023 Stocks", selected: false },
                        { id: 3, title: "Momentum", selected: false },
                    ],
                },
                {
                    id: 2,
                    title: "ETF",
                    lsi: "lists",
                    items: [
                        { id: 4, title: "Item 4", selected: false },
                        { id: 5, title: "Item 5", selected: false },
                    ],
                },
                {
                    id: 3,
                    title: "ETF",
                    lsi: "lists",
                    items: [
                        { id: 4, title: "Item 4", selected: false },
                        { id: 5, title: "Item 5", selected: false },
                    ],
                },
                {
                    id: 4,
                    title: "ETF",
                    lsi: "lists",
                    items: [
                        { id: 4, title: "Item 4", selected: false },
                        { id: 5, title: "Item 5", selected: false },
                    ],
                },
            ],
            // seo
            collectionheaders: [
                { text: "Fund name",align: "left",sortable: false,value: "Fundname", class: "headerfontchange"},
                { text: "Risk", sortable: false, value: "calories", class: "headerfontchange" },
                { text: "Total stocks", sortable: false, value: "calories", class: "headerfontchange", },
                { text: "Min. Invest", sortable: false, value: "carbs", class: "headerfontchange" },
                { text: "1yr CAGR", sortable: false, value: "protein", class: "headerfontchange" },
                { text: "3yr CAGR", sortable: false, value: "iron", class: "headerfontchange" ,width:"14.5%",align:"center" },
            ],
            mutualfunditems: [
                {
                    id: 1,
                    Fundname: "Mid and Small Cap Focused Portfolio",
                    risk: "High",
                    stock: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    mby : "Managed by Niveshaay",
                    chipname: "Reco",
                },
                {
                    id: 2,
                    Fundname: "Omkara Manufacturing Zebu ",
                    risk: "Low",
                    stock: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                  
                    mby : "Managed by Omkara Capital",

                },
                {
                    id: 3,
                    Fundname: "Teji Mandi Multiplier",
                    risk: "High",
                    stock: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    mby : "Managed by Teji Mandi",
                },
                {
                    id: 4,
                    Fundname: "Listed Venture Capital",
                    risk: "Low",
                    stock: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    mby : "Managed by Lotusdew Wealth",
                },
                {
                    id: 5,
                    Fundname: "IT Tracker",
                    risk: "High",
                    stock: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    mby : "Managed by Windmill Capital",
                },
                {
                    id: 6,
                    Fundname: "Pharma Tracker",
                    risk: "Low",
                    stock: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    mby : "Managed by Windmill Capital",
                },
                {
                    id: 7,
                    Fundname: "H2 Multicap Strategy",
                    risk: "High",
                    stock: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    mby : "Managed by H2 MANAGERS",
                    threeyrCAGR: 82.1,
                },
                {
                    id: 8,
                    Fundname: "PSU BANKS FOR SIP",
                    risk: "Low",
                    stock: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    mby : "Managed by Windmill Capital",
                },
            ],
        }
    },
    methods: {
        newcreatechange (item) {
console.log("check response",item.Fundname)
            this.$router.push('/collectionsingle')
        },
        reset() {
            this.selectedItem = false;
            this.clearform();
        },
            getSelectedItemCount(group) {
            return group.items.filter(item1 => item1.selected).length;
       },
        clearform() {
            this.value = '';
            this.value2 = '';
            this.value3 = '';
            this.value4 = '';
            this.value5 = '';
        },
        selectItem(item) {
            this.selectedItem = item;
            this.count = item.length
        },
        toggleChipSelection(item) {
            item.selected = !item.selected;
        },
        getTitleColorStyle(item) {
            return {
                color: item.selected ? "blue" : "black",
            };
        },
        getTextColorStyle(item) {
            return {
                color: item.selected ? "green" : "black",
            };
        }, unSelectItem() {
            this.selectedItem = false;
        },
        // .....................................................................................
        showmore() {
            this.perpage = this.mutualfunditems.length
            this.showmore2 = !this.showmore2
            this.showmore23 = !this.showmore23
        },
        showmore1() {
            this.perpage = 8
            this.showmore2 = !this.showmore2
            this.showmore23 = !this.showmore23
        },
    toggleChipSelection1(item1) {
      item1.selected = !item1.selected;
    },
    getTitleColorStyle1(item1) {
      return {
        color: item1.selected ? "blue" : "black",
      };
    },
    unSelectItem1() {
      this.selectedItem1 = false;
    },
    }
}
</script>
<style>
.headerfontchange{
    color: #666 !important;
font-size: 13px !important;
font-weight: 469 !important;
line-height: 16px !important;
}
.postionchangecat {
    position: absolute !important;
    top: 25px !important;
    right: 505px;
}
.theme--light.v-input.pl input::placeholder,.pl input {
  font-weight: 469;
  color: rgb(0, 0, 0) !important;
  max-width: 104px !important;
  padding-right: -100px;
}
.ml{
    margin-top: -15px;
}
</style>