<template>
    <div>
      <v-row>
        <v-col cols="9" class="pr-8">
          <v-card elevation="0" color="#834EDA" class="mt-4" height="206px">
            <v-row class="ml-3 mr-3">
              <v-col cols="4">
                <p class="mb-0 " style="font-size:32px;font-weight:600;color:#FEFDFD">
                  Invest in IPOs
                </p>
                <p class="mb-0 pt-3 " style="color: #ffffffe3;font-size: 14px;font-weight: 469;">
                  Initial public offering a new stock issuance for the first
                  time.
                </p>
                <v-btn
                  rounded
                  color="black"
                  style="color: #ffffffe3;font-size: 14px;font-weight: 469;line-height: 20px; /* 142.857% */
letter-spacing: -0.28px;"
                  class=" mt-5 text-none"
                  >Apply for an IPO</v-btn
                >
              </v-col>

<v-col cols="8">
  <v-row>
      <v-col v-for="(item, index) in itemss" :key="index" cols="4" class="pa-2">
                <v-card
                  class="mt-9  head"
                  style="
                    border-radius: 16px;
                    box-shadow: 0px 1.85185px 3.14815px rgba(83, 30, 0, 0.02),
                      0px 8.14815px 6.51852px rgba(83, 30, 0, 0.03),
                      0px 20px 13px rgba(83, 30, 0, 0.04),
                      0px 38.5185px 25.4815px rgba(83, 30, 0, 0.04);
                  "
                  outlined
                >
                  <v-img
                    :src="item.imm"
                    class="mt-9 mb-2 ml-14 mr-4"
                    height="55px"
                    width="60px"
                  ></v-img>
                  <p
                    class="pl-3   mt-3 pt-3 pr-3 "
                    style="text-align: center; line-height: 14px;font-size: 16px;font-weight: 600; color:#000"
                  >
                    {{ item.title }}
                  </p>
                </v-card>
              </v-col>
  </v-row>

</v-col>



             
            </v-row>
          </v-card>

          <v-card outlined class="elevation-0 mt-10 pa-3 mb-10">
            <div class="d-flex">
              <div>
                <v-img
                  :src="require('@/assets/tab.svg')"
                  width="45px"
                  class=""
                ></v-img>
              </div>
              <div>
                <p class="mb-0 ml-2 " style="font-size:18px;font-weight:600;color: #000;">
                  Main stream IPOs
                </p>
                <p class="mb-0 pl-2" style="font-size:11px;font-weight:469;color: #666;">
                  Initial public offering a new stock issuance for the first time.
                </p>
              </div>
              <div class="ml-auto">
                  <v-card color="#F1F3F8" class=" elevation-0  px- mt-1 "
                                      style="border-radius: 40px;height:36px;width: px;">
                                      <div class="d-flex">
                                          <span class="mb-0 pl-4  pt-3"
                                              style="color: #666666; font-weight: 469; font-size: 12px;line-height: 14px; "
                                              color="#666666">{{number}}</span>
                                          <div class="float-right  mt-n1 mr-1">
                                              <v-btn elevation="0" :ripple="false" id="no-background-hover" class="text-end" icon
                                                  @click="decrementNumber"> <v-icon class="" size="16" color="#000000">
                                                      mdi-chevron-up
                                                  </v-icon></v-btn><br>
                                              <v-btn elevation="0" :ripple="false" id="no-background-hover" class="move"
                                                  icon @click="incrementNumber"> <v-icon size="16"  class="mb-0 pt-0  mt-n1 mr-6"
                                                      color="#000000">
                                                      mdi-chevron-down
                                                  </v-icon></v-btn>
                                          </div>
                                      </div>
                                  </v-card>
                <!-- <v-card
                  color="#F1F3F8"
                  class="grey--text elevation-0 mt-5 ml-2 mr-2 body-2"
                  style="border-radius: 40px; height: 40px; width: 100px"
                >
                  <div class="d-flex">
                    <p class="mb-0 pt-1 pl-6 grey--text mt-2 body-2">
                      {{ number }}
                    </p>
                    <div class="pl-">
                      <v-btn
                        elevation="0"
                        :ripple="false"
                        id="no-background-hover"
                        class="up"
                        icon
                        @click="decrementNumber"
                      >
                        <v-icon class="pt-2" color="black">
                          mdi-chevron-up
                        </v-icon></v-btn
                      ><br />
                      <v-btn
                        elevation="0"
                        :ripple="false"
                        id="no-background-hover"
                        class="move"
                        icon
                        @click="incrementNumber"
                      >
                        <v-icon class="mb-0 pt-0" color="black">
                          mdi-chevron-down
                        </v-icon></v-btn
                      >
                    </div>
                  </div>
                </v-card> -->
              </div>
              <!-- <div class="">
                <v-text-field
                  v-model="search"
                  class="mt-1 ml-2 mb-0 pr-3 caption font-weight-bold black--text"
                  color="#000000"
                  rounded
                  dense
                  filled
                  prepend-inner-icon="mdi-magnify"
                  label="Search company"
                  single-line
                  hide-details
                ></v-text-field>
              </div> -->
              <v-text-field  prepend-inner-icon="mdi-magnify" v-model="search" class="tophundraedmutual ml-2 mt-1 searchfundlabel" style="max-width:230px;font-size:12px" background-color="#F1F3F8" label="Search company" solo
          rounded flat dense>
        </v-text-field>
            </div>
            <v-data-table
              :headers="headers"
              :items="dataTableItems"
              :search="search"
              :items-per-page="perpage"
              hide-default-footer
            >
              <template #item="{ item }">
                <tr>
                  <td>
                    <div class="mb-0 mt-2" style="font-size:13px;font-weight: 559;color:black">
                      {{ item.name }}
                    </div>
                    <div><v-chip
                      color="white"
                      label
                      class=" grey--text caption pt-3 pb-3 mb-2"
                      x-small
                      >{{ item.chipText }}</v-chip
                    ></div>
                  </td>
                  
                  <td>
                    <div class="mb-0 ipp">
                      {{ item.age }}
                    </div>
                    <p
                      class="mb-0 ippbl"
                      style="color: #0037b7"
                    >
                      {{ item.time }}
                    </p>
                  </td>

                  <td class="mb-0 ipp">
                 <p class="mb-0 ipp">   {{ item.loca }}</p>
                  </td>
                  <td class="mb-0 ipp">
                      <p class="mb-0 ipp">     {{ item.pric }} </p>
                  </td>

                  <td>
                    <div class="mb-0 ipp">
                      <p class="mb-0 ipp"> {{ item.min }} </p>
                    </div>
                    <p
                      class="mb-0 ippgr"
                   
                    >
                      {{ item.qty }}
                    </p>
                  </td>
                  <td
                    :style="getTextStyle(item.val)"
                    class="mb-0 ippo"
                  >
                    {{ item.val }}
                  </td>
                </tr>
              </template>
            </v-data-table>
            <v-divider></v-divider>
            <v-card
              v-if="showmore2"
              class="elevation-0 mt-0 text-center"
        
            >
              <v-btn
                color="primary"
                @click="showmore"
                class="text-capitalize"
                text
                dense
                >Show closed IPOs <v-icon>mdi-chevron-down</v-icon> </v-btn
              >
            </v-card>

            <v-card
              v-if="showmore23"
              class="elevation-0 mt-0 text-center"
           
            >
              <v-btn
                color="primary"
                @click="showmore1"
                class="text-capitalize"
                text
                dense
                >Show closed IPOs <v-icon>mdi-chevron-up</v-icon></v-btn
              >
            </v-card>
          </v-card>


          <v-card outlined class="elevation-0 mt-10 pa-3 mb-10">
            <div class="d-flex">
              <div>
                <v-img
                  :src="require('@/assets/tbbb.svg')"
                  width="45px"
                  class=""
                ></v-img>
              </div>
              <div>
                <p class="mb-0 ml-2 " style="font-size:18px;font-weight:600;color: #000;">
                  Small and Medium Enterprises IPOs
                </p>
                <p class="mb-0 pl-2" style="font-size:11px;font-weight:469;color: #666;">
                  Small and Medium Enterprises a new stock issuance for the
                  first time.
                </p>
              </div>
              <div class="ml-auto">
      <v-card color="#F1F3F8" class=" elevation-0  px- mt-1 "
                          style="border-radius: 40px;height:36px;width: px;">
                          <div class="d-flex">
                              <span class="mb-0 pl-4  pt-3"
                                  style="color: #666666; font-weight: 469; font-size: 12px;line-height: 14px; "
                                  color="#666666">2021</span>
                              <div class="float-right  mt-n1 mr-1">
                                  <v-btn elevation="0" :ripple="false" id="no-background-hover" class="text-end" icon
                                      @click="decrementNumber"> <v-icon class="" size="16" color="#000000">
                                          mdi-chevron-up
                                      </v-icon></v-btn><br>
                                  <v-btn elevation="0" :ripple="false" id="no-background-hover" class="move"
                                      icon @click="incrementNumber"> <v-icon size="16"  class="mb-0 pt-0  mt-n1"
                                          color="#000000">
                                          mdi-chevron-down
                                      </v-icon></v-btn>
                              </div>
                          </div>
                      </v-card>
    <!-- <v-card
      color="#F1F3F8"
      class="grey--text elevation-0 mt-5 ml-2 mr-2 body-2"
      style="border-radius: 40px; height: 40px; width: 100px"
    >
      <div class="d-flex">
        <p class="mb-0 pt-1 pl-6 grey--text mt-2 body-2">
          {{ number }}
        </p>
        <div class="pl-">
          <v-btn
            elevation="0"
            :ripple="false"
            id="no-background-hover"
            class="up"
            icon
            @click="decrementNumber"
          >
            <v-icon class="pt-2" color="black">
              mdi-chevron-up
            </v-icon></v-btn
          ><br />
          <v-btn
            elevation="0"
            :ripple="false"
            id="no-background-hover"
            class="move"
            icon
            @click="incrementNumber"
          >
            <v-icon class="mb-0 pt-0" color="black">
              mdi-chevron-down
            </v-icon></v-btn
          >
        </div>
      </div>
    </v-card> -->
  </div>
    <v-text-field  prepend-inner-icon="mdi-magnify" v-model="searcha" class="tophundraedmutual ml-2 mt-1 searchfundlabel" style="max-width:230px;font-size:12px" background-color="#F1F3F8" label="Search company" solo
rounded flat dense>

</v-text-field>

              <!-- <div class="ml-auto">
                <v-text-field
                  v-model="searcha"
                  class="mt-5 mb-0 pr-3 caption font-weight-bold black--text"
                  color="#000000"
                  rounded
                  dense
                  filled
                  prepend-inner-icon="mdi-magnify"
                  label="Search company"
                  single-line
                  hide-details
                ></v-text-field>
              </div> -->
            </div>
            <v-data-table
              :headers="headersa"
              :items="dataTableItems1"
              :search="searcha"
              :items-per-page="perpage1"
              hide-default-footer
            >
              <template #item="{ item }">
                <tr>
                  <td>
                    <div class="mb-0 mt-2" style="font-size:13px;font-weight: 559;color:black">
                      {{ item.name }}
                    </div>
                    <v-chip
                      color="white"
                      label
                      class="grey--text caption pt-3 pb-3 mb-2"
                      x-small
                      >{{ item.chipText }}</v-chip
                    >
                  </td>
                  <td>
        <div class="mb-0 ipp">
          {{ item.age }}
        </div>
        <p
          class="mb-0 ippbl"
          style="color: #0037b7"
        >
          {{ item.time }}
        </p>
      </td>

      <td class="mb-0 ipp">
     <p class="mb-0 ipp">   {{ item.loca }}</p>
      </td>
      <td class="mb-0 ipp">
          <p class="mb-0 ipp">     {{ item.pric }} </p>
      </td>

      <td>
        <div class="mb-0 ipp">
          <p class="mb-0 ipp"> {{ item.min }} </p>
        </div>
        <p
          class="mb-0 ippgr"
       
        >
          {{ item.qty }}
        </p>
      </td>
      <td
        :style="getTextStyle(item.val)"
        class="mb-0 ippo"
      >
        {{ item.val }}
      </td>
                </tr>
              </template>
            </v-data-table>
            <v-divider></v-divider>
            <v-card
              v-if="showmore232"
              class="elevation-0 mt-0 text-center"
           
            >
              <v-btn
                color="primary"
                @click="showmore12"
                class="text-capitalize"
                text
                dense
                >Show closed IPOs <v-icon>mdi-chevron-down</v-icon></v-btn
              >
            </v-card>
            <v-card
              v-if="showmore233"
              class="elevation-0 mt-0 text-center"
 
            >
              <v-btn
                color="primary"
                @click="showmore11"
                class="text-capitalize"
                text
                dense
                >Show closed IPOs <v-icon>mdi-chevron-up</v-icon></v-btn
              >
            </v-card>
          </v-card>
         
        </v-col>
        <v-col cols="3" class="mt-">
          <div class="d-flex">
            <p class=" mb-0" style="font-size:15px;font-weight:609;color:#000">IPO Performance 2023</p>

            <!-- <a :href="zebu"  style="  text-decoration: none;"> -->
            <div class="ml-auto">
              <v-menu offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn
                    :ripple="false"
                    id="no-background-hover"
                    v-on="on"
                    icon
                  >
                    <v-icon color="black" class="ml-auto mt-0 pt-0"
                      >mdi-dots-vertical</v-icon
                    >
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="handleMenuItemClick('Option 1')">
                    <!-- <v-list-item-icon>
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-list-item-icon> -->
                    <v-list-item-title>name</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="handleMenuItemClick('Option 2')">
                    <!-- <v-list-item-icon>
                                            <v-icon>mdi-delete</v-icon>
                                        </v-list-item-icon> -->
                    <v-list-item-title>logout</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div v-for="(item, index) in side" :key="index">
            <v-card
              outline
              elevation="0"
              class="mt-2 rounded-lg"
              style="border-color: #cccccc"
              outlined
            >
              <v-card color="#FAFBFF" elevation="0" class="pa-2">
                <div class="d-flex">
                  <div>
                    <p class="mb-0 comm">{{ item.com }}</p>
                    <p class="mb-0 pb-0 yee">{{ item.ye }}</p>
                  </div>
                  <p class="mb-0 gree mt-1 ml-auto">
                    {{ item.gre }}
                  </p>
                </div>
              </v-card>

              <div class="d-flex pa-2">
                <p class="mb-0 yee">
                  {{ item.sub1 }}
                  <span class="comm pl-1">{{
                    item.sub2
                  }}</span>
                </p>
                <p class="mb-0 yee ml-auto">
                  {{ item.sub3 }}
                  <span class="gree1">{{ item.sub4 }}</span>
                </p>
              </div>
            </v-card>
          </div>
          <p @click="ipopermance()"
            style="text-align: center; color: #0037b7;cursor: pointer;"
            class="pt-4 pb-4 mb-0 body-2 font-weight-bold"
          >
            Performance dashboard
          </p>
          <v-divider> </v-divider>
        </v-col>
      </v-row>
    </div>
</template>

<style lang="scss">
.head {
  /* position: absolute; */
}
#no-background-hover::before {
    background-color: transparent !important;
}

.ipp{
  font-size: 12px;
  font-weight: 500;
  color:#000;

}
.ippbl{
  font-size: 12px;
  font-weight: 560;
  color:#0037b7;

}
.ippgr{
  font-size: 11px;
  font-weight: 500;
  color:#666;

}
.ipp0{
  font-size: 12px;
  font-weight: 500;


}

.comm{
  font-size: 12px;
  font-weight:609;
  color:#000;

}

.yee{
  font-size: 12px;
  font-weight:500;
  color:#666;

}

.gree{
  font-size: 14px;
  font-weight:600;
  color:#43A833;

}
.gree1{
  font-size: 12px;
  font-weight:500;
  color:#43A833;

}

.taaahee{
color: #000;
font-size: 14px;
font-weight: 559;
line-height: 16px; 
}
.tabbsidhe1{
color: #000;
font-size: 11px;
font-weight: 469;
line-height: 16px; 
}


.move {
  position: absolute;

  top: 5px;
}

.up {
  position: absolute;

  top: -18px;
}

.ssssssssssssss {
.v-text-field--filled.v-input--dense>.v-input_control>.v-input_slot,
.v-text-field--full-width.v-input--dense>.v-input_control>.v-input_slot{

  width: 216px !important;
  min-height: 36px !important;
}
}
.ssssssssssssss {
.v-text-field--rounded > .v-input_control > .v-input_slot {
  padding-left: 12px !important;
}}
.ssssssssssssss {
.theme--light.v-input.po input::placeholder, .po input { 
  font-size: 14px !important;
  line-height: 16px !important;
  font-weight: 469 !important;
}
}

</style>



<script>
export default {
  data() {
    return {
      number: 2021,
      numberr: 2021,
      searcha: "",
      search: "",

      showmore2: true,
      showmore23: false,
      perpage: 5,

      showmore232: true,
      showmore233: false,
      perpage1: 5,

      itemss: [
        {
          title: "Create wealth by investing main board companies",
          imm: require("@/assets/taa1.svg"),
        },
        {
          title: "Invest safely in small company IPOs via UPI",
          imm: require("@/assets/taa2.svg"),
        },
        {
          title: "Checkout recent IPO performance after listing.",
          imm: require("@/assets/taa3.svg"),
        },
      ],

      headers: [
        { text: "Stock name", value: "name", sortable: false },
        { text: "IPO date", value: "age", sortable: false },
        { text: "Listing date", value: "loca", sortable: false },
        { text: "Price range", value: "pric" , sortable: false},
        { text: "Min ammount", value: "min", sortable: false },
        { text: "", value: "val", sortable: false },
      ],
      dataTableItems: [
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Apply",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "hcl",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Apply",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "tata",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Apply",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Details",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Details",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Closed",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Closed",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
      ],
      headersa: [
        { text: "Stock name", value: "name", sortable: false },
        { text: "IPO date", value: "age" , sortable: false},
        { text: "Listing date", value: "loca", sortable: false },
        { text: "Price range", value: "pric", sortable: false },
        { text: "Min ammount", value: "min", sortable: false },
        { text: "", value: "val", sortable: false },
      ],
      dataTableItems1: [
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Apply",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Apply",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Apply",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Details",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Details",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Closed",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
        {
          name: "Proventus Agrocom Limited",
          age: "17th — 19th May",
          loca: "23rd May",
          pric: "₹ 1150 - ₹ 1229",
          min: "₹ 1,27,400",
          val: "Closed",
          chipText: "PRov",
          time: "timeline",
          qty: "100 Qty.",
        },
      ],
      cardsSet2: [
        {
          head: "Proventus Agrocom Limited",
          chip: "PRov",
          d1: "17th — 19th May",
          time: "Timeline",
          year: "23rd May",
          ano: "₹ 1150 - ₹ 1229",
          minan: "₹ 1,27,400",
          qty: "100 Qty.",
          btn: "Apply",
        },
        {
          head: "Krishca Strapping Solutions Limited",
          chip: "KrISha",
          d1: "17th — 19th May",
          time: "Timeline",
          year: "23rd May",
          ano: "₹ 1150 - ₹ 1229",
          minan: "₹ 1,27,400",
          qty: "100 Qty.",
          btn: "Apply",
        },
        {
          head: "Remus Pharmaceuticals Limited",
          chip: "REmus",
          d1: "17th — 19th May",
          time: "Timeline",
          year: "23rd May",
          ano: "₹ 1150 - ₹ 1229",
          minan: "₹ 1,27,400",
          qty: "100 Qty.",
          btn: "Apply",
        },
        {
          head: "Hemant Surgical Industries Ltd",
          chip: "HSIL",
          d1: "To be announced",
          // time:'Timeline',
          // year: '23rd May',
          ano: "₹ 1150 - ₹ 1229",
          // minan: '₹ 1,27,400',
          // qty: '100 Qty.',
          btn: "Details",
        },
        {
          head: "Vasa Denticity Limited",
          chip: "DENTALKART",
          d1: "To be announced",
          // time:'Timeline',
          // year: '23rd May',
          ano: "₹ 1150 - ₹ 1229",
          // minan: '₹ 1,27,400',
          // qty: '100 Qty.',
          btn: "Details",
        },
        {
          head: "Crayons Advertising Limited",
          chip: "CRAYONS",
          d1: "To be announced",
          // time:'Timeline',
          // year: '23rd May',
          ano: "₹ 1150 - ₹ 1229",
          // minan: '₹ 1,27,400',
          // qty: '100 Qty.',
          btn: "Details",
        },
        {
          head: "Auro Impex & Chemicals Limited",
          chip: "VLCC",
          d1: "17th — 19th May",
          // time:'Timeline',
          year: "23rd May",
          ano: "₹ 1150 - ₹ 1229",
          minan: "₹ 1,27,400",
          qty: "100 Qty.",
          btn: "Closed",
        },
        {
          head: "VLCC Health Care Limited",
          chip: "VLCC",
          d1: "17th — 19th May",
          // time:'Timeline',
          year: "23rd May",
          ano: "₹ 1150 - ₹ 1229",
          minan: "₹ 1,27,400",
          qty: "100 Qty.",
          btn: "Closed",
        },
      ],

      side: [
        {
          com: "Mankind Pharma Limited",
          ye: "May 19, 2023",
          gre: "+ 23.26%",
          sub1: "Issue price",
          sub2: "₹115",
          sub3: "Listing gain ",
          sub4: "+4.26%",
        },
        {
          com: "Mankind Pharma Limited",
          ye: "May 19, 2023",
          gre: "+ 23.26%",
          sub1: "Issue price",
          sub2: "₹115",
          sub3: "Listing gain ",
          sub4: "+4.26%",
        },
        {
          com: "Mankind Pharma Limited",
          ye: "May 19, 2023",
          gre: "+ 23.26%",
          sub1: "Issue price",
          sub2: "₹115",
          sub3: "Listing gain ",
          sub4: "+4.26%",
        },
        {
          com: "Mankind Pharma Limited",
          ye: "May 19, 2023",
          gre: "+ 23.26%",
          sub1: "Issue price",
          sub2: "₹115",
          sub3: "Listing gain ",
          sub4: "+4.26%",
        },
        {
          com: "Mankind Pharma Limited",
          ye: "May 19, 2023",
          gre: "+ 23.26%",
          sub1: "Issue price",
          sub2: "₹115",
          sub3: "Listing gain ",
          sub4: "+4.26%",
        },
        {
          com: "Mankind Pharma Limited",
          ye: "May 19, 2023",
          gre: "+ 23.26%",
          sub1: "Issue price",
          sub2: "₹115",
          sub3: "Listing gain ",
          sub4: "+4.26%",
        },
      ],
      hoveredCardIds: [],
      // dataTableItems:[],
      showAllRows: false,
    };
  },

  methods: {
    ipopermance() {
this.$router.push('ipoperformance')
    },
    showmore() {
      this.perpage = this.dataTableItems.length;
      this.showmore2 = !this.showmore2;
      this.showmore23 = !this.showmore23;
    },
    showmore1() {
      this.perpage = 5;
      this.showmore2 = !this.showmore2;
      this.showmore23 = !this.showmore23;
    },
    showmore12() {
      this.perpage1 = this.dataTableItems1.length;
      this.showmore232 = !this.showmore232;
      this.showmore233 = !this.showmore233;
    },
    showmore11() {
      this.perpage1 = 5;
      this.showmore232 = !this.showmore232;
      this.showmore233 = !this.showmore233;
    },

    getTextStyle(val) {
      if (val === "Apply") {
        return { color: "blue" };
      } else if (val === "Details") {
        return { color: "blue" };
      } else if (val === "Closed") {
        return { color: "grey" };
      }
    },
    handleMenuItemClick(option) {
      // Handle the menu item click event
      console.log("Clicked:", option);
    },
    handleCardHover(cardId, isHovered) {
      if (isHovered) {
        this.hoveredCardIds.push(cardId);
      } else {
        const index = this.hoveredCardIds.indexOf(cardId);
        if (index > -1) {
          this.hoveredCardIds.splice(index, 1);
        }
      }
    },
    incrementNumber() {
      this.number++;
    },
    incrementNumberr() {
      this.numberr++;
    },
    decrementNumber() {
      if (this.number > 0) {
        this.number--;
      }
    },
    decrementNumberr() {
      if (this.numberr > 0) {
        this.numberr--;
      }
    },
  },
};
</script>


