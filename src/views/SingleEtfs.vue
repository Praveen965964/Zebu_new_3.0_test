




<template>
  <v-container class="">
    <div>
      <v-card height="133px" class="mt-5"></v-card>

      <div
        class="section-nav d-none d-lg-flex d-md-flex d-flex"
        style="background-color: white"
      >
        <nav class="ml-2 ">
          <ul class="px-0">
            <li :class="{ active: activeSection === 'introduction' }">
              <a href="#introduction" class="text-underlined liiii">Overview</a>
            </li>
            <li :class="{ active: activeSection === 'introduction12' }">
              <a href="#introduction" class="text-underlined liiii">F&O</a>
            </li>
            <li :class="{ active: activeSection === 'secc' }">
              <a href="#secc" class="text-underlined liiii">Fundamental</a>
            </li>
            <li :class="{ active: activeSection === 'anal' }">
              <a href="#anal" class="text-underlined liiii"
                >Analyst Forecasts</a
              >
            </li>
            <li :class="{ active: activeSection === 'fina' }">
              <a href="#fina" class="text-underlined liiii">Financials</a>
            </li>
            <li :class="{ active: activeSection === 'peer' }">
              <a href="#peer" class="text-underlined liiii">Peers</a>
            </li>
            <li :class="{ active: activeSection === 'hold' }">
              <a href="#hold" class="text-underlined liiii">Holdings</a>
            </li>
            <li :class="{ active: activeSection === 'even' }">
              <a href="#even" class="text-underlined liiii">Events</a>
            </li>
            <li :class="{ active: activeSection === 'news' }">
              <a href="#news" class="text-underlined liiii">News</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto mt-1">
          <p class="mb-0">
            <v-icon size="8" color="#1FD601">mdi-circle</v-icon
            ><span class="ml-2 " style="font-weight: 400;font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 15px; 
color:black;
letter-spacing: -0.28px;"
              >Market live</span
            >
          </p>
        </div>
      </div>

      <v-row class="pa-0">
        <v-col cols="12" lg="9" class="d-lg-block ">
          <div class="mr-6 ml-2">
            <!-- <h1>gdfuhf</h1> -->
            <section id="introduction" class="mt-7">
              <v-card
                outlined
                elevation="0"
                class=""
                rounded-lg
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
                        :src="require('../assets/cir.svg')"
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
                        Reliance Industries Ltd
                      </p>
                      <v-chip
                        label
                        x-small
                        style="
                          background-color: white;
                          color: #666666;
                          font-size: 8px;
                          text-transform: uppercase;
                          line-height: 12px; /* 133.333% */
                          letter-spacing: 0.9px;
                        "
                        class="ml-5 pt-0 mt-0"
                        >Refineries</v-chip
                      >
                      <v-chip
                        label
                        x-small
                        style="
                          background-color: white;
                          color: #666666;
                          font-size: 8px;
                          text-transform: uppercase;
                          line-height: 12px; /* 133.333% */
                          letter-spacing: 0.9px;
                        "
                        class="ml-2"
                        >Large Cap</v-chip
                      >
                      <v-chip
                        label
                        x-small
                        style="
                          background-color: white;
                          color: #666666;
                          font-size: 8px;
                          text-transform: uppercase;
                          line-height: 8px; /* 133.333% */
                          letter-spacing: 0.4px;
                        "
                        class="ml-2"
                        >Vol: 1881223</v-chip
                      >
                      <p
                        class="mb-0 pt-1 ml-5"
                        style="font-weight: 455; color: #666666; font-size: 9px"
                      >
                        APR 20, 2023 11:57 IST
                        <span style="color: #43a833; font-size: 9px">OPEN</span>
                      </p>
                    </div>
                    <div class="ml-auto mr-2">
                      <p
                        class="mb-0 text-right"
                        style="
                          font-weight: 650;
                          font-size: 15px;
                          color: #000000;
                        "
                      >
                        ₹ 18,392.60
                      </p>
                      <p
                        class="mb-0"
                        style="
                          font-weight: 600;
                          font-size: 11px;
                          color: #ff1717;
                        "
                      >
                        -62.60 (0.34%)
                      </p>
                    </div>
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
                </v-card>
           
                  <!-- <p class="mb-0" style="font-size: 20px; font-weight: 600">pie chart</p>
                       <v-divider></v-divider> -->
<!-- <div>
                  <v-row class="mb-0 " no-gutters>
                    <v-col class="">
                      <p
                        style="
                          font-size: 19px;
                          font-weight: 650;
                          line-height: 16px;
                          letter-spacing: -0.7px;
                          text-align: left;
                          font-variation-settings: 'slnt' 0;
                        "
                        class="ml-8 mt-4 mb-0"
                      >
                        Price Chart
                      </p>
                    </v-col>
                    <v-col class="mr-7">
                        <div class="float-right">
                        <v-tabs
                          class="align-with-title float-right  mb-n2"
                          background-color="transparent"
                          color="black"
                        >
                          <v-tab
                            class="caption ml-5"
                            @click="totallinechart((val = '1M'))"
                          >
                            <span
                              style="
                                font-size: 13px;
                                font-weight: 650;
                                line-height: 16px;
                                letter-spacing: -0.4px;
                                text-align: left;
                              "
                              class="px-0 witttt"
                              >1M</span
                            ></v-tab
                          >
                          <v-tab
                            class="caption"
                            @click="totallinechart((val = '3M'))"
                            >3M</v-tab
                          >
                          <v-tab
                            class="caption"
                            @click="totallinechart((val = '6M'))"
                            >6M</v-tab
                          >
                          <v-tab
                            class="caption"
                            @click="totallinechart((val = '1YR'))"
                            >1YR</v-tab
                          >
                          <v-tab
                            class="caption"
                            @click="totallinechart((val = '3YR'))"
                            >3YR</v-tab
                          >
                          <v-tab
                            class="caption"
                            @click="totallinechart((val = '5YR'))"
                            >5YR</v-tab
                          >
                          <v-tab
                            class="caption"
                            @click="totallinechart((val = 'MAX'))"
                            >MAX</v-tab
                          >
                        </v-tabs>
                      </div>
                    </v-col>
                  </v-row></div> -->
                  <v-divider class=" mt-2"></v-divider>
                  <div class="pa-7">
                  <v-row>
                    <v-col cols="4" class="">
                      <v-row no-gutters>
                        <v-col cols="4" class="pl-1">
                          <div>
                            <p
                              class="mb-0"
                              style="
                                color: #666666;
                                text-transform: uppercase;
                                font-size: 10px;
                                letter-spacing: 1px;
                              "
                            >
                              Market Cap
                            </p>
                            <p class="mb-0 mt-1 subhees">1575681.4</p>
                            <v-divider class="mt-1"></v-divider>
                          </div>
                        </v-col>
                        <v-col cols="6" class="pl-7">
                          <div>
                            <p
                              class="mb-0"
                              style="
                                color: #666666;
                                text-transform: uppercase;
                                font-size: 10px;
                                letter-spacing: 1px;
                              "
                            >
                              Volume
                            </p>
                            <p class="mb-0 mt-1 subhees">1575681.4</p>
                            <v-divider class="mr-5 mt-1"></v-divider>
                          </div>
                        </v-col>
                      </v-row>
                      <v-row no-gutters class="mt-5">
                        <v-col cols="4" class="pl-1">
                          <div>
                            <p
                              class="mb-0"
                              style="
                                color: #666666;
                                text-transform: uppercase;
                                font-size: 10px;
                                letter-spacing: 1px;
                              "
                            >
                              Market Cap
                            </p>
                            <p class="mb-0 mt-1 subhees">1575681.4</p>
                            <v-divider class="mt-1"></v-divider>
                          </div>
                        </v-col>
                        <v-col cols="6" class="pl-7">
                          <div>
                            <p
                              class="mb-0"
                              style="
                                color: #666666;
                                text-transform: uppercase;
                                font-size: 10px;
                                letter-spacing: 1px;
                              "
                            >
                              Volume
                            </p>
                            <p class="mb-0 mt-1 subhees">1575681.4</p>
                            <v-divider class="mr-5 mt-1"></v-divider>
                          </div>
                        </v-col>
                      </v-row>
                      <div>
                        <p
                          class="mb-0 pt-5 pl-1"
                          style="
                            color: #666666;
                            text-transform: uppercase;
                            font-size: 10px;
                            letter-spacing: 1px;
                          "
                        >
                          HIGH - LOW
                        </p>
                        <span class="mb-0 mt-1 pl-1 subhees">₹4567890 </span>
                        <span class="slidecontainerlist mx-2 my-0 py-0">
                          <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                          <input
                            type="range"
                            min="50"
                            max="2000"
                            class="sliderlist"
                          />
                        </span>
                        <span class="mb-0 mt-1 subhees"> ₹765443</span>
                        <v-divider class="mr-1 ml-1 mt-1"></v-divider>
                      </div>
                      <div>
                        <p
                          class="mb-0 pt-5 pl-1"
                          style="
                            color: #666666;
                            text-transform: uppercase;
                            font-size: 10px;
                            letter-spacing: 1px;
                          "
                        >
                          52 WEEKS HIGH - 52 WEEKS LOW
                        </p>
                        <span class="mb-0 mt-1 pl-1 subhees">₹ 456756</span>
                        <span class="slidecontainerlist mx-2 mt-n4">
                          <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                          <input
                            type="range"
                            min="50"
                            max="2000"
                            class="sliderlist"
                          />
                        </span>
                        <span class="mb-0 mt-1 subhees"> ₹ 34567 </span>
                        <v-divider class="mr-1 ml-1 mt-1"></v-divider>
                      </div>

                      <!-- <div>
                          <p
                            class="mb-0 pt-5"
                            style="
                              color: #666666;
                              text-transform: uppercase;
                              font-size: 10px;
                              letter-spacing: 1px;
                            "
                          >
                            Price range
                          </p>
                          <p class="mb-0 body-2 mt-1 subhees">₹ 1026 – ₹ 1080</p>
                          <v-divider class="mr-5 mt-2"></v-divider>
                        </div>
                        <div>
                          <p
                            class="mb-0 pt-5"
                            style="
                              color: #666666;
                              text-transform: uppercase;
                              font-size: 10px;
                              letter-spacing: 1px;
                            "
                          >
                            Minimum order quantity
                          </p>
                          <p class="mb-0 body-2 mt-1 subhees">13 shares / lot</p>
                          <v-divider class="mr-5 mt-2"></v-divider>
                        </div> -->
                    </v-col>

                    <v-col cols="8" class="px-0">
                      <!-- <div> <v-img :src="require('../assets/graph.svg')"  class=""></v-img></div> -->
                      <div class="TVChartContainer" ref="chartContainer" ></div>    
                      <!-- kjhjskdhkjh -->
                    </v-col>
                  </v-row>

                  <v-divider class="mt-7"></v-divider>
                  
                  <v-row>
                    <v-col cols="8">
                      <p class="mb-0 mt-4 tittle">Reliance Stock Overview</p>
                      <p
                        class="pt-2 mb-0"
                        style="
                          font-size: 11px;
                          font-weight: 469;
                          color: #666666;
                        "
                      >
                        Reliance Industries is an Indian multinational company
                        incorporated in 1973 by Dhirubhai Ambani and is
                        headquartered in Mumbai, India. Reliance Industries Ltd
                        has diversified into several segments like energy,
                        petrochemical, natural gas, retail, telecommunication,
                        media and textile.
                      </p>
                      <a :href="linkUrl" style="text-decoration: none">
                        <p
                          class="pt-2 mb-0"
                          style="
                            font-size: 12px;
                            font-weight: 589;
                            color: #0037b7;
                          "
                        >
                          About the company
                          <v-icon size="20" color="#0037b7">
                            mdi-arrow-right-thin
                          </v-icon>
                        </p>
                      </a>
                      <p
                        class="pt-4 mb-0"
                        style="
                          color: #000000;
                          font-weight: 650;
                          font-size: 14px;
                        "
                      >
                        Rewards
                      </p>

                      <p class="mt-2 caption mb-0" style="color: #666666">
                        Earnings are forecast to grow 12.65% per year
                      </p>
                      <p class="mb-0 caption" style="color: #666666">
                        Earnings are forecast to grow 12.65% per year
                      </p>

                      <p
                        class="pt-4 mb-0"
                        style="
                          color: #000000;
                          font-weight: 650;
                          font-size: 14px;
                        "
                      >
                        Risk Analysis
                      </p>

                      <p class="mt-2 caption mb-0" style="color: #666666">
                        No risks detected for RELIANCE from our risk checks.
                      </p>

                      <v-btn
                        class="mr-2 mt-5 text-none"
                        small
                        outlined
                        rounded
                        style="
                          background-color: #ffffff;
                          color: #666666;
                          font-weight: 500;
                        "
                      >
                        See All Risk Checks
                      </v-btn>
                    </v-col>
                    <v-col cols="4" class="pr-0">
                      <div>
                        <div class="d-flex">
                          <p class="caption font-weight-bold mt-5 ml-12">
                            Fund returns
                          </p>
                          <v-icon color="green" size="8" class="mt-1 ml-9"
                            >mdi-circle</v-icon
                          >
                          <p
                            class="ml-1 caption font-weight-medium mt-5"
                            style="color: #666666"
                          >
                            Benchmark
                          </p>
                        </div>
                        <v-row style="display: inline-flex" class="ml-12">
                          <div
                            v-for="data in datas1"
                            :key="data.index"
                            class="mr-3"
                          >
                            <v-card
                              :color="
                                data.per > 0
                                  ? '#FBFFFA'
                                  : data.per < 0
                                  ? '#FFFCFB'
                                  : ''
                              "
                              style="outline: 1px solid #cccccc"
                              class="elevation-0 pa-2 mb-4"
                            >
                              <p
                                :class="getTextColorClass(data.per)"
                                color="red"
                                class="cardins mb-0"
                              >
                                {{ data.per }}%
                              </p>
                              <p class="mb-0 cardins1" style="color: #666666">
                                {{ data.duration }}
                              </p>
                              <p class="mb-0 cardins1" style="color: #666666">
                                {{ data.duration1 }}
                                <v-chip
                                color="#43A833"
                                x-small
                                label
                                style="font-size: 10px"
                                class="white--text  pa-1 font-weight-medium"
                                >{{ data.per2 }}%</v-chip
                              >
                              </p>
                            
                            </v-card>
                          </div>
                        </v-row>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </section>
            <section id="secc">
              <v-card
                outlined
                elevation="0"
                class="mt-7 pa-7"
                style="border: 1px solid #dddddd"
              >
                <p class="mb-0 tittle">Fundamentals</p>
                <p class="mb-0 caption" style="color: #666666">
                  Fundamental breakdown of RELIANCE information
                </p>
                <v-row>
                  <v-col cols="4">
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        PE RATIO
                      </p>
                      <p class="mb-0 pt-1 subhee">37.39</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        PB RATIO
                      </p>
                      <p class="mb-0 pt-1 subhee">3.29</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        Roce
                      </p>
                      <p class="mb-0 pt-1 subhee">9.86%</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        PRICE TO SALE
                      </p>
                      <p class="mb-0 pt-1 subhee">1.64</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        PE RATIO
                      </p>
                      <p class="mb-0 pt-1 subhee">37.39</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        PB RATIO
                      </p>
                      <p class="mb-0 pt-1 subhee">3.29</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        Roce
                      </p>
                      <p class="mb-0 pt-1 subhee">9.86%</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        PRICE TO SALE
                      </p>
                      <p class="mb-0 pt-1 subhee">1.64</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        PE RATIO
                      </p>
                      <p class="mb-0 pt-1 subhee">37.39</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        PB RATIO
                      </p>
                      <p class="mb-0 pt-1 subhee">3.29</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        Roce
                      </p>
                      <p class="mb-0 pt-1 subhee">9.86%</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                    <div>
                      <p
                        class="mb-0 pt-5"
                        style="
                          color: #666666;
                          text-transform: uppercase;
                          font-size: 10px;
                          letter-spacing: 1px;
                        "
                      >
                        PRICE TO SALE
                      </p>
                      <p class="mb-0 pt-1 subhee">1.64</p>
                      <v-divider class="mr-5 mt-1"></v-divider>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </section>

            <section id="anal">
              <v-card
                outlined
                elevation="0"
                class="mt-7 pa-7"
                style="border: 1px solid #dddddd"
              >
                <p class="mb-0 tittle">Analyst Recommendation</p>

                <div class="d-flex">
                  <div>
                    <p class="mb-0 mt-4 subhead3">Analyst Rating</p>
                    <p class="mb-0 mt-1 subtit3">
                      Based on 33 analysts offering long term price targets for
                      Reliance Industries Ltd.<br />
                      An average target of ₹2856.09
                    </p>
                  </div>
                  <div class="ml-auto">
                    <v-card elevation="0" outlined class="pa-2">
                      <div class="d-flex">
                        <div>
                          <v-img
                            :src="require('../assets/bid.svg')"
                            class=""
                          ></v-img>
                        </div>
                        <div>
                          <p class="mb-0 ml-2 caption" style="color: #666666">
                            People BID
                          </p>
                          <p
                            class="mb-0 ml-2 body-2 font-weight-bold"
                            style="color: #000000"
                          >
                            90.5%
                          </p>
                        </div>
                      </div>
                    </v-card>
                  </div>
                </div>
                <v-divider class="mt-5 mb-5"></v-divider>
                <p class="mb-0 subhead3">Analyst Forecasts</p>
                <p class="mb-0 mt-1 subtit3">
                  Forecasting uses historical data as inputs to make informed
                  predictive estimates determining the direction of future
                  trends. Price, revenue & earnings forecasts represent where
                  the stock level, business prospects and profits are
                  potentially expected to be at the end of the forecast period
                </p>
                <v-row class="">
                  <v-col cols="4">
                    <div>
                      <v-card elevation="0">
                        <p
                          class="body-2 mt-7 mb-0"
                          style="
                            text-align: center;
                            color: #999999;
                            font-weight: 469;
                          "
                        >
                          Price Forecasts
                        </p>
                        <div class="d-flex">
                          <a :href="linkUrl" class="mx-auto">
                            <v-icon style="align-items: center; color: #999999"
                              >mdi-chevron-double-down</v-icon
                            >
                          </a>
                        </div>
                        <!-- <v-img
                          :src="require('../assets/pic.svg')"
                          class="mt-5 mb-2"
                          width=""
                          height=""
                        ></v-img> -->
                        <div ref="volumchart"></div>
                        <v-card
                          color="#F1F3F8"
                          class="elevation-0 mt-5"
                          style="
                            border-radius: 40px;
                            height: 36px;
                            width: 119px;
                          "
                        >
                          <div class="d-flex">
                            <span
                              class="mb-0 pl-4 pt-3"
                              style="
                                color: #666666;
                                font-weight: 469;
                                font-size: 12px;
                                line-height: 14px;
                              "
                              color="#666666"
                              >May 2023</span
                            >
                            <div class="float-right ml-auto mt-n1 mr-1">
                              <v-btn
                                elevation="0"
                                :ripple="false"
                                id="no-background-hover"
                                class="text-end"
                                icon
                                @click="decrementNumber"
                              >
                                <v-icon class="" size="16" color="#000000">
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

                        <div class="d-flex">
                          <div class="ml-3">
                            <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2"
                              width="57px"
                              height="3px"
                            ></v-img>
                            <p class="caption mb-0" style="color: #666666">
                              High
                            </p>
                            <p
                              class="caption mb-0 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="mx-auto">
                            <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2"
                              width="57px"
                              height="3px"
                            ></v-img>
                            <p class="caption mb-0" style="color: #666666">
                              Medium
                            </p>
                            <p
                              class="caption mb-0 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="my-auto">
                            <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2"
                              width="57px"
                              height="3px"
                            ></v-img>
                            <p class="caption mb-0" style="color: #666666">
                              Low
                            </p>
                            <p
                              class="caption mb-0 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0" style="color: red">
                              +37.64%
                            </p>
                          </div>
                        </div>

                        <v-card
                          v-if="isCardVisible"
                          class="mt-3 pa-3"
                          elevation="0"
                          color="#F1FAF7"
                        >
                          <div class="d-flex">
                            <p
                              class=" caption  mb-0 font-weight-bold body-1"
                              style="font-size: 18px"
                            >
                              Higher Return Expection
                            </p>
                            <v-icon color="green" class=" ml-auto " size="15"
                              >mdi-arrow-up-circle</v-icon
                            >
                          </div>

                          <p
                            class=" mb-0  caption"
                            style="color: #666666;"
                          >
                            Expected return of 14.5% from current price level is
                            less than last 3 tr CAGR of 22.5%
                          </p>
                        </v-card>

                        <!-- <v-btn
                            class="grey--text elevation-0 body-2 mt-3 text-none"
                            color="white"
                          >
                            view more<v-icon>mdi-chevron-down</v-icon></v-btn
                          > -->

                        <v-btn
                          @click="toggleCardVisibility"
                          class="grey--text elevation-0 body-2 mt-3 text-none"
                          color="white"
                          >{{ buttonText }}
                          <v-icon>mdi-chevron-down</v-icon></v-btn
                        >
                      </v-card>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div>
                      <v-card elevation="0">
                        <p
                          class="body-2 mt-7 mb-0"
                          style="
                            text-align: center;
                            color: #999999;
                            font-weight: 469;
                          "
                        >
                          Price Forecasts
                        </p>
                        <div class="d-flex">
                          <a :href="linkUrl" class="mx-auto">
                            <v-icon style="align-items: center; color: #999999"
                              >mdi-chevron-double-down</v-icon
                            >
                          </a>
                        </div>
                        <template>
                          <Bar :data="chartData" height="190px" />
                        </template>
                        <v-card
                          color="#F1F3F8"
                          class="elevation-0 mt-5"
                          style="
                            border-radius: 40px;
                            height: 36px;
                            width: 119px;
                          "
                        >
                          <div class="d-flex">
                            <span
                              class="mb-0 pl-4 pt-3"
                              style="
                                color: #666666;
                                font-weight: 469;
                                font-size: 12px;
                                line-height: 14px;
                              "
                              color="#666666"
                              >May 2023</span
                            >
                            <div class="float-right ml-auto mt-n1 mr-1">
                              <v-btn
                                elevation="0"
                                :ripple="false"
                                id="no-background-hover"
                                class="text-end"
                                icon
                                @click="decrementNumber"
                              >
                                <v-icon class="" size="16" color="#000000">
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

                        <div class="d-flex">
                          <div class="ml-3">
                            <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2"
                              width="57px"
                              height="3px"
                            ></v-img>
                            <p class="caption mb-0" style="color: #666666">
                              High
                            </p>
                            <p
                              class="caption mb-0 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="mx-auto">
                            <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2"
                              width="57px"
                              height="3px"
                            ></v-img>
                            <p class="caption mb-0" style="color: #666666">
                              Medium
                            </p>
                            <p
                              class="caption mb-0 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="my-auto">
                            <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2"
                              width="57px"
                              height="3px"
                            ></v-img>
                            <p class="caption mb-0" style="color: #666666">
                              Low
                            </p>
                            <p
                              class="caption mb-0 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0" style="color: red">
                              +37.64%
                            </p>
                          </div>
                        </div>

                        <!-- <v-card
                               v-if="isCardVisible"
                               class="mt-3"
                               elevation="0"
                               color="#F1FAF7"
                             >
                               <div style="display: flex">
                                 <p
                                   class="pl-4 caption pt-3 mb-0 font-weight-bold body-1"
                                   style="font-size: 18px"
                                 >
                                   Higher Return Expection
                                 </p>
                                 <v-icon color="green" class="pl-7 pt-3" size="15"
                                   >mdi-arrow-up-circle</v-icon
                                 >
                               </div>
     
                               <p
                                 class="pl-4 mb-0 pr-3 caption"
                                 style="color: #666666"
                               >
                                 Expected return of 14.5% from current price level is
                                 less than last 3 tr CAGR of 22.5%
                               </p>
                             </v-card> -->

                        <v-btn
                          class="grey--text elevation-0 body-2 mt-3 text-none"
                          color="white"
                        >
                          view more<v-icon>mdi-chevron-down</v-icon></v-btn
                        >

                        <!-- <v-btn
                               @click="toggleCardVisibility"
                               class="grey--text elevation-0 body-2 mt-3 text-none"
                               color="white"
                               >{{ buttonText
                               }}<v-icon>mdi-chevron-down</v-icon></v-btn
                             > -->
                      </v-card>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <div>
                      <v-card elevation="0" style="opacity: 0.1">
                        <p
                          class="body-1 mt-7 mb-0 font-weight-bold"
                          style="text-align: center; color: #999999"
                        >
                          Price Forecasts
                        </p>
                        <div class="d-flex">
                          <a :href="linkUrl" class="mx-auto">
                            <v-icon style="align-items: center; color: #999999"
                              >mdi-chevron-double-down</v-icon
                            >
                          </a>
                        </div>
                        
                        <template>
                          <Bar :data="chartData" height="190px" />
                        </template>
                        <v-card
                          color="#F1F3F8"
                          class="grey--text elevation-0 rounded-pill mt-5 ml-2 mr-2 pa-1 body-2"
                          style="height: 40px; width: 120px"
                        >
                          <div class="d-flex">
                            <p
                              class="mb-0 ml-3 pt-1 threbar"
                              style="color: #666666"
                            >
                              {{ number }}
                            </p>
                            <div class="pl-">
                              <v-btn
                                elevation="0"
                                :ripple="false"
                                id="no-background-hover"
                                class="up"
                                icon
                                @click="dec"
                              >
                                <!-- decrementNumber -->
                                <v-icon class="" color="black">
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
                        </v-card>

                        <div class="d-flex">
                          <div class="ml-3">
                            <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2"
                              width="57px"
                              height="3px"
                            ></v-img>
                            <p class="caption mb-0" style="color: #666666">
                              High
                            </p>
                            <p
                              class="caption mb-0 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="mx-auto">
                            <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2"
                              width="57px"
                              height="3px"
                            ></v-img>
                            <p class="caption mb-0" style="color: #666666">
                              Medium
                            </p>
                            <p
                              class="caption mb-0 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0" style="color: green">
                              +37.64%
                            </p>
                          </div>

                          <div class="my-auto">
                            <v-img
                              :src="require('../assets/ret.svg')"
                              class="mt-5 mb-2"
                              width="57px"
                              height="3px"
                            ></v-img>
                            <p class="caption mb-0" style="color: #666666">
                              Low
                            </p>
                            <p
                              class="caption mb-0 font-weight-bold"
                              style="color: #000000"
                            >
                              ₹3,379.05
                            </p>
                            <p class="caption mb-0" style="color: red">
                              +37.64%
                            </p>
                          </div>
                        </div>

                        <v-btn
                          class="grey--text elevation-0 body-2 mt-3 text-none"
                          color="white"
                          >view more<v-icon>mdi-chevron-down</v-icon></v-btn
                        >
                        <!-- <v-btn
                               @click="toggleCardVisibility"
                               class="grey--text elevation-0 body-2 mt-3 text-none"
                               color="white"
                               >{{ buttonText
                               }}<v-icon>mdi-chevron-down</v-icon></v-btn
                             > -->
                      </v-card>
                    </div>
                    <div style="text-align: center" class="logg">
                      <v-btn
                        class="ma-0 pa-0"
                        width="40 "
                        height="40"
                        outlined
                        fab
                        color="white"
                        elevation="1"
                      >
                        <v-icon color="#000000" class="ma-0 pa-0"
                          >mdi-lock-outline</v-icon
                        >
                      </v-btn>
                      <p
                        style="
                          text-align: center;
                          font-size: 13px;
                          font-weight: 500;
                        "
                        class="mt-3 mb-0 mr-4"
                      >
                        <span
                          @click="openDialog"
                          style="
                            font-size: 13px;
                            font-weight: 500;
                            text-decoration: none;
                            color: #0037b7;
                            cursor: pointer;
                          "
                          >Login in,</span
                        >
                        <v-dialog v-model="dialogVisible" max-width="500px">
                          <v-card>
                            <v-card-title>
                              <span class="headline">Login</span>
                            </v-card-title>
                            <v-card-text>
                              <v-text-field
                                v-model="username"
                                label="Username"
                              ></v-text-field>
                              <v-text-field
                                v-model="password"
                                label="Password"
                                type="password"
                              ></v-text-field>
                              <v-text-field
                                v-model="lastLogin"
                                label="Last Login"
                                disabled
                              ></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                              <v-btn color="primary" @click="login"
                                >Login</v-btn
                              >
                              <v-btn color="primary" text @click="closeDialog"
                                >Close</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                        to unlock score rank & other metrics, get detailed
                        analysis with Zebu Insights.
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </section>

            <section id="fina">
              <v-card
                outlined
                elevation="0"
                class="mt-7 "
                style="border: 1px solid #dddddd"
              >

              <div class="pa-7">
                <p class="mb-0 tittle">Financial Health</p>
                <div style="display: flex">
                  <p class="mb-0 mt-4 subhead3">
                    Financial Health criteria checks 6/6
                  </p>
                  <v-icon color="green" class="pl-4 pt-3" size="20"
                    >mdi-check-circle</v-icon
                  >
                  <v-icon color="green" class="pl-1 pt-3" size="20"
                    >mdi-check-circle</v-icon
                  >
                  <v-icon color="green" class="pl-1 pt-3" size="20"
                    >mdi-check-circle</v-icon
                  >
                  <v-icon color="green" class="pl-1 pt-3" size="20"
                    >mdi-check-circle</v-icon
                  >
                  <v-icon color="green" class="pl-1 pt-3" size="20"
                    >mdi-check-circle</v-icon
                  >
                  <v-icon color="red" class="pl-1 pt-3" size="20"
                    >mdi-close-circle</v-icon
                  >
                  <v-btn
                    class="ml-auto"
                    width="30px"
                    height="30px"
                    fab
                    dark
                    small
                    elevation="0"
                    color="#EBEBED"
                    style="background-color: white"
                    outlined
                  >
                    <v-icon size="19" color="#3E4763">
                      mdi-chevron-down
                    </v-icon>
                  </v-btn>
                </div>
                <p class="mb-0 mt-1 subtit3">
                  Forecasting uses historical data as inputs to make informed
                  predictive estimates determining the direction of future
                  trends. Price, revenue & earnings forecasts represent where
                  the stock level, business prospects and profits are
                  potentially expected to be ...
                </p>
                <v-divider class="mt-5"></v-divider>

                <v-btn
                  small
                  class="mb-2 mt-7 rounded-pill text-none font-weight-bold caption"
                  style="border: 1px solid #666666"
                  outlined
                  color="#666666"
                >
                  Income
                </v-btn>
                <v-btn
                  small
                  class="ma-2 mt-7 text-none rounded-pill font-weight-bold caption"
                  style="border: 1px solid #666666"
                  outlined
                  color="#666666"
                >
                  Balance Sheet
                </v-btn>
                <v-btn
                  small
                  class="ma-2 mt-7 text-none rounded-pill font-weight-bold caption"
                  style="border: 2px solid #000000"
                  outlined
                  color="#000000"
                >
                  Cash Flow
                </v-btn>

                <p class="pt-5 mb-0 subhead3">
                  Reliance Global Group Balance Sheet
                </p>
                <p class="pt-2 pr-7 mb-0 subtit3">
                  Reliance Global Group's total assets for Q1 2023 were $33.88M,
                  a decrease of -11.82% from the previous quarter. RELI total
                  liabilities were $21.65M for the fiscal quarter, a -26.66% a
                  decrease from the previous quarter. See a summary of the
                  company’s assets, liabilities, and equity.
                </p>
                <div class="d-flex">
                  <p class="body-2 mt-4 font-weight-bold">View Graph</p>
                  <label class="switch mt-4 ml-2">
                    <input type="checkbox" />
                    <span class="sliderr round"></span>
                  </label>
                </div>
                <canvas id="linebar"></canvas>
                <!-- <v-img :src="require('../assets/grt.svg')"></v-img> -->
                <!-- <v-divider class="mt-5"></v-divider> -->
                <div class="d-flex">
                  <div>
                    <p class="mb-0 subhead3 mt-6">Cashflow Statement</p>
                    <p class="mb-0 subtit3">All Figures in Cr.</p>
                  </div>
                  <div class="ml-auto">
                    <v-card
                      elevation="0"
                      class="pa-1 mt-7 rounded-pill"
                      style="background-color: #f1f3f8"
                    >
                      <span class="ml-1"
                        ><v-icon color="#666666" size="18"
                          >mdi-filter-variant</v-icon
                        ><span
                          class="mb-0 ml-2"
                          style="
                            font-size: 12px;
                            color: #2e3032;
                            font-weight: 499;
                          "
                          >Filter</span
                        >
                        <v-icon class="ml-4 mr-1" color="#777777"
                          >mdi-chevron-down</v-icon
                        ></span
                      >
                    </v-card>
                  </div>
                  <div>
                    <v-card
                      elevation="0"
                      class="ml-3 pa-1 mt-7 rounded-pill"
                      style="background-color: #f1f3f8"
                    >
                      <span class="ml-2"
                        ><v-icon color="#666666" size="18"
                          >mdi-arrow-collapse-down</v-icon
                        ><span
                          class="mb-0 ml-2"
                          style="
                            font-size: 12px;
                            color: #2e3032;
                            font-weight: 499;
                          "
                          >Annual Report</span
                        >
                        <v-icon class="ml-4 mr-1" color="#777777"
                          >mdi-chevron-down</v-icon
                        ></span
                      >
                    </v-card>
                  </div>
                </div>
              </div>
                <v-data-table
                  :headers="headers"
                  :items="dataTableItems"
                  :search="search"
                  class="custom-table  pa-0"
                  hide-default-footer
                >
                  <template #item="{ item }">
                    <tr>
                      <td class="">
                        <p class="body-2 mb-0 font-weight-bold">
                          <!-- <v-icon size="18" class="">mdi-plus</v-icon -->
                          <!-- > -->
                          {{ item.name }}
                        </p>
                      </td>

                      <td class="text-end" v-if="item.List > 0">
                        <!-- <p class="mb-0 body-2" >{{ item.List }}</p> -->
                        <span
                          class="mb-0 body-2 text-end"
                          style="color: #000000 !important; font-size: 13px"
                          >₹{{ item.List }}</span
                        >
                      </td>

                      <td class="text-end" v-else>
                        <!-- <p class="mb-0 body-2" >{{ item.List }}</p> -->
                        <span
                          class="mb-0 body-2"
                          style="color: #ff0000 !important; font-size: 13px"
                          >₹{{ item.List }}</span
                        >
                      </td>

                      <td class="mb-0 body-2 text-end">{{ item.loca }}</td>
                      <td class="mb-0 body-2 text-right">{{ item.Issue }}</td>
                      <td class="mb-0 body-2 text-right">{{ item.Listing }}</td>
                      <td class="mb-0 body-2 text-right">{{ item.CMP }}</td>
                      <!-- <td class="mb-0 body-2 text-right">{{ item.Current }}</td> -->
                      <!-- <td class="mb-0 pa-0 body-2 text-right">{{ item.Curr }}</td> -->
                    </tr>
                  </template>
                </v-data-table>
              </v-card>
            </section>

            <section id="peer">
              <v-card
                outlined
                elevation="0"
                class="mt-7 "
                style="border: 1px solid #dddddd"
              >
              <div class="pa-7">
                <p class="mb-0 tittle">Peers Comparison</p>

                <v-btn
                  small
                  class="mb-2 mt-4 rounded-pill text-none"
                  style="
                    border: 1px solid #666666;
                    font-size: 13px;
                    font-weight: 560;
                  "
                  outlined
                  color="#666666"
                >
                  Valuation
                </v-btn>
                <v-btn
                  small
                  class="ma-2 mt-4 text-none rounded-pill"
                  style="
                    border: 1px solid #666666;
                    font-size: 13px;
                    font-weight: 560;
                  "
                  outlined
                  color="#666666"
                >
                  Technical
                </v-btn>
                <v-btn
                  small
                  class="mt-2 text-none rounded-pill"
                  style="
                    border: 2px solid #000000;
                    font-size: 13px;
                    font-weight: 560;
                  "
                  outlined
                  color="#000000"
                >
                  Forecasts
                </v-btn>
              </div>
                <v-data-table
                  :headers="headerss"
                  :items="firstab"
                  :search="search"
                  class="custom-table "
                  hide-default-footer
                >
                  <template #item="{ item }">
                    <tr>
                      <td>
                        <p class="mb-0 font-weight-bold body-2">
                          <v-icon size="18" class="pr-2">mdi-minus</v-icon
                          >{{ item.name1 }}
                        </p>
                      </td>
                      <td>
                        <p class="mb-0 font-weight-medium body-2 text-right">
                          {{ item.one1 }}
                        </p>
                      </td>
                      <td class="mb-0 font-weight-medium body-2 text-right">
                        {{ item.two1 }}
                      </td>
                      <td class="mb-0 font-weight-medium body-2 text-right">
                        {{ item.three1 }}
                      </td>
                      <td class="mb-0 font-weight-medium body-2 text-right">
                        {{ item.four1 }}
                      </td>
                    </tr>
                  </template>
                </v-data-table>
                <v-divider></v-divider>
                <div>
                  <!-- <v-text-field
                    style="width: 350px"
                    prepend-inner-icon="mdi-magnify"
                    placeholder="Search for stocks to add"
                    filled
                    rounded
                    dense
                    class="mb-0 mt-2 pl-7 pb-0"
                  ></v-text-field> -->
             
                  <v-text-field  style="width: 350px"  class="tophundraedmutual pt-7 pl-7 searchfundlabel"  background-color="#F1F3F8" label="Search funds" solo
            rounded    prepend-inner-icon="mdi-magnify" flat dense>
           
          </v-text-field>
                </div>
              </v-card>
            </section>

            <v-card
              outlined
              elevation="0"
              class="mt-7 pa-7"
              style="border: 1px solid #dddddd"
            >
              <div class="d-flex">
                <div>
                  <p class="mb-0 tittle">Price Comparison</p>
                  <p class="caption" style="color: #505668">
                    Compare
                    <span
                      style="color: #3e54ac; font-weight: 550"
                      class="font-weight-bold"
                      >RELIANCE</span
                    >
                    with any stock or ETF
                  </p>
                </div>
                <div class="ml-auto">
                  <v-card
                    class="rounded-pill pa-2"
                    x-small
                    style="background-color: #f1f3f8"
                    elevation="0"
                  >
                    <p class="mb-0">
                      <v-icon color="#666666" size="18"
                        >mdi-calendar-month-outline</v-icon
                      >
                      <span
                        class="pl-2"
                        style="font-size: 13px; font-weight: 569; color: black"
                        >Select dates </span
                      ><v-icon color="#666666">mdi-chevron-down</v-icon>
                    </p>
                  </v-card>
                </div>
              </div>
              <v-chip
                outlined
                class="caption"
                style="font-weight: 600; border: 1px solid #666666"
                color="#505668"
                ><v-icon size="14" color="#148564">mdi-square-rounded</v-icon
                ><span class="ml-1">RELIANCE</span></v-chip
              >
              <v-btn
                v-if="!chip1 && !chip2 && !chip3 && !chip4"
                close
                color="primary"
                dark
                @click="
                  (chip1 = true), (chip2 = true), (chip3 = true), (chip4 = true)
                "
              >
                Reset Chips
              </v-btn>

              <v-chip
                outlined
                style="font-weight: 600; border: 1px solid #666666"
                color="#505668"
                v-if="chip1"
                class="ma-2 caption"
                close
                @click:close="chip1 = false"
              >
                <v-icon size="14" color="#7CD36E">mdi-square-rounded</v-icon>
                <span class="ml-1">INDIAN OIL..</span>
              </v-chip>

              <v-chip
                outlined
                style="font-weight: 600; border: 1px solid #666666"
                color="#505668"
                v-if="chip1"
                class="ma-2 caption"
                close
                @click:close="chip1 = false"
              >
                <v-icon size="14" color="#F9CD6C">mdi-square-rounded</v-icon>
                <span class="ml-1"> HDFC BANK</span>
              </v-chip>

              <v-chip
                outlined
                style="font-weight: 600; border: 1px solid #000000"
                color="Black"
                ><v-icon size="18" class="caption" color="Black"
                  >mdi-plus-thick</v-icon
                >Add stock</v-chip
              >
              <!-- <v-img
                :src="require('../assets/newlss.svg')"
                class="ml-7 mr-7 mt-7 mb-2"
                style="width: 750px"
              ></v-img> -->
              <v-container ref="chartContainer3"></v-container>
              <!-- <div ref="chartContainer3"></div> -->
              <p class="pt-4 mb-0 subtit3" style="color: #506d84">
                Reliance Global Group's total assets for Q1 2023 were $33.88M, a
                decrease of -11.82% from the previous quarter. RELI total
                liabilities were $21.65M for the fiscal quarter, a -26.66% a
                decrease from the previous quarter. See a summary of the
                company’s assets, liabilities, and equity.
              </p>
            </v-card>

            <section id="hold">
              <v-card
                outlined
                elevation="0"
                class="mt-7 "
                style="border: 1px solid #dddddd"
              >
              <div class="pa-7">
                <div class="d-flex">
                  <div>
                    <p class="mb-0 tittle">Holdings</p>
                    <v-chip-group outlined>
                      <v-chip
                        outlined
                        style="
                          border: 2px solid black;
                          color: black;
                          font-weight: 569;
                        "
                        >Mar 2023</v-chip
                      >
                      <v-chip
                        outlined
                        style="
                          border: 1.5px solid #666666;
                          color: #666666;
                          font-weight: 569;
                        "
                        >Apr 2023</v-chip
                      >
                      <v-chip
                        outlined
                        style="
                          border: 1.5px solid #666666;
                          color: #666666;
                          font-weight: 569;
                        "
                        >May 2023</v-chip
                      >
                      <v-chip
                        outlined
                        style="
                          border: 1.5px solid #666666;
                          color: #666666;
                          font-weight: 569;
                        "
                        >Jun 2023</v-chip
                      >
                    </v-chip-group>
                  </div>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <p class="mb-0 mr-2 font-weight-bold black--text body-2">
                        Quarterly
                      </p>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="sliderr round"></span>
                      </label>
                      <p
                        class="mb-0 ml-2 font-weight-medium body-2"
                        style="color: #b3b3b3"
                      >
                        Yearly
                      </p>
                    </div>
                  </div>
                </div>
                <v-row>
                  <v-col cols="8">
                    <p class="pt-5 mb-0 subhead3">Shareholding Breakdown</p>

                    <div class="mt-2">
                      <!-- <v-img
                             :src="require('../assets/barrr.svg')"
                             class="ml-7 mr-7 mt-4 mb-2"
                           ></v-img> -->
                      <v-card
                        outlined
                        height="30"
                        max-width="600"
                        class="d-flex"
                      >
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-card
                              class="elevation-0 py-3 rounded-0"
                              :width="
                                widthdat.slice(0, 1).length <= 2
                                  ? widthdat.slice(0, 1).toString() * 10
                                  : widthdat.slice(0, 1)
                              "
                              color="#148564"
                              v-bind="attrs"
                              v-on="on"
                            ></v-card>
                          </template>
                          <span
                            ><div class="d-flex">
                              <v-card
                                outlined
                                class="pa-2 mx-2"
                                max-height="10"
                                style="
                                  border-color: gray;
                                  background-color: #148564;
                                "
                              ></v-card
                              >{{ widthdat.slice(0, 1).toString() }}
                            </div></span
                          >
                          <!-- <span>{{(widthdat.slice(0,1)).toString()}}</span> -->
                        </v-tooltip>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-card
                              class="elevation-0 py-3 rounded-0"
                              :width="
                                widthdat.slice(1, 2).length <= 2
                                  ? widthdat.slice(1, 2).toString() * 10
                                  : widthdat.slice(1, 2)
                              "
                              color="#7CD36E"
                              v-bind="attrs"
                              v-on="on"
                            ></v-card>
                          </template>
                          <span
                            ><div class="d-flex">
                              <v-card
                                outlined
                                class="pa-2 mx-2"
                                max-height="10"
                                style="
                                  border-color: gray;
                                  background-color: #7cd36e;
                                "
                              ></v-card
                              >{{ widthdat.slice(1, 2).toString() }}
                            </div></span
                          >
                          <!-- <span>{{(widthdat.slice(1,2)).toString()}}</span> -->
                        </v-tooltip>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-card
                              class="elevation-0 py-3 rounded-0"
                              :width="
                                widthdat.slice(2, 3).length <= 2
                                  ? widthdat.slice(2, 3).toString() * 10
                                  : widthdat.slice(2, 3)
                              "
                              color="#F9CD6C"
                              v-bind="attrs"
                              v-on="on"
                            ></v-card>
                          </template>
                          <span
                            ><div class="d-flex">
                              <v-card
                                outlined
                                class="pa-2 mx-2"
                                max-height="10"
                                style="
                                  border-color: gray;
                                  background-color: #f9cd6c;
                                "
                              ></v-card
                              >{{ widthdat.slice(2, 3).toString() }}
                            </div></span
                          >
                          <!-- <span>{{(widthdat.slice(2,3)).toString()}}</span> -->
                        </v-tooltip>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-card
                              class="elevation-0 py-3 rounded-0"
                              :width="
                                widthdat.slice(3, 4).length <= 2
                                  ? widthdat.slice(3, 4).toString() * 10
                                  : widthdat.slice(3, 4)
                              "
                              color="#FDEBC4"
                              v-bind="attrs"
                              v-on="on"
                            ></v-card>
                          </template>
                          <span
                            ><div class="d-flex">
                              <v-card
                                outlined
                                class="pa-2 mx-2"
                                max-height="10"
                                style="
                                  border-color: gray;
                                  background-color: #fdebc4;
                                "
                              ></v-card
                              >{{ widthdat.slice(3, 4).toString() }}
                            </div></span
                          >
                          <!-- <span>{{(widthdat.slice(3,4)).toString()}}</span> -->
                        </v-tooltip>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-card
                              class="elevation-0 py-3 rounded-0"
                              :width="
                                widthdat.slice(4).length <= 2
                                  ? widthdat.slice(4).toString() * 10
                                  : widthdat.slice(4)
                              "
                              color="#DEDEDE"
                              v-bind="attrs"
                              v-on="on"
                            ></v-card>
                          </template>
                          <span
                            ><div class="d-flex">
                              <v-card
                                outlined
                                class="pa-2 mx-2"
                                max-height="10"
                                style="
                                  border-color: gray;
                                  background-color: #dedede;
                                "
                              ></v-card
                              >{{ widthdat.slice(4).toString() }}
                            </div></span
                          >
                        </v-tooltip>
                      </v-card>
                    </div>

                    <v-data-table
                      :headers="small"
                      :items="datasmall"
                      class=""
                      hide-default-footer
                    >
                      <template #item="{ item }">
                        <tr>
                          <td>
                            <p class="mb-0 body-2 font-weight-bold">
                              <v-icon size="22" color="items.colo" class="">{{
                                item.icoo
                              }}</v-icon>
                              {{ item.inv }}
                            </p>
                          </td>
                          <td>
                            <div
                              class="mb-0 text-right"
                              style="
                                font-size: 12px;
                                font-weight: 559;
                                color: black;
                              "
                            >
                              {{ item.hold }}
                            </div>
                          </td>
                          <td
                            class="mb-0 text-right"
                            style="
                              font-size: 12px;
                              font-weight: 599;
                              color: black;
                            "
                          >
                            {{ item.sha }}
                          </td>
                        </tr>
                      </template>
                    </v-data-table>
                  </v-col>
                  <v-col cols="4" class="">
                    <v-card
                      class="pa-3"
                      elevation="0"
                      rounded-lg
                      style="border: 1px solid #cccccc"
                    >
                      <p
                        class="mb-0 font-weight-bold"
                        style="font-size: 16px; color: #3a3b41"
                      >
                        Shareholding History
                      </p>
                      <p class="mb-0 caption" style="color: #3a3b41">
                        Select a segment from the breakdowns to see its pattern
                        here
                      </p>
                      <v-btn
                        rounded
                        elevation="0"
                        class="caption mt-2 mb-0"
                        style="
                          text-transform: capitalize;
                          background-color: #f1f3f8;
                          border: 1px solid #ffffff;
                        "
                        >Total Promoter Holding
                        <v-icon class="pl-6">mdi-chevron-down</v-icon></v-btn
                      >

                      <div>
                        <!-- <v-img
                               :src="require('../assets/blue.svg')"
                               class="ml-7 mr-7 mt-4 mb-2"
                               height
                             ></v-img> -->
                        <!-- <canvas id="sharholders"></canvas> -->
                        <canvas id="sharholders" height='300'></canvas>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
                <v-divider class="mt-7"></v-divider>

                <div class="d-flex">
                  <div>
                    <p class="pt-5 mb-0 subhead3">
                      Mutual Funds Holding Trend
                      <!-- <v-icon color="#90949D" size="18"
                        >mdi-information-variant-circle</v-icon
                      > -->
                    </p>
                    <p class="pt-2 mb-0 subtit3" style="color: #3a3b41">
                      In last 3 months, mutual fund holding of the company has
                      almost stayed constant
                    </p>
                  </div>
                  <div class="ml-auto">
                    <v-card
                      elevation="0"
                      class="ml-3 pa-1 mt-7 rounded-pill"
                      style="background-color: #f1f3f8"
                    >
                      <span class="ml-2"
                        ><v-icon color="#666666" size="18"
                          >mdi-arrow-collapse-down</v-icon
                        ><span
                          class="mb-0 ml-2"
                          style="
                            font-size: 12px;
                            color: #000000;
                            font-weight: 499;
                          "
                          >Annual Report</span
                        >
                        <v-icon class="ml-4 mr-1" color="#777777"
                          >mdi-chevron-down</v-icon
                        ></span
                      >
                    </v-card>
                  </div>
                </div>

               </div>
                <v-data-table
                  :headers="last"
                  :items="datalast"
                  class=""
                  hide-default-footer
                >
                  <template #item="{ item }">
                    <tr>
                      <td>
                        <div class="mb-0 caption d-flex">
                          <div>
                            <!-- <v-img
                                     :src="require('../assets/icic.svg')"
                                     class="mb-0"
                                     width="15px"
                                     height="15px"
                                   ></v-img> -->
                          </div>
                          <div
                            class="mb-0"
                            style="
                              font-size: 13px;
                              font-weight: 599;
                              color: black;
                            "
                          >
                            {{ item.fun }}
                          </div>
                        </div>
                      </td>
                      <td
                        class="mb-0 text-right"
                        style="font-size: 12px; font-weight: 599; color: black"
                      >
                        {{ item.mar }}
                      </td>
                      <td
                        class="mb-0 text-right"
                        style="font-size: 12px; font-weight: 599; color: black"
                      >
                        {{ item.wei }}
                      </td>
                      <td
                        class="mb-0 text-right"
                        style="font-size: 12px; font-weight: 599; color: black"
                      >
                        {{ item.cha }}
                      </td>
                      <td
                        class="mb-0 text-right"
                        style="font-size: 12px; font-weight: 599; color: black"
                      >
                        {{ item.port }}
                        <span v-if="item.rann > 0" style="color: green">
                          ({{ item.rann }})</span
                        >
                        <span v-else-if="item.rann == 0" style="color: black"
                          >({{ item.rann }})</span
                        >
                        <span v-else style="color: red">({{ item.rann }})</span>
                      </td>
                    </tr>
                  </template>
                </v-data-table>
              </v-card>
            </section>

            <section id="even">
              <v-card
                outlined
                elevation="0"
                class="mt-7 pa-7"
                style="border: 1px solid #dddddd"
              >
                <p class="mb-0 tittle">Events</p>
                <v-chip
                  to=""
                  outlined
                  style="border: 2px solid black"
                  class="font-weight-bold mt-5 ma-2"
                >
                  Dividends
                </v-chip>
                <v-chip to="/CroP" outlined class="mt-5 ma-2">
                  Corp. action
                </v-chip>
                <v-chip to="/AnNocE" outlined class="mt-5 ma-2">
                  Announcement
                </v-chip>
                <v-chip to="/JuDi" outlined class="mt-5 ma-2">
                  Announcement
                </v-chip>
                <p class="subhead3 pt-3 mb-0 pl-2">Dividends</p>
                <p class="mt-1 subtit3 mb-0 pl-2">
                  The last rights shares that Punjab National Bank had issued
                  was in 2017 in the ratio of 2:25 at a premium of Rs 605.00 per
                  share. The share has been quoting ex-rights from January 31,
                  2018.
                </p>
                <p
                  class="mb-0 pt-5 pl-2"
                  style="
                    text-transform: uppercase;
                    font-size: 12px;
                    color: black;
                    font-weight: 600;
                    letter-spacing: 1px;
                  "
                >
                  Upcoming Dividends
                </p>
                <v-card
                  elevation="0"
                  class="mt-4 ml-2 mr-2 pa-3 rounded-lg"
                  outlined
                  v-for="card in evennt"
                  :key="card.id"
                  style="background-color: #fbfcff; border: 1px solid #f2f2f3"
                >
                  <div class="d-flex justify-space-between">
                    <div>
                      <p class="caption grey--text mb-0">{{ card.d1 }}</p>
                      <p class="mb-0" style="font-weight: 569; font-size: 13px">
                        {{ card.d2 }}
                      </p>
                    </div>
                    <div>
                      <p class="caption grey--text mb-0">{{ card.d3 }}</p>
                      <p class="caption grey--text mb-0">
                        <span class="font-weight-bold green--text">{{
                          card.d4
                        }}</span
                        >/share
                      </p>
                    </div>
                    <div>
                      <p class="caption grey--text mb-0">{{ card.d5 }}</p>
                      <p class="mb-0" style="font-weight: 569; font-size: 13px">
                        {{ card.d6 }}
                      </p>
                    </div>
                    <div>
                      <p class="caption grey--text mb-0">{{ card.d7 }}</p>
                      <p class="mb-0" style="font-weight: 569; font-size: 13px">
                        {{ card.d8 }}
                      </p>
                    </div>
                    <div>
                      <p class="caption text-right grey--text mb-0">
                        {{ card.d9 }}
                      </p>
                      <p
                        class="mb-0"
                        style="
                          font-weight: 569;
                          font-size: 13px;
                          color: #0037b7;
                        "
                      >
                        {{ card.d10 }}
                      </p>
                    </div>
                  </div>
                </v-card>
                <p
                  class="mb-0 pt-7 pl-2"
                  style="
                    text-transform: uppercase;
                    font-size: 12px;
                    color: #666666;
                    font-weight: 600;
                    letter-spacing: 1px;
                  "
                >
                  Past Dividends
                </p>
                <v-card
                  elevation="0"
                  class="mt-4 ml-2 mr-2 pa-3"
                  outlined
                  v-for="card in evennt"
                  :key="card.id"
                  style="background-color: ; border: 1px solid #f2f2f3"
                >
                  <div class="d-flex justify-space-between">
                    <div>
                      <p class="caption grey--text mb-0">{{ card.d1 }}</p>
                      <p class="mb-0" style="font-weight: 569; font-size: 13px">
                        {{ card.d2 }}
                      </p>
                    </div>
                    <div>
                      <p class="caption grey--text mb-0">{{ card.d3 }}</p>
                      <p class="caption grey--text mb-0">
                        <span class="font-weight-bold green--text">{{
                          card.d4
                        }}</span
                        >/share
                      </p>
                    </div>
                    <div>
                      <p class="caption grey--text mb-0">{{ card.d5 }}</p>
                      <p class="mb-0" style="font-weight: 569; font-size: 13px">
                        {{ card.d6 }}
                      </p>
                    </div>
                    <div>
                      <p class="caption grey--text mb-0">{{ card.d7 }}</p>
                      <p class="mb-0" style="font-weight: 569; font-size: 13px">
                        {{ card.d8 }}
                      </p>
                    </div>
                    <div>
                      <p class="caption text-right grey--text mb-0">
                        {{ card.d9 }}
                      </p>
                      <p
                        class="mb-0"
                        style="
                          font-weight: 569;
                          font-size: 13px;
                          color: #0037b7;
                        "
                      >
                        {{ card.d10 }}
                      </p>
                    </div>
                  </div>
                </v-card>

                <a style="text-decoration: none">
                  <p
                    class="mt-5 mb-0"
                    style="font-weight: 569; font-size: 14px; color: #0037b7"
                  >
                    View all dividends
                  </p></a
                >
              </v-card>
            </section>

            <section id="news">
              <v-card
                outlined
                elevation="0"
                class="mt-7 pa-7"
                style="border: 1px solid #dddddd"
              >
                <p class="mb-0 tittle">News</p>

                <v-chip
                  outlined
                  style="border: 2px solid black"
                  class="font-weight-bold mt-5 ma-2"
                >
                  This week
                </v-chip>
                <v-chip outlined class="mt-5 ma-2"> This month </v-chip>
                <v-chip outlined class="mt-5 ma-2"> Order New </v-chip>
                <!-- 
                     <v-card
                       v-for="card in cards"
                       :key="card.id"
                       cols="6"
                       class="mt-5 pt-3"
                       elevation="0"
                     >
                       <div  class="d-flex">
                         <div>
                           <img :src="card.imm" class="ml-2 mb-1 pb-0" />
                         </div>
                         <div>
                           <p
                             class="grey--text body-2 pl-4 pb-0 mb-0 font-weight-semibold"
                           >
                             {{ card.title }}
                           </p>
                           <p
                             class="black--text body-2 pl-4 pb-0 mb-0 font-weight-semibold"
                           >
                             {{ card.description }}
                           </p>
                         </div>
                       </div>
                     </v-card> -->

                <v-row>
                  <v-col cols="12" md="6" lg="6">
                    <v-card
                      v-for="card in leftCards"
                      :key="card.id"
                      class="mt-5 pt-3 rounded-lg"
                      elevation="0"
                    >
                      <div class="d-flex">
                        <div>
                          <img :src="card.imm" class="ml-2 mb-1 pb-0" />
                        </div>
                        <div>
                          <p
                            class="grey--text caption pl-4 pb-0 mb-0 font-weight-semibold"
                          >
                            {{ card.title }}
                          </p>
                          <p
                            class="black--text body-2 pl-4 pb-0 mb-0"
                            style="font-weight: 530"
                          >
                            {{ card.description }}
                          </p>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-card
                      v-for="card in rightCards"
                      :key="card.id"
                      class="mt-5 pt-3 rounded-lg"
                      elevation="0"
                    >
                      <div class="d-flex">
                        <div>
                          <img :src="card.imm" class="ml-2 mb-1 pb-0" />
                        </div>
                        <div>
                          <p
                            class="grey--text caption pl-4 pb-0 mb-0 font-weight-semibold"
                          >
                            {{ card.title }}
                          </p>
                          <p
                            class="black--text body-2 pl-4 pb-0 mb-0"
                            style="font-weight: 530"
                          >
                            {{ card.description }}
                          </p>
                        </div>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>

                <a :href="zebu" style="text-decoration: none">
                  <p
                    class="body-2 mt-7 font-weight-bold mb-0"
                    style="color: #0037b7; text-align: left"
                  >
                    View all news
                  </p></a
                >
              </v-card>
            </section>
          </div>
        </v-col>

        <v-col cols="3" class="d-none d-lg-block scrollable-column">
          <div class="">
            <v-card
              outlined
              rounded-lg
              d-none
              d-lg-flex
              elevation="0"
              class="mt-7"
              style="border: 1px solid #dddddd"
            >
              <v-card
                elevation="0"
                class="pa-4"
                style="background-color: #fafbff"
              >
                <v-btn
                  elevation="0"
                  small
                  height="32px"
                  style="background-color: #43a833; color: white; width: 47%"
                  rounded class=""
                  >buy</v-btn
                >
                <v-btn
                  elevation="0"
                  class="ml-3"
                  small
                  height="32px"
                  style="
                    background-color: #ffffff;
                    color: #666666;
                    border: 1px solid #c2c2c2;
                    width: 47%;
                  "
                  rounded
                  >SELL</v-btn
                >
              </v-card>

              <div class="me-auto">
                <v-tabs
                  v-model="tab"
                  background-color="transparent"
                  color="black"
                >
                  <v-tab class="text-capitalize px-0 ml-4"
                    ><span
                      style="
                        font-size: 13px;
                        font-weight: 650;
                        line-height: 16px;
                        letter-spacing: -0.4px;
                        text-align: left;
                      "
                      class="px-0"
                      >Regular</span
                    >
                  </v-tab>
                  <v-tab class="text-capitalize px-0 ml-3"
                    ><span
                      style="
                        font-size: 13px;
                        font-weight: 650;
                        line-height: 16px;
                        letter-spacing: -0.4px;
                        text-align: left;
                        font-variation-settings: 'slnt' 0;
                      "
                    >
                      Cover</span
                    ></v-tab
                  >
                  <v-tab class="text-capitalize px-0 ml-3"
                    ><span
                      style="
                        font-size: 13px;
                        font-weight: 650;
                        line-height: 16px;
                        letter-spacing: -0.4px;
                        text-align: left;
                        font-variation-settings: 'slnt' 0;
                      "
                      >AMO</span
                    ></v-tab
                  >
                </v-tabs>
              </div>

              <!-- <v-tabs class="">
                <v-tab class="caption text-none"
                  ><span class="px-0">Regualr</span>
                  </v-tab
                >
                <v-tab class="caption text-none">Cover</v-tab>
                <v-tab class="caption text-none">AMO</v-tab>
              </v-tabs> -->
              <v-divider></v-divider>
              <div class="pa-3">
                <p class="mb-0 sideheaq">Investment type</p>
                <!-- <div class="ma-0 pa-0"> -->
                <!-- <v-radio-group v-model="ratio" dense class="ma-0 pa-0">
                    <div class="d-flex 3 mt-2">
                      <v-radio color="black" :small="true" value="red" style="text-align:none" class="ma-0 pa-0"></v-radio>
                      <p class="mb-0 pt-1 " style="color: #3e4763;font-size:13px">Delivery</p>
  
                      <v-radio color="black" :small="true" value="redd" style="text-align:none" class="ma-0 ml-3 pa-0"></v-radio>
                      <p class="mb-0 pt-1 " style="color: #3e4763;font-size:13px">Intraday</p>
  
                    </div>
                  </v-radio-group> -->
                <!-- <v-radio-group v-model="radioGroup" row class="pa-0 ma-0 mt-2 sidehea">
                  <v-radio
                    :style="{ fontSize: smallRadioSize }"
                    class="custom-radio"
                    label="Delivery"
                    value="radio-1"
                    color="black"
                  ></v-radio>
                  <v-radio
                    class="custom-radio"
                    label="Intraday"
                    value="radio-2"
                    color="black"
                  ></v-radio>
                </v-radio-group> -->
                <div class="mt-2">
                <input type="radio" class="pt-2 " checked id="html" name="fav_language"  value="Delivery" >
<label for="html" class="ml-1 sidehea">Delivery</label>
<input type="radio" id="css" class="ml-4" name="fav_language" value="CSS">
<label for="css" class=" ml-1 sidehea">Intraday</label>
</div>
                <!-- </div> -->

                <v-row class="mt-4">
                  <v-col cols="6" class="mt-0 pt-0">
                    <p class="mb-0 sidetext">Quantity</p>
                    <v-card
                      class="rounded-pill pa-2 mt-2"
                      elevation="0"
                      style="background-color: #f1f3f8"
                    >
                      <div class="d-flex">
                        <v-btn
                          elevation="0"
                          small
                          outlined
                          style="
                            background-color: white;
                            width: 20px;
                            height: 20px;
                          "
                          fab
                          dark
                          x-small
                        >
                          <v-icon size="16" color="#666666"> mdi-minus </v-icon>
                        </v-btn>
                        <p class="mb-0 mx-auto sidetext">43</p>
                        <v-btn
                          small
                          elevation="0"
                          outlined
                          style="
                            background-color: white;
                            width: 20px;
                            height: 20px;
                          "
                          fab
                          dark
                          x-small
                        >
                          <v-icon size="16" color="#666666"> mdi-plus </v-icon>
                        </v-btn>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="6" class="mt-0 pt-0 ml-0 pl-0">
                    <p class="mb-0 sidetext">Price</p>
                    <v-card
                      class="rounded-pill pa-2 mt-2"
                      small
                      elevation="0"
                      style="background-color: #f1f3f8"
                    >
                      <div class="d-flex">
                        <p class="mb-0 pl-1 pt-1 sidetext">₹ 43123</p>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
                <v-divider class="mt-5"></v-divider>
                <p class="mb-0 mt-4 sideheaq">Investment type</p>
                <v-chip-group
                  show-arrows
                  active-class="newchi"
                  class="ma-0 ml-0 pa-0"
                >
                  <v-chip
                    small
                    class="pa- custom-chip"
                    style="
                      font-size: 12px;
                      color: #666666;
                      background-color: #f1f3f8;
                      line-height: 16px;
                    "
                    >Market</v-chip
                  >
                  <v-chip
                    small
                    class="pa- sidechipp"
                    style="
                      font-size: 12px;
                      color: #666666;
                      background-color: #f1f3f8;
                      line-height: 16px;
                    "
                    >Limit</v-chip
                  >
                  <v-chip
                    small
                    class="pa- sidechipp"
                    style="
                      font-size: 12px;
                      color: #ffffff;
                      background-color: #000000;
                    "
                    >SL Limit</v-chip
                  >
                  <v-chip
                    small
                    class="pa- sidechipp"
                    style="
                      font-size: 12px;
                      color: #666666;
                      background-color: #f1f3f8;
                    "
                    >SL Mkt</v-chip
                  >
                </v-chip-group>
                <p
                  class="mb-0 mt-3"
                  style="font-size: 14px; font-weight: 620; color: black"
                >
                  Trigger price
                </p>
                <v-card
                  class="rounded-pill pa-2 mt-2"
                  x-small
                  elevation="0"
                  style="background-color: #f1f3f8"
                >
                  <p class="mb-0 ml-2 sidehea" style="color: #666666">
                    ₹
                    <span class="mb-0" style="color: black; font-size: 13px"
                      >1,288.90
                    </span>
                  </p>
                </v-card>
                <p class="mb-0 mt-3" style="color: #666666; font-size: 10px">
                  Your order wil executed after a stock crosses this trigger
                  price set for you
                </p>
                <p
                  class="mb-0 mt-4"
                  style="
                    text-align: center;
                    color: #43a833;
                    font-size: 19px;
                    font-weight: 469;
                  "
                >
                  ₹ 10,31,566
                </p>
                <!-- <p -card> -->
                <p
                  class="mb-0"
                  style="color: #666666; font-size: 10px; text-align: center"
                >
                  Required amount to buy 34 stocks
                </p>
                <v-btn
                  block
                  elevation="0"
                  class="mt-5"
                  rounded
                  style="
                    background-color: black;
                    color: white;
                    font-size: 12px;
                    text-transform: capitalize;
                  "
                  >Start Investing Now!
                </v-btn>
              </div>
            </v-card>

            <p class="mb-0 subhead3 mt-6">Similar ETFs</p>
            <div v-for="card in sides" :key="card.id">
              <v-card
                elevation="0"
                outlined
                style="border: 1px solid #cccccc"
                class="mt-3 rounded-lg"
              >
                <v-card
                  style="background-color: #fafbff"
                  rounded-xxl
                  class="pa-2 rounded-lg"
                  elevation="0"
                >
                  <div class="d-flex">
                    <p class="mb-0" style="font-weight: 609; font-size: 13px">
                      {{ card.title }}
                    </p>
                    <v-chip
                      label
                      x-small
                      class="ml-auto"
                      style="background-color: white; color: #666666"
                      >{{ card.chip }}</v-chip
                    >
                  </div>
                </v-card>
                <div style="border-bottom: solid #dddddd; border-width: 1px">
                  <v-card elevation="0" class="pa-2">
                    <!-- <div > -->
                    <div class="d-flex">
                      <p class="sidebo mb-0">
                        {{ card.sub1 }}
                        <span class="sidebo1">{{ card.sub2 }}</span>
                        Cr
                      </p>
                      <p class="ml-auto sidebo mb-0">
                        {{ card.sub3 }}
                        <span class="sidebo1">{{ card.sub4 }}</span>
                      </p>
                    </div>
                  </v-card>
                </div>
                <div style="border-bottom: solid #dddddd; border-width: 1px">
                  <v-card elevation="0" class="pa-2">
                    <!-- <div > -->
                    <div class="d-flex">
                      <p class="sidebo mb-0">
                        {{ card.sub5 }}
                        <span class="sidebo1">{{ card.sub6 }}</span>
                      </p>
                      <p class="ml-auto sidebo mb-0">
                        {{ card.sub7 }}
                        <span class="sidebo2">{{ card.sub8 }}</span>
                      </p>
                    </div>
                  </v-card>
                </div>
                <div style="border-bottom: solid #dddddd; border-width: 1px">
                  <v-card elevation="0" class="pa-2">
                    <!-- <div > -->
                    <div class="d-flex">
                      <p class="sidebo mb-0">
                        {{ card.sub9 }}
                        <span class="sidebo1">{{ card.sub10 }}</span>
                      </p>
                      <p class="ml-auto sidebo mb-0">
                        {{ card.sub11 }}
                        <span class="sidebo2">{{ card.sub1 }}</span>
                      </p>
                    </div>
                  </v-card>
                </div>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- </main> -->
  </v-container>
</template>
  <script>

import { Bar } from "vue-chartjs";
import { createChart } from "lightweight-charts"; 
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, registerables } from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
Chart.register(...registerables);

import { widget } from '../../public/charting_library';
import Datafeed from '../alldata/feedFactory';
export default {
  name: "TVChartContainer",
  components: { Bar },
  data() {
    return {
      smallRadioSize: "10px",
      activeSection: "",
      number: "May 2021",
      chha: false,
      nifity: true,
      isCardVisible: false,
      widthdat: [50, 50, 50, 50, 80],
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      linkUrl: "#",
      zebu: "#",
      toggleMenu: true,
      drawer: false,
      selectedItem: true,
      tab: 0,
      radio: 1,
      ratio: null,
      dialogVisible: false,
      username: "",
      password: "",
      lastLogin: "N/A",
      radioGroup: "radio-1",
      datas1: [
        {
          per: -22.8,
          duration: "6 year ",
          duration1:"CAGR",
          per2: 23.4
        },
        {
          per: -20.2,
          duration: "1 year ",
          duration1:"CAGR",
          per2: 20.4,
        },
        {
          per: 35.4,
          duration: "1 year ",
          duration1:"CAGR",
          per2: 20.4,
        },
        {
          per: 13.8,
          duration: "1 year ",
          duration1:"CAGR",
          per2: 11.6,
        },
        {
          per: 11.5,
          duration: "1 year ",
          duration1:"CAGR",
          per2: 83.4,
        },
        {
          per: 12,
          duration: "1 year ",
          duration1:"CAGR",
          per2: 20.4,
        },
      ],
      sides: [
        {
          id: 1,
          title: "Mirae Asset Tax Saver Fund",
          chip: "ELSS",
          sub1: "AUM",
          sub2: "₹29,534",
          sub3: "Expense ",
          sub4: "1.15%",
          sub5: "AUM",
          sub6: "₹29,534",
          sub7: "Expense ",
          sub8: "1.15%",
          sub9: "PE",
          sub10: "37.04",
          sub11: "1yrs ",
          sub12: "+20.2%",
        },
        {
          id: 2,
          title: "Mirae Asset Tax Saver Fund",
          chip: "ELSS",
          sub1: "AUM",
          sub2: "₹29,534",
          sub3: "Expense ",
          sub4: "1.15%",
          sub5: "AUM",
          sub6: "₹29,534",
          sub7: "Expense ",
          sub8: "1.15%",
          sub9: "PE",
          sub10: "37.04",
          sub11: "1yrs ",
          sub12: "+20.2%",
        },
        {
          id: 3,
          title: "Mirae Asset Tax Saver Fund",
          chip: "ELSS",
          sub1: "AUM",
          sub2: "₹29,534",
          sub3: "Expense ",
          sub4: "1.15%",
          sub5: "AUM",
          sub6: "₹29,534",
          sub7: "Expense ",
          sub8: "1.15%",
          sub9: "PE",
          sub10: "37.04",
          sub11: "1yrs ",
          sub12: "+20.2%",
        },
        {
          id: 4,
          title: "Mirae Asset Tax Saver Fund",
          chip: "ELSS",
          sub1: "AUM",
          sub2: "₹29,534",
          sub3: "Expense ",
          sub4: "1.15%",
          sub5: "AUM",
          sub6: "₹29,534",
          sub7: "Expense ",
          sub8: "1.15%",
          sub9: "PE",
          sub10: "37.04",
          sub11: "1yrs ",
          sub12: "+20.2%",
        },
        {
          id: 5,
          title: "Mirae Asset Tax Saver Fund",
          chip: "ELSS",
          sub1: "AUM",
          sub2: "₹29,534",
          sub3: "Expense ",
          sub4: "1.15%",
          sub5: "AUM",
          sub6: "₹29,534",
          sub7: "Expense ",
          sub8: "1.15%",
          sub9: "PE",
          sub10: "37.04",
          sub11: "1yrs ",
          sub12: "+20.2%",
        },

        // Add more cards as needed
      ],
      small: [
        { text: "Investor", value: "inv" },
        { text: "Holding %", value: "hold", align: "right", sortable: false },
        {
          text: "No. of shares",
          value: "sha",
          align: "right",
          sortable: false,
        },
      ],
      datasmall: [
        {
          icoo: "mdi-square-medium",
          colo: "#978FED",
          inv: "Total Promoter Holding",
          hold: "50.41 %",
          sha: "3,487,884,852",
        },
        {
          icoo: "mdi-square-medium",

          inv: "Total Promoter Holding",
          hold: "50.41 %",
          colo: "#978FED",
          sha: "3,487,884,852",
        },
        {
          icoo: "mdi-square-medium",

          inv: "Total Promoter Holding",
          hold: "50.41 %",
          sha: "3,487,884,852",
          colo: "#978FED",
        },
        {
          icoo: "mdi-square-medium",

          inv: "Total Promoter Holding",
          hold: "50.41 %",
          sha: "3,487,884,852",
          colo: "#978FED",
        },
        {
          icoo: "mdi-square-medium",

          inv: "Total Promoter Holding",
          hold: "50.41 %",
          sha: "3,487,884,852",
          colo: "#978FED",
        },
      ],
      last: [
        { text: "Funds (Top 5)", value: "fun" },
        {
          text: "Market-cap held",
          value: "mar",
          align: "right",
          sortable: false,
        },
        { text: "Weight", value: "wei", align: "right", sortable: false },
        { text: "3M Change", value: "cha", align: "right", sortable: false },
        {
          text: "Portfolio rank",
          value: "port",
          align: "right",
          sortable: false,
        },
      ],
      cards: [
        {
          title: "2 days ago     Economic Times",
          imm: require("@/assets/neew.svg"),
          description:
            "Canara Bank starts process to sell non-core assets via IPOs",
        },
        {
          title: "2 days ago     Economic Times",
          imm: require("@/assets/neew.svg"),
          description:
            "Canara Bank starts process to sell non-core assets via IPOs",
        },
        {
          title: "2 days ago     Economic Times",
          imm: require("@/assets/neew.svg"),
          description:
            "Canara Bank starts process to sell non-core assets via IPOs",
        },
        {
          title: "2 days ago     Economic Times",
          imm: require("@/assets/neew.svg"),
          description:
            "Canara Bank starts process to sell non-core assets via IPOs",
        },
        {
          title: "2 days ago     Economic Times",
          imm: require("@/assets/neew.svg"),
          description:
            "Canara Bank starts process to sell non-core assets via IPOs",
        },
        {
          title: "2 days ago     Economic Times",
          imm: require("@/assets/neew.svg"),
          description:
            "Canara Bank starts process to sell non-core assets via IPOs",
        },
      ],
      evennt: [
        {
          d1: "Ex Date",
          d2: "12 May, 2023",
          d3: "Dividend",
          d4: "23",
          d5: "Total dividend",
          d6: "750",
          d7: "Yield",
          d8: "2.3%",
          d9: "Action document",
          d10: "Read document",
        },
        {
          d1: "Ex Date",
          d2: "12 May, 2023",
          d3: "Dividend",
          d4: "23",
          d5: "Total dividend",
          d6: "750",
          d7: "Yield",
          d8: "2.3%",
          d9: "Action document",
          d10: "Read document",
        },
      ],
      datalast: [
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 ",
          rann: "0",
        },
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 ",
          rann: "0",
        },
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 ",
          rann: "+43",
        },
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 ",
          rann: "-5",
        },
        {
          fun: "ICICI Prudential Bluechip Fund - Growth",
          mar: "0.1777%",
          wei: "8.17%",
          cha: "0.15%",
          port: "3/81 ",
          rann: "+78",
        },
      ],

      headers: [
        {
          text: "Financial Years",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "Mar 2020", value: "List", align: "right", sortable: false },
        { text: "Mar 2021", value: "Issue", align: "right", sortable: false },
        { text: "Mar 2022", value: "Listing", align: "right", sortable: false },
        { text: "Mar 2023", value: "CMP", align: "right", sortable: false },
        { text: "Mar 2024", value: "Current", align: "right", sortable: false },
        // { text: "Mar 2025", value: "Curr",align: 'right' , sortable: false,},
      ],
      dataTableItems: [
        {
          name: "Total Revenue",
          List: -6766,
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
        {
          name: "EPS (in Rs)",
          List: 6766,
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
        {
          name: "DPS",
          List: 6766,
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
        {
          name: "Payout Ratio",
          List: 6766,
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
        {
          name: "Share Capital",
          List: 6766,
          loca: "₹8,766",
          Issue: "+ 23.26%",
          Listing: "₹20,766",
          CMP: "₹115",
          Current: "+4.26% ",
        },
      ],
      headersss: [
        {
          text: "Stocks",
          align: "start",
          sortable: false,
          value: "name",
        },

        { text: "PE Ratio", value: "one", align: "right", sortable: false },
        { text: "PB Ratio", value: "two", align: "right", sortable: false },
        {
          text: "Dividend Yield",
          value: "three",
          align: "right",
          sortable: false,
        },
      ],

      headerss: [
        {
          text: "Stocks",
          align: "start",
          sortable: false,
          value: "name1",
        },

        { text: "PE Ratio", value: "one1", align: "right", sortable: false },
        { text: "PB Ratio", value: "two1", align: "right", sortable: false },
        { text: "ROCE%", value: "three1", align: "right", sortable: false },
        {
          text: "Dividend Yield",
          value: "four1",
          align: "right",
          sortable: false,
        },
      ],
      firstab: [
        {
          name1: "Reliance Industries Ltd",
          one1: "24.75",
          two1: "₹1.86",
          three1: "1.86",
          four1: "3.28%",
        },
        {
          name1: "Chennai Petroleum Corporation Ltd",
          one1: "24.75",
          two1: "₹1.86",
          three1: "1.86",
          four1: "---",
        },
        {
          name1: "HDFC Bank Limited",
          one1: "24.75",
          two1: "₹1.86",
          three1: "1.86",
          four1: "---",
        },
        {
          name1: "Hindustan Petroleum Corp Ltd",
          one1: "24.75",
          two1: "₹1.86",
          three1: "1.86",
          four1: "---",
        },
      ],

      items: [
        { title: "Market Cap", description: "₹1575681.48Cr" },
        { title: "Volume", description: "8,00,231.00" },
        { title: "Open Value", description: "₹2,441.95" },
        { title: "Close Value", description: "₹2,435.00" },
        { title: "Avg. Traded", description: "₹2,435.00" },
      ],
      items1: [
        { title: "1 M Return", description: "+2.21%" },
        { title: "1 M Return", description: "+2.21%" },
        { title: "6 M Return", description: "-2.21%" },
        { title: "3 Y Return", description: "+2.21%" },
        { title: "5 Y Return", description: "+2.21%" },
      ],
      dessertss: [
        {
          name: "PE Ratio",
          calories: 159,
        },
        {
          name: "PB Ratio",
          calories: 37.39,
        },
        {
          name: "ROCE",
          calories: 262,
        },
        {
          name: "Price to Sale",
          calories: "1.14%",
        },
        {
          name: "Dividend Yield",
          calories: 356,
        },
        {
          name: "Book Value",
          calories: "9.86%",
        },
        {
          name: "Book Value",
          calories: "₹52.2",
        },
      ],
      headerProps: {
        class: "custom-header",
      },
      chartData: {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [
          {
            // label: 'Data One',
            backgroundColor: "#ECEFF8",
            data: [40, 20, 12, 32],
          },
        ],
      },
    };
  },
  props: {
		symbol: {
			// default: "NSE:Nifty 50",
      default: "NSE:RELIANCE-EQ",
      // default: "TATASTLLP-EQ",
			type: String,
		},
		interval: {
			default: '1D',
      // default: localStorage.getItem("tradingview.chart.lastUsedTimeBasedResolution")? localStorage.getItem("tradingview.chart.lastUsedTimeBasedResolution") : "5",
			type: String,
		},
		datafeedUrl: {
			default: Datafeed,
			type: String,
		},
		libraryPath: {
			default: 'charting_library/',
			type: String,
		},
		chartsStorageUrl: {
			default: 'https://saveload.tradingview.com',
			type: String,
		},
		chartsStorageApiVersion: {
			default: '1.1',
			type: String,
		},
		clientId: {
			default: 'ZEBU',
			type: String,
		},
		userId: {
			default: '',
			type: String,
		},
    Undo:{
      default:false,
      type: Boolean,
    },
		fullscreen: {
			default: false,
			type: Boolean,
		},
		autosize: {
			default: true,
			type: Boolean,
		},
		studiesOverrides: {
			type: Object,
		},
	},
	tvWidget: null,
  methods: {
    linebarchart(){
      const datalabels = [
      { year: "2017", count: 2370 },
      // { year: '09:05 AM', count: 2365 },

      { year: "2018", count: 2380 },
      { year: "2019", count: 2390 },
      { year: "2020", count: 2405 },
      { year: "2021", count: 2330 },
      { year: "2022", count: 2380 },
      { year: "2023", count: 2410 },
    ];
const dataLinebar = {
  labels: datalabels.map((row) => row.year),
  datasets: [
  {
    label: 'DEBT TO ASSETS',
    data: [-100,-20, 25, 40, -81, -101, 75],
    backgroundColor: [
    'rgba(255, 159, 64)'
    ],
    borderColor: [
    'rgba(255, 159, 64)'
      
    ],
   type:'line',
   borderWidth:2,
   yAxisID: 'precent',
  
  },  
  {
    label: 'ASSETS',
    data: [0,65, 59, 80, 50, -56, 55],
    backgroundColor: [
    // 'rgba(182, 176, 251, 1)',
    'rgba(20, 133, 100, 1)'
    ],
    borderColor: [
    // 'rgba(182, 176, 251, 1)',
    'rgba(20, 133, 100, 1)'
    ],
    borderWidth: 1,
    yAxisID: 'y'
  },{
    label: 'LIABILITIES',
    data: [0,-20, 25, 40, -81, -101, 75],
    backgroundColor: [
    // 'rgba(247, 170, 237, 1) ',
    'rgba(124, 211, 110, 1)'
      
     
    ],
    borderColor: [
    // 'rgba(247, 170, 237, 1) ',
    'rgba(124, 211, 110, 1)'
      
    ],
    borderWidth: 1
  },
]
};

new Chart(this.$el.querySelector("#linebar"), {
  type: 'bar',
  data: dataLinebar,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        position :'left',
        maxTicksLimit: 70,
        ticks: {
    fontFamily:  "'Inter', sans-serif",
  },
        // font: {
        //     family: "'Inter', sans-serif",
        //   },
      },
      x:{
        beginAtZero:true,
        grid:{
              display:false
          },
       font: {
            family: "'Inter', sans-serif",
          },
      },
      precent: {
        beginAtZero: true,
        position: 'right',
        
        ticks: {
            callback: function(value) {
                return value + " %";
            },
      font: {
            family: "'Inter', sans-serif",
          },
        }
      }
    },
    plugins: {
      tooltip: {
       
        mode: 'index',
                                backgroundColor: 'rgb(255, 255, 255)',
                                // multiKeyBackground: '#000000',
                                bodyColor: '#000000',
                                titleColor:'#000000',
                                displayColors: true,
      },
      legend: {
              display: false,
              labels: { 
              font: {
              family: "'Inter', sans-serif", 
            }
          }
        }
    },
  }

});

    },
    threelinechart() {
    // document.body.style.position = "absolute";
    
    const chartOptions3 = {
        // width: 600,
        height: 450,
        autoSize: true,
        layout: {
		textColor: 'black',
		// background: { type: 'solid', color: 'white' },
    fontFamily: "'Inter', sans-serif",
	},
        crosshair: {
    vertLine: {
      labelVisible: false,
    },
    },
        leftPriceScale: {
          visible: true,
          borderVisible: false,
        },
        rightPriceScale: {
          visible: false,
          borderVisible: false,
        },
        grid: {
          vertLines: {
            // color: '#2B2B43',
            visible: false,
          },
          horzLines: {
            // color: '#363C4E',
            visible: false,
          },
          rightPriceScale: {
            visible: false,
          },
        },
      };

      const chart = createChart(this.$refs.chartContainer3, chartOptions3);

      // var chart= createChart(document.getElementById('chartContainer3'), chartOptions3);
      var lineSeries3 = chart.addLineSeries({
        // lineColor: "#F9CD6C",
        color:"#F9CD6C",
        // baseValue: { type: 'price', price: 25 },
        // topLineColor: 'rgba( 38, 166, 154, 1)', topFillColor1: 'rgba( 38, 166, 154, 0.28)', topFillColor2: 'rgba( 38, 166, 154, 0.05)', bottomLineColor: 'rgba( 239, 83, 80, 1)', bottomFillColor1: 'rgba( 239, 83, 80, 0.05)', bottomFillColor2: 'rgba( 239, 83, 80, 0.28)' ,
        lineWidth: 2,
        crosshairMarkerVisible: true,
        crosshairMarkerRadius: 4,
       
      });
      const data3 = [
        { time: "2023-09-01", value: 0 },
        { time: "2023-09-02", value: -45 },
        { time: "2023-09-03", value: 42 },
        { time: "2023-09-04", value: 48 },
        { time: "2023-09-05", value: 30 },
        { time: "2023-09-06", value: 40 },
        { time: "2023-09-07", value: 60 },
        { time: "2023-09-08", value: 20 },
        { time: "2023-09-09", value: 10 },
        { time: "2023-09-11", value: 30 },
        { time: "2023-09-12", value: 45 },
        { time: "2023-10-01", value: 30 },
        { time: "2023-10-02", value: 25 },
        { time: "2023-10-03", value: 20 },
        { time: "2023-10-04", value: 28 },
        { time: "2023-10-05", value: 22 },
        { time: "2023-10-06", value: 27 },
        { time: "2023-10-07", value: 39 },
        { time: "2023-10-08", value: 37 },
        { time: "2023-10-09", value: 28 },
        { time: "2023-11-01", value: 40 },
        { time: "2023-11-02", value: 35 },
        { time: "2023-11-03", value: 28 },
        { time: "2023-11-04", value: 38 },
        { time: "2023-11-05", value: 20 },
        { time: "2023-11-06", value: 23 },
        { time: "2023-11-07", value: 29 },
        { time: "2023-11-08", value: 17 },
        { time: "2023-11-09", value: 28 },
        { time: "2023-12-01", value: 13 },
        { time: "2023-12-02", value: 15 },
        { time: "2023-12-03", value: 12 },
        { time: "2023-12-04", value: 18 },
        { time: "2023-12-05", value: 20 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 20 },
        { time: "2023-12-08", value: 17 },
        { time: "2023-12-09", value: 35 },
      ];
      lineSeries3.setData(data3);
      const secondval = chart.addLineSeries({
        // lineColor: "#148564",
        color: "#148564",
        label: {
        font: {
            family: "'Inter', sans-serif"
        }},
      });
      const data4 = [
        { time: "2023-09-01", value: 0 },
        { time: "2023-09-02", value: 25 },
        { time: "2023-09-03", value: 13 },
        { time: "2023-09-04", value: 18 },
        { time: "2023-09-05", value: 20 },
        { time: "2023-09-06", value: 10 },
        { time: "2023-09-07", value: 20 },
        { time: "2023-09-08", value: 17 },
        { time: "2023-09-09", value: 40 },
        { time: "2023-09-11", value: 42 },
        { time: "2023-09-12", value: 45 },
        { time: "2023-10-01", value: 20 },
        { time: "2023-10-02", value: 17 },
        { time: "2023-10-03", value: 12 },
        { time: "2023-10-04", value: 18 },
        { time: "2023-10-05", value: 20 },
        { time: "2023-10-06", value: 10 },
        { time: "2023-10-07", value: 20 },
        { time: "2023-10-08", value: 17 },
        { time: "2023-10-09", value: 19 },
        { time: "2023-11-01", value: 20 },
        { time: "2023-11-02", value: 15 },
        { time: "2023-11-03", value: 10 },
        { time: "2023-11-04", value: 18 },
        { time: "2023-11-05", value: 20 },
        { time: "2023-11-06", value: 10 },
        { time: "2023-11-07", value: 30 },
        { time: "2023-11-08", value: 32 },
        { time: "2023-11-09", value: 34 },
        { time: "2023-12-01", value: 20 },
        { time: "2023-12-02", value: 15 },
        { time: "2023-12-03", value: 31 },
        { time: "2023-12-04", value: 18 },
        { time: "2023-12-05", value: 20 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 26 },
        { time: "2023-12-08", value: 37 },
        { time: "2023-12-09", value: 30 },
      ];
      secondval.setData(data4);
      const thirdval = chart.addLineSeries({
        // lineColor: "#7CD36E",
        color: "#7CD36E",
        label: {
        font: {
            family: "'Inter', sans-serif"
        }},
      });
      const data5 = [
        { time: "2023-09-01", value: 0 },
        { time: "2023-09-02", value: -15 },
        { time: "2023-09-03", value: 22 },
        { time: "2023-09-04", value: 18 },
        { time: "2023-09-05", value: 20 },
        { time: "2023-09-06", value: 10 },
        { time: "2023-09-07", value: 40 },
        { time: "2023-09-08", value: 10 },
        { time: "2023-09-09", value: 30 },
        { time: "2023-09-11", value: 20 },
        { time: "2023-09-12", value: 25 },
        { time: "2023-10-01", value: 10 },
        { time: "2023-10-02", value: 15 },
        { time: "2023-10-03", value: 12 },
        { time: "2023-10-04", value: 18 },
        { time: "2023-10-05", value: 20 },
        { time: "2023-10-06", value: 10 },
        { time: "2023-10-07", value: 29 },
        { time: "2023-10-08", value: 17 },
        { time: "2023-10-09", value: 28 },
        { time: "2023-11-01", value: 10 },
        { time: "2023-11-02", value: 15 },
        { time: "2023-11-03", value: 12 },
        { time: "2023-11-04", value: 18 },
        { time: "2023-11-05", value: 20 },
        { time: "2023-11-06", value: 10 },
        { time: "2023-11-07", value: 29 },
        { time: "2023-11-08", value: 17 },
        { time: "2023-11-09", value: 28 },
        { time: "2023-12-01", value: 13 },
        { time: "2023-12-02", value: 15 },
        { time: "2023-12-03", value: 12 },
        { time: "2023-12-04", value: 18 },
        { time: "2023-12-05", value: 20 },
        { time: "2023-12-06", value: 10 },
        { time: "2023-12-07", value: 20 },
        { time: "2023-12-08", value: 17 },
        { time: "2023-12-09", value: 35 },
      ];
      thirdval.setData(data5);

      document.body.style.position = "relative";
      var container = document.createElement("div");
      document.body.appendChild(container);

      var toolTipWidth = 100;
      var toolTipHeight = 80;
      var toolTipMargin = 15;
      var toolTip = document.createElement("div");
      // toolTip.style =  `width: 96px; height: 80px; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
      // toolTip.style.background = 'white';
      // toolTip.style.color = 'black';
      // toolTip.style.borderColor = 'rgba(0, 150, 136, 1)';
      toolTip.className = "floating-tooltip2";
      container.appendChild(toolTip);
      chart.subscribeCrosshairMove((param) => {
        console.log("parma", param);
        if (
          param.point === undefined ||
          !param.time ||
          param.point.x < 0 ||
          param.point.x > chart.clientWidth ||
          param.point.y < 0 ||
          param.point.y > chart.clientHeight
        ) {
          toolTip.style.display = "none";
        } else {
          // time will be in the same format that we supplied to setData.
          // thus it will be YYYY-MM-DD
          // const dateStr = param.time;
          // console.log('str dates',dateStr)
          toolTip.style.display = "block";
          var data = param.seriesData.get(lineSeries3);
          var secdata= param.seriesData.get(secondval);
          var threedata= param.seriesData.get(thirdval);
          var price = data.value 
          const secprice = secdata.value !== undefined ? secdata.value : '';
          const thirprice = threedata.value !== undefined ? threedata.value : '';
          console.log("param1", price, data , secprice, secdata);
          // toolTip.innerHTML = `<div style="color: ${'rgba(0, 150, 136, 1)'}">Apple Inc.</div><div style="font-size: 24px; margin: 4px 0px; color: ${'black'}">
          // 	${Math.round(100 * price) / 100}

          // 	</div><div style="color: ${'black'}">
          // 	${dateStr}
          // 	</div>`;toolTip1.innerHTML = `<div style="font-size: 16px;font-weight:bold;Line-height:14px; margin: 4px 0px;font-family: "Inter", sans-serif; color: ${'black'}">${ '&#8377;'+Math.round(100 * price) / 100}</div><div style="font-size:14px;font-family: "Inter", sans-serif;color: ${'black'}">${dateStr}</div>`;
          toolTip.innerHTML = 
          // '<div style="display: flex;flex-wrap: wrap;"><div style="margin:6px 10px 6px 0px; background-color: rgba(249, 205, 108, 1);width: 10px;padding: 2px;"></div><div  style="text-align: left;color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Relance</div><div style="Line-height:14px;text-align:right;font-size: 16px; margin: 4px 6px ;color:"#f2f7f7";font-family: "Inter", sans-serif;   id=text;>' + Math.round(100 * price) / 100+ "</div></div>"
          '<div style="display: flex;flex-wrap: wrap;"><div style="margin:6px 10px 6px 0px; background-color:rgba(124, 211, 110, 1);width: 10px;padding: 2px;"></div><div  style="text-align: left; color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Hp</div><div style="Line-height:14px;font-size: 16px;text-align: right; margin: 4px 6px ;color="#f2f7f7";font-family: "Inter", sans-serif;   id=text;>' + Math.round(100 * secprice) / 100+ "</div></div>"+
          '<div style="display: flex;flex-wrap: wrap;"><div style="margin:6px 10px 6px 0px; background-color:rgba(20, 133, 100, 1);width: 10px;padding: 2px;"></div><div  style="text-align: left; color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Hp</div><div style="Line-height:14px;font-size: 16px;text-align: right; margin: 4px 6px ;color="#f2f7f7";font-family: "Inter", sans-serif;   id=text;>' + Math.round(100 * secprice) / 100+ "</div></div>"+
          '<div style="display: flex;flex-wrap: wrap;"><div style="margin:6px 10px 6px 0px; background-color:rgba(249, 205, 108, 1);width: 10px;padding: 2px;"></div><div  style="text-align: left; color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Hp</div><div style="Line-height:14px;font-size: 16px;text-align: right; margin: 4px 6px ;color="#f2f7f7";font-family: "Inter", sans-serif;   id=text;>' + Math.round(100 * thirprice) / 100+ "</div></div>"
          // '<div style="display: flex;flex-wrap: wrap;"><div style="margin:6px 10px 6px 0px; background-color:rgba(249, 205, 108, 1), 1)width: 10px;padding: 2px;"></div><div  style="text-align: left; color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Indiaoil</div><div style="Line-height:14px;font-size: 16px;text-align: right; margin: 4px 6px ;color="#f2f7f7";font-family: "Inter", sans-serif;   id=text;>' + Math.round(100 * thirprice) / 100+ "</div></div>"
          // '<div style="display: flex;flex-wrap: wrap;"><div style="color: #2196f3; font-size: 12px; margin: 4px 0px; ">Relance</div><div style="font-size: 24px; margin: 6px 0px ;color="#f2f7f7"; id=text;>' +'<br>'+ Math.round(100 * secprice) / 100+'<br>'+ Math.round(100 * thirprice) / 100+"</div></div>";
          var coordinate = lineSeries3.priceToCoordinate(price);
          var shiftedCoordinate = param.point.x + 150;
          if (coordinate === null) {
            return;
          }
          shiftedCoordinate = Math.max(0,Math.min(container.clientWidth - toolTipWidth, shiftedCoordinate));
          var coordinateYaxis = coordinate - toolTipHeight - toolTipMargin > 0 ? coordinate - toolTipHeight - toolTipMargin : Math.max(0,Math.min(container.clientHeight - toolTipHeight - toolTipMargin,coordinate + toolTipMargin));
          toolTip.style.left = shiftedCoordinate + "px";
          toolTip.style.top = coordinateYaxis + 4100 + "px";

        }
      });
      chart.timeScale().fitContent();
  },
    handleScroll() {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const sections = [
        "introduction",
        "secc",
        "anal",
        "fina",
        "peer",
        "hold",
        "even",
        "news",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          this.activeSection = sections[i];

          break;
        }
      }
    },
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    login() {
      // Perform login authentication
      if (
        this.username === "yourUsername" &&
        this.password === "yourPassword"
      ) {
        // Successful login
        this.lastLogin = new Date().toLocaleString();
        // Reset fields
        this.username = "";
        this.password = "";
      } else {
        // Invalid login
        alert("Invalid credentials");
      }
    },
    valu(val) {
      console.log(val, "val");
      const validat = val;
      if (validat == false) {
        this.createChartsred();
      }
    },

    getTextColorClass(per) {
      if (per > 0) {
        return "positive-color";
      } else if (per < 0) {
        return "negative-color";
      } else {
        return "";
      }
    },
    chipp() {
      this.chha = !this.chha;
    },
    getCardColor(index) {
      // Custom logic to determine the card color based on the index or other conditions
      if (index % 2 === 0) {
        return "#ECF9EF"; // Example: Blue color for even index cards
      } else {
        return "#FAEAEA"; // Example: Green color for odd index cards
      }
    },
    toggleCardVisibility() {
      this.isCardVisible = !this.isCardVisible;
      this.buttonText = this.isCardVisible ? "view less" : "view more";
    },

    // createCharts() {
    //   const chartOptions1 = {
    //     height: 257,
    //     grid: {
    //       vertLines: {
    //         // color: '#2B2B43',
    //         visible: false,
    //       },
    //     },
    //     leftPriceScale: {
    //       visible: true,
    //       borderVisible: false,
    //     },
    //     rightPriceScale: {
    //       visible: false,
    //     },
    //     // Add your chart options for chart 1 here
    //   };

    //   const chart1 = createChart(this.$refs.chartContainer1, chartOptions1);

    //   const lineSeries1 = chart1.addBaselineSeries({
    //     baseValue: { type: "price", price: 200 },
    //     topLineColor: "#33A34D",
    //     topFillColor1: "rgba( 38, 166, 154, 0.28)",
    //     topFillColor2: "rgba( 38, 166, 154, 0.05)",
    //     bottomLineColor: "rgba( 239, 83, 80, 1)",
    //     bottomFillColor1: "rgba( 239, 83, 80, 0.05)",
    //     bottomFillColor2: "rgba( 239, 83, 80, 0.28)",
    //     // lineColor: 'blue',
    //     lineWidth: 2,
    //     crosshairMarkerVisible: true,
    //     // crosshairMarkerRadius: 4,
    //   });

    //   const data1 = [
    //     { time: "2023-03-01", value: 200 },
    //     { time: "2023-03-02", value: 150 },
    //     { time: "2023-03-03", value: 120 },
    //     { time: "2023-03-04", value: 180 },
    //     { time: "2023-03-05", value: 200 },
    //     { time: "2023-03-06", value: 10 },
    //     { time: "2023-03-07", value: 90 },
    //     { time: "2023-03-08", value: 170 },
    //     { time: "2023-03-09", value: 80 },
    //     { time: "2023-04-01", value: 200 },
    //     { time: "2023-04-02", value: 150 },
    //     { time: "2023-04-03", value: 120 },
    //     { time: "2023-04-04", value: 180 },
    //     { time: "2023-04-05", value: 200 },
    //     { time: "2023-04-06", value: 10 },
    //     { time: "2023-04-07", value: 90 },
    //     { time: "2023-04-08", value: 170 },
    //     { time: "2023-04-09", value: 80 },
    //     { time: "2023-05-01", value: 200 },
    //     { time: "2023-05-02", value: 150 },
    //     { time: "2023-05-03", value: 120 },
    //     { time: "2023-05-04", value: 180 },
    //     { time: "2023-05-05", value: 200 },
    //     { time: "2023-05-06", value: 10 },
    //     { time: "2023-05-07", value: 90 },
    //     { time: "2023-05-08", value: 170 },
    //     { time: "2023-05-09", value: 80 },
    //     { time: "2023-06-01", value: 280 },
    //     { time: "2023-06-02", value: 150 },
    //     { time: "2023-06-03", value: 120 },
    //     { time: "2023-06-04", value: 180 },
    //     { time: "2023-06-05", value: 200 },
    //     { time: "2023-06-06", value: 10 },
    //     { time: "2023-06-07", value: 90 },
    //     { time: "2023-06-08", value: 170 },
    //     { time: "2023-06-09", value: 80 },
    //     { time: "2023-07-01", value: 100 },
    //     { time: "2023-07-02", value: 150 },
    //     { time: "2023-07-03", value: 120 },
    //     { time: "2023-07-04", value: 180 },
    //     { time: "2023-07-05", value: 200 },
    //     { time: "2023-07-06", value: 10 },
    //     { time: "2023-07-07", value: 90 },
    //     { time: "2023-07-08", value: 170 },
    //     { time: "2023-07-09", value: 80 },
    //     { time: "2023-08-01", value: 100 },
    //     { time: "2023-08-02", value: 150 },
    //     { time: "2023-08-03", value: 120 },
    //     { time: "2023-08-04", value: 180 },
    //     { time: "2023-08-05", value: 200 },
    //     { time: "2023-08-06", value: 10 },
    //     { time: "2023-08-07", value: 90 },
    //     { time: "2023-08-08", value: 170 },
    //     { time: "2023-08-09", value: 80 },
    //     { time: "2023-09-01", value: 100 },
    //     { time: "2023-09-02", value: 150 },
    //     { time: "2023-09-03", value: 120 },
    //     { time: "2023-09-04", value: 180 },
    //     { time: "2023-09-05", value: 200 },
    //     { time: "2023-09-06", value: 10 },
    //     { time: "2023-09-07", value: 90 },
    //     { time: "2023-09-08", value: 170 },
    //     { time: "2023-09-09", value: 80 },
    //     { time: "2023-10-01", value: 100 },
    //     { time: "2023-10-02", value: 150 },
    //     { time: "2023-10-03", value: 120 },
    //     { time: "2023-10-04", value: 180 },
    //     { time: "2023-10-05", value: 200 },
    //     { time: "2023-10-06", value: 10 },
    //     { time: "2023-10-07", value: 90 },
    //     { time: "2023-10-08", value: 170 },
    //     { time: "2023-10-09", value: 80 },
    //     { time: "2023-11-01", value: 100 },
    //     { time: "2023-11-02", value: 150 },
    //     { time: "2023-11-03", value: 120 },
    //     { time: "2023-11-04", value: 180 },
    //     { time: "2023-11-05", value: 200 },
    //     { time: "2023-11-06", value: 10 },
    //     { time: "2023-11-07", value: 90 },
    //     { time: "2023-11-08", value: 170 },
    //     { time: "2023-11-09", value: 80 },
    //     { time: "2023-12-01", value: 100 },
    //     { time: "2023-12-02", value: 150 },
    //     { time: "2023-12-03", value: 120 },
    //     { time: "2023-12-04", value: 180 },
    //     { time: "2023-12-05", value: 200 },
    //     { time: "2023-12-06", value: 10 },
    //     { time: "2023-12-07", value: 90 },
    //     { time: "2023-12-08", value: 170 },
    //     { time: "2023-12-09", value: 80 },
    //   ];

    //   lineSeries1.setData(data1);

    //   // Chart 2
    //   const chartOptions2 = {
    //     width: 200,
    //     height: 150,
    //     grid: {
    //       vertLines: {
    //         // color: '#2B2B43',
    //         visible: false,
    //       },
    //       horzLines: {
    //         // color: '#363C4E',
    //         visible: false,
    //       },
    //     },
    //     rightPriceScale: {
    //       visible: false,
    //     },
    //     // leftPriceScale: {
    //     //     visible: false,
    //     // },
    //     // Add your chart options for chart 2 here
    //   };

    //   const chart2 = createChart(this.$refs.chartContainer2, chartOptions2);

    //   const lineSeries2 = chart2.addAreaSeries({
    //     lineColor: "#33A34D",

    //     lineWidth: 2,
    //     crosshairMarkerVisible: true,
    //     crosshairMarkerRadius: 4,
    //   });

    //   const data2 = [
    //     { time: "2023-03-01", value: 200 },
    //     { time: "2023-03-02", value: 150 },
    //     { time: "2023-03-03", value: 120 },
    //     { time: "2023-03-04", value: 180 },
    //     { time: "2023-03-05", value: 200 },
    //     { time: "2023-03-06", value: 10 },
    //     { time: "2023-03-07", value: 90 },
    //     { time: "2023-03-08", value: 170 },
    //     { time: "2023-03-09", value: 80 },
    //     { time: "2023-04-01", value: 200 },
    //     { time: "2023-04-02", value: 150 },
    //     { time: "2023-04-03", value: 120 },
    //     { time: "2023-04-04", value: 180 },
    //     { time: "2023-04-05", value: 200 },
    //     { time: "2023-04-06", value: 10 },
    //     { time: "2023-04-07", value: 90 },
    //     { time: "2023-04-08", value: 170 },
    //     { time: "2023-04-09", value: 80 },
    //     { time: "2023-05-01", value: 200 },
    //     { time: "2023-05-02", value: 150 },
    //     { time: "2023-05-03", value: 120 },
    //     { time: "2023-05-04", value: 180 },
    //     { time: "2023-05-05", value: 200 },
    //     { time: "2023-05-06", value: 10 },
    //     { time: "2023-05-07", value: 90 },
    //     { time: "2023-05-08", value: 170 },
    //     { time: "2023-05-09", value: 80 },
    //     { time: "2023-06-01", value: 280 },
    //     { time: "2023-06-02", value: 150 },
    //     { time: "2023-06-03", value: 120 },
    //     { time: "2023-06-04", value: 180 },
    //     { time: "2023-06-05", value: 200 },
    //     { time: "2023-06-06", value: 10 },
    //     { time: "2023-06-07", value: 90 },
    //     { time: "2023-06-08", value: 170 },
    //     { time: "2023-06-09", value: 80 },
    //     { time: "2023-07-01", value: 100 },
    //     { time: "2023-07-02", value: 150 },
    //     { time: "2023-07-03", value: 120 },
    //     { time: "2023-07-04", value: 180 },
    //     { time: "2023-07-05", value: 200 },
    //     { time: "2023-07-06", value: 10 },
    //     { time: "2023-07-07", value: 90 },
    //     { time: "2023-07-08", value: 170 },
    //     { time: "2023-07-09", value: 80 },
    //     { time: "2023-08-01", value: 100 },
    //     { time: "2023-08-02", value: 150 },
    //     { time: "2023-08-03", value: 120 },
    //     { time: "2023-08-04", value: 180 },
    //     { time: "2023-08-05", value: 200 },
    //     { time: "2023-08-06", value: 10 },
    //     { time: "2023-08-07", value: 90 },
    //     { time: "2023-08-08", value: 170 },
    //     { time: "2023-08-09", value: 80 },
    //     { time: "2023-09-01", value: 100 },
    //     { time: "2023-09-02", value: 150 },
    //     { time: "2023-09-03", value: 120 },
    //     { time: "2023-09-04", value: 180 },
    //     { time: "2023-09-05", value: 200 },
    //     { time: "2023-09-06", value: 10 },
    //     { time: "2023-09-07", value: 90 },
    //     { time: "2023-09-08", value: 170 },
    //     { time: "2023-09-09", value: 80 },
    //     { time: "2023-10-01", value: 100 },
    //     { time: "2023-10-02", value: 150 },
    //     { time: "2023-10-03", value: 120 },
    //     { time: "2023-10-04", value: 180 },
    //     { time: "2023-10-05", value: 200 },
    //     { time: "2023-10-06", value: 10 },
    //     { time: "2023-10-07", value: 90 },
    //     { time: "2023-10-08", value: 170 },
    //     { time: "2023-10-09", value: 80 },
    //     { time: "2023-11-01", value: 100 },
    //     { time: "2023-11-02", value: 150 },
    //     { time: "2023-11-03", value: 120 },
    //     { time: "2023-11-04", value: 180 },
    //     { time: "2023-11-05", value: 200 },
    //     { time: "2023-11-06", value: 10 },
    //     { time: "2023-11-07", value: 90 },
    //     { time: "2023-11-08", value: 170 },
    //     { time: "2023-11-09", value: 80 },
    //     { time: "2023-12-01", value: 100 },
    //     { time: "2023-12-02", value: 150 },
    //     { time: "2023-12-03", value: 120 },
    //     { time: "2023-12-04", value: 180 },
    //     { time: "2023-12-05", value: 200 },
    //     { time: "2023-12-06", value: 10 },
    //     { time: "2023-12-07", value: 90 },
    //     { time: "2023-12-08", value: 170 },
    //     { time: "2023-12-09", value: 80 },
    //   ];

    //   lineSeries2.setData(data2);

    //   const chartOptions3 = {
    //     width: 850,
    //     height: 320,
    //     crosshair: {
    //       vertLine: {
    //         labelVisible: false,
    //       },
    //     },
    //     leftPriceScale: {
    //       visible: true,
    //       borderVisible: false,
    //     },
    //     rightPriceScale: {
    //       visible: false,
    //       borderVisible: false,
    //     },
    //     grid: {
    //       vertLines: {
    //         // color: '#2B2B43',
    //         visible: false,
    //       },
    //       horzLines: {
    //         // color: '#363C4E',
    //         visible: false,
    //       },
    //       rightPriceScale: {
    //         visible: false,
    //       },
    //     },
    //   };

    //   const chart = createChart(this.$refs.chartContainer3, chartOptions3);

    //   // var chart= createChart(document.getElementById('chartContainer3'), chartOptions3);
    //   var lineSeries3 = chart.addAreaSeries({
    //     lineColor: "#F9CD6C",
    //     // baseValue: { type: 'price', price: 25 },
    //     // topLineColor: 'rgba( 38, 166, 154, 1)', topFillColor1: 'rgba( 38, 166, 154, 0.28)', topFillColor2: 'rgba( 38, 166, 154, 0.05)', bottomLineColor: 'rgba( 239, 83, 80, 1)', bottomFillColor1: 'rgba( 239, 83, 80, 0.05)', bottomFillColor2: 'rgba( 239, 83, 80, 0.28)' ,
    //     lineWidth: 2,
    //     crosshairMarkerVisible: true,
    //     crosshairMarkerRadius: 4,
    //   });
    //   const data3 = [
    //     { time: "2023-09-01", value: 0 },
    //     { time: "2023-09-02", value: -45 },
    //     { time: "2023-09-03", value: 42 },
    //     { time: "2023-09-04", value: 48 },
    //     { time: "2023-09-05", value: 30 },
    //     { time: "2023-09-06", value: 40 },
    //     { time: "2023-09-07", value: 60 },
    //     { time: "2023-09-08", value: 20 },
    //     { time: "2023-09-09", value: 10 },
    //     { time: "2023-09-11", value: 30 },
    //     { time: "2023-09-12", value: 45 },
    //     { time: "2023-10-01", value: 30 },
    //     { time: "2023-10-02", value: 25 },
    //     { time: "2023-10-03", value: 20 },
    //     { time: "2023-10-04", value: 28 },
    //     { time: "2023-10-05", value: 22 },
    //     { time: "2023-10-06", value: 27 },
    //     { time: "2023-10-07", value: 39 },
    //     { time: "2023-10-08", value: 37 },
    //     { time: "2023-10-09", value: 28 },
    //     { time: "2023-11-01", value: 40 },
    //     { time: "2023-11-02", value: 35 },
    //     { time: "2023-11-03", value: 28 },
    //     { time: "2023-11-04", value: 38 },
    //     { time: "2023-11-05", value: 20 },
    //     { time: "2023-11-06", value: 23 },
    //     { time: "2023-11-07", value: 29 },
    //     { time: "2023-11-08", value: 17 },
    //     { time: "2023-11-09", value: 28 },
    //     { time: "2023-12-01", value: 13 },
    //     { time: "2023-12-02", value: 15 },
    //     { time: "2023-12-03", value: 12 },
    //     { time: "2023-12-04", value: 18 },
    //     { time: "2023-12-05", value: 20 },
    //     { time: "2023-12-06", value: 10 },
    //     { time: "2023-12-07", value: 20 },
    //     { time: "2023-12-08", value: 17 },
    //     { time: "2023-12-09", value: 35 },
    //   ];
    //   lineSeries3.setData(data3);
    //   const secondval = chart.addAreaSeries({
    //     lineColor: "#9D70FF",
    //   });
    //   const data4 = [
    //     { time: "2023-09-01", value: 0 },
    //     { time: "2023-09-02", value: 25 },
    //     { time: "2023-09-03", value: 13 },
    //     { time: "2023-09-04", value: 18 },
    //     { time: "2023-09-05", value: 20 },
    //     { time: "2023-09-06", value: 10 },
    //     { time: "2023-09-07", value: 20 },
    //     { time: "2023-09-08", value: 17 },
    //     { time: "2023-09-09", value: 40 },
    //     { time: "2023-09-11", value: 42 },
    //     { time: "2023-09-12", value: 45 },
    //     { time: "2023-10-01", value: 20 },
    //     { time: "2023-10-02", value: 17 },
    //     { time: "2023-10-03", value: 12 },
    //     { time: "2023-10-04", value: 18 },
    //     { time: "2023-10-05", value: 20 },
    //     { time: "2023-10-06", value: 10 },
    //     { time: "2023-10-07", value: 20 },
    //     { time: "2023-10-08", value: 17 },
    //     { time: "2023-10-09", value: 19 },
    //     { time: "2023-11-01", value: 20 },
    //     { time: "2023-11-02", value: 15 },
    //     { time: "2023-11-03", value: 10 },
    //     { time: "2023-11-04", value: 18 },
    //     { time: "2023-11-05", value: 20 },
    //     { time: "2023-11-06", value: 10 },
    //     { time: "2023-11-07", value: 30 },
    //     { time: "2023-11-08", value: 32 },
    //     { time: "2023-11-09", value: 34 },
    //     { time: "2023-12-01", value: 20 },
    //     { time: "2023-12-02", value: 15 },
    //     { time: "2023-12-03", value: 31 },
    //     { time: "2023-12-04", value: 18 },
    //     { time: "2023-12-05", value: 20 },
    //     { time: "2023-12-06", value: 10 },
    //     { time: "2023-12-07", value: 26 },
    //     { time: "2023-12-08", value: 37 },
    //     { time: "2023-12-09", value: 30 },
    //   ];
    //   secondval.setData(data4);
    //   const thirdval = chart.addAreaSeries({
    //     lineColor: "#EE89DF",
    //   });
    //   const data5 = [
    //     { time: "2023-09-01", value: 0 },
    //     { time: "2023-09-02", value: -15 },
    //     { time: "2023-09-03", value: 22 },
    //     { time: "2023-09-04", value: 18 },
    //     { time: "2023-09-05", value: 20 },
    //     { time: "2023-09-06", value: 10 },
    //     { time: "2023-09-07", value: 40 },
    //     { time: "2023-09-08", value: 10 },
    //     { time: "2023-09-09", value: 30 },
    //     { time: "2023-09-11", value: 20 },
    //     { time: "2023-09-12", value: 25 },
    //     { time: "2023-10-01", value: 10 },
    //     { time: "2023-10-02", value: 15 },
    //     { time: "2023-10-03", value: 12 },
    //     { time: "2023-10-04", value: 18 },
    //     { time: "2023-10-05", value: 20 },
    //     { time: "2023-10-06", value: 10 },
    //     { time: "2023-10-07", value: 29 },
    //     { time: "2023-10-08", value: 17 },
    //     { time: "2023-10-09", value: 28 },
    //     { time: "2023-11-01", value: 10 },
    //     { time: "2023-11-02", value: 15 },
    //     { time: "2023-11-03", value: 12 },
    //     { time: "2023-11-04", value: 18 },
    //     { time: "2023-11-05", value: 20 },
    //     { time: "2023-11-06", value: 10 },
    //     { time: "2023-11-07", value: 29 },
    //     { time: "2023-11-08", value: 17 },
    //     { time: "2023-11-09", value: 28 },
    //     { time: "2023-12-01", value: 13 },
    //     { time: "2023-12-02", value: 15 },
    //     { time: "2023-12-03", value: 12 },
    //     { time: "2023-12-04", value: 18 },
    //     { time: "2023-12-05", value: 20 },
    //     { time: "2023-12-06", value: 10 },
    //     { time: "2023-12-07", value: 20 },
    //     { time: "2023-12-08", value: 17 },
    //     { time: "2023-12-09", value: 35 },
    //   ];
    //   thirdval.setData(data5);

    //   document.body.style.position = "relative";
    //   var container = document.createElement("div");
    //   document.body.appendChild(container);

    //   var toolTipWidth = 100;
    //   var toolTipHeight = 80;
    //   var toolTipMargin = 15;
    //   var toolTip = document.createElement("div");
    //   toolTip.style = `width: 96px; height: 80px; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
    //   toolTip.style.background = "white";
    //   toolTip.style.color = "black";
    //   toolTip.style.borderColor = "rgba(0, 150, 136, 1)";
    //   //   toolTip.className = "floating-tooltip";
    //   container.appendChild(toolTip);
    //   chart.subscribeCrosshairMove((param) => {
    //     console.log("parma", param);
    //     if (
    //       param.point === undefined ||
    //       !param.time ||
    //       param.point.x < 0 ||
    //       param.point.x > chart.clientWidth ||
    //       param.point.y < 0 ||
    //       param.point.y > chart.clientHeight
    //     ) {
    //       toolTip.style.display = "none";
    //     } else {
    //       // time will be in the same format that we supplied to setData.
    //       // thus it will be YYYY-MM-DD
    //       // const dateStr = param.time;
    //       // console.log('str dates',dateStr)
    //       toolTip.style.display = "block";
    //       var data = param.seriesData.get(lineSeries3);
    //       // const secdata= param.seriesData.get(secondval);
    //       var price = data.value !== undefined ? data.value : data.close;
    //       // const secprice = secdata.value !== undefined ? data.value : data.close;
    //       console.log("param1", price);
    //       // toolTip.innerHTML = `<div style="color: ${'rgba(0, 150, 136, 1)'}">Apple Inc.</div><div style="font-size: 24px; margin: 4px 0px; color: ${'black'}">
    //       // 	${Math.round(100 * price) / 100}

    //       // 	</div><div style="color: ${'black'}">
    //       // 	${dateStr}
    //       // 	</div>`;
    //       toolTip.innerHTML =
    //         '<div style="color: #2196f3; font-size: 12px; margin: 4px 0px; ">Relance</div><div style="font-size: 24px; margin: 6px 0px; id=text;>' +
    //         Math.round(100 * price) / 100 +
    //         "</div>";
    //       var coordinate = lineSeries3.priceToCoordinate(price);
    //       var shiftedCoordinate = param.point.x - 50;
    //       if (coordinate === null) {
    //         return;
    //       }
    //       shiftedCoordinate = Math.max(
    //         0,
    //         Math.min(container.clientWidth - toolTipWidth, shiftedCoordinate)
    //       );
    //       var coordinateY =
    //         coordinate - toolTipHeight - toolTipMargin > 0
    //           ? coordinate - toolTipHeight - toolTipMargin
    //           : Math.max(
    //               0,
    //               Math.min(
    //                 container.clientHeight - toolTipHeight - toolTipMargin,
    //                 coordinate + toolTipMargin
    //               )
    //             );

    //       toolTip.style.left = shiftedCoordinate + "px";
    //       toolTip.style.top = coordinateY + "px";
    //     }
    //   });
    //   this.createChartsred();
    // },
    createlinechrt() {
     
     const newchart=  {
      // width:270,
        height: 150,
      autoSize: true,
       rightPriceScale: {
               visible: false,
             },
       timeScale: {
         borderVisible: false,
       },
       layout: {
         backgroundColor: '#ffffff',
         textColor: '#333',
         fontFamily: "'Inter var', sans-serif"
       },
       grid: {
         // horzLines: {
         //   color: '#eee',
         // },
         // vertLines: {
         //   color: '#ffffff',
         // },
         vertLines: {
           visible: false,
         },
         horzLines: {
           visible: false,
         },
       },
       crosshair: {
         horzLine: {
           visible: false,
           labelVisible: false,
         },
         vertLine: {
           labelVisible: false,
         },
       },
     };
     
     
     
     // newchart.resize(width, height);
     const chartvolume = createChart(this.$refs.volumchart, newchart);
    //  const chartvolume = createChart(document.getElementById('volumchart'), newchart);
     var seriesline = chartvolume.addLineSeries({
      //  topColor: 'rgba(0, 150, 136, 0.56)',
      //  bottomColor: 'rgba(0, 150, 136, 0.04)',
      color: 'rgba(67, 168, 51, 1)',
       lineWidth: 2,
       crossHairMarkerVisible: false,
                 // fontFamily: "'Inter', sans-serif"
     });
     const voldata =[
       { time: "2018-03-28", value: 154 },
       { time: "2018-03-29", value: 154.2 },
       { time: "2018-03-30", value: 155.60001 },
       { time: "2018-04-02", value: 156.25 },
       { time: "2018-04-03", value: 156.25 },
       { time: "2018-04-04", value: 156.05 },
       { time: "2018-04-05", value: 158.05 },
       { time: "2018-04-06", value: 157.3 },
       { time: "2018-04-09", value: 144 },
       { time: "2018-04-10", value: 144.8 },
       { time: "2018-04-11", value: 143.5 },
       { time: "2018-04-12", value: 147.05 },
       { time: "2018-04-13", value: 144.85001 },
       { time: "2018-04-16", value: 145.39999 },
       { time: "2018-04-17", value: 147.3 },
       { time: "2018-04-18", value: 153.55 },
       { time: "2018-04-19", value: 150.95 },
       { time: "2018-04-20", value: 149.39999 },
       { time: "2018-04-23", value: 148.5 },
       { time: "2018-04-24", value: 146.60001 },
       { time: "2018-04-25", value: 144.45 },
       { time: "2018-04-26", value: 145.60001 },
       { time: "2018-04-27", value: 144.3 },
       { time: "2018-04-30", value: 144 },
       { time: "2018-05-02", value: 147.3 },
       { time: "2018-05-03", value: 144.2 },
       { time: "2018-05-04", value: 141.64999 },
       { time: "2018-05-07", value: 141.89999 },
       { time: "2018-05-08", value: 140.39999 },
       { time: "2018-05-10", value: 139.8 },
       { time: "2018-05-11", value: 137.5 },
       { time: "2018-05-14", value: 136.14999 },
       { time: "2018-05-15", value: 138 },
       { time: "2018-05-16", value: 137.95 },
       { time: "2018-05-17", value: 137.95 },
       { time: "2018-05-18", value: 136.75 },
       { time: "2018-05-21", value: 136.2 },
       { time: "2018-05-22", value: 135 },
       { time: "2018-05-23", value: 132.55 },
       { time: "2018-05-24", value: 132.7 },
       { time: "2018-05-25", value: 132.2 },
       { time: "2018-05-28", value: 131.55 },
       { time: "2018-05-29", value: 131.85001 },
       { time: "2018-05-30", value: 139.85001 },
       { time: "2018-05-31", value: 140.8 },
       { time: "2018-06-01", value: 139.64999 },
       { time: "2018-06-04", value: 137.10001 },
       { time: "2018-06-05", value: 139.25 },
       { time: "2018-06-06", value: 141.3 },
       { time: "2018-06-07", value: 145 },
       { time: "2018-06-08", value: 143.89999 },
       { time: "2018-06-11", value: 142.7 },
       { time: "2018-06-13", value: 144.05 },
       { time: "2018-06-14", value: 143.55 },
       { time: "2018-06-15", value: 140.5 },
       { time: "2018-06-18", value: 139.64999 },
       { time: "2018-06-19", value: 138 },
       { time: "2018-06-20", value: 141 },
       { time: "2018-06-21", value: 140.55 },
       { time: "2018-06-22", value: 140.55 },
       { time: "2018-06-25", value: 140.75 },
       { time: "2018-06-26", value: 140.64999 },
       { time: "2018-06-27", value: 141.14999 },
       { time: "2018-06-28", value: 139.8 },
       { time: "2018-06-29", value: 139.8 },
       { time: "2018-07-02", value: 140.14999 },
       { time: "2018-07-03", value: 143.05 },
       { time: "2018-07-04", value: 140 },
       { time: "2018-07-05", value: 129.2 },
       { time: "2018-07-06", value: 129.55 },
       { time: "2018-07-09", value: 128.3 },
       { time: "2018-07-10", value: 126.55 },
       { time: "2018-07-11", value: 124.3 },
       { time: "2018-07-12", value: 124.8 },
       { time: "2018-07-13", value: 123.25 },
       { time: "2018-07-16", value: 123 },
       { time: "2018-07-17", value: 124.25 },
       { time: "2018-07-18", value: 123 },
       { time: "2018-07-19", value: 121 },
       { time: "2018-07-20", value: 121.45 },
       { time: "2018-07-23", value: 123.8 },
       { time: "2018-07-24", value: 122.15 },
       { time: "2018-07-25", value: 121.3 },
       { time: "2018-07-26", value: 122.7 },
       { time: "2018-07-27", value: 122.2 },
       { time: "2018-07-30", value: 121.7 },
       { time: "2018-07-31", value: 122.95 },
       { time: "2018-08-01", value: 121 },
       { time: "2018-08-02", value: 116 },
       { time: "2018-08-03", value: 118.1 },
       { time: "2018-08-06", value: 114.3 },
       { time: "2018-08-07", value: 114.25 },
       { time: "2018-08-08", value: 111.85 },
       { time: "2018-08-09", value: 109.7 },
       { time: "2018-08-10", value: 105 },
       { time: "2018-08-13", value: 105.75 },
       { time: "2018-08-14", value: 107.25 },
       { time: "2018-08-15", value: 107.4 },
       { time: "2018-08-16", value: 110.5 },
       { time: "2018-08-17", value: 109 },
       { time: "2018-08-20", value: 108.95 },
       { time: "2018-08-21", value: 108.35 },
       { time: "2018-08-22", value: 108.6 },
       { time: "2018-08-23", value: 105.65 },
       { time: "2018-08-24", value: 104.45 },
       { time: "2018-08-27", value: 106.2 },
       { time: "2018-08-28", value: 106.55 },
       { time: "2018-08-29", value: 111.8 },
       { time: "2018-08-30", value: 115.5 },
       { time: "2018-08-31", value: 115.5 },
       { time: "2018-09-03", value: 114.55 },
       { time: "2018-09-04", value: 112.75 },
       { time: "2018-09-05", value: 111.5 },
       { time: "2018-09-06", value: 108.1 },
       { time: "2018-09-07", value: 108.55 },
       { time: "2018-09-10", value: 106.5 },
       { time: "2018-09-11", value: 105.1 },
       { time: "2018-09-12", value: 107.2 },
       { time: "2018-09-13", value: 107.1 },
       { time: "2018-09-14", value: 105.75 },
       { time: "2018-09-17", value: 106.05 },
       { time: "2018-09-18", value: 109.15 },
       { time: "2018-09-19", value: 111.4 },
       { time: "2018-09-20", value: 111 },
       { time: "2018-09-21", value: 111 },
       { time: "2018-09-24", value: 108.95 },
       { time: "2018-09-25", value: 106.65 },
       { time: "2018-09-26", value: 106.7 },
       { time: "2018-09-27", value: 107.05 },
       { time: "2018-09-28", value: 106.55 },
       { time: "2018-10-01", value: 106.2 },
       { time: "2018-10-02", value: 106.4 },
       { time: "2018-10-03", value: 107.1 },
       { time: "2018-10-04", value: 106.4 },
       { time: "2018-10-05", value: 104.65 },
       { time: "2018-10-08", value: 102.65 },
       { time: "2018-10-09", value: 102.1 },
       { time: "2018-10-10", value: 102.15 },
       { time: "2018-10-11", value: 100.9 },
       { time: "2018-10-12", value: 102 },
       { time: "2018-10-15", value: 100.15 },
       { time: "2018-10-16", value: 99 },
       { time: "2018-10-17", value: 98 },
       { time: "2018-10-18", value: 96 },
       { time: "2018-10-19", value: 95.5 },
       { time: "2018-10-22", value: 92.400002 },
       { time: "2018-10-23", value: 92.300003 },
       { time: "2018-10-24", value: 92.900002 },
       { time: "2018-10-25", value: 91.849998 },
       { time: "2018-10-26", value: 91.599998 },
       { time: "2018-10-29", value: 94.050003 },
       { time: "2018-10-30", value: 98.25 },
       { time: "2018-10-31", value: 97.25 },
       { time: "2018-11-01", value: 96.879997 },
       { time: "2018-11-02", value: 101.78 },
       { time: "2018-11-06", value: 102.4 },
       { time: "2018-11-07", value: 100.6 },
       { time: "2018-11-08", value: 98.5 },
       { time: "2018-11-09", value: 95.139999 },
       { time: "2018-11-12", value: 96.900002 },
       { time: "2018-11-13", value: 97.400002 },
       { time: "2018-11-14", value: 103.3 },
       { time: "2018-11-15", value: 102.74 },
       { time: "2018-11-16", value: 101.2 },
       { time: "2018-11-19", value: 98.720001 },
       { time: "2018-11-20", value: 102.2 },
       { time: "2018-11-21", value: 108.8 },
       { time: "2018-11-22", value: 109.9 },
       { time: "2018-11-23", value: 113.74 },
       { time: "2018-11-26", value: 110.9 },
       { time: "2018-11-27", value: 113.28 },
       { time: "2018-11-28", value: 113.6 },
       { time: "2018-11-29", value: 113.14 },
       { time: "2018-11-30", value: 114.4 },
       { time: "2018-12-03", value: 111.84 },
       { time: "2018-12-04", value: 106.7 },
       { time: "2018-12-05", value: 107.8 },
       { time: "2018-12-06", value: 106.44 },
       { time: "2018-12-07", value: 103.7 },
       { time: "2018-12-10", value: 101.02 },
       { time: "2018-12-11", value: 102.72 },
       { time: "2018-12-12", value: 101.8 },
       { time: "2018-12-13", value: 102 },
       { time: "2018-12-14", value: 102.1 },
       { time: "2018-12-17", value: 101.04 },
       { time: "2018-12-18", value: 101.6 },
       { time: "2018-12-19", value: 102 },
       { time: "2018-12-20", value: 102.02 },
       { time: "2018-12-21", value: 102.2 },
       { time: "2018-12-24", value: 102.1 },
       { time: "2018-12-25", value: 100.8 },
       { time: "2018-12-26", value: 101.02 },
       { time: "2018-12-27", value: 100.5 },
       { time: "2018-12-28", value: 101 },
       { time: "2019-01-03", value: 101.5 },
       { time: "2019-01-04", value: 101.1 },
       { time: "2019-01-08", value: 101.1 },
       { time: "2019-01-09", value: 102.06 },
       { time: "2019-01-10", value: 105.14 },
       { time: "2019-01-11", value: 104.66 },
       { time: "2019-01-14", value: 106.22 },
       { time: "2019-01-15", value: 106.98 },
       { time: "2019-01-16", value: 108.4 },
       { time: "2019-01-17", value: 109.06 },
       { time: "2019-01-18", value: 107 },
       { time: "2019-01-21", value: 105.8 },
       { time: "2019-01-22", value: 105.24 },
       { time: "2019-01-23", value: 105.4 },
       { time: "2019-01-24", value: 105.38 },
       { time: "2019-01-25", value: 105.7 },
       { time: "2019-01-28", value: 105.8 },
       { time: "2019-01-29", value: 106.1 },
       { time: "2019-01-30", value: 108.6 },
       { time: "2019-01-31", value: 107.92 },
       { time: "2019-02-01", value: 105.22 },
       { time: "2019-02-04", value: 102.44 },
       { time: "2019-02-05", value: 102.26 },
       { time: "2019-02-06", value: 102 },
       { time: "2019-02-07", value: 101.62 },
       { time: "2019-02-08", value: 101.9 },
       { time: "2019-02-11", value: 101.78 },
       { time: "2019-02-12", value: 102.7 },
       { time: "2019-02-13", value: 100.14 },
       { time: "2019-02-14", value: 101.36 },
       { time: "2019-02-15", value: 101.62 },
       { time: "2019-02-18", value: 100.74 },
       { time: "2019-02-19", value: 100 },
       { time: "2019-02-20", value: 100.04 },
       { time: "2019-02-21", value: 100 },
       { time: "2019-02-22", value: 100.12 },
       { time: "2019-02-25", value: 100.04 },
       { time: "2019-02-26", value: 98.980003 },
       { time: "2019-02-27", value: 97.699997 },
       { time: "2019-02-28", value: 97.099998 },
       { time: "2019-03-01", value: 96.760002 },
       { time: "2019-03-04", value: 98.360001 },
       { time: "2019-03-05", value: 96.260002 },
       { time: "2019-03-06", value: 98.120003 },
       { time: "2019-03-07", value: 99.68 },
       { time: "2019-03-11", value: 102.1 },
       { time: "2019-03-12", value: 100.22 },
       { time: "2019-03-13", value: 100.5 },
       { time: "2019-03-14", value: 99.660004 },
       { time: "2019-03-15", value: 100.08 },
       { time: "2019-03-18", value: 99.919998 },
       { time: "2019-03-19", value: 99.459999 },
       { time: "2019-03-20", value: 98.220001 },
       { time: "2019-03-21", value: 97.300003 },
       { time: "2019-03-22", value: 97.660004 },
       { time: "2019-03-25", value: 97 },
       { time: "2019-03-26", value: 97.019997 },
       { time: "2019-03-27", value: 96.099998 },
       { time: "2019-03-28", value: 96.699997 },
       { time: "2019-03-29", value: 96.300003 },
       { time: "2019-04-01", value: 97.779999 },
       { time: "2019-04-02", value: 98.360001 },
       { time: "2019-04-03", value: 98.5 },
       { time: "2019-04-04", value: 98.360001 },
       { time: "2019-04-05", value: 99.540001 },
       { time: "2019-04-08", value: 98.580002 },
       { time: "2019-04-09", value: 97.239998 },
       { time: "2019-04-10", value: 97.32 },
       { time: "2019-04-11", value: 98.400002 },
       { time: "2019-04-12", value: 98.220001 },
       { time: "2019-04-15", value: 98.720001 },
       { time: "2019-04-16", value: 99.120003 },
       { time: "2019-04-17", value: 98.620003 },
       { time: "2019-04-18", value: 98 },
       { time: "2019-04-19", value: 97.599998 },
       { time: "2019-04-22", value: 97.599998 },
       { time: "2019-04-23", value: 96.800003 },
       { time: "2019-04-24", value: 96.32 },
       { time: "2019-04-25", value: 96.339996 },
       { time: "2019-04-26", value: 97.120003 },
       { time: "2019-04-29", value: 96.980003 },
       { time: "2019-04-30", value: 96.32 },
       { time: "2019-05-02", value: 96.860001 },
       { time: "2019-05-03", value: 96.699997 },
       { time: "2019-05-06", value: 94.940002 },
       { time: "2019-05-07", value: 94.5 },
       { time: "2019-05-08", value: 94.239998 },
       { time: "2019-05-10", value: 92.900002 },
       { time: "2019-05-13", value: 91.279999 },
       { time: "2019-05-14", value: 91.599998 },
       { time: "2019-05-15", value: 90.080002 },
       { time: "2019-05-16", value: 91.68 },
       { time: "2019-05-17", value: 91.959999 },
       { time: "2019-05-20", value: 91.080002 },
       { time: "2019-05-21", value: 90.760002 },
       { time: "2019-05-22", value: 91 },
       { time: "2019-05-23", value: 90.739998 },
       { time: "2019-05-24", value: 91 },
       { time: "2019-05-27", value: 91.199997 },
       { time: "2019-05-28", value: 90.68 },
       { time: "2019-05-29", value: 91.120003 },
       { time: "2019-05-30", value: 90.419998 },
       { time: "2019-05-31", value: 93.800003 },
       { time: "2019-06-03", value: 96.800003 },
       { time: "2019-06-04", value: 96.34 },
       { time: "2019-06-05", value: 95.94}
     ];
    //  const x =voldata.slice(-1)
    //  for(var i=0; i<x.length ; i++){ 
    //  const k = x[i].value
    //  console.log(k, 'value')
    //  }
     const voldata2=[
     { time: "2019-06-05", value: 95.94 },
       { time: "2019-06-07", value: 100.2 },
       { time: "2019-06-08", value: 110.60001 },
       { time: "2019-06-11", value: 120.25 },
       { time: "2019-06-12", value: 130.25 },
       { time: "2019-06-13", value: 140.25 },
       { time: "2019-06-14", value: 150.25 },
     ]
     var seriesline2 = chartvolume.addAreaSeries({
       topColor: 'rgba(0, 150, 136, 0.56)',
       bottomColor: 'rgba(0, 150, 136, 0.04)',
       lineColor: 'rgba(124, 211, 110, 1)',
       lineWidth: 2,
       
                 // fontFamily: "'Inter', sans-serif"
       
     });
     const voldata3=[
     { time: "2019-06-05", value: 95.94 },
       { time: "2019-06-07", value: 115.2 },
       { time: "2019-06-08", value: 122.60001 },
       { time: "2019-06-11", value: 129.25 },
       { time: "2019-06-12", value: 135.25 },
       { time: "2019-06-13", value: 138.25 },
       { time: "2019-06-14", value: 146.25 },
     ]
     var seriesline3 = chartvolume.addAreaSeries({
       topColor: 'rgba(0, 150, 136, 0.56)',
       bottomColor: 'rgba(0, 150, 136, 0.04)',
       lineColor: 'rgba(20, 133, 100, 1)' ,
       lineWidth: 2,
       
                 // fontFamily: "'Inter', sans-serif"
       
     });
     const voldata4=[
     { time: "2019-06-05", value: 95.94 },
       { time: "2019-06-07", value: 96.2 },
       { time: "2019-06-08", value: 94.60001 },
       { time: "2019-06-11", value: 93.25 },
       { time: "2019-06-12", value: 92.25 },
       { time: "2019-06-13", value: 88.25 },
       { time: "2019-06-14", value: 84.25 },
     ]
     var seriesline4 = chartvolume.addAreaSeries({
       topColor: 'rgba(0, 150, 136, 0.56)',
       bottomColor: 'rgba(0, 150, 136, 0.04)',
       lineColor: 'rgba(246, 207, 125, 1)',
       lineWidth: 2,
       
                 // fontFamily: "'Inter', sans-serif"
       
     });
     seriesline4.setData(voldata4)
     seriesline3.setData(voldata3)
     seriesline.setData(voldata)
     seriesline2.setData(voldata2)
     console.log(voldata.slice(-1))
     
     document.body.style.position = "relative";
           var volumchart = document.createElement("div");
           document.body.appendChild(volumchart);
           var toolTipWidth = 100;
           var toolTipHeight = 80;
           var toolTipMargin = 15;
           var toolTip = document.createElement("div");
           // toolTip.style =  `width: 96px; height: 80px; position: absolute; display: none; padding: 8px; box-sizing: border-box; font-size: 12px; text-align: left; z-index: 1000; top: 12px; left: 12px; pointer-events: none; border: 1px solid; border-radius: 2px;font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`;
           // toolTip.style.background = 'white';
           // toolTip.style.color = 'black';
           // toolTip.style.borderColor = 'rgba(0, 150, 136, 1)';
           toolTip.className = "floating";
           volumchart.appendChild(toolTip);
           chartvolume.subscribeCrosshairMove(param => {
             console.log("parma", param);
             if ( param.point === undefined  || !param.time || param.point.x < 0 || param.point.x > chartvolume.clientWidth || param.point.y < 0 || param.point.y > chartvolume.clientHeight ) {
               toolTip.style.display = "none";
             } else if(param.value == undefined) {
               // time will be in the same format that we supplied to setData.
               // thus it will be YYYY-MM-DD
               // const dateStr = param.time;
               // console.log('str dates',dateStr)
               toolTip.style.display = "block";
               var data = param.seriesData.get(seriesline);
               
               if(data){
               var price = data.value 
               // toolTip.innerHTML = `<div style="display: flex;flex-wrap: nowrap;"><img src="${require('@/assets/volume.svg')}" ></img><div style="display: flex;flex-wrap: wrap;"><div style="display: flex;flex-wrap: nowrap;"><div  style="text-align: left;color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Relance</div><div style="Line-height:14px;text-align:right;font-size: 16px; margin: 4px 6px ;color:"#f2f7f7";font-family: "Inter", sans-serif;   id=text;>` + Math.round(100 * price) / 100+ "</div></div>"+'<div style="display: flex;flex-wrap: nowrap;"><div  style="text-align: left;color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Relance</div><div style="Line-height:14px;text-align:right;font-size: 16px; margin: 4px 6px ;color:"#f2f7f7";font-family: "Inter", sans-serif;   id=text;>' + Math.round(100 * price) / 100+ "</div></div>"+'<div style="display: flex;flex-wrap: nowrap;"><div  style="text-align: left;color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Relance</div><div style="Line-height:14px;text-align:right;font-size: 16px; margin: 4px 6px ;color:"#f2f7f7";font-family: "Inter", sans-serif;   id=text;>' + Math.round(100 * price) / 100+ "</div></div>"+"</div>";
               toolTip.innerHTML = `<div style="display: flex;flex-wrap: nowrap;"><div style="display: flex;flex-wrap: wrap;"><div style="display: flex;flex-wrap: nowrap;"><div  style="text-align: left;color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Relance</div><div style="Line-height:14px;text-align:right;font-size: 16px; margin: 4px 6px ;color:"#f2f7f7";font-family: "Inter", sans-serif;   id=text;>` + Math.round(100 * price) / 100+ "</div></div>"+"</div>";
               // toolTip.innerHTML = `<div style="background-image:${('/assets/volume.svg')}"></div><div style="display: flex;flex-wrap: wrap;"><div style="margin:6px 10px 6px 0px; background-color: rgba(249, 205, 108, 1);width: 10px;padding: 2px;"></div><div  style="text-align: left;color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Relance</div><div style="Line-height:14px;text-align:right;font-size: 16px; margin: 4px 6px ;color:"#f2f7f7";font-family: "Inter", sans-serif;   id=text;>` + Math.round(100 * price) / 100+ "</div></div>";
               // toolTip.innerHTML = '<div style="display: flex;flex-wrap: wrap;">'+'<div style="margin:20px 0px 0px 0px;background-color: rgba(249, 205, 108, 1);position: absolute;  width: 100px;height: 60px;border-top-right-radius: 0px ;border-top-left-radius:  100px 60px;"></div>'+'<div style="background-color: rgba(157, 112, 255, 1); margin:0px 0px 0px 0px;  width: 100px;height: 60px;border-top-right-radius: 0px ;border-top-left-radius:  100px 60px;"></div>'+'<div style="background-color: rgba(238, 137, 223, 1); margin:40px 0px 0px 0px; position: absolute;  width: 100px;height: 60px;border-top-right-radius: 0px ;border-top-left-radius:  100px 60px;"></div>'+'</div>';
               // toolTip.innerHTML = '<div style="display: flex;flex-wrap: wrap;">'+'<div style="-webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);background: #4AA555;height: 2em;width: 30em;background-image: -webkit-linear-gradient(left, #EC5726, #EC5726);background-position: -30em 0;background-repeat: no-repeat;-webkit-animation: up-and-down 1.5s infinite;;  width: 100px;height: 60px;border-top-right-radius: 0px ;border-top-left-radius:  100px 60px;"></div>'+'<div style=";    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);background: #4AA555;height: 2em;width: 30em;background-image: -webkit-linear-gradient(left, #EC5726, #EC5726);background-position: -30em 0;background-repeat: no-repeat;-webkit-animation: up-and-down 1.5s infinite;background-color: rgba(157, 112, 255, 1); margin:0px 0px 0px 0px;  width: 100px;height: 60px;border-top-right-radius: 0px ;border-top-left-radius:  100px 60px;"></div>'+'<div style="    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%);background: #4AA555;height: 2em;width: 30em;background-image: -webkit-linear-gradient(left, #EC5726, #EC5726);background-position: -30em 0;background-repeat: no-repeat;-webkit-animation: up-and-down 1.5s infinite; background-color: rgba(238, 137, 223, 1); margin:40px 0px 0px 0px; position: absolute;  width: 100px;height: 60px;border-top-right-radius: 0px ;border-top-left-radius:  100px 60px;"></div>'+'</div>';
             }
               // '<div style="display: flex;flex-wrap: wrap;"><div style="color: #2196f3; font-size: 12px; margin: 4px 0px; ">Relance</div><div style="font-size: 24px; margin: 6px 0px ;color="#f2f7f7"; id=text;>' +'<br>'+ Math.round(100 * secprice) / 100+'<br>'+ Math.round(100 * thirprice) / 100+"</div></div>";
               else{
           
           toolTip.style.display = "block";
           var data1 = param.seriesData.get(seriesline2);
               var data2 = param.seriesData.get(seriesline3);
               var data3 = param.seriesData.get(seriesline4);
               console.log(data1.value, data2.value,data3.value ,'jdi')
               toolTip.innerHTML = `<div style="display: flex;flex-wrap: nowrap;"><div style="display: flex;flex-wrap: wrap;"><div style="display: flex;flex-wrap: nowrap;"><div  style="text-align: left;color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Relance</div><div style="Line-height:14px;text-align:right;font-size: 16px; margin: 4px 6px ;color:"#f2f7f7";font-family: "Inter", sans-serif;   id=text;>` + Math.round(100 * data1.value) / 100+ "</div></div>"+'<div style="display: flex;flex-wrap: nowrap;"><div  style="text-align: left;color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Relance</div><div style="Line-height:14px;text-align:right;font-size: 16px; margin: 4px 6px ;color:"#f2f7f7";font-family: "Inter", sans-serif;   id=text;>' + Math.round(100 * data2.value) / 100+ "</div></div>"+'<div style="display: flex;flex-wrap: nowrap;"><div  style="text-align: left;color: #2196f3; font-size: 14px; margin: 4px 0px 0px 0px; ">Relance</div><div style="Line-height:14px;text-align:right;font-size: 16px; margin: 4px 6px ;color:"#f2f7f7";font-family: "Inter", sans-serif;   id=text;>' + Math.round(100 * data3.value) / 100+ "</div></div>"+"</div>";
               var coordinate2 = seriesline2.priceToCoordinate(data1.value);
               var coordinate3 = seriesline3.priceToCoordinate(data2.value);
             }
               toolTip.style.top = coordinateYaxis +  "px";
               var coordinate = seriesline.priceToCoordinate(price);
            
               console.log(coordinate,'jasddj',coordinate2,coordinate3)
               var shiftedCoordinate=''
               if(param.point.x !== "244.453125"){
                shiftedCoordinate= param.point.x + 130
               }else{
                shiftedCoordinate= param.point.x + 90
               }             
               if (coordinate === null && coordinate2 === null && coordinate3 === null) {
                 return;
               }
               shiftedCoordinate = Math.max(0,Math.min(volumchart.clientWidth - toolTipWidth, shiftedCoordinate));
               var coordinateYaxis = coordinate - toolTipHeight - toolTipMargin > 0 ? coordinate - toolTipHeight - toolTipMargin : Math.max(0,Math.min(volumchart.clientHeight - toolTipHeight - toolTipMargin,coordinate + toolTipMargin));
               toolTip.style.left = shiftedCoordinate + "px";
               toolTip.style.top = coordinateYaxis + 1850 + "px";
         }
        //  chartvolume.timeScale().fitContent();
           });
           chartvolume.timeScale().fitContent();
          },
          sharebarchart(){
          
          const datalabels = [
              // { year: "2017", count: 2370 },
              // // { year: '09:05 AM', count: 2365 },
        
              // { year: "2018", count: 2380 },
              { year: "2019", count: 2390 },
              { year: "2020", count: 2405 },
              { year: "2021", count: 2330 },
              { year: "2022", count: 2380 },
              { year: "2023", count: 2410 },
            ];
        const datas = {
          labels: datalabels.map((row) => row.year),
          datasets: [{
            label: false,
            data: [ 80, 81, 56, 55, 40],
            backgroundColor: [
            // 'rgba(182, 176, 251, 1)'
            'rgba(20, 133, 100, 1)'
            ],
            borderColor: [
            // 'rgba(182, 176, 251, 1)'
            'rgba(20, 133, 100, 1)'
            ],
            borderWidth: 1
          }]
        };
        new Chart(this.$el.querySelector('#sharholders'),{
          // labels: datalabels
          plugins: [ChartDataLabels],
          type: 'bar',
          data: datas,
          options: {
            layout: {
                    padding: {
                      top:10
                    }
                },
            scales: {
              xAxes: [{
                // gridLines: {
                //     drawBorder: false,
                // }
              
            }],
            
                y: {
                  beginAtZero: true,
                  border: {
                display: false,
              },
                  grid:{
                      display:false,
                      
                  },
                  ticks: {
                        display: false
                    },
                //     title: {
                //   font: {
                //     family: "'Inter', sans-serif",
                //   },
                // }, 
                },
                x: {
                  beginAtZero: true,
                  grid:{
                      display:false
                  },
                  title: {
                  font: {
                    family: "'Inter', sans-serif",
                  },
                }, 
                }
                
              },
            plugins: {
              tooltip:{
                enabled: false,
              },
              datalabels: {
                    anchor: 'end',
                    align: 'top',
                    // formatter: Math.round + '%',
                    formatter: function(val){
                      return Math.round(val) + '%'
                    },
                    font: {
                        weight: 'bold',
                        size: 12,
                        family: "'Inter', sans-serif",
                    }
                },
                legend: {
                  padding:10,
                      display: false,
                      labels: { 
                      font: {
                      family: "'Inter', sans-serif", 
                    }
                  }
                }
            },
          }
        
        })
         },
},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // this.createCharts();
    this.createlinechrt();
    this.threelinechart();
    this.linebarchart();
    this.sharebarchart();
    // this.pricebar();
    
    const container = this.$refs.chartContainer;
		const widgetOptions = {
			symbol: this.symbol ,
			// BEWARE: no trailing slash is expected in feed URL
			datafeed: this.datafeedUrl ,
      save_image: false,
			interval: this.interval,
			container: container,
			library_path: this.libraryPath,
      auto_save_delay: 5,
      timezone: "Asia/Kolkata",
			locale: 'en',
      theme: "White",
      disableUndo:this.disableUndo,
      // "use_localstorage_for_settings",
      disabled_features: [
          "watchlist_import_export",
          "header_saveload",
          'left_toolbar','right_toolbar'
          , 'border_around_the_chart',
          "study_templates", 
          "header_symbol_search",
          "main_series_scale_menu",
          "study_symbol_ticker_description",
          "context_menus",
          "scales_date_format",
          "chart_crosshair_menu",
          "chart_property_page_scales",
          "symbol_info_price_source",
          "header_resolutions",
          "header_chart_type",
          // "object_tree_legend_mode",
          // "display_market_status",
          // "show_interval_dialog_on_key_press",
          "legend_widget",
          "chart_property_page_right_margin_editor",
          "chart_style_hilo",
          "chart_style_hilo_last_price",
          // "show_last_price_and_change_only_in_series_legend",
          "header_screenshot",
          "header_undo_redo",
          "axis_pressed_mouse_move_scale",
          "save_shortcut",
          "right_bar_stays_on_scroll",
          "header_settings","header_indicators","header_fullscreen_button","control_bar","Save","symbol_info","symbol_search_hot_key",'disableSave',"header_compare", 
          "clear_price_scale_on_error_or_empty_bars",
           "countdown","timeframes_toolbar","show_zoom_and_move_buttons_on_touch", "create_volume_indicator_by_default","hide_left_toolbar_by_default",
           "disableSave","disableSelection","display_legend_on_all_charts",
        ],
        enabled_features: ['hide_top_toolbar',
        "hide_resolution_in_legend",
        // "hide_price_scale_global_last_bar_value",
        "hide_unresolved_symbols_in_legend",
        // "mainSeriesProperties.lineStyle",
          // "show_last_price_and_change_only_in_series_legend",
          // "border_around_the_chart"
         ],
			// charts_storage_api_version: this.chartsStorageApiVersion,
			client_id: this.clientId,
			user_id: this.userId,
			fullscreen: this.fullscreen,
			autosize: this.autosize,
			studies_overrides: this.studiesOverrides,
		};

		const tvWidget = new widget(widgetOptions);
		this.tvWidget = tvWidget;

		tvWidget.onChartReady(() => {
      tvWidget.activeChart().applyOverrides({
      "mainSeriesProperties.style":2
    });
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();

				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');

				button.addEventListener('click', () =>
					tvWidget.showNoticeDialog({
						title: 'Notification',
						body: 'TradingView Charting Library API works correctly',
						callback: () => {
							// eslint-disable-next-line no-console
							console.log('Noticed!');
						},
					})
				);
        // filled
				// button.innerHTML = 'Check API';
			});
		});
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  
  // destroyed() {
  //   if (this.tvWidget !== null) {
  //     this.tvWidget.remove();
  //     this.tvWidget = null;
  //   }
  // },
  computed: {
    leftCards() {
      return this.cards.filter((card, index) => index % 2 !== 0);
    },
    rightCards() {
      return this.cards.filter((card, index) => index % 2 === 0);
    },
  },
};
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let activeLink = null;

window.addEventListener("scroll", () => {
  $$(".section").forEach((section) => {
    const { y } = section.getBoundingClientRect();

    if (y <= 0) {
      if (activeLink != null) {
        activeLink.classList.remove("active");
      }

      activeLink = $(`.nav-link[href~="#${section.id}"]`);
      activeLink.classList.add("active");
    }
  });
});
</script>
  

  
  
  
  <style lang="scss">
.slidecontainer {
  width: 60%;
}

.TVChartContainer {
  // height: calc(50vh);
  height: 50vh;
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
.subhees {
  font-weight: 559;
  font-size: 12px;
  color: #000000;
}

.scrollable-column {
  height: 1000px;
  width: fit-content;
  overflow-y: auto;
  overflow-y: scroll;
}
.scrollable-column::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
  width: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #efeff0;
  width: 2px;
}

.right-column ::-webkit-scrollbar {
  width: 10px; /* Adjust the width as needed */
}

*,
html,
body .v-application,
.v-application .display-4,
.v-application .display-3,
.v-application .display-1,
.v-application .headline,
.v-application .title,
.v-application .subtitle-1,
.v-application .subtitle-2,
.v-application .body-1,
.v-application .body-2,
.v-application .caption,
.v-application .overline {
  font-family: "Inter var", sans-serif !important;
}

.switch {
  position: relative;
  display: inline-block;
  width: 35px;
  height: 20px;
}
.logg {
  position: absolute;
  top: 400px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.chiii {
  background-color: #ffffff;
  color: #be0d0d;
  font-weight: 500;
  /* border: 1px solid red; */
}
.sliderr {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.sliderr:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 10px;
  left: 0px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .sliderr {
  background-color: #2196f3;
}

input:focus + .sliderr {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .sliderr:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* roundded sliderrs */
.sliderr.roundd {
  border-radius: 34px;
}

.sliderr.roundd:before {
  border-radius: 50%;
}

/* ---------------------------------------------------------------  */
.floating {
	width: 140px;
	height: 80px;
	position: absolute;
	display: none;
	padding: 8px;
	font-size: 12px;
	color: #131722;
	text-align: left;
	z-index: 1000;
	top: auto;
	left: auto;
	pointer-events: none;
	border-radius: 2px;
}
.floating-tooltip2 {
	width: 140px;
	height: 80px;
	position: absolute;
	display: none;
	padding: 8px;
	box-sizing: border-box;
	font-size: 12px;
	color: #131722;
	background-color: rgba(255, 255, 255, 1);
	text-align: left;
	z-index: 1000;
	top: 12px;
	left: 12px;
	pointer-events: none;
	border: 1px solid rgba(0, 150, 136, 1);
	border-radius: 2px;
}
.floating-tooltip {
  width: 96px;
  height: 80px;
  position: absolute;
  display: none;
  padding: 8px;
  box-sizing: border-box;
  font-size: 12px;
  color: #131722;
  background-color: rgba(255, 255, 255, 1);
  text-align: left;
  z-index: 1000;
  top: 12px;
  left: 12px;
  pointer-events: none;
  border: 1px solid rgba(0, 150, 136, 1);
  border-radius: 2px;
}
.scrollable-content {
  height: 900px;
  /* Adjust the height as per your requirement */
  /* overflow-x: auto; */
}

.custom-divider {
  border-left: 4px solid #000;
  /* Adjust the thickness and color as per your preference */
}

.text-animation {
  overflow: hidden;
  white-space: nowrap;
}

.moving-text {
  position: relative;
  animation: moveText 20s linear infinite;
}

@keyframes moveText {
  0% {
    left: 100%;
  }

  100% {
    left: -100%;
  }
}

.slidecontainer {
  /* width: 100%; */
}

.slider {
  -webkit-appearance: none;
  /* width: 100%; */
  height: 11px;
  background: linear-gradient(
    90deg,
    rgba(242, 100, 89, 0.9) 0.66%,
    rgba(74, 200, 119, 0.9) 100%
  );
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 13px;
}

.inside {
  position: absolute;
  top: 185px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 23px;
  background: #3e4763;
  border-radius: 11px;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 20px;
  background: #04aa6d;
  cursor: pointer;
}

.headerd {
  position: sticky;
  width: 100%;
  height: 100%;
}

.nav-link {
  /* padding: 0 20px; */
  /* border-left: 2px; */
}

.nav-link.active {
  border-left: 5px solid #0037b7;
  color: #000000 !important;
  background-color: #23bd68;
}

.section {
  width: 100%;
  display: absolute;
  flex-direction: column;
}

.sce1 {
  color: #677788;
}

/* .navlist {
    font-size: 16px;
  } */
.subhead {
  color: black;
  font-size: 18px;
  margin-bottom: 10px;
}

.v-application a link {
  text-decoration: none;
  color: #000000;
}
.v-application a {
  color: red;
}
.link {
  color: rgb(0, 0, 0);
}

.fix {
  position: absolute;
  left: 0px;
  top: 15px;
  z-index: 1;
}

.custom-table th {
  background-color: #f5f7fa;
}
.chio {
  background-color: rgb(184, 18, 18);
  color: #000;
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
  height: 24px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
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
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .sliderr {
  background-color: #f1f3f8;
}

input:focus + .sliderr {
  box-shadow: 0 0 1px #f1f3f8;
}

input:checked + .sliderr:before {
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
  color: #43a833;
}

.negative-color {
  color: #ff1717;
}

.up {
  position: absolute;
  left: px;
  top: -5px;
}

.move {
  position: absolute;
  left: px;
  top: 10px;
}

.active {
  color: #b6b3b3; /* Color when the switch is on */
}

:root {
  --linkheight: 2rem;
}

html {
  scroll-behavior: smooth;
  // margin-top: 14px;
}

ul,
ol {
  list-style: none;
}

ul {
  background-color: rgb(0 0 0 / 0);
}

.section-nav {
  width: 100%;
  position: sticky; /* Change position to sticky */
  top: 0;
  left: 0;
  padding-left: 0;
  border-bottom: 1px solid #dddddd;
  background-color: rgba(151, 34, 34, 0);
  z-index: 2; /* Add a higher z-index value */
}

.section-nav ul {
  display: flex;

  background-color: white;
}

.section-nav a {
  display: inline-block;
  text-decoration: none;
  line-height: 2rem;
  padding: 0 1rem;
  color: #000000;
}

.section-nav a:hover,
.section-nav a:focus {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.section-nav li.active a {
  color: #000000 !important; /* Change the color of active list item */
  background-color: rgb(252, 252, 252);
  border-bottom: 3px solid rgb(0, 0, 0);
  font-weight: 469;
  // /* margin-top:14px; */
}

h1 {
  width: calc(100% - 7.5em);
  font-weight: 300;
  margin: 2rem 0;
}
.v-application a {
  color: #666666 !important;
}

/* ----------------------- sec 1 ---------------- */
.v-application .mb-1 {
  margin-bottom: 0px !important;
}
.tittle {
  font-size: 18px;
  font-weight: 659;
  color: black;
}
.cardins {
  font-size: 18px;
  font-weight: 569;
}
.cardins1 {
  font-size: 10px;
  font-weight: 499;
  text-transform: uppercase;
}
/* ----------------------- sec 1 ---------------- */
/* ----------------------- sec 2 ---------------- */
.subhee {
  font-size: 13px;
  font-weight: 569;
  color: black;
}

/* ----------------------- sec 2 ---------------- */
/* ----------------------- sec 3 ---------------- */
.subhead3 {
  font-size: 16px;
  font-weight: 599;
  color: black;
}
.subtit3 {
  font-size: 12px;
  font-weight: 469;
  color: #666666;
}

.threbar {
  font-size: 12px;
  font-weight: 559;
  color: #999999;
}
.sidehea {
  font-size: 13px;
  font-weight: 469;
  color: #666666;
}

.sideheaq {
  font-size: 12px;
  font-weight: 409;
  color: #666666;
}

.custom-radio .v-label {
  font-size: 13px;
  font-weight: 469;
  color: #666666;
}

#html{
  accent-color: rgb(0, 0, 0);
}
#css{
  accent-color: rgb(0, 0, 0);
}
  
  .sidehea {
    color: black;
  }


.sidetext {
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  color: black;
}

.custom-chip::newchi {
  font-size: 8px; /* Adjust the font size as per your requirement */
  color: red; /* Adjust the color as per your requirement */
}

.sidebo {
  font-size: 12px;
  font-weight: 500;

  color: #999999;
}

.sidebo1 {
  font-size: 12px;
  font-weight: 600;

  color: #000000;
}
.sidebo2 {
  font-size: 12px;
  font-weight: 600;

  color: #43a833;
}
/* ----------------------- sec 3 ---------------- */
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
  min-width: 10% !important;

  /* max-width: 360px; */
  /* outline: none; */
  /* padding: 0 16px; */
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: "uppercase";
  transition: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

::v-deep .v-data-table-header {
  color: black;
  background-color: white;
}

.custom-table th {
  background-color: #fafbff !important;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  color: rgba(0, 0, 0, 0.6);
  background-color: #fafbff !important;
}

.v-chip.v-size--default {
  // border-radius: 16px;
  // font-size: 10px !important;
  // height: 22px;
  width: fit-content;
}
.v-chip {
  padding-left: 6px !important;
  padding-right: 6px !important;
}
.v-tabs-slider {
  background-color: currentColor;
  height: 100%;
  width: 80% !important;
  margin-left: 5px !important;
}
v-application ul {
  padding-left: 0px !important;
}
.container {
  padding: 0px !important;
}
.il{
  position:relative;

}
.liiii {
  font-size: 15px;
  font-weight: 500;
  color: #666666;
  line-height: 16px; /* 100% */
  letter-spacing: -0.32px;

}
.v-input--radio .v-radio__radio {
  height: 8px;
  width: 16px;
}


.firtex{
  font-size:11px;
  font-weight:480;
  color: #666;
  line-height: 18px;
}
.seiih{
  color: #666;

font-size: 9px;

font-weight: 469;
line-height: 12px; /* 120% */
letter-spacing: 0.8px;
text-transform: uppercase;
}
.maihh{
  color: #000;

font-size: 13px;

font-weight: 559;
line-height: 16px;
}

.headd1{
  color: #000;

font-size: 19px;

font-weight: 609;
line-height: 16px;
letter-spacing: -0.4px;
}

</style>