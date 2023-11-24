<template>
    <div id="app">
      <div class="ml-16 ">
        <p class="mt-1" style="color: #000;font-size: 22px;font-weight: 559;line-height: 16px; letter-spacing: -0.44px;">Securities Funds</p>
        <p class="mb-8" style="color: #666;font-size: 14px;font-weight: 469;line-height: 100%; ">View bank details and add new banks.</p>
      



        <v-card outlined class="px-5 py-6">
<v-row>
    <v-col cols="6" class="">
        <p class="mb-2" style="color: #666;font-size: 11px;font-weight: 469;line-height: 12px;letter-spacing: 0.88px;
">BALANCE AVAILABLE TO TRADE BALANCE</p>
<p  class="mb-2" style="color: #000;font-size: 16px;
font-weight: 469;
line-height: 100%;">₹ {{gsgsgs.cash }}</p>

<v-divider class="mb-1 mr-8"></v-divider>

<v-row class="py-6 ">
    <v-col cols="6">
<p class="mb-2" style="color: #666;
font-size: 11px;
font-weight: 469;
line-height: 12px;
letter-spacing: 0.88px;">OPENING BALANCE</p>
<p class="mb-2" style="color:#000;
font-size: 16px;
font-weight: 469;
line-height: 100%; ">₹13,000</p>
<v-divider class="mr-8"></v-divider>
    </v-col>

    <v-col cols="6">
<p class="mb-2" style="color: #666;
font-size: 11px;
font-weight: 469;
line-height: 12px;
letter-spacing: 0.88px;">USED MARGIN</p>
<p class="mb-2" style="color: #D34645;
font-size: 16px;
font-weight: 469;
line-height: 100%; ">₹ {{gsgsgs.marginused }}</p>
<v-divider class="mr-8"></v-divider>
    </v-col>
</v-row>

<p class="mr-7 mb-7" style="color: #999;font-size: 12px;font-weight: 469;line-height: 16px;letter-spacing: -0.2px;">Note: Only 80% of the amount after selling Demat holdings will be available to trade on the same day. The remaining 20% will be available to trade on the next day. Learn more.</p>
<p style="color: #666;font-size: 14px;font-weight: 469;line-height: 100%;">Total Margin</p>
<v-row class="py-6 ">
    <v-col cols="6">
<p class="mb-2" style="color: #666;
font-size: 11px;
font-weight: 469;
line-height: 12px;
letter-spacing: 0.88px;">CASH MARGIN</p>
<p class="mb-2" style="color:#000;
font-size: 16px;
font-weight: 469;
line-height: 100%; ">₹4,000</p>
<v-divider class="mr-8"></v-divider>
<p class="mb-2 pt-8" style="color: #666;
font-size: 11px;
font-weight: 469;
line-height: 12px;
letter-spacing: 0.88px;">COLLATERAL (EQUITY)</p>
<p class="mb-2" style="color:#000;
font-size: 16px;
font-weight: 469;
line-height: 100%; ">₹64</p>
<v-divider class="mr-8"></v-divider>

    </v-col>

    <v-col cols="6">  
<p class="mb-2" style="color: #666;
font-size: 11px;
font-weight: 469;
line-height: 12px;
letter-spacing: 0.88px;">COLLATERAL (EQUITY)</p>
<p class="mb-2" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">₹6000</p>
<v-divider class="mr-8"></v-divider>
<p class="mb-2 pt-8" style="color: #666;
font-size: 11px;
font-weight: 469;
line-height: 12px;
letter-spacing: 0.88px;">COLLATERAL (EQUITY)</p>
<p class="mb-2" style="color: #000;font-size: 14px;font-weight: 469;line-height: 16px;">₹6000</p>
<v-divider class="mr-8"></v-divider>
    </v-col>
</v-row>
    </v-col>


<!-- <v-col cols="1"></v-col> -->
    <v-col cols="6" class="pl-15">
<v-card class="elevation-0 py-6 px-5" color="#F1F3F8">
<p style="color: #666;font-size: 12px;font-weight: 469;line-height: 14px;">Choose type</p> 

<div class="d-flex">
                        <div class="flex-row pt-1">
                            <p :class="['caption', 'font-weight-bold', { 'active': isActive }]">Deposit Money</p>
                        </div>
                        <div class="pl-3 mt-1">
                            <label class="switch">
                                <input type="checkbox" v-model="isActive">
                                <span class="sliderr round"></span>
                            </label>
                        </div>
                        <div class="pl-8 pt-1">
                            <p :class="['caption', 'font-weight-bold', { 'active': !isActive }]">Withdrarw Money</p>
                        </div>
                    </div>

<p style="color: #666;font-size: 12px;font-weight: 469;line-height: 14px;">Deposit Amount</p> 
<div class="labelcolorchange">
<v-text-field  hide-spin-buttons min="0" type="number" dense flat rounded class="mt-1 labelcolorchange"  hide-details
            solo
            label="1,288.90"
          
          >
          <template v-slot:prepend-inner>
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.03832 3.14773L7.6406 4.52273H0.220142L0.612187 3.14773H8.03832ZM4.46446 12L0.367869 7.01705L0.350824 5.95455H2.38491C2.90007 5.95455 3.33567 5.87689 3.69173 5.72159C4.05158 5.56629 4.32431 5.33901 4.50991 5.03977C4.69931 4.74053 4.79401 4.36932 4.79401 3.92614C4.79401 3.27083 4.59893 2.75379 4.20878 2.375C3.81863 1.99242 3.21067 1.80114 2.38491 1.80114H0.220142L0.623551 0.363636H2.38491C3.32052 0.363636 4.08946 0.515151 4.69173 0.818181C5.29779 1.11742 5.74855 1.5322 6.04401 2.0625C6.33946 2.5928 6.48719 3.19886 6.48719 3.88068C6.48719 4.49432 6.36029 5.05303 6.10651 5.55682C5.85651 6.05682 5.45688 6.46402 4.90764 6.77841C4.3584 7.08902 3.63491 7.26136 2.73719 7.29545L2.68605 7.30682L6.44741 11.9034V12H4.46446ZM8.03832 0.363636L7.6406 1.75L1.73719 1.71023L2.13491 0.363636H8.03832Z" fill="#666666"/>
</svg>

        </template>
        </v-text-field></div>
        <v-chip-group  class="chipcustamaize mt-3"
          mandatory 
          active-class="primary--text"
        >
          <v-chip outlined
            v-for="tag in tags"
            :key="tag"
          >
          <p class="pt-4" style="color: #666;
font-size: 12px;
font-weight: 469;
line-height: 100%;"> {{ tag }}</p> 
          </v-chip>
        </v-chip-group>
      <!-- </v-sheet> -->
    
        <p class="pt-6" style="color: #666;
font-size: 12px;
font-weight: 469;
line-height: 14px;">Select Payment Method</p>

<div class="selectlabelcolorchange">
<v-select append-icon="mdi-chevron-down" hide-spin-buttons min="0" type="number" dense flat rounded class=" labelcolorchange "  hide-details
            solo
            label="A/C No: 45**********2323"
          
          >
          <template v-slot:prepend-inner>
            <img src="@/assets/rectangleimg.svg" width="21px" alt="" class="">
        </template>
        
        </v-select></div>

        <v-btn color="#000" width="100%" rounded dense class="text-none mt-8 elevation-0"> <p class="mb-0" style="color: #FFF;
font-size: 14px;
font-weight: 559;
line-height: 20px; 
letter-spacing: -0.28px;"> Proceed To Pay</p></v-btn>
</v-card>

    </v-col>
    
</v-row>
        </v-card>

  
      </div>
</div>

</template>


<script>
import axios from 'axios'
export default {
  components: {  },
  data() {
    return {
      gsgsgs:[],
      isActive: false,
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
      tags: [
        '+ ₹1,000',
        '+ ₹6,000',
        '+ ₹10,000',  '+ ₹15,000',
       
      ],

    };
  },
  mounted() {
    // const axios = require('axios');
    var axiosthis=this;
let data = JSON.stringify({
  "userId": "ZP00194",
  "session": "4d0105a5a361e44490cfa886a45c19a47f106facfed77a461f8f0423a0966314",
  "userStatus": "Limits"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://192.168.5.120:5001/UserStatus',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  // console.log(JSON.stringify(response.data));
  axiosthis.gsgsgs=response.data;
  console.log( axiosthis.gsgsgs,"response");
})
.catch((error) => {
  console.log(error);
});

  }

 
}
</script>
<style lang="scss">
.labelcolorchange{

  .v-input .v-label {
    color: #000;font-size: 14px;font-weight: 469;line-height: 100%; 
    padding-top: 1px !important;
    padding-left: 7px !important;
}
}

.selectlabelcolorchange{

.v-input .v-label {
  color: #666 !important;
font-size: 12px !important;
font-weight: 559 !important;
line-height: 16px !important;
  padding-top: 1px !important;
  padding-left: 7px !important;
}
}
.chipcustamaize {

  .v-chip.v-size--default {
    height: 20px !important;
    padding: 2px !important;
  }
}




</style>


<style scoped>

.chrt{
  width:100%;
  height:100%;
}
.three-line-legend {
	width:200px;
	height: 70px;
	position: absolute;
	padding: 8px;
	font-size: 12px;
	color: '#20262E';
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
    background-color: white !important;
    width: 56px;
    ;
    height: 24px;
    -webkit-transition: .4s;
    transition: .4s;
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
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.sliderr {
    background-color: #F1F3F8;
}

input:focus+.sliderr {
    box-shadow: 0 0 1px #F1F3F8;
}

input:checked+.sliderr:before {
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

.po {
.v-text-field--filled.v-input--dense.v-text-field--single-line > .v-input__control > .v-input__slot{
    max-width: 190px;
    margin-right: 15px;
}
}
.active {
  color: #b6b3b3; /* Color when the switch is on */
}
</style>