<template>
    <v-container class="px-0">
        
        <v-row class="">
            <v-col cols="9">
                <div style="outline: 1px #DDDDDD solid;">
                    <v-card color="#FAFBFF" class="elevation-0">
                        <v-row class="ml-1">
                            <v-col cols="1">
                                <img class="pl-4 mt-2" src="@/assets/Group (2).svg" />
                            </v-col>
                            <v-col class="pl-3" cols="6">
                                <div>
                                    <p class="title font-weight-bold">
                                        Automobile
                                    </p>
                                    <p class="caption mt-n4 font-weight-medium" style="color: #666666">Nifty 50 is a well diversified 50 stock index. It represents
                                        the
                                        top 50 </p>
                                        <p class="caption mt-n5 font-weight-medium" style="color: #666666">Largecap companies based on market capitalisation.</p>
                                </div>
                            </v-col>
                            <v-col cols="1">
                            </v-col>
                            <v-col cols="2" class="text-right">
                                <p class="subtitle-1 font-weight-bold mt-2">
                                    ₹ 18,392.60
                                </p>
                                <p class="caption font-weight-medium mt-n5" style="color: red;">
                                    -62.60 (0.34%)
                                </p>
                            </v-col>
                            <v-col cols="2" class="text-center mt-2">
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
                                        <v-btn dark class="ml-auto pr-5 mt-1" icon v-bind="attrs" v-on="on">
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
                    </v-card>
                    <v-row>
                        <v-col>
                            <p class="title font-weight-bold ml-8 mt-4 mb-0">Price Chart</p>
                        </v-col>
                        <v-col>
                            <v-card class="elevation-0  mt-2 ">
                                <v-tabs class= "align-with-title mb-n2"  background-color="transparent" color="black">
                                    <v-tab class="caption">1M</v-tab>
                                    <v-tab class="caption">3M</v-tab>
                                    <v-tab class="caption">6M</v-tab>
                                    <v-tab class="caption">1YR</v-tab>
                                    <v-tab class="caption">3YR</v-tab>
                                    <v-tab class="caption">5YR</v-tab>
                                    <v-tab class="caption">MAX</v-tab>
                                </v-tabs>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-card class="elevation-0 mt-2" style="border-bottom: #ebebeb 1px solid; border-top: #ebebeb 1px solid;">
                        <v-row class="mb-10">
                            <v-col cols="4" class="ml-8 mt-3">
                                <div>
                                    <p class="mb-0 pt-7 caption font-weight-medium mb-1" style="color: #666666;"> TOTAL CONSTITUENTS</p>
                                    <p class="mb-0 mt-1 body-2 back--text font-weight-bold">2,21,060</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <v-row>
                                    <v-col cols="6">
                                        <p class="mb-0 pt-5 caption font-weight-medium mb-1" style="color: #666666;">PE RATIO</p>
                                        <p class="mb-0 mt-1 body-2 back--text font-weight-bold">22.86</p>
                                        <v-divider class="mr-5 mt-2"></v-divider>
                                    </v-col>
                                    <v-col cols="6">
                                        <p class="mb-0 pt-5 caption font-weight-medium mb-1" style="color: #666666;">PB RATIO</p>
                                        <p class="mb-0 mt-1 body-2 back--text font-weight-bold">22.86</p>
                                        <v-divider class="mr-5 mt-2"></v-divider>
                                    </v-col>
                                </v-row>
                                <div>
                                    <p class="mb-0 pt-7 caption font-weight-medium mb-1" style="color: #666666;">HIGH - LOW</p>
                                    <span class="mb-0 body-2 back--text font-weight-bold">₹1,348.95 </span>
                                    <span class="slidecontainerlist mx-2 ">
                                        <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                        <input type="range" min="50" max="2000" class="sliderlist">
                                    </span>
                                    <span class="mb-0 mt-1 body-2 back--text font-weight-bold"> ₹1,322.65</span>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-7 caption font-weight-medium mb-1" style="color: #666666;">52 WEEKS HIGH - 52 WEEKS LOW</p>
                                    <span class="mb-0 mt-1 body-2 back--text font-weight-bold">₹1,438.80 </span>
                                    <span class="slidecontainerlist mx-2 mt-n4">
                                        <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                        <input type="range" min="50" max="2000" class="sliderlist">
                                    </span>
                                    <span class="mb-0 mt-1 body-2 back--text font-weight-bold"> ₹ 1300.34</span>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                            </v-col>
                            <v-col cols="7" class="mt-10 ml-n8">
                                <div class="d-flex "><div class="ml-auto"><div class="d-flex flex-row"><div class="text-right caption font-weight-medium px-3" style="color: #666666;">RETURNS FOR PERIOD  </div><div style="color:rgb(31, 214, 1);">{{ '%'+percentage }}</div></div></div></div>
                                <div ref="linechart" class=" my-2"></div>
                            </v-col>
                        </v-row>
                    </v-card>
                    <v-card class="elevation-0 mt-5 ">
                        <div class="d-flex">
                            <div>
                                <span class="title font-weight-bold ml-7">MFs tracking this sector</span>
                            </div>
                            <div class="ml-auto">
                                <v-btn color="#0037B7 " class="body-2 mr-4 font-weight-bold text-capitalize" text dense>See all 22 ETFs</v-btn>
                            </div>
                        </div>
                        <v-row class="scrolldiv mt-7 ml-7 pr-3 pb-8" style="border-bottom: #ebebeb 1px solid;">
                            <div class="mt-n3" style="overflow: scroll;">
                                <div style="display: inline-flex; overflow: hidden;">
                                    <v-card width="220"  v-for="datas in data" :key="datas.title" class="elevation-0 mr-4 pr-10"
                                        style="border: 1px solid rgb(190, 190, 190);">
                                        <v-row class="">
                                            <v-col>
                                                <div class="d-flex">
                                                    <div class="mt-1 ml-4 ">
                                                        <p class="subtitle-1 font-weight-bold">{{ datas.title }}
                                                        </p>
                                                    </div>
                                                    
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row class="mt-n9 ml-1">
                                            <v-col>
                                                <div class="d-flex">
                                                    <div>
                                                        <p  class="body-2 font-weight-medium"
                                                            style="font-size: 11px; color: #666666;">
                                                            {{ datas.sub }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <v-divider :thickness="2" class="border-opacity-100 mt-n6 ml-4"
                                                    color="black" width="40"></v-divider>
                                            </v-col>
                                        </v-row>
                                        <v-row class="ml-1 mt-n8 mb">
                                            <v-col>
                                                <div class="d-flex mb-2" >
                                                    <div class="flex-row ">
                                                        <p class="body-2 mb-0 font-weight-bold">{{ datas.num }}</p>
                                                    </div>
                                                    <div>
                                                        <p class="body-2 pl-1 mb-0 font-weight-bold" style="color: #43A833;">{{
                                                            datas.num2
                                                        }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </div>
                            </div>
                        </v-row>

                    </v-card>
                </div>

                <div>
                    <p class="title font-weight-bold ml-3 mt-12">Automobile companies</p>
                </div>
                <!-- ................................SEO................................... -->

                <v-data-table hide-default-header :headers="mutualfundheaders" :items="responsestore"
                    :items-per-page="perpage" item-key="id" v-model="selectedRows" class="elevation-0 mt-6"
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
                            <th class="text-start"><span class="pl-4 pt-1 pb-1" style="color:#666666 ;font-size: 13px">Fund
                                    Scrips</span></th>
                            <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                    style="color:#666666 ;font-size: 13px"></span></th>
                            <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                    style="color:#666666 ;font-size: 13px"></span></th>
                            <th class="text-start"><span class="pl-14 pt-1 pb-1" style="color:#666666 ;font-size: 13px">Mkt
                                    cap (cr)</span></th>
                            <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                    style="color:#666666 ;font-size: 13px">Volume (k)</span></th>
                            <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                    style="color:#666666 ;font-size: 13px">Price</span></th>
                            <th class="text-start"><span class="pl-4 pt-1 pb-1"
                                    style="color:#666666 ;font-size: 13px">%Chg</span></th>
                            <th><v-menu class="mr-n3" bottom left>
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
                                </v-menu></th>

                        </tr>


                    </template>

                    <template v-slot:item="{ item }">


                        <tr class="" style="background-color: ;position: relative;" @mouseover="selectItem(item)"
                            @mouseleave="unSelectItem(item)">

                            <td class="font-weight-bold pb-4 pt-2" style="color: #000000;font-size: 13px;width:315px;">
                                <!-- <div class="" > -->
                                <p class="" style="width: 195px;"> {{ item.Symbol }}</p>

                                <div class="display-flex row pt-1 pb-1">
                                    <v-card v-if="item.NEWS == 'NEWS'" height="20px" width=""
                                        class="pl-2 pr-2 pb-1 ml-2" elevation="0" color="#F1F3F8">
                                        <p class="font-weight-medium mb-0 "
                                            style="color:#666666;font-size:9px;margin-top: 3px;">
                                            <img class="mt-n1" src="@/assets/note.svg" />

                                            {{ item.NEWS }}</p>
                                    </v-card>


                                    <v-card v-if="item.ALERT == 'ALERT'" height="20px" width=""
                                        class="pl-2 pr-2 pb-1 ml-2" elevation="0" color="#F1F3F8">
                                        <p class="font-weight-medium mb-0 "
                                            style="color:#666666;font-size:9px;margin-top: 3px;">
                                            <img class="mt-n1" src="@/assets/cal.svg" />

                                            {{ item.ALERT }}</p>
                                    </v-card>

                                    <v-card v-if="item.EVENT == 'EVENT'" height="20px" width=""
                                        class="pl-2 pr-2 pb-1 ml-2" elevation="0" color="#F1F3F8">
                                        <p class="font-weight-medium mb-0 "
                                            style="color:#666666;font-size:9px;margin-top: 3px;">
                                            <img class="mt-n1" src="@/assets/flag.svg" />

                                            {{ item.EVENT }}</p>
                                    </v-card>
                                </div>
                                <div class="postionchange" v-if="item === selectedItem">
                                    <div class="display-flex row ">
                                        <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                            style="min-width:23px;border-radius: 4px;" color="#43A833">B</v-btn>
                                        <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                                            style="min-width:23px;border-radius: 4px;" color="#FF1717">S</v-btn>
                                        <v-btn class="pa-0  elevation-0 ml-1" outlined dense small
                                            style="min-width:23px;border-radius: 4px;border:1px solid #CCCCCC;"><img alt=""
                                                class="shrink " :src="require('@/assets/tradingsymbol.svg')"
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
                            <td class=" pr-0 ml-5"> <span class="font-weight-medium"
                                    style="font-size:13px;color:#000000"></span></td>
                            <td><span class="font-weight-medium" style="font-size:13px;color:#000000"></span>
                            </td>
                            <td class="pr-0 pl-14"><p class="font-weight-medium mb-0" style="font-size:13px;color:#000000">
                            {{(item.TotalMarketCap /10000000).toFixed(2)}} <span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;cr</span></p></td>

                            <td class="pr-0"><p class="font-weight-medium mb-0" style=" font-size: 13px;">
                            {{ (item.vol/1000).toFixed(2) }}
                            <span class="font-weight-medium"
                                                style="color:#999999 ;font-size: 13px">&nbsp;k</span></p></td>

                            <td>
                                <span class="font-weight-medium" style=" font-size: 13px;">{{ item.lp }}</span>
                            </td>




                            <td class="pr-0 ">
                                <span  v-if="item.change > 0" class="text-wrap font-weight-medium ml-"
                                    style="color:#43A833 !important;font-size: 13px;">+ {{ item.change }} %</span>
                                    <span v-else-if="item.change < 0" class="font-weight-medium"
                                    style="color:red !important; font-size: 13px;"> {{ item.change }} %</span>
                                    <span v-else-if="item.change >= 0" class="font-weight-medium"
                                    style="color:black !important; font-size: 13px;">-</span>
                            </td>
                            <!-- <td class="pr-0" ></td> -->

                            <td>

                            </td>

                        </tr>
                    </template>

                </v-data-table>
                <v-card v-if="showmore2" class="elevation-0 mt-0 text-center" style="outline: 1px solid #e7e7e7;">
                    <v-btn color="#0037B7" @click="showmore" class="body-2 font-weight-bold text-capitalize" text dense>See more companies</v-btn>
                </v-card>
                <v-card v-if="showmore23" class="elevation-0 mt-0 text-center" style="outline: 1px solid #e7e7e7;">
                    <v-btn color="#0037B7" @click="showmore1" class="body-2 font-weight-bold text-capitalize" text dense>See Less companies</v-btn>
                </v-card>

                <!-- ................................SEO................................... -->

            </v-col>
            <v-col class=" " cols="3">
                <div class="d-flex mt-n5">
                    <p class="subtitle-1 font-weight-bold">Top NIFTY 50 Options</p>
                    <v-menu bottom left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn dark class="ml-auto pl-6" icon v-bind="attrs" v-on="on">
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
                    <div class="d-flex mt-3">

                        <div>
                            <v-chip class="" label style="height: 18px; background-color: #F1F3F8; font-size: 9px;">
                                <!-- <v-icon style="" >mdi-flag</v-icon> -->
                                {{ datas.chip }}
                            </v-chip>
                        </div>

                        <div class=" mt-1 ml-2">
                            <p class="body-2 font-weight-bold">{{ datas.title }}</p>
                        </div>
                        <div class="ml-auto mt-1">
                            <p style="font-size: 12px;" class=" font-weight-bold">{{ datas.price }}



                                <span v-if="datas.per > 0" style="color: #43A833;" class="font-weight-medium">( {{
                                    datas.per }} % )
                                </span>
                                <span v-if="datas.per < 0" style="color: #e72626;" class="font-weight-medium">( {{
                                    datas.per }} % )
                                </span>


                            </p>


                        </div>
                    </div>
                    <v-divider class=" "></v-divider>
                </div>
                <div class="text-center pa-2">
                    <v-btn color="#0037B7" class=" text-capitalize body-2 font-weight-bold" text dense> 
                        <img class="mt-n1" src="/assets/button.svg" />
                        
                        <p class="mt-2 ml-2">More Option</p></v-btn>
                    <v-divider class=" "></v-divider>

                </div>
              
                <v-card height="136"  class="elevation-0"> </v-card>
                <v-row class="d-flex" style="width: 370px">
                    <v-col>
                        <p class="body-2 font-weight-bold">Filters</p>
                    </v-col>
                    <v-col class="ml-auto mt-n2 ">
                        <v-btn text color="#0037B7 " dark class="ml-4 mr-n2  body-2 px-0 font-weight-bold  text-capitalize" @click="reset">
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
                                <div class="d-flex  ">
                                    <v-card  width="16" height="16" v-model="value" label x-small
                                        :color="item.selected ? '#0037B7' : '#F1F3F8'" :text-color="item.selected ? 'white' : ''"
                                        @click="toggleChipSelection1(item)" class=" elevation-0">
                                    </v-card>
                                    <p class="mb-0 ml-3  caption font-weight-bold" style="margin-top: -2px;" :style="getTitleColorStyle1(item)">{{
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
    </v-container>
</template>

<script>
import { createChart } from "lightweight-charts";
import { api } from '../../apiUrl.js'
import axios from 'axios'
export default {
    data() {
        return {
            min: -50,
            responsestore:[],
            max: 90,
            range: [-20, 70],
            min1: -10,
            max1: 150,
            range1: [-10, 50],
            selectedItem: false,
      selectedItem1: false,

            showmore2: true,
            showmore23: false,
            perpage: 8,
            items1: ['foo', 'bar', 'fizz', 'buzz', 'fizzbuzz', 'foobar'],
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
                    value: "Symbol", class: "successScrips"
                },
                { text: "Sector", sortable: false, value: "TotalMarketCap", class: "successtitle" },
                { text: "Weight%", sortable: false, value: "vol", class: "successvolume" },
                { text: "Mkt cap (cr)", sortable: false, value: "lp", class: "successprice" },
                { text: "Volume (k)", sortable: false, value: "change", class: "successchg" },
                // { text: "Price", sortable: false, value: "iron", class: "successma" },
                // { text: "%Chg", sortable: false, value: "iron", class: "successma" },

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
      this.chart();
    //   const axios = require('axios');
    var axiosthis=this;
let data = JSON.stringify({
  "sector": "Construction"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
//   url: 'http://192.168.5.146:5000/getSectorStockData',
  url:`${api}`+'/getSectorStockData',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));

axiosthis.responsestore=response.data
console.log("axiosthis.responsestore",axiosthis.responsestore)
})
.catch((error) => {
  console.log(error);
});

    },
    methods: {
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
        // baseValue: { type: "price", price: 200 },
        // topLineColor: "#33A34D",
        // topFillColor1: "rgba( 38, 166, 154, 0.28)",
        // topFillColor2: "rgba( 38, 166, 154, 0.05)",
        // bottomLineColor: "rgba( 239, 83, 80, 1)",
        // bottomFillColor1: "rgba( 239, 83, 80, 0.05)",
        // bottomFillColor2: "rgba( 239, 83, 80, 0.28)",
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
// toolTip.style.top = 290 + 'px';

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
        },
        selectItem(item) {
            this.selectedItem = item
        },
        unSelectItem() {
            this.selectedItem = false
        },
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
    getSelectedItemCount(group) {
      return group.items.filter(item1 => item1.selected).length;
    },
    }
}
</script>

<style>
.slidecontainer {
    width: 60%;
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
.v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon {
    align-self: center;
    margin: 0;
    min-width: 30px;
    justify-content: flex-end;
}
</style>

