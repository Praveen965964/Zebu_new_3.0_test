<template>
    <v-container>
        
        <v-row v-if="eftlist">
            <v-col cols="9">
                <p class="title font-weight-bold">ETF categoriess</p>

                <div style="display: inline-flex;">
                    <v-card width="200" height="113 " v-for="datas in data" :key="datas.index" class="elevation-0 mr-4"
                        style="border: 1px solid #CCCCCC;">
                        <v-row class="">
                            <v-col>
                                <div class="d-flex">
                                    <div class="mt-1 ml-3 ">
                                        <p class="subtitle-1 font-weight-bold">{{ datas.title }}
                                        </p>
                                    </div>
                                    <div class="ml-auto mt-3 ml-3 mr-3">
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-divider :thickness="2" class="border-opacity-100 mt-n7 ml-3" color="black"
                                    width="40"></v-divider>
                            </v-col>
                        </v-row>
                        <v-row class="mt-n9 pl-3">
                            <v-col>
                                <div class="d-flex">
                                    <div>
                                        <p class="body-2 font-weight-medium" style="font-size: 11px; color: #666666;">
                                            {{ datas.fund }}
                                        </p>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row class="pl-3 mt-n9">
                            <v-col>
                                <div class="d-flex">

                                    <div>
                                        <p class="body-2 font-weight-bold" style="color: #43A833;">{{
                                            datas.rec
                                        }}
                                        </p>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>
                <v-card>

                </v-card>
                <div class="display-flex row mt-4">
                    <!-- <v-btn icon plain :ripple="false" @click="backtopage" class="" >
<v-icon color="black" size="20">mdi-chevron-left</v-icon></v-btn> -->
                    <!-- <p class="font-weight-bold mt-2" style="font-size:14px;color: #000000;">Back</p> -->
                </div>

                <v-card class="mt-5" outlined style="border: 1px solid #efeef3;">
                    <v-toolbar class="my-3 toolbar-contant" elevation="0" color="white">
                        <!-- <v-toolbar-title class="font-weight-bold" style="color: #000000;font-size:16px;">Top 100 mutual funds</v-toolbar-title> -->
                        <v-list class="" style="background-color: transparent;">


                            <v-list-item class="">
                                <!-- <v-list-item-content> -->
                                <img alt="" class="shrink" :src="require('@/assets/eft/savetaxes.svg')" width="44.49px" />
                                <!-- </v-list-item-content> -->

                                <v-list-item-content class="pl-5">
                                    <v-list-item-title class="font-weight-bold "
                                        style="color: #000000;font-size: 20px;">Save taxes</v-list-item-title>

                                    <v-list-item-subtitle class="font-weight-normal "
                                        style="color: #666666;font-size: 12px;">Build wealth and save taxes
                                    </v-list-item-subtitle>
                                </v-list-item-content>


                            </v-list-item>
                        </v-list>


                        <v-spacer></v-spacer>


                        <v-list class="mr-10 mt-n2" style="background-color: transparent;">
                            <v-list-item class="pl-0 pa-0">
                                <img alt="" class="shrink" :src="require('@/assets/eft/savetaxfund.svg')" width="18px"
                                    height="14px" />
                                <v-list-item-content class="pl-2 pa-0">
                                    <v-list-item-title class="font-weight-bold " style="color: #000000;font-size: 16px;">46
                                        funds</v-list-item-title>
                                </v-list-item-content>



                            </v-list-item>
                            <v-list-item-content class="pa-0 mt-n3 ">
                                <v-list-item-title class="font-weight-medium " style="color: #43A833;font-size: 12px;">2
                                    recommended</v-list-item-title>
                            </v-list-item-content>
                        </v-list>

                        <v-text-field class="pl black--text mt-8 mr-5" background-color="#F1F3F8"
                            placeholder="Search funds" solo rounded flat dense>
                            <template v-slot:prepend-inner>
                                <img alt="" class="mt-1 shrink" :src="require('@/assets/eft/searchicon.svg')" width="28px"
                                    height="17px" />
                            </template>
                        </v-text-field>
                    </v-toolbar>




                    <v-data-table  hide-default-header :headers="mutualfundheaders" :items="mutualfunditems"
                        :items-per-page="ggggggggggg" item-key="id" v-model="selectedRows" class="elevation-0"
                        hide-default-footer style="background-color:white">

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
                                        style="color:#666666 ;font-size: 13px">Fund name</span></th>
                                <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                        style="color:#666666 ;font-size: 13px">AUM (cr)</span></th>
                                <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                        style="color:#666666 ;font-size: 13px">TER (%)</span></th>
                                <th class="text-start"><span class="pl-2 pt-1 pb-1"
                                        style="color:#666666 ;font-size: 13px">Min. Invest</span></th>
                                <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                        style="color:#666666 ;font-size: 13px">1yr CAGR</span></th>
                                <!-- <th class="text-start" ><span class="pl-4 pt-1 pb-1" style="color:#666666 ;font-size: 13px">3yr CAGR</span></th> -->

                                <!-- <th class="text-start" >Price</th>
<th class="text-start" >%Chg</th>
<th class="text-start" >200dma</th> -->
                                <th class="pt-1"> <v-row class="mr-0">
                                        <v-col cols="10">





                                            <span class="pl-2 font-weight-bold" style="color:#666666 ;font-size: 13px">3yr
                                                CAGR</span>
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
                                                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </v-col>
                                    </v-row></th>

                                <th class="text-start"></th>
                            </tr>


                        </template>

                        <template v-slot:item="{ item }">


                            <tr class="" @click="etflistchangesingleetf()"  style="position: relative;cursor:pointer" @mouseover="selectItem(item)"
                                @mouseleave="unSelectItem(item)">

                                <td class="font-weight-bold pb-4 pt-2" style="color: #000000;font-size: 14px;">
                                    <!-- <div class="" > -->
                                    <v-row no-gutters>
                                        <v-col cols="7" class="d-flex">
                                            {{ item.Fundname }}
                                            
                                        </v-col>
                                        <v-col cols="2" v-if="item.chipname == 'Reco'">
                                            <v-chip  v-if="item.chipname == 'Reco'" class="ml-2" small style="color:#43A833;font-size:11px; border-radius: 8px; background-color: #ECF5EA;">
                                                {{ item.chipname }}
                                            </v-chip>
                                        </v-col>
                                    </v-row>
                                   <span style="font-size: 10px; color: #666666; font-weight: 469;">NIFTYBEES</span>

                                    <!-- <p class="" style="width: 300px;">    </p>  -->

                                    
                                   
                                </td>
                                <td class=" pr-0"> <span class="font-weight-medium caption" style="color:#000000">
                                    <div  class="etftablepostion" v-if="item === selectedItem">
                                        <div class="display-flex row ">
                                            <v-btn class="pa-0  elevation-0 ml-1" outlined dense small 
                                                    style="min-width:22px;height:22px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF"><img
                                                        alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/tradingsymbol.svg')"
                                                        width="12px" /></v-btn>
                                                <v-btn class="ml-1 pa-0  elevation-0" outlined small
                                                    style="min-width:22px;height:22px;border-radius: 4px;border:1px solid #CCCCCC;background-color:#FFFFFF"
                                                    color="#43A833">
                                                    <img alt="" class="shrink "
                                                        :src="require('@/assets/zebu-stocks/tradinnote.svg')"
                                                        width="10px" /></v-btn>
                                            <!-- <v-btn class="ml-1 pa-0  elevation-0" outlined medium
                                                style="min-width:16px;border-radius: 4px;border:1px solid #CCCCCC;"
                                                color="#43A833">
                                                <img alt="" class="shrink " :src="require('@/assets/eft/arrow.svg')"
                                                    width="8px" /></v-btn>
                                            <v-btn class="ml-1 pa-0 elevation-0 " outlined dense x-small
                                                style="min-width:16px;border-radius: 4px;border:1px solid #CCCCCC;">
                                                 <img alt="" class="shrink " :src="require('@/assets/eft/tradinnote.svg')"
                                                    width="8px" /></v-btn> -->
                                            <!-- </div> -->
                                        </div>
                                    </div>{{
                                    item.AUMval }}</span></td>
                                <td><span class="font-weight-medium caption" style="color:#000000">{{ item.TERval }}</span>
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
                <v-card height="200" class="elevation-0 ml"> </v-card>
                <v-row class="d-flex" style="width: 370px">
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

                                    <v-range-slider  v-model="range" :max="max" :min="min" hide-details track-color="red"
                                        thumb-color="red" class="align-center mt-n7">
                                        <template v-slot:prepend>
                                            <!-- use the slider value

                                                            :value="range[0]"
                                                            @change="$set(range, 0, $event)" -->
                                           
                                            <div>
                                                <p class="caption mt-4 d-flex  font-weight-bold" >₹0 <span style="color: #666666 ; font-size: 10px;">Cr</span></p>

                                            </div>
                                        </template>
                                        <template v-slot:append>
                                            <!-- use the slider value
                                                            :value="range[1]"
                                                            @change="$set(range, 1, $event)" -->
                                            <p class="caption font-weight-bold mt-4 d-flex" >₹100k <span style="color: #666666 ; font-size: 10px;">Cr</span></p>
                                        </template>
                                    </v-range-slider>

                                </v-list-item-content>
                            </v-list-item>

                        </v-list-group>
                    </v-list>
                </div>
            </v-col>
        </v-row>
        <div v-if="singleetfpage">
       <SingleEtf  />
        </div>
    </v-container>
</template>
<script>
import SingleEtf from '../Stocks pages/SingleEtf.vue'
export default {
    components:{SingleEtf},
    data() {
        return {
            eftlist:true,
            singleetfpage:false,
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
            data: [
                {

                    title: "Equity ETFs",
                    fund: "395 funds",
                    rec: "18 recommended",
                },
                {
                    title: "Sector ETFs",
                    fund: "472 funds",
                    rec: "20 recommended",
                },
                {
                    title: "Bond  ETFs",
                    fund: "235 funds",
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
                    text: "Fund name",
                    align: "left",
                    sortable: false,
                    value: "Fundname", class: "successScrips"
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
                    Fundname: "Nippon India ETF Nifty BeES",
                    chipname: "Reco",
                    AUMval: "₹29,534 Cr",
                    TERval: "1.15%",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    ELSS: "ELSS",
                    Equity: "Equity",
                    chip: "Reco"
                },
                {
                    id: 2,
                    chipname: "Reco",
                    Fundname: "Nippon India ETF Nifty BeES",
                    AUMval: "₹29,534 Cr",
                    TERval: "1.15%",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    Growth: "Growth",
                    ELSS: "ELSS",
                    Equity: "Equity",
                },
                {
                    id: 3,
                    Fundname: "Mirae Asset Nifty 50 ETF",
                    AUMval: "₹29,534 Cr",
                    TERval: "1.15%",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    ELSS: "ELSS",

                },
                {
                    id: 4,
                    Fundname: "UTI-Nifty Exchange Traded Fund",
                    AUMval: "₹29,534 Cr",
                    TERval: "1.15%",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    ELSS: "ELSS",
                    Equity: "Equity",
                },
                {
                    id: 5,
                    Fundname: "Bandhan CRISIL IBX Gilt April 2028 Index fund",
                    AUMval: "₹29,534 Cr",
                    TERval: "1.15%",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                    Growth: "Growth",
                    ELSS: "ELSS",
                    Equity: "Equity",
                },
                {
                    id: 6,
                    Fundname: "HDFC Nifty 50",
                    AUMval: "₹29,534 Cr",
                    TERval: "1.15%",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                },
                {
                    id: 6,
                    Fundname: "ICICI Prudential Nifty ETF",
                    AUMval: "₹29,534 Cr",
                    TERval: "1.15%",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                },
                {
                    id: 6,
                    Fundname: "Mirae Asset Nifty 50 ETF",
                    AUMval: "₹29,534 Cr",
                    TERval: "1.15%",
                    MinInvest: "₹27,400",
                    oneyearCAGR: 20.2,
                    threeyrCAGR: 82.1,
                },
              


            ],
        }

    },
    methods: {
        etflistchangesingleetf () {
            this.singleetfpage=true
            this.eftlist=false

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
.etftablepostion {
    position: absolute !important;
    top: 25px !important;
    left:315px !important;
    /* right: 480px !important; */
   
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