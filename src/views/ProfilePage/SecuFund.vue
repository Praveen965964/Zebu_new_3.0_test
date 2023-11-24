<template>
    <div id="app">
      <div class="ml-16 ">
        <p class="mt-1" style="color: #000;font-size: 22px;font-weight: 559;line-height: 16px; letter-spacing: -0.44px;">Window Settings </p>
        <p class="mb-8" style="color: #666;font-size: 14px;font-weight: 469;line-height: 100%; ">View bank details and add new banks.</p>
      

<v-row>
    <v-col cols="6">
        <v-card outlined class="pt-6">
            <v-row>
                <v-col cols="9" class="">
                    <p class="pl-5 mb-0" style="color: #000;font-size: 16px;font-weight: 559;line-height: 16px; letter-spacing: -0.32px;">Navigation Setting</p>
                </v-col>
                <v-col cols="3" class="">
<p class="mb-0 pl-2" style="color: #CCC;
font-size: 13px;
font-weight: 559;
line-height: 16px; 
letter-spacing: -0.26px;">Default</p>
                </v-col>
            </v-row>
        <v-data-table hide-default-header :headers="headers" :items="navigationsettings" 
                            item-key="id" v-model="selectedRows" class="elevation-0 mt-5" hide-default-footer
                            style="border: 1px solid #efeef3;background-color:white">

                            <template v-slot:footer>
                                <v-divider></v-divider>
                            <p class="pl-3 mb-0 py-5" style="color: #666;
font-size: 12px;
font-weight: 469;
line-height: 14px;">You can select up-to 5 options to display on top nav bar </p>
                            </template>
                         
                            <template v-slot:header>
                                <tr class="pt-1 pb-1 " style="background-color: #FAFBFF;">
                                    <th class="text-start" ><p class="pl-4 pt-3"
                                            style="color:#666666 ;font-size: 13px;font-weight:469;line-height:16px">Type</p></th>
                                            <th class="text-end pr-8" ><p class="pl-4 pt-3"
                                            style="color:#666666 ;font-size: 13px;font-weight:469;line-height:16px">Status</p></th>
                                </tr>
                               
                            </template>
                            <template v-slot:item="{ item }">
                                <tr style="min-height: 20px;cursor:pointer;"  @click="currencydetailespage()">
                                    <td class=" pr-0" style="color: #000000;font-size: 14px;">
                                        <p class="mb-0" style="rgba(0, 0, 0, 0.80);font-size: 14px;font-weight: 559;line-height: 16px;"> {{ item.CommoName }}</p>

                                    
                                      
                                    </td>
                                    <td class="text-end pr-8">
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
  <rect width="38" height="20" rx="10" fill="black" fill-opacity="0.8"/>
  <rect x="21.7148" y="3.63672" width="12.6667" height="12.7273" rx="6.33333" fill="white"/>
</svg>
                                    </td>
                                    
                                
                                   
                                     
                                </tr>
                            </template>
                        </v-data-table>
                    </v-card>
    </v-col>


    <v-col cols="6" class="pl-6">
        <v-card outlined class="pt-6">
            <v-row>
                <v-col cols="9" class="">
                    <p class="pl-5 mb-0" style="color: #000;font-size: 16px;font-weight: 559;line-height: 16px; letter-spacing: -0.32px;">Product Setting</p>
                </v-col>
                <v-col cols="3" class="">
<p class="mb-0 pl-2" style="color: #0037B7;
font-size: 13px;
font-weight: 559;
line-height: 16px;
letter-spacing: -0.26px;">Default</p>
                </v-col>
            </v-row>
        <v-data-table hide-default-header :headers="headers" :items="protectsetting" 
                            item-key="id" v-model="selectedRows" class="elevation-0 mt-5" hide-default-footer
                            style="border: 1px solid #efeef3;background-color:white">

                            <template v-slot:footer>
                                <v-divider></v-divider>
                            <p class="pl-3 mb-0 py-5" style="color: #666;
font-size: 12px;
font-weight: 469;
line-height: 14px;"> </p>
                            </template>
                         
                            <template v-slot:header>
                                <tr class="pt-1 pb-1 " style="background-color: #FAFBFF;">
                                    <th class="text-start" ><p class="pl-4 pt-3"
                                            style="color:#666666 ;font-size: 13px;font-weight:469;line-height:16px">Type</p></th>
                                            <th class="text-end pr-8" ><p class="pl-4 pt-3"
                                            style="color:#666666 ;font-size: 13px;font-weight:469;line-height:16px">Status</p></th>
                                </tr>
                               
                            </template>
                            <template v-slot:item="{ item }">
                                <tr style="min-height: 20px;cursor:pointer;"  @click="currencydetailespage()">
                                    <td class=" pr-0" style="color: #000000;font-size: 14px;">
                                        <p class="mb-0" style="rgba(0, 0, 0, 0.80);font-size: 14px;font-weight: 559;line-height: 16px;"> {{ item.CommoName }}</p>

                                    
                                      
                                    </td>
                                    <td class="text-end pr-8">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
  <rect width="38" height="20" rx="10" fill="#DEDEDE"/>
  <rect x="3.71484" y="3.63672" width="12.6667" height="12.7273" rx="6.33333" fill="white"/>
</svg>
                                    </td>
                                    
                                
                                   
                                     
                                </tr>
                            </template>
                        </v-data-table>
                    </v-card>
    </v-col>
</v-row>
  
      </div>
</div>

</template>


<script>
export default {
  components: {  },
  data() {
    return {
        switch2:true,
        commoditiesmodal:null,
      navigationsettings: [
        {
          CommoName: "Dashboard ",
        },
        {
          CommoName: "Positions",
        },
        {
          CommoName: "Portfolios",
        },
        {
          CommoName: "Watchlist",
        },
        {
          CommoName: "Order",
        },
        {
          CommoName: "Funds",
        },
        {
          CommoName: "Report",
        },
        
      ],
      protectsetting: [
        {
          CommoName: "Stocks ",
        },
        {
          CommoName: "Mutual Funds",
        },
        {
          CommoName: "Future & Option",
        },
        {
          CommoName: "IPOs",
        },
        {
          CommoName: "Bonds",
        },
        {
          CommoName: "Commodities",
        },
        {
          CommoName: "Currency",
        },
        
      ],
      commoditesHeaders:["Type","Status",],
     

    };
  },

 
}
</script>

