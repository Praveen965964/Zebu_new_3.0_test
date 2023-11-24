<template>
  <div>
    <!-- <v-btn @click="positionapi"></v-btn> -->
    <v-container v-if="home">
      <div class="mt-8">
        <p class="mb-0" style="color: #000;font-size: 20px;font-weight: 559;line-height: 16px;letter-spacing: -0.4px;">
          Positions
        </p>

        <v-tabs v-model="tab" show-arrows class="mt-4 mx-0 px-0" color="black ">
          <v-tab class="atbsss mx-0 px-1"> Stocks </v-tab>
          <v-tab class="atbsss ml-5"> F&O </v-tab>
          <v-tab class="atbsss ml-5"> Commodities </v-tab>
          <v-tab class="atbsss ml-5"> Currency </v-tab>
          <v-tab class="atbsss ml-5"> US stocks </v-tab>
          <p class="mb-0 mt-2 ml-auto">
            <v-icon size="8" color="#1FD601">mdi-circle</v-icon><span class="ml-2"
              style="font-weight: 400;font-size: 14px;font-weight: 500;line-height: 15px;color: black;letter-spacing: -0.28px;">Market
              live</span>
          </p>
          <v-tabs-items v-model="tab" style="border-top: 1px solid #dddddd">
            <v-tab-item>
              <v-row>
                <v-col cols="9">
                  <v-card style="border: 1px solid #dadde7; background-color: #fafbff" class="mt-8 pa-5 elevation-0">
                    <div class="d-flex justify-space-between">
                      <div>
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Profit/Loss
                        </p>
                        <p class="mb-0 mt-2" style="
                          color: #000;
                          font-size: 16px;
                          font-weight: 469;
                          line-height: 100%;
                        ">
                          ₹19.2K
                          <span style="
                            color: #43a833;
                            font-size: 16px;
                            font-weight: 469;
                            line-height: 100%;
                          ">+23.4%</span>
                        </p>
                      </div>
                      <div class="justify-space-between">
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Trade Value
                        </p>
                        <p class="mb-0 mt-2" style="
                          color: #000;
                          font-size: 16px;
                          font-weight: 469;
                          line-height: 100%; /* 16px */
                        ">
                          ₹32.6K
                        </p>
                      </div>
                      <div class="justify-space-between">
                        <p class="mb-0" style="color: #5e6b7d;font-size: 14px; font-weight: 469;line-height: 100%;letter-spacing: -0.14px;">
                          Open Position
                        </p>
                        <p class="mb-0 mt-2" style="color: #000;font-size: 16px;
                          font-weight: 469;
                          line-height: 100%; /* 16px */
                        ">
                          ₹9.2K
                          <span style="
                            color: #ff1717;
                            font-size: 16px;
                            font-weight: 469;
                            line-height: 100%; /* 16px */
                          ">-23.4%</span>
                        </p>
                      </div>
                      <div class="justify-space-between">
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Trade Positions
                        </p>

                        <v-chip class="mt-2" small label style="background-color: #ecf8f1"><span style="
                            color: #43a833;
                            text-align: center;
                            font-size: 10px;
                            font-weight: 600;
                            line-height: 16px;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                          ">10 Positive</span></v-chip>
                        <v-chip class="mt-2 ml-2" small label style="background-color: #fcf3f3"><span style="
                            color: #ff1717;
                            text-align: center;
                            font-size: 10px;
                            font-weight: 600;
                            line-height: 16px; /* 160% */
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                          ">3 Negative</span></v-chip>
                        <v-chip class="mt-2 ml-2" small label style="background-color: #fff"><span style="
                            color: #666;
                            font-size: 10px;
                            font-weight: 600;
                            line-height: 16px;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                          ">2 Closed</span></v-chip>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="3">
                  <v-card style="border: 1px solid #dadde7; background-color: #ffffff" class="mt-8 pa-6 elevation-0">
                    <div class="d-flex justify-space-between">
                      <div>
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Today’s High
                        </p>
                        <p class="mb-0 mt-2" style="
                          color: #43a833;
                          font-size: 16px;
                          font-weight: 469;
                          line-height: 100%; /* 16px */
                        ">
                          ₹19.2K
                        </p>
                      </div>
                      <div class="justify-space-between">
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Today’s Low
                        </p>
                        <p class="mb-0 mt-2" style="
                          color: #ff1717;
                          font-size: 16px;
                          font-weight: 469;
                          line-height: 100%; /* 16px */
                        ">
                          -₹2.6K
                        </p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <v-row class="pt-7">
                <v-col cols="8">
                  <p class="" style="
                    color: #162342;
                    font-size: 16px;
                    font-weight: 559;
                    line-height: 100%;
                  ">
                    Open Positions ({{ openlength }})
                  </p>
                </v-col>
                <v-col cols="4">
                  <div class="display-flex row mt-0 ssss">
                    <v-text-field class="searchforcommiditytexts pa-0" background-color="#F1F3F8"
                      label="Search for Stocks" solo rounded flat dense style="max-width: 212px" v-model="search">
                      <template v-slot:prepend-inner>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_2682_15138)">
                            <path d="M14.6667 14.6667L12 12" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10"
                              stroke-linecap="round" />
                            <path
                              d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                              stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_15138">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-text-field>
                    <!-- <v-select class="searchforcommidityfilter rounded-xl elevation-0 ml-2" flat
                                          background-color="#F1F3F8" :items="items" label="Filter"
                                          append-icon="mdi-chevron-down" dense solo
                                          style="max-width:36%;height:20px;background-color=">
                                          <template v-slot:append>
                                              <div class="pr-3 pt-1">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                      viewBox="0 0 15 15" fill="none">
                                                      <path d="M3.28125 6.09375L7.5 10.3125L11.7188 6.09375"
                                                          stroke="#777777" stroke-width="1.8" stroke-miterlimit="10"
                                                          stroke-linecap="round" stroke-linejoin="round" />
                                                  </svg>
                                              </div>
                                          </template>
                                          <template v-slot:prepend-inner>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12"
                                                  viewBox="0 0 14 12" fill="none">
                                                  <g clip-path="url(#clip0_2682_18796)">
                                                      <path d="M1.125 1.875H12.375" stroke="#666666" stroke-width="1.4"
                                                          stroke-miterlimit="10" stroke-linecap="round"
                                                          stroke-linejoin="round" />
                                                      <path d="M1.125 4.875H12.375" stroke="#666666" stroke-width="1.4"
                                                          stroke-miterlimit="10" stroke-linecap="round"
                                                          stroke-linejoin="round" />
                                                      <path d="M1.125 7.875H4.5" stroke="#666666" stroke-width="1.4"
                                                          stroke-miterlimit="10" stroke-linecap="round"
                                                          stroke-linejoin="round" />
                                                      <path d="M1.125 10.875H4.5" stroke="#666666" stroke-width="1.4"
                                                          stroke-miterlimit="10" stroke-linecap="round"
                                                          stroke-linejoin="round" />
                                                      <path d="M7.125 8.625L9 10.5L12.375 7.125" stroke="#666666"
                                                          stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"
                                                          stroke-linejoin="round" />
                                                  </g>
                                                  <defs>
                                                      <clipPath id="clip0_2682_18796">
                                                          <rect width="13.5" height="12" fill="white" />
                                                      </clipPath>
                                                  </defs>
                                              </svg>
                                          </template>
                                      </v-select> -->
                    <!-- <v-menu left offset-y>
                                          <template v-slot:activator="{ on, attrs }">
                                              <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="ml-6" icon
                                                  max-width="0px">
                                                  <v-icon color="black">mdi-dots-vertical</v-icon>
                                              </v-btn>
                                          </template>
                                          <v-list>
                                              <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                                  <v-list-item-title>{{
                                                      item.title
                                                  }}</v-list-item-title>
                                              </v-list-item>
                                          </v-list>
                                      </v-menu> -->
                  </div>
                </v-col>
              </v-row>

              <v-data-table hide-default-header :headers="postionheaders" :items="voldata" item-key="id"
                v-model="selectedRows" :search="search" class="elevation-0" hide-default-footer
                style="border: 1px solid #efeef3">
                <template v-slot:header>
                  <tr class="" style="background-color: #fafbff">
                    <th class="text-start">
                      <span class="pl-6" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Product</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-2" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Instrument</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-7" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Qty</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-11" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Buy Avg</span>
                    </th>
                    <th class="text-start pl-10">
                      <span class="" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">LTP</span>
                    </th>
                    <th class="text-start ml-3">
                      <span class="pl-4" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Profit & Loss</span>
                    </th>
                    <th class="pt-1" width="13%">
                      <v-row no-gutters>
                        <v-col cols="8">
                          <span class="pl-4" style="
                            color: #666;
                            font-size: 13px;
                            font-style: normal;
                            font-weight: 469;
                            line-height: 16px;
                          ">
                            P&L chg.</span>
                        </v-col>
                        <v-col class="" cols="2">
                          <!-- <v-menu left offset-y>
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
                                                  </v-menu> -->
                        </v-col>
                      </v-row>
                    </th>
                  </tr>
                </template>
                <v-divider></v-divider>

                <template v-slot:item="{ item }">
                  <tr class="eeeeeeeee" v-if="item.netqty > 0 || item.netqty < 0"
                    style="background-color: ; position: relative" @mouseover="selectItem(item)"
                    @mouseleave="unSelectItem(item)">
                    <td class="pr-0" style="color: #000000; font-size: 13px">
                      <v-chip class="ma-2" label :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                        <span class="" style="
                          color: #666;
                          font-size: 10px;
                          font-style: normal;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 1px;
                          text-transform: uppercase;
                        ">{{ item.s_prdt_ali }}</span>
                      </v-chip>
                    </td>
                    <td class="pr-0" style="width: 478px">
                      <span class="ml-n2" :class="item === selectedItem ? 'newcol' : 'black--text'
                        " style="
                        font-size: 14px;
                        font-weight: 600;
                        font-style: normal;
                        line-height: 16px;
                        word-spacing: -2px;
                      ">{{ item.tsym }}
                      </span>
                      <span class="ml-1" style="
                        font-size: 10px;
                        color: #999999;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 10px;
                        letter-spacing: 0.4px;
                      ">{{ item.NSE }}</span>

                      <!-- <div class="postionchangeopenpostion" v-if="item === selectedItem">
                                              <div class="display-flex row">
                                                  <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small style="
                            height: 20px;
                            min-width: 20px;
                            border-radius: 4px;
                            padding: 2px 6px;
                          " color="#43A833">
                                                      <span style="
                              font-size: 12px;
                              font-style: normal;
                              font-weight: 559;
                              line-height: 16px;
                            ">B</span></v-btn>
                                                  <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small style="
                            height: 20px;
                            min-width: 20px;
                            border-radius: 4px;
                            padding: 2px 6px;
                          " color="#FF1717">
                                                      <span style="
                              font-size: 12px;
                              font-style: normal;
                              font-weight: 559;
                              line-height: 16px;
                            ">S</span></v-btn>

                                                  <v-btn class="ml-1 pa-0 elevation-0" outlined dense small style="
                            min-width: 20px;
                            height: 20px;
                            border-radius: 4px;
                            border: 1px solid #cccccc;
                            background-color: white;
                          ">
                                                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                                          xmlns="http://www.w3.org/2000/svg">
                                                          <path
                                                              d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                                                              fill="#666666" />
                                                      </svg></v-btn>
                                                  <v-btn class="ml-1 pa-0 elevation-0" outlined small style="
                            min-width: 20px;
                            height: 20px;
                            border-radius: 4px;
                            border: 1px solid #cccccc;
                            background-color: white;
                          ">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                                          viewBox="0 0 10 10" fill="none">
                                                          <path
                                                              d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                                                              fill="#666666" />
                                                          <path
                                                              d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"
                                                              fill="#666666" />
                                                          <path
                                                              d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"
                                                              fill="#666666" />
                                                      </svg>
                                                  </v-btn>
                                              </div>
                                          </div> -->
                      <div style="visibility:hidden">
                        <div class="display-flex row cccccccccc">
                          <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small @click="modifyorder()"
                            style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;" color="#43A833">
                            <span
                              style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">M</span></v-btn>
                          <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small @click="cancelorder(val = item)"
                            style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;" color="#FF1717">
                            <span
                              style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">C</span></v-btn>

                          <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small @click='chart(val = item)'
                            style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                                fill="#666666" />
                            </svg></v-btn>
                          <v-menu ref="menu" :close-on-content-click="false" offset-x :nudge-width="200"
                            :open-on-click="true">
                            <template v-slot:activator='{ on }'>
                              <v-btn @click="totlist()" class="ml-1 pa-0  elevation-0" outlined small
                                style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white"
                                :ripple="false" v-on="on">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                  fill="none">
                                  <path
                                    d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                                    fill="#666666" />
                                  <path
                                    d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"
                                    fill="#666666" />
                                  <path
                                    d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"
                                    fill="#666666" />
                                </svg>
                              </v-btn>
                            </template>
                            <v-list v-if="list">
                              <v-list-item-group>
                                <v-list-item @click="add(val = item)">
                                  <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g clip-path="url(#clip0_6730_7531)">
                                        <path d="M7 1.1665V12.8332" stroke="#506D84" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                        <path d="M1.16797 7H12.8346" stroke="#506D84" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_6730_7531">
                                          <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                  <!-- <v-list-item-icon></v-list-item-icon> </v-list-item-icon> -->
                                  <v-list-item-content class='px-2'><span class='cccccccccc' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Add Order</span> </v-list-item-content>
                                </v-list-item>
                                <v-list-item @click="cancelorder(val = item)">
                                  <!-- <v-list-item-title></v-list-item-title> -->

                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16797 7H12.8346" stroke="#506D84" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  <!-- <v-list-item-icon ></v-list-item-icon> -->
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">
                                    Cancel Order</v-list-item-content>
                                </v-list-item>
                                <v-list-item @click="detail(val = item), ltp(val = item)">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7444)">
                                      <path d="M4.875 2.25H11.625" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path d="M4.875 6H11.625" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path d="M4.875 9.75H11.625" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path
                                        d="M0.746469 7.58567C0.868719 7.07005 1.34834 6.71717 1.86884 6.75242C2.23522 6.77717 2.59334 6.94705 2.76247 7.26355C2.79322 7.3213 2.86297 7.4683 2.86372 7.68767C2.86559 8.20367 2.48572 8.56892 1.87297 9.2098C1.61009 9.48505 1.22047 9.89867 0.746094 10.4259V10.4998H2.99947"
                                        stroke="#506D84" stroke-miterlimit="10" stroke-linecap="square" />
                                      <path d="M0.707031 2.24062L1.87591 1.5V5.25" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7444">
                                        <rect width="12" height="12" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">
                                    Detail</v-list-item-content>
                                </v-list-item>
                                <v-divider class="mx-4"></v-divider>
                                <v-list-item>
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 3.5L6 1.5L11.5 3.5L6 5.5L0.5 3.5Z" stroke="#506D84"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.5 6.5L6 8.5L0.5 6.5" stroke="#506D84" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                    <path d="M11.5 9.5L6 11.5L0.5 9.5" stroke="#506D84" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Create GTT /GTC</v-list-item-content>

                                </v-list-item>
                                <v-list-item @click="alertdetails(val = item)">
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7463)">
                                      <path
                                        d="M5.97609 9.625L6.91672 11.9595C7.15559 12.5563 6.86641 13.2339 6.27053 13.475C5.67291 13.7148 4.99434 13.4256 4.75372 12.8284L2.91797 8.3125"
                                        stroke="#506D84" stroke-miterlimit="10" />
                                      <path
                                        d="M6.125 3.0625H3.0625C1.61263 3.0625 0.4375 4.23763 0.4375 5.6875C0.4375 7.13737 1.61263 8.3125 3.0625 8.3125H6.125C8.3125 8.3125 10.9375 10.5 10.9375 10.5V0.875C10.9375 0.875 8.3125 3.0625 6.125 3.0625Z"
                                        stroke="#506D84" stroke-miterlimit="10" stroke-linecap="square" />
                                      <path
                                        d="M12.25 4.375C12.9749 4.375 13.5625 4.96256 13.5625 5.6875C13.5625 6.41244 12.9749 7 12.25 7"
                                        stroke="#506D84" stroke-miterlimit="10" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7463">
                                        <rect width="14" height="14" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Create Alert</v-list-item-content>

                                </v-list-item>
                                <v-list-item @click="marketdepth(val = item)">
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7471)">
                                      <path d="M0.582031 12.542H13.4154" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path d="M3.79036 5.54199H1.45703V10.792H3.79036V5.54199Z" stroke="#506D84"
                                        stroke-miterlimit="10" stroke-linecap="square" />
                                      <path d="M8.16536 1.4585H5.83203V10.7918H8.16536V1.4585Z" stroke="#506D84"
                                        stroke-miterlimit="10" stroke-linecap="square" />
                                      <path d="M12.5404 7.875H10.207V10.7917H12.5404V7.875Z" stroke="#506D84"
                                        stroke-miterlimit="10" stroke-linecap="square" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7471">
                                        <rect width="14" height="14" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Market Depth</v-list-item-content>

                                </v-list-item>
                                <v-list-item @click='chart(val = item)'>
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 7.58333L5.25 4.08333L9.33333 7L12.8333 1.75" stroke="#506D84"
                                      stroke-miterlimit="10" stroke-linecap="square" />
                                    <path d="M1.16797 12.2502L2.47814 9.62988" stroke="#506D84" stroke-miterlimit="10"
                                      stroke-linecap="square" />
                                    <path d="M1.16797 7.5835H3.5013L9.33464 10.5002L12.8346 8.16683" stroke="#506D84"
                                      stroke-miterlimit="10" stroke-linecap="square" />
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Chart</v-list-item-content>

                                </v-list-item>
                                <v-divider class="mx-4"></v-divider>
                                <v-list-item @click="marketwatch(val = item)">
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7489)">
                                      <path
                                        d="M9.5 1.03467H10.8125C10.8705 1.03467 10.9262 1.05771 10.9672 1.09874C11.0082 1.13976 11.0312 1.1954 11.0312 1.25342V2.31217H9.28125V1.25342C9.28125 1.1954 9.3043 1.13976 9.34532 1.09874C9.38634 1.05771 9.44198 1.03467 9.5 1.03467Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M8.75 4.37484V2.53078C8.75 2.47276 8.77305 2.41712 8.81407 2.3761C8.85509 2.33507 8.91073 2.31203 8.96875 2.31203H11.3859C11.4387 2.31143 11.4899 2.32992 11.5301 2.36409C11.5703 2.39826 11.5968 2.4458 11.6047 2.49796L11.8869 4.37484H8.75Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M12.6163 9.14795L12.9509 11.3311H8.74219V9.14795H12.6163Z" stroke="#506D84"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M5.25016 4.37484V2.53078C5.25016 2.47276 5.22711 2.41712 5.18609 2.3761C5.14506 2.33507 5.08942 2.31203 5.03141 2.31203H2.62516C2.5724 2.31143 2.52121 2.32992 2.48101 2.36409C2.44081 2.39826 2.41432 2.4458 2.40641 2.49796L2.11328 4.37484H5.25016Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M1.38156 9.14795L1.04688 11.3311H5.25563V9.14795H1.38156Z" stroke="#506D84"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M1.38281 9.14832H12.6178L11.8872 4.36426H2.11344L1.38281 9.14832Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M3.18359 1.03467H4.49609C4.55411 1.03467 4.60975 1.05771 4.65077 1.09874C4.6918 1.13976 4.71484 1.1954 4.71484 1.25342V2.31217H2.96484V1.25342C2.96484 1.1954 2.98789 1.13976 3.02891 1.09874C3.06994 1.05771 3.12558 1.03467 3.18359 1.03467Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M6.99844 7.77666C7.55417 7.77666 8.00469 7.32615 8.00469 6.77041C8.00469 6.21467 7.55417 5.76416 6.99844 5.76416C6.4427 5.76416 5.99219 6.21467 5.99219 6.77041C5.99219 7.32615 6.4427 7.77666 6.99844 7.77666Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M5.60047 11.3311H0.652344C0.531531 11.3311 0.433594 11.429 0.433594 11.5498V12.7464C0.433594 12.8672 0.531531 12.9651 0.652344 12.9651H5.60047C5.72128 12.9651 5.81922 12.8672 5.81922 12.7464V11.5498C5.81922 11.429 5.72128 11.3311 5.60047 11.3311Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M13.3427 11.3311H8.39453C8.27372 11.3311 8.17578 11.429 8.17578 11.5498V12.7464C8.17578 12.8672 8.27372 12.9651 8.39453 12.9651H13.3427C13.4635 12.9651 13.5614 12.8672 13.5614 12.7464V11.5498C13.5614 11.429 13.4635 11.3311 13.3427 11.3311Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7489">
                                        <rect width="14" height="14" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Add to market watch</v-list-item-content>

                                </v-list-item>
                                <v-list-item>
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7502)">
                                      <path d="M8.75 7H5.25" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path
                                        d="M12.25 1.3125H1.75C1.02513 1.3125 0.4375 1.90013 0.4375 2.625V11.375C0.4375 12.0999 1.02513 12.6875 1.75 12.6875H12.25C12.9749 12.6875 13.5625 12.0999 13.5625 11.375V2.625C13.5625 1.90013 12.9749 1.3125 12.25 1.3125Z"
                                        stroke="#506D84" stroke-miterlimit="10" stroke-linecap="square" />
                                      <path
                                        d="M2.29688 3.71875C2.59891 3.71875 2.84375 3.47391 2.84375 3.17188C2.84375 2.86984 2.59891 2.625 2.29688 2.625C1.99484 2.625 1.75 2.86984 1.75 3.17188C1.75 3.47391 1.99484 3.71875 2.29688 3.71875Z"
                                        fill="#506D84" />
                                      <path
                                        d="M4.26562 3.71875C4.56766 3.71875 4.8125 3.47391 4.8125 3.17188C4.8125 2.86984 4.56766 2.625 4.26562 2.625C3.96359 2.625 3.71875 2.86984 3.71875 3.17188C3.71875 3.47391 3.96359 3.71875 4.26562 3.71875Z"
                                        fill="#506D84" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7502">
                                        <rect width="14" height="14" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Fundamentals</span>

                                </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          </v-menu>

                        </div>
                      </div>
                    </td>

                    <td>
                      <v-chip class="ml-3" outlined label :background-color="item.netqty > 0 ? 'black' : 'blue'"
                        :color="item.netqty >= 0 ? '#C1E7BA' : '#FFCDCD'" style="height: 20px">
                        <span class="" v-if="item.netqty >= 0" style="
                          font-size: 10px;
                          font-style: normal;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 1px;
                          color: #43a833;
                        ">{{ item.netqty }}</span>

                        <span v-else class="font-weight-medium" style="font-size: 11px; color: #ff1717">
                          {{ item.netqty }}</span>
                      </v-chip>
                    </td>
                    <td class="pr-0 pl-11">
                      <span class="" v-if="item.daysellavgprc == 0" style="
                        color: #000;
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.daybuyavgprc }}</span>
                      <span class="" v-else style="
                        color: #000;
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.daysellavgprc }}</span>
                    </td>
                    <td class="pr-0 pl-10">
                      <span class="" style="
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.lp }}</span>
                    </td>
                    <td class="pr-0 pl-">
                      <span class="" v-if="item.netqty == 0" style="
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.rpnl }}</span>
                      <span class="" v-else style="
                        color: #000;
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      "> {{ (item.netavgprc - (item.lp * item.netqty)).toFixed(2) }} </span>
                    </td>

                    <td class="pr-0 pl-8">
                      <span class="" v-if="item.plchg > 0" style="
                        color: #43a833;
                        font-size: 13px;
                        font-weight: 559;
                        line-height: 16px;
                      ">+{{ item.plchg }}</span>
                      <span class="" v-else style="
                        font-size: 13px;
                        font-weight: 559;
                        line-height: 16px;
                        color: #ff1717;
                      ">{{ item.plchg }}</span>
                      <div class="postionchangeopenpostionnew" v-if="item === selectedItem">
                        <div class="display-flex row">
                          <v-btn class="" width="24px" height="24px" fab dark small outlined style="
                            border: 2px solid #cccccc;
                            background-color: #ffffff;
                          " color="#666666">
                            <v-icon size="10"> mdi-pencil </v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </td>
                  </tr>


                </template>
              </v-data-table>

              <v-row class="pt-7">
                <v-col cols="8">
                  <p class="" style="
                    color: #162342;
                    font-size: 16px;
                    font-weight: 559;
                    line-height: 100%;
                  ">

                    Closed Positions ({{ closelength }})
                    <!-- </div> -->
                  </p>
                </v-col>
                <v-col cols="4">
                  <div class="display-flex row mt-0 ssss">
                    <v-text-field class="searchforcommiditytexts pa-0" v-model="search1" background-color="#F1F3F8"
                      label="Search for Stocks" solo rounded flat dense style="max-width: 212px">
                      <template v-slot:prepend-inner>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_2682_15138)">
                            <path d="M14.6667 14.6667L12 12" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10"
                              stroke-linecap="round" />
                            <path
                              d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                              stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_15138">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-text-field>
                    <v-select class="searchforcommidityfilter rounded-xl elevation-0 ml-2" flat background-color="#F1F3F8"
                      :items="items" label="Filter" append-icon="mdi-chevron-down" dense solo
                      style="max-width:36%;height:20px;background-color=">
                      <template v-slot:append>
                        <div class="pr-3 pt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M3.28125 6.09375L7.5 10.3125L11.7188 6.09375" stroke="#777777" stroke-width="1.8"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </template>
                      <template v-slot:prepend-inner>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                          <g clip-path="url(#clip0_2682_18796)">
                            <path d="M1.125 1.875H12.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.125 4.875H12.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.125 7.875H4.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.125 10.875H4.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.125 8.625L9 10.5L12.375 7.125" stroke="#666666" stroke-width="1.4"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_18796">
                              <rect width="13.5" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-select>
                    <!-- <v-menu left offset-y>
                                          <template v-slot:activator="{ on, attrs }">
                                              <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="ml-6" icon
                                                  max-width="0px">
                                                  <v-icon color="black">mdi-dots-vertical</v-icon>
                                              </v-btn>
                                          </template>
                                          <v-list>
                                              <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                                  <v-list-item-title>{{
                                                      item.title
                                                  }}</v-list-item-title>
                                              </v-list-item>
                                          </v-list>
                                      </v-menu> -->
                  </div>
                </v-col>
              </v-row>

              <v-data-table hide-default-header :headers="postionheaders" :items="voldata" item-key="id"
                class="elevation-0" hide-default-footer :search="search1" style="border: 1px solid #efeef3">
                <template v-slot:header>
                  <tr class="" style="background-color: #fafbff">
                    <th class="text-start">
                      <span class="pl-6" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Product</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-2" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Instrument</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-7" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Qty</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-11" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Buy Avg</span>
                    </th>
                    <th class="text-start pl-10">
                      <span class="" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">LTP</span>
                    </th>
                    <th class="text-start ml-3">
                      <span class="pl-4" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Profit & Loss</span>
                    </th>
                    <th class="pt-1" width="13%">
                      <v-row no-gutters>
                        <v-col cols="8">
                          <span class="pl-4" style="
                            color: #666;
                            font-size: 13px;
                            font-style: normal;
                            font-weight: 469;
                            line-height: 16px;
                          ">
                            P&L chg.</span>
                        </v-col>
                        <v-col class="" cols="2">
                       
                        </v-col>
                      </v-row>
                    </th>
                  </tr>
                </template>
                <v-divider></v-divider>
                <template v-slot:item="{ item }">
                  <tr v-if="item.netqty == 0" class="eeeeeeeee" style="background-color: ; position: relative"
                    @mouseover="selectItem(item)" @mouseleave="unSelectItem(item)">
                    <td class="pr-0" style="color: #000000; font-size: 13px">
                      <v-chip class="ma-2" label :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                        <span class="" style="
                          color: #666;
                          font-size: 10px;
                          font-style: normal;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 1px;
                          text-transform: uppercase;
                        ">{{ item.s_prdt_ali }}</span>
                      </v-chip>
                    </td>
                    <td class="pr-0" style="width: 478px">
                      <span class="ml-n2" :class="item === selectedItem ? 'newcol' : 'black--text'
                        " style="
                        font-size: 14px;
                        font-weight: 600;
                        font-style: normal;
                        line-height: 16px;
                        word-spacing: -2px;
                      ">{{ item.tsym }}
                      </span>
                      <v-row>
                        <v-col cols="6"><p class="ml-1 mt-4 mb-0" style="
                        font-size: 10px;
                        color: #999999;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 10px;
                        letter-spacing: 0.4px;
                      ">{{ item.NSE }}</p></v-col>
                      <v-col cols="6">
                        <div style="visibility:hidden">
                        <div class="display-flex row cccccccccc">
                          <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small @click="buy(val = item)"
                            style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;" color="#43A833">
                            <span
                              style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">B</span></v-btn>
                          <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small @click="sell(val = item)"
                            style="height:20px;min-width:20px;border-radius: 4px;padding: 2px 6px;" color="#FF1717">
                            <span
                              style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">S</span></v-btn>

                          <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small @click='chart(val = item)'
                            style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                                fill="#666666" />
                            </svg></v-btn>
                          <v-menu ref="menu" :close-on-content-click="false" offset-x :nudge-width="200"
                            :open-on-click="true">
                            <template v-slot:activator='{ on }'>
                              <v-btn @click="totlist()" class="ml-1 pa-0  elevation-0" outlined small
                                style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white"
                                :ripple="false" v-on="on">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                  fill="none">
                                  <path
                                    d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                                    fill="#666666" />
                                  <path
                                    d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"
                                    fill="#666666" />
                                  <path
                                    d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"
                                    fill="#666666" />
                                </svg>
                              </v-btn>
                            </template>
                            <v-list v-if="list">
                              <v-list-item-group>
                                <v-list-item @click="add(val = item)">
                                  <span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <g clip-path="url(#clip0_6730_7531)">
                                        <path d="M7 1.1665V12.8332" stroke="#506D84" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                        <path d="M1.16797 7H12.8346" stroke="#506D84" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_6730_7531">
                                          <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                  <!-- <v-list-item-icon></v-list-item-icon> </v-list-item-icon> -->
                                  <v-list-item-content class='px-2'><span class='cccccccccc' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Buy Order</span> </v-list-item-content>
                                </v-list-item>
                                <v-list-item @click="cancelorder(item)">
                                  <!-- <v-list-item-title></v-list-item-title> -->

                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.16797 7H12.8346" stroke="#506D84" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  <!-- <v-list-item-icon ></v-list-item-icon> -->
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">
                                    Sell Order</v-list-item-content>
                                </v-list-item>
                                <v-list-item @click="detail(val = item), ltp(val = item)">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7444)">
                                      <path d="M4.875 2.25H11.625" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path d="M4.875 6H11.625" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path d="M4.875 9.75H11.625" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path
                                        d="M0.746469 7.58567C0.868719 7.07005 1.34834 6.71717 1.86884 6.75242C2.23522 6.77717 2.59334 6.94705 2.76247 7.26355C2.79322 7.3213 2.86297 7.4683 2.86372 7.68767C2.86559 8.20367 2.48572 8.56892 1.87297 9.2098C1.61009 9.48505 1.22047 9.89867 0.746094 10.4259V10.4998H2.99947"
                                        stroke="#506D84" stroke-miterlimit="10" stroke-linecap="square" />
                                      <path d="M0.707031 2.24062L1.87591 1.5V5.25" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7444">
                                        <rect width="12" height="12" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">
                                    Detail</v-list-item-content>
                                </v-list-item>
                                <v-divider class="mx-4"></v-divider>
                                <v-list-item>
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 3.5L6 1.5L11.5 3.5L6 5.5L0.5 3.5Z" stroke="#506D84"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.5 6.5L6 8.5L0.5 6.5" stroke="#506D84" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                    <path d="M11.5 9.5L6 11.5L0.5 9.5" stroke="#506D84" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Create GTT /GTC</v-list-item-content>

                                </v-list-item>
                                <v-list-item @click="alertdetails(val = item)">
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7463)">
                                      <path
                                        d="M5.97609 9.625L6.91672 11.9595C7.15559 12.5563 6.86641 13.2339 6.27053 13.475C5.67291 13.7148 4.99434 13.4256 4.75372 12.8284L2.91797 8.3125"
                                        stroke="#506D84" stroke-miterlimit="10" />
                                      <path
                                        d="M6.125 3.0625H3.0625C1.61263 3.0625 0.4375 4.23763 0.4375 5.6875C0.4375 7.13737 1.61263 8.3125 3.0625 8.3125H6.125C8.3125 8.3125 10.9375 10.5 10.9375 10.5V0.875C10.9375 0.875 8.3125 3.0625 6.125 3.0625Z"
                                        stroke="#506D84" stroke-miterlimit="10" stroke-linecap="square" />
                                      <path
                                        d="M12.25 4.375C12.9749 4.375 13.5625 4.96256 13.5625 5.6875C13.5625 6.41244 12.9749 7 12.25 7"
                                        stroke="#506D84" stroke-miterlimit="10" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7463">
                                        <rect width="14" height="14" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Create Alert</v-list-item-content>

                                </v-list-item>
                                <v-list-item @click="marketdepth(val = item)">
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7471)">
                                      <path d="M0.582031 12.542H13.4154" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path d="M3.79036 5.54199H1.45703V10.792H3.79036V5.54199Z" stroke="#506D84"
                                        stroke-miterlimit="10" stroke-linecap="square" />
                                      <path d="M8.16536 1.4585H5.83203V10.7918H8.16536V1.4585Z" stroke="#506D84"
                                        stroke-miterlimit="10" stroke-linecap="square" />
                                      <path d="M12.5404 7.875H10.207V10.7917H12.5404V7.875Z" stroke="#506D84"
                                        stroke-miterlimit="10" stroke-linecap="square" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7471">
                                        <rect width="14" height="14" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Market Depth</v-list-item-content>

                                </v-list-item>
                                <v-list-item @click='chart(val = item)'>
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 7.58333L5.25 4.08333L9.33333 7L12.8333 1.75" stroke="#506D84"
                                      stroke-miterlimit="10" stroke-linecap="square" />
                                    <path d="M1.16797 12.2502L2.47814 9.62988" stroke="#506D84" stroke-miterlimit="10"
                                      stroke-linecap="square" />
                                    <path d="M1.16797 7.5835H3.5013L9.33464 10.5002L12.8346 8.16683" stroke="#506D84"
                                      stroke-miterlimit="10" stroke-linecap="square" />
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Chart</v-list-item-content>

                                </v-list-item>
                                <v-divider class="mx-4"></v-divider>
                                <v-list-item @click="marketwatch(val = item)">
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7489)">
                                      <path
                                        d="M9.5 1.03467H10.8125C10.8705 1.03467 10.9262 1.05771 10.9672 1.09874C11.0082 1.13976 11.0312 1.1954 11.0312 1.25342V2.31217H9.28125V1.25342C9.28125 1.1954 9.3043 1.13976 9.34532 1.09874C9.38634 1.05771 9.44198 1.03467 9.5 1.03467Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M8.75 4.37484V2.53078C8.75 2.47276 8.77305 2.41712 8.81407 2.3761C8.85509 2.33507 8.91073 2.31203 8.96875 2.31203H11.3859C11.4387 2.31143 11.4899 2.32992 11.5301 2.36409C11.5703 2.39826 11.5968 2.4458 11.6047 2.49796L11.8869 4.37484H8.75Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M12.6163 9.14795L12.9509 11.3311H8.74219V9.14795H12.6163Z" stroke="#506D84"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M5.25016 4.37484V2.53078C5.25016 2.47276 5.22711 2.41712 5.18609 2.3761C5.14506 2.33507 5.08942 2.31203 5.03141 2.31203H2.62516C2.5724 2.31143 2.52121 2.32992 2.48101 2.36409C2.44081 2.39826 2.41432 2.4458 2.40641 2.49796L2.11328 4.37484H5.25016Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M1.38156 9.14795L1.04688 11.3311H5.25563V9.14795H1.38156Z" stroke="#506D84"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                      <path d="M1.38281 9.14832H12.6178L11.8872 4.36426H2.11344L1.38281 9.14832Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M3.18359 1.03467H4.49609C4.55411 1.03467 4.60975 1.05771 4.65077 1.09874C4.6918 1.13976 4.71484 1.1954 4.71484 1.25342V2.31217H2.96484V1.25342C2.96484 1.1954 2.98789 1.13976 3.02891 1.09874C3.06994 1.05771 3.12558 1.03467 3.18359 1.03467Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M6.99844 7.77666C7.55417 7.77666 8.00469 7.32615 8.00469 6.77041C8.00469 6.21467 7.55417 5.76416 6.99844 5.76416C6.4427 5.76416 5.99219 6.21467 5.99219 6.77041C5.99219 7.32615 6.4427 7.77666 6.99844 7.77666Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M5.60047 11.3311H0.652344C0.531531 11.3311 0.433594 11.429 0.433594 11.5498V12.7464C0.433594 12.8672 0.531531 12.9651 0.652344 12.9651H5.60047C5.72128 12.9651 5.81922 12.8672 5.81922 12.7464V11.5498C5.81922 11.429 5.72128 11.3311 5.60047 11.3311Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                      <path
                                        d="M13.3427 11.3311H8.39453C8.27372 11.3311 8.17578 11.429 8.17578 11.5498V12.7464C8.17578 12.8672 8.27372 12.9651 8.39453 12.9651H13.3427C13.4635 12.9651 13.5614 12.8672 13.5614 12.7464V11.5498C13.5614 11.429 13.4635 11.3311 13.3427 11.3311Z"
                                        stroke="#506D84" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7489">
                                        <rect width="14" height="14" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <v-list-item-content class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Add to market watch</v-list-item-content>

                                </v-list-item>
                                <v-list-item>
                                  <!-- <v-list-item-title></v-list-item-title> -->
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6730_7502)">
                                      <path d="M8.75 7H5.25" stroke="#506D84" stroke-miterlimit="10"
                                        stroke-linecap="square" />
                                      <path
                                        d="M12.25 1.3125H1.75C1.02513 1.3125 0.4375 1.90013 0.4375 2.625V11.375C0.4375 12.0999 1.02513 12.6875 1.75 12.6875H12.25C12.9749 12.6875 13.5625 12.0999 13.5625 11.375V2.625C13.5625 1.90013 12.9749 1.3125 12.25 1.3125Z"
                                        stroke="#506D84" stroke-miterlimit="10" stroke-linecap="square" />
                                      <path
                                        d="M2.29688 3.71875C2.59891 3.71875 2.84375 3.47391 2.84375 3.17188C2.84375 2.86984 2.59891 2.625 2.29688 2.625C1.99484 2.625 1.75 2.86984 1.75 3.17188C1.75 3.47391 1.99484 3.71875 2.29688 3.71875Z"
                                        fill="#506D84" />
                                      <path
                                        d="M4.26562 3.71875C4.56766 3.71875 4.8125 3.47391 4.8125 3.17188C4.8125 2.86984 4.56766 2.625 4.26562 2.625C3.96359 2.625 3.71875 2.86984 3.71875 3.17188C3.71875 3.47391 3.96359 3.71875 4.26562 3.71875Z"
                                        fill="#506D84" />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_6730_7502">
                                        <rect width="14" height="14" fill="white" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                  <span class='px-2' style="font-family: Inter V;
font-size: 14px;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
">Fundamentals</span>

                                </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          </v-menu>

                        </div>
                      </div>
                      </v-col>
                      </v-row>
                      
                      
                    </td>

                    <td>
                      <v-chip class="ml-3" outlined label :background-color="item.netqty > 0 ? 'black' : 'blue'"
                        :color="item.netqty >= 0 ? '#C1E7BA' : '#FFCDCD'" style="height: 20px">
                        <span class="" v-if="item.netqty >= 0" style="
                          font-size: 10px;
                          font-style: normal;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 1px;
                          color: #43a833;
                        ">{{ item.netqty }}</span>

                        <span v-else class="font-weight-medium" style="font-size: 11px; color: #ff1717">
                          {{ item.netqty }}</span>
                      </v-chip>
                    </td>
                    <td class="pr-0 pl-11">
                      <span class="" v-if="item.daysellavgprc == 0" style="
                        color: #000;
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.daybuyavgprc }}</span>
                      <span class="" v-else style="
                        color: #000;
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.daysellavgprc }}</span>
                    </td>
                    <td class="pr-0 pl-10">
                      <span class="" style="
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.lp }}</span>
                    </td>
                    <td class="pr-0 pl-">
                      <span class="" v-if="item.netqty == 0" style="
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.rpnl }}</span>
                      <span class="" v-else style="
                        color: #000;
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      "> {{ (item.new = item.netavgprc - item.lp * item.netqty).toFixed(2) }} </span>
                    </td>

                    <td class="pr-0 pl-8">
                      <span class="" v-if="item.plchg > 0" style="
                        color: #43a833;
                        font-size: 13px;
                        font-weight: 559;
                        line-height: 16px;
                      ">+{{ item.plchg }}</span>
                      <span class="" v-else style="
                        font-size: 13px;
                        font-weight: 559;
                        line-height: 16px;
                        color: #ff1717;
                      ">{{ item.plchg }}</span>
                      <div class="postionchangeopenpostionnew" v-if="item === selectedItem">
                        <div class="display-flex row">
                          <v-btn class="" width="24px" height="24px" fab dark small outlined style="
                            border: 2px solid #cccccc;
                            background-color: #ffffff;
                          " color="#666666">
                            <v-icon size="10"> mdi-pencil </v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </v-data-table>

              <p class="font-weight-bold mb-1 pt-7" style="color: #000000; font-size: 18px">
                Position Breakdown
              </p>
              <p class="font-weight-normal mb-1" style="color: #666666; font-size: 14px">
                Your favourite stocks market watch
              </p>
              <v-row no-gutters class="pt-16">
                <v-col cols="2"> </v-col>
                <v-col class="mt-16" align="right" cols="3">
                  <v-card class="mt-13 elevation-0 ml-end" color="#FF1717" height="8px" width="80%">
                  </v-card>
                  <v-card class="mt-7 elevation-0" color="#FF1717" height="8px" width="60%">
                  </v-card>
                  <v-card class="mt-7 elevation-0" color="#FF1717" height="8px" width="40%">
                  </v-card>
                </v-col>
                <v-col class="text-center" cols="2">
                  <p class="font-weight-bold" style="font-size: 14px; color: #000000">
                    Reliance
                  </p>
                  <p class="font-weight-bold" style="font-size: 14px; color: #000000">
                    ITC
                  </p>
                  <p class="font-weight-bold" style="font-size: 14px; color: #000000">
                    Aurobindo pharma
                  </p>
                  <p class="font-weight-bold" style="font-size: 14px; color: #000000">
                    Strides pharma
                  </p>
                  <p class="font-weight-bold" style="font-size: 14px; color: #000000">
                    Sun pharma
                  </p>
                  <p class="font-weight-bold" style="font-size: 14px; color: #000000">
                    Bharti Airtel
                  </p>
                  <!-- <p class="font-weight-bold" style="font-size: 14px;color: #000000;">Strides pharma</p> -->
                </v-col>
                <v-col class="" cols="3">
                  <v-card class="mt-2 elevation-0" color="#43A833" height="8px" width="80%">
                  </v-card>
                  <v-card class="mt-6 elevation-0" color="#43A833" height="8px" width="65%">
                  </v-card>
                  <v-card class="mt-8 elevation-0" color="#43A833" height="8px" width="50%">
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>

            <v-tab-item>
              <v-row>
                <v-col cols="9">
                  <v-card style="border: 1px solid #dadde7; background-color: #fafbff" class="mt-8 pa-5 elevation-0">
                    <div class="d-flex justify-space-between">
                      <div>
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Profit/Loss
                        </p>
                        <p class="mb-0 mt-2" style="
                          color: #000;
                          font-size: 16px;
                          font-weight: 469;
                          line-height: 100%; /* 16px */
                        ">
                          ₹19.2K
                          <span style="
                            color: #43a833;
                            font-size: 16px;
                            font-weight: 469;
                            line-height: 100%; /* 16px */
                          ">+23.4%</span>
                        </p>
                      </div>
                      <div class="justify-space-between">
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Trade Value
                        </p>
                        <p class="mb-0 mt-2" style="
                          color: #000;
                          font-size: 16px;
                          font-weight: 469;
                          line-height: 100%; /* 16px */
                        ">
                          ₹32.6K
                        </p>
                      </div>
                      <div class="justify-space-between">
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Open Position
                        </p>
                        <p class="mb-0 mt-2" style="
                          color: #000;
                          font-size: 16px;
                          font-weight: 469;
                          line-height: 100%; /* 16px */
                        ">
                          ₹9.2K
                          <span style="
                            color: #ff1717;
                            font-size: 16px;
                            font-weight: 469;
                            line-height: 100%; /* 16px */
                          ">-23.4%</span>
                        </p>
                      </div>
                      <div class="justify-space-between">
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Trade Positions
                        </p>

                        <v-chip class="mt-2" small label style="background-color: #ecf8f1"><span style="
                            color: #43a833;
                            text-align: center;
                            font-size: 10px;
                            font-weight: 600;
                            line-height: 16px;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                          ">10 Positive</span></v-chip>
                        <v-chip class="mt-2 ml-2" small label style="background-color: #fcf3f3"><span style="
                            color: #ff1717;
                            text-align: center;
                            font-size: 10px;
                            font-weight: 600;
                            line-height: 16px; /* 160% */
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                          ">3 Negative</span></v-chip>
                        <v-chip class="mt-2 ml-2" small label style="background-color: #fff"><span style="
                            color: #666;
                            font-size: 10px;
                            font-weight: 600;
                            line-height: 16px;
                            letter-spacing: 0.5px;
                            text-transform: uppercase;
                          ">2 Closed</span></v-chip>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="3">
                  <v-card style="border: 1px solid #dadde7; background-color: #ffffff" class="mt-8 pa-6 elevation-0">
                    <div class="d-flex justify-space-between">
                      <div>
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Today’s High
                        </p>
                        <p class="mb-0 mt-2" style="
                          color: #43a833;
                          font-size: 16px;
                          font-weight: 469;
                          line-height: 100%; /* 16px */
                        ">
                          ₹19.2K
                        </p>
                      </div>
                      <div class="justify-space-between">
                        <p class="mb-0" style="
                          color: #5e6b7d;
                          font-size: 14px;
                          font-weight: 469;
                          line-height: 100%; /* 14px */
                          letter-spacing: -0.14px;
                        ">
                          Today’s Low
                        </p>
                        <p class="mb-0 mt-2" style="
                          color: #ff1717;
                          font-size: 16px;
                          font-weight: 469;
                          line-height: 100%; /* 16px */
                        ">
                          -₹2.6K
                        </p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <v-row class="pt-7">
                <v-col cols="8">
                  <p class="" style="
                    color: #162342;
                    font-size: 16px;
                    font-weight: 559;
                    line-height: 100%;
                  ">
                    Open Positions (8)
                  </p>
                </v-col>
                <v-col cols="4">
                  <div class="display-flex row mt-0 ssss">
                    <v-text-field class="searchforcommiditytexts pa-0" background-color="#F1F3F8"
                      label="Search for F&O Stocks" solo rounded flat dense style="max-width: 212px" v-model="search2">
                      <template v-slot:prepend-inner>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_2682_15138)">
                            <path d="M14.6667 14.6667L12 12" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10"
                              stroke-linecap="round" />
                            <path
                              d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                              stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_15138">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-text-field>
                    <v-select class="searchforcommidityfilter rounded-xl elevation-0 ml-2" flat background-color="#F1F3F8"
                      :items="items" label="Filter" append-icon="mdi-chevron-down" dense solo
                      style="max-width:36%;height:20px;background-color=">
                      <template v-slot:append>
                        <div class="pr-3 pt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M3.28125 6.09375L7.5 10.3125L11.7188 6.09375" stroke="#777777" stroke-width="1.8"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </template>
                      <template v-slot:prepend-inner>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                          <g clip-path="url(#clip0_2682_18796)">
                            <path d="M1.125 1.875H12.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.125 4.875H12.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.125 7.875H4.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.125 10.875H4.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.125 8.625L9 10.5L12.375 7.125" stroke="#666666" stroke-width="1.4"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_18796">
                              <rect width="13.5" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-select>
                    <!-- <v-menu left offset-y>
                                          <template v-slot:activator="{ on, attrs }">
                                              <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="ml-6" icon
                                                  max-width="0px">
                                                  <v-icon color="black">mdi-dots-vertical</v-icon>
                                              </v-btn>
                                          </template>
                                          <v-list>
                                              <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                                  <v-list-item-title>{{
                                                      item.title
                                                  }}</v-list-item-title>
                                              </v-list-item>
                                          </v-list>
                                      </v-menu> -->
                  </div>
                </v-col>
              </v-row>

              <v-data-table hide-default-header :headers="postionheaders" :items="postionitems" item-key="id"
                v-model="selectedRows" :search="search2" class="elevation-0" hide-default-footer
                style="border: 1px solid #efeef3">
                <template v-slot:header>
                  <tr class="" style="background-color: #fafbff">
                    <th class="text-start">
                      <span class="pl-6" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Product</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-2" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Instrument</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-7" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Qty</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-11" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Buy Avg</span>
                    </th>
                    <th class="text-start pl-10">
                      <span class="" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">LTP</span>
                    </th>
                    <th class="text-start ml-3">
                      <span class="pl-4" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Profit & Loss</span>
                    </th>
                    <th class="pt-1" width="13%">
                      <v-row no-gutters>
                        <v-col cols="8">
                          <span class="pl-4" style="
                            color: #666;
                            font-size: 13px;
                            font-style: normal;
                            font-weight: 469;
                            line-height: 16px;
                          ">
                            P&L chg.</span>
                        </v-col>
                        <v-col class="" cols="2">
                          <!-- <v-menu left offset-y>
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
                                                  </v-menu> -->
                        </v-col>
                      </v-row>
                    </th>
                  </tr>
                </template>
                <v-divider></v-divider>
                <template v-slot:item="{ item }">
                  <tr class="" style="background-color: ; position: relative" @mouseover="selectItem2(item)"
                    @mouseleave="unSelectItem2(item)">
                    <td class="pr-0" style="color: #000000; font-size: 13px">
                      <v-chip class="ma-2" label :color="item === selectedItem2 ? '#FFFFFF' : '#F1F3F8'">
                        <span class="" style="
                          color: #666;
                          font-size: 10px;
                          font-style: normal;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 1px;
                          text-transform: uppercase;
                        ">{{ item.Productname }}</span>
                      </v-chip>
                    </td>
                    <td class="pr-0" style="width: 478px">
                      <span class="ml-n2" :class="item === selectedItem2 ? 'newcol' : 'black--text'
                        " style="
                        font-size: 14px;
                        font-weight: 600;
                        font-style: normal;
                        line-height: 16px;
                        word-spacing: -2px;
                      ">{{ item.instrument }}
                      </span>
                      <span class="ml-1" style="
                        font-size: 10px;
                        color: #999999;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 10px;
                        letter-spacing: 0.4px;
                      ">{{ item.NSE }}</span>

                      <div class="postionchangeopenpostion" v-if="item === selectedItem2">
                        <div class="display-flex row">
                          <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small style="
                            height: 20px;
                            min-width: 20px;
                            border-radius: 4px;
                            padding: 2px 6px;
                          " color="#43A833">
                            <span style="
                              font-size: 12px;
                              font-style: normal;
                              font-weight: 559;
                              line-height: 16px;
                            ">B</span></v-btn>
                          <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small style="
                            height: 20px;
                            min-width: 20px;
                            border-radius: 4px;
                            padding: 2px 6px;
                          " color="#FF1717">
                            <span style="
                              font-size: 12px;
                              font-style: normal;
                              font-weight: 559;
                              line-height: 16px;
                            ">S</span></v-btn>

                          <v-btn class="ml-1 pa-0 elevation-0" outlined dense small style="
                            min-width: 20px;
                            height: 20px;
                            border-radius: 4px;
                            border: 1px solid #cccccc;
                            background-color: white;
                          ">
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                                fill="#666666" />
                            </svg></v-btn>
                          <v-btn class="ml-1 pa-0 elevation-0" outlined small style="
                            min-width: 20px;
                            height: 20px;
                            border-radius: 4px;
                            border: 1px solid #cccccc;
                            background-color: white;
                          ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path
                                d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                                fill="#666666" />
                              <path
                                d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"
                                fill="#666666" />
                              <path
                                d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"
                                fill="#666666" />
                            </svg>
                          </v-btn>
                        </div>
                      </div>
                    </td>

                    <td>
                      <v-chip class="px-2 py-1" outlined label :background-color="item.qty > 0 ? 'black' : 'blue'"
                        :color="item.qty > 0 ? '#C1E7BA' : '#FFCDCD'" style="width: 36px; height: 20px">
                        <span class="" v-if="item.qty > 0" style="
                          font-size: 10px;
                          font-style: normal;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 1px;
                          color: #43a833;
                        ">+{{ item.qty }}</span>
                        <span v-else class="font-weight-medium" style="font-size: 11px; color: #ff1717">
                          {{ item.qty }}</span>
                      </v-chip>
                    </td>
                    <td class="pr-0 pl-11">
                      <span class="" style="
                        color: #000;
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.avg }}</span>
                    </td>
                    <td class="pr-0 pl-10">
                      <span class="" style="
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.LTP }}</span>
                    </td>
                    <td class="pr-0 pl-">
                      <span class="" style="
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.plLoss }}</span>
                    </td>

                    <td class="pr-0 pl-8">
                      <span class="" v-if="item.plchg > 0" style="
                        color: #43a833;
                        font-size: 13px;
                        font-weight: 559;
                        line-height: 16px;
                      ">+{{ item.plchg }}</span>
                      <span class="" v-else style="
                        font-size: 13px;
                        font-weight: 559;
                        line-height: 16px;
                        color: #ff1717;
                      ">{{ item.plchg }}</span>
                      <div class="postionchangeopenpostionnew" v-if="item === selectedItem2">
                        <div class="display-flex row">
                          <v-btn class="" width="24px" height="24px" fab dark small outlined style="
                            border: 2px solid #cccccc;
                            background-color: #ffffff;
                          " color="#666666">
                            <v-icon size="10"> mdi-pencil </v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </v-data-table>

              <v-row class="pt-7">
                <v-col cols="8">
                  <p class="" style="
                    color: #162342;
                    font-size: 16px;
                    font-weight: 559;
                    line-height: 100%;
                  ">
                    Closed Positions (8)
                  </p>
                </v-col>
                <v-col cols="4">
                  <div class="display-flex row mt-0 ssss">
                    <v-text-field class="searchforcommiditytexts pa-0" background-color="#F1F3F8"
                      label="Search for F&O Stocks" solo rounded flat dense style="max-width: 212px" v-model="search1">
                      <template v-slot:prepend-inner>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_2682_15138)">
                            <path d="M14.6667 14.6667L12 12" stroke="#666666" stroke-width="1.5" stroke-miterlimit="10"
                              stroke-linecap="round" />
                            <path
                              d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                              stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_15138">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-text-field>
                    <v-select class="searchforcommidityfilter rounded-xl elevation-0 ml-2" flat background-color="#F1F3F8"
                      :items="items" label="Filter" append-icon="mdi-chevron-down" dense solo
                      style="max-width:36%;height:20px;background-color=">
                      <template v-slot:append>
                        <div class="pr-3 pt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M3.28125 6.09375L7.5 10.3125L11.7188 6.09375" stroke="#777777" stroke-width="1.8"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </template>
                      <template v-slot:prepend-inner>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                          <g clip-path="url(#clip0_2682_18796)">
                            <path d="M1.125 1.875H12.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.125 4.875H12.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.125 7.875H4.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.125 10.875H4.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                              stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.125 8.625L9 10.5L12.375 7.125" stroke="#666666" stroke-width="1.4"
                              stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_18796">
                              <rect width="13.5" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-select>
                    <!-- <v-menu left offset-y>
                                          <template v-slot:activator="{ on, attrs }">
                                              <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="ml-6" icon
                                                  max-width="0px">
                                                  <v-icon color="black">mdi-dots-vertical</v-icon>
                                              </v-btn>
                                          </template>
                                          <v-list>
                                              <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                                                  <v-list-item-title>{{
                                                      item.title
                                                  }}</v-list-item-title>
                                              </v-list-item>
                                          </v-list>
                                      </v-menu> -->
                  </div>
                </v-col>
              </v-row>

              <v-data-table hide-default-header :headers="postionheaders" :items="postionitems" item-key="id"
                class="elevation-0" hide-default-footer :search="search1" style="border: 1px solid #efeef3">
                <template v-slot:header>
                  <tr class="" style="background-color: #fafbff">
                    <th class="text-start">
                      <span class="pl-6" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Product</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-2" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Instrument</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-7" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Qty</span>
                    </th>
                    <th class="text-start">
                      <span class="pl-11" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Buy Avg</span>
                    </th>
                    <th class="text-start pl-10">
                      <span class="" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">LTP</span>
                    </th>
                    <th class="text-start ml-3">
                      <span class="pl-4" style="
                        color: #666;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 469;
                        line-height: 16px;
                      ">Profit & Loss</span>
                    </th>
                    <th class="pt-1" width="13%">
                      <v-row no-gutters>
                        <v-col cols="8">
                          <span class="pl-4" style="
                            color: #666;
                            font-size: 13px;
                            font-style: normal;
                            font-weight: 469;
                            line-height: 16px;
                          ">
                            P&L chg.</span>
                        </v-col>
                        <v-col class="" cols="2">
                          <!-- <v-menu left offset-y>
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
                                                  </v-menu> -->
                        </v-col>
                      </v-row>
                    </th>
                  </tr>
                </template>
                <v-divider></v-divider>
                <template v-slot:item="{ item }">
                  <tr class="" style="background-color: ; position: relative" @mouseover="selectItem3(item)"
                    @mouseleave="unSelectItem3(item)">
                    <td class="pr-0" style="color: #000000; font-size: 13px">
                      <v-chip class="ma-2" label :color="item === selectedItem3 ? '#FFFFFF' : '#F1F3F8'">
                        <span class="" style="
                          color: #666;
                          font-size: 10px;
                          font-style: normal;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 1px;
                          text-transform: uppercase;
                        ">{{ item.Productname }}</span>
                      </v-chip>
                    </td>
                    <td class="pr-0" style="width: 478px">
                      <span class="ml-n2" :class="item === selectedItem3 ? 'newcol' : 'black--text'
                        " style="
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 559;
                        line-height: 16px;
                      ">{{ item.instrument }}
                      </span>
                      <span class="ml-1" style="
                        font-size: 10px;
                        color: #999999;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 10px;
                        letter-spacing: 0.4px;
                      ">{{ item.NSE }}</span>

                      <div class="postionchangeopenpostion" v-if="item === selectedItem3">
                        <div class="display-flex row">
                          <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small style="
                            height: 20px;
                            min-width: 20px;
                            border-radius: 4px;
                            padding: 2px 6px;
                          " color="#43A833">
                            <span style="
                              font-size: 12px;
                              font-style: normal;
                              font-weight: 559;
                              line-height: 16px;
                            ">B</span></v-btn>
                          <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small style="
                            height: 20px;
                            min-width: 20px;
                            border-radius: 4px;
                            padding: 2px 6px;
                          " color="#FF1717">
                            <span style="
                              font-size: 12px;
                              font-style: normal;
                              font-weight: 559;
                              line-height: 16px;
                            ">S</span></v-btn>

                          <v-btn class="ml-1 pa-0 elevation-0" outlined dense small style="
                            min-width: 20px;
                            height: 20px;
                            border-radius: 4px;
                            border: 1px solid #cccccc;
                            background-color: white;
                          ">
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                                fill="#666666" />
                            </svg></v-btn>
                          <v-btn class="ml-1 pa-0 elevation-0" outlined small style="
                            min-width: 20px;
                            height: 20px;
                            border-radius: 4px;
                            border: 1px solid #cccccc;
                            background-color: white;
                          ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                              fill="none">
                              <path
                                d="M5 6.25C5.69036 6.25 6.25 5.69036 6.25 5C6.25 4.30964 5.69036 3.75 5 3.75C4.30964 3.75 3.75 4.30964 3.75 5C3.75 5.69036 4.30964 6.25 5 6.25Z"
                                fill="#666666" />
                              <path
                                d="M1.25 6.25C1.94036 6.25 2.5 5.69036 2.5 5C2.5 4.30964 1.94036 3.75 1.25 3.75C0.559644 3.75 0 4.30964 0 5C0 5.69036 0.559644 6.25 1.25 6.25Z"
                                fill="#666666" />
                              <path
                                d="M8.75 6.25C9.44036 6.25 10 5.69036 10 5C10 4.30964 9.44036 3.75 8.75 3.75C8.05964 3.75 7.5 4.30964 7.5 5C7.5 5.69036 8.05964 6.25 8.75 6.25Z"
                                fill="#666666" />
                            </svg>
                          </v-btn>
                        </div>
                      </div>
                    </td>

                    <td>
                      <v-chip class="px-2 py-1" outlined label :background-color="item.qty > 0 ? 'black' : 'blue'"
                        :color="item.qty > 0 ? '#C1E7BA' : '#FFCDCD'" style="width: 36px; height: 20px">
                        <span class="" v-if="item.qty > 0" style="
                          font-size: 10px;
                          font-style: normal;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 1px;
                          color: #43a833;
                        ">+{{ item.qty }}</span>
                        <span v-else class="font-weight-medium" style="font-size: 11px; color: #ff1717">
                          {{ item.qty }}</span>
                      </v-chip>
                    </td>
                    <td class="pr-0 pl-11">
                      <span class="" style="
                        color: #000;
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.avg }}</span>
                    </td>
                    <td class="pr-0 pl-10">
                      <span class="" style="
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.LTP }}</span>
                    </td>
                    <td class="pr-0 pl-">
                      <span class="" style="
                        font-size: 13px;
                        font-weight: 500;
                        line-height: 16px;
                      ">{{ item.plLoss }}</span>
                    </td>

                    <td class="pr-0 pl-8">
                      <span class="" v-if="item.plchg > 0" style="
                        color: #43a833;
                        font-size: 13px;
                        font-weight: 559;
                        line-height: 16px;
                      ">+{{ item.plchg }}</span>
                      <span class="" v-else style="
                        font-size: 13px;
                        font-weight: 559;
                        line-height: 16px;
                        color: #ff1717;
                      ">{{ item.plchg }}</span>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-tab-item>

            <v-tab-item>
              <p class="mt-16 text-center" style="color: #000;font-size: 16px;font-weight: 559;line-height: 16px;letter-spacing: -0.4px;">No Data Available</p>
            </v-tab-item>
            <v-tab-item>
              <p class="mt-16 text-center" style="color: #000;font-size: 16px;font-weight: 559;line-height: 16px;letter-spacing: -0.4px;">No Data Available</p>
            </v-tab-item>
            <v-tab-item>
              <p class="mt-16 text-center" style="color: #000;font-size: 16px;font-weight: 559;line-height: 16px;letter-spacing: -0.4px;">No Data Available</p>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </div>
      <div v-if="alertpage">
        <v-row justify="center">
          <v-dialog v-model="alertpage" persistent max-width="612">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Open Dialog
              </v-btn>
            </template>
            <v-card class="" style="width: 612px;
height: 447px;">
              <v-card-title class="" style="background-color:#F1F3F8">
                <v-row><v-col cols="12" class="my-0 py-0">
                    <v-row>
                      <v-col cols="10">
                        <span style="
                          font-size: 18px;
                          font-weight: 559;
                          font-style: normal;
                          line-height: 16px;letter-spacing: -0.36px;">
                          {{ histy.tsym }} <span class="mx-3 px-2" style="color: #666;
                         background-color:#F1F3F8;
font-family: Inter V;
font-size: 10px;
font-style: normal;
font-weight: 559;
line-height: 12px;
height:10px; 
letter-spacing: 1px;
text-transform: uppercase;"> {{ histy.exch }} </span></span>
                      </v-col>
                      <v-col cols="2" class="text-right">
                        <span
                          style="color: #000; font-family: Inter V; font-size: 14px;font-style: norma;font-weight: 559;line-height: 100%; /* 14px */font-size: 14px;line-height: 14px;">
                          <v-btn fab text @click="closeChart()" small dence rounded>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.375 1.625L1.625 10.375" stroke="#666666" stroke-width="1.4"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M1.625 1.625L10.375 10.375" stroke="#666666" stroke-width="1.4"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </v-btn>
                        </span>
                      </v-col>
                    </v-row>
                  </v-col><v-col cols='12' class="my-0 py-0">
                    <div style="color: #000;
font-family: Inter V;
font-size: 16px;
font-style: normal;
font-weight: 559;
line-height: 16px;">{{ histy.lp }}</div>


                    <span style="
                          font-size: 11px;
                          color: #1fd601;">
                      <!-- {{ lp }} ({{ ((lpclose/lp)*100).toFixed(2) }}%) -->
                      {{ lp }} <span v-if="lpclose > 0" style="
                          font-size: 11px;
                          color: #1fd601;">({{ ((lpclose)).toFixed(2) }}%)</span><span v-else style="
                          font-size: 11px;
                          color: #ff1717;">({{ ((lpclose)).toFixed(2) }}%)</span> </span>
                  </v-col>
                </v-row>
              </v-card-title>

              <div class="px-6 py-2 ">
                <span style="color: #000;
font-family: Inter V;
font-size: 14px;
font-style: normal;
font-weight: 559;
line-height: 100%; /* 14px */
letter-spacing: -0.28px;">Set alert Price</span>
              </div>
              <div style="color: #000;
font-family: Inter V;
font-size: 14px;
font-style: normal;
font-weight: 559;
line-height: 16px; /* 114.286% */">
                <v-list>
                  <v-list-item class='py-4'>
                    <v-list-item-content class="py-0">
                      <v-list-item-title>Alert me</v-list-item-title>
                      <div class='px-2'>
                        <v-select v-model="valuesinput" :items="alertme" filled rounded dense placeholder="Alert me"
                          :append-icon="`${!show ? 'mdi-chevron-down' : 'mdi-chevron-up'}`"></v-select>
                      </div>
                    </v-list-item-content>
                    <v-list-item-content class="py-0">
                      <v-list-item-title>Enter Value</v-list-item-title>
                      <div class='px-2'>
                        <v-text-field v-model="number" placeholder="Dense & Rounded" filled dense hide-spin-buttons
                          rounded hint="Value cannot be 0" type="number">
                          <template slot="prepend">
                            <span>&#8377;</span>

                          </template></v-text-field>
                      </div>
                    </v-list-item-content>
                  </v-list-item>

                </v-list>
                <v-list>
                  <v-list-item class='py-4'>
                    <v-list-item-content class="py-0">
                      <v-list-item-title>Type</v-list-item-title>
                      <div class='px-2'>
                        <v-select :items="lastprice" v-model="price" placeholder="Type" filled dense rounded
                          :append-icon="`${!show ? 'mdi-chevron-down' : 'mdi-chevron-up'}`"></v-select>
                      </div>
                    </v-list-item-content>
                    <v-list-item-content class="py-0">
                      <v-list-item-title>Validity</v-list-item-title>
                      <div class='px-2'>
                        <v-select :items="valdrop" v-model="validate" placeholder="Validity" filled dense rounded
                          :append-icon="`${!show ? 'mdi-chevron-down' : 'mdi-chevron-up'}`" class="px-2"></v-select>
                      </div>
                    </v-list-item-content>
                  </v-list-item>

                </v-list>
                <v-card-actions class="px-4" style="color: #FFF;
text-align: center;
font-family: Inter V;
font-size: 14px;
font-style: normal;
font-weight: 559;
line-height: 20px; /* 142.857% */
letter-spacing: -0.28px;">
                  <v-row><v-col cols="4">
                      <v-hover v-slot="{ hover }">
                        <v-btn rounded block @click="setalert()"
                          :style="{ 'background-color': hover ? '#000' : '#F1F3F8', 'color': hover ? '#FFFFFF' : '' }">
                          Set my alert
                        </v-btn>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </div>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
      <div v-if="marketdepthpg">
        <v-row justify="center">
          <v-dialog v-model="marketdepthpg" persistent max-width="612">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Open Dialog
              </v-btn>
            </template>
            <v-card class="" style="width: 612px;
height: 447px;">
              <v-card-title class="" style="background-color:#F1F3F8;height: 90px;">
                <v-row><v-col cols="12" class="my-0 py-0">
                    <v-row>
                      <v-col cols="10">
                        <span style="
                          font-size: 18px;
                          font-weight: 559;
                          font-style: normal;
                          line-height: 16px;letter-spacing: -0.36px;">
                          {{ histy.tsym }} <span class="mx-3 px-2" style="color: #666;
                         background-color:#F1F3F8;
font-family: Inter V;
font-size: 10px;
font-style: normal;
font-weight: 559;
line-height: 12px;
height:10px; 
letter-spacing: 1px;
text-transform: uppercase;"> {{ histy.exch }} </span></span>
                      </v-col>
                      <v-col cols="2" class="text-right">
                        <span
                          style="color: #000; font-family: Inter V; font-size: 14px;font-style: norma;font-weight: 559;line-height: 100%; /* 14px */font-size: 14px;line-height: 14px;">
                          <v-btn fab text @click="closeChart()" small dence rounded>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.375 1.625L1.625 10.375" stroke="#666666" stroke-width="1.4"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M1.625 1.625L10.375 10.375" stroke="#666666" stroke-width="1.4"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </v-btn>
                        </span>
                      </v-col>
                    </v-row>
                  </v-col><v-col cols='12' class="my-0 py-0">
                    <div style="color: #000;
font-family: Inter V;
font-size: 16px;
font-style: normal;
font-weight: 559;
line-height: 16px;">{{ histy.lp }}
                      <span style="
                          font-size: 11px;
                          color: #1fd601;">
                        <!-- {{ lp }} ({{ ((lpclose/lp)*100).toFixed(2) }}%) -->
                        {{ lp }} <span v-if="lpclose > 0" style="
                          font-size: 11px;
                          color: #1fd601;">({{ ((lpclose)).toFixed(2) }}%)</span><span v-else style="
                          font-size: 11px;
                          color: #ff1717;">({{ ((lpclose)).toFixed(2) }}%)</span> </span>
                    </div>

                  </v-col>
                </v-row>
              </v-card-title>

              <v-list style="color: #666;
font-family: Inter V;
font-size: 14px;
font-style: normal;
font-weight: 469;
line-height: 14px; /* 100% */" row>
                <v-list-item>
                  <!-- <v-list-item-content> -->
                  <span>
                    Type
                    <v-radio-group v-model="radios" mandatory row style="color: #666;
font-feature-settings: 'case' on;
font-family: Inter V;
font-size: 13px;
font-style: normal;
font-weight: 469;
line-height: 16px; /* 123.077% */">
                      <v-radio label="Day" value="Day"></v-radio>
                      <v-radio label="Overnight" value="Overnight"></v-radio>
                    </v-radio-group>
                  </span>
                  <!-- </v-list-item-content> -->

                  <span>
                    <div>Type</div>
                    <span flat>NISE
                      <v-switch v-model="switch1" inset></v-switch>
                      <span>MIS</span>
                    </span>
                  </span>

                  <v-list-item-content>
                    <span>
                      Type

                      <v-text-field hide-spin-buttons
                        class="sidetext searchforcommiditytexts ml-0 pl-0 mt-1 pa-0 centered-input" type="number"
                        background-color="#F1F3F8" solo rounded flat dense :min="lotsise" style="text-align:center"
                        align="center" :rules="nameRules">
                        <template v-slot:prepend-inner>
                          <v-btn class="ml-0 pl-0" elevation="0" small outlined
                            style="background-color: white; width: 20px; height: 20px" fab dark x-small
                            @click="lotsise--">
                            <v-icon size="13" color="#666666">mdi-minus</v-icon>
                          </v-btn>
                        </template>

                        <template v-slot:append>
                          <v-btn class="mr-2" elevation="0" small outlined
                            style="background-color: white; width: 20px; height: 20px" fab dark x-small
                            @click="lotsise++">
                            <v-icon Append size="13" color="#666666">mdi-plus</v-icon>
                          </v-btn>
                        </template>
                      </v-text-field>
                    </span>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions>
                <v-btn outlined rounded text @click="submitdepth()">
                  Button
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>

      <div v-if="Exits">
        <v-dialog v-model="Exits" persistent max-width="354">
          <v-card style="width: 354px;
height: 232px;
flex-shrink: 0;">
            <div class="text-center pt-7"><v-icon icon size="40" color="red">mdi-close-circle-outline</v-icon></div>
            <div class="text-center px-10 py-2" style="font-family: Inter V;
font-size: 20px;
font-weight: 559;
line-height: 23px;
letter-spacing: -0.02em;
text-align: center;
font-variation-settings: 'slnt' 0;
">


              Are you sure you want to Exit this stock order
            </div>
            <div>
              <v-card-title class="py-2 my-4">
                <v-row><v-col cols="12" class="my-0 py-0">
                    <span style="
                          font-size: 18px;
                          font-weight: 559;
                          font-style: normal;
                          line-height: 16px;letter-spacing: -0.36px;">
                      {{ histy.tsym }} <span class="mx-3 px-2" style="color: #666;
                         background-color:#F1F3F8;
font-family: Inter V;
font-size: 10px;
font-style: normal;
font-weight: 559;
line-height: 12px;
height:10px; 
letter-spacing: 1px;
text-transform: uppercase;"> {{ histy.exch }} </span></span>

                  </v-col><v-col cols='12' class="my-0 py-0">
                    <div style="color: #000;
font-family: Inter V;
font-size: 16px;
font-style: normal;
font-weight: 559;
line-height: 16px;">{{ histy.lp }}</div>

                    <!-- <span  style="
                          font-size: 11px;
                          
                          color: #1fd601;">
                           {{ lp }}  -->
                    <span v-if="lpclose > 0" style="
                          text-align: right;
                          font-family: Inter V;
                          font-size: 12px;
                          font-style: normal;
                          font-weight: 559;
                          line-height: 16px; 
                          color: #1fd601;">{{ change ? change.toFixed(2) : '0' }} ({{ ((lpclose)) ? ((lpclose)).toFixed(2) :
                            '0' }}%)</span><span v-else style="
                          text-align: right;
                          font-family: Inter V;
                          font-size: 12px;
                          font-style: normal;
                          font-weight: 559;
                          line-height: 16px;                           
                          color: #ff1717;">{{ change ? change.toFixed(2) : '0' }} ({{ ((lpclose)) ?
                            ((lpclose)).toFixed(2) : '0' }}%)</span>
                    <!-- </span> -->
                    <!-- <span v-else style="
                          font-size: 11px;
                          
                          color: #ff1717;">
                          {{ lp }} ({{ ((lpclose/lp)*100).toFixed(2) }}%)
                           {{ lp }} ({{ ((lpclose)).toFixed(2) }}%) </span> -->
                  </v-col>
                </v-row>
              </v-card-title>
            </div>
            <div class="py-6 px-10">
              <v-row align="center" justify="space-around">
                <v-col cols="6">
                  <v-hover v-slot="{ hover }">
                    <v-btn block depressed rounded @click="closeChart(values = true)"
                      :style="{ 'background-color': hover ? 'black' : '#F1F3F8', 'color': hover ? '#F1F3F8' : '' }">
                      Exit Order
                    </v-btn>
                  </v-hover>
                </v-col>
                <v-col cols="6">
                  <v-hover v-slot="{ hover }">
                    <v-btn block depressed
                      :style="{ 'background-color': hover ? 'black' : '#F1F3F8', 'color': hover ? '#F1F3F8' : '' }"
                      rounded @click="cancel(val = canldata)">
                      Close
                    </v-btn>
                  </v-hover>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-dialog>
      </div>

      <div v-if="positions">
        <v-dialog v-model="positions" transition="slide-x-transition" content-class="custom-dialog" height="900"
          class="rounded-0" max-width="391">
          <v-card class='rounded-0' max-width="391" style="width: 391px;
flex-shrink: 0;">
            <v-card-title class='py-2 '>
              <v-row><v-col cols="12" class="my-0 px-0 py-2">
                  <span style="
                                                color: #000;
font-family: Inter V;
font-size: 14px;
font-style: normal;
font-weight: 559;
line-height: 100%; /* 14px */
                          font-size: 14px;
                          line-height: 14px;">
                    <v-btn tile icon @click="closeChart()">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.375 1.625L1.625 10.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                          stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.625 1.625L10.375 10.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                    </v-btn>Position Details
                  </span>
                </v-col>
              </v-row>

              <v-spacer></v-spacer>
              <span style="color: #666;
font-family: Inter V;
font-size: 12px;
font-style: normal;
font-weight: 469;
line-height: 100%; /* 12px */">
                <svg width="14" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 11V7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7V11M2.66667 13C1.74619 13 1 12.2538 1 11.3333V10C1 9.07953 1.74619 8.33333 2.66667 8.33333C3.58714 8.33333 4.33333 9.07953 4.33333 10V11.3333C4.33333 12.2538 3.58714 13 2.66667 13ZM11.3333 13C10.4129 13 9.66667 12.2538 9.66667 11.3333V10C9.66667 9.07953 10.4129 8.33333 11.3333 8.33333C12.2538 8.33333 13 9.07953 13 10V11.3333C13 12.2538 12.2538 13 11.3333 13Z"
                    stroke="#666666" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg> <span class='mx-2'>Need Help ?</span>
              </span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-title class="py-2 my-4">
              <v-row><v-col cols="6" class="my-0 py-0">
                  <span style="
                          font-size: 18px;
                          font-weight: 559;
                          font-style: normal;
                          line-height: 16px;letter-spacing: -0.36px;">
                    {{ histy.tsym }} <span class=" px-2" style="color: #666;
                         background-color:#F1F3F8;
font-family: Inter V;
font-size: 10px;
font-style: normal;
font-weight: 559;
line-height: 12px;
height:10px; 
letter-spacing: 1px;
text-transform: uppercase;"> {{ histy.exch }} </span></span>
                  <!-- <v-spacer></v-spacer> -->


                </v-col>
                <v-col cols="6" class="my-0 py-0 text-right">
                  <v-btn outlined to='/singleindex' @click="scriptdetails()" small class="rounded-xl" style="color: #000;
text-align: center;
font-feature-settings: 'dlig' on, 'clig' off, 'liga' off;
font-family: Inter V;
font-size: 12px;
font-style: normal;
font-weight: 559;
line-height: 100%; /* 12px */
text-transform: capitalize !important;
letter-spacing: -0.096px;"> Scrip details</v-btn>

                </v-col>
                <v-col cols='12' class="my-0 py-0">
                  <div style="color: #000;
font-family: Inter V;
font-size: 16px;
font-style: normal;
font-weight: 559;
line-height: 16px;">{{ histy.lp }}</div>

                  <!-- <span  style="
                          font-size: 11px;
                          
                          color: #1fd601;">
                           {{ lp }}  -->
                  <span v-if="lpclose > 0" style="
                          text-align: right;
                          font-family: Inter V;
                          font-size: 12px;
                          font-style: normal;
                          font-weight: 559;
                          line-height: 16px; 
                          color: #1fd601;">{{ change ? change.toFixed(2) : '0' }} ({{ ((lpclose)) ? ((lpclose)).toFixed(2) :
                            '0' }}%)</span><span v-else style="
                          text-align: right;
                          font-family: Inter V;
                          font-size: 12px;
                          font-style: normal;
                          font-weight: 559;
                          line-height: 16px;                           
                          color: #ff1717;">{{ change ? change.toFixed(2) : '0' }} ({{ ((lpclose)) ?
                            ((lpclose)).toFixed(2) : '0' }}%)</span>
                  <!-- </span> -->
                  <!-- <span v-else style="
                          font-size: 11px;
                          
                          color: #ff1717;">
                          {{ lp }} ({{ ((lpclose/lp)*100).toFixed(2) }}%)
                           {{ lp }} ({{ ((lpclose)).toFixed(2) }}%) </span> -->
                </v-col>
              </v-row>
            </v-card-title>
            <v-divider></v-divider>

            <v-card class=" px-2 elevation-0" style="font-family: Inter V;
font-size: 14px;
font-weight: 469;
line-height: 14px;
letter-spacing: -0.008em;
text-align: right;
font-variation-settings: 'slnt' 0, 'opsz' 24;
">
              <div style="color: #000;
font-family: Inter V;
font-size: 16px;
font-style: normal;
text-align: left;
font-weight: 559;
line-height: 100%; 
letter-spacing: -0.128px;" class="px-4 pt-2">Position details</div>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    Product
                  </v-list-item-content>
                  <!-- <v-list-item-content class="text-right" align="right">
                              {{ histy.rqty+ '/'+histy.qty}}
                              </v-list-item-content> -->
                  <div class="text-right">
                    {{ histy.s_prdt_ali }}
                  </div>
                </v-list-item>
                <v-divider class="mx-4"></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    Quantity
                  </v-list-item-content>
                  <!-- <v-list-item-content class="text-right" align="right">
                              {{ histy.rqty+ '/'+histy.qty}}
                              </v-list-item-content> -->

                  <v-chip class="ml-3" outlined label :background-color="histy.netqty > 0 ? 'black' : 'blue'"
                    :color="histy.netqty >= 0 ? '#C1E7BA' : '#FFCDCD'" style="height: 20px">
                    <span class="" v-if="histy.netqty >= 0" style="
                          font-size: 10px;
                          font-style: normal;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 1px;
                          color: #43a833;
                        ">{{ histy.netqty }}</span>

                    <span v-else class="font-weight-medium" style="font-size: 11px; color: #ff1717">
                      {{ histy.netqty }}</span>
                  </v-chip>
                </v-list-item>
                <v-divider class="mx-4"></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    Overall P&L
                  </v-list-item-content>
                  <!-- <v-list-item-content class="text-right"> -->
                  <span v-if="lpclose > 0" style="
                          text-align: right;
                       
                          color: #1fd601;">{{ change ? change.toFixed(2) : '0' }} </span><span v-else style="
                          text-align: right;
                          color: #ff1717;">{{ change ? change.toFixed(2) : '0' }} </span>
                  <!-- </v-list-item-content> -->
                </v-list-item>
                <v-divider class="mx-4"></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    Day P&L
                  </v-list-item-content>

                  <div class="text-right">
                    {{ perviesclose * histy.netqty }}
                  </div>
                </v-list-item>
                <v-divider class="mx-4"></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    Investment
                  </v-list-item-content>
                  <!-- <v-list-item-content class="text-right"> -->
                  <div class="text-right">
                    {{ histy.netavgprc * histy.netqty }}
                  </div>
                  <!-- </v-list-item-content> -->
                </v-list-item>
                <v-divider class="mx-4"></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    Current value
                  </v-list-item-content>
                  <!-- <div class="text-right" v-if="histy.lp >0" style="color: #43a833;">
                              {{ histy.lp }}
                            </div> -->
                  <div style="color: #ff1717;">
                    {{ histy.lp }}
                  </div>
                </v-list-item>
                <v-divider class="mx-4"></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    Avg price
                  </v-list-item-content>
                  <div class="text-right">{{ histy.netavgprc }}</div>
                </v-list-item>
                <v-divider class="mx-4"></v-divider>
                <v-list-item>
                  <v-list-item-content>
                    Last trade price
                  </v-list-item-content>
                  <!-- <v-list-item-content class="text-right"> -->
                  <div class="text-right">{{ histy.netavgprc }}</div>

                  <!-- </v-list-item-content> -->
                </v-list-item>
                <v-divider class="mx-4"></v-divider>

                <!-- <v-list-item>
                              <v-list-item-content>
                              Current value
                            </v-list-item-content>
                           
                              <div class="text-right" >
                              {{ histy.rqty+ '/'+histy.qty}}
                              </div>
                            </v-list-item> -->
              </v-list>

            </v-card>
            <!-- <v-divider class='py-2'></v-divider> -->
            <div>

              <div class="px-4">
                <v-row align="center" justify="space-around">
                  <v-col cols="6">
                    <v-hover v-slot="{ hover }">
                      <v-btn block depressed rounded
                        :style="{ 'background-color': hover ? '#43A833' : '#F1F3F8', 'color': hover ? '#F1F3F8' : '' }">
                        Buy
                      </v-btn>
                    </v-hover>
                  </v-col>
                  <v-col cols="6">
                    <v-hover v-slot="{ hover }">
                      <v-btn block depressed
                        :style="{ 'background-color': hover ? '#FF1717' : '#F1F3F8', 'color': hover ? '#F1F3F8' : '' }"
                        rounded>
                        Sell
                      </v-btn>
                    </v-hover>
                  </v-col>
                </v-row>
              </div>


            </div>
          </v-card>
        </v-dialog>
      </div>

      <div v-if="dialog">
        <v-dialog v-if='dialog' v-model="dialog" max-width="100%" height="100%">
          <v-card class='rounded-lg'>
            <v-card-title class='grey lighten-2 pb-6'>
              <v-row><v-col cols="12" class="my-0 py-0">
                  <span style="color: #000;
                          font-size: 20px;
                          line-height: 16px; /* 80% */
                          letter-spacing: -1px;">{{ charttk.slice(4) }}</span> <span
                    style="font-size: 10px;line-height: 16px; ">{{ charttk.slice(0, 3) }}

                  </span>
                </v-col><v-col cols='12' class="my-0 py-0">
                  {{ barCallsOi }} {{ barPutsOi }}
                  <span id='values'></span>

                  <span style="
                          font-size: 11px;
                          
                          color: #1fd601;">
                    <!-- {{ lp }} ({{ ((lpclose/lp)*100).toFixed(2) }}%) -->
                    {{ lp }} <span v-if="lpclose > 0" style="
                          font-size: 11px;
                          
                          color: #1fd601;">({{ ((lpclose)).toFixed(2) }}%)</span><span v-else style="
                          font-size: 11px;
                          
                          color: #ff1717;">({{ ((lpclose)).toFixed(2) }}%)</span> </span>
                  <!-- <span v-else style="
                          font-size: 11px;
                          
                          color: #ff1717;">
                          {{ lp }} ({{ ((lpclose/lp)*100).toFixed(2) }}%)
                           {{ lp }} ({{ ((lpclose)).toFixed(2) }}%) </span> -->
                </v-col>
              </v-row>

              <v-spacer></v-spacer>

              <div>

                <div class="d-flex">
                  <v-card class="mb-0 px-2 mr-2 font-weight-bold black--text body-2 elevation-0" color='green'>
                    <span style="color: #ffffff ;">B</span>
                  </v-card>
                  <label class="switch mr-2">
                    <input type="checkbox" />
                    <span class="sliderr round"></span>
                  </label>
                  <v-card class="mb-0 px-2 ml-5 font-weight-medium body-2 elevation-0" style="color: #ffffff" color="red">
                    S
                  </v-card>

                </div>
                <!-- <v-btn tile icon @click="closeChart()">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"
                        fill="currentColor">
                        <path d="m.58 1.42.82-.82 15 15-.82.82z"></path>
                        <path d="m.58 15.58 15-15 .82.82-15 15z"></path>
                      </svg>
                    </v-btn> -->
              </div>

            </v-card-title>

            <!-- <div v-if="chartdata"> -->

            <!-- <div class="py-2"> -->
            <WebChart :message='[dataseries]' />
            <!-- </div> -->
            <!-- </div> -->
            <!-- <div v-else-if="orderdata" >
                                              <OrderPage :message='[dataseries]'/>
                                            </div> -->
          </v-card>
        </v-dialog>
      </div>
      <!-- <div v-if="detailscreen">
                                         <v-dialog v-model="detailscreen"
                                              transition="slide-x-transition"
        content-class="custom-dialog"
        height="879"
        class="rounded-0"
                                              max-width="391">
                                        <v-card class='rounded-0'  max-width="391" height="879">
                                          <v-card-title class='py-2 '>
                                                <v-row><v-col cols="12" class="my-0 px-0 py-2">
                                                <span style="
                          font-size: 14px;
                          line-height: 14px;">
                            <v-btn tile icon @click="closeChart()">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.375 1.625L1.625 10.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.625 1.625L10.375 10.375" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </v-btn>Detail
                        </span>
                        </v-col>
                      </v-row>
                        
                            <v-spacer></v-spacer>
  
                            <div>
                    <v-btn tile icon @click="closeChart()">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17"
                        fill="currentColor">
                        <path d="m.58 1.42.82-.82 15 15-.82.82z"></path>
                        <path d="m.58 15.58 15-15 .82.82-15 15z"></path>
                      </svg>
                    </v-btn>
                            </div>
                        
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-title class="py-2 my-4">
                         <v-row><v-col cols="12" class="my-0 py-0">
                        <span style="
                          font-size: 18px;
                          font-weight: 559;
                          font-style: normal;
                          line-height: 16px;letter-spacing: -0.36px;" >
                        {{ histy.tsym }} <span class="mx-3 px-2" style="color: #666;
                         background-color:#F1F3F8;
font-family: Inter V;
font-size: 10px;
font-style: normal;
font-weight: 559;
line-height: 12px;
height:10px; 
letter-spacing: 1px;
text-transform: uppercase;"> {{ histy.exch }}  </span></span>
   
                          </v-col><v-col cols='12' class="my-0 py-0">
                            <div style="color: #000;
font-family: Inter V;
font-size: 16px;
font-style: normal;
font-weight: 559;
line-height: 16px;">{{ histy.lp }}</div>
                            
                           <span  style="
                          font-size: 11px;
                          
                          color: #1fd601;">
                           {{ lp }} 
                           <span v-if="lpclose >0 " style="
                          text-align: right;
                          font-family: Inter V;
                          font-size: 12px;
                          font-style: normal;
                          font-weight: 559;
                          line-height: 16px; 
                          color: #1fd601;">{{ change?change.toFixed(2):'0' }} ({{ ((lpclose))? ((lpclose)).toFixed(2) : '0' }}%)</span><span v-else style="
                          text-align: right;
                          font-family: Inter V;
                          font-size: 12px;
                          font-style: normal;
                          font-weight: 559;
                          line-height: 16px;                           
                          color: #ff1717;">{{ change?change.toFixed(2):'0' }} ({{ ((lpclose)) ? ((lpclose)).toFixed(2):'0' }}%)</span> 
                          </span>
                            <span v-else style="
                          font-size: 11px;
                          
                          color: #ff1717;">
                          {{ lp }} ({{ ((lpclose/lp)*100).toFixed(2) }}%)
                           {{ lp }} ({{ ((lpclose)).toFixed(2) }}%) </span> 
                        </v-col>
                      </v-row> 
                    </v-card-title>
                    <v-divider></v-divider>
                        <v-card class=' py-3 px-2 rounded-0 elevation-0' style="width: 390px; height: 136px;" >
                          <v-list-item two-line >
                            <v-row><v-col cols='6'>
                            <v-list-item-content>
                              <v-list-item-title style="color: #666;
font-feature-settings: 'dlig' on, 'clig' off, 'liga' off;
font-family: Inter V;
font-size: 14px;
font-style: normal;
font-weight: 469;
line-height: 100%; 
letter-spacing: -0.112px;">Order Id</v-list-item-title>
                              <v-list-item-subtitle style="color: #000;
font-feature-settings: 'dlig' on, 'clig' off, 'liga' off;
font-family: Inter V;
font-size: 14px;
font-style: normal;
font-weight: 469;
line-height: 100%; 
letter-spacing: -0.112px;">{{ historydata.norenordno }}</v-list-item-subtitle>
                            </v-list-item-content>
                          </v-col>
<v-col cols="6">

                            <v-list-item-content class='custom-dialog' style="color: #000;font-family: Inter V;font-size: 13px;font-style: normal;font-weight: 469;line-height: 16px;">
                              <v-list-item-title v-if="historydata.status == 'REJECTED' || historydata.status =='CANCELED'"><span><svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="16" height="12" rx="6" fill="#DC2626"/>
<path d="M6 8L10 4M6 4L10 8" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> {{ historydata.status ? historydata.status.slice(0,1).toUpperCase()+historydata.status.slice(1).toLowerCase() : '' }}
</span>

</v-list-item-title>
<v-list-item-title v-else-if="historydata.status =='PENDING' || historydata.status =='TRIGGER_PENDING'|| historydata.status =='OPEN' ">
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 5C2.80228 5 3.25 4.55228 3.25 4C3.25 3.44772 2.80228 3 2.25 3C1.69772 3 1.25 3.44772 1.25 4C1.25 4.55228 1.69772 5 2.25 5Z" fill="white"/>
<path d="M6.25 5C6.80228 5 7.25 4.55228 7.25 4C7.25 3.44772 6.80228 3 6.25 3C5.69772 3 5.25 3.44772 5.25 4C5.25 4.55228 5.69772 5 6.25 5Z" fill="white"/>
<path d="M10.25 5C10.8023 5 11.25 4.55228 11.25 4C11.25 3.44772 10.8023 3 10.25 3C9.69772 3 9.25 3.44772 9.25 4C9.25 4.55228 9.69772 5 10.25 5Z" fill="white"/>
</svg>
{{  historydata.status ? historydata.status.slice(0,1).toUpperCase()+historydata.status.slice(1).toLowerCase() : '' }}
</v-list-item-title>
<v-list-item-title v-else>
  <span>
  
  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="16" height="12" rx="6" fill="#2DB266"/>
  <path d="M5 6.598L6.732 8.33L11.062 4" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
    </span>
    {{ historydata.status ? historydata.status.slice(0,1).toUpperCase()+historydata.status.slice(1).toLowerCase() : ''}}
    </v-list-item-title>
                            </v-list-item-content>
                          </v-col></v-row>
                          </v-list-item>
                          <v-row><v-col class='mx-4'>
                            <div v-if="ordcancel" >
                              <v-row
    align="center"
    justify="space-around">
  <v-col cols="6">
                              <v-btn block rounded outlined  style="
font-family: Inter V;
font-size: 14px;
font-weight: 559;
line-height: 20px;
letter-spacing: -0.02em;
text-align: center;
font-variation-settings: 'slnt' 0;
">
                          Modify Order
                          </v-btn>
                          </v-col>
                          <v-col cols='6'>
                          <v-btn block @click='successcancel(val=canldata)' rounded outlined  style="
font-family: Inter V;
font-size: 14px;
font-weight: 559;
line-height: 20px;
letter-spacing: -0.02em;
text-align: center;
font-variation-settings: 'slnt' 0;
">
                          Cancel Order
                          </v-btn>
                        </v-col>
                        </v-row>
                        </div>
                          <div class="text-center" v-else-if="historyneworeder">
                        <v-btn rounded outlined block v-if="historydata.status == 'REJECTED' || historydata.status =='CANCELED'" style="
font-size: 14px;
font-weight: 559;
line-height: 20px;
letter-spacing: -0.02em;
text-align: center;
font-variation-settings: 'slnt' 0;
">
                          Place New Order
                          </v-btn>
                          </div>
                        </v-col></v-row>
                        </v-card>
                        <v-divider style="height:30px"></v-divider>
                        <v-card class=" px-2 elevation-0" style="font-family: Inter V;
font-size: 14px;
font-weight: 469;
line-height: 14px;
letter-spacing: -0.008em;
text-align: right;
font-variation-settings: 'slnt' 0, 'opsz' 24;
">
                          <v-list>
                            <v-list-item>
                              <v-list-item-content>
                              Product
                            </v-list-item-content>
                            <v-list-item-content class="text-right" align="right">
                              {{ histy.rqty+ '/'+histy.qty}}
                              </v-list-item-content>
                              <div class="text-right" >
                              {{ histy.rqty+ '/'+histy.qty}}
                              Delivery
                              </div>
                            </v-list-item>
                          <v-divider class="mx-4"></v-divider>
                            <v-list-item>
                              <v-list-item-content>
                              Quantity
                            </v-list-item-content>
                            <v-list-item-content class="text-right" align="right">
                              {{ histy.rqty+ '/'+histy.qty}}
                              </v-list-item-content>
                              <div class="text-right" >
                              {{ histy.rqty+ '/'+histy.qty}}
                              1/0
                              </div>
                            </v-list-item>
                          <v-divider class="mx-4"></v-divider>
                          <v-list-item>
                              <v-list-item-content>
                              Avg Price
                            </v-list-item-content>
                            <v-list-item-content class="text-right">
                              <div class="text-right">
                              {{ historydata.prc*histy.qty}}
                              5600.80
                            </div>
                              </v-list-item-content>
                            </v-list-item>
                            <v-divider class="mx-4"></v-divider>
                            <v-list-item>
                              <v-list-item-content>
                              Last trade Price
                            </v-list-item-content>
                            <v-list-item-content class="text-right">
                              <div class="text-right">
                              {{ histy.lp }}
                              799.0
                            </div>
                              </v-list-item-content>
                            </v-list-item>
                            <v-divider class="mx-4"></v-divider>
                            <v-list-item>
                              <v-list-item-content>
                              Overall P&L
                            </v-list-item-content>
                            <v-list-item-content class="text-right">
                              <div class="text-right">
                                {{ histy.exch }}
                                -78.90
                              </div>
                              
                              </v-list-item-content>
                            </v-list-item>
                            <v-divider class="mx-4"></v-divider>
                            <v-list-item>
                              <v-list-item-content>
                              Day P&L
                            </v-list-item-content>
                            <v-list-item-content class="text-right">
                              <div class="text-right">
                                {{ historydata.ret }}
                                +58%
                              </div>
                              
                              </v-list-item-content>
                            </v-list-item>
                            <v-divider class="mx-4"></v-divider>
                            <v-list-item>
                              <v-list-item-content>
                              Current value
                            </v-list-item-content>
                            <v-list-item-content class="text-right">
                              <div class="text-right">
                                {{ historydata.ret }}
                                1288.87
                              </div>
                              
                              </v-list-item-content>
                            </v-list-item>
                        </v-list>

                          </v-card>
                          <v-divider class='py-2'></v-divider>
                      <div>
                        <v-divider class='py-2'></v-divider>
                        <v-card-title class="grey lighten-4">
                          <v-row>
                            <v-col cols="6">
                              <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>DateTime</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>Exch Time</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>Price</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                                                      </v-col>
                                                      <v-col cols="6">
                        <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>{{ historydata.norentm }}</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>NA</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>{{historydata.prc}}</v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>                
                          </v-col>
                            </v-row>
                          </v-card-title>
                           <v-stepper vertical  >
                            
  <div v-for='(i,item) of allhistorydata.slice().reverse()' :key='item' >
    
  
    <v-stepper-step v-if="i.status == 'PENDING' || i.status == 'REJECTED'" :step="item+1"  :rules="[() => false]"  >
      <div v-if=" i.status == 'PENDING'" style="color:#FFB038 !important;">  
        {{i.status }} 
      <small>{{ (new Date(i.norentm.slice(-4)+'-'+i.norentm.slice(-7,-5)+'-'+i.norentm.slice(-10,-8))).toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'}) }} 
        {{new Date((i.norentm.slice(-4)+'/'+i.norentm.slice(-7,-5)+'/'+i.norentm.slice(-10,-8)+' '+i.norentm.slice(0,8))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}}
      </small>
    </div>
    <div v-else-if=" i.status == 'COMPLETE'" style="color:#2DB266 !important;">  
        {{i.status }} 
      <small>{{ (new Date(i.norentm.slice(-4)+'-'+i.norentm.slice(-7,-5)+'-'+i.norentm.slice(-10,-8))).toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'}) }} 
        {{new Date((i.norentm.slice(-4)+'/'+i.norentm.slice(-7,-5)+'/'+i.norentm.slice(-10,-8)+' '+i.norentm.slice(0,8))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}}
      </small>
    </div>
    <div v-else>
      
      {{i.status }} 
      <small>{{ (new Date(i.norentm.slice(-4)+'-'+i.norentm.slice(-7,-5)+'-'+i.norentm.slice(-10,-8))).toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'}) }} 
        {{new Date((i.norentm.slice(-4)+'/'+i.norentm.slice(-7,-5)+'/'+i.norentm.slice(-10,-8)+' '+i.norentm.slice(0,8))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}}
      </small>
        <v-stepper-content >
      {{ i.rejreason }}
    </v-stepper-content>
    </div>
    </v-stepper-step>
    <v-stepper-step
    
     
    v-else-if= "i.status == 'COMPLETED'"
     :step="item+1"
     :rules="[() => true]"
   >
   
   {{i.status }} 
     <small>{{ (new Date(i.norentm.slice(-4)).toLocaleDateString('en', {day:'number', month:'short', year:'number'})) }}
       {{new Date((i.norentm.slice(-4)+'/'+i.norentm.slice(-7,-5)+'/'+i.norentm.slice(-10,-8)+' '+i.norentm.slice(0,8))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}}
     </small>
   </v-stepper-step>
   <v-stepper-step
    
     
    v-else
     :step="item+1"
     :rules="[() => true]"
   >
   
   {{i.status }} 
     <small>{{ (new Date(i.norentm.slice(-4)).toLocaleDateString('en', {day:'number', month:'short', year:'number'})) }}
       {{new Date((i.norentm.slice(-4)+'/'+i.norentm.slice(-7,-5)+'/'+i.norentm.slice(-10,-8)+' '+i.norentm.slice(0,8))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}}
     </small>
     
   </v-stepper-step>
  </div>
        </v-stepper>
        <v-stepper
    vertical non-linear
  >
  <div class="pa-2 px-6" style="
font-size: 16px;
font-weight: 559;
line-height: 16px;
letter-spacing: -0.008em;
text-align: left;
font-variation-settings: 'slnt' 0, 'opsz' 24;
">Order status</div>
  <div v-for='(i,item) of allhistorydata.slice().reverse()' :key='item'>
    allhistorydata.slice().reverse()  reverse
    <div  v-if="i.status == 'PENDING' || i.status== 'OPEN'">
    <v-stepper-step
       :step="item" 
       complete
       complete-icon ='mdi-dots-horizontal'
       color='#FFB038 '
       class="py-0"
       style="color:#FFB038 !important;"
      >
      <span style="color:#FFB038 !important;">
        <span style="font-family: Inter V;
font-size: 14px;
font-weight: 469;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
font-variation-settings: 'slnt' 0, 'opsz' 24;
"> 
{{ i.st_intrn.slice(0,1).toUpperCase()+i.st_intrn.slice(1).toLowerCase()}} </span>
        <small style="font-family: Inter V;
font-size: 11px;
font-weight: 469;
line-height: 11px;
letter-spacing: -0.008em;
text-align: left;
font-variation-settings: 'slnt' 0, 'opsz' 24;
">{{ (new Date(i.norentm.slice(-4)+'-'+i.norentm.slice(-7,-5)+'-'+i.norentm.slice(-10,-8))).toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'}) }} 
          {{new Date((i.norentm.slice(-4)+'/'+i.norentm.slice(-7,-5)+'/'+i.norentm.slice(-10,-8)+' '+i.norentm.slice(0,8))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}}
        </small>
    </span>

      </v-stepper-step>
      <v-stepper-content :step="item"  >
      {{item}}
    </v-stepper-content>
    </div>
    <div v-else-if="i.status == 'COMPLETE'">
      <v-stepper-step  style="color:#2DB266 !important;" complete 
      complete-icon ="mdi-check"
      class="py-0"
        >
      <span v-else-if="  >  
        <span style="font-family: Inter V;
font-size: 14px;
font-weight: 469;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
font-variation-settings: 'slnt' 0, 'opsz' 24;
"> 

{{ i.st_intrn.slice(0,1).toUpperCase()+i.st_intrn.slice(1).toLowerCase()}} 
</span>
              <small style="font-family: Inter V;
font-size: 11px;
font-weight: 469;
line-height: 11px;
letter-spacing: -0.008em;
text-align: left;
font-variation-settings: 'slnt' 0, 'opsz' 24;
">{{ (new Date(i.norentm.slice(-4)+'-'+i.norentm.slice(-7,-5)+'-'+i.norentm.slice(-10,-8))).toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'}) }} 
          {{new Date((i.norentm.slice(-4)+'/'+i.norentm.slice(-7,-5)+'/'+i.norentm.slice(-10,-8)+' '+i.norentm.slice(0,8))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}}
        </small>
      </span>
    </v-stepper-step>
    <v-stepper-content :step="`${item}`"  >
      {{item}}
    </v-stepper-content>
  </div>
  <div v-else>
      <v-stepper-step  complete 
       complete-icon="mdi-close"
       class="py-0"
       color="#FF1717"
       >
       <span style="color:#FF1717 ;">
  
        <span style="font-family: Inter V;
font-size: 14px;
font-weight: 469;
line-height: 14px;
letter-spacing: -0.008em;
text-align: left;
font-variation-settings: 'slnt' 0, 'opsz' 24;
">{{ i.st_intrn.slice(0,1).toUpperCase()+i.st_intrn.slice(1).toLowerCase()}} </span>
              <small style="font-family: Inter V;
font-size: 11px;
font-weight: 469;
line-height: 11px;
letter-spacing: -0.008em;
text-align: left;
font-variation-settings: 'slnt' 0, 'opsz' 24;
">{{ (new Date(i.norentm.slice(-4)+'-'+i.norentm.slice(-7,-5)+'-'+i.norentm.slice(-10,-8))).toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'}) }} 
          {{new Date((i.norentm.slice(-4)+'/'+i.norentm.slice(-7,-5)+'/'+i.norentm.slice(-10,-8)+' '+i.norentm.slice(0,8))).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}}
        </small>
        <v-stepper-content v-if="i.rejreason">
        </span>
        </v-stepper-step>
        
  </div>

        <v-stepper-items>
        <v-stepper-content :step="`${item-1}`"  v-if="item -1">
      
    </v-stepper-content>
    </v-stepper-items>
    {{ item }}
    {{allhistorydata.length }}
    <span v-if="item < allhistorydata.length-1">
        <div style= "height: 40px;
 margin-left:35px;z-index:1; border-left: 3px dotted  #b9b9b9;"  >
    </div>
  </span>
  <span v-else ></span>
    <div v-else-if= "item-1"></div>
    

  </div>
  </v-stepper>
   

    </div>
  </v-card>
                                          </v-dialog>
                                          </div> -->


    </v-container>
    <div v-if="singleind">
      <SingleIndex :message="selectgrid" />
    </div>
  </div>
</template>

<script>
// import { clientid } from '@/apiUrl';
import axios from "axios";
import SingleIndex from '../../../src/views/Stocks pages/SingleIndex.vue'
import WebChart from '../../../src/views/Portfolio/WebChart.vue';
import Datafeed from '../../../src/alldata/feedFactory';
import { clientid, session } from '../../apiUrl'
export default {
  data() {
    return {
      openlength: '',
      closelength: '',
      home: true,
      listest: false,
      switch1: true,
      selectgrid: '',
      singleind: false,
      swicth: '',
      tkchart: '',
      radios: null,
      change: 0,
      marketdepthpg: false,
      greate_less: '',
      valuesinput: '',
      list: false,
      price: '',
      number: '',
      validate: '',
      alertme: ["Greate than (>)", "Less than (<)", "Greate than or equal to (>=)", "Less than or equal to (<=)", "equal to (==)"],
      valdrop: ["Good Till Trigger", "Good Till Stoploss"],
      lastprice: ["Last Traded Price", "High Price", "Low Price", "Open Price", "Close Price", "Day Change", "Day Change Percent", "Intra Day Change", "Intra Day Change Percent", "Last Traded Qunatity", "Average Trade Price"],
      alertpage: false,
      lpclose: 0,
      lp: 0,
      perviesclose: 0,
      positions: false,
      orderno: 0,
      dialog: false,
      Exits: false,
      detailscreen: false,
      detailscern: '',
      dtallval: [],
      detilsdata: '',
      alldetldata: '',
      tab: null,
      search: "",
      search1: "",
      search2: "",
      values: " ",
      selectedItem: false,
      selectedItem1: false,
      selectedItem2: false,
      selectedItem3: false,
      voldata: [],
      postionheaders: [
        {
          value: "Productname",
        },
        {
          value: "instrument",
        },
        {
          value: "qty",
        },
        {
          value: "avg",
        },
        {
          value: "ltp",
        },
        {
          value: "plLoss",
        },
        {
          value: "plchg",
        },
      ],

      postionitems: [
        {
          id: 1,
          Productname: "NRML",
          instrument: "NIFTY APR 17500 CE",
          NSE: "NSE",
          qty: -40,
          LTP: "₹733.65",
          plLoss: "5,637.50",
          avg: "₹753.65",
          plchg: 1.15,
          // image1: require('@/assets/zebu-stocks/alertimg.svg'),
          event: "EVENTS",

          // image2: require('@/assets/zebu-stocks/eventesimg.svg'),
        },
        {
          id: 2,
          Productname: "CNC",
          instrument: "NIFTY APR 17500 CE",
          NSE: "NSE",
          qty: 30,
          LTP: "₹733.65",
          plLoss: "₹5,637.50",
          plchg: 1.95,
          avg: "₹753.65",
          // image3: require('@/assets/zebu-stocks/newsimg.svg'),
        },
        {
          id: 3,
          Productname: "MIS",
          instrument: "NIFTY APR 17500 CE",
          qty: 76,
          NSE: "NSE",
          avg: "₹753.65",
          LTP: "₹733.65",
          plLoss: "₹5,637.50",
          plchg: 1.55,

          // image1: require('@/assets/zebu-stocks/alertimg.svg'),
        },
        {
          id: 4,
          Productname: "NRML",
          instrument: "NIFTY APR 17500 CE",
          qty: 74,
          NSE: "NSE",
          avg: "₹753.65",
          plLoss: "₹5,637.50",
          LTP: "₹733.65",
          plchg: 1.35,

          // image2: require('@/assets/zebu-stocks/eventesimg.svg'),
          News: "News",
          // image3: require('@/assets/zebu-stocks/newsimg.svg'),
        },
        {
          id: 5,
          Productname: "NRML",
          instrument: "NIFTY APR 17500 CE",
          NSE: "NSE",
          qty: -43,
          LTP: "₹733.65",
          plLoss: "₹5,637.50",
          plchg: 1.8,
          avg: "₹753.65",
        },
        {
          id: 6,
          Productname: "NRML",
          instrument: "NIFTY APR 17500 CE",
          qty: 65,
          NSE: "NSE",
          LTP: "₹733.65",
          plLoss: "₹5,637.50",
          plchg: -1.8,
          avg: "₹753.65",
          News: "News",
        },
      ],
    };
  },


  methods: {
    totlist() {
      this.list = true;
    },

    marketdepth(val) {
      console.log(val, 'market - depth')
      this.marketdepthpg = true;
      this.histy = ''
      this.list = false;
      this.tkchart = val.token;
      this.histy = val;

    },
    submitdepth() {
      var swicth = this.switch1 == true ? "MIS" : "NRML"
      console.log('switch', swicth)
    },
    setalert() {
      this.list = false;
      // console.log(this.valuesinput);
      // let vel = this.valuesinput
      // console.log(vel,typeof(vel))
      if (this.valuesinput == 'Greate than (>)') {
        // console.log('asdjkfjjkashdjf')
        this.greate_less = '>'
      }
      else if (this.valuesinput == 'Less than (<)') {
        this.greate_less = '<'
      }
      else if (this.valuesinput == 'equal to (==)') {
        this.greate_less = '=='
      } else if (this.valuesinput == 'Greate than or equal to (>=)') {
        this.greate_less = '>='
      } else if (this.valuesinput == 'Less than or equal to (<=)') {
        this.greate_less = '<='
      }
      // var greate_lesses= this.values == 'Greate than' ? '<' :  this.values == 'Less than' ?  '>': this.values == 'equal to' ? '==' : this.values == 'Greate than or equal to' ? '>=' : this.values =='Less than to equal to' ? '<=':''
      console.log(this.greate_less, 'values of greate')
      console.log(this.number)
      console.log(this.price);
      console.log(this.validate);
      // ,,,,,,"Day Change Percent", "Intra Day Change","Intra Day Change Percent", "Last Traded Qunatity","Average Trade Price"
      var lest = ''
      if (this.price == "Last Traded Price") {
        lest = 'LTP_A'
      } else if (this.price == "High Price") {
        lest = "Perc.change_A"
      } else if (this.price == "Low Price") {
        lest = "ATP_A"
      } else if (this.price == "Open Price") {
        lest = "OI_A"
      } else if (this.price == "Close Price") {
        lest = "TOI_A"
      } else if (this.price == "Day Change") {
        lest = "52HIGH_A"
      } else if (this.price == "Day Change Percent") {
        lest = "VOLUME_A"
      }
      // ["Greate than ","Less than ","Greate than or equal to ","Less than or equal to ", "equal to"],
      // this.greate_less=''
      console.log(lest)
      let data =
        JSON.stringify({
          "userId": clientid,
          "exch": this.histy.exch,
          "tsym": this.histy.tsym,
          "ai_t": "LTP_A",
          "validity": "GTT",
          "d": this.number,
          "remarks": this.validate,
          "session": session
        })
      // JSON.stringify({
      //     "userId": "ZP00211",
      //     "exch": "NSE",
      //     "tsym": "ZEEMEDIA-EQ",
      //     "ai_t": "LTP_A",
      //     "validity": "GTT",
      //     "d": "3",
      //     "remarks": "23",
      //     "session": "2f0f692a40c31ddc6812ac12d10f960b3994e924e9939b19035650eb7fd170c2"
      // })
      // console.log(greate_lesses)
      let config = {
        method: 'post',
        //   maxBodyLength: Infinity,
        url: 'http://192.168.5.160:5001/SetAlert',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log((response.data), 'values');
          const les = response.data
          this.perviesclose = les.c



        })
        .catch((error) => {
          console.log(error);
        });

    },

    alertdetails(val) {
      this.listest = false;
      this.list = false;
      console.log(val)
      this.valuesinput = ''
      this.alertpage = true;
      // this.tkchart=val.token
      this.histy = '';
      this.histy = val
    },
    detail(val) {
      this.positions = true;
      this.histy = val
      console.log(val, 'val')
      this.tkchart = '';
      this.lpclose = 0;
      this.allhistorydata = [];
      this.historydata = [];
      this.tkchart = val.token;
      this.change = 0;
      this.list = false;
      this.selectgrid = '';
      this.selectgrid = val;


    },
    ltp(val) {
      this.perviesclose = 0;

      let data = `jData={"uid":"${clientid}", "exch":"${val.exch}","token":"${val.token}"}&jKey=${session}`;




      let config = {
        method: 'post',
        //   maxBodyLength: Infinity,
        url: 'https://go.mynt.in/NorenWClientTP/GetQuotes',
        headers: {
          'Content-Type': 'text/plain'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log((response.data), 'values');
          const les = response.data
          this.perviesclose = les.c



        })
        .catch((error) => {
          console.log(error);
        });

    },
    scriptdetails() {
      this.selectgrid
      // this.home=false;
      console.log(this.selectgrid)
      this.singleind = true;
    },
    positon(val) {

      let data = JSON.stringify(
        {
          "userId": clientid,

          "exch": val.exch,
          "tsym": val.tsym,
          "qty": "1",
          "prc": val.lp,
          "prd": val.prd,
          "trantype": "B",
          "prctyp": "LMT",
          "rorgqty": "0",
          "rorgprc": "0",
          blprc: '',
          "trgprc": "5",
          session: session
        })
      let config = {
        method: 'post',
        //   maxBodyLength: Infinity,
        url: ' http://192.168.5.160:5001/GetOrderMargin',
        // url: `${api}` + '/getClientTrades',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(response, 'add ScriptDetails')
          this.list = false;

        })
        .catch((error) => {
          console.log(error);
        });
    },
    optionChainDataParse(data) {
      // console.log(data,'ltp')
      var upd_obj = this.voldata.map(obj => {

        if (obj.token == data[0].v.token) {
          obj.lp = data[0].v.lp;
        }
        return obj;
      })


      if (this.tkchart == data[0].v.token) {
        this.lp = (data[0].v.lp);
        this.lpclose = ((data[0].v.lp - data[0].v.prev_close_price) / data[0].v.lp) * 100
        this.change = data[0].v.lp - data[0].v.prev_close_price

      }



      if (upd_obj == 0) {
        this.ltpvalues = (upd_obj)
      }


    },
    add(val) {
      console.log(val)
      let data = JSON.stringify({
        "userId": clientid,

        "exch": val.exch,
        "tsym": val.tsym,
        "qty": "1",
        "amo": "",
        "trgprc": "5",
        "trailprc": "",
        "blprc": "",
        "bpprc": "",
        "prc": val.lp,
        "dscqty": "0",
        "prd": val.prd,
        prctyp: 'LMT',
        mktProt: '5',
        trantype: val.netqty > 0 ? "B" : "S",
        ret: "DAY",
        ordersource: "API",
        session: session
      })
      let config = {
        method: 'post',
        //   maxBodyLength: Infinity,
        url: ' http://192.168.5.160:5001/PlaceOrder',
        // url: `${api}` + '/getClientTrades',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(response, 'add ScriptDetails')
          this.positionapi(val);
          this.list = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    exit(val) {
      this.Exits = true;
      console.log(val)
    },
    buy(val) {
      console.log(val)
    },
    sell(val) {
      console.log(val)
    },
    cancelorder(val) {
      console.log('add', val)
      // var axiosThis = this;
      this.orderno = 0
      var data = JSON.stringify({
        userId: clientid,
        exch: val.exch,
        token: val.token,
        session: session,
        tsym: val.tsym,
        qty: '1',
        amo: '',
        "trgprc": "",
        "trailprc": "",
        "blprc": "",
        "bpprc": "",
        "dscqty": "0",
        prc: val.lp,
        mktProt: '5',
        prd: val.prd,
        "ret": "DAY",
        "trantype": val.netqty < 0 ? "S" : "B",
        "prctyp": "LMT",
        "ordersource": "API",
      })
      console.log(data, 'GetLinkedScrips')

      // let data =`json={'uid'=${clientid},'req'='Orders'}&jkey=${session1}`

      let config = {
        method: 'post',
        //   maxBodyLength: Infinity,
        url: ' http://192.168.5.160:5001/PlaceOrder',
        // url: `${api}` + '/getClientTrades',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(response, 'add ScriptDetails')
          this.orderno = response.data.norenordno
          this.positionapi();

        })
        .catch((error) => {
          console.log(error);
        });


    },
    //     orderbook() {
    // let data= JSON.stringify({
    //     "userId": clientid,
    //     "session": session
    // })
    // let config = {
    //                   method: 'post',
    //                 //   maxBodyLength: Infinity,
    //                     url: ' http://192.168.5.120:5001/TradeData',
    //                   // url: `${api}` + '/getClientTrades',
    //                   headers: {
    //                       'Content-Type': 'application/json'
    //                   },
    //                   data: data
    //               };

    //               axios.request(config)
    //                   .then((response) => {
    //                     console.log(response,'add ScriptDetails')
    //                   })
    //                   .catch((error) => {
    //                       console.log(error);
    //                   });
    // console.log(data)
    //     },
    chart(val) {
      // console.log(val,'values')
      this.presentage = 0;
      // this.arraylp=[];
      this.lpclose = 0;
      // this.lp=0;
      this.charttk = '';
      this.tkchart = '';
      this.dataseries = val
      this.tkchart = val.token
      localStorage.setItem('token', val.token);
      // console.log(this.charttk,'lis')
      localStorage.setItem('symbolssearch', val.exch + ':' + val.tsym)
      // if(type == 'chart'){
      this.chartdata = true;
      this.dialog = true;
      this.dataseries = val;
      this.charttk = val.exch + ':' + val.tsym

      this.list = false;
      // var toks= val
      // console.log('toks',toks,type)

    },
    listofdata() {
      this.listest = true;
    },
    detailall(val) {
      console.log(val, 'detail')
      this.detailscreen = true;
      this.dtallval = [];
      this.detilsdata = '';
      this.alldetldata = '';
      var axiosThis = this;
      let data = JSON.stringify({
        "userId": clientid,
        // "orderNum": val.norenordno,
        'orderNum': '23100600043554',
        "session": session
      });
      // let data =`json={'uid'=${clientid},'req'='Orders'}&jkey=${session1}`

      let config = {
        method: 'post',
        //   maxBodyLength: Infinity,
        url: ' http://192.168.5.160:5001/OrderBookHistory',
        // url: `${api}` + '/getClientTrades',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log((response.data));
          axiosThis.alldetldata = response.data;
          axiosThis.detilsdata = response.data[0];
          this.list = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    marketwatch(val) {

      console.log(val)
      // var axiosThis = this;
      let data = JSON.stringify({
        "userId": clientid,
        "wlname": "1",
        "scripToken": val.exch + '|' + val.token,
        "add_delete_MW": "AddMultiScripsToMW",
        "session": session
      });
      // let data =`json={'uid'=${clientid},'req'='Orders'}&jkey=${session1}`

      let config = {
        method: 'post',
        //   maxBodyLength: Infinity,
        url: ' http://192.168.5.160:5001/AddDeleteMW',
        // url: `${api}` + '/getClientTrades',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log((response.data));

          this.list = false;
          this.marketwt();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    marketwt() {
      let data = JSON.stringify({
        "userId": clientid,
        "wlname": "1",
        "session": session
      });
      // let data =`json={'uid'=${clientid},'req'='Orders'}&jkey=${session1}`

      let config = {
        method: 'post',
        //   maxBodyLength: Infinity,
        url: ' http://192.168.5.160:5001/MarketWatch',
        // url: `${api}` + '/getClientTrades',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log((response.data));

        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectItem(item) {
      this.selectedItem = item;
    },
    unSelectItem() {
      this.selectedItem = false;
    },
    selectItem1(item) {
      this.selectedItem1 = item;
    },
    unSelectItem1() {
      this.selectedItem1 = false;
    },
    selectItem2(item) {
      this.selectedItem2 = item;
    },
    unSelectItem2() {
      this.selectedItem2 = false;
    },
    selectItem3(item) {
      this.selectedItem3 = item;
    },
    unSelectItem3() {
      this.selectedItem3 = false;
    },
    positionapi() {
      this.closelength = '';
      this.openlength = '';
      const axios = require("axios");
      let data = JSON.stringify({
        userId: clientid,
        bookNameReq: "PositionBook",
        session: session,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://192.168.5.160:5001/TradeData",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));

          this.voldata = response.data;
          let first = this.voldata.netqty;
          this.new = first
          // var clng;
          var letsda = this.voldata.map(obj => {

            // if (obj.netqty == 0) {
            // obj
            // }
            return (obj.netqty == 0) ? obj : null;

          })
          var opleng = this.voldata.map(obj => {
            return (obj.netqty > 0 || obj.netqty < 0) ? obj : null;
          })
          if (opleng != null) {
            this.openlength = ((opleng.filter(i => i)).length)
          }
          if (letsda != null) {
            this.closelength = (letsda.filter(i => i)).length
          }

          var les = response.data
          Datafeed.subscribeQuotesChain( les, this.optionChainDataParse,undefined )

        })
        .catch((error) => {
          console.log(error);
        });
    },
    closeChart() {
      this.historyofstock = false;
      this.ordcancel = false;
      this.deletes = false;
      this.positions = false;
      this.alertpage = false;
      this.marketdepthpg = false;
    },
  },
  mounted() {
    this.positionapi();
  },
  components: {
    WebChart, SingleIndex
    // OrderPage 

  },
};
</script>

<style lang="scss">
.centered-input input {
  text-align: center !important;
}

.postionchangeopenpostion {
  position: absolute !important;
  top: 25px !important;
  left: 474px !important;
  right: 200px;
}

.postionchangeopenpostionnew {
  position: absolute !important;
  top: 25px !important;
  left: 1144px !important;
  right: 800px !important;
}

.eeeeeeeee:hover .cccccccccc {

  visibility: visible !important;

}

.dhhdddhhdhdhd,
.eeeeeeeee {
  visibility: visible !important;
}

.newcol {
  color: #0037b7;
}

.searchforcommiditytext .v-label {
  color: #000000 !important;
  font-size: 13px !important;
  font-weight: 569 !important;
}

.searchforcommiditytext {
  .v-input_control>.v-input_slot {
    padding-left: 8px !important;
    padding-right: 0px !important;
  }
}

.searchforcommidityfilter .v-label {
  color: #000000 !important;
  font-size: 13px !important;
  font-weight: 569 !important;
  padding-left: 6px !important;
}

.searchforcommidityfilter {
  .v-input_control>.v-input_slot {
    padding-left: 14px !important;
    padding-right: 5px !important;
  }
}

.searchforcommiditytexts .v-label {
  color: #000000 !important;
  font-size: 13px !important;
  font-weight: 569 !important;
  padding-left: 5px !important;
}

.v-text-field--rounded>.v-input__control>.v-input__slot {
  padding: 0 0px !important;
  padding-left: 16px !important;
}

.ssss {
  .v-text-field--rounded>.v-input_control>.v-input_slot {
    padding-left: 16px !important;
    padding-right: 0px !important;
  }
}

.searchforcommidityfilter .v-label {
  color: #000000 !important;
  font-size: 13px !important;
  font-weight: 569 !important;
  padding-left: 6px !important;
}

.searchforcommidityfilter {
  .v-input_control>.v-input_slot {
    padding-left: 14px !important;
    padding-right: 5px !important;
  }
}
</style>