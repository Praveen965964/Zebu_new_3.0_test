<template>
    <div>
        <v-row v-if="home" class="px-1 pr-6 pt-2">
            <v-col cols="9">
                <v-row>
                    <v-col lg="12" md="12" sm="12">
                        <v-row class="d-flex pt-3 ">
                            <v-col lg="8" md="3" sm="3" xs="3" class=""
                                style="font-size: 18px;font-weight: 650;line-height: 16px;letter-spacing: -0.02em;text-align: left;font-variation-settings: 'slnt' 0;">All
                                Indices</v-col>
                            <div class="     d-flex">
                                <!-- <v-btn  class=" px-0  " text plain :ripple="false"> -->
                                <img @click="list" class="" :src="require('@/assets/button2.svg')" width="17" height=""
                                    style="margin-top: -2px; margin-left: 6px;" />
                                <!-- </v-btn> -->
                                <p class=" ml-2"
                                    style="font-size: 15px;font-weight: 700;line-height: 16px;letter-spacing: -0.2px;font-variation-settings: 'slnt' 0; padding-top: 12px; ">
                                    19 Live indices</p>

                                <!-- <v-btn  class=" " text plain :ripple="false"> -->
                                <img @click="list" class="" :src="require('@/assets/receipt-list-43 1.svg')" width="17"
                                    style="margin-top: -2px; margin-left: 36px;" />
                                <!-- </v-btn> -->
                                <p class="ml-1 mt-3 "
                                    style="font-size: 15px;font-weight: 650;line-height: 16px;letter-spacing: 0em;font-variation-settings: 'slnt' 0; ">
                                    {{ filteredCards.length }}<span class="pl-1">indices</span></p>
                            </div>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <p class=" pr-5 ml-3" style="margin-top: -3px;
font-size: 11px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
font-variation-settings: 'slnt' 0;
color: #666666;

">With an AUM of Rs 465,145 crores,
                        HDFC Mutual Funds offers 80 schemes
                        across different categories including 26 equity, 26 debt, and 7 hybrid mutua funds. Know the
                        HDFC MF scheme details, historical returns, compare and invest in Best HDFC Mutual Funds. Invest
                        in mutual fund
                        schemes that suit your investment objectives, risk level, and fund options.</p>
                </v-row>

                <div v-if="gridview">
                    <v-row class="mt-8 mb-">
                        <v-col>
                            <div class="d-flex ">
                                <div class="me-auto mb-5">
                                    <p class=""
                                        style="margin-top: -3px ;font-size: 13px;font-weight: 650; color: black ;line-height: 16px;letter-spacing: -0.02em;text-align: left;font-variation-settings: 'slnt' 0;">
                                        Indian indices</p>
                                </div>
                                <!-- <div>
                                    <v-card color="#F1F3F8" class=" elevation-0  mt-n1 body-2 "
                                        style="border-radius: 40px;height:40px;width: 140px;">
                                        <div class="d-flex ">
                                            <span class="mb-0 pt- pl-6 mt-2"
                                                style="color: #666666; font-weight: 600; font-size: 14px; "
                                                color="#666666">Sort by</span>
                                            <div class="pl-6">
                                                <v-btn elevation="0" :ripple="false" id="no-background-hover" class="" icon
                                                    @click="decrementNumber"> <v-icon class="" size="20" color="black">
                                                        mdi-chevron-up
                                                    </v-icon></v-btn><br>
                                                <v-btn elevation="0" :ripple="false" id="no-background-hover" class="move"
                                                    icon @click="incrementNumber"> <v-icon size="20" class="mb-0 pt-0 "
                                                        color="black">
                                                        mdi-chevron-down
                                                    </v-icon></v-btn>
                                            </div>
                                        </div>
                                    </v-card>
                                </div>
                                <div class="ml-6">
                                    <v-text-field class="po  body-2 mt-n1 black--text" dense filled
                                        prepend-inner-icon="mdi-magnify" :style="{ 'color': 'black' }" rounded
                                        v-model="searchGrid" placeholder="Search Sector" @input="filterCards">
                                    </v-text-field>
                                </div> -->
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="mt-n9">
                        <v-col v-for="(item, index) in filteredCards" :key="index" @click="SingleIndexpage(index)"
                            style="cursor:pointer; margin-right: -1px;" lg="3" md="4" sm="6" xsm="12" class="pr-0 ">


                            <v-card width="203px" class="elevation-0"
                                style="border: 1px solid #CCCCCC; margin-top: 2px; margin-left:; margin-bottom: -10px; ">
                                <v-row>
                                    <v-col>
                                        <div class="d-flex">
                                            <div class=" ml-2 " style="margin-top: 11px;">
                                                <p class="pr-1"
                                                    style="font-size: 13px; font-weight: 650; line-height: 16px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0; ">
                                                    {{ item.idxname }}</p>
                                            </div>
                                            <div class="ml-auto " style="margin-top: 10px; margin-right: 10px;">
                                                <img :src="require('@/assets/istockphoto-1051236720-612x612.svg')" alt=""
                                                    height="15px">
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-n9 ">
                                    <v-col>
                                        <div class="d-flex">
                                            <div class="flex-row">
                                                <p class=" "
                                                    style="margin-top: 9px ;padding-left: 10px; font-size: 12px; font-weight: 600;  line-height: 16px; letter-spacing: 0em; text-align: right; font-variation-settings: 'slnt' 0; ">
                                                    ₹{{ item.lp }}</p>
                                            </div>
                                            <span class="  ml-1" :class="getTextColorClass(item.change)"
                                                style="margin-top: 10px ;font-size: 12px; font-weight: 559; line-height: 16px; letter-spacing: 0em; text-align: right; font-variation-settings: 'slnt' 0; ">{{
                                                    item.change }}%
                                            </span>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-n9 ">
                                    <v-col>
                                        <div class="d-flex mt-n1">
                                            <div class="flex-row">
                                                <p class=""
                                                    style="margin-left: 10px; margin-top: -1px;font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: right;font-variation-settings: 'slnt' 0; color: #999999">
                                                    Vol
                                                    <span class="ml-1 " style="color: black ; font-weight: 600; ">{{
                                                        item.lp }}
                                                    </span>
                                                </p>
                                            </div>

                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-divider :thickness="5" class="border-opacity-100  ml-2" style="margin-top: -31px"
                                            color="black" width="24"></v-divider>
                                    </v-col>
                                </v-row>
                                <v-row class="ml- mt-n8">
                                    <v-col>
                                        <div class="d-flex">
                                            <div>
                                                <p class=""
                                                    style="margin-left: 10px; margin-top: -11px; font-size: 11px;font-weight: ;line-height: 16px;letter-spacing: 0em;text-align: right;font-variation-settings: 'slnt' 0; color: #999999;">
                                                    PE
                                                    <span class=" ml-1"
                                                        style="font-size: 11px; font-weight: 600; color: black ">
                                                        {{ item.change }}
                                                    </span>
                                                </p>
                                            </div>

                                            <div class="ml-auto">
                                                <p class=" pr-2 "
                                                    style=" margin-top: -11px; font-size: 11px;font-weight: ;line-height: 16px;letter-spacing: 0em;text-align: right;font-variation-settings: 'slnt' 0; color: #999999;">
                                                    PB
                                                    <span class=" ml-1"
                                                        style="font-size: 11px; font-weight: 600; color: black ">
                                                        {{ item.change }}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-card class="mt-n4  mb-0  elevation-0 sliderchangesoverall"
                                    style="background-color: #F1F3F8; margin: 0.2%; margin-bottom: 10%; height: 29px;">
                                    <div cols="12" class="d-flex flex-row px-2" style="padding-top: 6px;">
                                        <p class=" "
                                            style="font-size: 11px;font-weight: 650;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;">
                                            ₹{{ item.low_x }}
                                        </p>
                                        <span class="slidecontainer ml-2 mt-n2">
                                            <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                            <input type="range" min="50" max="2000" class="slider">
                                        </span>
                                        <p class=" "
                                            style="font-size: 11px;font-weight: 650;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;">
                                            ₹{{ item.high_x }}
                                        </p>
                                    </div>
                                </v-card>
                            </v-card>
                        </v-col>
                        <v-col v-if="filteredCards == ''" cols="12" class="font-weight-medium mb-7 mt-10 text-center"
                            style="font-size:14px; color: #d6d6d6;">No data available
                        </v-col>
                    </v-row>
                    <v-row class="mt-12 mb-">
                        <v-col>
                            <div class="d-flex ">
                                <div class="me-auto mb-5">
                                    <p class=""
                                        style="margin-top: -3px ;font-size: 13px;font-weight: 650; color: black ;line-height: 16px;letter-spacing: -0.02em;text-align: left;font-variation-settings: 'slnt' 0;">
                                        Gobal indices</p>
                                </div>

                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="mt-n10" style="font-family: Inter V;font-size: 14px;font-weight: 559;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;">
                        <v-col v-for="(item, index) in filteredCards2" :key="index" @click="SingleIndexpage(index)"
                            style="cursor:pointer; margin-right: -1px;" lg="3" md="4" sm="6" xsm="12" class="pr-0 ">

                            <v-card width="203px" class="elevation-0"
                                style="border: 1px solid #CCCCCC; margin-top: 2px; margin-left:; margin-bottom: -10px; ">
                                <v-row>
                                    <v-col>
                                        <div class="d-flex">
                                            <div class=" ml-2 " style="margin-top: 11px;">
                                                <p class="pr-1"
                                                    style="font-size: 13px; font-weight: 650; line-height: 16px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0; ">
                                                    {{ item.name }}</p>
                                            </div>
                                            <div class="ml-auto " style="margin-top: 10px; margin-right: 10px;">
                                                <img :src="item.flag_url" alt="" height="15px">
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-n9 ">
                                    <v-col>
                                        <div class="d-flex">
                                            <div class="flex-row">
                                                <p class=" "
                                                    style="margin-top: 9px ;padding-left: 10px; font-size: 12px; font-weight: 600;  line-height: 16px; letter-spacing: 0em; text-align: right; font-variation-settings: 'slnt' 0; ">
                                                    ₹{{ item.price }}</p>
                                            </div>
                                            <span class="  ml-1" :class="getTextColorClass(item.change)"
                                                style="margin-top: 10px ;font-size: 12px; font-weight: 559; line-height: 16px; letter-spacing: 0em; text-align: right; font-variation-settings: 'slnt' 0; ">{{
                                                    item.percent_change }}%
                                            </span>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-n9 ">
                                    <v-col>
                                        <div class="d-flex mt-n1">
                                            <div class="flex-row">
                                                <p class=""
                                                    style="margin-left: 10px; margin-top: -1px;font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: right;font-variation-settings: 'slnt' 0; color: #999999">
                                                    Vol
                                                    <span class="ml-1 " style="color: black ; font-weight: 600; ">{{
                                                        item.vol }}
                                                    </span>
                                                </p>
                                            </div>

                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-divider :thickness="5" class="border-opacity-100  ml-2" style="margin-top: -31px"
                                            color="black" width="24"></v-divider>
                                    </v-col>
                                </v-row>
                                <v-row class="ml- mt-n8">
                                    <v-col>
                                        <div class="d-flex">
                                            <div>
                                                <p class=""
                                                    style="margin-left: 10px; margin-top: -11px; font-size: 11px;font-weight: ;line-height: 16px;letter-spacing: 0em;text-align: right;font-variation-settings: 'slnt' 0; color: #999999;">
                                                    PE
                                                    <span class=" ml-1"
                                                        style="font-size: 11px; font-weight: 600; color: black ">
                                                        {{ item.change }}
                                                    </span>
                                                </p>
                                            </div>

                                            <div class="ml-auto">
                                                <p class=" pr-2 "
                                                    style=" margin-top: -11px; font-size: 11px;font-weight: ;line-height: 16px;letter-spacing: 0em;text-align: right;font-variation-settings: 'slnt' 0; color: #999999;">
                                                    PB
                                                    <span class=" ml-1"
                                                        style="font-size: 11px; font-weight: 600; color: black ">
                                                        {{ item.change }}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-card class="mt-n4  mb-0  elevation-0 sliderchangesoverall"
                                    style="background-color: #F1F3F8; margin: 0.2%; margin-bottom: 10%; height: 29px;">
                                    <div cols="12" class="d-flex flex-row px-2" style="padding-top: 6px;">
                                        <p class=" "
                                            style="font-size: 11px;font-weight: 650;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;">
                                            ₹{{ item.low }}
                                        </p>
                                        <span class="slidecontainer ml-2 mt-n2">
                                            <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                            <input type="range" min="50" max="2000" class="slider">
                                        </span>
                                        <p class=" "
                                            style="font-size: 11px;font-weight: 650;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;">
                                            ₹{{ item.high }}
                                        </p>
                                    </div>
                                </v-card>
                            </v-card>
                        </v-col>
                        <v-col v-if="filteredCards == ''" cols="12" class="font-weight-medium mb-7 mt-10 text-center"
                            style="font-size:14px; color: #d6d6d6;">No data available
                        </v-col>
                    </v-row>
                </div>
                <div v-if="listview">
                    <v-row class="mt-1 " style="margin-bottom: ;">
                        <v-col>
                            <div class="d-flex ">
                                <div class=" pt-  ">
                                    <v-tabs v-model="tab" background-color="transparent" color="black">
                                        <v-tab class="text-capitalize px-0 ml-3"><span
                                                style="font-size: 13px;font-weight: 650;line-height: 16px;letter-spacing: -0.4px;text-align: left;font-variation-settings: 'slnt' 0;">Indian
                                                indices</span>
                                        </v-tab>
                                        <v-tab class="text-capitalize px-0 ml-10"><span
                                                style="font-size: 13px;font-weight: 650;line-height: 16px;letter-spacing: -0.4px;text-align: left;font-variation-settings: 'slnt' 0;">Global
                                                indices</span></v-tab>
                                    </v-tabs>
                                </div>
                                <div>
                                </div>
                                <div class="ml-6 mt-5">
                                    <!-- <v-text-field v-if="tab === 0" class="po  body-2 mt-n1 black--text" dense filled
                                        prepend-inner-icon="mdi-magnify" :style="{ 'color': 'black' }" rounded
                                        v-model="searchText" placeholder="Search Sector" @input="filterCards">
                                    </v-text-field>
                                    <v-text-field v-if="tab === 1" class="po  body-2 mt-n1 black--text" dense filled
                                        prepend-inner-icon="mdi-magnify" :style="{ 'color': 'black' }" rounded
                                        v-model="searchText1" placeholder="Search Sector" @input="filterCards">
                                    </v-text-field> -->
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-tabs-items v-model="tab" clas>
                        <v-tab-item>
                            <template class="">
                                <v-data-table @click:row="SingleIndexpage()" :headers="headers" :items="items"
                                    class="elevation-1 " hide-default-footer :search="searchText" :items-per-page="perpage"
                                    style="border: 1px solid #e7e7e7;">

                                    <template v-slot:[`item.idxname`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;"> <img height="14"
                                                :src="require('@/assets/istockphoto-1051236720-612x612.svg')" alt=""> {{
                                                    item.idxname
                                                }}</span>
                                    </template>

                                    <template v-slot:[`item.lp`]="{ item }">
                                        <span class="" style="font-size: 12px; font-weight: 700;">{{ item.lp
                                        }}</span>
                                    </template>

                                    <template v-slot:[`item.change`]="{ item }">
                                        <span v-if="item.change < 0" class=" "
                                            style="color: red; font-size: 12px; font-weight: 700; !important">{{
                                                item.change }}</span>
                                        <span v-else class=" "
                                            style="color : #43A833; font-size: 12px; font-weight: 700;">{{
                                                item.change }}</span>
                                    </template>

                                    <template v-slot:[`item.vol`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.vol
                                        }}</span>
                                    </template>

                                    <template v-slot:[`item.PE`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.PE
                                        }}</span>
                                    </template>

                                    <template v-slot:[`item.PB`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.PB }}</span>
                                    </template>

                                    <template v-slot:[`item.range1`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.low_x
                                        }}</span>
                                        <span class="slidecontainerlist mx-1  ">
                                            <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                            <input type="range" min="50" max="2000" class="sliderlist ">
                                        </span>
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.high_x
                                        }}</span>
                                    </template>

                                </v-data-table>
                                <v-card v-if="showmore2" class="elevation-0 mt-0 text-center"
                                    style="border: 1px solid #e7e7e7;">
                                    <v-btn color="#0037B7" @click="showmore" class=" text-capitalize" text dense>See all
                                        indices </v-btn>
                                </v-card>
                                <v-card v-if="showmore23" class="elevation-0 mt-0 text-center"
                                    style="border: 1px solid #e7e7e7;">
                                    <v-btn color="#0037B7" @click="showmore1" class=" text-capitalize" text dense>See
                                        less indices</v-btn>
                                </v-card>
                            </template>
                        </v-tab-item>
                        <v-tab-item>
                            <template class="">
                                <v-data-table @click:row="SingleIndexpage()" :headers="headers1" :items="items01"
                                    class="elevation-1 " hide-default-footer :search="searchText1" :items-per-page="perpage"
                                    style="border: 1px solid #e7e7e7;">
                                    <template v-slot:[`item.name`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;"> <img height="14"
                                                :src="item.flag_url" alt=""> {{
                                                    item.name
                                                }}</span>
                                    </template>
                                    <template v-slot:[`item.price`]="{ item }">
                                        <span class="" style="font-size: 12px; font-weight: 700;">{{ item.price
                                        }}</span>
                                    </template>
                                    <template v-slot:[`item.percent_change`]="{ item }">
                                        <span v-if="item.percent_change < 0" class=" "
                                            style="color: red; font-size: 12px; font-weight: 700; !important">{{
                                                item.percent_change }}</span>
                                        <span v-else class=" "
                                            style="color : #43A833; font-size: 12px; font-weight: 700;">{{
                                                item.percent_change }}</span>
                                    </template>
                                    <template v-slot:[`item.vol`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.vol
                                        }}</span>
                                    </template>
                                    <template v-slot:[`item.PE`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.PE
                                        }}</span>
                                    </template>
                                    <template v-slot:[`item.PB`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.PB }}</span>
                                    </template>

                                    <template v-slot:[`item.range1`]="{ item }">
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.low
                                        }}</span>
                                        <span class="slidecontainerlist mx-1  ">
                                            <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                            <input type="range" min="50" max="2000" class="sliderlist ">
                                        </span>
                                        <span class="  " style="font-size: 12px; font-weight: 700;">{{ item.high
                                        }}</span>
                                    </template>
                                </v-data-table>
                                <v-card v-if="showmore2" class="elevation-0 mt-0 text-center"
                                    style="border: 1px solid #e7e7e7;">
                                    <v-btn color="#0037B7" @click="showmore" class=" text-capitalize" text dense>See all
                                        indices </v-btn>
                                </v-card>
                                <v-card v-if="showmore23" class="elevation-0 mt-0 text-center"
                                    style="border: 1px solid #e7e7e7;">
                                    <v-btn color="#0037B7" @click="showmore1" class=" text-capitalize" text dense>See
                                        less indices</v-btn>
                                </v-card>
                            </template>
                        </v-tab-item>
                    </v-tabs-items>
                </div>
            </v-col>
            <v-col cols="3">
            </v-col>
        </v-row>
        <div v-if="singleindex">
            <SingleIndex :message="selectgrid" />
        </div>
    </div>
</template>
<script>
import SingleIndex from '../Stocks pages/SingleIndex.vue'
import { api } from '../../apiUrl.js'
export default {
    props: ['message'],
    data() {
        return {
            selectgrid: '',
            home: true,
            singleindex: false,
            tab: null,
            gridview: false,
            listview: true,
            perpage: 8,
            perpage1: 4,
            showmore2: true,
            showmore23: false,
            searchText: '',
            searchText1: '',
            searchGrid: "",
            searchGrid2: "",
            items: [],
            user: '',
            items01: [],
            headers: [
                {
                    text: 'Index name',
                    align: 'start',
                    sortable: true,
                    value: 'idxname',
                    class: "headertable1"
                },
                {
                    text: 'Price',
                    value: 'lp',
                    class: "headertable2"

                },
                {
                    text: 'Change (%)',
                    class: "headertable",
                    value: 'change',
                },
                {
                    text: 'Volume',
                    class: "headertable",
                    value: 'vol',
                },
                {
                    class: "headertable",
                    text: 'PE ratio',
                    value: 'PE'
                },
                {
                    class: "headertable",
                    text: ' PB ratio',
                    value: 'PB'
                },
                {
                    class: "headertable3",
                    text: ' Days Range',    
                    value: 'range1'
                },
            ],
            headers1: [
                {
                    text: 'Index name',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                },
                { text: 'Price', value: 'price' },
                { text: 'Change (%)', value: 'percent_change' },
                { text: 'Volume', value: 'vol' },
                { text: 'PE ratio', value: 'PE' },
                { text: ' PB ratio', value: 'PB' },
                { text: ' Days Range', value: 'range1' },
            ],
            itemss: [
                {
                    "title": "Nifty 50",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty bank",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty 500",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty Midcap 100",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty Smallcap 100",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "FINNIFTY",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "SENSEX",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "BSE500",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "BSE500",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "BSE IPO",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty 50",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty Bank",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty 50",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty Midcap 100",
                    "price": "₹18,428.30",
                    "per": "-62.60(0.34%)",
                    "vol": "17,57,863",
                    "PE": "22.86",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
            ]
        }
    },
    mounted() {
        this.apiallindex();
        this.globleindex();
    },
    methods: {
        SingleIndexpage(index) {
            this.singleindex = true;
            this.home = false;
            this.index = index
            console.log('Clicked card index:', this.index);
            let selectgrid = this.items[this.index]
            this.selectgrid = selectgrid.idxname
            console.log("gird name", this.selectgrid);
        },
        // Api
        apiallindex() {
            const axios = require('axios');
            let data = '';

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api}/getAllIndex`,
                headers: {},
                data: data
            };

            axios.request(config)
                .then((response) => {
                    // console.log(JSON.stringify(response.data));
                    this.data = response.data
                    this.dataBSE = this.data.BSE
                    for (let i = 0; i < this.dataBSE.length; i++) {
                        this.items.push(this.dataBSE[i])
                    }
                    // console.log("BSE in ITEMS" , this.items)
                    this.dataMCX = this.data.MCX
                    for (let i = 0; i < this.dataMCX.length; i++) {
                        this.items.push(this.dataMCX[i])
                    }
                    // console.log("MCX in ITEMS" , this.items)
                    this.dataNSE = this.data.NSE
                    for (let i = 0; i < this.dataNSE.length; i++) {
                        this.items.push(this.dataNSE[i])
                    }
                    console.log("ITEMS", this.items)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        globleindex() {
            const axios = require('axios');

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api}/getGlobalIndex`,
                headers: {}
            };
            axios.request(config)
                .then((response) => {
                    console.log("globle", response.data);
                    let data = response.data
                    this.items01 = data
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // \for color dynamic
        getTextColorClass(per) {
            if (per > 0) {
                return 'positive-color';
            } else if (per < 0) {
                return 'negative-color';
            } else {
                return '';
            }
        },
        // change list view to grid and to list
        list() {
            this.gridview = !this.gridview;
            this.listview = !this.listview;
        },
        // Show moe in the list view
        showmore() {
            this.perpage = this.items.length
            this.showmore2 = !this.showmore2

            this.showmore23 = !this.showmore23
        },
        // Show moe in the list view
        showmore1() {
            this.perpage = 8
            this.showmore2 = !this.showmore2

            this.showmore23 = !this.showmore23
        },

    },
    computed: {
        // filter the came response
        SingleIndex,
        filteredCards() {
            if (this.searchGrid) {
                const searchRegex = new RegExp(this.searchGrid, "i");
                return this.items.filter((item) => searchRegex.test(item.idxname));
            } else {
                return this.items;
            }
        },
        filteredCards2() {
            if (this.searchGrid2) {
                const searchRegex = new RegExp(this.searchGrid2, "i");
                return this.items01.filter((item) => searchRegex.test(item.idxname));
            } else {
                return this.items01;
            }
        },
    },

    components: { SingleIndex },
};

</script>




<style lang="scss">
.slidecontainer {
    width: 90%;
}


.sliderchangesoverall {
    .slider {
        -webkit-appearance: none;
        width: 90%;
        height: 3px;
        background: #D9D9D9;
        /* border: 2px solid rgba(222, 226, 235, 1); */
        /* border-radius: 12px; */
        /* outline: none; */
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }
}

.slidecontainerlist {
    width: 60%;
}

.sliderlist {
    -webkit-appearance: none;
    width: 20%;
    height: 3px;
    background: #a3a3a3;
    /* border: 2px solid rgba(222, 226, 235, 1); */
    /* border-radius: 12px; */
    /* outline: none; */
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.sliderlist::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 3px;
    height: 3px;
    /* background: linear-gradient(0deg, #5c92f7, #4c80e2),
    linear-gradient(0deg, #BDD0F4, #dce8ff); */
    border-radius: 12px;
    background-color: #000000;
    cursor: pointer;
    border: 3px solid #FFFFFF;

}

.sliderchangesoverall {
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 8px;
        height: 8px;
        /* background: linear-gradient(0deg, #5c92f7, #4c80e2),
    linear-gradient(0deg, #BDD0F4, #dce8ff); */
        border-radius: 12px;
        background-color: black;
        cursor: pointer;
        border: 1px solid rgb(0, 0, 0)
    }
}

.theme--light.v-input.po input::placeholder,
.po input {
    /* color: green !important; */
    font-weight: 600;
    color: rgb(0, 0, 0) !important;
    /* background-color: #F1F3F8; */

}

.v-text-field--filled.v-input--dense>.v-input__control>.v-input__slot,
.v-text-field--full-width.v-input--dense>.v-input__control>.v-input__slot,
.v-text-field--outlined.v-input--dense>.v-input__control>.v-input__slot {
    height: 30px !important;
    width: 240px !important;
    background-color: #F1F3F8 !important;
    font-weight: 469;
}

.chrt {
    width: 100%;
    height: 100%;
}

.three-line-legend {
    width: 200px;
    height: 70px;
    position: absolute;
    padding: 8px;
    font-size: 12px;
    color: '#20262E';
    background-color: rgba(255, 255, 255, 0.23);
    text-align: left;
    z-index: 1000;
    pointer-events: none;
}

.positive-color {
    color: #43A833;
}

.negative-color {
    color: #FF1717;
}

.headertable1 {
    font-family: Inter V;
    font-size: 12px !important;
    font-weight: 500 !important;
    line-height: 16px !important;
    letter-spacing: -0.4px !important;
    text-align: left;
    font-variation-settings: 'slnt' 0;
    color: #666666 !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-left: 18px !important;
    padding-right: 122px !important;

}
.headertable2 {
    font-family: Inter V;
    font-size: 12px !important;
    font-weight: 500 !important;
    line-height: 16px !important;
    letter-spacing: -0.4px !important;
    text-align: left;
    font-variation-settings: 'slnt' 0;
    color: #666666 !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-left: 14px !important;
    // padding-right: 120px !important;

}
.headertable3 {
    font-family: Inter V;
    font-size: 12px !important;
    font-weight: 500 !important;
    line-height: 16px !important;
    letter-spacing: -0.4px !important;
    text-align: left;
    font-variation-settings: 'slnt' 0;
    color: #666666 !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding-left: 1px !important;
    padding-right: 1px !important;
    // padding-right: 120px !important;

}
.headertable {
    font-family: Inter V;
    font-size: 12px !important;
    font-weight: 500 !important;
    line-height: 16px !important;
    letter-spacing: -0.4px !important;
    text-align: left;
    font-variation-settings: 'slnt' 0;
    color: #666666 !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
    // padding-left: 1px !important;
    // padding-right: 1px !important;
    // padding-right: 120px !important;

}
</style>
