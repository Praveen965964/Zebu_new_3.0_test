<template>
    <div>
      
              <v-card>
                <div style="background-color: #f1f3f8" class="pa-5">
                  <div class="text-right">
                    <v-btn
                      class="ml-auto text-right"
                      text
                      fab
                      x-small
                      :ripple="false"
                      elevation="0"
                      text-right
                      @click="dig1 = false"
                      ><v-icon color="#666666" size="18"
                        >mdi-close-circle-outline</v-icon
                      ></v-btn
                    >
                  </div>
                  <div class="d-flex">
                    <div>
                      <p
                        class="mb-0 pl-2"
                        style="
                          color: #000;
                          font-size: 20px;
                          font-weight: 559;
                          line-height: 24px;
                          letter-spacing: -0.4px;
                        "
                      >
                        Events
                      </p>
                      <p
                        class="mb-0 mt-1 pl-2"
                        style="
                          color: #666;
                          font-size: 12px;
                          font-weight: 469;
                          line-height: 14px;
                        "
                      >
                        Bharti Airtel key events this week
                      </p>
                    </div>
                    <v-card elevation="0" 
                    style="
                      background-color: #f0ffee !important;
                      color: #000;
                      font-size: 14px;
                      font-weight: 559;
                      line-height: 16px;
                     
                    "
                    class="mt-5 pa-2 ml-auto rounded-pill"
                    ><p  style="
                      background-color: #f0ffee !important;
                      color: #000;
                      font-size: 14px;
                      font-weight: 559;
                      line-height: 16px;
                    
                    " class="mb-0" >Bharti Airtel
                    <span
                      class="mb-0 ml-2 body-2"
                      style="
                        color: #000;
                        font-size: 12px;
                        font-weight: 469;
                        line-height: 16px;
                      "
                    >
                      201.08</span>
                      <span
                        style="
                          color: #43a833;
                          color: #43a833;
                          font-size: 12px;
                          font-weight: 559;
                          line-height: 16px;
                        "
                        >+0.19%</span
                      >
                    </p>
                  </v-card>
                  </div>

                  <div class="mt-2">
                    <v-chip
                      outlined
                      @click="
                        (divi = true),
                          (crop = false),
                          (anno = false),
                          (judi = false),
                          (chipact = 'divi')
                      "
                      :class="{ active: chipact === 'divi' }"
                      :style="{
                        'background-color': divi
                          ? '#F1F3F8'
                          : '#F1F3F8 !important',
                        color: divi ? 'black' : 'black',
                        border: divi
                          ? '2px solid black'
                          : '1px solid #666!important',
                      }"
                      class="textclaa ma-2"
                    >
                      <span
                        :class="{ active: chipact === 'divi' }"
                        :style="{
                          color: divi ? 'black' : '#666!important',
                          'font-weight': divi
                            ? '600!important'
                            : '450!important',
                        }"
                      >
                        Dividends</span
                      >
                    </v-chip>

                    <v-chip
                      outlined
                      @click="
                        (divi = false),
                          (crop = true),
                          (anno = false),
                          (judi = false),
                          (chipact = 'crop')
                      "
                      :class="{ active: chipact === 'crop' }"
                      :style="{
                        'background-color': crop
                          ? '#F1F3F8'
                          : '#F1F3F8 !important',
                        color: crop ? 'black' : 'black',
                        border: crop
                          ? '2px solid black'
                          : '1px solid #666!important',
                      }"
                      class="textclaa ma-2"
                    >
                      <span
                        :class="{ active: chipact === 'crop' }"
                        :style="{
                          color: crop ? 'black' : '#666!important',
                          'font-weight': crop
                            ? '600!important'
                            : '450!important',
                        }"
                      >
                        Corp. action</span
                      >
                    </v-chip>

                    <v-chip
                      outlined
                      @click="
                        (divi = false),
                          (crop = false),
                          (anno = true),
                          (judi = false),
                          (chipact = 'anno')
                      "
                      :class="{ active: chipact === 'anno' }"
                      :style="{
                        'background-color': anno
                          ? '#F1F3F8'
                          : '#F1F3F8 !important',
                        color: anno ? 'black' : 'black',
                        border: anno
                          ? '2px solid black'
                          : '1px solid #666!important',
                      }"
                      class="textclaa ma-2"
                    >
                      <span
                        :class="{ active: chipact === 'anno' }"
                        :style="{
                          color: anno ? 'black' : '#666!important',
                          'font-weight': anno
                            ? '600!important'
                            : '450!important',
                        }"
                      >
                        Announcement</span
                      >
                    </v-chip>

                    <v-chip
                      outlined
                      @click="
                        (divi = false),
                          (crop = false),
                          (anno = false),
                          (judi = true),
                          (chipact = 'judi')
                      "
                      :class="{ active: chipact === 'judi' }"
                      :style="{
                        'background-color': judi
                          ? '#F1F3F8'
                          : '#F1F3F8 !important',
                        color: judi ? 'black' : '#666!important',
                        border: judi
                          ? '2px solid black'
                          : '1px solid #666!important',
                      }"
                      class="textclaa ma-2"
                    >
                      <span
                        :class="{ active: chipact === 'judi' }"
                        :style="{
                          color: judi ? 'black' : '#666!important',
                          'font-weight': judi
                            ? '600!important'
                            : '450!important',
                        }"
                      >
                        Judiciary
                      </span>
                    </v-chip>
                  </div>

                  <div v-if="judi">
                    <p
                      class="pt-3 mb-0 pl-2"
                      style="
                        color: #000;
                        font-size: 14px;
                        font-weight: 559;
                        line-height: 16px;
                        letter-spacing: -0.28px;
                      "
                    >
                      Judiciary
                    </p>

                    <p
                      class="mb-0 mt-1 pl-2"
                      style="
                        color: #666;
                        font-size: 12px;
                        font-weight: 469;
                        line-height: 14px;
                      "
                    >
                      The last rights shares that Punjab National Bank had
                      issued was in 2017 in the ratio of 2:25 at a premium of Rs
                      605.00 per share. The share has been quoting ex-rights
                      from January 31, 2018.
                    </p>

                    <v-card
                      v-for="(card, index) in cardsnew"
                      :key="index"
                      v-show="visca1(index)"
                      cols="12"
                      class="mt-5 pa-3 pt-3"
                      elevation="0"
                    >
                      <v-row class="pa-0 ma-0">
                        <v-col  class="pa-0 ma-0">
                          <div class="d-flex">
                            <div class="">
                          <div>    <img :src="card.imm"  style="width:32px!important;height:28px!important"   class="mb-0 pb-0" /></div>
                       
                            </div>
                            <div class="">
                              <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #000;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.title }}
                          </p>
                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #999;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.description }}
                          </p>

                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #0037b7;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.spltitle }}
                          </p>
                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #999;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.spldescription }}
                          </p>

</div>
                          </div>
                       
                        </v-col>
                      </v-row>
                    </v-card>

                    <v-row>
                      <v-col  class="text-center">
                        <v-btn
                          v-if="!showw1"
                          @click="carviss1"
                          class="body-2 text-none mt-2  font-weight-bold elevation-0 mb-0"
                          color="#F0FFEE"
                          style="color: #0037b7"
                          >Load more events
                          <v-icon>mdi-chevron-down</v-icon></v-btn
                        >
                        <v-btn
                          v-else
                          @click="hide1"
                          class="body-2 mt-2  text-none font-weight-bold elevation-0 mb-0"
                          color="#F0FFEE"
                          style="color: #0037b7"
                          >Load more events
                          <v-icon>mdi-chevron-up</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                  </div>

                  <div v-if="crop">
                    <p
                      class="pt-3 mb-0 pl-2"
                      style="
                        color: #000;
                        font-size: 14px;
                        font-weight: 559;
                        line-height: 16px;
                        letter-spacing: -0.28px;
                      "
                    >
                      Corporate Action
                    </p>
                    <p
                      class="mb-0 mt-1 pl-2"
                      style="
                        color: #666;
                        font-size: 12px;
                        font-weight: 469;
                        line-height: 14px;
                      "
                    >
                      The last rights shares that Punjab National Bank had
                      issued was in 2017 in the ratio of 2:25 at a premium of Rs
                      605.00 per share. The share has been quoting ex-rights
                      from January 31, 2018.
                    </p>
                    <p
                      class="mb-0 pt-5 pl-2"
                      style="
                        color: #000;
                        font-size: 10px;
                        font-weight: 469;
                        line-height: 12px;
                        letter-spacing: 0.8px;
                        text-transform: uppercase;
                      "
                    >
                      Upcoming Corporate Actions
                    </p>
                    <v-card elevation="0" class="mt-3 ml-2 pa-3 ">
                      <v-row class="">
                        <v-col>
                          <div class="d-flex justify-space-between">
                            <div class="ma-0 pa-0 justify-space-around">
                              <v-chip label small color="#F1F3F8" class="mt-1"
                                ><span
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.9px;
                                    text-transform: uppercase;
                                  "
                                  >Rights</span
                                ></v-chip
                              >
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Ex Date
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-style: normal;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                212 May, 2023
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Ratio
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #43a833;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                3:1
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Invested qty
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                750
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Action document
                              </p>
                              <p
                                class="text-right mb-0"
                                style="
                                  color: #0037b7;
                                  font-family: Inter V;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 559;
                                  line-height: 16px; /* 114.286% */
                                "
                              >
                                Read document
                              </p>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>
                    <v-card elevation="0" class="mt-3 ml-2 pa-3 ">
                      <v-row class="">
                        <v-col>
                          <div class="d-flex justify-space-between">
                            <div class="ma-0 pa-0 justify-space-around">
                              <v-chip label small color="#F1F3F8" class="mt-1"
                                ><span
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.9px;
                                    text-transform: uppercase;
                                  "
                                  >Rights</span
                                ></v-chip
                              >
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Ex Date
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-style: normal;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                212 May, 2023
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Ratio
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #43a833;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                3:1
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Invested qty
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                750
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Action document
                              </p>
                              <p
                                class="text-right mb-0"
                                style="
                                  color: #0037b7;
                                  font-family: Inter V;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 559;
                                  line-height: 16px; /* 114.286% */
                                "
                              >
                                Read document
                              </p>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>

                    <p
                      class="mb-0 pt-5 pl-2"
                      style="
                        color: #000;
                        font-size: 10px;
                        font-weight: 469;
                        line-height: 12px;
                        letter-spacing: 0.8px;
                        text-transform: uppercase;
                      "
                    >
                      Past Corporate Actions
                    </p>

                    <v-card
                      elevation="0"
                      v-for="(card, index) in cardss"
                      :key="index"
                      v-show="isCardVisible(index)"
                      style="background-color: #e7e9ed"
                      class="mt-3 ml-2 pa-3 mr-2"
                    >
                      <v-row class="">
                        <v-col>
                          <div class="d-flex justify-space-between">
                            <div class="ma-0 pa-0 justify-space-around">
                              <v-chip label small color="#F1F3F8" class="mt-1"
                                ><span
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.9px;
                                    text-transform: uppercase;
                                  "
                                  >{{ card.chi }}</span
                                ></v-chip
                              >
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                {{ card.val1 }}
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-style: normal;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                {{ card.val2 }}
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                {{ card.val3 }}
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #43a833;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                {{ card.val4 }}
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                {{ card.val5 }}
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                {{ card.val6 }}
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                {{ card.val7 }}
                              </p>
                              <p
                                class="text-right mb-0"
                                style="
                                  color: #0037b7;
                                  font-family: Inter V;
                                  font-size: 14px;
                                  font-style: normal;
                                  font-weight: 559;
                                  line-height: 16px; /* 114.286% */
                                "
                              >
                                {{ card.val8 }}
                              </p>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>
                    <v-row>
                      <v-col  class="text-center">
                        <v-btn
                          v-if="!showAll"
                          @click="showAllCards"
                          class="body-2 mt-2  font-weight-bold elevation-0 mb-0 text-none"
                          color="#F0FFEE"
                          style="color: #0037b7"
                          >Load more events
                          <v-icon>mdi-chevron-down</v-icon></v-btn
                        >
                        <v-btn
                          v-else
                          @click="hideExtraCards"
                          class="body-2 mt-2  font-weight-bold elevation-0 mb-0 text-none"
                          color="#F0FFEE"
                          style="color: #0037b7"
                          >Load more events
                          <v-icon>mdi-chevron-up</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                  </div>

                  <div v-if="anno">
                    <p
                      class="pt-3 mb-0 pl-2"
                      style="
                        color: #000;
                        font-size: 14px;
                        font-weight: 559;
                        line-height: 16px;
                        letter-spacing: -0.28px;
                      "
                    >
                      Announcements
                    </p>

                    <p
                      class="mb-0 mt-1 pl-2"
                      style="
                        color: #666;
                        font-size: 12px;
                        font-weight: 469;
                        line-height: 14px;
                      "
                    >
                      The last rights shares that Punjab National Bank had
                      issued was in 2017 in the ratio of 2:25 at a premium of Rs
                      605.00 per share. The share has been quoting ex-rights
                      from January 31, 2018.
                    </p>



                    <v-card
                      v-for="(card, index) in cardsnew"
                      :key="index"
                      v-show="visca1(index)"
                      cols="12"
                      class="mt-5 pa-3 pt-3"
                      elevation="0"
                    >
                      <v-row class="pa-0 ma-0">
                        <v-col  class="pa-0 ma-0">
                          <div class="d-flex">
                            <div class="">
                          <div>    <img :src="card.imm"  style="width:32px!important;height:28px!important"   class="mb-0 pb-0" /></div>
                       
                            </div>
                            <div class="">
                              <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #000;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.title }}
                          </p>
                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #999;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.description }}
                          </p>

                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #0037b7;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.spltitle }}
                          </p>
                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #999;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.spldescription }}
                          </p>

</div>
                          </div>
                       
                        </v-col>
                      </v-row>
                    </v-card>













                    <v-card
                      v-for="(card, index) in cards3"
                      :key="index"
                      v-show="visca(index)"
                      cols="12"
                      class="mt-5 pa-3 pt-3"
                      elevation="0"
                    >
                      <v-row class="pa-0 ma-0">
                        <v-col cols="1" class="pa-0 ma-0">
                          <img :src="card.imm" width="35px" class="mb-0 pb-0" />
                          <img
                            :src="card.splimm"
                            width="35px"
                            class="mb-0 pb-0"
                            color="#0037B7"
                          />
                        </v-col>
                        <v-col class="pa-0 ma-0">
                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #000;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.title }}
                          </p>
                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #999;
                              font-size: 12px;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.description }}
                          </p>

                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #0037b7;
                              font-size: 12px;
                              font-style: normal;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.spltitle }}
                          </p>
                          <p
                            class="pl-2 pb-0 mb-0"
                            style="
                              color: #999;
                              font-size: 12px;
                              font-style: normal;
                              font-weight: 469;
                              line-height: 16px;
                            "
                          >
                            {{ card.spldescription }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-card>
                    <v-row>
                      <v-col  class="text-center">
                        <v-btn
                          v-if="!showw"
                          @click="carviss"
                          class="body-2 text-none mt-2  font-weight-bold elevation-0 mb-0"
                          color="#F0FFEE"
                          style="color: #0037b7"
                          >Load more events
                          <v-icon>mdi-chevron-down</v-icon></v-btn
                        >
                        <v-btn
                          v-else
                          @click="hide"
                          class="body-2 mt-2 text-none font-weight-bold elevation-0 mb-0"
                          color="#F0FFEE"
                          style="color: #0037b7"
                          >Load more events
                          <v-icon>mdi-chevron-up</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                  </div>

                  <div v-if="divi">
                    <p
                      class="pt-3 mb-0 pl-2"
                      style="
                        color: #000;
                        font-size: 14px;
                        font-weight: 559;
                        line-height: 16px;
                        letter-spacing: -0.28px;
                      "
                    >
                      Dividends
                    </p>
                    <p
                      class="mb-0 mt-1 pl-2"
                      style="
                        color: #666;
                        font-size: 12px;
                        font-weight: 469;
                        line-height: 14px;
                      "
                    >
                      The last rights shares that Punjab National Bank had
                      issued was in 2017 in the ratio of 2:25 at a premium of Rs
                      605.00 per share. The share has been quoting ex-rights
                      from January 31, 2018.
                    </p>
                    <p
                      class="mb-0 pt-5 pl-2"
                      style="
                        color: #000;
                        font-size: 10px;
                        font-weight: 469;
                        line-height: 12px;
                        letter-spacing: 0.8px;
                        text-transform: uppercase;
                      "
                    >
                      2023 Dividends
                    </p>
                    <v-card elevation="0" class="mt-3 ml-2 pa-3 mr-2">
                      <v-row>
                        <v-col>
                          <div class="d-flex justify-space-between">
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Ex Date
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                12 May, 2023
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Dividend
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #999;
                                  font-size: 11px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                <span
                                  class=""
                                  style="
                                    color: #43a833;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                  >23</span
                                >/share
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Total dividend
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                750
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Yield
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                2.3%
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Action document
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #0037b7;
                                  font-size: 14px;
                                  font-weight: 559;
                                  line-height: 16px;
                                "
                              >
                                Read document
                              </p>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>

                    <v-card elevation="0" class="mt-3 ml-2 pa-3 mr-2">
                      <v-row>
                        <v-col>
                          <div class="d-flex d-flex justify-space-between">
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Ex Date
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                12 May, 2023
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Dividend
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #999;
                                  font-size: 11px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                <span
                                  class=""
                                  style="
                                    color: #43a833;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                  >23</span
                                >/share
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Total dividend
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                750
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Yield
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                2.3%
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Action document
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #0037b7;
                                  font-size: 14px;
                                  font-weight: 559;
                                  line-height: 16px;
                                "
                              >
                                Read document
                              </p>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>

                    <p
                      class="mb-0 pt-5 pl-2"
                      style="
                        color: #000;
                        font-size: 10px;
                        font-weight: 469;
                        line-height: 12px;
                        letter-spacing: 0.8px;
                        text-transform: uppercase;
                      "
                    >
                      2023 Dividends
                    </p>
                    <v-card elevation="0" class="mt-3 ml-2 pa-3 mr-2">
                      <v-row>
                        <v-col>
                          <div class="d-flex d-flex justify-space-between">
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Ex Date
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                12 May, 2023
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Dividend
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #999;
                                  font-size: 11px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                <span
                                  class=""
                                  style="
                                    color: #43a833;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                  >23</span
                                >/share
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Total dividend
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                750
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Yield
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                2.3%
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Action document
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #0037b7;
                                  font-size: 14px;
                                  font-weight: 559;
                                  line-height: 16px;
                                "
                              >
                                Read document
                              </p>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>

                    <p
                      class="mb-0 pt-5 pl-2"
                      style="
                        color: #000;
                        font-size: 10px;
                        font-weight: 469;
                        line-height: 12px;
                        letter-spacing: 0.8px;
                        text-transform: uppercase;
                      "
                    >
                      2023 Dividends
                    </p>
                    <v-card elevation="0" class="mt-3 ml-2 pa-3 mr-2">
                      <v-row>
                        <v-col>
                          <div class="d-flex d-flex justify-space-between">
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Ex Date
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                12 May, 2023
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Dividend
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #999;
                                  font-size: 11px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                <span
                                  class=""
                                  style="
                                    color: #43a833;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                  >23</span
                                >/share
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Total dividend
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                750
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Yield
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #000;
                                  font-size: 13px;
                                  font-weight: 469;
                                  line-height: 16px;
                                "
                              >
                                2.3%
                              </p>
                            </div>
                            <div class="ma-0 pa-0 justify-space-around">
                              <p
                                class="mb-0"
                                style="
                                  color: #666;
                                  font-size: 9px;
                                  font-weight: 469;
                                  line-height: 12px;
                                  letter-spacing: 0.72px;
                                  text-transform: uppercase;
                                "
                              >
                                Action document
                              </p>
                              <p
                                class="mb-0"
                                style="
                                  color: #0037b7;
                                  font-size: 14px;
                                  font-weight: 559;
                                  line-height: 16px;
                                "
                              >
                                Read document
                              </p>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>

                    <div v-if="extra" class="extra">
                      <p
                        class="mb-0 pt-5 pl-2"
                        style="
                          color: #000;
                          font-size: 10px;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 0.8px;
                          text-transform: uppercase;
                        "
                      >
                        2023 Dividends
                      </p>
                      <v-card elevation="0" class="mt-3 ml-2 pa-3 mr-2">
                        <v-row>
                          <v-col>
                            <div class="d-flex d-flex justify-space-between">
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Ex Date
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #000;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                >
                                  12 May, 2023
                                </p>
                              </div>
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Dividend
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #999;
                                    font-size: 11px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                >
                                  <span
                                    class=""
                                    style="
                                      color: #43a833;
                                      font-size: 13px;
                                      font-weight: 469;
                                      line-height: 16px;
                                    "
                                    >23</span
                                  >/share
                                </p>
                              </div>
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Total dividend
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #000;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                >
                                  750
                                </p>
                              </div>
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Yield
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #000;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                >
                                  2.3%
                                </p>
                              </div>
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Action document
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #0037b7;
                                    font-size: 14px;
                                    font-weight: 559;
                                    line-height: 16px;
                                  "
                                >
                                  Read document
                                </p>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-card>
                      <p
                        class="mb-0 pt-5 pl-2"
                        style="
                          color: #000;
                          font-size: 10px;
                          font-weight: 469;
                          line-height: 12px;
                          letter-spacing: 0.8px;
                          text-transform: uppercase;
                        "
                      >
                        2023 Dividends
                      </p>
                      <v-card elevation="0" class="mt-3 ml-2 pa-3 mr-2">
                        <v-row>
                          <v-col>
                            <div class="d-flex d-flex justify-space-between">
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Ex Date
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #000;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                >
                                  12 May, 2023
                                </p>
                              </div>
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Dividend
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #999;
                                    font-size: 11px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                >
                                  <span
                                    class=""
                                    style="
                                      color: #43a833;
                                      font-size: 13px;
                                      font-weight: 469;
                                      line-height: 16px;
                                    "
                                    >23</span
                                  >/share
                                </p>
                              </div>
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Total dividend
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #000;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                >
                                  750
                                </p>
                              </div>
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Yield
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #000;
                                    font-size: 13px;
                                    font-weight: 469;
                                    line-height: 16px;
                                  "
                                >
                                  2.3%
                                </p>
                              </div>
                              <div class="ma-0 pa-0 justify-space-around">
                                <p
                                  class="mb-0"
                                  style="
                                    color: #666;
                                    font-size: 9px;
                                    font-weight: 469;
                                    line-height: 12px;
                                    letter-spacing: 0.72px;
                                    text-transform: uppercase;
                                  "
                                >
                                  Action document
                                </p>
                                <p
                                  class="mb-0"
                                  style="
                                    color: #0037b7;
                                    font-size: 14px;
                                    font-weight: 559;
                                    line-height: 16px;
                                  "
                                >
                                  Read document
                                </p>
                              </div>
                            </div>
                          </v-col>
                        </v-row>
                      </v-card>
                    </div>
                    <a :href="zebu" style="text-decoration: none">
                      <p
                        @click="name"
                        class="body-2 mt-4 font-weight-bold mb-0"
                        style="color: #0037b7; text-align: center"
                      >
                        Load more dividends
                      </p></a
                    >
                  </div>
                </div>
              </v-card>
         

    </div>
</template>
<script>
export default {
  data() {
    return {
      dig1: false,
        chipact: "market",
      market: false,
      limit: true,
      sl: false,
      slmkt: false,
      selectedTab: 0,
      assign: "",
      selectedItem: false,
      showmore2: true,
      showmore23: false,
      perpage: 5,
      // chipact: "divi",
      dialog3: false,
      digs:true,
      // dig1: false,
      dig2: false,
      divi: true,
      crop: false,
      judi: false,
      anno: false,

      // extra: false,
      cardsnss: [
        {
          title: "2 days ago     Economic Times",
          imm: require("@/assets/neew.svg"),
          description:
            "Canara Bank starts process to sell non-core assets via IPOs",
        },
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/neew.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/neew.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/neew.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/neew.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/neew.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/neew.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
      ],

      cardsnew: [
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/imma.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },

        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/imma.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
        {
          spltitle: "Update-Acquisition/Scheme/Sale/Disposal/Reg30-XBRL",
          imm: require("@/assets/splimm.svg"),
          spldescription:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/imma.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },

        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/imma.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
      ],
      cardss: [
        {
          chi: "Rights",
          val1: "Ex Date",
          val2: "12 May, 2023",
          val3: "Ratio",
          val4: "3:1",
          val5: "Invested qty",
          val6: "750",
          val7: "Action document",
          val8: "Read document",
        },
        {
          chi: "Rights",
          val1: "Ex Date",
          val2: "12 May, 2023",
          val3: "Ratio",
          val4: "3:1",
          val5: "Invested qty",
          val6: "750",
          val7: "Action document",
          val8: "Read document",
        },
        {
          chi: "Rights",
          val1: "Ex Date",
          val2: "12 May, 2023",
          val3: "Ratio",
          val4: "3:1",
          val5: "Invested qty",
          val6: "750",
          val7: "Action document",
          val8: "Read document",
        },
        {
          chi: "Rights",
          val1: "Ex Date",
          val2: "12 May, 2023",
          val3: "Ratio",
          val4: "3:1",
          val5: "Invested qty",
          val6: "750",
          val7: "Action document",
          val8: "Read document",
        },
        {
          chi: "Rights",
          val1: "Ex Date",
          val2: "12 May, 2023",
          val3: "Ratio",
          val4: "3:1",
          val5: "Invested qty",
          val6: "750",
          val7: "Action document",
          val8: "Read document",
        },
      ],
      showAll: false,
      showw1: false,
      total1: 2,
      cards3: [
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/imma.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },

        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/imma.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
        {
          spltitle: "Update-Acquisition/Scheme/Sale/Disposal/Reg30-XBRL",
          imm: require("@/assets/splimm.svg"),
          spldescription:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/imma.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },

        {
          title:
            "Disposal of 17,333 equity shares worth Rs 68.47 lacs by director",
          imm: require("@/assets/imma.svg"),
          description:
            "Reliance Industries Limited has informed the Exchange regarding UpdateBoard of India",
        },
      ],
      showw: false,
      total: 2,
      activeCard: 2,
      tab: 0,
      checkbox: true,
      tab1: "",
      tab2: "",
      tab3: "",
      tab4: "",
      watchdata: [],
      naa: [],
      neww: [],
      valuess: [],
      console: "",
      neww1: "",

      newdata: "",
      valuena: "",
      valuenaes: "",
      items: [
        { title: "name" },
        { title: "edit" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      cards: [
        {
          chi: "Block deal",
          date: "05-Jun-2023",
          para: "Talbros Auto bulk deal from Jitesh suketu shah",
        },
        {
          chi: "Block deal",
          date: "05-Jun-2023",
          para: "Talbros Auto bulk deal from Jitesh suketu shah",
        },
        {
          chi: "Block deal",
          date: "05-Jun-2023",
          para: "Talbros Auto bulk deal from Jitesh suketu shah",
        },
        {
          chi: "Block deal",
          date: "05-Jun-2023",
          para: "Talbros Auto bulk deal from Jitesh suketu shah",
        },
        {
          chi: "Block deal",
          date: "05-Jun-2023",
          para: "Talbros Auto bulk deal from Jitesh suketu shah",
        },
      ],
      //  ................................SEO...................................
      mutualfundheaders: [
        {
          text: "Scrips",
          align: "left",
          sortable: false,
          value: "Fundname",
          class: "successScrips",
        },
        {
          text: "Sector",
          sortable: false,
          value: "calories",
          class: "successtitle",
        },
        {
          text: "Weight%",
          sortable: false,
          value: "calories",
          class: "successvolume",
        },
        {
          text: "Mkt cap (cr)",
          sortable: false,
          value: "carbs",
          class: "successprice",
        },
        {
          text: "Volume (k)",
          sortable: false,
          value: "protein",
          class: "successchg",
        },
        { text: "Price", sortable: false, value: "iron", class: "successma" },
        { text: "%Chg", sortable: false, value: "iron", class: "successma" },
      ],
      groups: [
        {
          id: 1,
          title: "Stocks",
          lsi: " lists",
          items: [
            { id: 1, title: "", selected: false },
            { id: 2, title: "", selected: false },
            { id: 3, title: "", selected: false },
            { id: 4, title: "", selected: false },
            { id: 3, title: "", selected: false },
            { id: 4, title: "", selected: false },
          ],
        },
        // i have two datatable the data will come in json in jshon responce netqty 0 they complete data push to second data table oterwise the data will be display in first data table
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
          EVENT: "EVENT",
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
          EVENT: "EVENT",
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
          EVENT: "EVENT",
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
          EVENT: "EVENT",
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
          EVENT: "EVENT",
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
          EVENT: "EVENT",
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
          EVENT: "EVENT",
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
          EVENT: "EVENT",
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
          EVENT: "EVENT",
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
          EVENT: "EVENT",
        },
      ],
      extra: false,

      maxVisibleCards: 2,
      //  ................................SEO...................................
    };
  },

  methods: {
    visca1(index) {
      return this.showw1 || index < this.total1;
    },
    carviss1() {
      this.showw1 = true;
    },
    hide1() {
      this.showw1 = false;
    },
    isCardVisible(index) {
      return this.showAll || index < this.maxVisibleCards;
    },
    showAllCards() {
      this.showAll = true;
    },
    hideExtraCards() {
      this.showAll = false;
    },
    visca(index) {
      return this.showw || index < this.total;
    },
    carviss() {
      this.showw = true;
    },
    // hide() {
    //   this.showw = false;
    // },
    // name(){
    //         this.extra = ! this.extra;
    //     },
    showAlert() {
      window.alert("This is an alert message!");
    },

    getSelectedItemCount(group) {
      return group.items.filter((item1) => item1.selected).length;
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

    selectItem(item) {
      this.selectedItem = item;
    },
    firstvisi(index) {
      return this.showAll || index < this.maxVisibleCards;
    },
    allvisi() {
      this.showAll = true;
    },
    hide() {
      this.showAll = false;
    },
    name() {
      this.extra = !this.extra;
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
    },
    unSelectItem() {
      this.selectedItem = false;
    },
    showmore() {
      this.perpage = this.mutualfunditems.length;
      this.showmore2 = !this.showmore2;
      this.showmore23 = !this.showmore23;
    },
    showmore1() {
      this.perpage = 8;
      this.showmore2 = !this.showmore2;
      this.showmore23 = !this.showmore23;
    },
    changeBackground(cardNumber) {
      this.activeCard = cardNumber;
    },

    cardds() {},

    watchapi() {
      const axios = require("axios");
      let data = JSON.stringify({
        userId: "ZE1A40",
        wlname: "5",
        session:
          "8e4b04c4b67330587a0cfd325b29f778e8956c5d1c4defeac239ac95b78600cd",
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://192.168.5.120:5001/MarketWatch",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.watchdata = response.data;
          var watchdata1 = response.data;
          this.console = watchdata1;
          var valuena = response.data.values;
          this.naa = valuena;

          var valuenaes = valuena.exch;
          this.naaaa = valuenaes;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sidecol() {
      const axios = require("axios");
      let data = JSON.stringify({
        userId: "ZE1A40",
        session:
          "8e4b04c4b67330587a0cfd325b29f778e8956c5d1c4defeac239ac95b78600cd",
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://192.168.5.120:5001/MWList",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.newdata = response.data;
          console.log("123321", this.newdata);
          this.neww1 = this.newdata.values;
          console.log("123321", this.neww1);
          console.log("12332", this.neww1[0]);
          // this.groups[0].items[0].title = this.neww1[0];
          // this.groups[0].items[1].title = this.neww1[1];
          // this.groups[0].items[2].title = this.neww1[2];
          // this.groups[0].items[3].title = this.neww1[3];
          // this.groups[0].items[4].title = this.neww1[4];
          // this.groups[0].items[5].title = this.neww1[5];
          for (let i = 0; i < this.neww1.length; i++) {
            this.groups[0].items[i].title = this.neww1[i];
          }

          // assign = this.neww1[0];
          // assign1 = this.neww1[1];
          // assign2 = this.neww1[2];
          // assign3 = this.neww1[3];
          // assign4 = this.neww1[4];
          // assign5 = this.neww1[5];
          // console.log("1234", assign);
          // console.log(assign1);
          // console.log(assign2);
          // console.log(assign3);
          // console.log(assign4);
          // console.log(assign5);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    this.watchapi();
    this.sidecol();
  },

  computed: {
    Cards() {
      if (this.tab4) {
        const searchTerm = this.tab4.toLowerCase();
        return this.cards.filter((card) =>
          card.description.toLowerCase().includes(searchTerm)
        );
      } else {
        return this.cards;
      }
    },

    arrayLength() {
      return this.cards.length;
    },
  },
};
</script>
<style lang="scss">
.active {
  color: #b6b3b3; /* Color when the switch1 is on */
}
.switch1 {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 24px;
}
.switch1 input {
  opacity: 0;
  width: 0;
  height: 0;
}
.switch1 {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 20px;
}
.sliderr1 {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.sliderr1:before {
  position: absolute;
  content: "";
  height: 11px;
  width: 18px;
  left: 3px;
  bottom: 5px;
  background-color: rgb(0, 0, 0);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .sliderr1:before {
  -webkit-transform: translateX(19px);
  -ms-transform: translateX(19px);
  transform: translateX(19px);
}

/* roundded sliderrs */
.sliderr1.round {
  border-radius: 30px;
}

.sliderr1.round:before {
  border-radius: 40%;
}

.input-group .input-group__input {
  font-size: 1px !important;
  width: 10px;
}
.slidecontainer {
  width: 60%;
}

.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 3px;
  background: #a3a3a3;

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

  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.sliderlist::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 8px;
  height: 8px;

  border-radius: 12px;
  background-color: black;
  cursor: pointer;
  border: 1px solid rgb(0, 0, 0);
}

.postionchange {
  position: absolute !important;
  top: 25px !important;
  left: 70px !important;
  right: 200px;
}

.gray-background {
  background-color: #cccccc;
  transition: background-color 0.5s ease-in-out;
}
.thtab1st {
  color: #666;
  font-size: 13px;
  font-weight: 469;
  line-height: 16px;
}
.tabhead11 {
  color: #000;
  font-size: 14px;
  font-weight: 559;
  line-height: 16px;
}
.sidtabval2 {
  color: #000;
  font-size: 13px;
  font-weight: 469;
  line-height: 16px;
}
.v-tab {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 0 1 auto;
  color: #000;
  font-size: 14px !important;
  font-weight: 559;
  line-height: 16px;
  letter-spacing: -0.28px;
  justify-content: center;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  min-width: 90px;
  /* max-width: 0px; */
  outline: none;
  padding: 0 0px !important;
}
.v-application .caption {
  font-size: 14px !important;
}
.v-application {
  color: #000 !important;
  caret-color: #000 !important;
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
  .v-input_control > .v-input_slot {
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
  .v-input_control > .v-input_slot {
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
.v-text-field--rounded > .v-input__control > .v-input__slot {
  padding: 0 0px !important;
  padding-left: 0 0px !important;
}

.ssss {
  .v-text-field--rounded > .v-input_control > .v-input_slot {
    padding-left: 0px !important;
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
  .v-input_control > .v-input_slot {
    padding-left: 14px !important;
    padding-right: 5px !important;
  }
}
.postionchangeopenpostions {
  position: absolute !important;
  top: 30px !important;
  left: 234px !important;
  right: 20px !important;
}

</style>


