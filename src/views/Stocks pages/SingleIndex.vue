<template>
    <div>
        <!-- <v-container class="px-0"> -->
        <v-row v-if="sigleindex" class="" style="margin-top: 10px; ">
            <v-col lg="9" md="9" sm="9" xs="12" class="pr-9 ">
                <div class="ml-1" style="outline: 1px #DDDDDD solid;">
                    <v-card color="#FAFBFF" class="elevation-0 ">
                        <v-row class="py-0">
                            <v-col lg="1" md="2" sm="2" xs="1" style="border: 1px;">
                                <img style="margin-left: 29px; margin-top: 11px" src="@/assets/image 381.svg" width=49 />
                            </v-col>
                            <v-col class="text-left" lg="6" md="3" sm="3" xs="2">
                                <div style="padding-left: 2px;">
                                    <p class="mt-3 ml-3"
                                        style="font-size: 19px;font-weight: 680;line-height: 16px;letter-spacing: -0.8px;text-align: left;font-variation-settings: 'slnt' 0;">
                                        {{ message }}
                                        <!-- {{ message1 }} -->
                                    </p>
                                    <p class="d-none d-lg-block  ml-3 "
                                        style="color: #666666;font-size: 11px;font-weight: 550;line-height: 14px;letter-spacing: -0.1px;text-align: left;font-variation-settings: 'slnt' 0; margin-top: -11px;">
                                        {{ message }}
                                        is a well diversified 50 stock index. It represents the top 50 </p>
                                    <p class="d-none d-lg-block   ml-3  "
                                        style="color: #666666;font-size: 11px;font-weight: 469;line-height: 14px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0; margin-top: -16px;">
                                        Largecap companies based on market capitalisation.</p>
                                </div>
                            </v-col>
                            <v-col class="d-none d-lg-block" lg="1" md="0" sm="0" xs="0">
                            </v-col>
                            <v-col lg="2" md="3" sm="3" xs="3" v-for="(data, index) in topvalue" :key="index"
                                class="text-right mx-0 d-flex">
                                <div>
                                    <p class="pl-14 "
                                        style="font-size: 16px;font-weight: 559;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0; margin-top: 11px;">
                                        ₹{{ data.lp }}
                                    </p>
                                    <p v-if="data.change < 0" class=" ml-14 mt-n3"
                                        style="color: red;font-size: 12px;font-weight: 559;line-height: 16px;letter-spacing: 0em;text-align: right;font-variation-settings: 'slnt' 0;">
                                        {{ data.change }}{{ data.percentChange }}
                                    </p>
                                    <p v-else-if="data.change > 0" class="ml-14 mt-n3"
                                        style="color: #43A833; font-size: 12px;font-weight: 559;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;">
                                        {{ data.change }}({{ data.percentChange }}%)
                                    </p>
                                </div>
                                <div lg="2" md="3" sm="4" xs="5" class="text-center mx-0 ml-auto ">
                                    <div class="d-flex ml-7">
                                        <v-btn class="" style="margin-left: 3px; margin-top: 11px;" width="26px"
                                            height="26px" fab dark small elevation="0" color="#CCCCCC" outlined>
                                            <img src="../../assets/bell.svg" alt="" width="11" height="12">
                                        </v-btn>
                                        <v-btn class=" " style="margin-left: 7px; margin-top: 11px;" width="26px"
                                            height="26px" fab dark small elevation="0" color="#CCCCCC" outlined>
                                            <img src="../../assets/save.svg" alt="" width="11" height="12">
                                        </v-btn>
                                        <v-menu bottom left class="">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn dark class="ml-n2" icon v-bind="attrs" v-on="on"
                                                    style="margin-top: 6px; ">
                                                    <v-icon size="" thickness="1" color="black">mdi-dots-vertical</v-icon>
                                                </v-btn>
                                            </template>

                                            <v-list>
                                                <v-list-item v-for="(item, i) in items" :key="i">
                                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </div>
                                </div>
                            </v-col>

                        </v-row>
                    </v-card>

                    <v-row class="mb-0">
                        <v-col class="pa-0">
                            <p style="font-size: 19px;font-weight: 650;line-height: 16px;letter-spacing: -0.7px;text-align: left;font-variation-settings: 'slnt' 0; margin-top: 30px;"
                                class=" ml-10 mb-0">Price Chart</p>
                        </v-col>
                        <v-col>
                            <v-card class="elevation-0   float-right pr-3">
                                <v-tabs class="align-with-title mb-n2" background-color="transparent" color="black">
                                    <v-tab class="caption" @click="totallinechart(val = '1M')">1M</v-tab>
                                    <v-tab class="caption" @click="totallinechart(val = '3M')">3M</v-tab>
                                    <v-tab class="caption" @click="totallinechart(val = '6M')">6M</v-tab>
                                    <v-tab class="caption" @click="totallinechart(val = '1YR')">1YR</v-tab>
                                    <v-tab class="caption" @click="totallinechart(val = '3YR')">3YR</v-tab>
                                    <v-tab class="caption" @click="totallinechart(val = '5YR')">5YR</v-tab>
                                    <v-tab class="caption" @click="totallinechart(val = 'MAX')">MAX</v-tab>
                                </v-tabs>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-card class="elevation-0 mt-n1"
                        style="border-bottom: #ebebeb 1px solid; border-top: #ebebeb 1px solid;">
                        <v-row class="mb-7">
                            <v-col v-if="topvalue == ''" cols="4" class=" mt-15 text-center">
                                <span class="font-weight-medium  " style="font-size:14px; color: #d6d6d6;">No data
                                    available</Span>
                            </v-col>
                            <v-col v-else lg="3" md="4" sm="12" xs="12" cols="12" class=" "
                                style="margin-left: 31px; margin-top: 35px;">
                                <div v-for="(data, index) in topvalue" :key="index">
                                    <v-row>
                                        <v-col cols="6" class="mr-n1">
                                            <!-- <p class="mb-0 pt-5 caption font-weight-medium" style="color: #666666;">PE RATIO -->
                                            <p class="mb-0  "
                                                style="color: #666666; font-size: 9px; font-weight: 469;line-height: 12px;letter-spacing: 0.08em;text-align: left; padding-left: ;">
                                                PE RATIO
                                            </p>
                                            <p class="mb-0 mt-2  back--text"
                                                style="font-size: 14px;font-weight: 650;line-height: 12px;letter-spacing: -1px;text-align: left;font-variation-settings: 'slnt' 0;">
                                                {{ data.pe }}</p>
                                            <v-divider class="mr-1 mt-2"></v-divider>
                                        </v-col>
                                        <v-col cols="6">
                                            <!-- <p class="mb-0 pt-5 caption font-weight-medium" style="color: #666666;">PE RATIO -->
                                            <p class="mb-0  "
                                                style="color: #666666; font-size: 9px; font-weight: 469;line-height: 12px;letter-spacing: 0.08em;text-align: left; padding-left: ;">
                                                PE RATIO
                                            </p>
                                            <p class="mb-0 mt-2  back--text"
                                                style="font-size: 14px;font-weight: 650;line-height: 12px;letter-spacing: -1px;text-align: left;font-variation-settings: 'slnt' 0;">
                                                {{ data.pe }}</p>
                                            <v-divider class="mr-1 mt-2"></v-divider>
                                        </v-col>
                                    </v-row>
                                    <div>
                                        <p class="mb-0 pt-7  mb-1"
                                            style="color: #666666; font-size: 9px; font-weight: 469;line-height: 12px;letter-spacing: 0.08em;text-align: left; padding-left: ;">
                                            TOTAL
                                            TRADED VALUE</p>
                                        <p class="mb-0 mt-2 back--text  "
                                            style="font-size: 14px;font-weight: 650;line-height: 12px;letter-spacing: -1px;text-align: left;font-variation-settings: 'slnt' 0;">
                                            No value </p>
                                        <v-divider class="mr-1 mt-2"></v-divider>
                                    </div>
                                    <div>
                                        <p class="mb-0 pt-7 mb-1 "
                                            style="color: #666666; font-size: 9px; font-weight: 469;line-height: 12px;letter-spacing: 0.08em;text-align: left; margin-left: ;">
                                            HIGH -
                                            LOW
                                        </p>
                                        <span class="mb-0 mt-1 back--text "
                                            style="font-size: 11px;font-weight: 650;line-height: 3px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0; padding-top: -100px;">₹{{
                                                data.high }}
                                        </span>
                                        <span class="slidecontainerlist px-1 my-0  py-0">
                                            <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                            <input type="range" min="50" max="2000" class="sliderlist">
                                        </span>
                                        <span class="mb-0 mt-1 back--text "
                                            style="font-size: 11px;font-weight: 650;line-height: 3px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;">
                                            ₹{{ data.low }}</span>
                                        <v-divider class="mr-1 mt-2"></v-divider>
                                    </div>
                                    <div>
                                        <p class="mb-0 pt-5 mb-1 "
                                            style="color: #666666; font-size: 9px; font-weight: 469;line-height: 12px;letter-spacing: 0.08em;text-align: left; margin-left: ;">
                                            52 WEEKS HIGH - 52 WEEKS LOW
                                        </p>
                                        <span class="mb-0 mt-n1 back--text "
                                            style="font-size: 11px;font-weight: 650;line-height: 3px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0; padding-top: -100px;">₹{{
                                                data.high }}
                                        </span>
                                        <span class="slidecontainerlist px-1 my-0  py-0">
                                            <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                            <input type="range" min="50" max="2000" class="sliderlist">
                                        </span>
                                        <span class="mb-0 mt-n1 back--text "
                                            style="font-size: 11px;font-weight: 650;line-height: 3px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;">
                                            ₹{{ data.low }}</span>
                                        <v-divider class="mr-1 mt-1"></v-divider>
                                    </div>
                                </div>
                            </v-col>

                            <v-col lg="8" md="8" sm="12" xs="12" cols="12" class="mt-10 ml-n8 px-lg-7 ">

                                <div class="d-flex "><div class="ml-auto"><div class="d-flex flex-row"><div class="text-right caption font-weight-medium px-3" style="color: #666666;">RETURNS FOR PERIOD  </div><div style="color:rgb(31, 214, 1);">{{ '%'+percentage }}</div></div></div></div>
                                <div ref="linechart"  class=" my-2"></div>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-card v-if="metadata != ''" class="elevation-0  " style="margin-top: 18px;">
                        <div class="d-flex">
                            <div>
                                <span class="" style="margin-left: 30px; font-size: 19px;font-weight: 650;line-height: 16px;letter-spacing: -0.8px;text-align: left;font-variation-settings: 'slnt' 0;">ETFs tracking this Index</span>
                            </div>
                            <div class="ml-auto">
                                <v-btn style=" font-size: 13px;font-weight: 650;line-height: 16px;
                                letter-spacing: -0.2px;text-align: left;ont-variation-settings: 'slnt' 0;" color="#0037B7" :ripple="false" id="no-background-hover"
                                    class="  text-capitalize mr-3" @click="etfcategeries()" text
                                    dense>
                                    See all 22 ETFs
                                </v-btn>
                            </div>
                        </div>
                        <v-row class="scrolldiv mt-4 pr-3 pb-8" style="margin-left: 29px;">
                            <div class="mt-n3" style="overflow: scroll;">
                                <div style="display: inline-flex; overflow: hidden;">
                                    <v-card width="160" v-for="(datas, index) in metadata" :key="index"
                                        class="elevation-0 " style="border: 1px solid #CCCCCC; margin-right: 14px">
                                        <v-row class="">
                                            <v-col>
                                                <div class="d-flex">
                                                  
                                                    <v-card-title class="pa-0">
                                                        <v-tooltip bottom style="width: ;">
                                                            <template  v-slot:activator="{ on }">
                                                                <p style="margin-top: 6px;margin-left: 11px; font-size: 13px;font-weight: 700;line-height: 16px;letter-spacing: -0.8px;text-align: left;font-variation-settings: 'slnt' 0;" class="truncated-text  pr-10" v-on="on">
                                                                    {{ datas.companyName }}
                                                                </p>
                                                            </template>
                                                            <v-card class="tooltipcard" >{{ datas.companyName }}</v-card>
                                                        </v-tooltip>
                                                    </v-card-title>
                                                </div>

                                            </v-col>
                                        </v-row>
                                        <v-row class="mt-n9 pl-3">
                                            <v-col>
                                                <div class="d-flex">
                                                    <div>
                                                        <p class="mt-1"
                                                            style="font-size: 10px;font-weight: 469;line-height: 10px;letter-spacing: 0.5px;text-align: left;font-variation-settings: 'slnt' 0; color: #666666;">
                                                            {{ datas.symbol }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <v-divider :thickness="2" class="border-opacity-100 mt-n7 ml-3"
                                                    color="black" width="20"></v-divider>
                                            </v-col>
                                        </v-row>
                                        <v-row class="" style="margin-top: -41px; padding-left: 11px;">
                                            <v-col>
                                                <div class="d-flex " style="margin-bottom: 5px; font-size: 11px;font-weight: 650;line-height: 16px;letter-spacing: 0em;text-align: right;font-variation-settings: 'slnt' 0;">
                                                    
                                                    <div class="flex-row">
                                                        <p class=" mb-0">{{ datas.ltP }}</p>
                                                    </div>
                                                    <div>
                                                        <p class=" mb-0 ml-1"
                                                            style="color: #43A833;">{{
                                                                datas.chn
                                                            }}%
                                                        </p>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card>

                                </div>
                            </div>
                        </v-row>
                        <v-divider :thickness="2" class="border-opacity-100 mt-2 " color="" width=""></v-divider>
                        <v-card class="mt-6 mx-7 elevation-0" style="padding-left: 2px;">
                            <div class="d-flex">
                                <div>
                                    <p class="mt-2" style="font-size: 19px;font-weight: 650;line-height: 16px;letter-spacing: -0.6px;text-align: left;font-variation-settings: 'slnt' 0;
                                    ">Nifty F&O</p>
                                    <p class="mt-n3" style="font-size: 11px;font-weight: 550;line-height: 14px;letter-spacing: -0.2px;text-align: left;font-variation-settings: 'slnt' 0; color: #666666">Live Nifty Futures & Options data</p>
                                </div>
                                <div class="ml-auto ">
                                    <div class="d-flex flex-row" 
                                        style="outline: 1px solid #DDDDDD; border-radius: 4px; height: 52px; margin-right: 2px;">
                                        <v-card class="elevation-0" style="width: 120px;" :ripple="false"
                                            @click="changeBackground(1)" :class="{ 'gray-background': activeCard === 1 }">
                                            <p class="pt-2 mb-2  text-center"
                                                style="font-size: 10px;font-weight: 469;line-height: 12px;letter-spacing: 0.1px;text-align: left;font-variation-settings: 'slnt' 0; color: #666666">
                                                TOTAL CALL OI</p>
                                            <p class="mt-n1 ml-8 mb-0" style="font-size: 13px;font-weight: 600;line-height: 16px;letter-spacing: -1px;text-align: left;font-variation-settings: 'slnt' 0;">17,88,062</p>
                                        </v-card>
                                        <v-card style="width: 80px;" class="elevation-0 " :ripple="false"
                                            @click="changeBackground(2)" :class="{ 'gray-background': activeCard === 2 }">
                                            <p class="pa-2 mb-0  text-center"
                                                style="font-size: 10px;font-weight: 469;line-height: 12px;letter-spacing: 0.1px;text-align: left;font-variation-settings: 'slnt' 0; color: #666666">
                                                PUT : CALL</p>
                                            <p class="mt-n1 ml-5 mb-2  " style="font-size: 13px;font-weight: 600;line-height: 16px;letter-spacing: -1px;text-align: left;font-variation-settings: 'slnt' 0;">1.23</p>
                                        </v-card>
                                        <v-card class="elevation-0" style="width:100px;" :ripple="false"
                                            @click="changeBackground(3)" :class="{ 'gray-background': activeCard === 3 }">
                                            <p class="pa-2 mb-0  text-center"
                                                style="font-size: 10px;font-weight: 469;line-height: 12px;letter-spacing: 0.1px;text-align: left;font-variation-settings: 'slnt' 0; color: #666666">
                                                TOTAL PUT OI</p>
                                            <p class="mt-n1 ml-5 mb-2 " style="font-size: 13px;font-weight: 600;line-height: 16px;letter-spacing: -1px;text-align: left;font-variation-settings: 'slnt' 0;">17,88,062</p>
                                        </v-card>
                                    </div>
                                </div>
                            </div>
                            <v-row class="mt-5">
                                <v-col lg="6" md="12" sm="12" cols="12" class=" pb-0 pr-3">
                                    <p class="mb-6" style="font-size: 14px;font-weight: 650;line-height: 20px;letter-spacing: -0.8px;text-align: left;font-variation-settings: 'slnt' 0;">Nifty 50 Futures </p>
                                    <div class="" v-for="datas in futvalues" :key="datas.token">
                                        <v-row class="mt-n9">
                                            <v-col cols="7" class="mt-4">
                                                <span class="" style="font-size: 14px;font-weight: 600;line-height: 16px;letter-spacing: -0.4px;text-align: left;font-variation-settings: 'slnt' 0;"> 
                                                    <v-chip
                                                        class="mr-2 px-0   " label  small
                                                        style="height: 10px; background-color: #F1F3F8; width: 34px; font-size: 9px; ">
                                                        <!-- <v-icon style="" >mdi-flag</v-icon> -->
                                                        {{ datas.chip }}
                                                    </v-chip>{{ datas.tsym }}</span>
                                                <p style="color: #999999 ; font-size: 11px;" class=" ml-11 pt-1">
                                                    Expiry
                                                    <span style="color: black; font-weight: 600;">{{ datas.token }}</span>
                                                </p>
                                            </v-col>
                                            <v-col class="" cols="5">
                                                <div class="d-flex mt-5 pl-1">
                                                    <div class="flex-row  ml-6 ">
                                                        <p class="" style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 650;">₹{{ datas.strprc }}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p class=" " style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 650; color: #43A833;">({{
                                                            datas.ti }}%)
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="d-flex  mt-3">
                                                    <div class="flex-row pl-5">
                                                        <p style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 600; color: #999999;" 
                                                            class="mt-n5 ">OI
                                                            <span style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 650; color: black;" >{{ datas.strprc
                                                            }}</span>
                                                        </p>
                                                    </div>
                                                    <div class="mt-n5">

                                                        <p class=" " style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 650; color: #e72626;" >({{
                                                            datas.ti }}%)
                                                        </p>
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-divider class="mr-8 ml-4 mt-n4"></v-divider>
                                        </v-row>
                                    </div>
                                    <v-card class="elevation-0 ma-1 text-center">
                                        <v-btn :ripple="false" color="#0037B7" @click="showmore"
                                            class="body-2 font-weight-bold text-capitalize" text dense>
                                            <img class="pr-1" src="@/assets/button3.svg" />
                                            Nifty
                                            50
                                            Futures</v-btn>
                                    </v-card>
                                </v-col>
                                <v-col lg="6" md="12" sm="12" cols="12" class=" pb-0 pl-7">
                                    <p class="mb-6" style="font-size: 14px;font-weight: 650;line-height: 20px;letter-spacing: -0.8px;text-align: left;font-variation-settings: 'slnt' 0;">Nifty 50 Options </p>
                                    <div class="" v-for="datas in futvalues" :key="datas.token">
                                        <v-row class="mt-n9">
                                            <v-col cols="7" class="mt-4">
                                                <span class="" style="font-size: 14px;font-weight: 600;line-height: 16px;letter-spacing: -0.4px;text-align: left;font-variation-settings: 'slnt' 0;"> 
                                                    <v-chip
                                                        class="mr-2 px-0   " label  small
                                                        style="height: 10px; background-color: #F1F3F8; width: 34px; font-size: 9px; ">
                                                        <!-- <v-icon style="" >mdi-flag</v-icon> -->
                                                        {{ datas.chip }}
                                                    </v-chip>{{ datas.tsym }}</span>
                                                <p style="color: #999999 ; font-size: 11px;" class=" ml-11 pt-1">
                                                    Volume
                                                    <span style="color: black; font-weight: 600;">{{ datas.token }}</span>
                                                </p>
                                            </v-col>
                                            <v-col class="" cols="5">
                                                <div class="d-flex mt-5 pl-1">
                                                    <div class="flex-row  ml-6 ">
                                                        <p class="" style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 650;">₹{{ datas.strprc }}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p class=" " style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 650; color: #43A833;">({{
                                                            datas.ti }}%)
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="d-flex  mt-3">
                                                    <div class="flex-row pl-5">
                                                        <p style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 600; color: #999999;" 
                                                            class="mt-n5 ">OI
                                                            <span style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 650; color: black;" >{{ datas.strprc
                                                            }}</span>
                                                        </p>
                                                    </div>
                                                    <div class="mt-n5">

                                                        <p class=" " style="font-size: 11px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;font-weight: 650; color: #e72626;" >({{
                                                            datas.ti }}%)
                                                        </p>
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-divider class="mr-7 ml-3 mt-n4"></v-divider>
                                        </v-row>
                                    </div>
                                    <v-card class="elevation-0 ma-1 text-center">
                                        <v-btn :ripple="false" color="#0037B7" @click="showmore"
                                            class="body-2 font-weight-bold text-capitalize" text dense>
                                            <img class="pr-1" src="@/assets/button2sindex.svg"/>
                                            Nifty
                                            50
                                            Futures</v-btn>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-card>
                </div>
                <div v-if="tablevalue != ''">
                    <div>
                        <p class="title font-weight-bold ml-1 mt-12">Nifty 50 companies</p>
                    </div>
                    <!-- ................................SEO................................... -->

                    <v-data-table hide-default-header :headers="mutualfundheaders" :items="tablevalue"
                        :items-per-page="perpage" item-key="id" v-model="selectedRows" class="elevation-0 mt-6 ml-1"
                        hide-default-footer style="background-color:white; outline: 1px #DDDDDD solid;">

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
                                        style="color:#666666 ; font-size: 12px; font-weight: 469; line-height: 14px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0;">
                                        Scrips</span></th>
                                <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                        style="color:#666666 ; font-size: 12px; font-weight: 469; line-height: 14px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0;">Sector</span>
                                </th>
                                <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                        style="color:#666666 ; font-size: 12px; font-weight: 469; line-height: 14px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0;">Weight%</span>
                                </th>
                                <th class="text-start"><span class="pl-2 pt-1 pb-1"
                                        style="color:#666666 ; font-size: 12px; font-weight: 469; line-height: 14px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0;">Mkt
                                        cap (cr)</span></th>
                                <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                        style="color:#666666 ; font-size: 12px; font-weight: 469; line-height: 14px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0;">Volume
                                        (k)</span></th>
                                <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                        style="color:#666666 ; font-size: 12px; font-weight: 469; line-height: 14px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0;">Price</span>
                                </th>
                                <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                        style="color:#666666 ; font-size: 12px; font-weight: 469; line-height: 14px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0;">%Chg</span>
                                </th>
                                <th>
                                    <v-menu transition="slide-x-transition" bottom right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn dark class="ml-auto" icon v-bind="attrs" v-on="on">
                                                <v-icon size="20" color="black">mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        </template>

                                        <v-list>
                                            <v-list-item v-for="(item, i) in items" :key="i">
                                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </th>

                            </tr>


                        </template>

                        <template v-slot:item="{ item }">


                            <tr class="" style="background-color: ;position: relative;" @mouseover="selectItem(item)"
                                @mouseleave="unSelectItem(item)">

                                <td class=" pb-4 pt-2"
                                    style="color: #000000;width:290px;font-family: Inter V;font-size: 14px;font-weight: 559;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;">
                                    <!-- <div class="" > -->
                                    <p class="" style="width: 195px; "> {{ item.TradingSymbol_x }}</p>

                                    <div class="display-flex row pt-1 pb-1">
                                        <v-card v-if="item.NEWS == 'NEWS'" height="20px" width=""
                                            class="pl-2 pr-2 pb-1 ml-2" elevation="0" color="#F1F3F8">
                                            <p class="font-weight-medium mb-0 "
                                                style="color:#666666;font-size:9px;margin-top: 3px;">
                                                <img class="mt-n1" src="@/assets/note.svg" />

                                                {{ item.NEWS }}
                                            </p>
                                        </v-card>


                                        <v-card v-if="item.ALERT == 'ALERT'" height="20px" width=""
                                            class="pl-2 pr-2 pb-1 ml-2" elevation="0" color="#F1F3F8">
                                            <p class="font-weight-medium mb-0 "
                                                style="color:#666666;font-size:9px;margin-top: 3px;">
                                                <img class="mt-n1" src="@/assets/cal.svg" />

                                                {{ item.ALERT }}
                                            </p>
                                        </v-card>

                                        <v-card v-if="item.EVENT == 'EVENT'" height="20px" width=""
                                            class="pl-2 pr-2 pb-1 ml-2" elevation="0" color="#F1F3F8">
                                            <p class="font-weight-medium mb-0 "
                                                style="color:#666666;font-size:9px;margin-top: 3px;">
                                                <img class="mt-n1" src="@/assets/flag.svg" />

                                                {{ item.EVENT }}
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
                                                style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;"><img
                                                    alt="" class="shrink " :src="require('@/assets/tradingsymbol.svg')"
                                                    width="15px" /></v-btn>
                                            <v-btn class="ml-1 pa-0  elevation-0" outlined small
                                                style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;"
                                                color="#43A833">
                                                <img alt="" class="shrink " :src="require('@/assets/tradinnote.svg')"
                                                    width="12px" /></v-btn>
                                            <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                                                style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;"> <v-icon
                                                    color="#666666" size="20">mdi-dots-horizontal</v-icon></v-btn>
                                            <!-- </div> -->
                                        </div>
                                    </div>
                                </td>
                                <td class=" pr-0" style="width: 10px"> <span class=""
                                        style="font-size:13px; color:#000000; font-weight: 469; line-height: 16px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0; ">{{
                                            item.Sector }}</span>
                                </td>
                                <td><span class=""
                                        style="font-family: Inter V;font-size: 13px;font-weight: 469;line-height: 16px;letter-spacing: 0em;text-align: left;font-variation-settings: 'slnt' 0;color:#000000">{{
                                            item.TERval }}%</span>
                                </td>
                                <td class="pr-0 pl-2"><span class=""
                                        style="font-family: Inter V; font-size: 13px; font-weight: 469; line-height: 16px; letter-spacing: 0em;text-align: left; font-variation-settings: 'slnt' 0; color:#000000">{{
                                            item.MinInvest }}<span style="color: #666666;">Cr</span></span></td>

                                <td class="pr-0"><span class="font-weight-medium"
                                        style=" font-family: Inter V; font-size: 13px; font-weight: 469; line-height: 16px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0; color:#000000">{{
                                            item.vol
                                        }}<span style="color: #666666;">k</span></span></td>

                                <td>
                                    <span class=""
                                        style=" font-family: Inter V; font-size: 13px; font-weight: 469; line-height: 16px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0; color: #000000;">₹{{
                                            item.lp }} </span>
                                </td>




                                <td class="pr-0 " v-if="item.ch = item.close - item.low > 0">
                                    <span class="text-wrap  ml-"
                                        style="color:#43A833 !important; font-family: Inter V; font-size: 13px; font-weight: 469; line-height: 16px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0; ">+{{
                                            (item.ch = item.close -
                                                item.low).toFixed(2) }} %</span>
                                </td>
                                <td class="pr-0" v-else><span class=""
                                        style="color:red !important; font-family: Inter V; font-size: 13px; font-weight: 469; line-height: 16px; letter-spacing: 0em; text-align: left; font-variation-settings: 'slnt' 0; ">
                                        {{ (item.ch = item.close - item.low).toFixed(2) }} %</span></td>

                                <td>

                                </td>

                            </tr>
                        </template>

                    </v-data-table>
                    <v-card v-if="showmore2" class="elevation-0 mt-0 text-center " style="outline: 1px solid #e7e7e7;">
                        <v-btn id="no-background-hover" :ripple="false" color="#0037B7" @click="showmore"
                            class="body-2 font-weight-bold text-capitalize" text dense>See
                            more companies</v-btn>
                    </v-card>
                    <v-card v-if="showmore23" class="elevation-0 mt-0 text-center" style="outline: 1px solid #e7e7e7;">
                        <v-btn id="no-background-hover" :ripple="false" color="#0037B7" @click="showmore1"
                            class="body-2 font-weight-bold text-capitalize" text dense>See
                            less companies</v-btn>
                    </v-card>

                </div>

            </v-col>
            <v-col class=" pa-0 pl-2 pr-3" lg="3" md="3" sm="3" xs="12" >
                <div class="d-flex mb-3">
                    <p class="" style="font-size: 15px;font-weight: 650;line-height: 16px;letter-spacing: -0.6px;text-align: left;font-variation-settings: 'slnt' 0;">Top NIFTY 50 Options</p>
                    <v-menu bottom left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn dark class="ml-auto mt-n3 mr-n3" icon v-bind="attrs" v-on="on">
                                <v-icon size="20" color="black">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <!-- <v-icon class="ml-auto mt-n3">mdi-dots-vertical</v-icon> -->
                </div>
                <div v-for="datas in data2" :key="datas.title">
                    <div class="d-flex mt-1">
                        <div>
                            <v-chip class="mb-2 mr-2" label style="height: 14px; background-color: #F1F3F8; font-size: 9px">
                                {{ datas.chip }}
                            </v-chip>
                        </div>
                        <div class="">
                            <p class="mb-0"
                                style="font-family: Inter V; font-size: 13px; font-weight: 600; line-height: 16px; letter-spacing: -0.4px;text-align: left; font-variation-settings: 'slnt' 0; ">
                                {{ datas.title }}</p>
                        </div>
                        <div class="ml-auto ">
                            <p style="font-size: 11.5px;font-weight: 600;line-height: 16px;letter-spacing: -0.4px;text-align: left;font-variation-settings: 'slnt' 0;"
                                class="mb-0">{{ datas.price }}
                                <span v-if="datas.per > 0" style="color: #43A833;" class="">( {{
                                    datas.per }} % )
                                </span>
                                <span v-if="datas.per < 0" style="color: #e72626;" class="">( {{
                                    datas.per }} % )
                                </span>
                            </p>
                        </div>
                    </div>
                    <v-divider class="mb-4"></v-divider>
                </div>
                <div class="text-center my-2">
                    <v-btn id="no-background-hover" :ripple="false" color="#0037B7"
                        class=" text-capitalize body-2 font-weight-bold" text dense>
                        <img class="mt-n1" src="@/assets/button.svg" />
                        <p class="mt-2 ml-2">Option chain</p>
                    </v-btn>
                    <v-divider class=" "></v-divider>
                </div>
            </v-col>
        </v-row>


        <!-- //Etf categeries -->
        <div v-if="etfpage">
            <EtfList />

        </div>

        <!-- </v-container> -->
    </div>
</template>

<script>
import axios from 'axios'
import EtfList from '../Stocks pages/EtfList.vue'
import { createChart } from "lightweight-charts";
// import { getetfdata } from '../../apiurl'
import { api } from '../../apiUrl.js'

export default {
    components: { EtfList },
    data() {
        return {
            firstmonth: [],
            sor: [],
            todayDate: 0,
            d: 0,
            month: '',
            chartexch: '',
            exchnamechart: '',
            percentage: 0,
            sigleindex: true,
            etfpage: false,
            selectedItem: false,
            showmore2: true,
            showmore23: false,
            perpage: 8,
            activeCard: 2,
            // api
            metadata: [],
            topvalue: [],
            tablevalue: [],
            futvalues: [],
            excforapi: '',
            tknforapi: '',
            groups: [
                {
                    id: 1,
                    title: "Fund category",
                    lsi: " items",
                    items: [
                        { id: 1, title: "Debt funds", selected: false },
                        { id: 2, title: "Hybrid funds", selected: false },
                        { id: 3, title: "Equity funds ", selected: false },
                        { id: 3, title: "Sectoral funds", selected: false },
                        { id: 3, title: "Other funds", selected: false },
                    ],
                },
                {
                    id: 2,
                    title: "Asset manager",
                    lsi: "items",
                    items: [
                        { id: 1, title: "Debt funds", selected: false },
                        { id: 2, title: "Hybrid funds", selected: false },
                        { id: 3, title: "Equity funds ", selected: false },
                        { id: 3, title: "Sectoral funds", selected: false },
                        { id: 3, title: "Other funds", selected: false },
                    ],
                },
                {
                    id: 3,
                    title: "Sub category",
                    lsi: "items",
                    items: [
                        { id: 1, title: "Debt funds", selected: false },
                        { id: 2, title: "Hybrid funds", selected: false },
                        { id: 3, title: "Equity funds ", selected: false },
                        { id: 3, title: "Sectoral funds", selected: false },
                        { id: 3, title: "Other funds", selected: false },
                    ],
                },
                {
                    id: 4,
                    title: "Dividend type",
                    lsi: "items",
                    items: [
                        { id: 1, title: "Debt funds", selected: false },
                        { id: 2, title: "Hybrid funds", selected: false },
                        { id: 3, title: "Equity funds ", selected: false },
                        { id: 3, title: "Sectoral funds", selected: false },
                        { id: 3, title: "Other funds", selected: false },
                    ],
                },
                {
                    id: 5,
                    title: "Expense ratio",
                    lsi: "items",
                    items: [
                        { id: 1, title: "Debt funds", selected: false },
                        { id: 2, title: "Hybrid funds", selected: false },
                        { id: 3, title: "Equity funds ", selected: false },
                        { id: 3, title: "Sectoral funds", selected: false },
                        { id: 3, title: "Other funds", selected: false },
                    ],
                },
            ],
            data: [
                {
                    title: "Nippon India ETF Nifty BeES",
                    sub: "NIFTYBEES",
                    num: "201.08",
                    num2: "+0.19%s",
                },
                {
                    title: "ICICI Prudential Nifty ETF",
                    sub: "ICICINIFTY",
                    num: "201.08",
                    num2: "+0.19%s",
                },
                {
                    title: "Mirae Asset Nifty 50 ETF",
                    sub: "MAN50ETF",
                    num: "201.08",
                    num2: "+0.19%s",
                },
                {
                    title: "UTI-Nifty Exchange Traded Fund",
                    sub: "UTINIFTETF",
                    num: "201.08",
                    num2: "+0.19%s",
                },
                {
                    title: "HDFC Nifty 50",
                    sub: "HDFCNIFETF",
                    num: "201.08",
                    num2: "+0.19%s",
                },
                {
                    title: "UTI-Nifty Exchange Traded Fund",
                    sub: "UTINIFTETF",
                    num: "201.08",
                    num2: "+0.19%s",
                },

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
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],


            //  ................................SEO...................................
            mutualfundheaders: [
                {
                    text: "Scrips",
                    align: "left",
                    sortable: false,
                    value: "Fundname", class: "successScrips"
                },
                { text: "Sector", sortable: false, value: "calories", class: "successtitle" },
                { text: "Weight%", sortable: false, value: "calories", class: "successvolume" },
                { text: "Mkt cap (cr)", sortable: false, value: "carbs", class: "successprice" },
                { text: "Volume (k)", sortable: false, value: "protein", class: "successchg" },
                { text: "Price", sortable: false, value: "iron", class: "successma" },
                { text: "%Chg", sortable: false, value: "iron", class: "successma" },

            ],
            mutualfunditems: [
                {
                    id: 1,
                    Fundname: "Reliance industries",
                    AUMval: "Oil & Gas",
                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    price: "₹236.05",
                    ALERT: "ALERT",
                    EVENT: "EVENT"
                },
                {
                    id: 2,
                    Fundname: "HCL Technologies",
                    AUMval: "IT services",
                    price: "₹236.05",

                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: -1.65,
                    NEWS: "NEWS",

                },
                {
                    id: 3,
                    Fundname: "Tata Motors",
                    AUMval: "Autos",
                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    price: "₹236.05",

                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    NEWS: "NEWS",
                    EVENT: "EVENT"

                },
                {
                    id: 4,
                    Fundname: "HDFC bank",
                    AUMval: "Telecom",
                    price: "₹236.05",

                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: -1.65,
                    ALERT: "ALERT",
                    EVENT: "EVENT"
                },
                {
                    id: 5,
                    Fundname: "Delhivery",
                    AUMval: "Banks",
                    TERval: "10.63%",
                    price: "₹236.05",

                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    NEWS: "NEWS",

                },
                {
                    id: 6,
                    Fundname: "Laurus Labs",
                    AUMval: "Logistics",
                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    price: "₹236.05",

                    NEWS: "NEWS",
                    EVENT: "EVENT"
                },
                {
                    id: 6,
                    Fundname: "Indian Hotels",
                    AUMval: "Oil & Gas",
                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: -1.65,
                    NEWS: "NEWS",
                    EVENT: "EVENT",
                    price: "₹236.05",

                },
                {
                    id: 6,
                    Fundname: "HDFC bank",
                    AUMval: "Hospitality",
                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    NEWS: "NEWS",
                    EVENT: "EVENT",
                    price: "₹236.05",

                },
                {
                    id: 6,
                    Fundname: "Delhivery",
                    AUMval: "Oil & Gas",
                    TERval: "10.63%",
                    price: "₹236.05",

                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    NEWS: "NEWS",
                },
                {
                    id: 6,
                    Fundname: "Laurus Labs",
                    AUMval: "Healthcare",
                    TERval: "10.63%",
                    price: "₹236.05",

                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    NEWS: "NEWS",
                    EVENT: "EVENT"
                },
                {
                    id: 6,
                    Fundname: "Indian Hotels",
                    AUMval: "IT services",
                    TERval: "10.63%",
                    price: "₹236.05",

                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: -1.65,
                    NEWS: "NEWS",
                    EVENT: "EVENT"
                },
                {
                    id: 6,
                    Fundname: "Indian Hotels",
                    AUMval: "Autos",
                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    price: "₹236.05",

                    threeyrCAGR: +1.65,
                    NEWS: "NEWS",
                },
                {
                    id: 7,
                    Fundname: "Delhivery",
                    AUMval: "Telecom",
                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    price: "₹236.05",

                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    NEWS: "NEWS",
                    EVENT: "EVENT"

                },
                {
                    id: 8,
                    Fundname: "Indian Hotels",
                    AUMval: "Banks",
                    price: "₹236.05",

                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    ALERT: "ALERT",
                    EVENT: "EVENT"
                },
                {
                    id: 9,
                    Fundname: "Reliance industries",
                    AUMval: "Logistics",
                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    price: "₹236.05",

                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    NEWS: "NEWS",
                    ALERT: "ALERT",
                },
                {
                    id: 10,
                    Fundname: "Laurus Labs",
                    AUMval: "Healthcare",
                    TERval: "10.63%",
                    price: "₹236.05",


                    MinInvest: "₹29,534 ",
                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: +1.65,
                    NEWS: "NEWS",
                    EVENT: "EVENT"
                },
                {
                    id: 11,
                    Fundname: "HCL Technologies",
                    AUMval: "Hospitality",
                    TERval: "10.63%",
                    MinInvest: "₹29,534 ",
                    price: "₹236.05",

                    oneyearCAGR: "14,968 k",
                    threeyrCAGR: -1.65,
                    ALERT: "ALERT",
                    EVENT: "EVENT"
                },


            ],
            //  ................................SEO...................................
        }
    },
    mounted() {
        this.topDetails();

        this.Underlying();
        this.singleindex();
        this.tablesingle();
    },
    props: ['message'],
    methods: {
        Underlying() {
            const axios = require('axios');
            let data = JSON.stringify({
                "symbolName": this.message
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api}/getetfdata`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let data = response.data
                    // console.log(data);
                    let data1 = data[0]
                    this.under = data1.underlying
                    // console.log(this.under);
                    // for (let i = 0; i < this.under.length; i++) {
                    //     let symdata = this.under[i].SYMDATA
                    //     let meta = symdata.meta
                    //     this.metadata[i]['chn'] = symdata.chn
                    //     this.metadata[i]['ltP'] = symdata.ltP
                    //     this.metadata[i]['companyName'] = meta.companyName
                    //     this.metadata[i]['symbol'] = meta.symbol

                    // }
                    for (let i = 0; i < this.under.length; i++) {
                        let symdata = this.under[i].SYMDATA;
                        let meta = symdata.meta;

                        this.metadata.push({
                            chn: symdata.chn,
                            ltP: symdata.ltP,
                            companyName: meta.companyName,
                            symbol: meta.symbol
                        })
                    }
                    // console.log("meta data", this.metadata)
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        singleindex() {
            const axios = require('axios');
            let data = JSON.stringify({
                "indexName": this.message
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api}/getindexdata`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    // console.log(JSON.stringify(response.data));
                    let data = response.data
                    console.log("zxc", data);

                })
                .catch((error) => {
                    console.log(error);
                });

        },
        topDetails() {
            // this.chartexch='';
            // this.exchnamechart='';
            let axiosThis = this
            let data = JSON.stringify({
                "indexName": axiosThis.message
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api}/getindexdetails`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    let data = response.data
                    axiosThis.topvalue = data
                    console.log("qweewqqwe", axiosThis.topvalue)
                    for (const ele of data) {
                        axiosThis.chartexch = ele.Exchange;
                        axiosThis.exchnamechart = ele.idxname;

                        axiosThis.percentage = ele.percentChange
                    }
                    axiosThis.excforapi = axiosThis.topvalue[0].Exchange

                    axiosThis.tknforapi = axiosThis.topvalue[0].token
                    console.log("getindexdetails", axiosThis.excforapi, axiosThis.tknforapi)

                    // this.tknforapi = tkn
                    console.log("getindexdetails",)

                    console.log(axiosThis.chartexch)
                    axiosThis.allchart();
                    axiosThis.futDetails();

                })
                .catch((error) => {
                    console.log(error);
                });
        },
        tablesingle() {
            const axios = require('axios');
            let data = JSON.stringify({
                "indexName": this.message
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api}/getindexdata`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(response.data);
                    let data = response.data
                    console.log("data1234", data);
                    this.tablevalue = data
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        futDetails() {
            let data = JSON.stringify({
                // "exchange": "NSE",
                // "token": "26000"
                "exchange": this.excforapi,
                "token": this.tknforapi,
            });
            console.log("getindexdetails", this.excforapi, this.tknforapi)

            console.log("getindexdetails gggg", data);
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${api}/getoptionfutData`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            let axiosThis = this;
            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    let fut = response.data
                    console.log("futtttr", fut);
                    axiosThis.futvalues = fut.values
                    console.log("futttttt", axiosThis.futvalues);
                })
                .catch((error) => {
                    console.log(error);
                });





        },
        etfcategeries() {
            this.etfpage = true
            this.sigleindex = false
        },

        selectItem(item) {
            this.selectedItem = item
        },
        unSelectItem() {
            this.selectedItem = false
        },
        showmore() {
            this.perpage = this.tablevalue.length
            this.showmore2 = !this.showmore2
            this.showmore23 = !this.showmore23
        },
        showmore1() {
            this.perpage = 8
            this.showmore2 = !this.showmore2
            this.showmore23 = !this.showmore23
        },
        changeBackground(cardNumber) {
            this.activeCard = cardNumber;
        },
        allchart() {
            // console.log()
            this.datalinechart = [];
            // this.chart1=[];
            this.chartOptions1 = [];
            this.lineSeries1 = [];
            this.chartOptions1 = {
                height: 300,
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
                //   timeScale: {
                // timeVisible: true,
                // } ,
                // Add your chart options for chart 1 here
            };

            this.chart1 = createChart(this.$refs.linechart, this.chartOptions1);

            this.lineSeries1 = this.chart1.addLineSeries({

                lineColor: 'rgba(0, 120, 255, 1)',
                lineWidth: 2,
                crosshairMarkerVisible: true,
                // crosshairMarkerRadius: 4,

            });
            this.totallinechart()


        },
        totallinechart(val) {
            // this.firstLoad=true;
            this.month = val
            this.datalinechart = [];
            this.firstmonth = [];
            this.sor = [];
            this.todayDate = 0;
            this.d = 0;
            this.apidata = [];
            console.log('this.values', `"${this.chartexch + ':' + this.exchnamechart}"`)
            const axios = require('axios');
            if (this.month == '1M') {
                // this.sor=[];
                // this.firstmonth=[];
                // this.todayDate =0;

                this.todayDate = new Date().toISOString().slice(0, 10);
                this.d = new Date(this.todayDate);
                this.d.setMonth(this.d.getMonth() - 1);
                const onemonth = this.d.toISOString().slice(0, 10)
                // console.log(todayDate)
                // console.log(Date.parse(onemonth)/1000 +19800);
                // console.log(Date.parse(todayDate)/1000 + 19800)
                // var axiosthis = this;
                let data = JSON.stringify({
                    // "symbol":"NSE:Nifty 50",
                    "symbol": `${this.chartexch + ':' + this.exchnamechart}`,
                    //   "start": 1687868553,
                    //   "end": 1688534153,
                    start: Date.parse(onemonth) / 1000 + 19800,
                    end: Date.parse(this.todayDate) / 1000 + 19800,

                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${api}/getchartData`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        console.log('responses 1', response.data)

                        this.firstmonth = response.data.map((val) => {
                            const dataes = JSON.parse(val)
                            // console.log(dataes["time"],'time')

                            return { time: parseFloat(dataes['ssboe']), value: parseFloat(dataes['intc']) }
                        });
                        this.sor = this.firstmonth.sort(function (a, b) { return a.time - b.time }
                        );

                        this.lineSeries1.setData(this.sor);
                        // })
                    })
                    .catch((error) => {
                        console.log(error);
                    });


            }
            else if (this.month == '3M') {
                this.todayDate = new Date().toISOString().slice(0, 10);
                this.d = new Date(this.todayDate);
                this.d.setMonth(this.d.getMonth() - 3);
                const threemonth = this.d.toISOString().slice(0, 10)
                console.log(threemonth, this.todayDate)
                // console.log(Date.parse(defalt)/1000 +19800);
                // console.log(Date.parse(todayDate)/1000 + 19800)
                // var thirdthis = this;
                let data = JSON.stringify({
                    // "symbol":"NSE:Nifty 50",
                    "symbol": `${this.chartexch + ':' + this.exchnamechart}`,
                    //   "start": 1687868553,
                    //   "end": 1688534153,
                    start: Date.parse(threemonth) / 1000 + 19800,
                    end: Date.parse(this.todayDate) / 1000 + 19800,

                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${api}/getchartData`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        console.log('responses 3', response.data)

                        this.firstmonth = response.data.map((val) => {
                            const dataes = JSON.parse(val)
                            // console.log(dataes["time"],'time')

                            return { time: parseFloat(dataes['ssboe']), value: parseFloat(dataes['intc']) }
                        });
                        this.sor = this.firstmonth.sort(function (a, b) { return a.time - b.time }
                        );

                        this.lineSeries1.setData(this.sor);
                        // })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                // this.chart()
            } else if (this.month == '6M') {
                this.todayDate = new Date().toISOString().slice(0, 10);
                this.d = new Date(this.todayDate);
                this.d.setMonth(this.d.getMonth() - 6);
                const sixmonth = this.d.toISOString().slice(0, 10)
                console.log(sixmonth, this.todayDate);
                // console.log(Date.parse(defalt)/1000 +19800);
                // console.log(Date.parse(todayDate)/1000 + 19800)
                // var sixththis = this;
                let data = JSON.stringify({
                    // "symbol":"NSE:Nifty 50",
                    "symbol": `${this.chartexch + ':' + this.exchnamechart}`,
                    //   "start": 1687868553,
                    //   "end": 1688534153,
                    start: Date.parse(sixmonth) / 1000 + 19800,
                    end: Date.parse(this.todayDate) / 1000 + 19800,

                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${api}/getchartData`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        console.log('responses', response.data)

                        this.firstmonth = response.data.map((val) => {
                            const dataes = JSON.parse(val)
                            // console.log(dataes["time"],'time')

                            return { time: parseFloat(dataes['ssboe']), value: parseFloat(dataes['intc']) }
                        });
                        this.sor = this.firstmonth.sort(function (a, b) { return a.time - b.time }
                        );

                        this.lineSeries1.setData(this.sor);
                        // })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else if (this.month == '1YR') {
                this.todayDate = new Date().toISOString().slice(0, 10);
                this.d = new Date(this.todayDate);
                this.d.setMonth(this.d.getMonth() - 12);
                const oneyearmonth = this.d.toISOString().slice(0, 10)
                console.log(oneyearmonth, this.todayDate);
                // console.log(Date.parse(defalt)/1000 +19800);
                // console.log(Date.parse(todayDate)/1000 + 19800)
                // var firtyearthis = this;
                let data = JSON.stringify({
                    // "symbol":"NSE:Nifty 50",
                    "symbol": `${this.chartexch + ':' + this.exchnamechart}`,
                    //   "start": 1687868553,
                    //   "end": 1688534153,
                    start: Date.parse(oneyearmonth) / 1000 + 19800,
                    end: Date.parse(this.todayDate) / 1000 + 19800,

                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${api}/getchartData`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        console.log('responses 1y', response.data)

                        this.firstmonth = response.data.map((val) => {
                            const dataes = JSON.parse(val)
                            // console.log(dataes["time"],'time')

                            return { time: parseFloat(dataes['ssboe']), value: parseFloat(dataes['intc']) }
                        });
                        this.sor = this.firstmonth.sort(function (a, b) { return a.time - b.time }
                        );

                        this.lineSeries1.setData(this.sor);
                        // })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else if (this.month == '3YR') {
                this.todayDate = new Date().toISOString().slice(0, 10);
                this.d = new Date(this.todayDate);
                this.d.setMonth(this.d.getMonth() - 36);
                const threeyearmonth = this.d.toISOString().slice(0, 10)
                console.log(threeyearmonth, this.todayDate);
                // console.log(Date.parse(defalt)/1000 +19800);
                // console.log(Date.parse(todayDate)/1000 + 19800)
                // var thirdyearthis = this;
                let data = JSON.stringify({
                    // "symbol":"NSE:Nifty 50",
                    "symbol": `${this.chartexch + ':' + this.exchnamechart}`,
                    //   "start": 1687868553,
                    //   "end": 1688534153,
                    start: Date.parse(threeyearmonth) / 1000 + 19800,
                    end: Date.parse(this.todayDate) / 1000 + 19800,

                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${api}/getchartData`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        console.log('responses 3', response.data)

                        this.firstmonth = response.data.map((val) => {
                            const dataes = JSON.parse(val)
                            // console.log(dataes["time"],'time')

                            return { time: parseFloat(dataes['ssboe']), value: parseFloat(dataes['intc']) }
                        });
                        this.sor = this.firstmonth.sort(function (a, b) { return a.time - b.time }
                        );

                        this.lineSeries1.setData(this.sor);
                        // })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            else if (this.month == '5YR') {
                this.todayDate = new Date().toISOString().slice(0, 10);
                this.d = new Date(this.todayDate);
                this.d.setMonth(this.d.getMonth() - 60);
                const fiveyearmonth = this.d.toISOString().slice(0, 10)
                console.log(fiveyearmonth, this.todayDate);
                // console.log(Date.parse(defalt)/1000 +19800);
                // console.log(Date.parse(todayDate)/1000 + 19800)
                // var fifthyearthis = this;
                let data = JSON.stringify({
                    // "symbol":"NSE:Nifty 50",
                    "symbol": `${this.chartexch + ':' + this.exchnamechart}`,
                    //   "start": 1687868553,
                    //   "end": 1688534153,
                    start: Date.parse(fiveyearmonth) / 1000 + 19800,
                    end: Date.parse(this.todayDate) / 1000 + 19800,

                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${api}/getchartData`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        console.log('responses 5', response.data)

                        this.firstmonth = response.data.map((val) => {
                            const dataes = JSON.parse(val)
                            // console.log(dataes["time"],'time')

                            return { time: parseFloat(dataes['ssboe']), value: parseFloat(dataes['intc']) }
                        });
                        this.sor = this.firstmonth.sort(function (a, b) { return a.time - b.time }
                        );

                        this.lineSeries1.setData(this.sor);
                        // })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else if (this.month == 'MAX') {
                this.todayDate = new Date().toISOString().slice(0, 10);
                this.d = new Date(this.todayDate);
                this.d.setMonth(this.d.getMonth() - 120);
                const defaltmonth = this.d.toISOString().slice(0, 10)
                // console.log(todayDate)
                console.log(Date.parse(this.todayDate) / 1000 + 19800);
                console.log(Date.parse(defaltmonth) / 1000 + 19800)
                // var tenthis = this;
                let data = JSON.stringify({
                    // "symbol":"NSE:Nifty 50",
                    "symbol": `${this.chartexch + ':' + this.exchnamechart}`,
                    //   "start": 1687868553,
                    //   "end": 1688534153,
                    start: Date.parse(defaltmonth) / 1000 + 19800,
                    end: Date.parse(this.todayDate) / 1000 + 19800,

                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${api}/getchartData`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        // console.log('res',response)

                        this.firstmonth = response.data.map((val) => {
                            // console.log(val)
                            const dataes = JSON.parse(val)
                            // console.log(dataes["time"],'time')

                            return { time: parseFloat(dataes['ssboe']), value: parseFloat(dataes['intc']) }
                        });

                        this.sor = this.firstmonth.sort(function (a, b) { return a.time - b.time }
                        );

                        this.lineSeries1.setData(this.sor);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {

                this.todayDate = new Date().toISOString().slice(0, 10);
                this.d = new Date(this.todayDate);
                this.d.setMonth(this.d.getMonth() - 1);
                const defaltmonth = this.d.toISOString().slice(0, 10)
                // console.log(todayDate)
                // console.log(Date.parse(defalt)/1000 +19800);
                // console.log(Date.parse(todayDate)/1000 + 19800)
                // var defalutthis = this;

                let data = JSON.stringify({
                    // "symbol":"NSE:Nifty 50",
                    "symbol": `${this.chartexch + ':' + this.exchnamechart}`,
                    //   "start": 1687868553,
                    //   "end": 1688534153,
                    start: Date.parse(defaltmonth) / 1000 + 19800,
                    end: Date.parse(this.todayDate) / 1000 + 19800,

                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `${api}/getchartData`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        // console.log('res',response)

                        this.firstmonth = response.data.map((val) => {
                            // console.log(val)
                            const dataes = JSON.parse(val)
                            // console.log(dataes["time"],'time')

                            return { time: parseFloat(dataes['ssboe']), value: parseFloat(dataes['intc']) }
                        });

                        this.sor = this.firstmonth.sort(function (a, b) { return a.time - b.time }
                        );

                        this.lineSeries1.setData(this.sor);
                        // })
                        // axiosthis.firstLoad=false;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

        },
    }
}
</script>
<style>
.slidecontainer {
    width: 60%;
}
.truncated-text {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to three lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  
}
.truncated-head {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to three lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  
}
.slider {
    -webkit-appearance: none;
    width: 80%;
    height: 3px;
    background: #a3a3a3;
    /* border: 2px solid rgba(222, 226, 235, 1); */
    /* border-radius: 12px; */
    /* outline: none; */
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;

}

.slidecontainerlist {
    width: 60%;
}

.sliderlist {
    -webkit-appearance: none;
    width: 33%;
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
    width: 8px;
    height: 8px;
    /* background: linear-gradient(0deg, #5c92f7, #4c80e2),
    linear-gradient(0deg, #BDD0F4, #dce8ff); */
    border-radius: 12px;
    background-color: black;
    cursor: pointer;
    border: 1px solid rgb(0, 0, 0)
}

.scrolldiv {
    ::-webkit-scrollbar {
        display: none !important;
    }
}

.postionchange {
    position: absolute !important;
    top: 25px !important;
    left: 170px !important;
    right: 200px
}

.gray-background {
    background-color: #CCCCCC;
    transition: background-color 0.5s ease-in-out;
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

#no-background-hover::before {
    background-color: transparent !important;
}

.v-tabs:not(.v-tabs--vertical) .v-tab {

    min-width: 50px !important;

}
.tooltipcard{
    width: 120px !important;
    background-color: transparent !important;
    color: white !important;
}
</style>

