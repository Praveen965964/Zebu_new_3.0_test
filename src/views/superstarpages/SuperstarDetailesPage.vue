<template>
    <div>
      <v-row>
        <v-col cols="9">
          <v-card
            outlined
            elevation="0"
            class="mt-3 mr-5"
            style="border: 1px solid #dddddd"
          >
            <v-card
              elevation="0"
              class="pa-5"
              style="background-color: #fafbff"
            >
              <div class="d-flex">
                <div>
                  <v-img
                    :src="require('@/assets/cir.svg')"
                    width="46px"
                    height="46px"
                    class="mt-1 ml-3"
                  ></v-img>
                </div>
                <div>
                  <p
                    class="mb-1 ml-4 mt-1 mb-0"
                    style="
                      color: #000;
                      font-size: 20px;
                      font-weight: 659;
                      font-size: 19px;
                      line-height: 16px; /* 80% */
                      letter-spacing: -1px;
                    "
                  >
                    Rakesh Jhunjhunwala
                    <v-chip
                      label
                      small
                      style="
                        background-color: white;
                        color: #666666;
                        font-size: 9px;
                        text-transform: uppercase;
                        line-height: 12px; /* 133.333% */
                        font-weight: 469;
                        letter-spacing: 0.4px;
                      "
                      class="ml-2"
                      >Large Cap</v-chip
                    >
                    <v-chip
                      label
                      small
                      style="
                        background-color: white;
                        color: #666666;
                        font-size: 9px;
                        text-transform: uppercase;
                        line-height: 8px; /* 133.333% */
                        font-weight: 469;
                        letter-spacing: 0.4px;
                      "
                      class="ml-2"
                      >Vol: 1881223</v-chip
                    >
                  </p>

                  <p
                    class="mb-0 mt-1 ml-5"
                    style="
                      color: #666;
                      font-size: 12px;
                      font-weight: 409;
                      line-height: 16px;
                    "
                  >
                    This portfolio is a shadow portfolio of Rakesh
                    Jhunjhunwala's. This basket gets rebalanced <br />
                    every 3 months according to the official reporting of their
                    portfolio in the market.
                  </p>
                </div>
                <div class="ml-auto">
                  <v-btn
                    class="ml-4"
                    width="25"
                    height="25"
                    fab
                    dark
                    elevation="0"
                    color="#EBEBED"
                    outlined
                  >
                    <v-icon size="15" color="#3E4763">
                      mdi-bell-outline
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class="ml-1"
                    fab
                    dark
                    width="25"
                    height="25"
                    elevation="0"
                    color="#EBEBED"
                    outlined
                  >
                    <v-icon size="15" color="#3E4763">
                      mdi-bookmark-outline
                    </v-icon>
                  </v-btn>
                  <v-btn
                    class=""
                    fab
                    dark
                    width="25"
                    height="25"
                    elevation="0"
                    color="#fafbff"
                    outlined
                  >
                    <v-icon size="20" color="#3E4763">
                      mdi-dots-vertical
                    </v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card>
            <div class="pa-5">
              <v-row no-gutters>
                <v-col cols="4" class="pl-5 pt-1 pb-6 mr-10">
                  <v-row>
                    <v-col cols="12">
                      <div>
                        <p class="mb-0 pt-5 seiih">MINIMUM AMOUNT to invest</p>
                        <p class="mb-0 pt-2 maihh">₹1,21,691</p>
                        <v-divider class="mr-5 mt-2"></v-divider>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="6">
                      <div>
                        <p class="mb-0 pt-7 seiih">5yr Cagr</p>
                        <p class="mb-0 pt-2 maihh" style="color: #43a833">
                          +12.40%
                        </p>
                        <v-divider class="mr-5 mt-2"></v-divider>
                      </div>
                    </v-col>
                    <v-col cols="6">
                      <div>
                        <p class="mb-0 pt-7 seiih">1yr Cagr</p>
                        <p class="mb-0 pt-2 maihh" style="color: #43a833">
                          +22.86%
                        </p>
                        <v-divider class="mr-5 mt-2"></v-divider>
                      </div>
                    </v-col>
                  </v-row>

                  <div>
                    <p class="mb-0 pt-7 seiih">HIGH - LOW</p>
                    <span class="mb-0 maihh">₹230000</span>
                    <span class="slidecontainerlist mx-2 my-0 py-0">
                      <input
                        type="range"
                        min="50"
                        max="2000"
                        class="sliderlist"
                      />
                    </span>
                    <span class="mb-0 pt-2 maihh"> ₹289000</span>
                    <v-divider class="mr-1 mt-2"></v-divider>
                  </div>
                  <div>
                    <p class="mb-0 pt-7 seiih">52 WEEKS HIGH - 52 WEEKS LOW</p>
                    <span class="mb-0 mt-1 pt-2 maihh">₹1,438.80 </span>
                    <span class="slidecontainerlist mx-2 mt-n4">
                      <input
                        type="range"
                        min="50"
                        max="2000"
                        class="sliderlist"
                      />
                    </span>
                    <span class="mb-0 pt-2 maihh"> ₹1,438.80 </span>
                    <v-divider class="mr-1 mt-2"></v-divider>
                  </div>
                </v-col>

                <v-col cols="8"> </v-col>
              </v-row>
            </div>
          </v-card>

          <v-card
            outlined
            elevation="0"
            class="mt-5 mr-5 pa-8"
            style="border: 1px solid #dddddd"
          >
            <p class="mb-1 newhaa">Portfolio Overview</p>
            <p class="mb-0 newsidd mt-5">Sector wise breakup of holdings</p>
            <v-col cols="8" class="mb-0 newsideor mt-1 ma-0 pa-0"
              >Each fund is uniquely allocated to suit and match customer
              expectations based on the risk profile and return
              expectations.</v-col
            >
            <p
              class="mb-0 mt-5"
              style="
                color: #666;
                font-size: 16px;
                font-weight: 559;
                line-height: 16px;
                letter-spacing: -0.32px;
              "
            >
              Portfolio Constituents
            </p>

            <v-row>
              <v-col cols="8">
                <v-divider class="mt-4"></v-divider>
                <div class="d-flex">
                  <p class="mb-0 body-2 mt-2" style="color: #666666">
                    Sector and stocks
                  </p>
                  <p
                    class="mb-0 body-2 mt-2 mr-2 ml-auto"
                    style="color: #666666"
                  >
                    Weightage (%)
                  </p>
                </div>
                <v-divider class="mt-2"></v-divider>
                <v-expansion-panels
                  accordion
                  class="elevation-0"
                  v-model="active"
                >
                  <v-expansion-panel>
                    <v-expansion-panel-header
                      expand-icon=""
                      elevation="0"
                      class="ma-0 pa-0 pl-2 font-weight-bold black--text"
                      outline
                      @click="extab"
                      style="
                        background-color: #fafbff;
                        border-left: 4px solid #3aaa92;
                      "
                    >
                      <div>
                        <div class="d-flex">
                          <span class="mb-0 mt-2"> Banking and Finance </span>

                          <v-icon v-if="active">mdi-menu-down</v-icon>
                          <v-icon
                            size="30"
                            class="pa-0 ml- ma-0 mt-0 pt-0"
                            v-else
                            >mdi-menu-down</v-icon
                          >

                          <span
                            class="ml-auto font-weight-bold mt-2 mr-2 body-2"
                            >45.5%</span
                          >
                        </div>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div
                        class="pa-0 ma-0 pl-0 ml-0 mr-0 pr-0"
                        v-for="card in expandd"
                        :key="card.id"
                      >
                        <div class="d-flex pa-0 ma-0">
                          <p
                            class="mb-0 pa-0 pl-3 ma-0 body-2 mt-2"
                            style="color: #666666"
                          >
                            {{ card.sub1 }}
                          </p>
                          <p
                            class="mb-0 pa-0 ma-0 mr-2 body-2 ml-auto mt-2"
                            style="color: #666666"
                          >
                            {{ card.sub2 }}
                          </p>
                        </div>
                        <v-divider class="pa-0 ma-0 mt-2"></v-divider>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header
                      expand-icon=""
                      elevation="0"
                      class="ma-0 pa-0 pl-2 font-weight-bold black--text"
                      outline
                      @click="extab"
                      v-model="expan"
                      style="
                        background-color: #fafbff;
                        border-left: 4px solid #ecd7a1;
                      "
                    >
                      <div>
                        <div class="d-flex">
                          <span class="mb-0 mt-2"> Pharmaceuticals </span>

                          <v-icon v-if="expan">mdi-menu-down</v-icon>
                          <v-icon
                            size="30"
                            class="pa-0 ml- ma-0 mt-0 pt-0"
                            v-else
                            >mdi-menu-down</v-icon
                          >

                          <span
                            class="ml-auto font-weight-bold mt-2 mr-2 body-2"
                            >45.5%</span
                          >
                        </div>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div
                        class="pa-0 ma-0 pl-0 ml-0 mr-0 pr-0"
                        v-for="card in expandd"
                        :key="card.id"
                      >
                        <div class="d-flex pa-0 ma-0">
                          <p
                            class="mb-0 pa-0 pl-3 ma-0 body-2 mt-2"
                            style="color: #666666"
                          >
                            {{ card.sub1 }}
                          </p>
                          <p
                            class="mb-0 pa-0 ma-0 mr-2 body-2 ml-auto mt-2"
                            style="color: #666666"
                          >
                            {{ card.sub2 }}
                          </p>
                        </div>
                        <v-divider class="pa-0 ma-0 mt-2"></v-divider>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header
                      expand-icon=""
                      elevation="0"
                      class="ma-0 pa-0 pl-2 font-weight-bold black--text"
                      outline
                      @click="extab"
                      v-model="expan"
                      style="
                        background-color: #fafbff;
                        border-left: 4px solid #f6ce47;
                      "
                    >
                      <div>
                        <div class="d-flex">
                          <span class="mb-0 mt-2"> Software & Services </span>

                          <v-icon v-if="expan">mdi-menu-down</v-icon>
                          <v-icon
                            size="30"
                            class="pa-0 ml- ma-0 mt-0 pt-0"
                            v-else
                            >mdi-menu-down</v-icon
                          >

                          <span
                            class="ml-auto font-weight-bold mt-2 mr-2 body-2"
                            >45.5%</span
                          >
                        </div>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div
                        class="pa-0 ma-0 pl-0 ml-0 mr-0 pr-0"
                        v-for="card in expandd"
                        :key="card.id"
                      >
                        <div class="d-flex pa-0 ma-0">
                          <p
                            class="mb-0 pa-0 pl-3 ma-0 body-2 mt-2"
                            style="color: #666666"
                          >
                            {{ card.sub1 }}
                          </p>
                          <p
                            class="mb-0 pa-0 ma-0 mr-2 body-2 ml-auto mt-2"
                            style="color: #666666"
                          >
                            {{ card.sub2 }}
                          </p>
                        </div>
                        <v-divider class="pa-0 ma-0 mt-2"></v-divider>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>

                  <v-expansion-panel>
                    <v-expansion-panel-header
                      expand-icon=""
                      elevation="0"
                      class="ma-0 pa-0 pl-2 font-weight-bold black--text"
                      outline
                      @click="extab"
                      v-model="expan"
                      style="
                        background-color: #fafbff;
                        border-left: 4px solid #a8e5d4;
                      "
                    >
                      <div>
                        <div class="d-flex">
                          <span class="mb-0 mt-2"> Utilities </span>

                          <v-icon v-if="expan">mdi-menu-down</v-icon>
                          <v-icon
                            size="30"
                            class="pa-0 ml- ma-0 mt-0 pt-0"
                            v-else
                            >mdi-menu-down</v-icon
                          >

                          <span
                            class="ml-auto font-weight-bold mt-2 mr-2 body-2"
                            >45.5%</span
                          >
                        </div>
                      </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div
                        class="pa-0 ma-0 pl-0 ml-0 mr-0 pr-0"
                        v-for="card in expandd"
                        :key="card.id"
                      >
                        <div class="d-flex pa-0 ma-0">
                          <p
                            class="mb-0 pa-0 pl-3 ma-0 body-2 mt-2"
                            style="color: #666666"
                          >
                            {{ card.sub1 }}
                          </p>
                          <p
                            class="mb-0 pa-0 mr-2 ma-0 body-2 ml-auto mt-2"
                            style="color: #666666"
                          >
                            {{ card.sub2 }}
                          </p>
                        </div>
                        <v-divider class="pa-0 ma-0 mt-2"></v-divider>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
                <p
                  class="mb-0 mt-4"
                  style="
                    color: #0037b7;
                    font-size: 14px;
                    font-weight: 559;
                    line-height: 16px;
                    cursor: pointer;
                  "
                >
                  See More
                </p>
              </v-col>
            </v-row>
          </v-card>

          <v-card
            outlined
            elevation="0"
            class="mt-5 mr-5"
            style="border: 1px solid #dddddd"
          >
            <div class="pl-8 pt-8 pr-8">
              <p class="mb-1 newhaa">Portfolio Holdings</p>
              <div class="d-flex">
                <div>
                  <v-tabs class="mt-3 pa-0" color="black">
                    <v-tab class="text-none">Stocks Holdings</v-tab>
                    <v-tab class="text-none">Other Holdings</v-tab>
                  </v-tabs>
                </div>
                <div class="ml-auto ssss" >
                  <!-- <v-text-field  prepend-inner-icon="mdi-magnify" v-model="search" class="tophundraedmutual ml-2 mt-4 searchfundlabel" style="max-width:230px;font-size:12px" background-color="#F1F3F8" label="Search company" solo
            rounded flat dense>
          </v-text-field> -->
                  <!-- <v-row>
          <v-col cols="4"> -->

                  <!-- <div class="row mt-0 ssss"> -->
                    <v-text-field
                      class="searchforcommiditytexts pa-0"
                      background-color="#F1F3F8"
                      label="Search company"
                      v-model="search"
                      solo
                      rounded
                      flat
                      dense
                      
                      style="max-width: 212px"
                    >
                      <template v-slot:prepend-inner>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2682_15138)">
                            <path
                              d="M14.6667 14.6667L12 12"
                              stroke="#666666"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                              stroke="#666666"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_15138">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-text-field>
                   
                  <!-- </div> -->

                  <!--        
                    </v-col>
</v-row> -->
                </div>
                <v-select
                      class="searchforcommidityfilter ssss rounded-xl elevation-0 ml-2"
                      flat
                      background-color="#F1F3F8"
                      :items="items"
                      label="Filter"
                      append-icon="mdi-chevron-down"
                      dense
                      solo
                      style="max-width:16%;height:20px;background-color="
                    >
                      <template v-slot:append>
                        <div class="pr-3 pt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M3.28125 6.09375L7.5 10.3125L11.7188 6.09375"
                              stroke="#777777"
                              stroke-width="1.8"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </template>
                      <template v-slot:prepend-inner>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2682_18796)">
                            <path
                              d="M1.125 1.875H12.375"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.125 4.875H12.375"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.125 7.875H4.5"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.125 10.875H4.5"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.125 8.625L9 10.5L12.375 7.125"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_18796">
                              <rect width="13.5" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-select>
                    <v-menu left offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          plain
                          :ripple="false"
                          class="ml-6"
                          icon
                          max-width="0px"
                        >
                          <v-icon color="black">mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in itemsmenu"
                          :key="index"
                        >
                          <v-list-item-title>{{
                            item.title
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                <!-- <div>
                <v-card
                  class="rounded-pill pa-2 mt-4 ml-2"
                  height="37px"
                  small
                  style="background-color: #f1f3f8"
                  elevation="0"
                >
                  <p class="mb-0">
                    <v-icon color="#666666" size="18"
                      >mdi-calendar-month-outline</v-icon
                    >
                    <span class="pl-2 " style="color: #2E3032;
font-size: 13px;
font-weight: 469;
line-height: normal;"
                      >Q2 2023 </span
                    ><v-icon color="#666666">mdi-chevron-down</v-icon>
                  </p>
                </v-card>
              </div> -->
                <!-- <div>
                <v-icon class="mt-5" size="26">mdi-dots-vertical</v-icon>
              </div> -->
              </div>
            </div>
            <v-data-table
              :headers="last"
              :items="datalast"
              class=""
              hide-default-footer
              :search="search"
              :items-per-page="perpage"
            >
              <template #item="{ item }">
                <tr>
                  <td>
                    <div class="mb-0 caption d-flex">
                      <div></div>
                      <div class="mb-0 " style="color: #000;
font-size: 14px;
font-weight: 559;
line-height: 16px; ">
                        {{ item.fun }}
                      </div>
                    </div>
                  </td>
                  <td class="mb-0 table1sidehe" >
                    {{ item.mar }}
                  </td>
                  <td class="mb-0 table1sidehe">
                    {{ item.wei }}
                  </td>
                  <td class="mb-0 table1sidehe">
                    {{ item.cha }}
                  </td>
                  <td class="mb-0 table1sidehe">
                    {{ item.port }}
                  </td>
                  <td class="mb-0 caption">
                    <div>
                      <v-img
                        :src="require('@/assets/dot.svg')"
                        width="30"
                        class="mt-1"
                      ></v-img>
                    </div>
                  </td>
                </tr>
              </template>
            </v-data-table>
            <v-divider></v-divider>
            <v-card
              v-if="showmore2"
              class="elevation-0 mt-0 text-center"
              style="outline: 1px solid #e7e7e7"
            >
              <v-btn
                color="primary"
                @click="showmore"
                class="text-capitalize"
                text
                dense
                >See more holdings</v-btn
              >
            </v-card>
            <v-card
              v-if="showmore23"
              class="elevation-0 mt-0 text-center"
              style="outline: 1px solid #e7e7e7"
            >
              <v-btn
                color="primary"
                @click="showmore1"
                class="text-capitalize"
                text
                dense
                >See less holdings</v-btn
              >
            </v-card>
          </v-card>

          <v-card
            outlined
            elevation="0"
            class="mt-5 mr-5"
            style="border: 1px solid #dddddd"
          >
            <div class="d-flex pt-8 pr-8 pl-8">
              <div>
                <p class="mt-1 newhaa">Bulk/Block Deals</p>
              </div>
              <!-- <div class="ml-auto">
           
                <v-text-field
                  prepend-inner-icon="mdi-magnify"
                  v-model="search1"
                  class="tophundraedmutual ml-2 mt-1 searchfundlabel"
                  style="max-width: 230px; font-size: 12px"
                  background-color="#F1F3F8"
                  label="Search company"
                  solo
                  rounded
                  flat
                  dense
                >
                </v-text-field>
              </div>
              <div>
                <v-card
                  class="rounded-pill pa-2 ml-2"
                  small
                  style="background-color: #f1f3f8"
                  elevation="0"
                >
                  <p class="mb-0">
                    <v-icon color="#666666" size="18"
                      >mdi-calendar-month-outline</v-icon
                    >
                    <span
                      class="pl-2"
                      style="
                        color: #2e3032;
                        font-size: 13px;
                        font-weight: 469;
                        line-height: normal;
                      "
                      >This month </span
                    ><v-icon color="#666666">mdi-chevron-down</v-icon>
                  </p>
                </v-card>
              </div>
              <div>
                <v-icon class="mt-1" size="30">mdi-dots-vertical</v-icon>
              </div> -->
              <div class="ml-auto ssss" >

                    <v-text-field
                      class="searchforcommiditytexts pa-0"
                      background-color="#F1F3F8"
                      label="Search company"
                      v-model="search1"
                      solo
                      rounded
                      flat
                      dense
                      
                      style="max-width: 212px"
                    >
                      <template v-slot:prepend-inner>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2682_15138)">
                            <path
                              d="M14.6667 14.6667L12 12"
                              stroke="#666666"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                            <path
                              d="M6.66683 12.0002C9.61235 12.0002 12.0002 9.61235 12.0002 6.66683C12.0002 3.72131 9.61235 1.3335 6.66683 1.3335C3.72131 1.3335 1.3335 3.72131 1.3335 6.66683C1.3335 9.61235 3.72131 12.0002 6.66683 12.0002Z"
                              stroke="#666666"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_15138">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-text-field>
                </div>
                <v-select
                      class="searchforcommidityfilter ssss rounded-xl elevation-0 ml-2"
                      flat
                      background-color="#F1F3F8"
                      :items="items"
                      label="Filter"
                      append-icon="mdi-chevron-down"
                      dense
                      solo
                      style="max-width:16%;height:20px;background-color="
                    >
                      <template v-slot:append>
                        <div class="pr-3 pt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M3.28125 6.09375L7.5 10.3125L11.7188 6.09375"
                              stroke="#777777"
                              stroke-width="1.8"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </template>
                      <template v-slot:prepend-inner>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_2682_18796)">
                            <path
                              d="M1.125 1.875H12.375"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.125 4.875H12.375"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.125 7.875H4.5"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.125 10.875H4.5"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.125 8.625L9 10.5L12.375 7.125"
                              stroke="#666666"
                              stroke-width="1.4"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2682_18796">
                              <rect width="13.5" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </template>
                    </v-select>
                    <v-menu left offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          plain
                          :ripple="false"
                          class="ml-6"
                          icon
                          max-width="0px"
                        >
                          <v-icon color="black">mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in itemsmenu"
                          :key="index"
                        >
                          <v-list-item-title>{{
                            item.title
                          }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
           
           
            </div>

            <v-data-table
              :headers="lastli"
              :items="datalastss"
              class="mt-0"
              hide-default-footer
              :search="search1"
              :items-per-page="perpage"
            >
              <template #item="{ item }">
                <tr>
                  <td>
                    <div class="mb-0 taaahee">
                      {{ item.fun1 }}
                    </div>
                  </td>
                  <td class="mb-0 tabbsidhe1" style="font-weight: 459">
                    {{ item.mar2 }}
                  </td>
                  <td class="mb-0 tabbsidhe1" style="font-weight: 459">
                    {{ item.wei3 }}
                  </td>
                  <!-- <td class="mb-0 tabbsidhe1" style="font-weight: 459">
                    {{ item.cha4 }}
                  </td> -->
                  <td class="mb-0 posneg">
                    <span v-if="item.cha4 === 'Bought'" style="color: green">
                      {{ item.cha4 }}</span
                    >

                    <span v-else style="color: red">{{ item.cha4 }}</span>
                  </td>

                  <td class="mb-0 tabbsidhe1" style="font-weight: 459">
                    {{ item.port5 }}
                  </td>
                  <td class="mb-0 tabbsidhe1" style="font-weight: 459">
                    {{ item.hist6 }}
                  </td>
                  <td class="mb-0 tabbsidhe1" style="font-weight: 459">
                    {{ item.tra7 }}
                  </td>
                  <td class="mb-0 tabbsidhe1" style="font-weight: 459">
                    {{ item.lass8 }}
                  </td>
                </tr>
              </template>
            </v-data-table>
            <v-divider></v-divider>
            <v-card v-if="showmore3" class="elevation-0 mt-0 text-center">
              <v-btn
                color="primary"
                @click="showmorela"
                class="text-capitalize"
                text
                dense
                >See more bulk/block</v-btn
              >
            </v-card>
            <v-card v-if="showmore33" class="elevation-0 mt-0 text-center">
              <v-btn
                color="primary"
                @click="showmorela1"
                class="text-capitalize"
                text
                dense
                >See Less bulk/block</v-btn
              >
            </v-card>
          </v-card>

          <v-card
            outlined
            elevation="0"
            class="mt-5 mr-5 pa-8"
            style="border: 1px solid #dddddd"
          >
            <p class="mt-1 newhaa">About the Rakesh Jhunjhunwala</p>
            <p class="newsideor mb-0">
              Rakesh Jhunjhunwala needs no introduction in the Indian stock
              markets. His moves and strategies are perhaps the most followed by
              investors; retail and institutional. He has been given a lot of
              epithets by the stock market community. To some, Rakesh is the
              Pied Piper of stock markets, while to some he is the proverbial
              Big Bull and to many others he is India’s answer to Warren
              Buffett. <br /><br />

              IIn a nutshell, there is no gainsaying his immense influence on
              investors. His portfolio changes are also closely tracked and his
              profits on Titan and Lupin, by now, are the stuff that legends and
              stock market folklore are made of. Here is a quick look at his
              portfolio shifts as of end Mar-22..<br /><br />

              These are shares held by Rakesh Jhunjhunwala and Associates as per
              the shareholding data filed with the exchanges. The latest quarter
              tends to have missing data since not all companies may have
              reported their shareholding data till now.
            </p>
            <v-row>
              <v-col cols="4">
                <div>
                  <p class="mb-0 pt-5 seiih">Net worth</p>
                  <p class="mb-0 pt-1 maihh">38.885 Cr</p>
                  <v-divider class="mr-5 mt-2"></v-divider>
                </div>
                <div>
                  <p class="mb-0 pt-5 seiih">Rebalance Frequency</p>
                  <p class="mb-0 pt-1 maihh">Quarterly</p>
                  <v-divider class="mr-5 mt-2"></v-divider>
                </div>
              </v-col>
              <v-col cols="4">
                <div>
                  <p class="mb-0 pt-5 seiih">Net worth</p>
                  <p class="mb-0 pt-1 maihh">38.885 Cr</p>
                  <v-divider class="mr-5 mt-2"></v-divider>
                </div>
                <div>
                  <p class="mb-0 pt-5 seiih">Rebalance Frequency</p>
                  <p class="mb-0 pt-1 maihh">Quarterly</p>
                  <v-divider class="mr-5 mt-2"></v-divider>
                </div>
              </v-col>
              <v-col cols="4">
                <div>
                  <p class="mb-0 pt-5 seiih">Net worth</p>
                  <p class="mb-0 pt-1 maihh">38.885 Cr</p>
                  <v-divider class="mr-5 mt-2"></v-divider>
                </div>
                <div>
                  <p class="mb-0 pt-5 seiih">Rebalance Frequency</p>
                  <p class="mb-0 pt-1 maihh">Quarterly</p>
                  <v-divider class="mr-5 mt-2"></v-divider>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="3">
          <div class="mt-3">
            <p
              style="
                color: #000;
                font-size: 16px;
                font-weight: 559;
                line-height: 16px;
                letter-spacing: -0.32px;
              "
            >
              Plans for Superstar Portfolio
            </p>
            <p
              style="
                color: #666;
                font-size: 11.5px;
                font-weight: 409;
                line-height: 18px;
              "
            >
              Get access to constituents and rebalance updates for Listed
              Venture Capital by
              <span
                style="
                  color: #000;
                  font-size: 12px;
                  font-weight: 509;
                  line-height: 18px;
                "
                >Zebu Trade</span
              >
            </p>

            <p
              style="
                color: #999;
                font-size: 14px;
                font-weight: 559;
                line-height: 16px;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="4"
                viewBox="0 0 12 4"
                fill="none"
              >
                <path
                  d="M2 2H10"
                  stroke="#999999"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Seamlessly place orders in one click
            </p>

            <p
              style="
                color: #999;
                font-size: 14px;
                font-weight: 559;
                line-height: 16px;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="4"
                viewBox="0 0 12 4"
                fill="none"
              >
                <path
                  d="M2 2H10"
                  stroke="#999999"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Get regular rebalance updates
            </p>

            <p
              style="
                color: #999;
                font-size: 13px;
                font-weight: 559;
                line-height: 16px;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="4"
                viewBox="0 0 12 4"
                fill="none"
              >
                <path
                  d="M2 2H10"
                  stroke="#999999"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Easily start SIPs for disciplined investing
            </p>
            <p
              style="
                color: #666;
                font-size: 12px;
                font-weight: 409;
                line-height: 18px;
              "
            >
              On acceptance of the mandate, the bid amount will get blocked in
              your bank account.
            </p>

            <v-divider></v-divider>

            <div class="text-center mt-4">
              <v-btn elevation="0" rounded class="text-none" color="black" dark
                ><span
                  style="
                    color: #fff;
                    font-size: 14px;
                    font-weight: 559;
                    line-height: 20px;
                    letter-spacing: -0.28px;
                  "
                  >Start investing now</span
                ></v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
</template>
<style>
.v-expansion-panel::before {
  box-shadow: none;
}

.v-expansion-panel-content__wrap {
  padding: 0 0 0 0 !important;
  flex: 1 1 auto;
  max-width: 100%;
}

.v-expansion-panel-content__wrap {
  /* padding: 0 24px 16px; */
  flex: 1 1 auto;
  max-width: 100%;
}

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
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
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
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
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
  border: 1px solid rgb(0, 0, 0);
}

/* .scrolldiv {
  ::-webkit-scrollbar {
    display: none !important;
  }
} */

.postionchange {
  position: absolute !important;
  top: 25px !important;
  left: 170px !important;
  right: 200px;
}

.gray-background {
  background-color: #cccccc;
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
  color: "#20262E";
  background-color: rgba(255, 255, 255, 0.23);
  text-align: left;
  z-index: 1000;
  pointer-events: none;
}

#no-background-hover::before {
  background-color: transparent !important;
}
.newhaa {
  color: #000;
  font-size: 20px;
  font-weight: 559;
  line-height: 16px;
  letter-spacing: -0.4px;
}
.newsidd {
  color: #000;
  font-size: 14px;
  font-weight: 559;
  line-height: 20px;
  letter-spacing: -0.28px;
}
.newsideor {
  color: #666;
  font-size: 12px;
  font-weight: 469;
  line-height: 18px;
}
.hnpoint {
  color: #999;
  font-size: 14px;
  font-weight: 559;
  line-height: 16px;
}

.v-tab--active {
  color: inherit;
}

.v-tab {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 0 1 auto;
  font-size: 0.875rem;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  min-width: 90px;
  max-width: 360px;
  outline: none;
  padding: 0 8px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: "uppercase";
  transition: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.v-application {
  color: #000000 !important;
  caret-color: #000000 !important;
}

.table1sidehe{
  color: #000;
font-size: 12px;
font-weight: 469;
line-height: 16px; /* 123.077% */
}
.headstyle{
  color: #666;
font-size: 13px;
font-weight: 469;
line-height: 16px;
}
</style>



<script>
export default {
  data() {
    return {
      search1: "",
      search: "",
      showmore2: true,
      showmore23: false,
      perpage: 5,
      showmore3: true,
      showmore33: false,
      active: null,
      daata: true,
      expan: false,

      expand: [
        { id: 1, title: "Banking and Finance" },
        { id: 1, title: "Utilities" },
        { id: 1, title: " Software & Services" },
        { id: 1, title: "Pharmaceuticals" },
      ],
      expandd: [
        { sub1: "Canara Bank", sub2: "20.2%" },
        { sub1: "Canara Bank", sub2: "20.2%" },
      ],
      last: [
        { text: "Stocks", value: "fun", sortable: false,class:"headstyle" },
        { text: "Quantity Held", value: "mar", sortable: false ,class:"headstyle"},
        { text: "Holdings (%)", value: "wei", sortable: false,class:"headstyle" },
        { text: "Change From Pre Qtr", value: "cha", sortable: false,class:"headstyle" },
        { text: "Hold. val (cr)", value: "port", sortable: false ,class:"headstyle"},
        { text: "History", value: "hist", sortable: false,class:"headstyle" },
      ],
      lastli: [
        { text: "Stocks", value: "fun1", sortable: false,class:"headstyle" },
        { text: "Time", value: "mar2", sortable: false,class:"headstyle" },
        { text: "Quantity Held", value: "wei3", sortable: false,class:"headstyle" },
        { text: "Action", value: "cha4", sortable: false,class:"headstyle" },
        { text: "Deal type", value: "port5", sortable: false,class:"headstyle" },
        { text: "Avg price", value: "hist6", sortable: false ,class:"headstyle"},
        { text: "Traded %", value: "tra7", sortable: false,class:"headstyle" },
        { text: "lastli", value: "lass8", sortable: false,class:"headstyle" },
      ],

      datalast: [
        {
          fun: "Agro Tech Foods Ltd.",
          mar: "0.1777%",
          wei: "8.22%",
          cha: "Filing awaited for current qtr",
          port: "174.21 ",
        },
        {
          fun: "Agro Tech Foods Ltd.",
          mar: "0.1777%",
          wei: "8.22%",
          cha: "Filing awaited for current qtr",
          port: "174.21 ",
        },
        {
          fun: "Agro Tech Foods Ltd.",
          mar: "0.1777%",
          wei: "8.22%",
          cha: "Filing awaited for current qtr",
          port: "174.21 ",
        },
        {
          fun: "Agro Tech Foods Ltd.",
          mar: "0.1777%",
          wei: "8.22%",
          cha: "Filing awaited for current qtr",
          port: "174.21 ",
        },
        {
          fun: "Agro Tech Foods Ltd.",
          mar: "0.1777%",
          wei: "8.22%",
          cha: "Filing awaited for current qtr",
          port: "174.21 ",
        },
        {
          fun: "Agro Tech Foods Ltd.",
          mar: "0.1777%",
          wei: "8.22%",
          cha: "Filing awaited for current qtr",
          port: "174.21 ",
        },
        {
          fun: "Agro Tech Foods Ltd.",
          mar: "0.1777%",
          wei: "8.22%",
          cha: "Filing awaited for current qtr",
          port: "174.21 ",
        },
      ],
      datalastss: [
        {
          fun1: "Agro Tech Foods Ltd",
          mar2: "30 Jan’ 23",
          wei3: "2,003,259",
          cha4: "Bought",
          port5: "Bulk",
          hist6: "2,003,259",
          tra7: "174.21",
          lass8: "17.90%",
        },
        {
          fun1: "Agro Tech Foods Ltd",
          mar2: "30 Jan’ 23",
          wei3: "2,003,259",
          cha4: "Bought",
          port5: "Bulk",
          hist6: "2,003,259",
          tra7: "174.21",
          lass8: "17.90%",
        },
        {
          fun1: "Agro Tech Foods Ltd",
          mar2: "30 Jan’ 23",
          wei3: "2,003,259",
          cha4: "Sell",
          port5: "Bulk",
          hist6: "2,003,259",
          tra7: "174.21",
          lass8: "17.90%",
        },
        {
          fun1: "Agro Tech Foods Ltd",
          mar2: "30 Jan’ 23",
          wei3: "2,003,259",
          cha4: "Bought",
          port5: "Bulk",
          hist6: "2,003,259",
          tra7: "174.21",
          lass8: "17.90%",
        },
        {
          fun1: "Agro Tech Foods Ltd",
          mar2: "30 Jan’ 23",
          wei3: "2,003,259",
          cha4: "Bought",
          port5: "Bulk",
          hist6: "2,003,259",
          tra7: "174.21",
          lass8: "17.90%",
        },
        {
          fun1: "Agro Tech Foods Ltd",
          mar2: "30 Jan’ 23",
          wei3: "2,003,259",
          cha4: "Bought",
          port5: "Bulk",
          hist6: "2,003,259",
          tra7: "174.21",
          lass8: "17.90%",
        },
      ],
    };
  },
  methods: {
    extab() {
      if (this.daata == true) {
        this.daata == false;
      } else {
        this.daata == true;
      }
    },
    showmore() {
      this.perpage = this.datalast.length;
      this.showmore2 = !this.showmore2;
      this.showmore23 = !this.showmore23;
    },
    showmore1() {
      this.perpage = 5;
      this.showmore2 = !this.showmore2;
      this.showmore23 = !this.showmore23;
    },
    showmorela() {
      this.perpage = this.datalastss.length;
      this.showmore3 = !this.showmore3;
      this.showmore33 = !this.showmore33;
    },
    showmorela1() {
      this.perpage = 5;
      this.showmore3 = !this.showmore3;
      this.showmore33 = !this.showmore33;
    },
  },
};
</script>
