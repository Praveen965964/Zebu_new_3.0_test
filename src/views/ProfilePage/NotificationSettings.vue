<template>
    <div id="app">
      <div class="ml-16 ">
        <p class="mt-1" style="color: #000;font-size: 22px;font-weight: 559;line-height: 16px; letter-spacing: -0.44px;">Notification Preferences</p>
        <p class="mb-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 100%; ">View bank details and add new banks.</p>
      
        <v-data-table hide-default-header :headers="headers" :items="commoditesitems" 
                            item-key="id" v-model="selectedRows" class="elevation-0 mt-8" hide-default-footer
                            style="border: 1px solid #efeef3;background-color:white">
                         
                            <template v-slot:header>
                                <tr class="pt-1 pb-1 " style="background-color: #FAFBFF;">
                                    <th class="text-start" v-for="commoditesHeader in commoditesHeaders" :key="commoditesHeader"><p class="pl-4 pt-3"
                                            style="color:#666666 ;font-size: 13px;font-weight:469;line-height:16px">{{commoditesHeader}}</p></th>
                                </tr>
                               
                            </template>
                            <template v-slot:item="{ item }">
                                <tr style="min-height: 20px;cursor:pointer;"  @click="currencydetailespage()">
                                    <td class=" pr-0" style="color: #000000;font-size: 14px;">
                                        <p class="mb-0" style="rgba(0, 0, 0, 0.80);font-size: 14px;font-weight: 559;line-height: 16px;"> {{ item.CommoName }}</p>

                                    
                                      
                                    </td>
                                    <td class="">
                                        
                                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
  <rect width="38" height="20" rx="10" fill="black" fill-opacity="0.8"/>
  <rect x="21.7148" y="3.63672" width="12.6667" height="12.7273" rx="6.33333" fill="white"/>
</svg>
                                    </td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
  <rect width="38" height="20" rx="10" fill="#DEDEDE"/>
  <rect x="3.71484" y="3.63672" width="12.6667" height="12.7273" rx="6.33333" fill="white"/>
</svg>
                                    </td>
                                    <td class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
  <rect width="38" height="20" rx="10" fill="black" fill-opacity="0.8"/>
  <rect x="21.7148" y="3.63672" width="12.6667" height="12.7273" rx="6.33333" fill="white"/>
</svg>
                                          </td>
                                
                                   
                                     
                                </tr>
                            </template>
                        </v-data-table>

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
      commoditesitems: [
        {
          CommoName: "News & Market Updates ",
          ExpiryDate:"31-Aug-23",
          Lots:"1200",
          LastPrice:"₹59,290",
          ch:"90.00",
          Chgpercentage:"1.65",
          left:"₹6,232",
          right:"₹6,192"
        },
        {
          CommoName: "Stock & Portfolio Updates",
          ExpiryDate:"31-Aug-23",
          Lots:"1200",
          LastPrice:"₹59,290",
          ch:"90.00",
          Chgpercentage:"1.65",
          left:"₹6,232",
          right:"₹6,192"
        },
        {
          CommoName: "Account Reminders EQ",
          ExpiryDate:"31-Aug-23",
          Lots:"1200",
          LastPrice:"₹59,290",
          ch:"90.00",
          Chgpercentage:"1.65",
          left:"₹6,232",
          right:"₹6,192"

        },
        {
          CommoName: "Educational- Stock Market ",
          ExpiryDate:"31-Aug-23",
          Lots:"1200",
          LastPrice:"₹59,290",
          ch:"90.00",
          Chgpercentage:"1.65",
          left:"₹6,232",
          right:"₹6,192"
        },
        {
          CommoName: "What's New on Zebu Trade Stocks ",
          ExpiryDate:"31-Aug-23",
          Lots:"1200",
          LastPrice:"₹59,290",
          ch:"90.00",
          Chgpercentage:"1.65",
          left:"₹6,232",
          right:"₹6,192"
        },
        {
          CommoName: "Feedback & Review- Stock Market ",
          ExpiryDate:"31-Aug-23",
          Lots:"1200",
          LastPrice:"₹59,290",
          ch:"90.00",
          Chgpercentage:"1.65",
          left:"₹6,232",
          right:"₹6,192"
        },
        {
          CommoName: "Account Reminders- Zebu Trade Stocks ",
          ExpiryDate:"31-Aug-23",
          Lots:"1200",
          LastPrice:"₹59,290",
          ch:"90.00",
          Chgpercentage:"1.65",
          left:"₹6,232",
          right:"₹6,192"
        },
        
      ],
      commoditesHeaders:["Notifications Category","E-mail","SMS","On Site"],
     

    };
  },

 
}
</script>

