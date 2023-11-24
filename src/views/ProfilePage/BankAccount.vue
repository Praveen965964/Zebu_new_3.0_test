<template>
    <div id="app">
      <div class="ml-16 ">
        <p class="mt-1" style="color: #000;font-size: 22px;font-weight: 559;line-height: 16px; letter-spacing: -0.44px;">Bank Accounts Linked</p>
        <p class="mb-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 100%; ">View bank details and add new banks.</p>
        <v-card class="pl-8 pr-6 pt-6 mt-8" outlined>
<p  class="mb-0" style="color: #666;font-size: 16px;font-weight: 469;line-height: 16px;letter-spacing: -0.32px;">{{responsestore.bankdetails.length}} Account Linked</p>
               
            <v-row>
               <v-col cols="7" class="pl-0">
                <v-row no-gutters>
                    <v-col cols="6">
                        <v-list>
        <v-list-item
         
        >
        
          <!-- <v-list-item-avatar>
            <img src="@/assets/rectangleimg.svg" width="" alt="" class="">
          </v-list-item-avatar> -->

          <v-list-item-content>
            <v-list-item-title >
                
                <P class="mb-0 " style="color: #000;font-size: 14px;font-weight: 559;line-height: 16px;">{{responsestore.bankdetails[0].bankn}}</P > </v-list-item-title>
            <v-list-item-subtitle ><p class="mb-0 pt-1" style="color: #666;font-size: 12px;font-weight: 469;line-height: 16px;">A/C NO: {{responsestore.bankdetails[0].acctnum.slice(4).padStart(responsestore.pan.length, '*')}}</p></v-list-item-subtitle>
          </v-list-item-content> 
        </v-list-item>
                </v-list>
                    </v-col>
                    <v-col cols="6" class="pa-0 ">
                        <v-card class="py-1 px-1 elevation-0 mt-5" outlined width="67px">
                            <p class="mb-0 text-center" style="color: #666;font-size: 10px;font-weight: 469;line-height: 100%; letter-spacing: 1px;">PRIMARY</p>
                        </v-card>
                    </v-col>
                </v-row>
                

               </v-col>
               <v-col cols="5">
                <v-row>
                    <v-col cols="6" class="mt-5">  
<p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">IFSC CODE</p>
<p style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.bankdetails[0].ifsc_code}}</p>
                    </v-col>
                    <v-col cols="4" class="mt-5">  
<p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">BRANCH</p>
<p style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">CHENNAI</p>
                    </v-col>
                    <v-col cols="2" class="mt-5">  
                        <v-btn icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="15" viewBox="0 0 3 15" fill="none">
  <path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="black"/>
  <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" fill="black"/>
  <path d="M3 13.5C3 14.3284 2.32843 15 1.5 15C0.671573 15 0 14.3284 0 13.5C0 12.6716 0.671573 12 1.5 12C2.32843 12 3 12.6716 3 13.5Z" fill="black"/>
</svg>
                        </v-btn>

                    </v-col>
                </v-row>

               </v-col>
            </v-row>
            <!-- <v-divider></v-divider> -->


            <!-- <v-row>
               <v-col cols="7" class="pl-0">
                <v-row no-gutters>
                    <v-col cols="7">
                        <v-list>
        <v-list-item
         
        >
        
          <v-list-item-avatar>
            <img src="@/assets/kotakbank.svg" width="" alt="" class="">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title >
                
                <P class="mb-0 " style="color: #000;font-size: 14px;font-weight: 559;line-height: 16px;">Kotak Mahindra Bank</P > </v-list-item-title>
            <v-list-item-subtitle ><p class="mb-0 pt-1" style="color: #666;font-size: 12px;font-weight: 469;line-height: 16px;">A/C No: 24**********8926</p></v-list-item-subtitle>
          </v-list-item-content> 
        </v-list-item>
                </v-list>
                    </v-col>
                   
                </v-row>
                

               </v-col>
               <v-col cols="5">
                <v-row>
                    <v-col cols="6" class="mt-5">  
<p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">IFSC CODE</p>
<p style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">KKBK0000466</p>
                    </v-col>
                    <v-col cols="4" class="mt-5">  
<p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">BRANCH</p>
<p style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">Dewas</p>
                    </v-col>
                    <v-col cols="2" class="mt-5">  
                        <v-btn icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="15" viewBox="0 0 3 15" fill="none">
  <path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="black"/>
  <path d="M3 7.5C3 8.32843 2.32843 9 1.5 9C0.671573 9 0 8.32843 0 7.5C0 6.67157 0.671573 6 1.5 6C2.32843 6 3 6.67157 3 7.5Z" fill="black"/>
  <path d="M3 13.5C3 14.3284 2.32843 15 1.5 15C0.671573 15 0 14.3284 0 13.5C0 12.6716 0.671573 12 1.5 12C2.32843 12 3 12.6716 3 13.5Z" fill="black"/>
</svg>
                        </v-btn>

                    </v-col>
                </v-row>

               </v-col>
            </v-row> -->
        </v-card>
        <v-btn class="rounded-xl text-none pb-1 pt-1 px-5 elevation-0 mt-8" color="#000">
            <p class="mb-0">
                
              <svg class="" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M6.9987 2.33398V11.6673M11.6654 7.00065L2.33203 7.00065" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg><span class="pl-2 " style="color: #FFF;
font-size: 14px;
font-weight: 559;
line-height: 20px; 
letter-spacing: -0.28px;"> Add Bank Account</span></p>
        </v-btn>
        <p class="pt-4" style="color: #666;font-size: 12px;font-weight: 469;line-height: 20px;letter-spacing: -0.24px;">*As per the regulation, you can have upto 3 bank a/c linked to trading a/c</p>
      </div>
</div>
</template>
<script>
import axios from "axios";
import { api } from '../../apiUrl.js'
import { Userid1 } from '../../apiUrl.js'
import { Usersession } from '../../apiUrl.js'
export default {
  data() {
    return {
      selectedItem: false,
      responsestore:[],
    };
  },
  mounted() {
    var axiosthis=this;
let data = JSON.stringify({
  "userId": Userid1,
  "session": Usersession,
  "userStatus": "ClientDetails"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url:`${api}/UserStatus`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(response,"response");
  axiosthis.responsestore=response.data 
  console.log("axiosthis.responsestore",axiosthis.responsestore);
})
.catch((error) => {
  console.log(error);
});
  },
}
</script>



