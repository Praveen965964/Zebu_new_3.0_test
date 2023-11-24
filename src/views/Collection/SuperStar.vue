<template>
    <v-container>
        <v-card class="elevation-0" height="100">

        </v-card>
        <v-row>
            <v-col cols="9">
                <v-card>
                </v-card>
                <div class="display-flex row mt-4">
                    <v-btn icon plain :ripple="false" @click="backtopage" class="">
                        <v-icon color="black" size="20">mdi-chevron-left</v-icon></v-btn>
                    <p class="font-weight-bold mt-2" style="font-size:14px;color: #000000;">Back</p>
                </div>

                <v-card class="mt-5" outlined style="border: 1px solid #efeef3;">
                    <v-toolbar class="my-3 toolbar-contant" elevation="0" color="white">
                        <!-- <v-toolbar-title class="font-weight-bold" style="color: #000000;font-size:16px;">Top 100 mutual funds</v-toolbar-title> -->
                        <v-list class="" style="background-color: transparent;">
                            <v-list-item class="ml-n1">
                                <img alt="" class="shrink" :src="require('@/assets/sstar/image 443.svg')" width="44.49px" />
                                <v-list-item-content class="pl-5">
                                    <v-list-item-title class="font-weight-bold text-start"
                                        style="color: #000000;font-size: 20px;">Superstar portfolios</v-list-item-title>
                                    <v-list-item-subtitle class="font-weight-normal  text-start"
                                        style="color: #666666;font-size: 12px;">Stable income and growth
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                        <v-spacer></v-spacer>
                        <v-text-field class="heightcustammmshdh black--text mt-8 searchfundlabel" background-color="#F1F3F8"
                            label="Wealth Managers" solo rounded flat dense>
                            <template v-slot:prepend-inner>
                                <!-- <img alt="" class="mt-1 shrink" :src="require('@/assets/zebu-stocks/searchicon.svg')"
                                    width="28px" height="17px" /> -->
                            </template>
                        </v-text-field>
                    </v-toolbar>
                    <v-data-table hide-default-header :headers="mutualfundheaders" :items="mutualfunditems"
                        :items-per-page="ggggggggggg" itmutualfunditemsfilteem-key="id" v-model="selectedRows"
                        class="elevation-0" hide-default-footer style="background-color:white">

                        <template v-slot:footer>
                            <v-divider></v-divider>
                            <div class="text-center" v-if="hhdhdhhhdhh">
                                <v-btn text color="primary" dark class="ma-2 text-capitalize" @click="sssssssssss">
                                    More tax saving funds <v-icon color="black"> mdi-chevron-down</v-icon>
                                </v-btn>
                            </div>

                            <div class="text-center" v-if="iiiiiiii">

                                <v-btn text color="primary" dark class="ma-2 text-capitalize" @click="Seemorestocksup">
                                    More tax saving funds
                                    <v-icon color="black"> mdi-chevron-up</v-icon>
                                </v-btn>
                            </div>
                        </template>
                        <template v-slot:header>
                            <tr class="" style="background-color: #FAFBFF;border: 1px solid red;">
                                <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                        style="color:#666666 ;font-size: 13px">Investor name</span></th>
                                <th class="text-start"><span class="pl-15 pt-1 pb-1"
                                        style="color:#666666 ;font-size: 13px;">Risk</span></th>
                                <th class="text-start"><span class="pl- pt-1 pb-1"
                                        style="color:#666666 ;font-size: 13px">Total stocks</span></th>
                                <th class="text-start"><span class="pl- pt-1 pb-1"
                                        style="color:#666666 ;font-size: 13px">Min. Invest </span></th>
                                <th class="text-start"><span class="pl- pt-1 pb-1"
                                        style="color:#666666 ;font-size: 13px">1yr CAGR</span></th>
                                <!-- <th class="text-start" ><span class="pl-4 pt-1 pb-1" style="color:#666666 ;font-size: 13px">3yr CAGR</span></th> -->

                                <!-- <th class="text-start" >Price</th>
<th class="text-start" >%Chg</th>
<th class="text-start" >200dma</th> -->
                                <th class="pt-1">
                                    <v-row class="display-flex flex-row">
                                        <v-col class=" flex-row">
                                            <span class=" font-weight-bold" style="color:#666666 ;font-size: 13px">3yr
                                                CAGR</span>
                                        </v-col>
                                        <v-col>

                                            <v-menu left offset-y>
                                                <template v-slot:activator="{ on, attrs }">

                                                    <v-btn v-bind="attrs" v-on="on" plain :ripple="false"
                                                        class="buttoncontant mt-n1" icon>
                                                        <v-icon size="19" color="black">mdi-dots-vertical</v-icon>
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
                                </th>

                                <th class="text-start"></th>
                            </tr>
                        </template>
                        <template v-slot:item="{ item }">
                            <tr class="" style="background-color: ;position: relative;" @mouseover="selectItem(item)"
                                @mouseleave="unSelectItem(item)">
                                <td class="font-weight-bold pb-4 pt-2" style="color: #000000;font-size: 14px;">
                                    <!-- <div class="" > -->
                                    <v-row no-gutters>
                                        <v-col cols="2" class="d-flex pt-1 ">
                                            <img src="@/assets/sstar/Rectangle 19679.svg" alt="" width="38">

                                        </v-col>
                                        <v-col cols="10" class="display-flex pl-4">
                                            <div>
                                                {{ item.invname }}
                                            </div>
                                            <div class="display-flex row mt-2 pb-1 ">
                                                <v-card v-if="item.GROWTH == 'GROWTH'" height="20px" width=""
                                                    class="pl-2 pr-2 pb-1 ml-2" elevation="0" color="#F1F3F8">
                                                    <p class="font-weight-medium mb-0 "
                                                        style="color:#666666;font-size:9px;margin-top: 3px;">
                                                        <!-- <img class="mt-n1" src="../assets/note.svg" /> -->

                                                        {{ item.GROWTH }}
                                                    </p>
                                                </v-card>
                                                <v-card v-if="item.EQUITY == 'EQUITY'" height="20px" width=""
                                                    class="pl-2 pr-2 pb-1 ml-2" elevation="0" color="#F1F3F8">
                                                    <p class="font-weight-medium mb-0 "
                                                        style="color:#666666;font-size:9px;margin-top: 3px;">
                                                        <!-- <img class="mt-n1" src="../assets/cal.svg" /> -->

                                                        {{ item.EQUITY }}
                                                    </p>
                                                </v-card>
                                                <v-card v-if="item.ELSS == 'ELSS'" height="20px" width=""
                                                    class="pl-2 pr-2 pb-1 ml-2" elevation="0" color="#F1F3F8">
                                                    <p class="font-weight-medium mb-0 "
                                                        style="color:#666666;font-size:9px;margin-top: 3px;">
                                                        <!-- <img class="mt-n1" src="../assets/flag.svg" /> -->

                                                        {{ item.ELSS }}
                                                    </p>
                                                </v-card>
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <!-- <p class="" style="width: 300px;">    </p>  -->
                                </td>
                                <td class=" pr-0 pl-15"> <span class="font-weight-medium caption" style="color:#000000">
                                        <div class=" postionchangemutualfund" v-if="item === selectedItem">
                                            <div class="display-flex row ">

                                                <v-btn class="ml-1 pa-0  elevation-0" outlined x-small
                                                    style="min-width:16px;border-radius: 4px;border:1px solid #CCCCCC;"
                                                    color="#43A833">
                                                    <img alt="" class="shrink " :src="require('@/assets/eft/arrow.svg')"
                                                        width="8px" /></v-btn>
                                                <v-btn class="ml-1 pa-0 elevation-0 " outlined dense x-small
                                                    style="min-width:16px;border-radius: 4px;border:1px solid #CCCCCC;">
                                                    <img alt="" class="shrink "
                                                        :src="require('@/assets/eft/tradinnote.svg')" width="8px" /></v-btn>
                                                <!-- </div> -->
                                            </div>
                                        </div>{{
                                            item.risk }}
                                    </span>
                                </td>
                                <td><span class="font-weight-medium caption" style="color:#000000">{{ item.stocks }}</span>
                                </td>
                                <td class="pr-0 pl-2"><span class="font-weight-medium caption" style="color:#000000">{{
                                    item.MinInvest }}</span></td>
                                <td class="pr-0" v-if="item.oneyearCAGR > 0">
                                    <span class="text-wrap font-weight-medium caption" style="color:#43A833 !important;">{{
                                        item.oneyearCAGR }} %</span>
                                </td>
                                <td class="pr-0" v-else><span class=" caption font-weight-medium"
                                        style="color:red !important; ">{{ item.oneyearCAGR }} %</span></td>
                                <td class="pr-0 " v-if="item.threeyrCAGR > 0">
                                    <span class="text-wrap font-weight-medium ml-7"
                                        style="color:#43A833 !important;font-size: 13px;">{{ item.threeyrCAGR }} %</span>
                                </td>
                                <td class="pr-0" v-else><span class="font-weight-medium"
                                        style="color:red !important; font-size: 13px;">{{ item.threeyrCAGR }} %</span></td>
                                <!-- <td> {{item.threeyrCAGR  }}</td> -->
                                <td></td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card height="" class="elevation-0 ml"> </v-card>
                <v-row class="d-flex mt-6" style="width: 370px">
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
                                        <p class="mb-0 body-2 font-weight-medium " style="color: #666666;">{{ group.title }}
                                        </p>
                                        <p class="ml-auto pr-n3 mb-0 caption font-weight-medium" style="color: #666666;">{{
                                            getSelectedItemCount(group) }} {{ group.lsi }}</p>
                                    </div>
                                </v-list-item-content>
                            </template>

                            <v-list-item v-for="item in group.items" :key="item.id">
                                <v-list-item-content>
                                    <div class="d-flex  ">
                                        <v-card width="16" height="16" v-model="value" label x-small
                                            :color="item.selected ? '#0037B7' : '#F1F3F8'"
                                            :text-color="item.selected ? 'white' : ''" @click="toggleChipSelection1(item)"
                                            class=" elevation-0">
                                        </v-card>
                                        <p @click="toggleChipSelection1(item)" class="mb-0 ml-3  caption font-weight-bold"
                                            style="margin-top: -2px;" :style="getTitleColorStyle1(item)">{{
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

                                    <v-range-slider v-model="range" :max="max" :min="min" hide-details track-color="red"
                                        thumb-color="red" class="align-center mt-n7">
                                        <template v-slot:prepend>
                                            <!-- use the slider value

                                                            :value="range[0]"
                                                            @change="$set(range, 0, $event)" -->

                                            <div>
                                                <p class="caption mt-4  font-weight-bold">0.0%</p>
                                            </div>
                                        </template>
                                        <template v-slot:append>
                                            <!-- use the slider value
                                                            :value="range[1]"
                                                            @change="$set(range, 1, $event)" -->
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

                                    <v-range-slider v-model="range" :max="max" :min="min" hide-details track-color="red"
                                        thumb-color="red" class="align-center mt-n7">
                                        <template v-slot:prepend>
                                            <!-- use the slider value

                                                            :value="range[0]"
                                                            @change="$set(range, 0, $event)" -->

                                            <div>
                                                <p class="caption mt-4 d-flex  font-weight-bold">₹0 <span
                                                        style="color: #666666 ; font-size: 10px;">Cr</span></p>

                                            </div>
                                        </template>
                                        <template v-slot:append>
                                            <!-- use the slider value
                                                            :value="range[1]"
                                                            @change="$set(range, 1, $event)" -->
                                            <p class="caption font-weight-bold mt-4 d-flex">₹100k <span
                                                    style="color: #666666 ; font-size: 10px;">Cr</span></p>
                                        </template>
                                    </v-range-slider>

                                </v-list-item-content>
                            </v-list-item>

                        </v-list-group>
                    </v-list>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {

            showmore2: true,
            showmore23: false,
            perpage: 8,
            items1: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],

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
            drop5: [
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
            mutualfundheaders: [
                {
                    text: "Investor name",
                    align: "left",
                    sortable: false,
                    value: "invname", class: "successScrips"
                },
                { text: "AUM (cr)", sortable: false, value: "calories", class: "successtitle" },
                { text: "TER (%)", sortable: false, value: "calories", class: "successvolume" },
                { text: "Min. Invest", sortable: false, value: "carbs", class: "successprice" },
                { text: "1yr CAGR", sortable: false, value: "protein", class: "successchg" },
                { text: "3yr CAGR", sortable: false, value: "iron", class: "successma" },

            ],
            mutualfunditems: [
                {
                    id: 1,
                    invname: "Ashish Kacholia's",

                    risk: "High",
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
                    risk: "High",
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
                    MinInvest: "₹27,400",
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
        }

    },
    methods: {

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
.postionchangemutualfund {
    position: absolute !important;
    top: 25px !important;
    left: 230px;

}

.theme--light.v-input.heightcustammmshdh
.heightcustammmshdh      {
    font-weight: 369 !important;
    color: #666666 !important;
    max-width: 104px !important;
    /* padding-right: -100px; */
    margin-left: 100px !important;

}

.ml {
    margin-top: -15px;
}
</style>
