<template>
    <div>
       <v-snackbar v-for="(s,i) in OrderbookGetnoren" :key="i" timeout="2900"  :value="true" absolute bottom center
        color="#00A1F2" :style="{'margin-bottom':calcMargin(i)}"  v-model="snackbarHide" >
      <p class="mb-0">Your <span v-if="s.trantype=='B'">BUY</span> <span v-else> S</span>
       Order {{ s.norenordno }} for {{ s.tsym }} in {{ s.exch }} is {{s.status  }}.</p> 
       </v-snackbar>
       
      <v-dialog
        v-model="SliceQtyPopup"
        persistent
        max-width="450"
      >
      
        <v-card class="" width="100%" style="overflow-x:hidden">
          <v-card-title>
          <p class="mb-3" style="color: #000;font-size: 16px;font-weight: 559;line-height: 16px;letter-spacing: -0.36px;">Do you want to Slice and Place the Orders</p> 
          </v-card-title>
     
          <v-row >
           <v-col cols="6" class="">
            <v-row>
                <v-col cols="4" class="pt-0 pb-0"> <p class="pl-6 mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">Exch</p></v-col>
                <v-col cols="4" class="pt-0 pb-0"> <p class="mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">Type</p></v-col>
                <v-col cols="4" class="pt-0 pb-0"> <p class="mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">Product</p></v-col>
              </v-row>
           </v-col>
            <v-col cols="6" class="">
              <v-row>
                <v-col cols="6" class="pt-0 pb-0"> <p class="pl-3 mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">Qty</p></v-col>
                <v-col cols="6" class="pt-0 pb-0"> <p class=" mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">Price</p></v-col>
              </v-row>
            </v-col>
          </v-row>
  
          <v-row v-for="kj in firestFrezqty >10 ? remainders!=0?9:10:firestFrezqty" :key="kj">
          
           <v-col  cols="6" class="">
            <v-row>
          <!-- <p class="text-center"> {{DetalDatastore}}</p>    -->
                <v-col cols="4" class="pt-0 pb-0">
                   <p class="pl-6 mb-0 sideheaq" >{{ResponScriptrInfo.exch}}</p>
                   <!-- <p class="pl-6 mb-0 pt-1 sideheaq" >{{ResponScriptrInfo.exch}}</p> -->
                  </v-col>
                <v-col cols="4" class="pt-0 pb-0"> 
                  <p class="mb-0 sideheaq" >BUY</p>
                  <!-- <p class="mb-0 pt-1 sideheaq" >BUY</p> -->
                </v-col>
                <v-col cols="4" class="pt-0 pb-0"> 
                  <p class="mb-0 sideheaq" >{{chipact}}</p>
                  <!-- <p class="mb-0 pt-1 sideheaq" >{{chipact}}</p> -->
                </v-col>
              </v-row>
           </v-col>
            <v-col cols="6" class="">
              <v-row>
                <v-col cols="6" class="pt-0 pb-0"> 
                  <!-- FOR FREQTY -->
                  <!-- <div> -->
                  <p class="mb-0 pl-3 sideheaq" >{{ResponScriptrInfo.frzqty}}</p>
             <!-- //if 1=0      -->
                  <!-- <p v-if="remainders != 0" class="mb-0 pl-3 pt-1 sideheaq" >{{remainders}}</p> -->
                </v-col>
                <v-col cols="6" class="pt-0 pb-0"> 
                  <p class="mb-0 sideheaq" >{{message.lp}}</p>
                  <!-- <p class="mb-0 pt-1 sideheaq">{{DetalDatastore.lp}}</p> -->
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          
          <v-row v-if="remainders != 0 ">
           <v-col cols="6" class="">
            <v-row>
          <!-- <p class="text-center"> {{DetalDatastore}}</p>    -->
                <v-col cols="4" class="pt-0 pb-0">
                   <p class="pl-6 mb-0 sideheaq" >{{ResponScriptrInfo.exch}}</p>
                   <!-- <p class="pl-6 mb-0 pt-1 sideheaq" >{{ResponScriptrInfo.exch}}</p> -->
                  </v-col>
                <v-col cols="4" class="pt-0 pb-0"> 
                  <p class="mb-0 sideheaq" >BUY</p>
                  <!-- <p class="mb-0 pt-1 sideheaq" >BUY</p> -->
                </v-col>
                <v-col cols="4" class="pt-0 pb-0"> 
                  <p class="mb-0 sideheaq" >{{chipact}}</p>
                  <!-- <p class="mb-0 pt-1 sideheaq" >{{chipact}}</p> -->
                </v-col>
              </v-row>
           </v-col>
            <v-col cols="6" class="">
              <v-row>
                <v-col cols="6" class="pt-0 pb-0"> 
                  <!-- FOR FREQTY -->
                  <!-- <div> -->
                  <!-- <p class="mb-0 pl-3 sideheaq" >{{ResponScriptrInfo.frzqty}}</p> -->
             <!-- //if 1=0      -->
                  <p  class="mb-0 pl-3 pt-1 sideheaq" >{{remainders}}</p>
                </v-col>
                <v-col cols="6" class="pt-0 pb-0"> 
                  <p class="mb-0 sideheaq" >{{message.lp}}</p>
                  <!-- <p class="mb-0 pt-1 sideheaq">{{DetalDatastore.lp}}</p> -->
                </v-col>
              </v-row>
            </v-col>
          </v-row>
         
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="SliceQtyPopup=false"
              color="green darken-1"
              text
            >
              Cancel
            </v-btn>
            <v-btn  @click="SliceQtyPlaceOrder()"
              color="green darken-1" 
              text
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
  
  
      <div v-if="BuyPagePopUpShow">
        <v-form ref="form" v-model="valid">
         <v-card class="elevation-0 rounded-lg" style="height:550px;overflow: hidden;">
        <v-card outlined elevation="0" class="pa-5" style="background-color: #f1f3f8;height:90px;border: 1px solid #dee2eb;">
        <div class="d-flex">
        <p class="mb-0" style="color: #000;font-size: 16px;font-weight: 559;line-height: 100%;letter-spacing: 0.64px;">
                      {{ message.tsym }}
                      <span style="color: #666;font-size: 11px; font-weight: 500;line-height: 100%; letter-spacing: 0.44px;"> {{ message.exch }}</span>
                    </p>
                    <div class="ml-auto">
                      <div class="d-flex">
                        <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small
                          style="height: 20px; min-width: 20px; border-radius: 4px" color="#43A833">
                          <span style="
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 559;
                        line-height: 16px;
                      " :class="['body-2', 'font-weight-bold', { 'active': isActive }]">B</span></v-btn>
  
                        <label class="switch1 ml-2">
                          <input type="checkbox"  v-model="isActive" />
                          <span class="sliderr1 round"></span>
                        </label>
  
                        <v-btn class="pa-0 elevation-0 ml-2 white--text" dense small
                          style="height: 20px; min-width: 20px; border-radius: 4px" color="#FF1717">
                          <span style="
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 559;
                        line-height: 16px;
                      " :class="['body-2', 'font-weight-bold', { 'active': !isActive }]">S</span></v-btn>
                      </div>
                    </div>
        </div>
                  <p class="sidetext pt-3 ">{{ message.exch }} : ₹ {{ message.lp }}</p>
        </v-card>
                <v-card height="80%" class="pt-1 mb-5 elevation-0" style="overflow: scroll;">
  
                <v-tabs background-color="transparent" color="black" v-model="selectedTab" >
                  <v-tab class="text-capitalize px-0 ml-4"  @click="limit = true ,slmkt=false,market=false ,sl=false"><span style="font-size: 13px; font-weight: 650; line-height: 16px;letter-spacing: -0.4px;text-align: left;" class="px-0">Regular</span>
                  </v-tab>
                  <v-tab class="text-capitalize px-0 ml-3" @click="limit = true,market=false"><span style="font-size: 13px;font-weight: 650;line-height: 16px;letter-spacing: -0.4px;text-align: left;font-variation-settings: 'slnt' 0;">
                      Cover</span></v-tab>
                  <v-tab class="text-capitalize px-0 ml-3" @click="limit = true ,slmkt=false,market=false ,sl=false"><span style="font-size: 13px;font-weight: 650;line-height: 16px;letter-spacing: -0.4px;text-align: left;
                  font-variation-settings: 'slnt' 0;">AMO</span></v-tab>
                  <v-tab class="text-capitalize px-0 ml-3"><span style="font-size: 13px;font-weight: 650;line-height: 16px;letter-spacing: -0.4px;text-align: left;">GTT</span></v-tab>
                </v-tabs>
                <v-divider></v-divider>
                <div class="pa-5 pt-4" v-if="this.selectedTab == '0' || this.selectedTab == '1' || this.selectedTab == '2' ">
                  
                  <div v-if="this.selectedTab == '0' || this.selectedTab == '2'">
                    <p class="mb-0 sideheaq">Investment type</p>
                    <v-radio-group class="pa-0 mt-2" v-model="row" color="black" dense row mandatory>
                      <v-radio color="black" v-bind:checked="active === 0" label="Delivery" value="Delivery"><template
                          v-slot:label>
                          <p class="mb-0 sidehea"> Delivery</p>
                        </template></v-radio>
                      <v-radio color="black" label="Intraday" value="Intraday">
                        <template v-slot:label>
                          <p class="mb-0 sidehea"> Intraday</p>
                        </template></v-radio>
                    </v-radio-group>
                  </div>
  
                  <p class="mb-0 mt-4 sideheaq">Select order type</p>
                    <div class="mt-2">
                      <v-chip v-model="chipNmaeGet" @click="
                        (market = false),
                        (limit = true),
                        (sl = false),
                        (slmkt = false),
                        (chipact = 'limit')
                        " :class="{ active: chipact === 'limit' }" :style="{
      'background-color': limit ? '#000' : '#F1F3F8 !important',
      color: limit ? 'white' : '#666666',
    }" small class="textclaa">
                        Limit
                      </v-chip>
                      <v-chip @click="(market = true),(limit = false),(sl = false),(slmkt = false),(chipact = 'market')" :class="{ active: chipact === 'market' }"
                       :style="{ 'background-color': market ? '#000' : '#F1F3F8 !important', color: market ? 'white' : '#666666',}"
                        small class="textclaa ml-3">
                        Market
                      </v-chip>
                      <v-chip @click="(market = false), (limit = false),
                        (sl = true),
                        (slmkt = false),
                        (chipact = 'sl')
                        " :style="{'display':this.selectedTab == '1' ? 'none' : '',
      'background-color': sl ? '#000' : '#F1F3F8 !important',
      color: sl ? 'white' : '#666666',
    }" :class="{ active: chipact === 'sl' }" small class="textclaa ml-3">
                        SL Limt
                      </v-chip>
                      <v-chip    @click="
                        (market = false),
                        (limit = false),
                        (sl = false),
                        (slmkt = true),
                        (chipact = 'slmkt')
                        " :style="{'display':this.selectedTab == '1' ? 'none' : '',
      'background-color': slmkt ? '#000' : '#F1F3F8 !important',
      color: slmkt ? 'white' : '#666666',
    }" :class=" { active: chipact === 'slmkt' } " small class="textclaa ml-3">
                        SL Mkt
                      </v-chip>
                    </div>
                    <v-divider class="my-4"></v-divider>
                    <div class="">
                      <v-row>
                        <v-col cols="4">
                          <div class="d-flex">
                          <p class="mb-1 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Quantity</p>
                          <p class="mb-1 ml-auto mr-3" style="color: #666;font-size: 12px;font-weight: 469;line-height: 14px;" >
                            M-lot: {{ message.ls }}
                          </p>
  
                        </div>
                        
                        <v-text-field hide-spin-buttons v-model="lotsise" :step="message.ls"   
                          class="sidetext searchforcommiditytexts ml-0 pl-0 mt-1 pa-0 centered-input" type="number"
                          background-color="#F1F3F8" solo rounded flat dense :min="message.ls"
                          :rules="nameRules"  >
                          <template v-slot:prepend-inner>
                            <v-btn class="ml-0 pl-0"  elevation="0" small outlined v-if="lotsise > message.ls"
                              style="background-color: white; width: 20px; height: 20px" fab dark x-small
                              @click="lotsise--"  >
                              <v-icon  size="13" color="#666666">mdi-minus</v-icon>
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
                        <p class="" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Freeze qty: <span style="color: #666;font-size: 12px;font-weight: 469;line-height: 14px;">{{ResponScriptrInfo.frzqty }}</span></p>
                        </v-col>
                        <v-col cols="4">
                          <div class="d-flex">
                            <p class="mb-1 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Price</p>
                          <p class="mb-1 ml-auto mr-3" v-if="((this.selectedTab == '0' || this.selectedTab == '1' || this.selectedTab == '2' ) &&  ( limit || sl ))" style="color: #666;font-size: 12px;font-weight: 469;line-height: 14px;">Tick : {{ message.ti }} </p>
                        </div>
                        <v-text-field hide-spin-buttons :step="message.ti" v-model="parseFloatlp" v-if="((this.selectedTab == '0' || this.selectedTab == '1' || this.selectedTab == '2'  ) &&  ( limit || sl ))"
                            class="sidetext searchforcommiditytexts mt-1 pa-0" type="number" background-color="#F1F3F8"
                           solo rounded flat dense :rules="[v => !!v || 'Price is required',checkPriceRules.Uppercase(parseFloatlp,this.parseFloatUC),checkPriceRules.LowerCase(parseFloatlp,this.parseFloatLc)]">
                            <template v-slot:prepend-inner>
                              <v-btn class="ml-0 pl-0" elevation="0" small outlined style="background-color: white;
                            width: 20px; height: 20px;
                          " fab dark x-small>
                                <v-icon size="13" color="#666666">mdi-currency-rupee</v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
  
                          <v-text-field hide-spin-buttons  v-model="MKTValueDefault" v-if="((this.selectedTab == '0') && (market || slmkt)) || (this.selectedTab == '1' && market) || (this.selectedTab == '2') && (market || slmkt)"
                          readonly  class="sidetext searchforcommiditytexts mt-1 pa-0" type="number" background-color="#F1F3F8" 
                           solo rounded flat dense >
                            <template v-slot:append>
                              <div class="mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M10.0625 4.8125H9.1875V3.0625C9.1875 1.85456 8.20794 0.875 7 0.875C5.79206 0.875 4.8125 1.85456 4.8125 3.0625V4.8125H3.9375V3.0625C3.9375 1.37112 5.30862 0 7 0C8.69137 0 10.0625 1.37112 10.0625 3.0625V4.8125Z" fill="#666666"/>
  <path d="M11.5938 5.6875H2.40625C1.80206 5.6875 1.3125 6.17706 1.3125 6.78125V12.9062C1.3125 13.5104 1.80206 14 2.40625 14H11.5938C12.1979 14 12.6875 13.5104 12.6875 12.9062V6.78125C12.6875 6.17706 12.1979 5.6875 11.5938 5.6875ZM7.4375 10.8754V11.8125C7.4375 12.054 7.2415 12.25 7 12.25C6.7585 12.25 6.5625 12.054 6.5625 11.8125V10.8754C5.62669 10.6339 5.06406 9.67925 5.30556 8.74344C5.54706 7.80763 6.50169 7.245 7.4375 7.4865C8.37331 7.728 8.93594 8.68263 8.69444 9.61844C8.53519 10.2349 8.05394 10.7161 7.4375 10.8754Z" fill="#666666"/>
                              </svg></div>
                            </template>
                          </v-text-field>
  
                          </v-col>
                          <v-col cols="4" >
                            <div v-if="this.selectedTab == '0' && ! limit && !market || this.selectedTab == '2' && ! limit && !market">
                            <p class="mb-2 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Trigger Price</p>
                            <v-text-field v-model="slpriceTrigger" :rules="SlTriggerPriceRules"
                            class="searchforcommiditytexts sidetext mt-2 pa-0" type="number" hide-spin-buttons
                            background-color="#F1F3F8" solo rounded flat dense>
                            <template v-slot:prepend-inner>
                              <v-btn class="ml-0 pl-0" elevation="0" small outlined style="
                            background-color: white;
                            width: 20px;
                            height: 20px;
                          " fab dark x-small @click="decrementValue">
                                <v-icon size="12" color="#666666">mdi-currency-rupee</v-icon>
                              </v-btn>
                            </template>
                          </v-text-field></div>
  
                          <div  v-if="this.selectedTab == '1' && (limit || market)">
                            <p class="mb-2 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Stoploss price</p>
                            <v-text-field hide-spin-buttons  v-model="StopLossPrice"
                            class="sidetext searchforcommiditytexts mt-1 pa-0" type="number" background-color="#F1F3F8"
                           solo rounded flat dense :rules="[v => !!v || 'StopLossPrice is required']">
                            <template v-slot:prepend-inner>
                              <v-btn class="ml-0 pl-0" elevation="0" small outlined style="background-color: white;  width: 20px; height: 20px;
                          " fab dark x-small>
                                <v-icon size="13" color="#666666">mdi-currency-rupee</v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
                          </div>
  
                          </v-col>
                      </v-row>
                    </div>
  
                    <v-card class="elevation-0 px-2 rounded-sm" style="padding-bottom:2px" color="#FEF5E2">
                      <p class="pl-2 mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M8.625 4.125H7.875V2.625C7.875 1.58963 7.03537 0.75 6 0.75C4.96463 0.75 4.125 1.58963 4.125 2.625V4.125H3.375V2.625C3.375 1.17525 4.55025 0 6 0C7.44975 0 8.625 1.17525 8.625 2.625V4.125Z" fill="#666666"/>
  <path d="M9.9375 4.875H2.0625C1.54462 4.875 1.125 5.29462 1.125 5.8125V11.0625C1.125 11.5804 1.54462 12 2.0625 12H9.9375C10.4554 12 10.875 11.5804 10.875 11.0625V5.8125C10.875 5.29462 10.4554 4.875 9.9375 4.875ZM6.375 9.32175V10.125C6.375 10.332 6.207 10.5 6 10.5C5.793 10.5 5.625 10.332 5.625 10.125V9.32175C4.82288 9.11475 4.34063 8.2965 4.54763 7.49438C4.75462 6.69225 5.57288 6.21 6.375 6.417C7.17712 6.624 7.65937 7.44225 7.45237 8.24438C7.31587 8.77275 6.90338 9.18525 6.375 9.32175Z" fill="#666666"/>
  </svg><span class="pl-2"  style="color: #666;font-size: 12px;font-weight: 469;line-height: 100%;"> SL Lmt & SL Mkt are unavailable as a cover order is enabled below.</span></p>
  
                    </v-card>
  
                    <v-row class="mt-2">
                      <v-col cols="4" >
                        <v-checkbox  v-if="(this.selectedTab == '0' && sl)" :class="(this.selectedTab == '0' && sl) ? 'mb-3' : ''"
             disabled
                color="#000000" 
                value="red"
                hide-details
              >
              <template v-slot:label>
                <div class="d-flex  pt-1">
                  <p class="mb-0" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Add Stoploss </p>
                 &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M8.625 4.125H7.875V2.625C7.875 1.58963 7.03537 0.75 6 0.75C4.96463 0.75 4.125 1.58963 4.125 2.625V4.125H3.375V2.625C3.375 1.17525 4.55025 0 6 0C7.44975 0 8.625 1.17525 8.625 2.625V4.125Z" fill="#666666"/>
  <path d="M9.9375 4.875H2.0625C1.54462 4.875 1.125 5.29462 1.125 5.8125V11.0625C1.125 11.5804 1.54462 12 2.0625 12H9.9375C10.4554 12 10.875 11.5804 10.875 11.0625V5.8125C10.875 5.29462 10.4554 4.875 9.9375 4.875ZM6.375 9.32175V10.125C6.375 10.332 6.207 10.5 6 10.5C5.793 10.5 5.625 10.332 5.625 10.125V9.32175C4.82288 9.11475 4.34063 8.2965 4.54763 7.49438C4.75462 6.69225 5.57288 6.21 6.375 6.417C7.17712 6.624 7.65937 7.44225 7.45237 8.24438C7.31587 8.77275 6.90338 9.18525 6.375 9.32175Z" fill="#666666"/>
  </svg>
                </div>
  </template></v-checkbox>
  
                        <v-checkbox  v-if="(this.selectedTab == '0' && !sl )"  
               
                color="#000000"   v-model="CheckBoxTrue"
                value="red"
                hide-details
              >
              <template v-slot:label>
                <div class="d-flex  pt-1">
                  <p class="mb-0" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Add Stoploss </p>
                 &nbsp;&nbsp; 
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" class="" viewBox="0 0 12 12" fill="none">
  <path d="M6 8L6 6M6 4H5.995M1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                </div>
  </template></v-checkbox>
                      </v-col>
                      <v-col cols="8">
                        <v-row v-if="CheckBoxTrue && (this.selectedTab == '0' && !sl )" >
                          <v-col cols="6">
                            <p class="mb-2 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Stoploss price</p>
                        <v-text-field hide-spin-buttons  v-model="StopLossPrice"
                            class="sidetext searchforcommiditytexts mt-1 pa-0" type="number" background-color="#F1F3F8"
                           solo rounded flat dense :rules="[v => !!v || 'StopLossPrice is required']">
                            <template v-slot:prepend-inner>
                              <v-btn class="ml-0 pl-0" elevation="0" small outlined style="background-color: white;  width: 20px; height: 20px;
                          " fab dark x-small>
                                <v-icon size="13" color="#666666">mdi-currency-rupee</v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
  
                          </v-col>
                          <v-col cols="6">
                            <p class="mb-1 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Target %</p>
                        <v-text-field hide-spin-buttons :step="5" v-model="mktProfit"  min="5"
                            class="sidetext searchforcommiditytexts mt-1 pa-0" type="number" background-color="#F1F3F8"
                           solo rounded flat dense :rules="[v => !!v || 'Target % is required']">
                            <template v-slot:prepend-inner>
                              <v-btn class="ml-0 pl-0" elevation="0" small outlined style="background-color: white;
                            width: 20px;
                            height: 20px;
                          " fab dark x-small>
                               <span class="text-center" style="color: #666;font-size: 14px;font-weight: 469;line-height: 100%;letter-spacing: -0.14px;">% </span>
                              </v-btn>
                            </template>
                          </v-text-field>
  
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-divider :class="CheckBoxTrue ? 'pt-0' : 'mt-4'"></v-divider>
  
  
  
                    <v-row class="" :class="CheckBoxTrueTWO ? 'mt-2' : 'mt-n2'">
                      <v-col cols="4">
                        <v-checkbox 
                v-model="CheckBoxTrueTWO"
               
                color="#000000"
                value="red"
                hide-details
              >
              <template v-slot:label>
                <div class="d-flex  pt-1">
                  <p class="mb-0" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Add validity Qty </p>
                 &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" class="" viewBox="0 0 12 12" fill="none">
  <path d="M6 8L6 6M6 4H5.995M1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
  </svg> 
                </div>
  </template></v-checkbox>
                      </v-col>
                      <v-col cols="8">
                        <v-row v-if="CheckBoxTrueTWO">
                          <v-col cols="6">
                            <v-radio-group class="pa-0" v-model="DayAndIOC" color="black" dense row mandatory>
                      <v-radio color="black" v-bind:checked="active === 0" label="DAY" value="DAY"><template
                          v-slot:label>
                          <p class="mb-0 sidehea"> DAY</p>
                        </template></v-radio>
                      <v-radio color="black" label="IOC" value="IOC">
                        <template v-slot:label>
                          <p class="mb-0 sidehea">IOC</p>
                        </template></v-radio>
                    </v-radio-group>
  
                          </v-col>
                          <v-col :class="this.selectedTab == '1' ? 'd-none' : ''" cols="6" v-if="DayAndIOC =='DAY'">
                            <p class="mb-1 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Disclosed Quantity</p>
                        <v-text-field hide-spin-buttons  v-model="DisclosedQty"
                            class="sidetext searchforcommiditytexts mt-1 pa-0" type="number" background-color="#F1F3F8"
                           solo rounded flat dense >
                           <template v-slot:prepend-inner>
                            <v-btn class="ml-0 pl-0"  elevation="0" small outlined v-if="DisclosedQty > 0"
                              style="background-color: white; width: 20px; height: 20px" fab dark x-small
                              @click="DisclosedQty--"  >
                              <v-icon  size="13" color="#666666">mdi-minus</v-icon>
                            </v-btn>
                          </template>
  
                          <template v-slot:append>
                            <v-btn class="mr-2" elevation="0" small outlined
                              style="background-color: white; width: 20px; height: 20px" fab dark x-small
                              @click="DisclosedQty++">
                              <v-icon Append size="13" color="#666666">mdi-plus</v-icon>
                            </v-btn>
                          </template>
                          </v-text-field>
  
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                   
  
                </div>
  
  
                <div class="pa-5 pt-4" v-if="this.selectedTab == '3'">
                  <p class="mb-0"  style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Investment type</p>
                  <v-radio-group class="pa-0 mt-4 ml-n1" v-model="GTTSingleOco" color="black" dense row mandatory>
                      <v-radio class="" color="black" v-bind:checked="active === 0"  value="Single">
                        <template  v-slot:label>
                          <p class="mb-0 sidehea"> Single</p>
                        </template></v-radio>
                      <v-radio color="black"  value="OCO">
                        <template v-slot:label>
                          <p class="mb-0 sidehea"> OCO</p>
                        </template></v-radio>
                    </v-radio-group>
                    <p class="mb-2 pt-3" style="color: var(--Grey, #666);font-size: 12px;font-weight: 469;line-height: 12px;">One Cancels Other: Either the stoploss or the target order is placed when the Last Traded Price (LTP) crosses the respective trigger. Can be used to set target and stoploss for a position/holding.</p>
          <v-card color="#F1F3F8" class="elevation-0 px-2 py-1 mt-7" width="fit-content">
                    <p class="mb-0" style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px;letter-spacing: 1px;">STOPLOSS</p>
                  </v-card>
  
                  <v-row class="mt-1"> 
                    <v-col cols="4" class="pb-0">
                      <p class="mb-2 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Quantity</p>
                      <v-text-field hide-spin-buttons v-model="lotsise" :step="lotsise"   :value="lotsise"
                          class="sidetext searchforcommiditytexts ml-0 pl-0 mt-1 pa-0" type="number"
                          background-color="#F1F3F8" solo rounded flat dense :min="lotsise"
                          :rules="nameRules" req >
                          <template v-slot:prepend-inner>
                            <v-btn class="ml-0 pl-0"  elevation="0" small outlined v-if="lotsise > DetalDatastore.ls"
                              style="background-color: white; width: 20px; height: 20px" fab dark x-small
                              @click="lotsise--"  >
                              <v-icon  size="13" color="#666666">mdi-minus</v-icon>
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
                    </v-col>
                    <v-col cols="4" class="pb-0">
                      <p class="mb-2 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Price</p>
                      <v-text-field hide-spin-buttons :step="DetalDatastore.ti" v-model="parseFloatlp" 
                            class="sidetext searchforcommiditytexts mt-1 pa-0" type="number" background-color="#F1F3F8"
                           solo rounded flat dense :rules="[v => !!v || 'Price is required',checkPriceRules.Uppercase(parseFloatlp,this.parseFloatUC),checkPriceRules.LowerCase(parseFloatlp,this.parseFloatLc)]">
                            <template v-slot:prepend-inner>
                              <v-btn class="ml-0 pl-0" elevation="0" small outlined style="background-color: white;
                            width: 20px; height: 20px;
                          " fab dark x-small>
                                <v-icon size="13" color="#666666">mdi-currency-rupee</v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
                    </v-col>
                    <v-col cols="4" class="pb-0">
                      <p class="mb-2 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Trigger Price</p>
                            <v-text-field v-model="slpriceTrigger" :rules="SlTriggerPriceRules"
                            class="searchforcommiditytexts sidetext mt-2 pa-0" type="number" hide-spin-buttons
                            background-color="#F1F3F8" solo rounded flat dense>
                            <template v-slot:prepend-inner>
                              <v-btn class="ml-0 pl-0" elevation="0" small outlined style="
                            background-color: white;
                            width: 20px;
                            height: 20px;
                          " fab dark x-small @click="decrementValue">
                                <v-icon size="12" color="#666666">mdi-currency-rupee</v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
                    </v-col>
                    </v-row>
  
                    <!-- <div class=""> -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="578" height="1" viewBox="0 0 578 1" fill="none">
  <path d="M0 0H578V1H0V0Z" fill="#F1F2F4"/>
                      </svg>
                    <!-- </div> -->
  
            <div v-if="this.selectedTab == '3' && GTTSingleOco == 'OCO' ">
                    <v-card color="#F1F3F8" class="elevation-0 px-2 py-1 mt-3" width="fit-content">
                    <p class="mb-0" style="color: #666;font-size: 10px;font-weight: 469;line-height: 12px;letter-spacing: 1px;">TARGET</p>
                  </v-card>
  
                  <v-row class="mt-1"> 
                    <v-col cols="4" class="pb-0">
                      <p class="mb-2 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Quantity</p>
                      <v-text-field hide-spin-buttons v-model="lotsise" :step="lotsise"   :value="lotsise"
                          class="sidetext searchforcommiditytexts ml-0 pl-0 mt-1 pa-0" type="number"
                          background-color="#F1F3F8" solo rounded flat dense :min="lotsise"
                          :rules="nameRules" req >
                          <template v-slot:prepend-inner>
                            <v-btn class="ml-0 pl-0"  elevation="0" small outlined v-if="lotsise > DetalDatastore.ls"
                              style="background-color: white; width: 20px; height: 20px" fab dark x-small
                              @click="lotsise--"  >
                              <v-icon  size="13" color="#666666">mdi-minus</v-icon>
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
                    </v-col>
                    <v-col cols="4" class="pb-0">
                      <p class="mb-2 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Price</p>
                      <v-text-field hide-spin-buttons :step="DetalDatastore.ti" v-model="parseFloatlp" 
                            class="sidetext searchforcommiditytexts mt-1 pa-0" type="number" background-color="#F1F3F8"
                           solo rounded flat dense :rules="[v => !!v || 'Price is required',checkPriceRules.Uppercase(parseFloatlp,this.parseFloatUC),checkPriceRules.LowerCase(parseFloatlp,this.parseFloatLc)]">
                            <template v-slot:prepend-inner>
                              <v-btn class="ml-0 pl-0" elevation="0" small outlined style="background-color: white;
                            width: 20px; height: 20px;
                          " fab dark x-small>
                                <v-icon size="13" color="#666666">mdi-currency-rupee</v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
                    </v-col>
                    <v-col cols="4" class="pb-0">
                      <p class="mb-2 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Trigger Price</p>
                            <v-text-field v-model="slpriceTrigger" :rules="SlTriggerPriceRules"
                            class="searchforcommiditytexts sidetext mt-2 pa-0" type="number" hide-spin-buttons
                            background-color="#F1F3F8" solo rounded flat dense>
                            <template v-slot:prepend-inner>
                              <v-btn class="ml-0 pl-0" elevation="0" small outlined style="
                            background-color: white;
                            width: 20px;
                            height: 20px;
                          " fab dark x-small @click="decrementValue">
                                <v-icon size="12" color="#666666">mdi-currency-rupee</v-icon>
                              </v-btn>
                            </template>
                          </v-text-field>
                    </v-col>
                    </v-row>
                  </div>
  
                    <v-checkbox class="mt-0 mb-3" color="#000000"  
                    :rules="[v => !!v || 'You must agree to continue!']"
                    style="font-weight:559"
                    >
              <template v-slot:label>
                <p class="mb-0 pt-2 pl-2" style="color: #666;font-size: 11px;font-weight: 469;
  line-height: 17px; 
  text-transform: capitalize;"> I hereby undertake that I have read the Red Herring Prospectus and I am eligible bidder as per the applicable provisions of SEBI (Issue of Capital & Disclosure Agreement, 2009) regulations</p>
  </template></v-checkbox>
  
                  </div>
                  <!-- v-divider use svg image start -->
                  <div class="px-5" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="579" height="2" viewBox="0 0 579 2" fill="none">
                    <path d="M578 1.5C578.276 1.5 578.5 1.27614 578.5 1C578.5 0.723858 578.276 0.5 578 0.5V1.5ZM0 1.5H1.50521V0.5H0L0 1.5ZM4.51562 1.5H7.52604V0.5H4.51562V1.5ZM10.5365 1.5H13.5469V0.5H10.5365V1.5ZM16.5573 1.5H19.5677V0.5H16.5573V1.5ZM22.5781 1.5H25.5885V0.5H22.5781V1.5ZM28.599 1.5H31.6094V0.5H28.599V1.5ZM34.6198 1.5H37.6302V0.5H34.6198V1.5ZM40.6406 1.5H43.651V0.5H40.6406V1.5ZM46.6615 1.5H49.6719V0.5H46.6615V1.5ZM52.6823 1.5H55.6927V0.5H52.6823V1.5ZM58.7031 1.5H61.7136V0.5H58.7031V1.5ZM64.724 1.5H67.7344V0.5H64.724V1.5ZM70.7448 1.5H73.7552V0.5H70.7448V1.5ZM76.7656 1.5H79.776V0.5H76.7656V1.5ZM82.7865 1.5H85.7969V0.5H82.7865V1.5ZM88.8073 1.5H91.8177V0.5H88.8073V1.5ZM94.8281 1.5H97.8385V0.5H94.8281V1.5ZM100.849 1.5H103.859V0.5H100.849V1.5ZM106.87 1.5H109.88V0.5H106.87V1.5ZM112.891 1.5H115.901V0.5H112.891V1.5ZM118.911 1.5H121.922V0.5H118.911V1.5ZM124.932 1.5H127.943V0.5H124.932V1.5ZM130.953 1.5H133.964V0.5H130.953V1.5ZM136.974 1.5H139.984V0.5H136.974V1.5ZM142.995 1.5H146.005V0.5H142.995V1.5ZM149.016 1.5H152.026V0.5H149.016V1.5ZM155.036 1.5H158.047V0.5H155.036V1.5ZM161.057 1.5H164.068V0.5H161.057V1.5ZM167.078 1.5H170.089V0.5H167.078V1.5ZM173.099 1.5H176.109V0.5L173.099 0.5V1.5ZM179.12 1.5H182.13V0.5H179.12V1.5ZM185.141 1.5H188.151V0.5H185.141V1.5ZM191.162 1.5H194.172V0.5H191.162V1.5ZM197.182 1.5H200.193V0.5H197.182V1.5ZM203.203 1.5H206.214V0.5H203.203V1.5ZM209.224 1.5H212.234V0.5H209.224V1.5ZM215.245 1.5H218.255V0.5H215.245V1.5ZM221.266 1.5H224.276V0.5H221.266V1.5ZM227.287 1.5H230.297V0.5H227.287V1.5ZM233.307 1.5H236.318V0.5H233.307V1.5ZM239.328 1.5H242.339V0.5H239.328V1.5ZM245.349 1.5H248.36V0.5H245.349V1.5ZM251.37 1.5H254.38V0.5H251.37V1.5ZM257.391 1.5H260.401V0.5H257.391V1.5ZM263.412 1.5H266.422V0.5H263.412V1.5ZM269.432 1.5H272.443V0.5H269.432V1.5ZM275.453 1.5H278.464V0.5H275.453V1.5ZM281.474 1.5H284.484V0.5H281.474V1.5ZM287.495 1.5H290.505V0.5L287.495 0.5V1.5ZM293.516 1.5H296.526V0.5H293.516V1.5ZM299.536 1.5H302.547V0.5H299.536V1.5ZM305.557 1.5H308.568V0.5H305.557V1.5ZM311.578 1.5H314.589V0.5H311.578V1.5ZM317.599 1.5H320.609V0.5H317.599V1.5ZM323.62 1.5H326.63V0.5H323.62V1.5ZM329.641 1.5H332.651V0.5H329.641V1.5ZM335.661 1.5H338.672V0.5H335.661V1.5ZM341.682 1.5H344.693V0.5H341.682V1.5ZM347.703 1.5H350.713V0.5H347.703V1.5ZM353.724 1.5H356.734V0.5H353.724V1.5ZM359.745 1.5H362.755V0.5H359.745V1.5ZM365.765 1.5H368.776V0.5H365.765V1.5ZM371.786 1.5H374.797V0.5H371.786V1.5ZM377.807 1.5H380.817V0.5H377.807V1.5ZM383.828 1.5H386.838V0.5H383.828V1.5ZM389.849 1.5H392.859V0.5H389.849V1.5ZM395.869 1.5H398.88V0.5H395.869V1.5ZM401.89 1.5H404.901V0.5H401.89V1.5ZM407.911 1.5H410.922V0.5H407.911V1.5ZM413.932 1.5H416.942V0.5H413.932V1.5ZM419.953 1.5H422.963V0.5H419.953V1.5ZM425.974 1.5H428.984V0.5H425.974V1.5ZM431.994 1.5H435.005V0.5H431.994V1.5ZM438.015 1.5H441.026V0.5H438.015V1.5ZM444.036 1.5H447.046V0.5H444.036V1.5ZM450.057 1.5H453.067V0.5H450.057V1.5ZM456.078 1.5H459.088V0.5H456.078V1.5ZM462.098 1.5H465.109V0.5H462.098V1.5ZM468.119 1.5H471.13V0.5H468.119V1.5ZM474.14 1.5H477.15V0.5H474.14V1.5ZM480.161 1.5H483.171V0.5H480.161V1.5ZM486.182 1.5H489.192V0.5H486.182V1.5ZM492.202 1.5H495.213V0.5H492.202V1.5ZM498.223 1.5H501.234V0.5H498.223V1.5ZM504.244 1.5H507.255V0.5H504.244V1.5ZM510.265 1.5H513.275V0.5H510.265V1.5ZM516.286 1.5H519.296V0.5H516.286V1.5ZM522.307 1.5H525.317V0.5H522.307V1.5ZM528.328 1.5H531.338V0.5H528.328V1.5ZM534.348 1.5H537.359V0.5H534.348V1.5ZM540.369 1.5H543.38V0.5H540.369V1.5ZM546.39 1.5H549.401V0.5H546.39V1.5ZM552.411 1.5H555.421V0.5H552.411V1.5ZM558.432 1.5H561.442V0.5H558.432V1.5ZM564.453 1.5H567.463V0.5H564.453V1.5ZM570.474 1.5H573.484V0.5H570.474V1.5ZM576.495 1.5L578 1.5V0.5H576.495V1.5Z" fill="#D9DBDC"/>
                    </svg>
                  </div>
                 <!--v-divider use svg image start end -->
             <div class="pt-5 px-5"> 
                 <v-row>
                  <v-col cols="7">
                    <p class="mb-2" style="color: var(--Blue, #666);font-size: 14px;font-weight: 469;line-height: 100%;letter-spacing: -0.07px;">Margin: <span style="color: var(--Blue, #0037B7);font-size: 14px;font-weight: 559;line-height: 100%;letter-spacing: -0.07px;"> &nbsp;₹ {{GetMarginOrder.ordermargin}}</span></p>
                    <p class="mb-0" style="color: var(--Blue, #666);font-size: 14px;font-weight: 469;line-height: 100%;letter-spacing: -0.07px;">Charges: <span style="color: var(--Blue, #0037B7);font-size: 14px;font-weight: 559;line-height: 100%;letter-spacing: -0.07px;"> &nbsp;₹ {{GetMarginOrder.cash}}</span></p>
                    </v-col>
                    <v-col cols="5">
                      <div class="d-flex float-right">
                        <v-btn @click="digs = false" elevation="0" class="mr-2"  outlined rounded
                      style="background-color: #f1f3f8; border: 1px solid#F1F3F8">
                      <span style="color: #424852;font-size: 14px;font-weight: 469;line-height: 100%;letter-spacing: -0.112px;">
                      Cancel</span>
                    </v-btn>
                    <v-btn  @click="validate" elevation="0" class="text-none" outlined rounded
                      style="background-color: #000000; border: 1px solid#F1F3F8">
                      <span style="
                    color: #ffffff;font-size: 14px;font-weight: 469;line-height: 100%;letter-spacing: -0.112px;">
                    Verify Buy</span>
                    </v-btn>
                    </div>
  
  
                    </v-col>
                 </v-row>
             </div>
          </v-card>
        </v-card>
        </v-form>
      </div>
  
  
      <v-dialog v-model="HoldingDialouge" persistent max-width="50%" height="">
        <v-card class="pt-1 px-1 " width="100%" height="70%" style="overflow-y:hidden">
          <v-card color="#203464" class="ma-1" height="70px">
            <div class="d-flex pt-3">
              <p class="white--text mb-0 subtitle-1 font-weight-bold pl-5">{{ clickstorevalue.tsym }}</p>
              <v-card color="white" class=" ml-2 mt-2" height="20px">
                <p class="mb-0 fontsizeonetwo">{{ clickstorevalue.exch }}</p>
              </v-card>
              <v-btn class="pa-0 ml-auto mr-3 white--text" @click="HoldingDialouge = false" width="fit-content" icon
                height="fit-content">
                <v-icon icon size="15">mdi-close</v-icon></v-btn>
            </div>
          </v-card>
          <v-row no-gutters class="py-4">
            <v-col cols="6">
              <v-row>
                <v-col cols="6" class="pl-5">
                  <p class="fontsizeonetwo font-weight-regular mb-1">Saleable Qty:</p>
                  <p class="fontsizeonetwo font-weight-regular mb-1">Npoa Qty:</p>
                  <p class="fontsizeonetwo font-weight-regular mb-1">Pledged Qty:</p>
                  <p class="fontsizeonetwo font-weight-regular mb-1">Avg Price:</p>
                  <p class="fontsizeonetwo font-weight-regular mb-1">Day,s P&L:</p>
                </v-col>
  
                <v-col cols="6" class="pl-5">
                  <p class="fontsizeonetwo font-weight-regular mb-1">{{ clickstorevalue.trdqty }}</p>
                  <p class="fontsizeonetwo font-weight-regular mb-1">{{ clickstorevalue.npoadqty }}</p>
                  <p class="fontsizeonetwo font-weight-regular mb-1">---</p>
                  <p class="fontsizeonetwo font-weight-regular mb-1">{{ clickstorevalue.Avgprice }}</p>
                  <p class="fontsizeonetwo font-weight-regular mb-1">{{ clickstorevalue.pnl }}</p>
                </v-col>
              </v-row>
            </v-col>
  
          </v-row>
  
  
        </v-card>
      </v-dialog>
    
    </div>
  </template>
  <script>
  
  import axios from 'axios';
  import { api } from '../../apiUrl.js'
//   import { Userid1 } from '../../apiUrl.js'
//   import { Usersession } from '../../apiUrl.js'
import { clientid, session } from '../../apiUrl'
import Datafeed from '../../../src/alldata/feedFactory';
  export default {
    props: ['message'],
    components: {},
    data() {
      return {
        tkchart:'',
        lp:0,
        ddddddddddd:[],
        ltpvalues:[],
        responsecheck:[],
        GetMarginOrder:[],
        Amocheck:'',
        MKTValueDefault:0.0,
        TargetPercentage:"",
        StopLossPrice:"",
        CheckBoxTrue:false,
        CheckBoxTrueTWO:false,
        lotsise: null,
        DayAndIoc:"",
        BuySELL:"",
        isActive: false,
        OrderbookGetnoren:[],
        mktProfit:5,
        remainders:"",
        coverOrderStopPrice: 1,
        SlmktProftPercentage: 5,
        row: null,
        GTTSingleOco:null,
        DayAndIOC:null,
        kkkkkkk: false,
        DisclosedQty: 0,
        slMktTriggerPrice: "",
        slpriceTrigger: "",
        ResponScriptrInfo: {},
        DetalData: "",
        nameRules: [
          v => !!v || 'Quantity is required',
        ],
        parseFloatLc:"",
        parseFloatlp:"",
        checkPriceRules:{
          Uppercase(value,max) {
            return (value || "") <= max || `Price Cannot be Greater than Upper circiut Limit ${ max } `;
     }, 
     LowerCase(values,min) {
            return (values || "") >= min || `Price Cannot be Lesser than Lower circiut Limit ${min} `;
     }, 
        },
      
  
        PriceRules: [
          v => !!v || 'Price is required',
          v =>v <= this.parseFloatUC  || `Price Cannot be Greater than Upper circiut Limit ${this.parseFloatUC} `,
          v => v >= this.parseFloatLc || `Price Cannot be Lesser than Lower circiut Limit ${this.parseFloatLc} `,
        ], 
        SlTriggerPriceRules: [
          v => !!v || 'SL Trigger Price is required',
          v => parseFloat(v) >= parseFloat(this.ResponScriptrInfo.lc) || `Trigger Price is Lower than ${this.ResponScriptrInfo.lc} for order of type SL`,
          v => parseFloat(v) <= parseFloat(this.ResponScriptrInfo.uc) || ` Price Cannot be Lesser than Lower circiut Limit ${this.ResponScriptrInfo.uc}`,
        ],
        SlmktTriggerPriceRules: [
          v => !!v || 'SLM Trigger Price is required',
          v => parseFloat(v) >= parseFloat(this.ResponScriptrInfo.lc) || `Trigger Price is Lower than ${this.ResponScriptrInfo.lc} for order of type SL`,
          v => parseFloat(v) <= parseFloat(this.ResponScriptrInfo.uc) || ` Price Cannot be Lesser than Lower circiut Limit ${this.ResponScriptrInfo.uc}`,
        ],
        CoverOrderStopPrice: [
          v => !!v || 'Stop Price is required',
        ],
        snackbar: false,
        text: 'My timeout is set to 2000.',
        timeout: 2000,
        marketpercenteage: 5,
        valid: true,
        // place order start
        FirstInitialValue: "",
        DetalDatastore: {},
  
        dig1: false,
        chipact: "market",
        market: false,
        limit: true,
        sl: false,
        slmkt: false,
        selectedTab: 0,
        assign: "",
        showmore2: true,
        showmore23: false,
        perpage: 5,
        dialog3: false,
        digs: true,
        dig2: false,
        divi: true,
        crop: false,
        judi: false,
        anno: false,
        // place order end
  
        BuyPagePopUpShow: true,
        firestFrezqty:0,
        remainder:0,
        tokenget: [],
        pnlChngnewww: [],
        clickstorevalue: [],
        HoldingDialouge: false,
        numberadd: '',
        searchdatatable: "",
        exchtsym: [],
        // hdfumutuLFUND: null,
        selectedItem: false,
        fundsclickchnage: "",
        selectedRows: [],
        itemsaaass: [
          { text: 'Add', icon: require('@/assets/Menuicon/add.svg'), },
          { text: 'Exit', icon: require('@/assets/Menuicon/Exit.svg'), },
          { text: 'View Breakdown', icon: require('@/assets/Menuicon/viewBreakedown.svg'), },
          { text: 'Info', icon: require('@/assets/Menuicon/info.svg'), },
          { text: 'Create GTT / GTC', icon: require('@/assets/Menuicon/info.svg'), },
          { text: 'Create Alert', icon: require('@/assets/Menuicon/Alert.svg'), },
          { text: 'Market Depth', icon: require('@/assets/Menuicon/MarketDepth.svg'), },
          { text: 'Chart', icon: require('@/assets/Menuicon/Charts.svg'), },
          { text: 'Add to market watch', icon: require('@/assets/Menuicon/AddToMarketWatch.svg'), },
          { text: 'Fundamentals', icon: require('@/assets/Menuicon/Fundamentales.svg'), },
  
        ],
        itemsmenu: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ],
        selected: [],
        mutualfundheaders: [
          {
            text: "Scrips",
            align: "left",
            sortable: false,
            value: "tsym", class: "successScrips", width: "48%"
          },
          { text: "Sector", sortable: false, value: "calories", class: "successScrips" },
          { text: "Mkt cap (cr)", sortable: false, value: "calories", class: "successScrips" },
          { text: "Volume (k)", sortable: false, value: "v", class: "successScrips" },
          { text: "Price", sortable: false, value: "lp", class: "successScrips" },
          { text: "%Chg", sortable: false, value: "iron", class: "successScrips" },
  
        ],
  
  
        Holdingitems: [
          {
            id: 1,
            Title: "Reliance industries",
            sector: "Oil & Gas",
            alert: "ALERT",
            event: "EVENTS",
            image1: require('@/assets/zebu-stocks/alertimg.svg'),
            image2: require('@/assets/zebu-stocks/eventesimg.svg'),
          },
          {
            id: 2,
            chipname: "Reco",
            Title: "HCL Technologies",
            sector: "IT services",
            News: "NEWS",
            image3: require('@/assets/zebu-stocks/newsimg.svg'),
          },
          {
            id: 3,
            Title: "Tata Motors",
            sector: "Autos",
            alert: "ALERT",
  
            image1: require('@/assets/zebu-stocks/alertimg.svg'),
  
          },
          {
            id: 4,
            Title: "Bharti Airtel",
            sector: "Telecom",
            alert: "ALERT",
            image1: require('@/assets/zebu-stocks/alertimg.svg'),
            News: "News",
            image3: require('@/assets/zebu-stocks/newsimg.svg'),
          },
          {
            id: 5,
            Title: "HDFC bank", sector: "Telecom",
            alert: "ALERT",
            event: "EVENTS",
            image1: require('@/assets/zebu-stocks/alertimg.svg'),
            image2: require('@/assets/zebu-stocks/eventesimg.svg'),
          },
          {
            id: 6,
            Title: "Delhivery", sector: "Telecom",
            event: "EVENTS",
            image2: require('@/assets/zebu-stocks/eventesimg.svg'), News: "NEWS",
            image3: require('@/assets/zebu-stocks/newsimg.svg'),
  
          },
          {
            id: 7,
            Title: "One 97 Paytm", sector: "Telecom",
            alert: "ALERT",
            event: "EVENTS", image1: require('@/assets/zebu-stocks/alertimg.svg'),
            image2: require('@/assets/zebu-stocks/eventesimg.svg'),
          },
          {
            id: 8,
            Title: "IndusInd Bank", sector: "Telecom",
            alert: "ALERT",
            image1: require('@/assets/zebu-stocks/alertimg.svg'),
            News: "News",
            image3: require('@/assets/zebu-stocks/newsimg.svg'),
          },
          {
            id: 9,
            Title: "Laurus Labs", sector: "Telecom",
            alert: "ALERT",
            // event: "EVENTS",
            image1: require('@/assets/zebu-stocks/alertimg.svg'),
            // image2: require('@/assets/zebu-stocks/eventesimg.svg'),
            News: "NEWS",
            image3: require('@/assets/zebu-stocks/newsimg.svg'),
          },
          {
            id: 10,
            Title: "Indian Hotels", sector: "Telecom",
            image2: require('@/assets/zebu-stocks/eventesimg.svg'),
            News: "NEWS",
            image3: require('@/assets/zebu-stocks/newsimg.svg'),
          },
          {
            id: 11,
            Title: "Dalmia Bharat", sector: "Telecom",
            alert: "ALERT",
            event: "EVENTS", image1: require('@/assets/zebu-stocks/alertimg.svg'),
            image2: require('@/assets/zebu-stocks/eventesimg.svg'),
            News: "NEWS",
            image3: require('@/assets/zebu-stocks/newsimg.svg'),
          },
        ],
  
        // hdfcFundTab: ["Overview", "Ratios", "Dividend", "Returns"],
        chipNmaeGet:"",
        orderBookres:[],
        snackbarHide:false,
        SliceQtyPopup:false,
        responseSTorePlaceorder:[],
        QunatityCheck:"",
        fullName:null,
  
      };
    },
    mounted() {
      console.log("123456",this.message);
      this.parseFloatlp=parseFloat(this.message.lp)
      this.lotsise=parseInt(this.message.ls)
      this.GetInfoDetailes();
      this.QunatityCheck= this.message.ls
      console.log("QunatityCheck",this.QunatityCheck);
        this.abc();
   
       console.log("this.ResponScriptrInfo",this.parseFloatLc);
      console.log("v-model name check", this.coverOrderStopPrice)
    },
    methods: {
      asdfghj() {
        console.log(this.QunatityCheck,"fulllname")
      },
        abc() {
            console.log("23223234565432",this.message);
      Datafeed.subscribeQuotesChain(
        this.message,
        this.getltp,
            undefined
          );
        },
getltp(data) {
console.log(data,'121211212121')
var upd_obj = this.message.map(obj => {
    this.lp = (data[0].v.lp)
  if (obj.token == data[0].v.token) {
    obj.lp = data[0].v.lp;
    obj.volum =data[0].v.volume
    obj.prev_close_price = data[0].v.prev_close_price
  }
  return obj;
})

console.log(upd_obj, "upd_obj")
if (this.tkchart == data[0].v.token) {
  
  this.lpclose = ((data[0].v.lp - data[0].v.prev_close_price) / data[0].v.lp) * 100
  this.change = data[0].v.lp - data[0].v.prev_close_price
}
  this.ddddddddddd = (upd_obj)
},
lsiofltp(){
console.log('listi of ltp' , this.message)
},
   GetInfoDetailes() {
      var axiosthis = this;
      axiosthis.ResponScriptrInfo = {};
      let data = JSON.stringify({
        "userId": clientid,
        "exch": this.message.exch,
        "scriptDetailReq": "GetSecurityInfo",
        "token": this.message.token,
        "session": session
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/ScriptDetails`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {

          console.log(response, "responseresponseresponse");
          axiosthis.ResponScriptrInfo = response.data
          axiosthis.parseFloatLc =parseFloat(response.data.lc)
          axiosthis.parseFloatUC = parseFloat(response.data.uc)
            console.log(axiosthis.parseFloatUC,"123123123");
            axiosthis.GetOrderMargin();

        })
        .catch((error) => {
          console.log(error);
        });


    },
      selectedTabClickChange() {
  console.log(this.selectedTab,"nnnnnnnnnn");
  
      },
      calcMargin(i) {
              return (i*61) + 'px'
          },
      SliceQtyPlaceOrder() {
  console.log( this.firestFrezqty,"FrezeQty Check");
  
  for (let i = 0; i < this.firestFrezqty;  i++) {
      this.firstRunFunct();
  console.log(this.firestFrezqty,"this.firestFrezqty")
  }
  
  if(this.remainders != 0) {
    this.firstRunFunct();
    console.log(this.firestFrezqty,"this.firestFrezqty")
  }
  this.Orderbook();
      },
  
//   getalldata() {
//     if(this.message){
//         this.GetInfoDetailes();
//     }
//   },
      
  
      GetOrderMargin () {
        var axiosthis = this;
  let data = JSON.stringify({
    "userId": "ZP00194",
    "exch": this.message.exch,
    "tsym": this.message.tsym,
    "qty": this.lotsise,
    "blprc": "",
    "trgprc": "",
    "prc": this.message.lp,
    "prd": "C",
    "trantype":"B",
    "prctyp": "LMT",
    "rorgqty": "",
    "rorgprc": "",
    "session": "f6d1acb965de314fc2da356eeacb264d979a99ed84cc7ed7bc99f4c3069add99"
  });
  
  
  console.log("DataGet check",data)
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.5.160:5001/GetOrderMargin',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
  console.log("response check" ,response);
  axiosthis.GetMarginOrder=response.data
  })
  .catch((error) => {
    console.log(error);
  });
  
      },
      validate() {
        console.log("kkkkkk",this.selectedTab)
   
  if(this.limit==true || this.market == true ){
    this.chipact="LMT"
  }
  else if (this.sl || this.slmkt){
    this.chipact = "SL-LMT"
    this.TargetPercentage =  this.mktProfit
    this.slpriceTrigger =  this.sl? this.slpriceTrigger : ''
    this.parseFloatlp = this.sl ? this.parseFloatlp : this.message.lp
    console.log("chipact",this.chipact)
  }
  else if (this.market ) {
    this.TargetPercentage = this.mktProfit
  }
  if ((this.lotsise > parseInt(this.ResponScriptrInfo.frzqty))  && (this.$refs.form.validate() == !false)) {
    this.firestFrezqty = Math.floor(this.lotsise / parseInt(this.ResponScriptrInfo.frzqty))
         this.remainders =(this.lotsise - ((parseInt(this.ResponScriptrInfo.frzqty) * parseFloat(this.firestFrezqty) ))).toFixed()
         this.firestFrezqty=this.firestFrezqty>=10?this.remaindes !=0? 9 :10 :this.firestFrezqty
         console.log(this.firestFrezqty, "firestFrezqty")
         console.log(this.remainders, "remainder check")
         this.SliceQtyPopup=true
  console.log("this.chipact",this.chipact)
  }
  else if (this.$refs.form.validate() == !false) {
  this.firstRunFunct();
      }
      },
      firstRunFunct() {
        var axiosthis =this;
        console.log("this.row",this.row)
        if ( this.isActive==false) {
    this.BuySELL='B'
    console.log(this.BuySELL,"storeggdhdd");
   }
   else {
    this.BuySELL='S'
    console.log(this.BuySELL,"storeggdhdd111");
   }
        if((this.selectedTab == '0' && this.row || this.selectedTab == '2'  )  ) {
    this.selectedTab =(this.row == "Delivery") ? "C" : "I" 
  this.Amocheck=this.selectedTab == '2' ? 'Yes' : ''
  console.log(this.selectedTab,"00000000")
  }
  if (this.selectedTab == '1') {
    this.selectedTab ='H'
    this.DisclosedQty = ''
    this.slpriceTrigger = ''
    
  }
        if( this.lotsise > parseInt(this.ResponScriptrInfo.frzqty) ) {
          this.lotsise=this.remainders
          var hhhhdh=this.remainders == '0' ? this.ResponScriptrInfo.frzqty : this.remainders
          this.lotsise=hhhhdh
        console.log(this.lotsise,"pppppppppp")
        }
        else if(this.remainders != 0){
          this.lotsise=this.ResponScriptrInfo.frzqty
        }
        else if (!this.CheckBoxTrueTWO || this.CheckBoxTrueTWO ) {
          this.DayAndIoc =( this.CheckBoxTrueTWO && (this.DayAndIOC== "DAY")) || !this.CheckBoxTrueTWO ? "DAY" : "IOC"
        }
        let data = JSON.stringify({
    "userId": "ZP00194",
    "exch": this.message.exch,
    "tsym": this.message.tsym,
    "qty": this.lotsise,
    "prc": this.parseFloatlp,
     "dscqty":this.DisclosedQty,
     "prd": this.selectedTab,"trantype": this.BuySELL, "prctyp":this.chipact,
    "ret": this.DayAndIoc,
    "mktProt":this.TargetPercentage,
    "amo": this.Amocheck,
    "trgprc": this.slpriceTrigger,
    "trailprc": "",
    "blprc": this.StopLossPrice,
    "bpprc": "",
    "ordersource": "API",
    "session": "f6d1acb965de314fc2da356eeacb264d979a99ed84cc7ed7bc99f4c3069add99"
  });
  console.log(data,"datadatadata");
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.5.160:5001/PlaceOrder',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    axiosthis.responseSTorePlaceorder.push(response.data)
    console.log("123412341234",axiosthis.responseSTorePlaceorder)
    this.BuyPagePopUpShow=false
    this.SliceQtyPopup=false
    if (this.lotsise < parseInt(this.ResponScriptrInfo.frzqty)) {
      this.Orderbook();
    }
  
  })
  .catch((error) => {
    console.log(error);
  });
      },
      Orderbook() {
        var axiosthis=this;
        console.log("responseSTorePlaceorder",this.responseSTorePlaceorder)
  let datas = JSON.stringify({
    "userId": "ZP00194",
    "bookNameReq": "OrderBook",
    "session": "f6d1acb965de314fc2da356eeacb264d979a99ed84cc7ed7bc99f4c3069add99"
  });
  let configs = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.5.160:5001/TradeData',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : datas  
  };
  
  axios.request(configs)
  .then((response) => {
    axiosthis.OrderbookGetnore=[]
    var responseStore= response.data
    console.log(responseStore,"responseStore");
  console.log("this.responseSTorePlace",this.responseSTorePlaceorder);
  axiosthis.OrderbookGetnoren = responseStore.filter(c => this.responseSTorePlaceorder.find(s => s.norenordno == c.norenordno))
  console.log(axiosthis.OrderbookGetnoren,"hhhhh");
  this.snackbarHide=true
  })
  .catch((error) => {
    console.log(error);
  });
      },
      
      MenuListItem(item, k) {
        console.log(item, k, "bbbbbbbbb");
        if (k.text == "Info") {
          this.HoldingDialouge = true
          this.clickstorevalue = item
        }
      },
  
      kkkkkkkkkk(item) {
        console.log(item, "item");
      },
      selectItem(item) {
        this.selectedItem = item
      },
      unSelectItem() {
        this.selectedItem = false
      },
  
//       DeatilesGet(item) {
//         var itemGet = item
  
//   console.log("ghghghghghg",itemGet)
//         this.parseFloatlp=parseFloat(item.lp)
//       this.lotsise=parseInt(item.ls)
//         console.log("lotsise",typeof this.lotsise)
  
//         console.log("this.DetalDatastore",typeof  this.parseFloatlp);
  
//         this.DetalDatastore = itemGet
  
      
        // this.GetInfoDetailes(itemGet);
  
  
    //   },
  
    }
  }
  </script>
  <style lang="scss">
  
    .v-messages__message {
      padding-top: 8px !important;
      color: #FF5252 !important;
    }
  .RowHover:hover .HovercontentDisplay {
    visibility: visible !important;
  }
  </style>
  <style lang="scss">
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
  .sliderr1.round {
    border-radius: 30px;
  }
  
  .sliderr1.round:before {
    border-radius: 40%;
  }
  
  .input-group .input-group__input {
    font-size: 1px !important;
  width:10px;
  }
  </style>