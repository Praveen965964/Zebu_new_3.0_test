<template>
    <v-container class="px-0">
            <v-row>

            <v-col cols="9">
                <div style="outline: 1px solid  #DDDDDD;" class="mb-2 pb-8">
                    <v-card color="#FAFBFF" class="elevation-0">
                        <v-row>

                            <v-col class="ml-6" cols="">
                                <div class="pb-2">
                                    <p class="title font-weight-bold mt-2">
                                        Nippon India ETF Nifty BeES
                                    </p>
                                    <v-chip
                                        style="background-color: #FFFFFF; font-size: 10px; height: 25px; border-radius: 5px; color: #666666"
                                        class="mt-n4 font-weight-bold">ETF</v-chip>
                                    <v-chip
                                        style="background-color: #FFFFFF; font-size: 10px; height: 25px; border-radius: 5px ; color: #666666"
                                        class="ml-2 mt-n4 font-weight-bold">EQUITY</v-chip>
                                    <v-chip
                                        style="background-color: #FFFFFF; font-size: 10px; height: 25px; border-radius: 5px; color: #666666"
                                        class="ml-2 mt-n4 font-weight-bold"> NIFTY</v-chip>
                                </div>
                            </v-col>
                            <v-col cols="1">
                            </v-col>
                            <div class="mt-3">
                                <p class="caption font-weight-medium mt-2 ml-6" style="color: #666666;">
                                    NAV (May 19)
                                </p>
                                <p class="body-2 font-weight-medium mt-n4 ml-6">
                                    ₹ 205.41
                                </p>
                            </div> 
                            <div class="pl-3 pr-6 mt-3">
                                <p class="caption font-weight-medium mt-2 ml-6" style="color: #666666;">
                                    5yr CAGR
                                </p>
                                <p class="body-2 font-weight-medium mt-n4 ml-6">
                                    +13.8%
                                </p>
                            </div>
                            <div   class="text-center mt-3 mr-2">
                                <v-btn class="ma-1 mt-2" width="30px" height="30px" fab dark small elevation="0"
                                    color="#EBEBED" outlined>
                                    <v-icon size="17" color="#3E4763">
                                        mdi-bell-outline
                                    </v-icon>
                                </v-btn>
                                <v-btn class="ma-1 mt-2" width="30px" height="30px" fab dark small elevation="0"
                                    color="#EBEBED" outlined>
                                    <v-icon size="17" color="#3E4763">
                                        mdi-bookmark-outline
                                    </v-icon>
                                </v-btn>
                                    <v-menu  bottom left>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn dark class="ml-auto pt-2 pr-4 " icon v-bind="attrs" v-on="on">
                                            <v-icon size="20" color="black">mdi-dots-vertical</v-icon>
                                        </v-btn>
                                    </template>

                                    <v-list>
                                        <v-list-item v-for="(item, i) in items" :key="i">
                                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                        </v-row>

                    </v-card>
                    <div class="d-flex">
                        <div class="">
                            <p class="body-1 font-weight-bold mt-9 ml-6">Nippon India ETF Nifty BeES</p>
                            <p class="caption ml-6" style="color: #666666;">Nippon India ETF Nifty BeES provides inflation beating growth over the
                                long
                                term and is suitable for investment objectives with duration of 10-15 years or longer
                                (minimum 5
                                years).</p>
                        </div>
                        <div class="mt-8 mr-4">
                            <v-card style="outline: 2px solid #CCCCCC;" class="elevation-0 d-flex mt-8" width="160"
                                height="65">
                                <div class=" flex-row pl-4 pt-1 mt-2">
                                    <v-icon size="40" style="color: rgb(0, 179, 0);"> mdi-speedometer-slow</v-icon>
                                </div>
                                <div class="ml-4 pt-1">
                                    <p class="caption mt-2" style="color: #666666;"> Risk meter</p>
                                    <p class="bpdy-2 mt-n5 font-weight-medium">Low Risk</p>
                                </div>

                            </v-card>
                        </div>
                    </div>
                    <div>
                        <p class="caption text--black font-weight-bold ml-6 mb-n2 mt-5">Our analysis of this fund</p>
                        <v-row style="display: inline-flex;" v-for="item in datas" :key="item.index">
                            <v-col cols="" class="  mr-n1">
                                <v-card class="ml-6 elevation-0 pb-2 pr-3" width="260" height="150" style="outline: 2px solid #CCCCCC;">
                                    <div class="body-2 font-weight-bold pa-3 ml-2"> {{ item.title }}</div>
                                    <div width="" style="color: #666666;" class="font-weight-medium caption mb-5 ml-5 mt-n1 mr-4">{{ item.des }}</div>
                                    <v-card class="d-flex mx-5 mb-3  elevation-0" height="34"
                                        :color="item.val == 'Good' ? '#ECF5EA' : item.val == 'Moderate' ? '#FFF1EA' : '#ECF5EA'">
                                        <div>
                                            <p class="body-1 font-weight-bold pl-3 pt-1">{{ item.val }}</p>
                                        </div>
                                        <div class="ml-auto d-flex mr-3 mt-1">
                                            <v-card
                                                :color="item.val == 'Good' ? '#43A833' : item.val == 'Moderate' ? '#FF7223' : item.val == 'Leader' ? '#43A833' : ''"
                                                class="flex-row elevation-0"  height="20" width="4" style="margin: 2px;">
                                            </v-card>
                                            <v-card
                                                :color="item.val == 'Good' ? '#43A833' : item.val == 'Moderate' ? '#FF7223' : item.val == 'Leader' ? '#43A833' : ''"
                                                class=" elevation-0" height="20" width="4" style="margin: 2px;">
                                            </v-card>
                                            <v-card
                                                :color="item.val == 'Good' ? '#43A833' : item.val == 'Moderate' ? '#FF7223' : item.val == 'Leader' ? '#43A833' : ''"
                                                class="elevation-0"  height="20" width="4" style="margin: 2px;">
                                            </v-card>
                                            <v-card
                                                :color="item.val == 'Good' ? '#43A833' : item.val == 'Leader' ? '#43A833' : '#D9D9D9'"
                                                class="elevation-0"  height="20" width="4" style="margin: 2px;">
                                            </v-card>
                                            <v-card :color="item.val == 'Leader' ? '#43A833' : '#D9D9D9'"
                                                class="elevation-0"  height="20" width="4" style="margin: 2px;">
                                            </v-card>
                                        </div>
                                    </v-card>
                                </v-card>
                            </v-col>




                        </v-row>
                    </div>
                </div>
                <v-card class="elevation-0 mb-12" style="outline: #CCCCCC 1px solid;">
                    <v-card style="outline: #CCCCCC 1px solid;" height="100" class="mt-12   elevation-0">
                        <v-row>
                            <v-col cols="">
                                <p class="title font-weight-bold mt-4 ml-6">Historical NAV</p>
                                <p class="caption ml-6 mt-n4 font-weight-medium" style="color: #666666;">Past ETF performance</p>
                            </v-col>
                            <v-col cols="7" class="mt-5 mb-n2">
                                <v-tabs align-with-title background-color="transparent" color="black" class="mt-5">
                                    <v-tab class="caption">1M</v-tab>
                                    <v-tab class="caption">3M</v-tab>
                                    <v-tab class="caption">6M</v-tab>
                                    <v-tab class="caption">1YR</v-tab>
                                    <v-tab class="caption">3YR</v-tab>
                                    <v-tab class="caption">5YR</v-tab>
                                    <v-tab class="caption">MAX</v-tab>
                                </v-tabs>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-row class="mb-6">
                        <v-col cols="5">
                            <div class="d-flex">
                                <p class="body-2 font-weight-bold ml-6 mt-8 ma-auto">Fund returns</p>
                                <v-icon color="green" size="50" class="mt-4 ">mdi-circle-small</v-icon>
                                <p class="mr-13 ml-n4 body-2  font-weight-medium mt-8" style="color: #666666 ;"> Benchmark</p>
                            </div>
                            <v-row style="display: inline-flex;" class="mb-3 pl-9 mt-2">
                                <div v-for="data in datas1" :key="data.index" class="mr-5">

                                    <v-card :color="data.per > 0 ? '#FBFFFA' : data.per < 0 ? '#FFFCFB' : ''"
                                        style="outline: 1px solid #CCCCCC;" class=" elevation-0  pr-3 mb-4" width="125"
                                        height="110">


                                        <p :class="getTextColorClass(data.per)" color="red" class="headline font-weight-medium ml-6 pt-4">{{
                                            data.per }}%</p>
                                        <p class="body-2 ml-5 pr-3 mt-n2 font-weight-medium" style="color: #666666;">{{ data.duration }}</p>
                                        <v-chip color="#43A833" style=" height: 30px; border-radius:6px; "
                                            class="white--text  relative font-weight-medium px-1">{{ data.per2 }}%</v-chip>
                                    </v-card>
                                </div>
                            </v-row>
                        </v-col>
                        <v-col cols="7">
                            <!--  <div ref="linechart" class="chrt my-2"></div>  -->
                            <div class="d-flex "><div class="ml-auto"><div class="d-flex flex-row"><div class="text-right caption font-weight-medium px-3" style="color: #666666;">RETURNS FOR PERIOD  </div><div style="color:rgb(31, 214, 1);">{{ '%'+percentage }}</div></div></div></div>
                            <div ref="linechart" class=" my-2"></div>
                        </v-col>
                    </v-row>
                </v-card>
                <!-- <div ref="linechart" class="chrt my-2"></div> -->
                <v-card class="elevation-0 " style="outline: #CCCCCC 1px solid;"> 
                    <v-row class="ml-3">
                        <v-col cols="6">
                            <P class="title font-weight-bold mt-4">ETF Information</P>
                            <P class="body-2 font-weight-bold mt-7">Investment Objective</P>
                            <P class="caption mt-n1 font-weight-medium" style="color: #666666;">Nippon India ETF Nifty BeES is an equity oriented large cap mutual fund
                                scheme. Bluechip mutual funds invest in bluechip companies with large market capitalisation.
                                These companies have a well-established track record of performance and potential of future
                                growth and appreciation. In agreement with its investment objective the fund’s investment
                                allocation is more than 80% towards large-cap companies and approx. 4% towards mid-cap
                                companies. The scheme aims to achieve long term growth and wealth appreciation through its
                                asset allocation strategies. The fund has a sufficient track record of 12 years for
                                performance analysis.</P>
                        </v-col>
                        <v-col cols="6">
                            <p class="body-2 font-weight-bold ml-7" style="margin-top: 78px;">Fund Managers</p>
                            <v-card v-for="data in datas2" :key="data.index" class="mx-10 mt-3 elevation-0 " width="" height="85" style="outline: #CCCCCC 2px solid;">
                                <v-row class="mt-3">
                                    <v-col cols="1" class="ml-4">
                                        <img class="mt-1" :src="data.img" alt="">
                                    </v-col>
                                    <v-col class="ml-5">
                                        <p class="body-2 font-weight-bold ">{{ data.name }}</p>
                                        <p class=" font-weight-bold mt-n1" style="font-size: 11px;">{{ data.post }}</p>
                                        <p class=" font-weight-bold mt-n5" style="font-size: 11px; color: #999999;">{{
                                            data.exp }} <span class="font-weight-medium">experience</span></p>

                                    </v-col>
                                    <v-col>
                                        <p class=" font-weight-bold mt-8" style="font-size: 11px; ">{{ data.money }} <span
                                                class="font-weight-medium">Cr</span></p>
                                        <p class="font-weight-medium  mt-n5" style="font-size: 11px; color: #999999;">{{
                                            data.fund }}</p>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <v-card></v-card>
                        </v-col>
                    </v-row>
                    <v-row class="ml-3 pb-5">
                        <v-col v-for="data in datas3" :key="data.index" cols="4">
                            <div>
                                <p class=" body-2 font-weight-medium" style="color: #666666;">{{ data.title1 }}</p>
                                <p class=" body-2 back--text font-weight-bold mt-n2">{{ data.date1 }}</p>
                                <v-divider class="mr-5 mt-n2"></v-divider>
                            </div>
                            <div>
                                <p class=" body-2 mt-8 font-weight-medium" style="color: #666666;">{{ data.title2 }}</p>
                                <p class=" body-2 back--text font-weight-bold mt-n2">{{ data.date2 }}</p>
                                <v-divider class="mr-5 mt-n2"></v-divider>
                            </div>
                            <div>
                                <p class=" body-2 mt-8 font-weight-medium" style="color: #666666;"> {{ data.title3 }}</p>
                                <p class=" body-2 back--text font-weight-bold mt-n2">{{ data.date3 }}</p>
                                <v-divider class="mr-5 mt-n2"></v-divider>
                            </div>

                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="mt-10 elevation-0 mb-10" style="outline: #CCCCCC 1px solid;" >
                    <!-- <img src="../assets/singleetf/Group 1000004576.svg" alt=""> -->
                    <P class="title font-weight-bold ml-6 pt-7">Asset allocation and Holdings</P>
                    <v-row class="mx-3">
                        <v-col cols="4" v-for="data in datas4" :key="data.index" class="">
                            <P class="body-2 font-weight-bold mt-3">{{ data.title }}</P>
                            <p class="caption font-weight-medium mt-n3">{{ data.des }}</p>
                        </v-col>
                    </v-row>
                    <v-row class="mx-3">
                        <v-col cols="4" class="">
                            <P class="body-1 font-weight-medium mb-13 pt-">Fund asset allocation</P>
                            <div>
                                <canvas id="myChart" style="width:640px;height:10000px"></canvas>
                            </div>
                            <div class="d-flex mt-15">
                                <p class="caption"><v-icon color="#86D460" size="40">mdi-circle-small</v-icon>Equity</p>
                                <p class="caption"><v-icon size="40" color="#9766D7">mdi-circle-small</v-icon>Debt</p>
                                <p class="caption"><v-icon size="40" color="#F86DB0"> mdi-circle-small</v-icon>Others</p>
                               
                            </div>
                        </v-col>
                        <v-col cols="4" class="">
                            <P class="body-1 font-weight-medium   pb-2">Equity allocation by Sector</P>
                            <div class="mt-8" v-for="data in range" :key="data.index">
                                <div class="d-flex">
                                    <p class="caption">{{ data.title }}</p>
                                    <p class="caption font-weight-bold ml-auto" style="color: #489522;">{{ data.range }}%
                                    </p>
                                </div>
                                <v-progress-linear class="mt-n2 mb-6" v-model="power" color="#B7DBA6"
                                    height="4"></v-progress-linear>
                            </div>
                           
                        </v-col>
                        <v-col cols="4" class="">
                            <P class="body-1 font-weight-medium   pb-2">Top Stock Holdings</P>
                            <div class="mt-8" v-for="data in range" :key="data.index">
                                <div class="d-flex">
                                    <p class="caption">{{ data.title }}</p>
                                    <p class="caption font-weight-bold ml-auto" style="color: #2182AB;">{{ data.range }}%
                                    </p>
                                </div>
                                <v-progress-linear class="mt-n2 mb-6" v-model="power" color="#92D7F4"
                                    height="4"></v-progress-linear>
                            </div>
                           
                        </v-col>
                    </v-row>
                </v-card>

            </v-col>
            <v-col cols="3">
                <div class="mt-n4">
                    <p class="body-1 font-weight-bold">Investment Calculator</p>
                    <p class="caption font-weight-medium mt-6" style="color: #666666;">
                        Choose tenure
                    </p>
                    <div class="d-flex">
                        <div class="flex-row pt-1">
                            <p :class="['body-2', 'font-weight-bold', { 'active': isActive }]">Monthly SIP</p>
                        </div>
                        <div class="pl-5">
                            <label class="switch">
                                <input type="checkbox" v-model="isActive">
                                <span class="sliderr round"></span>
                            </label>
                        </div>
                        <div class="pl-5 pt-1">
                            <p :class="['body-2', 'font-weight-bold', { 'active': !isActive }]">Lump sum</p>
                        </div>
                    </div>
                </div>
                <div class="">
                    <v-row class="mt-3 d-flex ">
                        <div class="po">
                            <p class="caption">Amount</p>
                            <v-text-field label="" placeholder=" " filled rounded dense min-height="50"
                                style="width: ; " class="mt-n2 ">
                            </v-text-field>
                        </div>
                        <div >
                            <p class="caption ">Step-up</p>

                            <v-card class="elevation-0 d-flex mt-n2" style="background-color: #F1F3F8; border-radius: 30px;" height="38"
                                width="74">
                                    <div>
                                        <p class="mb-0 grey--text ml-3 pt-2 body-2">{{ number }}</p>
                                    </div>
                                    <div class="mr-1 pt-">
                                        <v-btn elevation="0" :ripple="false" id="no-background-hover" class="up  pb-2 pr-3"
                                            icon @click="incrementNumber">
                                            <v-icon size="16" class="" color="black">
                                                mdi-chevron-up
                                            </v-icon></v-btn>
                                        <v-btn elevation="0" :ripple="false" id="no-background-hover" class="move pb-2 pr-3"
                                            icon @click="decrementNumber">
                                            <v-icon size="16" class="mb-0 pt-0 " color="black">
                                                mdi-chevron-down
                                            </v-icon>
                                        </v-btn>
                                    </div>
                            </v-card>
                        </div>
                    </v-row>
                </div>
                <div class="d-flex">
                    <div class=" caption font-weight-medium" style="color: #666666;">
                        <p>Investment duration</p>
                    </div>
                    <div class=" caption ml-auto font-weight-bold">
                        <p style="color: red ">6 yrs</p>
                    </div>
                </div>
                <div class="mt-n3">
                    <v-slider v-model="val" color="orange darken-3"></v-slider>
                </div>
                <div class="d-flex ml-1 mt-n7">
                    <div class="caption font-weight-bold">
                        <p>0 yrs</p>
                    </div>
                    <div class=" caption ml-auto font-weight-bold">
                        <p>30 yrs</p>
                    </div>
                </div>
                <v-divider class=" mt-3"></v-divider>
                <div class="text-center mt-4 ">
                    <p style="color: #43A833" class="title font-weight-medium">₹ 10,31,566</p>
                    <p class=" body-2 mt-n4 font-weight-medium" style="color: #666666;"> Total Corpus</p>
                    <p class=" caption mt-n2 font-weight-medium" style="color: #666666;"> With CAGR of 13.8 % in 5 years</p>
                </div>
                <v-card class="elevation-0 " style="background-color: #F1F3F8">
                    <div class="d-flex ml-2 mr-2 pt-3 ">
                        <div>
                            <!-- <p class=" caption grey--text">Total Investment</p> -->
                            <p class=" caption " style="color: #666666;">Total Investment</p>
                            <p class=" body-2 font-weight-bold mt-n4">₹ 7,32,612</p>
                        </div>
                        <div class="ml-auto ">
                            <p class=" caption " style="color: #666666;">Wealth Gained</p>
                            <p class=" body-2 font-weight-bold mt-n4">₹ 2,98,954</p>
                        </div>
                    </div>
                </v-card>
                <v-btn :ripple="false" color="black"
                    class="caption  white--text text-capitalize rounded-pill elevation-0 d-flex mt-6 mx-auto px-8">
                    Start Investing Now!
                </v-btn>
                <div>
                    <P class="body-1 font-weight-bold " style="margin-top: 96px"> Similar ETFs</P>
                </div>
                <v-card v-for="data in datas5" :key="data.index" style="outline: 1px solid  #DDDDDD;"
                    class="elevation-0 mb-3">
                    <v-card class="d-flex flex-row  elevation-0 mb-3" color="#FAFBFF" height="35">
                        <P class="caption font-weight-bold mt-2 ml-3">{{ data.title }}</P>
                        <v-chip style="background-color: #FFFFFF; font-size: 9px; height: 25px; border-radius: 5px;"
                            class="ml-auto mt-1 mr-3 py-0 px-2 pa-0">ELSE</v-chip>
                    </v-card>
                    <div class="d-flex mb-2 ">
                        <div class="d-flex flex-row ">
                            <p class="caption ml-3 mb-0 font-weight-medium" style="color: #999999;"> AUM </p>
                            <p class="caption font-weight-bold ml-2 mb-0">{{ data.aum }}</p>
                            <p class="caption ml-1 mb-0 font-weight-medium" style="color: #666666;">Cr</p>
                        </div>
                        <div class="ml-auto d-flex flex-row">
                            <p class="caption mr-1 mb-0 font-weight-medium" style="color: #999999;">Expense </p>
                            <p :class="getTextColorClass(data.per)" class="caption font-weight-bold mr-2 mb-0">{{ data.exp
                            }}</p>
                        </div>
                    </div>
                    <div class="d-flex   " style="outline: 1px solid  #DDDDDD;">
                        <div class="d-flex flex-row mt-1 mb-1">
                            <p class="caption ml-3 mb-0 font-weight-medium" style="color: #999999;"> PE </p>
                            <p class="caption font-weight-bold ml-2 mb-0">{{ data.pe }}</p>
                        </div>
                        <div class="ml-auto d-flex flex-row mt-1 mb-1">
                            <p class="caption mr-1 mb-0 font-weight-medium" style="color: #999999;">1yrs </p>
                            <p :class="getTextColorClass(data.y1)" class="caption font-weight-bold mr-2 mb-0">{{ data.y1 }}
                                %</p>
                        </div>
                    </div>
                    <div class="d-flex " style="outline: 1px solid  #DDDDDD margin-top: -10px;">
                        <div class="d-flex flex-row mt-1 mb-1">
                            <p class="caption ml-3 mb-0 font-weight-medium" style="color: #999999;"> Sharpe </p>
                            <p class="caption font-weight-bold ml-2 mb-0">{{ data.sharpe }}</p>
                        </div>
                        <div class="ml-auto d-flex flex-row mt-1 mb-1">
                            <p class="caption mr-1 mb-0 font-weight-medium" style="color: #999999;">3yrs </p>
                            <p :class="getTextColorClass(data.y2)" class="caption font-weight-bold mr-2 mb-0">{{ data.y2 }}
                            </p>
                        </div>
                    </div>

                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Chart from 'chart.js/auto'
import { createChart } from "lightweight-charts";

export default {
    data() {
        return {
            power: 30,
            number: 2021,
            isActive: false,

            datas: [
                {

                    title: "Fund Size ",
                    des: " The performance of the ETF and the Size of fund.",
                    val: "Good",
                },
                {
                    title: "Consistent Outperformance ",
                    des: " ETF has been a Category Leader and has outperformed.",
                    val: "Leader",
                },
                {
                    title: "Volatility of performance",
                    des: " The fund has been a Category Leader on the Volatility.",
                    val: "Moderate",
                },
                {
                    title: "Upside Participation",
                    des: " The performance of the fund on a Fund Size.",
                    val: "Good",
                },
                {
                    title: "Rolling Returns (3 Year)",
                    des: "ETF has been a Category Leader on the Rolling Returns ",
                    val: "Moderate",
                },
                {
                    title: "Rolling Returns (1 Year)",
                    des: " ETF has been a Category Leader on the Rolling Returns",
                    val: "Leader",
                },
            ],
            datas1: [
                {
                    per: -2.8,
                    duration: "6 Month CAGR",
                    per2: 2.4,
                },
                {
                    per: 20.2,
                    duration: "1 year CAGR",
                    per2: 20.4,

                },
                {
                    per: 35.4,
                    duration: "3 year CAGR",
                    per2: 20.4,

                },
                {
                    per: 13.8,
                    duration: "5 year CAGR",
                    per2: 11.6,

                },
                {
                    per: 11.5,
                    duration: "10 year CAGR",
                    per2: 8.4,

                },
                {
                    per: 12,
                    duration: "Since INCEPTION",
                    per2: 20.4,

                },
            ],
            datas2: [
                { 
                    img: require('@/assets/singleetf/Rectangle 19648.svg'),
                    name: "Priya Ranjan",
                    post: "Fund Manager",
                    exp: "11 yrs",
                    money: "₹19,236.26 ",
                    fund: "24 funds managed",
                },
                {
                    img: require('@/assets/singleetf/Rectangle 1964.svg'),
                    name: "Sandeep Tandon",
                    post: "Fund Manager",
                    exp: "120 yrs",
                    money: "₹19,236.26 ",
                    fund: "24 funds managed",
                },
            ],
            datas3: [
                {
                    title1: "LANCHED (29y ago)",
                    title2: "EXPENSE RATIO",
                    title3: " FUND SIZE",
                    date1: "Feb 18, 1994",
                    date2: "1.81",
                    date3: "₹29,534 Cr",
                },
                {
                    title1: "SIP MINIMUM",
                    title2: "LUMPSUM MIN.",
                    title3: "LOCK-IN",
                    date1: "1000",
                    date2: "5000",
                    date3: "No Lock-in",
                },
                {
                    title1: "STANDARD DEVIATION",
                    title2: "BETA",
                    title3: "SHARPE RATIO",
                    date1: "20.6",
                    date2: "0.98",
                    date3: "0.46",
                },
            ],
            datas4: [
                {
                    title: "Fund’s overall asset allocation",
                    des: "Each fund is uniquely allocated to suit and match customer expectations based on the risk profile and return expectations.",
                },
                {
                    title: "Fund’s equity sector distribution",
                    des: "Each fund is uniquely allocated to suit and match customer expectations based on the risk profile and return expectations.",
                },
                {
                    title: "Fund’s top stock holdings",
                    des: "Each fund is uniquely allocated to suit and match customer expectations based on the risk profile and return expectations.",
                },
            ],
            datas5: [
                {
                    title: "Mirae Asset Tax Saver Fund",
                    aum: "₹29,534",
                    pe: "37.04",
                    sharpe: "1.15%",
                    exp: 1.51,
                    y1: +20.2,
                    y2: +20.2,
                },
                {
                    title: "Mirae Asset Tax Saver Fund",
                    aum: "₹29,534",
                    pe: "37.04",
                    sharpe: "1.15%",
                    exp: 1.51,
                    y1: +20.2,
                    y2: +20.2,
                },
                {
                    title: "Mirae Asset Tax Saver Fund",
                    aum: "₹29,534",
                    pe: "37.04",
                    sharpe: "1.15%",
                    exp: 1.51,
                    y1: +20.2,
                    y2: +20.2,
                },
                {
                    title: "Mirae Asset Tax Saver Fund",
                    aum: "₹29,534",
                    pe: "37.04",
                    sharpe: "1.15%",
                    exp: 1.51,
                    y1: +20.2,
                    y2: +20.2,
                },
                {
                    title: "Mirae Asset Tax Saver Fund",
                    aum: "₹29,534",
                    pe: "37.04",
                    sharpe: "1.15%",
                    exp: 1.51,
                    y1: +20.2,
                    y2: +20.2,
                },
                {
                    title: "Mirae Asset Tax Saver Fund",
                    aum: "₹29,534",
                    pe: "37.04",
                    sharpe: "1.15%",
                    exp: 1.51,
                    y1: +20.2,
                    y2: +20.2,
                },
            ],
            range: [
                {
                    title: "Financial Services",
                    range: 36.9,
                },
                {
                    title: "Technology",
                    range: 10.3,
                },
                {
                    title: "Consumer Cyclical",
                    range: 9.9,
                },
                {
                    title: "Consumer Defensive",
                    range: 9.2,
                },
                {
                    title: "Industrials",
                    range: 7.6,
                },
                {
                    title: "Others",
                    range: 12.7,
                },
            ],
            range2: [
                {
                    title: "Financial Services",
                    range: 36.9,
                },
                {
                    title: "Technology",
                    range: 10.3,
                },
                {
                    title: "Consumer Cyclical",
                    range: 9.9,
                },
                {
                    title: "Consumer Defensive",
                    range: 9.2,
                },
                {
                    title: "Industrials",
                    range: 7.6,
                },
                {
                    title: "Others",
                    range: 12.7,
                },
            ]
        }
    },
    methods: {
        getTextColorClass(per) {
            if (per > 0) {
                return 'positive-color';
            } else if (per < 0) {
                return 'negative-color';
            } else {
                return '';
            }
        },
        incrementNumber() {
            this.number++;
        },
        decrementNumber() {
            if (this.number > 0) {
                this.number--;
            }
        },
        chart() {
          const chartOptions1 = {
            height:300,
            autoSize:true,
        grid: {
          vertLines: {
            // color: '#2B2B43',
            visible: false,
          },
        },
        leftPriceScale: {
          visible: false,
        },
        rightPriceScale: {
          visible: false,
        },
        // Add your chart options for chart 1 here
      };

      const chart1 = createChart(this.$refs.linechart, chartOptions1);

      const lineSeries1 = chart1.addAreaSeries({
        lineColor: 'rgba(0, 120, 255, 1)',
        lineWidth: 2,
        crosshairMarkerVisible: true,
        // crosshairMarkerRadius: 4,
      });

      const data1 = [
        { time: "2023-03-01", value: 200 },
        { time: "2023-03-02", value: 150 },
        { time: "2023-03-03", value: 120 },
        { time: "2023-03-04", value: 180 },
        { time: "2023-03-05", value: 200 },
        { time: "2023-03-06", value: 10 },
        { time: "2023-03-07", value: 90 },
        { time: "2023-03-08", value: 170 },
        { time: "2023-03-09", value: 80 },
        { time: "2023-04-01", value: 200 },
        { time: "2023-04-02", value: 150 },
        { time: "2023-04-03", value: 120 },
        { time: "2023-04-04", value: 180 },
        { time: "2023-04-05", value: 200 },
        { time: "2023-04-06", value: 10 },
        { time: "2023-04-07", value: 90 },
        { time: "2023-04-08", value: 170 },
        { time: "2023-04-09", value: 80 },
        { time: "2023-05-01", value: 200 },
        { time: "2023-05-02", value: 150 },
        { time: "2023-05-03", value: 120 },
        { time: "2023-05-04", value: 180 },
        { time: "2023-05-05", value: 200 },
        { time: "2023-05-06", value: 10 },
        { time: "2023-05-07", value: 90 },
        { time: "2023-05-08", value: 170 },
        { time: "2023-05-09", value: 80 },
        { time: "2023-06-01", value: 280 },
        { time: "2023-06-02", value: 150 },
        { time: "2023-06-03", value: 120 },
        { time: "2023-06-04", value: 180 },
        { time: "2023-06-05", value: 200 },
        { time: "2023-06-06", value: 10 },
        { time: "2023-06-07", value: 90 },
        { time: "2023-06-08", value: 170 },
        { time: "2023-06-09", value: 80 },
        { time: "2023-07-01", value: 100 },
        { time: "2023-07-02", value: 150 },
        { time: "2023-07-03", value: 120 },
        { time: "2023-07-04", value: 180 },
        { time: "2023-07-05", value: 200 },
        { time: "2023-07-06", value: 10 },
        { time: "2023-07-07", value: 90 },
        { time: "2023-07-08", value: 170 },
        { time: "2023-07-09", value: 80 },
        { time: "2023-08-01", value: 100 },
        { time: "2023-08-02", value: 150 },
        { time: "2023-08-03", value: 120 },
        { time: "2023-08-04", value: 180 },
        { time: "2023-08-05", value: 200 },
        { time: "2023-08-06", value: 10 },
        { time: "2023-08-07", value: 90 },
        { time: "2023-08-08", value: 170 },
        { time: "2023-08-09", value: 80 },
        { time: "2023-09-01", value: 100 },
        { time: "2023-09-02", value: 150 },
        { time: "2023-09-03", value: 120 },
        { time: "2023-09-04", value: 180 },
        { time: "2023-09-05", value: 200 },
        { time: "2023-09-06", value: 10 },
        { time: "2023-09-07", value: 90 },
        { time: "2023-09-08", value: 170 },
        { time: "2023-09-09", value: 80 },
        { time: "2023-10-01", value: 100 },
        { time: "2023-10-02", value: 150 },
        { time: "2023-10-03", value: 120 },
        { time: "2023-10-04", value: 180 },
        { time: "2023-10-05", value: 200 },
        { time: "2023-10-06", value: 10 },
        { time: "2023-10-07", value: 90 },
        { time: "2023-10-08", value: 170 },
        { time: "2023-10-09", value: 80 },
        { time: "2023-11-01", value: 100 },
        { time: "2023-11-02", value: 150 },
        { time: "2023-11-03", value: 120 },
        { time: "2023-11-04", value: 180 },
        { time: "2023-11-05", value: 200 },
        { time: "2023-11-06", value: 10 },
        { time: "2023-11-07", value: 90 },
        { time: "2023-11-08", value: 170 },
        { time: "2023-11-09", value: 80 },
        { time: "2023-12-01", value: 100 },
        { time: "2023-12-02", value: 150 },
        { time: "2023-12-03", value: 120 },
        { time: "2023-12-04", value: 180 },
        { time: "2023-12-05", value: 200 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 90 },
        { time: "2023-12-08", value: 170 },
        { time: "2023-12-09", value: 80 },
      ];

      lineSeries1.setData(data1);
//       document.body.style.position = 'relative'
//     var container = document.createElement('div');
//     document.body.appendChild(container);
//       // var toolTipMargin = 10;
// // var priceScaleWidth = 50;
// var toolTip = document.createElement('div');
// toolTip.className = 'three-line-legend';
// container.appendChild(toolTip);
// toolTip.style.display = 'block';
// toolTip.style.right = 400 + 'px';
// toolTip.style.top = 1100 + 'px';

// // function setLastBarText() {
// //    /* eslint-disable */ 
// // 	 toolTip.innerHTML =
// //    '<span style="font-size: 12px; color: #20262E"> TODAYS NAV'+ '<span style="font-size: 22px; margin: 4px 4px; color: #20262E">' + data1[data1.length-1].value + '</span>'+'</span>';
// // }
// chart1.subscribeCrosshairMove(function(param) {
//   if ( param === undefined || param.time === undefined || param.point.x < 0 || param.point.y < 0  ) {
// 	// setLastBarText();
// } 
// else {

// 	const data = param.seriesData.get(lineSeries1);
// 	const price = data.value !== undefined ? data.value : '';
// 	toolTip.innerHTML =	'<span style="font-size: 12px; color: #20262E"> TODAYS NAV'+ '<span style="font-size: 22px; margin: 4px 4px;  color: #20262E">' + (Math.round(price * 100) / 100).toFixed(2) + '</span>'+'</span>';
// }
// });
        }
    },
    mounted() {
        // new Chart()
      this.chart()
        const data = {
            datasets: [{
                label: 'My First Dataset',
                data: [450, 70, 40],
                backgroundColor: [
                    '#86D461',
                    '#9866D7',
                    '#F86DB0',

                ],
                hoverOffset: 4,

            }],
        };


        new Chart(this.$el.querySelector("#myChart"), {
            type: "doughnut",
            data: data,
        });
        // this.charts1()

    },

}
</script>

<style lang="scss">
/* .relative {
    position: ;
    left: 72px;
    top: 74px;
} */

/* .switch {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 24px;
} */
.chrt{
  width:100%;
  height:100%;
}
.three-line-legend {
	width:200px;
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
.relative {
    position: absolute;
    left: 72px;
    top: 74px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 24px;
}
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.sliderr {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f1f3f8;
    width: 56px;
    ;
    height: 24px;
    -webkit-transition: .4s;
    transition: .4s;
}

.sliderr:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 24px;
    top: 5px;
    left: 4px;
    border-radius: 160px;
    background-color: rgb(0, 0, 0);
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.sliderr {
    background-color: #F1F3F8;
}

input:focus+.sliderr {
    box-shadow: 0 0 1px #F1F3F8;
}

input:checked+.sliderr:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliderrs */
.sliderr.round {
    border-radius: 34px;
}

/* .sliderr.round:before {} */
.input-group .input-group__input {
    font-size: 1px !important;
    width: 10px;
}

#input-102 {
    width: 10px;
}

.positive-color {
    color: #43A833;
}

.negative-color {
    color: #FF1717;
}

/* 
.up {
    position: absolute;
    left: px;
    top: -8px;
}

.move {
    position: absolute;
    left: px;
    top: 10px
} */
.po {
.v-text-field--filled.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot{
    max-width: 190px;
    margin-right: 15px;
}
}
.active {
  color: #b6b3b3; /* Color when the switch is on */
}
</style>

