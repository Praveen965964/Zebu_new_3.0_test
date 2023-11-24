<template>
    <div id="app">
        <v-container class="pa-0">
        <v-row v-if="home">
            <v-col cols="9" class="pt-0 pr-8">
                <v-row class="pt-5"> 
                    <v-col cols="10" >
<p class="mb-0 " style="color: #000;font-size: 20px;font-weight: 559;line-height: 16px; letter-spacing: -0.4px;">Top indices</p>
                    </v-col>
                    <v-col cols="2" align="end" class="pr-1 pt-0">
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
                <div class="mt-2 display-flex row">
                    <p>{{  itemsss}}</p>
                    <v-card v-for="item in itemsdatastore" :key="item"  elevation="0"
                        outlined height="89px" width="134px" class="pl-3 pt-2 ml-3 mr-1">
                        <!-- <p>{{ item }}</p> -->
                        <p class="mb-1 fontsize14b" style="">{{ item.idxname
 }}</p>
  <v-divider class="mt-2" style="border:1px solid;background-color: #000000;"
                            width="24px"></v-divider>

                            <p class="mb-0 pt-3 fontsize12grey">₹{{ item.lp }}</p>
                            <!-- :class="getTextColorClass(item.change)" -->
                             <p class="mb-0 pt-1 fontsize12green" >{{ item.ch }}<span>({{
                            item.change }}%)</span>
                        </p>    
                        <!-- <p class="mb-1 fontsize14b" style="">{{ item.idxname }}</p>
                        <v-divider class="mt-2" style="border:1px solid;background-color: #000000;"
                            width="24px"></v-divider>
                        <p class="mb-0 pt-3 fontsize12grey">₹{{ item.lp }}</p>
                        <p class="mb-0 pt-1 fontsize12green" :class="getTextColorClass(item.change)">{{ item.ch }}<span>({{
                            item.change }}%)</span>
                        </p> -->
                    </v-card>
                    <v-row v-if="itemsdatastore == ''" class="elevation-0 ">
                        <v-col cols="12" class="font-weight-medium mb-7 mt-10 text-center"
                            style="font-size:14px; color: #d6d6d6;">No data available</v-col>
                    </v-row>
                </div>


                <p class="fontsize20 mb-0 pt-10">Today’s trade action</p>
                <v-card class="rounded-lg elevation-0 mt-6 scrollcustamize" color="#F1F3F8" height="64px" width="100%">
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
                                        <!-- <v-col v-else-if="this.valuestore >=0" cols="9"
                                            class="font-weight-medium mb-7 mt-4 text-center">
                                        </v-col>
                                         -->
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
                <v-tabs background-color="transparent" class="mt-5" color="black" v-model="tabtopgainer">
                    <v-tab v-for="tabss in TradeActionTab" :key="tabss" class="ml-1"><span class=" text-none tabfonts"
                            style="">{{ tabss }}
                        </span> </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tabtopgainer">
                    <!-- table-1 -->
                    <v-tab-item>
                        <v-data-table  :headers="Holdingheaders" :items="Holdingitems" :items-per-page="ggggggggggg"
                                         item-key="id" v-model="selectedRows"
                                        class="elevation-0" hide-default-footer
                                        style="border: 1px solid #efeef3;background-color:white">
                                        <template v-slot:[`header.Daysrange`]="{ header }">
       <v-row no-gutters> 
        <v-col cols="11" class="">
<p class="mb-0 pt-2 ">{{ header.text }}</p>
        </v-col>
        <v-col cols="1" class="pl-0 pr-0">
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
                                        <v-divider></v-divider>
                                        <template v-slot:item="{ item }">
                                            <tr class="" style="background-color:"
                                                @mouseover="selectItem(item)" @mouseleave="unSelectItem(item)">
                                                <td class=" pr-0 pt-2 pb-1"
                                                    style="color: #000000;font-size: 13px;">
                                                    <v-row>
                                                        <v-col cols="7" class="pr-0">
                                                            <p class="pt-1" style="color: #000;font-size: 14px;font-weight: 559;line-height: 16px;"> {{item.Title}}</p>
                                                    <div class="d-flex row pb-2">
                                                        <v-card :color="item === selectedItem ?'white' : '#F1F3F8'" v-if="item.alert == 'ALERT'" class=" ml-2 mb-3 py-1  px-2 "
                                                            elevation="0"  height="20px" >
                                                            <div class="d-flex  ">
                                                                
                                                                <img class="" :src="item.image1" width="8px" height="8px" />
                                                                <p class="mb-0 pl-1"
                                                                style="color: #666;font-size: 9px;font-weight: 469;line-height: 12px;letter-spacing: 0.9px;">{{ item.alert }}</p>
                                                            </div>
                                                        </v-card>
                                                        <v-card v-if="item.event == 'EVENTS'" :color="item === selectedItem ?'white' : '#F1F3F8'" class="pa-1 ml-2 mb-3"
                                                            elevation="0" >
                                                            <div class="d-flex  ">
                                                                
                                                                <img class="" :src="item.image2" width="8px" height="" />
                                                                <p class="mb-0 pl-1"
                                                                style="color: #666;font-size: 9px;font-weight: 469;line-height: 12px;letter-spacing: 0.9px;">{{ item.event }}</p>
                                                            </div>
                                                        </v-card>
                                                        <v-card v-if="item.News == 'NEWS'" :color="item === selectedItem ?'white' : '#F1F3F8'" class="pa-1 ml-2 mb-3"
                                                            elevation="0" >
                                                            <div class="d-flex  ">
                                                                <img class="" :src="item.image3" width="10px" height="" />
                                                                <p class="mb-0 pl-1"
                                                                style="color: #666;font-size: 9px;font-weight: 469;line-height: 12px;letter-spacing: 0.9px;">{{ item.News }}</p>
                                                            </div>
                                                        </v-card>
                                                    </div>
                                                        </v-col>
                                                       
                                                        <v-col cols="5" >
                                                            <div class="d-flex row pt-6" v-if="item === selectedItem">
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


                                                    <v-btn class="pa-0  elevation-0 ml-1" outlined dense small
                                                        style="height:20px;min-width:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color: white;">
                                                        <img alt="" class="shrink "
                                                            :src="require('@/assets/zebu-stocks/tradingsymbol.svg')"
                                                            width="12px" /></v-btn>
                                                    <v-btn class="pa-0 ml-1 elevation-0 " outlined dense small
                                                        style="height:20px;min-width:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color: white;padding: 5px;">
                                                        <img alt="" class="shrink "
                                                            :src="require('@/assets/horizantalmenuicon.svg')"
                                                            width="10px" /></v-btn>
                                                </div>
                                                        </v-col>
                                                    </v-row>
                                                </td>
                                                <td class=" pr-0"> <p class="mb-0"
                                                        style="color: #000;font-size: 13px;font-weight: 509;line-height: 16px;">₹29,534 <span style="color: #666;font-size: 13px;font-weight: 469;line-height: 16px;"> Cr </span></p></td>
                                                <td><p class="mb-0" style="color: #000;font-size: 13px;font-weight: 509;line-height: 16px;">14,968 <span style="color: #666;font-size: 13px;font-weight: 469;line-height: 16px;">k</span></p></td>
                                                <td class=""><span class=""
                                                        style="color: #000;font-size: 13px;font-weight: 509;line-height: 16px;">₹236.05</span></td>
                                                <td class="pr-0" >
                                                    <span class="text-wrap"
                                                        style="color: #43A833;font-size: 13px;font-weight: 469;line-height: 16px; ">+1.65%</span>
                                                </td>
                                                <td style="color: #000;font-size: 13px;font-weight: 509;line-height: 16px;">₹230.05
                                                </td>
                                                <td>
                                        <v-row no-gutters class="">
                                            <v-col class="" cols="3">
                                                <p class="pt-2 mb-0" style="color: #000;font-size: 13px;font-weight: 469;line-height: 16px; ">₹233</p>
                                            </v-col>
                                            <v-col class="" cols="6">
                                                <v-slider disabled :ripple="false" class="ml- mt-0 pt-0 mb-0"   
                                                value="50"
                                                    thumb-color="black" track-color="#D9D9D9" :thumb-size="0" />
                                            </v-col>
                                            <v-col class="pa-" cols="3">
                                                <p class="pl-0 pt-2 mb-0" style="color: #000;font-size: 13px;font-weight: 469;line-height: 16px; ">
                                                    ₹236</p>
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
                <v-card class="mt-10 pt-5 pb-3 elevation-0 " color="#F1F3F8">
                    <v-row no-gutters>
                        <v-col cols="6">
                            <p class="pl-8 text-none pt-3 fontsize24">Invest easy with curated <br>ideas and ready made<br> collections
                            </p>
                            <div class="display-flex pt-2">
                                <v-btn class="text-none rounded-xl ml-8 " width="110px" height="32px" outlined
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
                            <p class="pl-8 pt-6 pb-2 mb-16 fontsize14g"
                                style="">
                                Handpicked global baskets of stocks managed <br> by global institutions and fund managers
                            </p>
                            <v-btn class="mt-16 ml-4
                  text-none" :ripple="false" to="collection"   text @click="collectionpage()">
                                <span class="seemorelessfontsize" >View all collections</span>
                            </v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-card class="elevation-0 mb-3 mr-6 elevation-0" v-for="folder in folders" height="120px"
                                :key="folder.title">
                                <v-list>
                                    <v-list-item class="pr-0">
                                        <v-list-item-avatar size="46px" class="mt-n1 "> <v-img :src="folder.icon"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content class="pt-2 ml-n1">
                                            <v-list-item-title><span class="fontsize1G659w">{{ folder.title }}</span></v-list-item-title>
                                            <v-list-item-subtitle>
                                                <v-row no-gutters class="pt-1 ">
                                                    <v-col cols="5" class="pa-0">
                                                        <v-card class=" elevation-0 mr-2 " color="#F1F3F8"
                                                            style="border-radius:4px">
                                                            <p class=" mb-0  text-center "
                                                                style="padding-top: 2px;padding-bottom:2px;letter-spacing:0.9px;color:#666666;font-size:9px;font-weight:469;line-height:12px">
                                                                {{ folder.subtitlefirst }}</p>
                                                        </v-card>
                                                    </v-col>
                                                    <v-col cols="5">
                                                        <v-card class="ml-n1 elevation-0" color="#F1F3F8" width="72px"
                                                            style="border-radius:4px">
                                                            <p class="mb-0 font-weight-medium text-center"
                                                                style="padding-top: 2px;padding-bottom:2px;letter-spacing:1px;color:#666666;font-size:9px;font-weight:469;line-height:12px">
                                                                {{ folder.subtitlesecond }}</p>
                                                        </v-card>
                                                    </v-col>
                                                </v-row></v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action class="mt-n1 mr-n2">
                                            <router-link to="/">
                                                <img alt="" class="shrink ml-3"
                                                    :src="require('@/assets/zebu-stocks/dividentimg.svg')"
                                                    width="27px" /></router-link>
                                        </v-list-item-action>
                                        <v-list-item-action class="mt-n1">
                                            <router-link to="/">
                                                <img alt="" class="shrink pr-3"
                                                    :src="require('@/assets/zebu-stocks/highrisk.svg')" /></router-link>
                                        </v-list-item-action>
                                    </v-list-item>
                                    <v-row class="mb-1" no-gutters>
                                        <v-col cols="2"></v-col>
                                        <v-col cols="3">
                                            <v-list-item-content class="pt-0 pb-0 pl-2">
                                                <v-list-item-title class=""> <span class="" style="font-size:9px ;font-weight:469;line-height:12px; color: #666666;letter-spacing:1px">{{
                                                            folder.subsecfirst }}
                                                    </span></v-list-item-title>
                                                <v-list-item-subtitle><span class=""
                                                        style="font-weight:569;line-height:16px;font-size:13px ; color:#000000;">
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
                                                        style="font-size:13px ; color: #43A833;font-weight:569;line-height:16px;">{{
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
                                                        style="font-weight:569;line-height:16px;font-size:13px ; color:#000000;">{{
                                                            folder.subfoursecond }}</span>
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-col>
                                        <v-col cols="1"></v-col>
                                    </v-row>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
                        <div class="mt-5 ">
                    <v-card class="pb-2 elevation-0" color="#F1F3F8">
                        <v-toolbar class="pl-4 pt-2 contantpaddingreduced font-weight-bold elevation-0" color="#F1F3F8">
                            <v-toolbar-title class=""
                                style="color:#000000;background-color: #F1F3F8;font-size: 24px;font-weight:559;line-height:24px;letter-spacing:-1.2px">
                                Sector collections</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <div class="mr-7">
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
                        </v-toolbar>
                        <p class="pl-8"
                            style="font-size: 14px; color:#666666;font-weight:469;line-height:20px;letter-spacing:-0.4px">
                            Handpicked global baskets of stocks managed <br> by global institutions and fund managers
                        </p>
                        <div class="hhhhhhhhhhh pt-3 ml-5 mr-3" style="height:">
                            <div class="" style="overflow: scroll; ">
                                <div class="" style="display: inline-flex; overflow: hidden; ">
                                    <v-card class="rounded-lg ml-3  pl-5 pt-3 pr-2  elevation-0" width="236px"
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
                        <v-btn @click="stockTosector()" class="mt-3 mb-1 ml-6
                  text-capitalize" :ripple="false" text style="">
                            <span class="text-none seemorelessfontsize">View all sectors</span>
                        </v-btn>

                     
                    </v-card>
                </div>










                        <v-card class="mt-5 py-5 elevation-0" color="#F1F3F8">
                    <v-row no-gutters>
                        <v-col cols="6">
                            <p class="pl-8 text-none pt-3"
                                style="font-size: 24px; color:#000000;font-weight:559;line-height:24px;letter-spacing: -1.25px">
                                Pick portfolio’s like<br>
                                your superstars.<br> Follow them below.
                            </p>
                            <div class="display-flex pt-2">
                                <v-btn class="text-none rounded-xl ml-8 " width="93px" height="32px" outlined
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
                            <p class="pl-8 pt-6 pb-4 mb-16 "
                                style="font-size: 14px; color:#666666;font-weight:469;line-height:20px;letter-spacing:-0.4px">
                                Handpicked global baskets of stocks managed <br> by global institutions and fund managers
                            </p>
                            <v-btn  class="mt-16  ml-6 text-none" :ripple="false" text to="superstar">
                                <span class="seemorelessfontsize" >View all portfolios</span>   
                            </v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-card class="elevation-0 mb-3 mr-6 elevation-0" v-for="folder in folders" height="120px"
                                :key="folder.title">
                                <v-list>
                                    <v-list-item class="pr-0">
                                        <v-list-item-avatar size="46px" class="mt-n1  white--text" color="blue"> {{
                                            folder.title.slice(0, 1) }}
                                        </v-list-item-avatar>
                                        <v-list-item-content class="pt-2 ml-n1">
                                            <v-list-item-title><span
                                                    style="font-weight:559;color:#000000;font-size:16px;line-height:16px">{{
                                                        folder.title
                                                    }}</span></v-list-item-title>
                                            <v-list-item-subtitle>
                                                <v-row no-gutters class="pt-1 ">
                                                    <v-col cols="5" class="pa-0">
                                                        <v-card class=" elevation-0 mr-2" color="#F1F3F8"
                                                            style="border-radius:4px">
                                                            <p class="pt-1  pb-1 mb-0  text-center"
                                                                style="letter-spacing:1px;color:#666666;font-size:9px;font-weight:469;line-height:12px">
                                                                {{ folder.subtitlefirst }}</p>
                                                        </v-card>
                                                    </v-col>
                                                    <v-col cols="5">
                                                        <v-card class="ml-n1 elevation-0" color="#F1F3F8" width="72px"
                                                            style="border-radius:4px">
                                                            <p class="pt-1 pb-1 mb-0 font-weight-medium text-center"
                                                                style="letter-spacing:1px;color:#666666;font-size:9px;font-weight:469;line-height:12px">
                                                                {{ folder.subtitlesecond }}</p>
                                                        </v-card>
                                                    </v-col>
                                                </v-row></v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action class="mt-n1 mr-n2">
                                            <router-link to="/">
                                                <img alt="" class="shrink ml-3"
                                                    :src="require('@/assets/zebu-stocks/dividentimg.svg')"
                                                    width="27px" /></router-link>
                                        </v-list-item-action>
                                        <v-list-item-action class="mt-n1">
                                            <router-link to="/">
                                                <img alt="" class="shrink pr-3"
                                                    :src="require('@/assets/zebu-stocks/highrisk.svg')" /></router-link>
                                        </v-list-item-action>
                                    </v-list-item>
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
                                    </v-row>
                                </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                        </v-card>


            </v-col>

            <v-col cols="3" class="pt-2">
                <div class="" style="position:relative">  
  
  <img
        alt=""
        class="shrink mt-2"
        :src="require('@/assets/zebu-stocks/professtinaltrader.svg')"   width="100%" 
      />


<div class="cardpostionchange">
      <img
        alt=""
        class="shrink mt-4"
        :src="require('@/assets/zebu-stocks/mynt-logo.svg')"   width="117px"
      />
<p class="mb-1 mt-4" style="color: #010101;font-size: 19px;font-weight: 569;line-height: 16px;letter-spacing: -0.4px;">Professional trader?</p>
<p class="mb-0 pt-1" style="color: #FFF;font-size: 22px;font-weight: 469;line-height: 24px;letter-spacing: -0.48px;">Need more powerful<br> tools for blitz fast<br>trading?</p>
<v-btn class=" mt-5  px-5
                      text-capitalize"
                      rounded  
                      outlined 
                      :ripple="false"  
                      style="background-color: #000000;"
                    >
                  <span class="py-2" style="color: #FFF;font-size: 13px;font-weight: 469;line-height: 20px;letter-spacing: -0.28px;">Checkout Mynt App</span>  
                    </v-btn></div>

                  </div>
                  <v-row>
                    <v-col cols="8" class="">
                     <p class="font-weight-bold" style="color: #000000;font-size:16px;">Watchlists</p> 
                    </v-col>
                    <v-col cols="4">
                        <div class="d-flex row pa-1 pt-3" >
                            <v-btn text height="fit-content"  class="pa-1 text-capitalize" style="color: #0037B7;font-size: 14px;font-weight: 559;line-height: 16px;letter-spacing: -0.28px;">3 lists
</v-btn> 
<v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">

                            <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="pa-0" height="fit-content" width="fit-content" icon>
                                <v-icon color="black">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                        </div>
                       
                    </v-col>
                  </v-row>
                <v-expansion-panels class="mb-2" flat  multiple>
<v-expansion-panel class="" style="">
  <v-expansion-panel-header class="pa-0 pb-2">
    <v-row >
      <v-col class="" cols="9">
        <p class="mb-0 font-weight-medium" style="color: #666666;font-size: 14px;">Raj Kumar’s watchlist
</p>
      </v-col>
      <v-col class="" cols="3">
<p class="mb-0 font-weight-medium ml-n2" style="color: #666666;font-size: 14px;"><span class="pr-1">{{selected.length }}</span>items</p>
      </v-col>
    </v-row>
  </v-expansion-panel-header><v-divider class="mt-n2"></v-divider>
  <v-expansion-panel-content class="pa-0 mt-4 pl-5 checkboxfontlabel">
    <v-checkbox class="rounded-xl pa-2 ma-0 " v-for="checkboxs in fundcategery" :key="checkboxs"
      v-model="selected"
      :label="checkboxs"
      :value="checkboxs"
    ></v-checkbox>

  </v-expansion-panel-content>
</v-expansion-panel>
</v-expansion-panels>


<v-list  class="pt-0 pb-0 "   v-for="watchlistbankdetaies in watchlistdetailes" :key="watchlistbankdetaies.title"
       
     
    >
   


      <v-list-item  class="pl-0 pr-0 ">
       

        <v-list-item-content class="pt-0 pb-0" style="width: fit-content;">
          <v-list-item-title > <span class="" style="color: #000;font-size: 13px;font-weight: 569;line-height: 16px;"> {{watchlistbankdetaies.title}}</span></v-list-item-title>

          <v-list-item-subtitle><span class="mb-0 pt-2" style="color: #999;font-size: 13px;font-weight: 469;line-height: 16px;">{{watchlistbankdetaies.subtitle}}</span></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="">
        <p class="mb-0" style="color: #000;font-size: 13px;font-weight: 569;line-height: 16px;">{{watchlistbankdetaies.firsttitle}}</p>
        <p class="mb-0 pt-2" style="color: #43A833;font-size: 13px;font-weight: 509;line-height: 16px;">{{watchlistbankdetaies.firstsubtitle}}</p>
        </v-list-item-action>
       
      </v-list-item>
      <v-divider></v-divider>
    </v-list>

           
    <div class=" mx-auto  pt-7  pl-1">
                    <div class="display-flex row mx-auto  justify-center"  >
                        <img class="" :src="require('@/assets/zebu-stocks/create-watchlist.svg')" width="16px" height="16px" />
                        <P  class=" text-center mb-0 ml-1" style="font-size:14px;color: #0037B7;font-weight:559;line-height:16px;cursor: pointer;">
                        Create new watchlist</p>
                    </div>
                </div>
                <v-divider class="mt-7"></v-divider>

                <v-toolbar class="mt-5 toolbar-contant" elevation="0" color="white">
                    <v-toolbar-title class=""
                        style="color: #000000;font-size:16px;font-weight: 559;line-height: 16px;">Stocks in
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
                <div class="text-center">
                    <v-btn class="pt- block text-none mx-auto " justify-center text @click="readmore()">
                        <!-- <p class=" text-center " style="color: #0037B7;font-size:14px;font-weight:559"> </p> -->
                         <img class=""
                                :src="require('@/assets/zebu-stocks/readnews.svg')" width="14px" height="14px" /><span class="pl-1" style="color: #0037B7;font-size: 14px;font-weight: 609;line-height: 16px;">Read other news</span> 
                            
                       
                    </v-btn>
                </div>


            </v-col>
        </v-row>
       </v-container>
    </div>
</template>

<script>
// import { api } from '../../apiurl'
import axios from "axios";

export default {
    data() {
        return {
            itemsdatastore: [],
            totalvaluestore: '',
            valuestore: "",
            Positivepercentage: '',
            clientids: [],

            home: true,
            indices: false,
            sectors: false,
            selected:[],
            hdfumutuLFUND: null,
            value: "50",
            selectedItem: false,
            selectedchange: false,
            hhdhdhhhdhh: true,
            iiiiiiii: false,
            ggggggggggg: 5,
            tab: null,
            tabtopgainer: null,
            selectedRows: [],
            itemsmenu: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],

TradeActionTab:[
    "Top gainer","Trending","Volume breakout","Gold bonds","Most active"
],
fundcategery:[
    "Debt funds","Hybrid funds","Equity funds","Sectoral funds","Other funds"
],
 Holdingheaders: [
            {
                text: "Scrips",
                align: "left",
                sortable: false,
                value: "benqty", class: "successScrips",
                width:"29%"
            },
            { text: "Mkt cap (cr)", sortable: false, value: "calories", class: "successScrips",
            // width:"14%" 
        },
            { text: "Volume (k)", sortable: false, value: "carbs", class: "successScrips",
            // width:"12%" 
        },
            { text: "Price", sortable: false, value: "ltp", class: "successScrips" },
            { text: "%Chg", sortable: false, value: "newcreate", class: "successScrips" },
            { text: "200dma", sortable: false, value: "calories", class: "successScrips" },
            { text: "Day’s range", sortable: false, value: "Daysrange", class: "successScrips",width:"19%" },
        ],

        Holdingitems: [
            {
                id: 1,
                Title: "Reliance industries",
                alert: "ALERT",
                event: "EVENTS",
image1: require('@/assets/zebu-stocks/alertimg.svg'),
image2: require('@/assets/zebu-stocks/eventesimg.svg'),
            },
            {
                id: 2,
                chipname: "Reco",
                Title: "HCL Technologies",
                News: "NEWS",
                image3: require('@/assets/zebu-stocks/newsimg.svg'),
            },
            {
                id: 3,
                Title: "Tata Motors",
                alert: "ALERT",

image1: require('@/assets/zebu-stocks/alertimg.svg'),

            },
            {
                id: 4,
                Title: "Bharti Airtel",
                alert: "ALERT",
image1: require('@/assets/zebu-stocks/alertimg.svg'),
News: "News",
image3: require('@/assets/zebu-stocks/newsimg.svg'),
            },
            {
                id: 5,
                Title: "HDFC bank",
                alert: "ALERT",
                event: "EVENTS",
                image1: require('@/assets/zebu-stocks/alertimg.svg'),
                 image2: require('@/assets/zebu-stocks/eventesimg.svg'),
            },
            {
                id: 6,
                Title: "Delhivery",
                event: "EVENTS",
image2: require('@/assets/zebu-stocks/eventesimg.svg'),News: "NEWS",
image3: require('@/assets/zebu-stocks/newsimg.svg'),

            },
            {
                id: 7,
                Title: "One 97 Paytm",
                alert: "ALERT",
                event: "EVENTS",image1: require('@/assets/zebu-stocks/alertimg.svg'),
image2: require('@/assets/zebu-stocks/eventesimg.svg'),
            },
            {
                id: 8,
                Title: "IndusInd Bank",
                alert: "ALERT",
               image1: require('@/assets/zebu-stocks/alertimg.svg'),
News: "News",
image3: require('@/assets/zebu-stocks/newsimg.svg'),
            },
            {
                id: 9,
                Title: "Laurus Labs",
                alert: "ALERT",
                // event: "EVENTS",
                image1: require('@/assets/zebu-stocks/alertimg.svg'),
// image2: require('@/assets/zebu-stocks/eventesimg.svg'),
News: "NEWS",
image3: require('@/assets/zebu-stocks/newsimg.svg'),
            },
            {
                id: 10,
                Title: "Indian Hotels",
image2: require('@/assets/zebu-stocks/eventesimg.svg'),
News: "NEWS",
image3: require('@/assets/zebu-stocks/newsimg.svg'),
            },
            {
                id: 11,
                Title: "Dalmia Bharat",
                alert: "ALERT",
                event: "EVENTS",image1: require('@/assets/zebu-stocks/alertimg.svg'),
image2: require('@/assets/zebu-stocks/eventesimg.svg'),
News: "NEWS",
image3: require('@/assets/zebu-stocks/newsimg.svg'),
            },
            // {
            //     id: 6,
            //     Fundname: "ICICI Prudential Long Term Equity Fund",
            //     AUMval: "₹29,534 Cr",
            //     TERval: "1.15%",
            //     MinInvest: "₹27,400",
            //     oneyearCAGR: 20.2,
            //     threeyrCAGR: 82.1,
            // },
            // {
            //     id: 3,
            //     Fundname: "Kotak Gold Fund",
            //     AUMval: "₹29,534 Cr",
            //     TERval: "1.15%",
            //     MinInvest: "₹27,400",
            //     oneyearCAGR: 20.2,
            //     threeyrCAGR: 82.1,
            //     ELSS: "ELSS",

            // },
            // {
            //     id: 4,
            //     Fundname: "Franklin India Feeder Franklin U S Opportunities Fund",
            //     AUMval: "₹29,534 Cr",
            //     TERval: "1.15%",
            //     MinInvest: "₹27,400",
            //     oneyearCAGR: 20.2,
            //     threeyrCAGR: 82.1,
            //     ELSS: "ELSS",
            //     Equity: "Equity",
            // },
            // {
            //     id: 5,
            //     Fundname: "Bandhan CRISIL IBX Gilt April 2028 Index fund",
            //     AUMval: "₹29,534 Cr",
            //     TERval: "1.15%",
            //     MinInvest: "₹27,400",
            //     oneyearCAGR: 20.2,
            //     threeyrCAGR: 82.1,
            //     Growth: "Growth",
            //     ELSS: "ELSS",
            //     Equity: "Equity",
            // },
            // {
            //     id: 6,
            //     Fundname: "ICICI Prudential Long Term Equity Fund",
            //     AUMval: "₹29,534 Cr",
            //     TERval: "1.15%",
            //     MinInvest: "₹27,400",
            //     oneyearCAGR: 20.2,
            //     threeyrCAGR: 82.1,
            // },
            // {
            //     id: 6,
            //     Fundname: "ICICI Prudential Lond",
            //     AUMval: "₹29,534 Cr",
            //     TERval: "1.15%",
            //     MinInvest: "₹27,400",
            //     oneyearCAGR: 20.2,
            //     threeyrCAGR: 82.1,
            // },


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
            desserts: [
                {
                    id: 1,
                    name: "Frozen Yogurt",
                    title: "Reliance industries",
                    calories: "₹29,534",
                    fat: "14,968",
                    carbs: "₹236.05",
                    dddddd: "₹233",
                    ccccc: "₹236",
                    protein: 1.65,

                    iron: "₹230.05",
                    alert: "ALERT",

                    image1: require('@/assets/zebu-stocks/alertimg.svg'),
                    event: "EVENTS",

                    image2: require('@/assets/zebu-stocks/eventesimg.svg'),

                },
                {
                    id: 2,
                    name: "Ice cream sandwich",
                    title: "HCL Technologies",
                    calories: "₹29,534",
                    fat: "14,968",
                    carbs: "₹236.05",
                    dddddd: "₹233",
                    ccccc: "₹236",
                    protein: -1.65,
                    News: "News",
                    iron: "₹230.05",


                    image3: require('@/assets/zebu-stocks/newsimg.svg'),

                },
                {
                    id: 3,
                    name: "Eclair",
                    calories: "₹29,534",
                    title: "Tata Motors",
                    fat: "14,968",
                    dddddd: "₹233",
                    ccccc: "₹236",
                    carbs: "₹236.05",
                    protein: 1.65,
                    iron: "₹230.05",
                    alert: "ALERT",

                    image1: require('@/assets/zebu-stocks/alertimg.svg'),

                },
                {
                    id: 4,
                    name: "Cupcake",
                    title: "Bharti Airtel",
                    calories: "₹29,534",
                    fat: "14,968",
                    ccccc: "₹236",
                    carbs: "₹236.05",
                    dddddd: "₹233",
                    protein: 1.6,
                    iron: "₹230.05",
                    event: "EVENTS",

                    image2: require('@/assets/zebu-stocks/eventesimg.svg'),
                    News: "News",
                    image3: require('@/assets/zebu-stocks/newsimg.svg'),
                },
                {
                    id: 5,
                    name: "Gingerbread",
                    title: "HDFC bank",
                    ccccc: "₹236",
                    calories: "₹29,534",
                    dddddd: "₹233",
                    fat: "14,968",
                    carbs: "₹236.05",
                    protein: 1.65,
                    iron: "₹230.05",

                },
                {
                    id: 6,
                    name: "Jelly bean",
                    title: "Delhivery",
                    calories: "₹29,534",
                    ccccc: "₹236",
                    fat: "14,968",
                    dddddd: "₹233",
                    carbs: "₹236.05",
                    protein: -1.65,
                    iron: "₹230.05",
                    event: "EVENTS",

                    image2: require('@/assets/zebu-stocks/eventesimg.svg'),
                    News: "News",
                    image3: require('@/assets/zebu-stocks/newsimg.svg'),
                },

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
                    icon: require('@/assets/zebu-stocks/dividents.svg'),
                    subtitlefirst: 'MULTICAP', subtitlesecond: 'LONGTERM',
                    subsecfirst: "MIN.INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3Y CAGR", subthreesecond: "23.2%",
                    subfourfirst: "TOTAL STOCKS", subfoursecond: "14 stocks",

                    title: 'Dividend Titans',
                },
                {
                    icon: require('@/assets/zebu-stocks/alphadynamic.svg'),
                    subtitlefirst: 'MULTICAP', subtitlesecond: 'LONGTERM',
                    subsecfirst: "MIN.INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3Y CAGR", subthreesecond: "23.2%",
                    subfourfirst: "TOTAL STOCKS", subfoursecond: "14 stocks",
                    title: 'Wealth defenders',
                },
                {
                    icon: require('@/assets/zebu-stocks/wealthdyanmic.svg'),
                    subtitlefirst: 'MULTICAP', subtitlesecond: 'LONGTERM',
                    subsecfirst: "MIN.INVEST", subsecsecond: "₹ 45,324",
                    subthreefirst: "3Y CAGR", subthreesecond: "23.2%",
                    subfourfirst: "TOTAL STOCKS", subfoursecond: "14 stocks",
                    title: 'Alpha dynamic',
                },
            ],

            Sectorcollections: [

                {
                    icon: require('@/assets/zebu-stocks/sector-stocks.png'),

                    subtitlefirst: 'Multicap', subtitlesecond: 'longterm',
                    subsecfirst: "MIN.INVEST", subsecsecond: "₹ 45,324",
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
                    subsecfirst: "MIN.INVEST", subsecsecond: "₹ 45,324",
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
                    subsecfirst: "MIN.INVEST", subsecsecond: "₹ 45,324",
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
                    subsecfirst: "MIN.INVEST", subsecsecond: "₹ 45,324",
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
                    subsecfirst: "MIN.INVEST", subsecsecond: "₹ 45,324",
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
            watchlistdetailes:[
 {
    title:"HDFC bank",
    subtitle:"vol 245k",
    firsttitle:"₹17,398.05",
    firstsubtitle:"745.6 (+0.74%)"
 },
 {
    title:"ICICI bank",
    subtitle:"vol 245k",
    firsttitle:"₹17,398.05",
    firstsubtitle:"745.6 (+0.74%)"
 },
 
 {
    title:"Varun Bev.",
    subtitle:"vol 245k",
    firsttitle:"₹17,398.05",
    firstsubtitle:"745.6 (+0.74%)"
 },
 
 {
    title:"Apollo Hosp.",
    subtitle:"vol 245k",
    firsttitle:"₹17,398.05",
    firstsubtitle:"745.6 (+0.74%)"
 },
 
 {
    title:"Max Health",
    subtitle:"vol 245k",
    firsttitle:"₹17,398.05",
    firstsubtitle:"745.6 (+0.74%)"
 },
 
 {
    title:"ITC",
    subtitle:"vol 245k",
    firsttitle:"₹17,398.05",
    firstsubtitle:"745.6 (+0.74%)"
 },
 
 {
    title:"Pidilite",
    subtitle:"vol 245k",
    firsttitle:"₹17,398.05",
    firstsubtitle:"745.6 (+0.74%)"
 },
 



     ],
        };
    },
    mounted () {
        this.apitopindex();
        this.stockrange();
        var axiosthis = this
        let configs = {
            method: 'get',
            maxBodyLength: Infinity,
            url: "http://192.168.5.95:5000/getsectoradstock",
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
        stockrange() {
            var axiosthis = this;

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: "http://192.168.5.95:5000/getadstock",
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
        apitopindex() {
            // const axios = require('axios');
            var axiosthis=this;
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                // url: `${api}/getTopIndex`,
                url: "http://192.168.5.95:5000/getTopIndex",

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
                    axiosthis.itemsdatastore= data

                    console.log("this.itemsss",axiosthis.itemsdatastore)
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
        readmore() {
            this.stocksinnews.push(this.stocksinnews[0])
        },

        backtopage() {
            this.selectedTab = false
        },
        sssssssssss() {
            this.ggggggggggg = this.Holdingitems.length
            this.hhdhdhhhdhh = false
            this.iiiiiiii = true

        },
        Seemorestocksup() {
            this.ggggggggggg = 5
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
        }
    },
   
}
</script>
<style lang="scss">
.heightcustammmshdh {
    // width: 60px !important;
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

.afterloginscrollhide {

    ::-webkit-scrollbar {
        display: none;
    }

}

.borderline {
    // border-left: 2px solid #0037B7 !important;
    // border-left-color: red !important;
    // border-radius: 3px !important;
    border-left: 4px solid #0037B7 !important;
}

.toolbar-contant {
    .v-toolbar__content {
        padding-left: 0px !important;
        padding-right: 0px !important;
        padding-top:0px;
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

// .postionchangemutualfund {
//     position: absolute !important;
//     top: 25px !important;
//     left: 300px !important;
// }

.cardpostionchange {
      position:absolute !important; 
      top:10px !important;
      left:25px !important;
     }
     .checkboxfontlabel {

.v-input--selection-controls .v-input__slot > .v-label, .v-input--selection-controls .v-radio > .v-label {
font-size:14px !important;
color:#000000 !important;
font-weight:469 !important;

}
}
</style>

