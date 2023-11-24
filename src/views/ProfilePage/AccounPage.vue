<template>
    <div id="app">
      <div class="ml-16 ">
        <p id="hdhdhdhhdd"></p>
        <!-- <p class="" v-for="k in responsestore.exarr" :key="k" style="color: #000;font-size: 22px;font-weight: 559;line-height: 16px; letter-spacing: -0.44px;">{{k}}</p> -->
        <p class="" style="color: #000;font-size: 22px;font-weight: 559;line-height: 16px; letter-spacing: -0.44px;">Profile Details</p>
        <p class="" style="color: #666;font-size: 14px;font-weight: 469;line-height: 100%; ">We use these details for all communication related to your account.</p>
        <v-card class="pl-8 pr-6 pt-5" outlined>
            <v-row>
                <v-col cols="10">
<p  class="mb-0" style="color: #666;font-size: 16px;font-weight: 559;line-height: 16px;letter-spacing: -0.32px;">Personal Details</p>
                </v-col>
                <v-col cols="2" class="pt-0 pb-0" align="end">
<p class="mb-0 mt-1" style="color: #0037B7;font-size: 14px;font-weight: 559;line-height: 16px;letter-spacing: -0.28px;">
  <v-btn icon class="pa-2 " height="fit-content" width="fit-content"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <g clip-path="url(#clip0_5251_56431)">
    <path d="M6.61431 2.67773L1.14431 8.14673C1.0891 8.20301 1.04798 8.27154 1.02431 8.34673L0.0243078 11.3467C6.24303e-05 11.4216 -0.00615823 11.5012 0.00615207 11.5789C0.0184624 11.6567 0.0489558 11.7304 0.0951507 11.7942C0.141346 11.8579 0.201937 11.9098 0.271993 11.9457C0.342049 11.9816 0.419591 12.0005 0.498308 12.0007C0.552059 12.001 0.605468 11.9922 0.656308 11.9747L3.65631 10.9747C3.7315 10.9511 3.80003 10.9099 3.85631 10.8547L9.32531 5.38473L6.61431 2.67773Z" fill="#0037B7"/>
    <path d="M11.8528 2.14689L9.85278 0.146894C9.80634 0.100331 9.75116 0.0633877 9.69041 0.0381813C9.62967 0.0129748 9.56455 0 9.49878 0C9.43301 0 9.36789 0.0129748 9.30715 0.0381813C9.2464 0.0633877 9.19123 0.100331 9.14478 0.146894L7.67578 1.61689L10.3828 4.32389L11.8528 2.85489C11.8993 2.80845 11.9363 2.75327 11.9615 2.69253C11.9867 2.63178 11.9997 2.56666 11.9997 2.50089C11.9997 2.43513 11.9867 2.37001 11.9615 2.30926C11.9363 2.24851 11.8993 2.19334 11.8528 2.14689Z" fill="#0037B7"/>
  </g>
  <defs>
    <clipPath id="clip0_5251_56431">
      <rect width="12" height="12" fill="white"/> 
    </clipPath>
  </defs>
</svg></v-btn>  Edit</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;
">NAME</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.cliname}}</p>
<v-divider class="mt-1 mb-6 mr-5"></v-divider>
<p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.8px;">PAN NUMBER</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.pan.slice(4).padStart(responsestore.pan.length, '*')}}</p>
                    <v-divider class="mt-1 mb-6 mr-5"></v-divider>
                </v-col>
                <v-col cols="4">
                    <p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">EMAIL ADDRESS</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.email.toLowerCase()}}</p>
<v-divider class="mt-1 mb-6 mr-6"></v-divider>
<p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">DATE OF BIRTH</p>
<!-- <div> -->
                    <p v-if="responsestore.dob==''" class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">-</p>
                    <p v-else class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.dob  }}</p>
                    <v-divider class="mt-1 mb-6 mr-6"></v-divider>
                </v-col>
                <v-col cols="4">
                    <p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;
">PHONE NUMBER</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.m_num}}</p>
<v-divider class="mt-1 mb-6 mr-6"></v-divider>
<!-- <p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">GENDER</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">-</p>
                    <v-divider class="mt-1 mb-6 mr-6"></v-divider> -->
                </v-col>
            </v-row>
        </v-card>


        <v-card class="pl-8 pr-6 pt-5 mt-7" outlined>
<p  class="mb-6" style="color: #666;font-size: 16px;font-weight: 559;line-height: 16px;letter-spacing: -0.32px;">Trading and Demat Account</p>
             
            <v-row>
                <v-col cols="4">
                    <p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;
">UCC</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.actid}}</p>
<v-divider class="mt-1 mb-6 mr-5"></v-divider>
<p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.8px;">DP ID</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.dp_acct_num[0].dpnum.slice(0,8)}}</p>
                    <v-divider class="mt-1 mb-6 mr-5"></v-divider>
                </v-col>
                <v-col cols="4">
                    <p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">USER ID</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.actid}}</p>
<v-divider class="mt-1 mb-6 mr-6"></v-divider>
<p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">DEMAT ACCOUNT NUMBER (BOID)</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">{{responsestore.dp_acct_num[0].dpnum.slice(-8)}}</p>
                    <v-divider class="mt-1 mb-6 mr-6"></v-divider>
                </v-col>
                <v-col cols="4">
                    <p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;">DEPOSITORY NAME</p>
                    <p class="mb-0 pb-1" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">CDSL</p>
<v-divider class="mt-1 mb-6 mr-6"></v-divider>
                </v-col>
            </v-row>
        </v-card>
      
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
  "userId":Userid1,
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


