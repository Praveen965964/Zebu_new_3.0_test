<template>
    <div id="app">
        <v-row class="pb-16" v-if="home">
            <v-col cols="12" lg="9"   class="pt-0 pr-md-8  pl-md-3 pr-3 pt-4">
                <v-card class="rounded-lg elevation-0 mt-4  d-none d-md-block" style="overflow: visible;" color="#51FFB6" height="224px">
                    <div class="pl-8 pt-5 ">
                        <v-row class="">
                            <v-col cols="4" >
                                <p class="tittlelarge  mt-3" style="">Simple.<br>
                                    Insightful. <br>Incremental.</p>
                                <v-btn color="#000000" height="34px" class="mt-3 text-none rounded-pill elevation-0"><span
                                        class="btnfontsize">Get free account</span></v-btn>
                            </v-col>
                            <v-col class=" pl-0 " cols="8">
                                <div class="display-flex row pt-4">
                                    <v-card class="pt-4 pl-3 pr-4 simpleinsightfullcard">
                                        <img class="" :src="require('@/assets/zebu-stocks/back-office-stocks.svg')"
                                            width="100%" height="130px" />
                                        <v-card-actions>
                                            <p class="text-start buystocks  mb-0 pt-2" style="">Buy stocks <br>with a click.</p>
                                        </v-card-actions>
                                    </v-card>
                                    <v-card class="pl-4 pr-4 pt-3 pb-3 ml-4 simpleinsightfullcard">
                                        <img class="" :src="require('@/assets/zebu-stocks/investsafe.svg')" width="100%"
                                            height="120px" />
                                        <p class="text-start buystocks pt-3 mb-0">Invest safely in <br>Government& <br> Gold
                                            bonds</p>
                                    </v-card>
                                    <v-card class="pl-2 pr-2 pt-4 pb-3 ml-4 simpleinsightfullcard">
                                        <img class="" :src="require('@/assets/zebu-stocks/findipos.svg')" width="100%"
                                            height="110px" />
                                        <p class="buystocks mb-0 pt-4 pl-2">
                                            Find early<br>winners with <br>IPOs</p>
                                    </v-card>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
                <v-toolbar class="mt-14 mb-1 pl-sm-0 pl-5 mb-sm-0 mt-md-5 pt-0 pb-0  toolbar-contant " elevation="0" color="white"
                    style="background-color: transparent;" height="20px">
                    <v-toolbar-title class="fontsize20 ">Top indices</v-toolbar-title>  
                    <v-spacer></v-spacer>
                      <v-btn color="#0037B7" :ripple="false" id="no-background-hover"
                                class="body-2 font-weight-bold text-capitalize d-none d-md-block" @click="indicesPage()" text dense>See all
                                indexes
                            </v-btn>
                    <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="buttoncontant d-none d-md-block" icon>
                                <v-icon color="black">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
<v-btn text color="transparent" class="pa-0 mr-2 d-sm-none  text-none" style="height:fit-content;width:fit-content"><span style="color: #0037B7;font-size: 14px;font-weight: 559;line-height: 16px;">See all</span></v-btn>
                </v-toolbar>
                

                <!-- <div class="" style="overflow: scroll; "></div> -->
                <!-- <div class="" style="display: inline-flex; overflow: hidden; "> -->
                    <div class="hhhhhhhhhhh">
                    <div  style="overflow: scroll; ">
                <div class="mt-2 ml-n2 pl-sm-0 pl-4" style="display: inline-flex; overflow: hidden; ">
                    <v-card v-for="(item, index) in itemsss" :key="index" @click="SingleIndexpage(index)" elevation="0"
                        outlined height="89px" width="134px" class="pl-3 pt-2 ml-3" >
                        <p class="mb-1 fontsize14b" style="">{{ item.idxname }}</p>
                        <v-divider class="mt-2" style="border:1px solid;background-color: #000000;"
                            width="24px"></v-divider>
                        <p class="mb-0 pt-3 fontsize12grey">₹{{ item.lp }}</p>
                        <p class="mb-0 pt-1 fontsize12green" :class="getTextColorClass(item.change)">{{ item.ch }}<span>({{
                            item.change }}%)</span>
                        </p>
                    </v-card>
                    <v-row v-if="itemsss == ''" class="elevation-0 ">
                        <v-col cols="12" class="font-weight-medium mb-7 mt-10"
                            style="font-size:14px; color: #d6d6d6;">
                            <p class=" text-center">No data available</p></v-col>
                    </v-row>
                </div></div></div>

                
                <p class="fontsize20 mb-0 pt-10 d-none d-md-block">Today’s trade action</p>
                <v-card class="rounded-lg elevation-0 mt-6 scrollcustamize d-none d-md-block" color="#F1F3F8" height="64px" width="100%">
                    <v-row nogutters>
                        <v-col cols="3">
                            <p class="pl-6 mt-1 fontsize15">
                                Advance/<br>Decline Ratio</p>
                        </v-col>
                        <v-col class="" cols="9">
                            <div class="display-flex row py-1">
                                <v-card class="elevation-0 rounded-lg ml-n1" style="margin-top:2px" height="52px"
                                    width="322px">
                                    <v-row>
                                        <v-col cols="3" class="">
                                            <p class="mb-0 mt-2 pl-3 fontsize15"> Stocks</p>
                                            <p class="mb-0 pl-3 pt-1 fontsize14g"> {{ this.totalvaluestore }}
                                            </p>
                                        </v-col>
                                        <v-col v-if="this.valuestore == ''" cols="9"
                                            class="font-weight-medium mb-7 mt-4 text-center">No data available
                                        </v-col>
                                        <v-col v-else class="" cols="9">
                                            <div class="display-flex row pr-5 pl-3 mt-3">
                                                <v-tooltip color="black" bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-card v-bind="attrs" v-on="on" class="elevation-0 ml-n2"
                                                            :width="`${100 * (valuestore.Positive / totalvaluestore)}%`"
                                                            height="8px" color="#43A833">
                                                        </v-card></template>
                                                    <span>Positive: {{ (100 * (valuestore.Positive /
                                                        totalvaluestore)).toFixed() }}60%</span>
                                                </v-tooltip>
                                                <v-tooltip color="black" bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-card v-bind="attrs" v-on="on" class="elevation-0 ml-1"
                                                   :width="`${100 * (valuestore.Neutral / totalvaluestore)}%`"
                                                            height="8px" color="#D9D9D9"></v-card>
                                                    </template>
                                                    <span>Neutral: {{ (100 * (valuestore.Neutral /
                                                        totalvaluestore)).toFixed()
                                                    }}20%</span>
                                                </v-tooltip>
                                                <v-tooltip color="black" bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-card v-bind="attrs" v-on="on" class="elevation-0 ml-1"
                                                            :width="`${100 * (valuestore.Neutral / totalvaluestore)}%`"
                                                            height="8px" color="red"></v-card>
                                                    </template>
                                                    <span>Neutral: {{ (100 * (valuestore.Neutral /
                                                        totalvaluestore)).toFixed()
                                                    }}20%</span>
                                                </v-tooltip>
                                            </div>
                                            <v-row class="pt-1">
                                                <v-col class="pt-0 pb-0 pl-1" cols="6">
                                                    <div class="text-start">
                                                        <img alt="" class="shrink "
                                                            :src="require('@/assets/zebu-stocks/arrowgreen.svg')"
                                                            width="10px" height="10px" /><span class=" ml-1"
                                                            style="font-size:12px;color:#666666;font-weight:469">{{valuestore.Positive}}</span>
                                                    </div>
                                                </v-col>
                                                <v-col class="pa-0 pr-5" cols="6" align="end">
                                                    <img alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/redarrow.svg')" width="10px"
                                                        height="10px" /> <span class="font-weight-medium"
                                                        style="font-size:12px;color:#666666;font-weight:469">{{this.valuestore.Negative}}</span>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <v-card class="ml-2 elevation-0 rounded-lg" height="52px" width="322px"
                                    style="margin-top:2px">
                                    <div v-if="clientids == ''" class="f mb-1 pb-1  mr-2 rounded-lg elevation-0">
                                        <v-row>
                                            <v-col cols="3">
                                                <p class="mb-0 mt-2 pl-2 fontsize15">Sector</p>
                                            </v-col>
                                            <v-col cols="9">
                                                <p class="font-weight-medium mb-7 mt-4 text-center">No data available</p>
                                            </v-col>
                                        </v-row>
                                    </div>
                                    <v-carousel v-else vertical interval="6500" height="52px" cycle :show-arrows="false"
                                        hide-delimiters hide-delimiter-background>
                                        <v-carousel-item v-for="sectorvalue in clientids" :key="sectorvalue">
                                            <div class=" elevation-0">
                                                <v-row>
                                                    <v-col cols="3" class="pr-0">
                                                        <v-tooltip color="black" top>
                                                            <template v-slot:activator="{ on, attrs }">
                                                                <p v-bind="attrs" v-on="on" class="mb-0 mt-2 pl-2"
                                                                    style="font-size: 15px;color:#000000;line-height:16px;font-weight:559;letter-spacing: -1px;">
                                                                    Sectors<span class="mdi mdi-information-variant "
                                                                        style="font-size:16px"></span></p>
                                                            </template>
                                                            <span class="white--text font-weight-medium body-2"
                                                                style="">Sector : {{ sectorvalue.Sector }}</span>
                                                        </v-tooltip>
                                                        <p class="mb-0 pl-3 pt-1 fontsize14g">
                                                            {{ sectorvalue.Negative + sectorvalue.Positive + sectorvalue.Neutral }}
                                                        </p>
                                                    </v-col>
                                                    <v-col class="" cols="9">
                                                        <div class="display-flex row pr-5 pl-3 mt-3">
                                                            <v-tooltip color="black" bottom>
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-card v-bind="attrs" v-on="on"
                                                                        class="elevation-0 ml-n2"
                                                                        :width="`${100 * (sectorvalue.Positive / (sectorvalue.Negative + sectorvalue.Positive + sectorvalue.Neutral))}%`"
                                                                        height="8px" color="#43A833">
                                                                    </v-card></template>
                                                                <span class="font-weight-medium"
                                                                    style="font-size: 14px;color:#FFFFFF">Positive : {{
                                                                        (100 * (sectorvalue.Positive / (sectorvalue.Negative + sectorvalue.Positive + sectorvalue.Neutral))).toFixed() }}%</span>
                                                            </v-tooltip>
                                                            <v-tooltip color="black" bottom>
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-card v-bind="attrs" v-on="on"
                                                                        class="elevation-0 ml-1"
                                                                        :width="`${100 * (sectorvalue.Neutral / (sectorvalue.Negative + sectorvalue.Positive + sectorvalue.Neutral))}%`"
                                                                        height="8px" color="#D9D9D9"></v-card>
                                                                </template>
                                                                <span class="font-weight-medium"
                                                                    style="font-size: 14px;color:#FFFFFF">Neutral : {{
                                                                        (100 * (sectorvalue.Neutral / (sectorvalue.Negative + sectorvalue.Positive + sectorvalue.Neutral))).toFixed() }}%</span>
                                                            </v-tooltip>
                                                            <v-tooltip color="black" bottom>
                                                                <template v-slot:activator="{ on, attrs }">
                                                                    <v-card v-bind="attrs" v-on="on"
                                                                        class="elevation-0 ml-1"
                                                                        :width="`${100 * (sectorvalue.Negative / (sectorvalue.Negative + sectorvalue.Positive + sectorvalue.Neutral))}%`"
                                                                        height="8px" color="red"></v-card>
                                                                </template>
                                                                <span class="font-weight-medium"
                                                                    style="font-size: 14px;color:#FFFFFF">Negative : {{
                                                                        (100 * (sectorvalue.Negative / (sectorvalue.Negative + sectorvalue.Positive + sectorvalue.Neutral))).toFixed() }}%</span>
                                                            </v-tooltip>
                                                        </div>
                                                        <v-row class="pt-1">
                                                            <v-col class="pt-0 pb-0 pl-1" cols="6">
                                                                <div class="text-start">
                                                                    <img alt="" class="shrink "
                                                                        :src="require('@/assets/zebu-stocks/arrowgreen.svg')"
                                                                        width="10px" height="10px" /><span
                                                                        class=" ml-1 fontsize12grey">{{ sectorvalue.Positive }}</span>
                                                                </div>
                                                            </v-col>
                                                            <v-col class="pa-0 pr-5" cols="6" align="end">
                                                                <img alt="" class="shrink "
                                                                    :src="require('@/assets/zebu-stocks/redarrow.svg')"
                                                                    width="10px" height="10px" /> <span
                                                                    class="fontsize12grey">{{ sectorvalue.Negative }}</span>
                                                            </v-col>
                                                        </v-row>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                        </v-carousel-item>
                                    </v-carousel>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
                
                <v-tabs background-color="transparent" class="mt-5 d-none d-md-block" color="black" v-model="tabtopgainer">
                    <v-tab v-for="tabss in TradeActionTab" :key="tabss" class="ml-1"><span class=" text-none tabfonts"
                            style="">{{ tabss }}
                        </span> </v-tab>
                </v-tabs>
                <v-tabs-items class="d-none d-md-block" v-model="tabtopgainer">
                    <!-- table-1 -->
                    <v-tab-item>
                        <v-data-table hide-default-header :headers="headers" :items="gainer" :items-per-page="ggggggggggg"
                            item-key="id" v-model="selectedRows" class="elevation-0" hide-default-footer
                            style="border: 1px solid #efeef3;background-color:white">
                            <template v-slot:footer>
                                <v-divider></v-divider>
                                <div class="text-center" v-if="hhdhdhhhdhh">
                                    <v-btn text color="primary" dark class="ma-2 text-none" @click="sssssssssss()">
                                        <span class="seemorelessfontsize">See more stocks</span> <v-icon color="black"> mdi-chevron-down</v-icon>
                                    </v-btn>
                                </div>
                                <div class="text-center" v-if="iiiiiiii">
                                    <v-btn text color="primary" dark class="ma-2 text-none" @click="Seemorestocksup()">
                                        <span class="seemorelessfontsize"
                                            style="color: #0037B7;font-size: 14px;font-weight:559;line-height:16px;letter-spacing:0px">See Less stocks</span> <v-icon color="black"> mdi-chevron-up</v-icon>
                                    </v-btn>
                                </div>
                            </template>
                            <template v-slot:header>
                                <tr class="" style="background-color: #FAFBFF;">
                                    <th class="text-start"><span class="pl-4 pt-1 pb-1 fontsize14g">Scrips</span>
                                    </th>
                                    <th class="text-start">
                                        <P class="pl-4 pt-1 pb-1 mb-0 fontsize14g"> Mkt cap <span class="">&nbsp;(cr)</span></p>
                                    </th>
                                    <th class="text-start">
                                        <P class="pl-4 pt-1 pb-1 mb-0 fontsize14g">Volume <span class="">&nbsp;(k)</span> </p>
                                    </th>
                                    <th class="text-start"><span class="pl-2 pt-1 pb-1 fontsize14g">Price</span>
                                    </th>
                                    <th class="text-start"><span class="pl-4 pt-1 pb-1 fontsize14g">%Chg</span>
                                    </th>
                                    <th class="text-start"><span class="pl-4 pt-1 pb-1 fontsize14g">200dma</span>
                                    </th>
                                    <th class="pt-1">
                                        <v-row class="mr-0">
                                            <v-col cols="10">
                                                <span class="fontsize14g">Day’s range</span>
                                            </v-col>
                                            <v-col cols="2">
                                                <v-menu left offset-y>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn v-bind="attrs" v-on="on" plain :ripple="false"
                                                            class="buttoncontant mt-n1" icon>
                                                            <v-icon size="19" color="black">mdi-dots-vertical</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list>
                                                        <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                                            <v-list-item-title>{{ item.title
                                                            }}</v-list-item-title>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </v-col>
                                        </v-row>
                                    </th>
                                </tr>
                            </template>
                            <template v-slot:item="{ item }">
                                <tr class="" style="background-color: ;position: relative;" @mouseover="selectItem(item)"
                                    @mouseleave="unSelectItem(item)">
                                    <td class="font-weight-bold pr-0" style="color: #000000;font-size: 14px;width:290px;">
                                        <p> {{ item.TradingSymbol }}</p>
                                        <div class="display-flex row">
                                            <v-card v-if="item.alert == 'ALERT'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="60px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 mx-auto  text-center"
                                                    style="color:#666666;font-size:10px">
                                                    <img class="pt-n2" src="@/assets/zebu-stocks/alertimg.svg"
                                                        width="9px" />
                                                    {{ item.alert }}
                                                </p>
                                            </v-card>
                                            <v-card v-if="item.event == 'EVENTS'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="68px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 mx-auto text-center"
                                                    style="color:#666666;font-size:10px">
                                                    <img class="pt-n2" src="@/assets/zebu-stocks/eventesimg.svg"
                                                        width="10px" />
                                                    {{ item.event }}
                                                </p>
                                            </v-card>
                                            <v-card v-if="item.News == 'News'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="57px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 text-center "
                                                    style="color:#666666;font-size:11px">
                                                    <img class="pt-n2" src="@/assets/zebu-stocks/newsimg.svg"
                                                        width="10px" />
                                                    {{ item.News }}
                                                </p>
                                            </v-card>
                                        </div>
                                        <div class="postionchange" v-if="item === selectedItem">
                                            <div class="display-flex row ">
                                                <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                    style="min-width:23px;border-radius: 4px;" color="#43A833">B</v-btn>
                                                <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                    style="min-width:23px;border-radius: 4px;" color="#FF1717">S</v-btn>
                                                <v-btn class="pa-0  elevation-0 ml-1" outlined dense small
                                                    style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF"><img
                                                        alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/tradingsymbol.svg')"
                                                        width="15px" /></v-btn>
                                                <v-btn class="ml-1 pa-0  elevation-0" outlined small
                                                    style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF"
                                                    color="#43A833">
                                                    <img alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/tradinnote.svg')"
                                                        width="12px" /></v-btn>
                                                <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                                                    style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF">
                                                    <v-icon color="#666666" size="20">mdi-dots-horizontal</v-icon></v-btn>
                                            </div>
                                        </div>
                                    </td>
                                    <td class=" pr-0">
                                        <p class="font-weight-bold mb-0" style="font-size:13px;color:#000000">{{
                                            item.calories }}<span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(cr)</span></p>
                                    </td>
                                    <td>
                                        <p class="font-weight-bold mb-0" style="font-size:13px;color:#000000">{{
                                            item.vol }}
                                            <span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(k)</span>
                                        </p>
                                    </td>
                                    <td class="pr-0 pl-2"><span class="font-weight-bold"
                                            style="font-size:13px;color:#000000">{{ item.lp }}</span></td>
                                    <td class="pr-0" v-if="item.ch > 0">
                                        <span class="text-wrap font-weight-medium"
                                            style="color:#43A833 !important;font-size: 13px;">{{ item.ch }}%</span>
                                    </td>
                                    <td class="pr-0" v-else><span class="font-weight-medium"
                                            style="color:red !important; font-size: 13px;">{{ item.ch }}%</span></td>
                                    <td class="pr-0 pl-4"><span class="font-weight-bold"
                                            style="font-size:13px;color:#000000">{{ item.iron }}</span></td>
                                    <td>
                                        <v-row no-gutters class="pl-3">
                                            <v-col class="mt-6" cols="3">
                                                <span class="font-weight-bold" style="font-size:13px;color:#000000">{{
                                                    item.low
                                                }}</span>
                                            </v-col>
                                            <v-col class="mt-4" cols="6">
                                                <v-slider disabled :ripple="false" class="mt-1" v-model="value"
                                                    thumb-color="black" track-color="#D9D9D9" :thumb-size="1" />
                                            </v-col>
                                            <v-col class="mt-6" cols="3">
                                                <span class="font-weight-bold pl-0 " style="font-size:13px;color:#000000">
                                                    {{ item.high
                                                    }}</span>
                                            </v-col>
                                        </v-row>
                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-tab-item>
                    <!-- table -2 -->
                    <v-tab-item>
                        <v-data-table hide-default-header :headers="headers" :items="loosers" :items-per-page="ggggggggggg"
                            item-key="id" v-model="selectedRows" class="elevation-0" hide-default-footer
                            style="border: 1px solid #efeef3;background-color:white">
                            <template v-slot:footer>
                                <v-divider></v-divider>
                                <div class="text-center" v-if="hhdhdhhhdhh">
                                    <v-btn text color="primary" dark class="ma-2 text-capitalize" @click="sssssssssss()">
                                        <span class="font-weight-bold" style="color: #0037B7;font-size: 14px;">See more
                                            stocks</span> <v-icon color="black"> mdi-chevron-down</v-icon>
                                    </v-btn>
                                </div>
                                <div class="text-center" v-if="iiiiiiii">
                                    <v-btn text color="primary" dark class="ma-2 text-capitalize"
                                        @click="Seemorestocksup()">
                                        <span class="font-weight-bold" style="color: #0037B7;font-size: 14px;">See Less
                                            stocks</span> <v-icon color="black"> mdi-chevron-up</v-icon>
                                    </v-btn>
                                </div>
                            </template>
                            <template v-slot:header>
                                <tr class="" style="background-color: #FAFBFF;border: 1px solid red;">
                                    <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                            style="color:#666666 ;font-size: 13px">Scrips</span></th>

                                    <th class="text-start">
                                        <P class="pl-4 pt-1 pb-1 mb-0" style="color:#666666 ;font-size: 13px">
                                            Mkt cap <span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(cr)</span></p>
                                    </th>
                                    <th class="text-start">
                                        <P class="pl-4 pt-1 pb-1 mb-0" style="color:#666666 ;font-size: 13px">Volume
                                            <span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(k)</span>
                                        </p>
                                    </th>
                                    <th class="text-start"><span class="pl-2 pt-1 pb-1"
                                            style="color:#666666 ;font-size: 13px">Price</span></th>
                                    <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                            style="color:#666666 ;font-size: 13px">%Chg</span></th>
                                    <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                            style="color:#666666 ;font-size: 13px">200dma</span></th>
                                    <th class="pt-1"> <v-row class="mr-0">
                                            <v-col cols="10">
                                                <span class="pl-2 " style="color:#666666 ;font-size: 13px">Day’s
                                                    range</span>
                                            </v-col>
                                            <v-col cols="2">
                                                <v-menu left offset-y>
                                                    <template v-slot:activator="{ on, attrs }">

                                                        <v-btn v-bind="attrs" v-on="on" plain :ripple="false"
                                                            class="buttoncontant mt-n1" icon>
                                                            <v-icon size="19" color="black">mdi-dots-vertical</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list>
                                                        <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                                            <v-list-item-title>{{ item.title
                                                            }}</v-list-item-title>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </v-col>
                                        </v-row></th>
                                    <th class="text-start"></th>
                                </tr>
                            </template>
                            <template v-slot:item="{ item }">
                                <tr class="" style="background-color: ;position: relative;" @mouseover="selectItem(item)"
                                    @mouseleave="unSelectItem(item)">
                                    <td class="font-weight-bold pr-0" style="color: #000000;font-size: 14px;width:290px;">
                                        <p> {{ item.TradingSymbol }}</p>
                                        <div class="display-flex row">
                                            <v-card v-if="item.alert == 'ALERT'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="60px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 mx-auto  text-center"
                                                    style="color:#666666;font-size:10px">
                                                    <img class="pt-n2" :src="item.image1" width="9px" />
                                                    {{ item.alert }}
                                                </p>
                                            </v-card>
                                            <v-card v-if="item.event == 'EVENTS'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="68px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 mx-auto text-center"
                                                    style="color:#666666;font-size:10px">
                                                    <img class="pt-n2" :src="item.image2" width="10px" />
                                                    {{ item.event }}
                                                </p>
                                            </v-card>
                                            <v-card v-if="item.News == 'News'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="57px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 text-center "
                                                    style="color:#666666;font-size:11px">
                                                    <img class="pt-n2" :src="item.image3" width="10px" />
                                                    {{ item.News }}
                                                </p>
                                            </v-card>
                                        </div>
                                        <div class="postionchange" v-if="item === selectedItem">
                                            <div class="display-flex row ">
                                                <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                    style="min-width:23px;border-radius: 4px;" color="#43A833">B</v-btn>
                                                <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                    style="min-width:23px;border-radius: 4px;" color="#FF1717">S</v-btn>
                                                <v-btn class="pa-0  elevation-0 ml-1" outlined dense small
                                                    style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF"><img
                                                        alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/tradingsymbol.svg')"
                                                        width="15px" /></v-btn>
                                                <v-btn class="ml-1 pa-0  elevation-0" outlined small
                                                    style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF"
                                                    color="#43A833">
                                                    <img alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/tradinnote.svg')"
                                                        width="12px" /></v-btn>
                                                <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                                                    style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF">
                                                    <v-icon color="#666666" size="20">mdi-dots-horizontal</v-icon></v-btn>
                                                <!-- </div> -->
                                            </div>
                                        </div>
                                    </td>
                                    <td class=" pr-0">
                                        <p class="font-weight-bold mb-0" style="font-size:13px;color:#000000">{{
                                            item.vol }}<span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(cr)</span></p>
                                    </td>
                                    <td>
                                        <p class="font-weight-bold mb-0" style="font-size:13px;color:#000000">{{
                                            item.vol }}
                                            <span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(k)</span>
                                        </p>
                                    </td>
                                    <td class="pr-0 pl-2"><span class="font-weight-bold"
                                            style="font-size:13px;color:#000000">{{ item.lp }}</span></td>
                                    <td class="pr-0" v-if="item.ch > 0">
                                        <span class="text-wrap font-weight-medium"
                                            style="color:#43A833 !important;font-size: 13px;">{{ item.ch }}%</span>
                                    </td>
                                    <td class="pr-0" v-else><span class="font-weight-medium"
                                            style="color:red !important; font-size: 13px;">{{ item.ch }}%</span></td>
                                    <td class="pr-0 pl-4"><span class="font-weight-bold"
                                            style="font-size:13px;color:#000000">{{ item.iron }}</span></td>
                                    <td>
                                        <v-row no-gutters class="pl-3">
                                            <v-col class="mt-6" cols="3">
                                                <span class="font-weight-bold" style="font-size:13px;color:#000000">{{
                                                    item.low
                                                }}</span>
                                            </v-col>
                                            <v-col class="mt-4" cols="6">
                                                <v-slider disabled :ripple="false" class="mt-1" v-model="value"
                                                    thumb-color="black" track-color="#D9D9D9" :thumb-size="1" />
                                            </v-col>
                                            <v-col class="mt-6" cols="3">
                                                <span class="font-weight-bold pl-0 " style="font-size:13px;color:#000000">
                                                    {{ item.high
                                                    }}</span>
                                            </v-col>
                                        </v-row>
                                    </td>
                                    <td></td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-tab-item>
                    <!-- table -3 -->
                    <v-tab-item>
                        <v-data-table hide-default-header :headers="headers" :items="voldata" :items-per-page="ggggggggggg"
                            item-key="id" v-model="selectedRows" class="elevation-0" hide-default-footer
                            style="border: 1px solid #efeef3; background-color: white">
                            <template v-slot:footer>
                                <v-divider></v-divider>
                                <div class="text-center" v-if="hhdhdhhhdhh">
                                    <v-btn text color="primary" dark class="ma-2 text-capitalize" @click="sssssssssss()">
                                        <span class="font-weight-bold" style="color: #0037b7; font-size: 14px">See more
                                            stocks</span>
                                        <v-icon color="black"> mdi-chevron-down</v-icon>
                                    </v-btn>
                                </div>
                                <div class="text-center" v-if="iiiiiiii">
                                    <v-btn text color="primary" dark class="ma-2 text-capitalize"
                                        @click="Seemorestocksup()">
                                        <span class="font-weight-bold" style="color: #0037b7; font-size: 14px">See Less
                                            stocks</span>
                                        <v-icon color="black"> mdi-chevron-up</v-icon>
                                    </v-btn>
                                </div>
                            </template>
                            <template v-slot:header>
                                <tr class="" style="background-color: #fafbff; border: 1px solid red">
                                    <th class="text-start">
                                        <span class="pl-4 pt-1 pb-1" style="color: #666666; font-size: 13px">Scrips</span>
                                    </th>
                                    <th class="text-start">
                                        <P class="pl-4 pt-1 pb-1 mb-0" style="color: #666666; font-size: 13px">
                                            Mkt cap
                                            <span class="font-weight-medium"
                                                style="color: #999999; font-size: 13px">&nbsp;(cr)</span>
                                        </P>
                                    </th>
                                    <th class="text-start">
                                        <P class="pl-4 pt-1 pb-1 mb-0" style="color: #666666; font-size: 13px">Volume
                                            <span class="font-weight-medium"
                                                style="color: #999999; font-size: 13px">&nbsp;(k)</span>
                                        </P>
                                    </th>
                                    <th class="text-start">
                                        <span class="pl-2 pt-1 pb-1" style="color: #666666; font-size: 13px">Price</span>
                                    </th>
                                    <th class="text-start">
                                        <span class="pl-4 pt-1 pb-1" style="color: #666666; font-size: 13px">%Chg</span>
                                    </th>
                                    <th class="text-start">
                                        <span class="pl-4 pt-1 pb-1" style="color: #666666; font-size: 13px">200dma</span>
                                    </th>
                                    <th class="pt-1">
                                        <v-row class="mr-0">
                                            <v-col cols="10">
                                                <span class="pl-2" style="color: #666666; font-size: 13px">Day’s
                                                    range</span>
                                            </v-col>
                                            <v-col cols="2">
                                                <v-menu left offset-y>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn v-bind="attrs" v-on="on" plain :ripple="false"
                                                            class="buttoncontant mt-n1" icon>
                                                            <v-icon size="19" color="black">mdi-dots-vertical</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list>
                                                        <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                                            <v-list-item-title>{{
                                                                item.title
                                                            }}</v-list-item-title>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </v-col>
                                        </v-row>
                                    </th>
                                    <th class="text-start"></th>
                                </tr>
                            </template>
                            <template v-slot:item="{ item }">
                                <tr class="" style="background-color: ; position: relative" @mouseover="selectItem(item)"
                                    @mouseleave="unSelectItem(item)">
                                    <td class="font-weight-bold pr-0" style="color: #000000; font-size: 14px; width: 290px">
                                        <p>{{ item.Exchange }}</p>

                                        <div class="display-flex row">
                                            <v-card v-if="item.alert == 'ALERT'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="60px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 mx-auto text-center"
                                                    style="color: #666666; font-size: 10px">
                                                    <img class="pt-n2" :src="item.image1" width="9px" />
                                                    {{ item.alert }}
                                                </p>
                                            </v-card>
                                            <v-card v-if="item.event == 'EVENTS'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="68px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 mx-auto text-center"
                                                    style="color: #666666; font-size: 10px">
                                                    <img class="pt-n2" :src="item.image2" width="10px" />
                                                    {{ item.event }}
                                                </p>
                                            </v-card>
                                            <v-card v-if="item.News == 'News'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="57px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 text-center"
                                                    style="color: #666666; font-size: 11px">
                                                    <img class="pt-n2" :src="item.image3" width="10px" />
                                                    {{ item.News }}
                                                </p>
                                            </v-card>
                                        </div>
                                        <div class="postionchange" v-if="item === selectedItem">
                                            <div class="display-flex row">
                                                <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                    style="min-width: 23px; border-radius: 4px" color="#43A833">B</v-btn>
                                                <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                    style="min-width: 23px; border-radius: 4px" color="#FF1717">S</v-btn>
                                                <v-btn class="pa-0 elevation-0 ml-1" outlined dense small style="
                            min-width: 23px;
                            border-radius: 4px;
                            border: 1px solid #cccccc;
                            background-color: #ffffff;
                          "><img alt="" class="shrink" :src="require('@/assets/zebu-stocks/tradingsymbol.svg')
                              " width="15px" /></v-btn>
                                                <v-btn class="ml-1 pa-0 elevation-0" outlined small style="
                            min-width: 23px;
                            border-radius: 4px;
                            border: 1px solid #cccccc;
                            background-color: #ffffff;
                          " color="#43A833">
                                                    <img alt="" class="shrink" :src="require('@/assets/zebu-stocks/tradinnote.svg')
                                                        " width="12px" /></v-btn>
                                                <v-btn class="ml-1 pa-0 elevation-0" outlined dense small style="
                            min-width: 23px;
                            border-radius: 4px;
                            border: 1px solid #cccccc;
                            background-color: #ffffff;
                          ">
                                                    <v-icon color="#666666" size="20">mdi-dots-horizontal</v-icon></v-btn>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="pr-0">
                                        <p class="font-weight-bold mb-0" style="font-size: 13px; color: #000000">
                                            {{
}}<span class="font-weight-medium"
                                                style="color: #999999; font-size: 13px">&nbsp;(cr)</span>
                                        </p>
                                    </td>
                                    <td>
                                        <p class="font-weight-bold mb-0" style="font-size: 13px; color: #000000">
                                            {{ item.vol }}
                                            <span class="font-weight-medium"
                                                style="color: #999999; font-size: 13px">&nbsp;(k)</span>
                                        </p>
                                    </td>
                                    <td class="pr-0 pl-2">
                                        <span class="font-weight-bold" style="font-size: 13px; color: #000000">{{ item.lp
                                        }}</span>
                                    </td>
                                    <td class="pr-0" v-if="(item.cp = item.close - item.low > 0)">
                                        <span class="text-wrap font-weight-medium"
                                            style="color: #43a833 !important; font-size: 13px">{{ (item.cp = item.close -
                                                item.low).toFixed(2) }}%</span>
                                    </td>
                                    <td class="pr-0" v-else>
                                        <span class="font-weight-medium" style="color: red !important; font-size: 13px">{{
                                            (item.cp = item.close - item.low).toFixed(2) }}%</span>
                                    </td>
                                    <td class="pr-0 pl-4">
                                        <span class="font-weight-bold" style="font-size: 13px; color: #000000">{{ item.iron
                                        }}</span>
                                    </td>
                                    <td>
                                        <v-row no-gutters class="pl-3">
                                            <v-col class="mt-6" cols="3">
                                                <span class="font-weight-bold" style="font-size: 13px; color: #000000">{{
                                                    item.high }}</span>
                                            </v-col>
                                            <v-col class="mt-4" cols="6">
                                                <v-slider disabled :ripple="false" class="mt-1" v-model="value"
                                                    thumb-color="black" track-color="#D9D9D9" :thumb-size="1" />
                                            </v-col>
                                            <v-col class="mt-6" cols="3">
                                                <span class="font-weight-bold pl-0" style="font-size: 13px; color: #000000">
                                                    {{ item.low }}</span>
                                            </v-col>
                                        </v-row>
                                    </td>
                                    <td></td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-tab-item>
                    <!-- table -4 -->
                    <v-tab-item>
                        <v-data-table hide-default-header :headers="headers" :items="gainvalue"
                            :items-per-page="ggggggggggg" item-key="id" v-model="selectedRows" class="elevation-0"
                            hide-default-footer style="border: 1px solid #efeef3;background-color:white">
                            <template v-slot:footer>
                                <v-divider></v-divider>
                                <div class="text-center" v-if="hhdhdhhhdhh">
                                    <v-btn text color="primary" dark class="ma-2 text-capitalize" @click="sssssssssss()">
                                        <span class="font-weight-bold" style="color: #0037B7;font-size: 14px;">See more
                                            stocks</span> <v-icon color="black"> mdi-chevron-down</v-icon>
                                    </v-btn>
                                </div>
                                <div class="text-center" v-if="iiiiiiii">
                                    <v-btn text color="primary" dark class="ma-2 text-capitalize"
                                        @click="Seemorestocksup()">
                                        <span class="font-weight-bold" style="color: #0037B7;font-size: 14px;">See Less
                                            stocks</span> <v-icon color="black"> mdi-chevron-up</v-icon>
                                    </v-btn>
                                </div>
                            </template>
                            <template v-slot:header>
                                <tr class="" style="background-color: #FAFBFF;border: 1px solid red;">
                                    <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                            style="color:#666666 ;font-size: 13px">Scrips</span></th>
                                    <th class="text-start">
                                        <P class="pl-4 pt-1 pb-1 mb-0" style="color:#666666 ;font-size: 13px">
                                            Mkt cap <span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(cr)</span></p>
                                    </th>
                                    <th class="text-start">
                                        <P class="pl-4 pt-1 pb-1 mb-0" style="color:#666666 ;font-size: 13px">Volume
                                            <span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(k)</span>
                                        </p>
                                    </th>
                                    <th class="text-start"><span class="pl-2 pt-1 pb-1"
                                            style="color:#666666 ;font-size: 13px">Price</span></th>
                                    <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                            style="color:#666666 ;font-size: 13px">%Chg</span></th>
                                    <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                            style="color:#666666 ;font-size: 13px">200dma</span></th>
                                    <th class="pt-1"> <v-row class="mr-0">
                                            <v-col cols="10">
                                                <span class="pl-2 " style="color:#666666 ;font-size: 13px">Day’s
                                                    range</span>
                                            </v-col>
                                            <v-col cols="2">
                                                <v-menu left offset-y>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn v-bind="attrs" v-on="on" plain :ripple="false"
                                                            class="buttoncontant mt-n1" icon>
                                                            <v-icon size="19" color="black">mdi-dots-vertical</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <v-list>
                                                        <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                                            <v-list-item-title>{{ item.title
                                                            }}</v-list-item-title>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-menu>
                                            </v-col>
                                        </v-row></th>
                                    <th class="text-start"></th>
                                </tr>
                            </template>
                            <template v-slot:item="{ item }">
                                <tr class="" style="background-color: ;position: relative;" @mouseover="selectItem(item)"
                                    @mouseleave="unSelectItem(item)">
                                    <td class="font-weight-bold pr-0" style="color: #000000;font-size: 14px;width:290px;">
                                        <p> {{ item.TradingSymbol }}</p>
                                        <div class="display-flex row">
                                            <v-card v-if="item.alert == 'ALERT'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="60px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 mx-auto  text-center"
                                                    style="color:#666666;font-size:10px">
                                                    <img class="pt-n2" :src="item.image1" width="9px" />
                                                    {{ item.alert }}
                                                </p>
                                            </v-card>
                                            <v-card v-if="item.event == 'EVENTS'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="68px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 mx-auto text-center"
                                                    style="color:#666666;font-size:10px">
                                                    <img class="pt-n2" :src="item.image2" width="10px" />
                                                    {{ item.event }}
                                                </p>
                                            </v-card>
                                            <v-card v-if="item.News == 'News'" class="pa-1 ml-2 mb-3" elevation="0"
                                                width="57px" :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                                                <p class="font-weight-medium mb-0 text-center "
                                                    style="color:#666666;font-size:11px">
                                                    <img class="pt-n2" :src="item.image3" width="10px" />
                                                    {{ item.News }}
                                                </p>
                                            </v-card>
                                        </div>
                                        <div class="postionchange" v-if="item === selectedItem">
                                            <div class="display-flex row ">
                                                <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                    style="min-width:23px;border-radius: 4px;" color="#43A833">B</v-btn>
                                                <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                                    style="min-width:23px;border-radius: 4px;" color="#FF1717">S</v-btn>
                                                <v-btn class="pa-0  elevation-0 ml-1" outlined dense small
                                                    style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF"><img
                                                        alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/tradingsymbol.svg')"
                                                        width="15px" /></v-btn>
                                                <v-btn class="ml-1 pa-0  elevation-0" outlined small
                                                    style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF"
                                                    color="#43A833">
                                                    <img alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/tradinnote.svg')"
                                                        width="12px" /></v-btn>
                                                <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                                                    style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF">
                                                    <v-icon color="#666666" size="20">mdi-dots-horizontal</v-icon></v-btn>
                                            </div>
                                        </div>
                                    </td>
                                    <td class=" pr-0">
                                        <p class="font-weight-bold mb-0" style="font-size:13px;color:#000000">{{
                                            item.calories }}<span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(cr)</span></p>
                                    </td>
                                    <td>
                                        <p class="font-weight-bold mb-0" style="font-size:13px;color:#000000">{{
                                            item.vol }}
                                            <span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;(k)</span>
                                        </p>
                                    </td>
                                    <td class="pr-0 pl-2"><span class="font-weight-bold"
                                            style="font-size:13px;color:#000000">{{ item.lp }}</span></td>
                                    <td class="pr-0" v-if="item.change > 0">
                                        <span class="text-wrap font-weight-medium"
                                            style="color:#43A833 !important;font-size: 13px;">{{ item.change }}
                                            %</span>
                                    </td>
                                    <td class="pr-0" v-else><span class="font-weight-medium"
                                            style="color:red !important; font-size: 13px;">{{ item.change }}
                                            %</span></td>
                                    <td class="pr-0 pl-4"><span class="font-weight-bold"
                                            style="font-size:13px;color:#000000">{{ item.iron }}</span></td>
                                    <td>
                                        <v-row no-gutters class="pl-3">
                                            <v-col class="mt-6" cols="3">
                                                <span class="font-weight-bold" style="font-size:13px;color:#000000">{{
                                                    item.low
                                                }}</span>
                                            </v-col>
                                            <v-col class="mt-4" cols="6">
                                                <v-slider disabled :ripple="false" class="mt-1" v-model="value"
                                                    thumb-color="black" track-color="#D9D9D9" :thumb-size="1" />
                                            </v-col>
                                            <v-col class="mt-6" cols="3">
                                                <span class="font-weight-bold pl-0 " style="font-size:13px;color:#000000">
                                                    {{ item.high
                                                    }}</span>
                                            </v-col>
                                        </v-row>
                                    </td>
                                    <td></td>
                                </tr>
                            </template>
                        </v-data-table>
                    </v-tab-item>
                </v-tabs-items>



                <!-- mobile View -->
                <div class="d-sm-none d-block" >
          <p class="mb-0  pl-sm-0 pl-5 pt-6" style="color: #000;font-size: 16px;font-weight: 559;line-height: 100%;letter-spacing: -0.32px;">Today's trade action</p>
          <v-chip-group outlined class="chipDeaultSizeCus mt-1 pl-sm-0 pl-5"
            mandatory
            active-class="black--text"
            
          >
            <v-chip class="py-3"
              v-for="tag in tags"
              :key="tag" outlined
            >
              {{ tag }}
            </v-chip>
          </v-chip-group>


          <v-data-table  :headers="mutualfundheaders" :items="mutualfunditems" 
                      
                        class="elevation-0 d-none" hide-default-footer style="background-color:white">
                        <template v-slot:item="{ item }">
                            <tr>
                             <!-- <v-row> -->
                                <!-- <v-col cols="6"> -->
                                    <td style=""><span class="font-weight-medium caption " style="color:#000000">{{ item.stocks }}</span>
                                </td>
                                <!-- </v-col> -->
                                <!-- <v-col cols="6" class=""> -->

                                    <td class="text-end"  ><span class="font-weight-medium caption float-right" style="color:#000000">{{
                                    item.MinInvest }}</span></td>
                                <!-- </v-col> -->
                             <!-- </v-row> -->
                                
                                
                              
                            </tr>
                        </template>
                    </v-data-table>
    
</div>



                <!-- invest easy collection  -->
                <v-card class="mt-10 pt-5 pb-3 elevation-0 " color="#F1F3F8">
                    <v-row no-gutters>
                        <v-col cols="12"  sm="6" md="6">
                            <p class="pl-md-8 pl-5 text-none pt-3 pr-md-0 pr-2 fontsize24">Invest easy with curated <br class="d-none d-md-block">ideas and ready made<br class="d-none d-md-block"> collections
                            </p>
                            <!-- <p class="pl-md-8 pl-5 text-none pt-3 d-none d-md-block fontsize24">Invest easy with curated <br class="d-md-block">ideas and ready made<br> collections
                            </p> -->
                            <div class="display-flex pt-2">
                                <v-btn class="text-none rounded-xl ml-md-8 ml-5" width="110px" height="32px" outlined
                                    style="border:solid 2px">
                                    <span class=" text-none fontsize14b559w">Growth factor</span>
                                </v-btn>
                                <v-btn class="text-none rounded-xl ml-2 " width="86px" height="32px" outlined
                                    style="border:2px solid  #666666 ">
                                    <span class=" text-none fontsize14G559w">Lower risk</span>
                                </v-btn>
                                <v-btn class="text-none rounded-xl ml-2 " width="114px" height="32px" outlined
                                    style="border:2px solid  #666666 ">
                                    <span class=" text-none fontsize14G559w">ESG investing
                                    </span>
                                </v-btn>
                            </div>
                            <p class="pl-md-8 pl-6 pt-md-6 pt-4 pb-md-2 mb-md-16 fontsize14g" >
                                Handpicked global baskets of stocks managed <br> by global institutions and fund managers
                            </p>
                            <div class="d-none d-md-block">
                            <v-btn class="mt-md-16 ml-4 text-none " :ripple="false" to="collection"   text @click="collectionpage()">
                                <span class="seemorelessfontsize" >View all collections</span>
                            </v-btn></div>
                        </v-col>
                        <v-col cols="12"   sm="6">
                            <v-card class="elevation-0 mb-4 mr-md-6 elevation-0 md-mx-0 mx-5" v-for="folder in folders" height="120px"
                                :key="folder.title">
                                <v-list>
                                    <v-list-item class="pr-0">
                                        <v-list-item-avatar size="46px" class="mt-n1 "> <v-img :src="folder.icon"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content class="pt-2 ml-n1">
                                            <v-list-item-title><span class="fontsize1G659w">{{ folder.title }}</span></v-list-item-title>
                                            <v-list-item-subtitle>
                                                <v-row no-gutters class="pt-1 ">
                                                    <v-col cols="5" md="6"  class="pa-md-0">
                                                        <v-card class=" elevation-0 mr-md-2 px-1 px-md-0 ssdsasds" color="#F1F3F8" style="border-radius:4px;width:72px">
                                                            <p class=" mb-0  text-center floatrightChange"
                                                                style="padding-top: 2px;padding-bottom:2px;letter-spacing:0.9px;color:#666666;font-size:9px;font-weight:469;line-height:12px">
                                                                {{ folder.subtitlefirst }}</p>
                                                        </v-card>
                                                    </v-col>
                                                    <v-col cols="7"   md="6">
                                                        <v-card class="ml-md-n1  elevation-0 ml-md-0 LongTermCard" color="#F1F3F8" width="74px"
                                                            style="border-radius:4px">
                                                            <p class="mb-0 font-weight-medium text-center floatrightChange"
                                                                style="padding-top: 2px;padding-bottom:2px;letter-spacing:1px;color:#666666;font-size:9px;font-weight:469;line-height:12px">
                                                                {{ folder.subtitlesecond }}</p>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action class="mt-n1 mr-n2">
                                            <router-link to="/">
                                                <img alt="" class="shrink ml-3"
                                                    :src="require('@/assets/zebu-stocks/dividentimg.svg')"
                                                    width="27px" />
                                                </router-link>

                                                                                           
                                        </v-list-item-action>
                                        <v-list-item-action class="mt-n1">
                                            <router-link to="/">
                                                <img alt="" class="shrink pr-3 d-none d-md-block"
                                                    :src="require('@/assets/zebu-stocks/highrisk.svg')" />

                                                    <img alt="" class="shrink pr-3 d-block d-md-none mt-n2"
                                                    :src="folder.MobileimgOne" />
                                                </router-link>
                                        </v-list-item-action>
                                    </v-list-item>
                                    <v-row class="mb-1" no-gutters>
                                        <v-col cols="2" class="d-none d-md-block"></v-col>
                                        <v-col cols="5" md="3" >
                                            <v-list-item-content class="pt-md-0 pt-2 pb-0 pl-md-2 pl-5">
                                                <v-list-item-title class=""> <span class="MininvestfontSize" style="font-size:9px ;font-weight:469;line-height:12px; color: #666666;letter-spacing:1px">{{
                                                            folder.subsecfirst }}
                                                    </span></v-list-item-title>
                                                <v-list-item-subtitle><span class="subssecondValue"
                                                        style="font-weight:569;line-height:16px;font-size:13px ; color:#000000;">
                                                        {{ folder.subsecsecond }}</span>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-col>
                                        <v-col class="ml-n2 ml-md-n0" cols="3" md="2">
                                            <v-list-item-content class="pt-md-0 pt-2 pb-0">
                                                <v-list-item-title class=""> <span class="MininvestfontSize"
                                                        style="font-size:9px ;font-weight:469;line-height:12px; color: #666666;letter-spacing:1px">{{
                                                            folder.subthreefirst
                                                        }}</span></v-list-item-title>
                                                <v-list-item-subtitle><span class="subssecondValue"
                                                        style="font-size:13px ; color: #43A833;font-weight:569;line-height:16px;">{{
                                                            folder.subthreesecond
                                                        }}</span></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-col>
                                        <v-col cols="4" md="3">
                                            <v-list-item-content class="pt-md-0 pt-2 pb-0">
                                                <v-list-item-title class=""><span class="font-weight-medium MininvestfontSize"
                                                        style="font-size:9px ;font-weight:469;line-height:12px; color: #666666;letter-spacing:1px">{{
                                                            folder.subfourfirst
                                                        }}</span></v-list-item-title>
                                                <v-list-item-subtitle> <span class="subssecondValue"
                                                        style="font-weight:569;line-height:16px;font-size:13px ; color:#000000;">{{
                                                            folder.subfoursecond }}</span>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-col>
                                        <v-col cols="1"></v-col>
                                    </v-row>
                                </v-list>
                            </v-card>
                            <div class="d-block d-md-none">
                            <v-btn class="ml-1 text-none " :ripple="false" to="collection"   text @click="collectionpage()">
                                <span class="seemorelessfontsize" >View all collections</span>
                              &nbsp;&nbsp;  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
<path d="M1 6L13 6" stroke="#0037B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.09091 10.9082L13 5.99911L8.09091 1.09002" stroke="#0037B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </v-btn></div>
                        </v-col>
                    </v-row>
                </v-card>



<!-- mobile View -->
<v-card class="mt-8 pl-3 mx-4 pt-5 pb-1 d-md-none d-block" outlined>
 <v-row>
    <v-col cols="7">
        <p class="mb-1" style="color: #0037B7;font-size: 11px;font-weight: 559;line-height: 12px;letter-spacing: 0.88px;">TRENDING IN</p>
    <p style="color: #000;font-size: 14px;font-weight: 559;line-height: 20px; letter-spacing: -0.28px;">Most traded & top market <br> capital companies which is <br> growing fast</p>
    </v-col>
    <v-col cols="5" class="pl-0 my-auto" >
        <img class="" :src="require('@/assets/zebu-stocks/divident-stocks.svg')" width="135px"
                        height="" />
        </v-col>
 </v-row>
   
</v-card>

                <!-- Sector -->
                <div class="mt-6 d-block">    
                    <v-card class="pb-2 elevation-0 pt-7" color="#F1F3F8">

                        <v-row>
                            <v-col cols="12" md="7">
<p class="pl-md-8 pl-5" style="color:#000000;background-color: #F1F3F8;font-size: 24px;font-weight:559;line-height:24px;letter-spacing:-1.2px">Sector collections</p>
<p class="pl-md-8 pl-5 mb-md-2 mb-0" style="font-size: 14px; color:#666666;font-weight:469;line-height:20px;letter-spacing:-0.4px">
                            Handpicked global baskets of stocks managed <br> by global institutions and fund managers
</p>                           
</v-col> 
<v-col cols="12" md="5" class="pr-md-0 pt-md-5">
    <div class="d-flex row float-md-right pr-md-12 pl-md-0 pl-8">
    <v-btn class="rounded-xl" outlined width="98px" height="32px" style="border:  solid 2px #000000">
                                    <span class=" text-none" style="font-size: 14px;font-weight:559;line-height:16px;letter-spacing:0px; color:#000000">Turnaround</span>
                                </v-btn>
                                <v-btn class="rounded-xl ml-2" width="95px" height="32px" outlined
                                    style="border:  solid 2px #666666">
                                    <span class=" text-none" style="font-size: 14px;font-weight:559;line-height:16px;letter-spacing:0px; color:#666666">High return
                                    </span>
                                </v-btn>
                                <v-btn class="rounded-xl ml-2" width="114px" height="32px" outlined
                                    style="border:  solid 2px #666666">
                                    <span class=" text-none" style="font-size: 14px;font-weight:559;line-height:16px;letter-spacing:0px; color:#666666">Compounding
                                    </span>
                                </v-btn>
                            </div>
</v-col>
                        </v-row>
                      
                        <div class="hhhhhhhhhhh pt-3 ml-md-5 ml-3 mr-md-3" style="height:">
                            <div class="" style="overflow: scroll; ">
                                <div class="" style="display: inline-flex; overflow: hidden; ">
                                    <v-card class="rounded-lg ml-3  pl-5 pt-3 mt-md-0 mt-6 pr-2  elevation-0" width="236px"
                                        v-for="sectorcntrl in Sectorcollections" :key="sectorcntrl.title"
                                        style="background: #FEFEFE !important;">
                                        <p class="mb-2"
                                            style="font-size:15px;color: #000000;font-weight:559;line-height:16px"> {{
                                                sectorcntrl.title
                                            }}</p>
                                        <p class="mb-1 mt-2"
                                            style="font-size:15px;color: #000000;font-weight:559;line-height:16px">{{
                                                sectorcntrl.subtitle }}</p>
                                        <div v-if="sectorcntrl.subtitleone > 0">
                                            <p class="mb-1 font-weight-medium" style="font-size:13px;color: #43A833;"><img
                                                    alt="" class="shrink"
                                                    :src="require('@/assets/zebu-stocks/greentraingle.svg')" width="12x" />
                                                {{ sectorcntrl.subtitleone }}</p>
                                        </div>
                                        <div v-else>
                                            <p class="mb-1 font-weight-medium" style="font-size:13px;color: red;">
                                                <img alt="" class="shrink"
                                                    :src="require('@/assets/zebu-stocks/redtraingle.svg')" width="12x" />
                                                {{ sectorcntrl.subtitleone }}
                                            </p>
                                        </div>
                                        <v-row class="mt-2">
                                            <v-col cols="7">
                                                <p class="mb-1"
                                                    style="font-size:9px ;font-weight:469;line-height:12px; color: #666666;letter-spacing:1px">
                                                    {{
                                                        sectorcntrl.subtitletwo }}</p>
                                                <p class="mb-0 "
                                                    style="font-weight:469;line-height:16px;font-size:13px ; color:#000000;">
                                                    {{
                                                        sectorcntrl.subtitlethree }}</p>
                                            </v-col>
                                            <v-col cols="5">
                                                <p class="mb-1"
                                                    style="font-size:9px ;font-weight:469;line-height:12px; color: #666666;letter-spacing:1px">
                                                    {{
                                                        sectorcntrl.subtitlefour }}</p>
                                                <p class="mb-0"
                                                    style="font-weight:469;line-height:16px;font-size:13px ; color:#000000;">
                                                    {{
                                                        sectorcntrl.subtitlefive }}</p>
                                            </v-col>
                                        </v-row>
                                        <v-row class="">
                                            <v-col cols="2" class="ml-1 pl-0 " v-for="sectorcntrl in Sectorcollections"
                                                :key="sectorcntrl.title">
                                                <img alt="" class="shrink ml-2" :src="sectorcntrl.icon" width="35px" />
                                            </v-col>
                                        </v-row>
                                        <p class="mb-2 " style="font-size:12px;color: #666666;font-weight:469">+
                                            18 more</p>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                        <v-btn @click="stockTosector()" class="mt-3 mb-1 ml-md-6 ml-3
                  text-capitalize" :ripple="false" text style="">
                            <span class="text-none seemorelessfontsize">View all sectors</span>
                            <span class="d-block d-md-none mt-1"> &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
<path d="M1 6L13 6" stroke="#0037B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.09091 10.9102L13 6.00107L8.09091 1.09197" stroke="#0037B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
                        </v-btn>
                    </v-card>
                </div>
                <!-- mobile view -->
                <div class="d-block d-md-none hhhhhhhhhhh">
                <div class="pt-8 pb-3  " style="overflow-x:scroll"  >
<div class=" pr-3 ml-5 " style="display:inline-flex;overflow-x:">
                <v-card width="165px" outlined rounded-lg class="ml-3 pt-4 pl-4 pr-3 elevation-0" v-for="carditem in cardItems" :key="carditem.title">
                    <p class="mb-1" style="color: #0037B7;font-size: 11px;font-weight: 559;line-height: 12px;letter-spacing: 0.88px;">{{carditem.title  }}</p>
                    <p  style="color: #000;font-size: 14px;font-weight: 559;line-height: 16px; letter-spacing: -0.28px;">{{carditem.subtitle  }}</p>
                    <img class="" :src="carditem.image" width="156px;" />
                </v-card></div></div></div>

                <v-card class="mt-5 pt-5 pb-md-5 elevation-0 " color="#F1F3F8">
                    <v-row no-gutters>
                        <v-col cols="12" md="6">
                            <p class="pl-md-8 pl-6 text-none pt-3"
                                style="font-size: 24px; color:#000000;font-weight:559;line-height:24px;letter-spacing: -1.25px">
                                Pick portfolio’s like<br class="d-none d-md-block">
                                your superstars.<br class="d-none d-md-block"> Follow them below.
                            </p>
                            <div class="display-flex pt-2">
                                <v-btn class="text-none rounded-xl ml-md-8 ml-6 " width="93px" height="32px" outlined
                                    style="border:solid 2px">
                                    <span class=" text-none"
                                        style="font-size: 14px; color:#000000;font-weight:559;line-height:16px;letter-spacing:0px">Individuals</span>
                                </v-btn>
                                <v-btn class="text-none rounded-xl ml-2 " width="135px" height="32px" outlined
                                    style="border:2px solid  #666666 ">
                                    <span class=" text-none"
                                        style="font-size: 14px; color:#666666;font-weight:559;line-height:16px;letter-spacing:0px">Wealth
                                        managers</span>
                                </v-btn>
                            </div>
                            <p class="pl-8 pt-6 pb-4 mb-16 d-none d-md-block"
                                style="font-size: 14px; color:#666666;font-weight:469;line-height:20px;letter-spacing:-0.4px">
                                Handpicked global baskets of stocks managed <br> by global institutions and fund managers
                            </p>
                            <div class="d-none d-md-block">
                            <v-btn  class="mt-16  ml-6 text-none " :ripple="false" text to="superstar">
                                <span class="seemorelessfontsize" >View all portfolios</span>   
                            </v-btn></div>
                        </v-col>
                        <v-col cols="12" md="6" class="pt-3">
                            <v-card class="heightCardCustamaize mb-3 mt-md-0 mt-3 mr-md-6 mx-md-0 mx-5  elevation-0" v-for="folder in folders" height="120px"
                                :key="folder.title">
                                <v-list>
                                    <v-list-item class="pr-0">
                                        <v-list-item-avatar size="46px" class="mt-md-n1 white--text" color="blue"><span class="text mx-auto"> {{
                                            folder.title.slice(0, 1) }}</span>
                                        </v-list-item-avatar>
                                        <v-list-item-content class="pt-md-2 pb-md-3 pt-0 pb-0 ml-n1">
                                            <v-list-item-title><span
                                                    style="font-weight:559;color:#1d1a1a;font-size:16px;line-height:16px">{{
                                                        folder.title
                                                    }}</span></v-list-item-title>
                                            <v-list-item-subtitle>
                                                <p class="d-block d-md-none mb-0" style="color: var(--tokens-text-light-low-contrast, #707070);font-size: 14px;font-weight: 469;letter-spacing: 0.2px;
">Min. Invest :<span style="color: #171717;font-size: 14px;font-weight: 559;letter-spacing: 0.2px;"> &nbsp;₹45,324 </span>  </p>
<div class="d-none d-md-block">
                                                <v-row no-gutters class="pt-1 ">
                                                    <v-col cols="4" md="5" class="pa-0">
                                                        <v-card class=" elevation-0 mr-2" color="#F1F3F8"
                                                            style="border-radius:4px">
                                                            <p class="pt-1  pb-1 mb-0  text-center"
                                                                style="letter-spacing:1px;color:#666666;font-size:9px;font-weight:469;line-height:12px">
                                                                {{ folder.subtitlefirst }}</p>
                                                        </v-card>
                                                    </v-col>
                                                    <v-col cols="8" md="5">
                                                        <v-card class="ml-n1 elevation-0" color="#F1F3F8" width="72px"
                                                            style="border-radius:4px">
                                                            <p class="pt-1 pb-1 mb-0 font-weight-medium text-center"
                                                                style="letter-spacing:1px;color:#666666;font-size:9px;font-weight:469;line-height:12px">
                                                                {{ folder.subtitlesecond }}</p>
                                                        </v-card>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action class="mt-md-n1 mr-md-n2 mr-4">
                                            <router-link to="/">
                                                <img alt="" class="shrink ml-md-3"
                                                    :src="require('@/assets/zebu-stocks/dividentimg.svg')"
                                                    width="27px" /></router-link>
                                        </v-list-item-action>
                                        <v-list-item-action class="mt-n1 d-none d-md-block">
                                            <router-link to="/">
                                                <img alt="" class="shrink pr-3"
                                                    :src="require('@/assets/zebu-stocks/highrisk.svg')" /></router-link>
                                        </v-list-item-action>
                                    </v-list-item>
                                    <div class="d-none d-md-block">
                                    <v-row class="mb-1" no-gutters>
                                        <v-col cols="2"></v-col>
                                        <v-col cols="3">
                                            <v-list-item-content class="pt-0 pb-0 pl-2">
                                                <v-list-item-title class=""> <span class=""
                                                        style="font-size:9px ;font-weight:469;line-height:12px; color: #666666;letter-spacing:1px">{{
                                                            folder.subsecfirst }}
                                                    </span></v-list-item-title>
                                                <v-list-item-subtitle><span class=""
                                                        style="font-weight:469;line-height:16px;font-size:13px ; color:#000000;">
                                                        {{ folder.subsecsecond }}</span>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-list-item-content class="pt-0 pb-0">
                                                <v-list-item-title class=""> <span class=""
                                                        style="font-size:9px ;font-weight:469;line-height:12px; color: #666666;letter-spacing:1px">{{
                                                            folder.subthreefirst
                                                        }}</span></v-list-item-title>
                                                <v-list-item-subtitle><span class=""
                                                        style="font-size:13px ; color: #43A833;font-weight:469;line-height:16px;">{{
                                                            folder.subthreesecond
                                                        }}</span></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-col>
                                        <v-col cols="3">
                                            <v-list-item-content class="pt-0 pb-0">
                                                <v-list-item-title class=""><span class="font-weight-medium"
                                                        style="font-size:9px ;font-weight:469;line-height:12px; color: #666666;letter-spacing:1px">{{
                                                            folder.subfourfirst
                                                        }}</span></v-list-item-title>
                                                <v-list-item-subtitle> <span class=""
                                                        style="font-weight:469;line-height:16px;font-size:13px ; color:#000000;">{{
                                                            folder.subfoursecond }}</span>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-col>
                                        <v-col cols="1"></v-col>
                                    </v-row></div>

                                    
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                               
                    <div class="d-block d-md-none">
                            <v-btn  class="mt-2  ml-2 text-none " :ripple="false" text to="superstar">
                                <span class="seemorelessfontsize" >View all portfolios</span> &nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
<path d="M1 6L13 6" stroke="#0037B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.09091 10.9102L13 6.00107L8.09091 1.09197" stroke="#0037B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
                            </v-btn></div>
                </v-card>
            </v-col>
            <v-col cols="12" lg="3"  class="  pr-2 ">
                <v-toolbar class="toolbar-contant d-none d-md-block" elevation="0" color="white">
                    <v-toolbar-title >
                        <p  class="mb-0" style="color: #000000;font-size:16px;font-weight:589;line-height: 16px;letter-spacing: -0.32px;">Watchlists</p></v-toolbar-title>
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
                <div class="yourwatchlisttextfield d-none d-md-block">
                    <v-select v-model="nnnnnnnnn" label="Your watchlist" append-icon="mdi-chevron-down" class="rounded-lg "
                        color="gray" dense>
                        <template v-slot:append>
                            <p class="mb-1" style="font-size: 14px !important;
        font-weight: 469 !important;
        line-height: 16px !important;
        color:#666666 !important;">0 items <v-icon color="black">
                                    mdi-chevron-down</v-icon> </p>
                        </template>
                    </v-select>
                </div>
                <div class="text-center mt-12 d-none d-md-block">
                    <img class="" :src="require('@/assets/zebu-stocks/nowstocks.svg')" width="32px" height="28px" />
                    <p class="text-center pl-6 pt-2" style="font-size:15px;color: #000000;letter-spacing:-0.32px;font-weight: 559;">Now track your favorite stocks by adding them to your watchlist.</p>
                </div>
                <div class=" mx-auto mt-12 pt-16  mb-1 pl-1 d-none d-md-block" >
                    <div class="display-flex row mx-auto  justify-center">
                        <img class="" :src="require('@/assets/zebu-stocks/create-watchlist.svg')" width="15px" height="15px" />
                        <P class=" text-center mb-0 ml-1"
                            style="font-size:14px;color: #0037B7;font-weight:609;line-height:16px;cursor: pointer;">
                            Create new watchlist</p>
                    </div>
                </div>
                <v-divider class="mt-6 d-none d-md-block"></v-divider>
                <v-card class="mt-5 ml-4 mx-auto d-none d-md-block" outlined width="254px" height="235px">
                    <div class="pt-4 pl-4 pr-4">
                        <p class=" mb-1" style="font-size:11px;color: #0037B7;font-weight:519;letter-spacing: 1px;">POPULAR
                        </p>
                        <p class="mb-1" style="font-size:17px;color: #000000;font-weight:559;line-height:20px;letter-spacing: -0.36px;">Stocks above
                            daily moving average
                        </p>
                        <p class="" style="font-size:12px;color: #666666;font-weight:469;line-height:16px">Companies
                            notching
                            up eye popping profits consistently and grow</p>
                    </div>
                    <img class="" :src="require('@/assets/zebu-stocks/popularstocks.svg')" width="220px;" />
                </v-card>
                <v-card class="mt-5 mx-auto lineargradiantcard d-none d-md-block" outlined height="235px" width="254px" style="border-radius: 4px;border: 1px solid rgba(0, 55, 183, 0.30);background: linear-gradient(180deg, #FAFBFF 51.56%, #ECF2FF 100%);box-shadow: 0px 1px 2px 1px rgba(116, 116, 116, 0.15), 0px 43px 24px -36px rgba(60, 60, 60, 0.12);">
                    <div class="pt-4 pl-4 pr-4">
                        <p class=" mb-1" style="font-size:11px;color: #0037B7;font-weight:519;letter-spacing: 1px;">DISCOVER
                        </p>
                        <p class=" mb-1" style="font-size:17px;color: #000000;font-weight:559;line-height:20px;letter-spacing: -0.36px;">High-Dividend stocks for april 2023
                        </p>
                        <p class="" style="font-size:12px;color: #666666;font-weight:469;line-height:16px">Dividend stocks
                            can
                            be a great choice for investors to get passive income.</p>
                    </div>
                    <img class="pl-6 mt-6" :src="require('@/assets/zebu-stocks/divident-stocks.svg')" width="220px;"
                        height="" />
                </v-card>
                <v-card class="mt-8 mx-auto d-none d-md-block" outlined width="254px" height="235px">
                    <img class="pl-4 mt-3" :src="require('@/assets/zebu-stocks/tradingimg.svg')" width="220px;" height="" />

                    <div class="pt-4 pl-4 pr-4">
                        <p class=" mb-1" style="font-size:11px;color: #0037B7;font-weight:519;letter-spacing: 1px;">TRENDING IN</p>
                        <p class="mb-2"
                            style="font-size:17px;letter-spacing: -0.36px;color: #000000;font-weight:559;line-height:20px;letter-spacing: -1px;">
                            Most traded &
                            top market capital companies
                        </p>
                        <p class=" mb-4" style="font-size:12px;color: #666666;font-weight:469;line-height:16px">Companies
                            notching up eye popping profits consistently and grow</p>
                    </div>
                </v-card>

                <v-toolbar class="mt-5 mx-md-0 mx-5 toolbar-contant" elevation="0" color="white">
                    <v-toolbar-title class=""
                        style="color: #000000;font-size:16px;font-weight: 559;line-height: 16px;">Stocks in
                        news</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">

                            <v-btn v-bind="attrs" v-on="on" :ripple="false" class="buttoncontant pr-1 d-none d-md-block" plain icon>
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
                <v-card class="elevation-0 mx-md-0 mx-5" v-for="stocknews in stocksinnews" :key="stocknews.title">
                    <v-card class="  mt-2 elevation-0">
                        <div class="borderlines">
                            <p class="pl-3 mb-1"
                                style="font-size:14px;color: #000000;font-weight: 469;line-height: 18px;letter-spacing: -0.5px;">
                                {{ stocknews.title
                                }}
                            </p>
                            <p class="pl-3 mb-2" style="font-size:10px;color:#999999;font-weight:469;line-height:12px">22
                                May, 2023</p>
                        </div>
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
                <div class="text-md-center">
                    <v-btn class="pt- block text-none mx-md-auto " justify-center text @click="readmore()">
                        <!-- <p class=" text-center " style="color: #0037B7;font-size:14px;font-weight:559"> </p> -->
                         <img class="d-none d-md-block"
                                :src="require('@/assets/zebu-stocks/readnews.svg')" width="14px" height="14px" /><span class="pl-1" style="color: #0037B7;font-size: 14px;font-weight: 609;line-height: 16px;">Read other news</span> 

                                &nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
<path d="M1 6L13 6" stroke="#0037B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.09091 10.9102L13 6.00107L8.09091 1.09197" stroke="#0037B7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            
                       
                    </v-btn>
                </div>
                
            </v-col>
        </v-row>
        <div v-if="indices">
            <AllIndices />
        </div>
        <div v-if="sectors">
            <SecTors />
        </div>
        <div v-if="singleindex">
            <SingleIndex :message="selectgrid" />
        </div>
        <div v-if="collction">
            <CollecTion />
        </div>
    </div>
</template>
<script>
import SingleIndex from '../Stocks pages/SingleIndex.vue'
import AllIndices from '../Stocks pages/AllIndices.vue'
import SecTors from '../Stocks pages/SecTors.vue'
import CollecTion from '../Collection/CollecTion.vue'
// import { topindex } from '../../apiurl'
// import { Gainers } from '../../apiurl'
import { api1 } from '../../apiUrl.js'
import axios from "axios";
export default {
    data() {
        return {
            totalvaluestore: '',
            valuestore: "",
            Positivepercentage: '',
            home: true,
            indices: false,
            sectors: false,
            collction: false,
            // gainer:'',
            selectgrid: '',
            hdfumutuLFUND: null,
            value: "50",
            selectedItem: false,
            selectedchange: false,
            hhdhdhhhdhh: true,
            iiiiiiii: false,
            ggggggggggg: 6, 
            tab: null,
            gainer: [],
            loosers: [],
            gainvalue: [],
            tabtopgainer: null,
            selectedRows: [],
            itemsss: '',
            clientids: [],
            itemsmenu: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
            TradeActionTab: [
                "Top gainer", "Top losers", "Volume breakout", "Most active"
            ],
            headers: [
                {
                    text: "Scrips",
                    align: "left",
                    sortable: false,
                    value: "title", class: "successScrips"
                },
                { text: "Mkt cap (cr)", sortable: false, value: "calories", class: "successtitle" },
                { text: "Volume (k)", sortable: false, value: "calories", class: "successvolume" },
                { text: "Price", sortable: false, value: "carbs", class: "successprice" },
                { text: "%Chg", sortable: false, value: "protein", class: "successchg" },
                { text: "200dma", sortable: false, value: "iron", class: "successma" },
                { text: "Day’s range", sortable: false, value: "newcreate", class: "successdaysrange" },
                { text: "", sortable: false, value: "dddddd" }
            ],
            items: [

                {
                    title: 'Nifty Bank',
                    subtitle: "₹17,398.05",
                    secondtitle: "+0.29%",
                    secondsubtitle: "vol 245k"
                },
                {
                    title: 'Nifty Bank',
                    subtitle: "₹17,398.05",
                    secondtitle: "+0.29%",
                    secondsubtitle: "vol 245k"
                },
                {
                    title: 'Nifty Bank',
                    subtitle: "₹17,398.05",
                    secondtitle: "+0.29%",
                    secondsubtitle: "vol 245k"
                },
                {
                    title: 'Nifty Bank',
                    subtitle: "₹17,398.05",
                    secondtitle: "+0.29%",
                    secondsubtitle: "vol 245k"
                },
                {

                    title: 'Nifty Bank',
                    subtitle: "₹17,398.05",
                    secondtitle: "+0.29%",
                    secondsubtitle: "vol 245k"
                },
            ],
            folders: [

                {
                    MobileimgOne: require('@/assets/MobileViewImg/controlPanelGreen.svg'),
                    icon: require('@/assets/zebu-stocks/dividents.svg'),
                    subtitlefirst: 'MULTICAP', subtitlesecond: 'LONGTERM',
                    subsecfirst: "MIN. INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3Y CAGR", subthreesecond: "23.2%",
                    subfourfirst: "TOTAL STOCKS", subfoursecond: "14 stocks",
                    title: 'Dividend Titans',
                },
                {
                    
                    MobileimgOne: require('@/assets/MobileViewImg/controlPanelRed.svg'),
                    icon: require('@/assets/zebu-stocks/alphadynamic.svg'),
                    subtitlefirst: 'MULTICAP', subtitlesecond: 'LONGTERM',
                    subsecfirst: "MIN. INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3Y CAGR", subthreesecond: "23.2%",
                    subfourfirst: "TOTAL STOCKS", subfoursecond: "14 stocks",
                    title: 'Wealth defenders',
                },
                {
                    MobileimgOne: require('@/assets/MobileViewImg/controlPanelGreen.svg'),
                    icon: require('@/assets/zebu-stocks/wealthdyanmic.svg'),
                    subtitlefirst: 'MULTICAP', subtitlesecond: 'LONGTERM',
                    subsecfirst: "MIN. INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3Y CAGR", subthreesecond: "23.2%",
                    subfourfirst: "TOTAL STOCKS", subfoursecond: "14 stocks",
                    title: 'Alpha dynamic',
                },
            ],
            Sectorcollections: [
                {
                    icon: require('@/assets/zebu-stocks/sector-stocks.png'),
                    subtitlefirst: 'Multicap', subtitlesecond: 'longterm',
                    subsecfirst: "MIN. INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3y Cagr", subthreesecond: "23.2%",
                    subfourfirst: "Total stocks", subfoursecond: "14 stocks",
                    title: "Banking stocks",
                    subtitle: "₹ 2,17,398.05",
                    subtitleone: 1.94,
                    subtitletwo: "1M CHANGE",
                    subtitlethree: "7.2%",
                    subtitlefour: "1Y CHANGE",
                    subtitlefive: "7.2%",
                },
                {
                    icon: require('@/assets/zebu-stocks/axiosbank.png'),
                    subtitlefirst: 'Multicap', subtitlesecond: 'longterm',
                    subsecfirst: "MIN. INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3y Cagr", subthreesecond: "23.2%",
                    subfourfirst: "Total stocks", subfoursecond: "14 stocks",

                    title: "Pharma stocks",
                    subtitle: "₹ 2,17,398.05",
                    subtitleone: -1.23,
                    subtitletwo: "1M CHANGE",
                    subtitlethree: "7.2%",
                    subtitlefour: "1Y CHANGE",
                    subtitlefive: "7.2%",
                },
                {
                    icon: require('@/assets/zebu-stocks/hdfcbank.png'),
                    subtitlefirst: 'Multicap', subtitlesecond: 'longterm',
                    subsecfirst: "MIN. INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3y Cagr", subthreesecond: "23.2%",
                    subfourfirst: "Total stocks", subfoursecond: "14 stocks",

                    title: "IT stocks",
                    subtitle: "₹ 2,17,398.05",
                    subtitleone: 1.94,
                    subtitletwo: "1m CHANGE",
                    subtitlethree: "7.2%",
                    subtitlefour: "1Y CHANGE",
                    subtitlefive: "7.2%",
                },
                {
                    icon: require('@/assets/zebu-stocks/sector-stocks.png'),

                    subtitlefirst: 'Multicap', subtitlesecond: 'longterm',
                    subsecfirst: "MIN. INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3y Cagr", subthreesecond: "23.2%",
                    subfourfirst: "Total stocks", subfoursecond: "14 stocks",

                    title: "Banking stocks",
                    subtitle: "₹ 2,17,398.05",
                    subtitleone: -1.94,
                    subtitletwo: "1M CHANGE",
                    subtitlethree: "7.2%",
                    subtitlefour: "1Y CHANGE",
                    subtitlefive: "7.2%",
                },
                {
                    icon: require('@/assets/zebu-stocks/sector-stocks.png'),

                    subtitlefirst: 'Multicap', subtitlesecond: 'longterm',
                    subsecfirst: "MIN. INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3y Cagr", subthreesecond: "23.2%",
                    subfourfirst: "Total stocks", subfoursecond: "14 stocks",

                    title: "Banking stocks",
                    subtitle: "₹ 2,17,398.05",
                    subtitleone: -1.94,
                    subtitletwo: "1M CHANGE",
                    subtitlethree: "7.2%",
                    subtitlefour: "1Y CHANGE",
                    subtitlefive: "7.2%",
                },

                // {
                //   icon: require('@/assets/zebu-stocks/axiosbank.png'),

                // },
                // {
                //   icon: require('@/assets/zebu-stocks/kottak.png'),

                // },
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

            // mobile view
       
            tags: ['Top Gainer', 'Trending', 'Vol. breakout','Most Active',
    ],
    mutualfundheaders: [
               
                { text: "AUM (cr)", sortable: false, value: "id", class: "successtitle", align: 'left'  },
                { text: "TER (%)", sortable: false, value: "invname", class: "successvolumesssssss", align: 'right' },
               

            ],
            mutualfunditems: [
                {
                    id: 1,
                    invname: "Ashish Kacholia's",

                    calories: "High",
                    stocks: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    GROWTH: "GROWTH",
                    ELSS: "ELSS",
                    chip: "Reco"
                },
                {
                    id: 2,

                    invname: "Ashish Kacholia's",
                    calories: "High",
                    stocks: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    EQUITY: "EQUITY",
                    ELSS: "ELSS",

                },
                {
                    id: 3,
                    invname: "Ashish Kacholia's",
                    risk: "High",
                    stocks: "20",
                    calories: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    ELSS: "ELSS",

                },
                {
                    id: 4,
                    invname: "Ashish Kacholia's",
                    risk: "High",
                    stocks: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    ELSS: "ELSS",
                    GROWTH: "GROWTH",

                },
                {
                    id: 5,
                    invname: "Ashish Kacholia's",
                    risk: "High",
                    stocks: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    Growth: "Growth",
                    ELSS: "ELSS",
                    GROWTH: "GROWTH",

                },
                {
                    id: 6,
                    invname: "Ashish Kacholia's",
                    risk: "High",
                    stocks: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    GROWTH: "GROWTH",
                    EQUITY: "EQUITY",

                },
                {
                    id: 6,
                    invname: "Ashish Kacholia's",
                    risk: "High",
                    stocks: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    EQUITY: "EQUITY",
                },
                {
                    id: 6,
                    invname: "Ashish Kacholia's",
                    risk: "High",
                    stocks: "20",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    EQUITY: "EQUITY",
                    threeyrCAGR: 82.1,
                },
            ],

           
            cardItems:[
                {
                    title:"POPULAR",
                    subtitle:"Stocks above daily moving average",
                    image: require('@/assets/zebu-stocks/popularstocks.svg'),
                },
                {
                    title:"DISCOVER",
                    subtitle:"High-Dividend stocks for april 2023",
                    image: require('@/assets/zebu-stocks/tradingimg.svg'),
                },
            ]
        };
    },
    mounted() {
        this.apitopindex();
        this.topgainers();
        this.toploosers();
        this.stockrange();
        this.mostactive();
        this.apivolume();
        var axiosthis = this
        let configs = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${api1}/getsectoradstock`,
            headers: {}
        };

        axios.request(configs)
            .then((response) => {
                console.log("sector response", response)
                axiosthis.clientids = response.data
                console.log("zzzzzzz", 100 * (4 / 4))
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {

        apivolume() {
            const axios = require("axios");
            let data = "";

            let config = {
                method: "post",
                maxBodyLength: Infinity,
                url: `${api1}/getVolumeBreakout`,
                headers: {},
                data: data,
            };

            axios
                .request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));

                    this.voldata = response.data;
                    this.values = this.voldata.Exchange;
                    console.log("email123 :", this.values);
                    console.log("data", this.voldata);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        // Api by DM
        apitopindex() {
            const axios = require('axios');
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api1}/getTopIndex`,
                headers: {}
            };
            axios.request(config)
                .then((response) => {
                    console.log("asd", response.data);
                    let data = response.data;
                    data.sort((a, b) => {
                        return a.sort - b.sort;
                    });
                    for (let i = 0; i < data.length; i++) {
                        data[i]['ch'] = (data[i].lp - data[i].close)?.toFixed(2)
                    }
                    this.itemsss = data
                    // console.log("",itemsss)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        topgainers() {
            // const axios = require('axios');
            let data = JSON.stringify({
                "TopGainersLosers": "G",
                "count": 20
            });
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api1}/getTopGainersLosers`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios.request(config)
                .then((response) => {
                    // console.log(JSON.stringify(response.data));
                    let data = response.data
                    console.log("gainer", data)
                    for (let i = 0; i < data.length; i++) {
                        data[i]['ch'] = (data[i].lp - data[i].close)?.toFixed(2)
                    }
                    this.gainer = data
                    console.log("asd", this.gainer);
                    // let data1 = data[0]
                    // console.log(data1.Exchange)

                    // for (let i = 0; i < data.length; i++) {

                    // }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        toploosers() {
            var axiosthis = this;
            // const axios = require('axios');
            let data = JSON.stringify({
                "TopGainersLosers": "L",
                "count": 20
            });
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api1}/getTopGainersLosers`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios.request(config)
                .then((response) => {
                    let data = response.data
                    console.log("looser", data)
                    for (let i = 0; i < data.length; i++) {
                        data[i]['ch'] = (data[i].lp - data[i].close)?.toFixed(2)
                    }
                    axiosthis.loosers = data
                    console.log("asds", axiosthis.loosers);

                    // let data1 = data[0]
                    // console.log(data1.Exchange)

                    // for (let i = 0; i < data.length; i++) {

                    // }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        mostactive() {
            const axios = require('axios');
            let data = JSON.stringify({
                "MostActive": "Value",
                "count": 20
            });
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api1}/getMostActive`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(response.data);
                    let data = response.data
                    console.log("gain by value", data)
                    for (let i = 0; i < data.length; i++) {
                        data[i]['ch'] = (data[i].lp - data[i].close)?.toFixed(2)
                    }
                    this.gainvalue = data
                    console.log("asdsd", this.gainvalue);
                    // this.gainvalue = response.data
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        // ..............seo.................................................
        stockrange() {
            var axiosthis = this;

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api1}/getadstock`,
                headers: {}
            };

            axios.request(config)
                .then((response) => {
                    //   console.log(JSON.stringify(response.data));
                    console.log("response", response)
                    axiosthis.valuestore = response.data
                    console.log("valuestore", axiosthis.valuestore);

                    axiosthis.totalvaluestore = axiosthis.valuestore.Negative + axiosthis.valuestore.Positive + axiosthis.valuestore.Neutral
                    //  100*(426/1706)
                    // axiosthis.Positivepercentage =100*(axiosthis.valuestore.Positive/axiosthis.totalvaluestore)
                    //  console.log("Positivepercentage",typeof axiosthis.Positivepercentage);
                    axiosthis.Negativepercentage = 100 * (axiosthis.valuestore.Negative / axiosthis.totalvaluestore)
                    console.log("Negativepercentage", axiosthis.Negativepercentage);
                    axiosthis.Neutralpercentage = 100 * (axiosthis.valuestore.Neutral / axiosthis.totalvaluestore)
                    console.log("Neutralpercentage", axiosthis.Neutralpercentage);


                    console.log("totalvaluestore", axiosthis.totalvaluestore)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        SingleIndexpage(index) {
            this.singleindex = true;
            this.home = false;
            this.index = index
            console.log('Clicked card index:', this.index);
            let selectgrid = this.itemsss[this.index]
            this.selectgrid = selectgrid.idxname
            console.log("gird name", this.selectgrid);
        },
        etfpage() {
            this.etfpage = true
            this.sigleindex = false
        },
        getTextColorClass(per) {
            if (per > 0) {
                return 'positive-color';
            } else if (per < 0) {
                return 'negative-color';
            } else {
                return '';
            }
        },
        backtostockspge() {
            this.home = true
            this.sectors = false
            this.indices = false
        },
        stockTosector() {
            this.sectors = true
            this.indices = false
            this.home = false
        },
        readmore() {
            this.stocksinnews.push(this.stocksinnews[0])
        },
        backtopage() {
            this.selectedTab = false
        },
        sssssssssss() {
            this.ggggggggggg = this.gainer.length
            this.hhdhdhhhdhh = false
            this.iiiiiiii = true
        },
        Seemorestocksup() {
            this.ggggggggggg = 6
            this.hhdhdhhhdhh = true
            this.iiiiiiii = false
        },
        selectItem(item) {
            this.selectedItem = item
        },
        unSelectItem() {
            this.selectedItem = false
        },
        indicesPage() {
            this.indices = true;
            this.home = false;
        },
        collectionpage() {
            this.collction = true;
            this.home = false;
        },
    },
    components: { AllIndices, SecTors, SingleIndex, CollecTion },
}
</script>
<style lang="scss">
// media queries
@media only screen and (max-width: 400px) {
.floatrightChange {
//    font-size:8px !important;
}
.ssdsasds {
    // width:fit-content !important;
}
.LongTermCard {
    margin-left:3px !important;
}
 }
 
@media only screen and (max-width: 600px) {
    .fontsize24 {
        color: var(--indmoney-gray-gray-900, #181B19);
font-size: 18px !important;
font-weight: 559 !important;
line-height: 126% !important;
letter-spacing: -0.072px !important;
  }
  .MininvestfontSize {
    font-size: 11px !important;
  }
  .subssecondValue {
    font-size: 14px !important;
  }
.fontsize1G659w {
    color: #000 !important;
font-size: 16px !important;
font-weight: 559 !important;
line-height: 16px !important; 
}
.heightCardCustamaize {
    height:fit-content !important;
    border-radius: 8px !important;
border: 1px solid #EEF0F2 !important;


}
}




.chipDeaultSizeCus {
.v-chip.v-chip--outlined.v-chip.v-chip {
    padding: 13px !important;
    height: 25px !important;
}
}
.yourwatchlisttextfield {
    .v-input .v-label {
        font-size: 14px !important;
        font-weight: 469 !important;
        line-height: 16px !important;
        color: #666666 !important;

    }
}

.heightcustammmshdh {
    max-width: 216px !important;
}

.heightcustammmshdh {
    .v-input__control>.v-input__slot {
        padding-left: 8px !important;
    }
}

.heightcustammmshdh .v-label {
    color: #000000 !important;
    font-size: 14px !important;
    font-weight: bold !important;
}

.hhhhhhhhhhh {
    ::-webkit-scrollbar {
        display: none;
    }
}

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

.toolbar-contant {
    .v-toolbar__content {
        padding-top: 0px !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
        // height:59px !important;
    }
}

.buttoncontant {
    .v-btn__content {
        justify-content: end !important;
    }
}

.linear-gradiantcard {
    background: linear-gradient(to right, #000000, #000000) !important;
}

.v-data-table-header {
    background-color: #FAFBFF;
}

.postionchange {
    position: absolute !important;
    top: 25px !important;
    left: 170px !important;
    right: 200px
}

// .fwtitle{
// font-weight:599 !important; 
// }

.successvolumesssssss {
    color:red !important;
}
</style>