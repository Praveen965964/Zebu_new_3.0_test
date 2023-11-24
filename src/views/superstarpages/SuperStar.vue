<template>
      <div class="mt-3">
        <v-row>
          <v-col cols="9" class="pr-8">
            <v-card elevation="0" style="border: 1px solid #ddd">
              <v-card elevation="0" class="pa-5" style=" border-radius: 4px;background: #fff;" >
                <div class="d-flex">
                  <div>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/ba8d/0b88/0b1e6904fa6cd6ffd7e7f4ab9ff3f847?Expires=1692576000&Signature=EBIwDzJj97sasQwthht4JpePtBoXl8hn8QsdDHRn3ttDNyKl35pzP0P5goOf~JsI1bwWFcNUI1I~rI~yKd2bom9u4uVHhZE3Cs64WtoU49DMXtyzhwfSTMBXQ1uVVE~LkEAzpAv-5nlFMPtaV0PhFcWR3uF0BhZ~ctFbRP9K9d6jjwBViBzOVcgo5G58tMnOBpXj0x23Kd2Y1ea5bGJnv9a5J1e7Nt4~Oimcp409CTY6qW7WQsZYszSIa95Ebf2-aY11G7jh85pjF8i9jLNnfofeYUlhYbJlHkF8VoRTvQe2Km~9Du3nV7OnuGvNLV06~eOnphKt2Nk4UBoY3n-IxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      width="41px"
                      height="41px"
                    />
                  </div>
                  <div>
                    <p
                      class="mb-0 ml-3 mt-1"
                      style="
                        color: #000;
                        font-size: 20px;
                        font-weight: 559;
                        line-height: 16px;
                        letter-spacing: -0.4px;
                      "
                    >
                      Superstar portfolios
                    </p>
                    <p
                      class="mb-0 ml-3 mt-1"
                      style="
                        color: #666;
                        font-size: 12px;
                        font-weight: 469;
                        line-height: 14px;
                      "
                    >
                      Stable income and growth
                    </p>
                  </div>
                  <div class="ml-auto mt-2">
                    <v-card
                      color="#F1F3F8"
                      class="elevation-0 px- mt-n1"
                      style="border-radius: 40px; height: 36px; width: 199px"
                    >
                      <div class="d-flex">
                        <span
                          class="mb-0 pl-4 pt-3"
                          style="
                            color: #666;
                            font-size: 12px;
                            font-weight: 469;
                            line-height: 14px;
                          "
                          color="#666666"
                          >Wealth Managers</span
                        >
                        <div class="float-right ml-auto mt-n1 mr-1">
                          <v-btn
                            elevation="0"
                            :ripple="false"
                            id="no-background-hover"
                            class="text-end"
                            icon
                          >
                            <v-icon class="" size="16" color="#000000">
                              mdi-chevron-up
                            </v-icon></v-btn
                          ><br />
                          <v-btn
                            elevation="0"
                            :ripple="false"
                            id="no-background-hover"
                            class="move "
                            icon
                          >
                            <v-icon
                              size="16"
                              class="mb-0 pt-0 mt-n1"
                              color="#000000"
                            >
                              mdi-chevron-down
                            </v-icon></v-btn
                          >
                        </div>
                      </div>
                    </v-card>
                  </div>
                </div>
              </v-card>
  
              <v-data-table
                :headers="last"
                :items="datalast"
                class=""
                hide-default-footer
                :search="search"
                :items-per-page="perpage"
              >
                <template #item="{ item }">
                  <tr @click="superstardetsiles()" style="cursor:pointer">
                    <td>
                      <div class="mb-0 caption d-flex">
                        <div>
                          <img
                            class="ma-2 mt-3"
                            :src="item.imgnew"
                            width="36px"
                            height="36px"
                          />
                        </div>
                        <div class="mb-0 mt-3 ml-1">
                          <span
                            style="
                              color: #000;
                              font-size: 14px;
                              font-weight: 559;
                              line-height: 16px;
                            "
                          >
                            {{ item.text1 }}</span
                          >
                          <br />
                          <v-chip label x-small style="background-color: #f1f3f8"
                            ><span
                              style="
                                color: #666;
                                font-size: 9px;
                                font-weight: 469;
                                line-height: 12px; /* 133.333% */
                                letter-spacing: 0.9px;
                                text-transform: uppercase;
                              "
                              >{{ item.chip1 }}</span
                            ></v-chip
                          >
                          <v-chip
                            label
                            x-small
                            style="background-color: #f1f3f8"
                            class="ml-2"
                            ><span
                              style="
                                color: #666;
                                font-size: 9px;
                                font-weight: 469;
                                line-height: 12px; /* 133.333% */
                                letter-spacing: 0.9px;
                                text-transform: uppercase;
                              "
                              >{{ item.chip2 }}</span
                            ></v-chip
                          >
                          <v-chip
                            label
                            x-small
                            style="background-color: #f1f3f8"
                            class="ml-2"
                            ><span
                              class=""
                              style="
                                color: #666;
                                font-size: 9px;
                                font-weight: 469;
                                line-height: 12px; /* 133.333% */
                                letter-spacing: 0.9px;
                                text-transform: uppercase;
                              "
                              >{{ item.chip3 }}</span
                            ></v-chip
                          >
                        </div>
                      </div>
                    </td>
  
                    <td>
                      <span
                        style="
                          color: #000;
                          font-size: 13px;
                          font-weight: 469;
                          line-height: 16px;
                        "
                        >{{ item.text2 }}</span
                      >
                    </td>
                    <td>
                      <span
                        style="
                          color: #000;
                          font-size: 13px;
                          font-weight: 469;
                          line-height: 16px;
                        "
                        >{{ item.text3 }}</span
                      >
                    </td>
  
                    <td>
                      <span
                        style="
                          color: #000;
                          font-size: 13px;
                          font-weight: 469;
                          line-height: 16px;
                        "
                        >{{ item.text4 }}</span
                      >
                    </td>
  
                    <td class="" v-if="item.text5 > 0">
                      <span
                        class="mb-0"
                        style="color: #43a833 !important; font-size: 13px"
                        >{{ item.text5 }}%</span
                      >
                    </td>
  
                    <td class="" v-else>
                      <span
                        class="mb-0"
                        style="color: #ff0000 !important; font-size: 13px"
                        >{{ item.text5 }}%</span
                      >
                    </td>
  
                    <td class="" v-if="item.text6 > 0">
                      <span
                        class="mb-0"
                        style="color: #43a833 !important; font-size: 13px"
                        >{{ item.text6 }}%</span
                      >
                    </td>
  
                    <td class="" v-else>
                      <span
                        class="mb-0"
                        style="color: #ff0000 !important; font-size: 13px"
                        >{{ item.text6 }}%</span
                      >
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
  
          <v-col cols="3">
                <!-- <v-card height="180" class="elevation-0 ml"> </v-card> -->
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
      </div>
  </template>
  
  <style lang="scss">
  .ssssssssssssss {
    .v-text-field--filled.v-input--dense > .v-input_control > .v-input_slot,
    .v-text-field--full-width.v-input--dense > .v-input_control > .v-input_slot {
      width: 216px !important;
      min-height: 36px !important;
    }
  }
  .ssssssssssssss {
    .v-text-field--rounded > .v-input_control > .v-input_slot {
      padding-left: 12px !important;
    }
  }
  .ssssssssssssss {
    .theme--light.v-input.po input::placeholder,
    .po input {
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
  
  
  
  
  
  
        last: [
          {
            text: "Investor name",
            value: "fun",
            sortable: false,
            class: "headstyle",
          },
          { text: "Risk", value: "mar", sortable: false, class: "headstyle" },
          {
            text: "Total stocks ",
            value: "wei",
            sortable: false,
            class: "headstyle",
          },
          {
            text: "Min. Invest",
            value: "cha",
            sortable: false,
            class: "headstyle",
          },
          {
            text: "Hold. val (cr)",
            value: "port",
            sortable: false,
            class: "headstyle",
          },
          { text: "History", value: "hist", sortable: false, class: "headstyle" },
        ],
        datalast: [
          {
            imgnew: require("@/assets/newprof.svg"),
            text1: "Ashish Kacholia's",
            chip1: "Growth",
            chip2: "Equity",
            chip3: "ELSS",
            text2: "High",
            text3: "20",
            text4: "₹27,400",
            text5: "+20.2",
            text6: "+82.1",
          },
          {
            imgnew: require("@/assets/newprof.svg"),
            text1: "Ashish Kacholia's",
            chip1: "Growth",
            chip2: "Equity",
            chip3: "ELSS",
            text2: "High",
            text3: "20",
            text4: "₹27,400",
            text5: "+20.2",
            text6: "+82.1",
          },
          {
            imgnew: require("@/assets/newprof.svg"),
            text1: "Ashish Kacholia's",
            chip1: "Growth",
            chip2: "Equity",
            chip3: "ELSS",
            text2: "High",
            text3: "20",
            text4: "₹27,400",
            text5: "+20.2",
            text6: "+82.1",
          },
          {
            imgnew: require("@/assets/newprof.svg"),
            text1: "Ashish Kacholia's",
            chip1: "Growth",
            chip2: "Equity",
            chip3: "ELSS",
            text2: "High",
            text3: "20",
            text4: "₹27,400",
            text5: "+20.2",
            text6: "+82.1",
          },
          {
            imgnew: require("@/assets/newprof.svg"),
            text1: "Ashish Kacholia's",
            chip1: "Growth",
            chip2: "Equity",
            chip3: "ELSS",
            text2: "High",
            text3: "20",
            text4: "₹27,400",
            text5: "+20.2",
            text6: "+82.1",
          },
          {
            imgnew: require("@/assets/newprof.svg"),
            text1: "Ashish Kacholia's",
            chip1: "Growth",
            chip2: "Equity",
            chip3: "ELSS",
            text2: "High",
            text3: "20",
            text4: "₹27,400",
            text5: "+20.2",
            text6: "+82.1",
          },
        ],
      };
    },
    methods: {
        superstardetsiles() {
this.$router.push('superstardetailes')
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
  };
  </script>
  
  <style>
  .postionchangecat {
    position: absolute !important;
    top: 25px !important;
    right: 505px;
   
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