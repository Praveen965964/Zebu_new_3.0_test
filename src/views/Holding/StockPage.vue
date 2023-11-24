<template>
  <div>
<div v-for="(s,i) in OrderbookGetnoren" :key="i"> 
     <v-snackbar timeout="2900"  :value="true" absolute bottom center
      color="#00A1F2" :style="{'margin-bottom':calcMargin(i)}"  v-if="snackbarHide" >
    <p class="mb-0">Your <span v-if="s.trantype=='B'">BUY</span> <span v-else> S</span>
     Order {{ s.norenordno }} for {{ s.tsym }} in {{ s.exch }} is {{s.status  }}.</p> 
     </v-snackbar>
          </div>
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
         <v-col cols="6" class=" ">
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
                <p class="mb-0 sideheaq" >{{DetalDatastore.lp}}</p>
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
                <p class="mb-0 sideheaq" >{{DetalDatastore.lp}}</p>
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
    <v-dialog v-model="AddDialouge" max-width="605px">
      <v-form ref="form" v-model="valid">
       <v-card class="elevation-0 rounded-lg" style="height:550px;overflow: hidden;">
      <v-card outlined elevation="0" class="pa-5" style="background-color: #f1f3f8;height:90px;border: 1px solid #dee2eb;">
      <div class="d-flex">
      <p class="mb-0" style="color: #000;font-size: 16px;font-weight: 559;line-height: 100%;letter-spacing: 0.64px;">
                    {{ DetalDatastore.tsym }}
                    <span style="color: #666;font-size: 11px; font-weight: 500;line-height: 100%; letter-spacing: 0.44px;"> {{ DetalDatastore.exch }}</span>
                  </p>
                  <div class="ml-auto">
                    <div class="d-flex">
                      <v-btn class="pa-0 elevation-0 ml-1 white--text" dense small  style="height: 20px; min-width: 20px; border-radius: 4px" color="#43A833">
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
                <p class="sidetext pt-3 ">{{ DetalDatastore.exch }} : ₹ {{ parseFloat(DetalDatastore.lp) }}</p>
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
                          M-lot: {{ DetalDatastore.ls }}
                        </p>

                      </div>
                      <v-text-field hide-spin-buttons v-model="lotsise" :step="DetalDatastore.ls"   :value="lotsise"
                        class="sidetext searchforcommiditytexts ml-0 pl-0 mt-1 pa-0 centered-input" type="number"
                        background-color="#F1F3F8" solo rounded flat dense :min="DetalDatastore.ls"
                        :rules="nameRules"  >
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
                      <p class="" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Freeze qty: <span style="color: #666;font-size: 12px;font-weight: 469;line-height: 14px;">{{ResponScriptrInfo.frzqty }}</span></p>
                      </v-col>
                      <v-col cols="4">
                        <div class="d-flex">
                          <p class="mb-1 pl-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 14px;">Price</p>
                        <p class="mb-1 ml-auto mr-3" v-if="((this.selectedTab == '0' || this.selectedTab == '1' || this.selectedTab == '2' ) &&  ( limit || sl ))" style="color: #666;font-size: 12px;font-weight: 469;line-height: 14px;">Tick : {{ DetalDatastore.ti }} </p>
                      </div>
                      <v-text-field hide-spin-buttons :step="DetalDatastore.ti" v-model="parseFloatlp" v-if="((this.selectedTab == '0' || this.selectedTab == '1' || this.selectedTab == '2'  ) &&  ( limit || sl ))"
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
    </v-dialog>


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


    <v-row>
      <v-col cols="9">
        <v-card color="#FAFBFF" class="elevation-0 pt-4 pb-3" style="border: 1.5px solid #DADDE7;">
          <v-row>
            <v-col cols="7">
              <v-row>
                <v-col cols="4" class="pl-10">
                  <p class="mb-2"
                    style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">
                    Stocks Value</p>
                  <p class="mb-1 pl-1" style="color: #000;font-size: 15px;font-weight: 469;line-height: 100%; ">-</p>
                </v-col>
                <v-col cols="4">
                  <p class="mb-2"
                    style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">1D
                    Change</p>
                  <p class="mb-1 pl-1" style="color: #000;font-size: 15px;font-weight: 469;line-height: 100%; ">- <span
                      class="" style="color: #FF1717;font-size: 16px;font-weight: 469;line-height: 100%;"></span>
                  </p>
                </v-col>
                <v-col cols="4">
                  <p class="mb-2"
                    style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">
                    Invested</p>
                  <p class="mb-1" style="color: #000;font-size: 15px;font-weight: 469;line-height: 100%; ">{{
                    numberadd }} K</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="5">
              <v-row>
                <v-col cols="5">
                  <p class="mb-2"
                    style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">1D
                    Change</p>
                  <p class="mb-1 pl-1" style="color: #000;font-size: 15px;font-weight: 469;line-height: 100%; ">- <span
                      class="" style="color: #43A833;font-size: 16px;font-weight: 469;line-height: 100%;"></span>
                  </p>
                </v-col>
                <v-col cols="7">
                  <p class="mb-2"
                    style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">
                    Stock Position</p>
                  <div class="d-flex row pt-2">
                    <v-card color="#ECF8F1" class="px-2 py-1 ml-3 elevation-0">
                      <p class="mb-0 text-center"
                        style="color: #43A833;font-size: 10px;font-weight: 600;line-height: 16px; letter-spacing: 0.5px;">
                        {{ pnlChngnewww.filter(function (number) { return number > 0 }).length }} POSITIVE </p>
                    </v-card>
                    <v-card color="#FCF3F3" class="px-2 py-1 ml-2 elevation-0">
                      <p class="mb-0 text-center"
                        style="color: #FF1717;font-size: 10px;font-weight: 600;line-height: 16px; letter-spacing: 0.5px;">
                        {{ pnlChngnewww.filter(function (number) { return number < 0 }).length }} NEGATIVE</p>
                    </v-card>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card color="#FAFBFF" class="elevation-0 pt-4 pb-3" style="border: 1.5px solid #DADDE7;">
          <v-row>
            <v-col cols="6" class="pl-10">
              <p class="mb-2"
                style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">
                Today’s High </p>
              <p class="mb-1 pl-1" style="color: #43A833;font-size: 15px;font-weight: 469;line-height: 100%;">-</p>
            </v-col>
            <v-col cols="6">
              <p class="mb-2 "
                style="color: #5E6B7D;font-size: 14px;font-weight: 469;line-height: 100%; letter-spacing: -0.14px;">
                Today’s Low</p>
              <p class="mb-1 pl-1" style="color: #FF1717;font-size: 16px;font-weight: 469;line-height: 100%;">-</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    
    <v-tabs class="mt-5 " color="#000000" v-model="hdfumutuLFUND">
      <v-tab class="text-none" v-for="(fundstab, idx ) in hdfcFundTab" :key="idx"
        @click="fundsclickchnage = fundstab.title">
        <span class="pr-1 pl-1" style="font-size: 14px;font-family: 559;line-height: 16px;letter-spacing: -1px;">{{
          fundstab }}</span>
      </v-tab>
      <div class=" ml-auto">
        <v-text-field class="tophundraedmutual " v-model="searchdatatable" height="36px" background-color="#F1F3F8"
          label="Search Stocks" solo rounded flat dense>
          <template v-slot:prepend-inner>
            <img alt="" class="ml-1  shrink" :src="require('@/assets/zebu-stocks/searchicon.svg')" width="20px"
              height="18px" />
          </template>
        </v-text-field>
      </div>
      <v-tabs-slider color="#000000"></v-tabs-slider>
    </v-tabs>
    <v-tabs-items v-model="hdfumutuLFUND" class="">
      <v-tab-item>
        <v-data-table :search="searchdatatable" dense :headers="mutualfundheaders" :items="exchtsym" class="elevation-0"
          hide-default-footer style="border: 1px solid #efeef3;background-color:white">

          <template v-slot:[`header.iron`]="{ header }">
            <v-row class="" no-gutters>
              <v-col cols="8" class="">
                <p class="mb-0 pt-2 ">{{ header.text }}</p>
              </v-col>
              <v-col cols="2" class="pl-0 pr-0">
                <v-menu left offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" plain :ripple="false" class="" width="fit-content" icon>
                      <v-icon color="black">mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>
          </template>
          <template v-slot:[`header.AUM`]="{ header }">
            <p class="mb-0">{{ header.text }}<span
                style="color: #999;font-size: 12px;font-weight: 469;line-height: 16px;"> (cr)</span></p>
          </template>
          <template v-slot:[`header.TER`]="{ header }">
            <p class="mb-0">{{ header.text }}<span
                style="color: #999;font-size: 12px;font-weight: 469;line-height: 16px;"> (%)</span></p>
          </template>
         
          <template #item="{ item }">
            <tr class="RowHover" style="cursor: pointer" @click="kkkkkkkkkk(item)" @mouseover="selectItem(item)"
              @mouseleave="unSelectItem(item)">
              <td class="pt-4  pb-2" style="">
                <v-row>
                  <v-col cols="5">
                    <div>
                      <p class="mb-0"
                        style="width:;color: #000000;font-size: 14px;font-weight:559;line-height:16px;letter-spacing:-0.5px;  cursor: pointer;">
                        {{ item.tsym }}</p>
                    </div>

                    <div class="display-flex row mt-2 pb-1">
                      <v-card class=" ml-2 mb-3 rounded-md" elevation="0" align="center" width="60px" height="22px"
                        :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                        <div class="d-flex row  pt-4">
                          <svg class="ml-5 mt-1 " xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                            viewBox="0 0 8 8" fill="none">
                            <path
                              d="M1.9987 8C1.82189 8 1.65232 7.92976 1.52729 7.80474C1.40227 7.67971 1.33203 7.51014 1.33203 7.33333V0.666667C1.33203 0.489856 1.40227 0.320286 1.52729 0.195262C1.65232 0.0702379 1.82189 0 1.9987 0C2.17551 0 2.34508 0.0702379 2.4701 0.195262C2.59513 0.320286 2.66536 0.489856 2.66536 0.666667V7.33333C2.66536 7.51014 2.59513 7.67971 2.4701 7.80474C2.34508 7.92976 2.17551 8 1.9987 8Z"
                              fill="#666666" />
                            <path d="M3.33203 4.33366V0.666992L7.33203 0.666992V4.33366H3.33203Z" fill="#666666" />
                          </svg>
                          <p class="font-weight-medium mb-0 pl-1" style="color:#666666;font-size:10px"> ALERT
                          </p>
                        </div>

                      </v-card>
                      <v-card class="rounded-md ml-2 mb-3" elevation="0" width="68px" height="22px"
                        :color="item === selectedItem ? '#FFFFFF' : '#F1F3F8'">
                        <div class="d-flex row  pt-4">
                          <svg class="ml-5 mt-1 " xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                            viewBox="0 0 8 8" fill="none">
                            <g clip-path="url(#clip0_5251_60126)">
                              <path
                                d="M6.66667 1.33333V0.333333C6.66667 0.244928 6.63155 0.160143 6.56904 0.0976311C6.50652 0.035119 6.42174 0 6.33333 0L5.66667 0C5.57826 0 5.49348 0.035119 5.43096 0.0976311C5.36845 0.160143 5.33333 0.244928 5.33333 0.333333V1.33333H2.66667V0.333333C2.66667 0.244928 2.63155 0.160143 2.56904 0.0976311C2.50652 0.035119 2.42174 0 2.33333 0L1.66667 0C1.57826 0 1.49348 0.035119 1.43096 0.0976311C1.36845 0.160143 1.33333 0.244928 1.33333 0.333333V1.33333C0.979711 1.33333 0.640573 1.47381 0.390524 1.72386C0.140476 1.97391 0 2.31304 0 2.66667L0 6.66667C0 7.02029 0.140476 7.35943 0.390524 7.60948C0.640573 7.85952 0.979711 8 1.33333 8H6.66667C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V2.66667C8 2.31304 7.85952 1.97391 7.60948 1.72386C7.35943 1.47381 7.02029 1.33333 6.66667 1.33333ZM6.66667 6.66667H1.33333V3.33333H6.66667V6.66667Z"
                                fill="#666666" />
                            </g>
                            <defs>
                              <clipPath id="clip0_5251_60126">
                                <rect width="8" height="8" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="font-weight-medium mb-0 pl-1" style="color:#666666;font-size:10px"> EVENTS
                          </p>
                        </div>
                      </v-card>

                      <v-card class="rounded-md ml-2 mb-3" elevation="0" width="57px" height="22px"
                        :color="item == selectedItem ? 'white' : '#F1F3F8'">
                        <div class="d-flex row  pt-4">
                          <svg class="ml-5 mt-1 " xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                            viewBox="0 0 8 8" fill="none">
                            <g clip-path="url(#clip0_5251_60185)">
                              <path
                                d="M7.33333 0.666992H0.666667C0.489856 0.666992 0.320286 0.73723 0.195262 0.862254C0.0702379 0.987279 0 1.15685 0 1.33366L0 6.66699C0 6.8438 0.0702379 7.01337 0.195262 7.1384C0.320286 7.26342 0.489856 7.33366 0.666667 7.33366H7.33333C7.51014 7.33366 7.67971 7.26342 7.80474 7.1384C7.92976 7.01337 8 6.8438 8 6.66699V1.33366C8 1.15685 7.92976 0.987279 7.80474 0.862254C7.67971 0.73723 7.51014 0.666992 7.33333 0.666992ZM3.66667 5.33366H1.66667C1.57826 5.33366 1.49348 5.29854 1.43096 5.23603C1.36845 5.17352 1.33333 5.08873 1.33333 5.00033C1.33333 4.91192 1.36845 4.82714 1.43096 4.76462C1.49348 4.70211 1.57826 4.66699 1.66667 4.66699H3.66667C3.75507 4.66699 3.83986 4.70211 3.90237 4.76462C3.96488 4.82714 4 4.91192 4 5.00033C4 5.08873 3.96488 5.17352 3.90237 5.23603C3.83986 5.29854 3.75507 5.33366 3.66667 5.33366ZM6.33333 3.33366H1.66667C1.57826 3.33366 1.49348 3.29854 1.43096 3.23603C1.36845 3.17352 1.33333 3.08873 1.33333 3.00033C1.33333 2.91192 1.36845 2.82714 1.43096 2.76462C1.49348 2.70211 1.57826 2.66699 1.66667 2.66699H6.33333C6.42174 2.66699 6.50652 2.70211 6.56904 2.76462C6.63155 2.82714 6.66667 2.91192 6.66667 3.00033C6.66667 3.08873 6.63155 3.17352 6.56904 3.23603C6.50652 3.29854 6.42174 3.33366 6.33333 3.33366Z"
                                fill="#666666" />
                            </g>
                            <defs>
                              <clipPath id="clip0_5251_60185">
                                <rect width="8" height="8" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p class="font-weight-medium mb-0 pl-1" style="color:#666666;font-size:10px"> NEWS
                          </p>
                        </div>
                      </v-card>
                    </div>
                  </v-col>
                  <v-col cols="7">

                    <div class="pt-3" style="visibility:hidden">
                      <div class="display-flex row HovercontentDisplay">
                        <v-btn class="pa-1 elevation-0 ml-1 white--text text-none"
                          @click="DeatilesGet(item), AddDialouge = true" dense small
                          style="height:20px;min-width:22px;border-radius: 4px;padding: 2px 6px;" color="#43A833">
                          <span
                            style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">Add</span></v-btn>
                        <v-btn class="pa-1 elevation-0 ml-1 white--text text-none" dense small
                          style="height:20px;min-width:22px;border-radius: 4px;padding: 2px 6px;" color="#FF1717">
                          <span
                            style="font-size: 12px;font-style: normal;font-weight: 559;line-height: 16px;">Exit</span></v-btn>


                        <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                          style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M10 10.9999L6 8.61893L2 10.9999V1.95226C2 1.69967 2.09365 1.45743 2.26035 1.27882C2.42705 1.10022 2.65314 0.999878 2.88889 0.999878H9.11111C9.34686 0.999878 9.57295 1.10022 9.73965 1.27882C9.90635 1.45743 10 1.69967 10 1.95226V10.9999Z"
                              stroke="#666666" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg>
                        </v-btn>
                        <v-btn class="ml-1 pa-0 elevation-0 " outlined dense small
                          style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white">
                          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M0.74984 7.00043C0.601527 7.0004 0.456554 6.95639 0.333246 6.87398C0.209939 6.79156 0.113834 6.67444 0.0570817 6.53742C0.00032918 6.40039 -0.014523 6.24962 0.0144026 6.10415C0.0433283 5.95869 0.114733 5.82507 0.21959 5.72018L3.59459 2.34518C3.73524 2.20457 3.92597 2.12559 4.12484 2.12559C4.32371 2.12559 4.51444 2.20457 4.65509 2.34518L7.12484 4.81493L10.7196 1.22018C10.7888 1.14854 10.8715 1.09141 10.963 1.0521C11.0545 1.01279 11.153 0.992105 11.2525 0.991239C11.3521 0.990374 11.4509 1.00935 11.5431 1.04706C11.6352 1.08477 11.719 1.14046 11.7894 1.21088C11.8598 1.2813 11.9155 1.36504 11.9532 1.45721C11.9909 1.54938 12.0099 1.64814 12.009 1.74773C12.0082 1.84731 11.9875 1.94573 11.9482 2.03723C11.9089 2.12873 11.8517 2.21149 11.7801 2.28068L7.65509 6.40568C7.51444 6.54628 7.32371 6.62527 7.12484 6.62527C6.92597 6.62527 6.73524 6.54628 6.59459 6.40568L4.12484 3.93593L1.28009 6.78068C1.13947 6.92134 0.948736 7.00038 0.74984 7.00043Z"
                              fill="#666666" />
                          </svg></v-btn>
                        <v-menu transition="slide-x-transition" left :offset-x="offset" class="" style="z-index: 888888;
border: 1px solid #EBEEF0;
background: linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF;
box-shadow: 0px 4px 10px 0px rgba(210, 210, 211, 0.03), 0px 5px 22px 0px rgba(145, 146, 148, 0.02);">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn class="ml-1 pa-0  elevation-0" outlined small v-bind="attrs" v-on="on"
                              @click="hhhhhhhhhh(item)"
                              style="min-width:20px;height:20px;border-radius: 4px;border:1px solid #CCCCCC;background-color:white;z-index:; ">
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
                            </v-btn></template>
                          <v-list dense class="rounde-xl">
                            <v-list-item-group v-model="selectedItem" color="primary">
                              <v-list-item @click="MenuListItem(item, k)" v-for="(k, innss ) in itemsaaass" :key="innss">
                                <v-list-item-icon>
                                  <img class="" :src="k.icon" width="14px">
                                  <v-list-item-title class="pl-2 pa-0 pt-n16" v-text="k.text"></v-list-item-title>
                                </v-list-item-icon>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-menu>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </td>
              <td class="">
                <p class="mt-n4 mb-0 pl-4" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">-</p>
              </td>
              <td class="">
                <p class="mb-0 mt-n4 pl-4" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">-
                </p>
              </td>
              <td class="">
                <p class="mt-n4 mb-0 pl-2" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">{{
                  item.v
                  / 1000 }}<span class="" style="font-size:13px;color:#666666;font-weight:469;line-height:16px;"> K</span>
                </p>
              </td>
              <td class="">
                <p class="mt-n4 mb-0" style="font-size:13px;color:#000000;font-weight:569;line-height:16px;">{{ item.lp }}
                </p>
              </td>
              <td class="">
                <p v-if="item.mePLchg > 0" class="mt-n4 mb-0"
                  style="color: #43A833;font-size: 13px;font-weight: 469;line-height: 16px; ">
                  {{ item.mePLchg }}%</p>
                <p v-else class="mt-n4 mb-0" style="color: #FF1717;font-size: 13px;font-weight: 469;line-height: 16px; ">
                  {{ item.mePLchg }}%</p>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-tab-item>
      <!-- tab 2 -->

      <v-tab-item>
        <p class="text-center mt-16 pt-5">NO DATA</p>
      </v-tab-item>
      <v-tab-item>
        <p class="text-center mt-16 pt-5">NO DATA</p>
      </v-tab-item>
      <v-tab-item>
        <p class="text-center mt-16 pt-5">NO DATA</p>
      </v-tab-item>
      <v-tab-item>
        <p class="text-center mt-16 pt-5">NO DATA</p>
      </v-tab-item>
    </v-tabs-items>

    <p class="mt-10 mb-2" style="color: #192129;font-size: 18px;font-weight: 559;line-height: 100%; ">Stock Breakdown</p>
    <p style="color: #4D5766;
font-size: 14px;
font-weight: 469;
line-height: 100%;">Stock portfolio distribution</p>

  </div>
</template>
<script>

import axios from 'axios';
import { api } from '../../apiUrl.js'
import { Userid1 } from '../../apiUrl.js'
import { Usersession } from '../../apiUrl.js'
export default {
  components: {},
  data() {
    return {
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

      AddDialouge: false,
      firestFrezqty:0,
      remainder:0,
      tokenget: [],
      pnlChngnewww: [],
      clickstorevalue: [],
      HoldingDialouge: false,
      numberadd: '',
      searchdatatable: "",
      exchtsym: [],
      hdfumutuLFUND: null,
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

      hdfcFundTab: ["Overview", "Ratios", "Dividend", "Returns"],
      chipNmaeGet:"",
      orderBookres:[],
      snackbarHide:false,
      SliceQtyPopup:false,
      responseSTorePlaceorder:[],

    };
  },
  mounted() {
     console.log("this.ResponScriptrInfo",this.parseFloatLc);
    console.log("v-model name check", this.coverOrderStopPrice)
    this.WebSockets();
    var axiosthis = this;
    let data = JSON.stringify({
      "userId": Userid1,
      "bookNameReq": "Holdings",
      "session": Usersession
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${api}/TradeData`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log("fffff", response);
        var HoldingsData = response.data
        var sum = 0;

        console.log(HoldingsData, "HoldingsData");
        for (let n = 0; n < HoldingsData.length; n++) {

          sum += parseFloat(HoldingsData[n].investAmt);
          HoldingsData[n].exch_tsym['trdqty'] = HoldingsData[n].trdqty
          HoldingsData[n].exch_tsym['npoadqty'] = HoldingsData[n].npoadqty
          HoldingsData[n].exch_tsym['Avgprice'] = HoldingsData[n].upldprc
          HoldingsData[n].exch_tsym['upldprc'] = HoldingsData[n].upldprc
          for (let g = 0; g < HoldingsData[n].exch_tsym.length; g++) {
            if (HoldingsData[n].exch_tsym[g].exch == "NSE") {
              axiosthis.tokenget.push(HoldingsData[n].exch_tsym[g].token)
              axiosthis.pnlChngnewww.push(HoldingsData[n].exch_tsym[g].pnlChng)
              console.log(axiosthis.pnlChngnewww, "axiosthis.pnlChngnewww");
              HoldingsData[n].exch_tsym[g]['trdqty'] = HoldingsData[n].exch_tsym.trdqty
              HoldingsData[n].exch_tsym[g]['npoadqty'] = HoldingsData[n].exch_tsym.npoadqty
              HoldingsData[n].exch_tsym[g]['Avgprice'] = HoldingsData[n].exch_tsym.Avgprice
              HoldingsData[n].exch_tsym[g]['upldprc'] = HoldingsData[n].exch_tsym.upldprc
              var bbbbbbbb = (HoldingsData[n].exch_tsym[g].upldprc * HoldingsData[n].exch_tsym[g].npoadqty).toString()
              var profitAndLoss = ((HoldingsData[n].exch_tsym[g].lp - HoldingsData[n].exch_tsym[g].upldprc) * HoldingsData[n].exch_tsym[g].npoadqty).toFixed(2).toString()

              HoldingsData[n].exch_tsym[g]['mePLchg'] = ((profitAndLoss / bbbbbbbb) * 100).toFixed(2).toString()
              console.log("2222222222", bbbbbbbb);
              console.log(profitAndLoss, "3333333");
              axiosthis.exchtsym.push(HoldingsData[n].exch_tsym[g])
            }
          }
        }
        axiosthis.numberadd = (sum / 1000).toFixed(2)
        console.log(axiosthis.numberadd, "sum");
        console.log("axiosthis.exch_tsym", axiosthis.exchtsym);
      })
      .catch((error) => {
        console.log(error);
      });

  },
  methods: {
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


    GetInfoDetailes(itemGet) {
      var axiosthis = this;
      console.log("7878787877887", itemGet);
      axiosthis.ResponScriptrInfo = {};
      let data = JSON.stringify({
        "userId": Userid1,
        "exch": itemGet.exch,
        "scriptDetailReq": "GetSecurityInfo",
        "token": itemGet.token,
        "session": Usersession
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

    GetOrderMargin () {
      var axiosthis = this;
let data = JSON.stringify({
  "userId": "ZP00194",
  "exch": this.DetalDatastore.exch,
  "tsym": this.DetalDatastore.tsym,
  "qty": this.lotsise,
  "blprc": "",
  "trgprc": "",
  "prc": this.DetalDatastore.lp,
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
  this.DetalDatastore.lp = this.sl ? this.parseFloatlp : this.DetalDatastore.lp
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
this.Amocheck='Yes'
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
  "exch": this.DetalDatastore.exch,
  "tsym": this.DetalDatastore.tsym,
  "qty": this.lotsise,
  "prc": this.DetalDatastore.lp,
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
  this.AddDialouge=false
  this.SliceQtyPopup=false
  if (this.lotsise< parseInt(this.ResponScriptrInfo.frzqty)) {
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
    WebSockets() {
      console.log("qweqwewe", this.tokenget)
      const self = this;
      let connection = new WebSocket('wss://go.mynt.in/NorenWSWeb/');
      var nnnnnnnmcnchd = self.tokenget
      console.log("klklklklk", nnnnnnnmcnchd);
      connection.onopen = function (event) {
        console.log(event);
        var message = {
          "actid": "ZP00194",
          "t": "c",
          "uid": "ZP00194",
          "susertoken": "08bf9acfdbebb068d87e1d41621fa5b1c970f262fdf87ae7951ce325e037afc2"
        }
        var hhdhdhdh = {
          "t": "t",
          "k": "NSE| 10576"
        };
        console.log(hhdhdhdh, "..........");

        connection.send(JSON.stringify(message));
        setTimeout(() => {
          connection.send(JSON.stringify(hhdhdhdh));
        }, 2000);

        connection.onmessage = (msg) => {
          let count = JSON.parse(msg.data);
          console.log(count, "222222222222222");

          if (self.exchtsym.token == count.token) {
            self.exchtsym['13lp'] = count.lp ? Number(count.lp) : self.exchtsym.ltp;



          }
        };
      };
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

    DeatilesGet(item) {
      var itemGet = item

console.log("ghghghghghg",itemGet)
      this.parseFloatlp=parseFloat(item.lp)
    this.lotsise=parseInt(item.ls)
      console.log("lotsise",typeof this.lotsise)

      console.log("this.DetalDatastore",typeof  this.parseFloatlp);

      this.DetalDatastore = itemGet

    
      this.GetInfoDetailes(itemGet);


    },

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