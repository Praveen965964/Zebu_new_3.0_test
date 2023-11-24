<template>
    <v-container>
        <v-row v-if="sectorpage">
            <v-col cols="9">
                <div class="d-flex">
                    <div class="me-auto">
                        <p class="title font-weight-bold">All Sectors</p>

                        <!-- <v-btn v-if="gridview" @click="list" text plain :ripple="false"><v-icon
                                    class="">mdi-format-list-checkbox</v-icon></v-btn>
                                   -->

                        <!-- <v-btn v-if="listview"  @click="grid" text plain :ripple="false"><v-icon
                                    class="">mdi-format-list-checkbox</v-icon></v-btn> -->

                    </div>
                    <v-btn @click="grid" class="" text plain :ripple="false"><img class="ml-6"
                            src="@/assets/receipt-list-43 1.svg" /></v-btn>







                    <p class="title font-weight-medium mt-1 ml-n2">46 indices</p>
                </div>
                <v-row>
                    <p class="caption ml-3 mt-3">With an AUM of Rs 465,145 crores, HDFC Mutual Funds offers 80 schemes
                        across different categories including 26 equity, 26 debt, and 7 hybrid mutual funds. Know the HDFC
                        MF scheme details, historical returns, compare and invest in Best HDFC Mutual Funds. Invest in
                        mutual fund schemes that suit your investment objectives, risk level, and fund options.</p>
                </v-row>
                <div v-if="listview">
                    <v-row>
                        <v-col>
                            <div class="d-flex ">
                                <div class="me-auto mt-2">
                                    <p class="subtitle-1 font-weight-bold">46 Indian sectors</p>
                                </div>
                                <div>


                                </div>
                                <div class="ml-6">
                                    <v-text-field class="pl mt-1 body-2  black--text" dense filled
                                        prepend-inner-icon="mdi-magnify" :style="{ 'color': 'black' }" rounded
                                        v-model="searchTextSet2" placeholder="Search Sector" @input="filterCards">
                                    </v-text-field>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-data-table @click:row="SectortoSinglesecttor()" style="outline: 1px solid #e7e7e7;" :headers="headers" :items="desserts"
                        class="elevation-0" hide-default-footer :items-per-page="perpage" :search="searchTextSet2">



                        <template v-slot:[`item.name`]="{ item }">
                            <span class="mr-2 body-2 font-weight-bold">
                                {{ item.name }}</span>
                        </template>
                        <template v-slot:[`item.data1`]="{ item }">
                            <span class="mr-2 body-2 font-weight-medium">
                                {{ item.data1 }}</span>
                        </template>
                        <template v-slot:[`item.data2`]="{ item }">
                            <p class="body-2  mt-4 font-weight-medium" style="color: #666666;"><span style="color: #161616;" class=" body-2 font-weight-medium">
                                    {{ item.data2 }}</span> Cr</p>
                        </template>
                        <template v-slot:[`item.data3`]="{ item }">
                            <span class="mr-2 body-2 font-weight-medium">
                                {{ item.data3 }}</span>
                        </template>
                        <template v-slot:[`item.data4`]="{ item }">
                            <span style="color: red;" class="mr-2 body-2 font-weight-medium">
                                {{ item.data4 }}</span>
                        </template>
                        <template v-slot:[`item.data5`]="{ item }">
                            <span class="mr-2 body-2 font-weight-medium">
                                {{ item.data5 }}</span>
                        </template>
                        <template v-slot:[`item.data6`]="{ item }">
                            <span class="mr-2 body-2 font-weight-medium">
                                {{ item.data6 }}</span>
                        </template>

                    </v-data-table>
                    <v-card v-if="showmore2" class="elevation-0 mt-0 text-center" style="outline: 1px solid #e7e7e7;">
                        <v-btn id="no-background-hover" :ripple="false"  color="#0037B7" @click="showmore" class=" text-capitalize" text dense>See More
                            sectors</v-btn>
                    </v-card>
                    <v-card v-if="showmore23" class="elevation-0 mt-0 text-center" style="outline: 1px solid #e7e7e7;">
                        <v-btn id="no-background-hover" :ripple="false"  color="#0037B7" @click="showmore1" class=" text-capitalize" text dense>See Less
                            sectors</v-btn>
                    </v-card>
                </div>
                <div v-if="gridview">
                    <v-row class="mt-2">
                        <v-col >
                            <div class="d-flex ">
                                <div class="me-auto ">
                                    <p class="subtitle-1 font-weight-bold">46 Indian sectors</p>
                                </div>
                                <div>
                                    <v-card color="#F1F3F8" class=" elevation-0 mt-n1  body-2 "
                                        style="border-radius: 40px;height:40px;width: 140px;">
                                        <div class="d-flex ">
                                            <span class="mb-0 pl-6 mt-2" color="#666666" style="padding-top: 3px; font-weight: 469;">Sort by</span>
                                            <div class="pl-6" style="">
                                                <v-btn elevation="0" :ripple="false" id="no-background-hover" class="up"
                                                    icon @click="decrementNumber"> <v-icon class="" size="18" color="black">
                                                        mdi-chevron-up
                                                    </v-icon></v-btn><br>
                                                <v-btn elevation="0" :ripple="false" id="no-background-hover" class="move"
                                                    icon @click="incrementNumber"> <v-icon size="18" class="mb-0 pt-0 " color="black">
                                                        mdi-chevron-down
                                                    </v-icon></v-btn>
                                            </div>
                                        </div>
                                    </v-card>
                                </div>
                                <div class="ml-6">
                                    <v-text-field class="pl  body-2 mt-n1 black--text" dense filled
                                        prepend-inner-icon="mdi-magnify" :style="{ 'color': 'black' }" rounded
                                        v-model="searchTextSet3" placeholder="Search Sector" @input="filterCards">
                                    </v-text-field>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="mt-n6">
                        <v-col @click="SectortoSinglesecttor()" lg="3" md="4" sm="6" xs="12" v-for="item in item12" :key="item" cols="3">
                            <v-card class="elevation-0"  style="border: 1px solid rgb(190, 190, 190);">
                                <v-row>
                                    <v-col>
                                        <div class="d-flex">
                                            <div class="mt-2 ml-4 ">
                                                 <p class="subtitle-1 font-weight-bold">{{ item.title }}</p>
                                            </div>
                                            <div class="ml-auto mt-3 ml-3 mr-3">

                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-n10 ml-1">
                                    <v-col>
                                        <div class="d-flex">
                                            <div class="flex-row">
                                                <p class="body-2 pr-1" style="font-weight: 600;">{{ item.price }}</p>
                                            </div>
                                            <div>
                                                <p class="body-2 font-weight-medium"
                                                    style="font-size: 11px; color: #43A833; font-weight: 600;">{{
                                                        item.per }}
                                                </p>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-divider :thickness="2" class="border-opacity-100 mt-n6 ml-4" color="black"
                                            width="30"></v-divider>
                                    </v-col>
                                </v-row>
                                <v-row class="ml-1 mt-n8">
                                    <v-col>
                                        <div class="d-flex">
                                            <div>
                                                <p class="body-2 font-weight-medium"
                                                    style="font-size: 11px; color: #999999;">
                                                    #Stocks
                                                </p>
                                            </div>
                                            <div class="ml-1 mr-auto">
                                                <p class="body-2 me-auto" style="font-weight: 600;">
                                                    {{ item.PE }}
                                                </p>
                                            </div>
                                            <div>
                                                <p class="body-2 font-weight-medium"
                                                    style="font-size: 11px; color: #999999;">PB
                                                </p>
                                            </div>
                                            <div class="mr-3">
                                                <p class="body-2  ml-1 " style="font-weight: 600;">2.86</p>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="ml-1 mt-n8">
                                    <v-col>
                                        <div class="d-flex">
                                            <div>
                                                <p class="body-2 font-weight-medium"
                                                    style="font-size: 11px; color: #999999;">
                                                    Mcap
                                                </p>
                                            </div>
                                            <div class="ml-1 mr-auto">
                                                <p class="body-2  me-auto" style="font-weight: 600;">
                                                    {{ item.PE }}
                                                </p>
                                            </div>
                                            <div>
                                                <p class="body-2 font-weight-medium"
                                                    style="font-size: 11px; color: #999999;">PB
                                                </p>
                                            </div>
                                            <div class="mr-3">
                                                <p class="body-2 ml-1 " style="font-weight: 600;">{{ item.PB }}</p>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                    </v-row>

                </div>
            </v-col>
            <v-col cols="3">
            </v-col>
        </v-row>
        <div v-if="singlesectorpage">
   <SingleSector />
        </div>
    </v-container>
</template>

<script>
import SingleSector from '../Stocks pages/SingleSector.vue'
export default {
    components:{
        SingleSector
    },
    data() {
        return {
            sectorpage:true,
            singlesectorpage:false,
            listview: true,
            gridview: false,
            perpage: 8,
            showmore2: true,
            showmore23: false,
            searchTextSet2 : '',
            item12: [
                {
                    "title": "Nifty 50",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty bank",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty 500",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty Midcap 100",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty Smallcap 100",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "FINNIFTY",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "SENSEX",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "BSE500",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "BSE500",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "BSE IPO",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty 50",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty Bank",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty 50",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },
                {
                    "title": "Nifty Midcap 100",
                    "price": "₹18,428.30",
                    "per": "+0.19%",
                    "vol": "17,57,863",
                    "PE": "34",
                    "PB": "2.86",
                    "range1": "₹18428",
                    "range2": "₹18357",
                },

            ],
            headers: [
                {
                    text: 'Sector name',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: ' # stocks', value: 'data1' },
                { text: '  Mcap', value: 'data2' },
                { text: ' Price', value: 'data3' },
                { text: 'Change (%)', value: 'data4' },
                { text: 'PE ratio', value: 'data5' },
                { text: 'PB ratio', value: 'data6' },
            ],
            desserts: [
                {
                    name: 'Automobile',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Healthcare',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Finance',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Jewelry',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Trading',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Banks ',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Private Banks',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Public Banks',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Chemicals',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Renewables',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
                {
                    name: 'Metals',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                }, {
                    name: 'Homecare',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                }, {
                    name: 'Telecom',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                }, {
                    name: 'Infrastructure',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                }, {
                    name: 'Technology',
                    data1: '35',
                    data2: '₹29,534',
                    data3: '₹18,428.30',
                    data4: '-62.60 (0.34%)',
                    data5: '34',
                    data6: '5.62',
                },
            ],
        }
    },
    methods: {
        SectortoSinglesecttor() {
            this.sectorpage=false
            this.singlesectorpage=true
        },
        grid() {
            this.gridview = !this.gridview;
            this.listview = !this.listview;
        },
        showmore() {
            this.perpage = this.desserts.length
            this.showmore2 = !this.showmore2
            this.showmore23 = !this.showmore23
        },
        showmore1() {
            this.perpage = 8
            this.showmore2 = !this.showmore2
            this.showmore23 = !this.showmore23
        }
    }
}
</script>

<style>
.move {
    position: absolute;
    left: px;
    top: 8px
}

.up {
    position: absolute;
    left: px;
    top: -2px
}

#no-background-hover::before {
    background-color: transparent !important;

}


.theme--light.v-input.pl input::placeholder,.pl input {
  /* color: green !important; */
  font-weight: 700;
  color: rgb(0, 0, 0) !important;
  /* background-color: #F1F3F8; */

}
.v-text-field--filled.v-input--dense > .v-input__control > .v-input__slot, .v-text-field--full-width.v-input--dense > .v-input__control > .v-input__slot, .v-text-field--outlined.v-input--dense > .v-input__control > .v-input__slot {
    height: 30px !important;
    width: 240px !important;
    background-color: #F1F3F8;
}

/* .sssssssssss input{
  color: rgb(3, 3, 3) !important;
} */
#no-background-hover::before {
    background-color: transparent !important;
}
</style>