<template>
    <div id="app">
      <div class="ml-16 ">
        <p class="mt-1" style="color: #000;font-size: 22px;font-weight: 559;line-height: 16px; letter-spacing: -0.44px;">Automatic Payments</p>
        <p class="mb-2" style="color: #666;font-size: 14px;font-weight: 469;line-height: 100%; ">View bank details and add new banks.</p>
        <v-card class="pl-8 pr-6  mt-8 pb-16 mb-5" outlined height="">
            <div class="text-center pt-16 mt-16 pb-16 " v-if="NoAutomaticPayment" self-align="center">
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <path d="M90.0719 49.7871C89.5156 48.9418 88.6047 48.4371 87.6375 48.4371H84.3391C83.5156 28.1246 67.0297 12.498 46.8766 12.498C26.1984 12.498 9.375 29.3215 9.375 49.9996C9.375 70.6777 26.1984 87.5012 46.8766 87.5012C56.6688 87.5012 65.9328 83.7512 72.9641 76.9402L70.7906 74.6934C64.3453 80.9371 55.8516 84.3762 46.8766 84.3762C27.9219 84.3762 12.5 68.9543 12.5 49.9996C12.5 31.0449 27.9219 15.623 46.8766 15.623C65.3078 15.623 80.3922 31.2496 81.2125 48.4371H77.9922C77.025 48.4371 76.1141 48.9418 75.5563 49.7871C74.9359 50.7324 74.8281 51.9699 75.2797 53.0199L78.8234 61.2746C79.5609 62.9934 81.0891 64.0605 82.8141 64.0605C84.5391 64.0605 86.0672 62.9918 86.8047 61.2746L90.3484 53.0199C90.8 51.9715 90.6937 50.7324 90.0719 49.7871ZM87.4766 51.7887L83.9328 60.0434C83.4437 61.1793 82.1844 61.1793 81.6953 60.0434L78.1516 51.7887C78.1156 51.7012 78.1266 51.6168 78.1422 51.5621H87.4875C87.5047 51.6168 87.5141 51.7012 87.4766 51.7887Z" fill="#CCCCCC"/>
  <path d="M46.6625 38.5064C47.2172 38.8721 47.875 39.0596 48.5359 39.0596C48.9984 39.0596 49.4625 38.9689 49.8937 38.783L58.15 35.2392C59.8703 34.5033 60.9375 32.9736 60.9375 31.2502C60.9375 29.5267 59.8687 27.9971 58.1516 27.2596L49.8953 23.7158C48.8469 23.2658 47.6078 23.3705 46.6641 23.9924C45.8172 24.5486 45.3125 25.458 45.3125 26.4267V29.7674C34.375 30.5689 26.5625 39.3267 26.5625 50.0002C26.5625 61.2002 35.675 70.3127 46.875 70.3127C58.075 70.3127 67.1875 60.9377 67.1875 50.0002H64.0625C64.0625 59.3752 56.3516 67.1877 46.875 67.1877C37.3984 67.1877 29.6875 59.4767 29.6875 50.0002C29.6875 41.0502 35.9375 33.6846 45.3125 32.8908V36.0721C45.3125 37.0408 45.8172 37.9502 46.6625 38.5064ZM48.4375 26.5768C48.4375 26.558 48.5734 26.5502 48.6625 26.5877L56.9188 30.1314C57.4859 30.3752 57.8125 30.783 57.8125 31.2502C57.8125 31.7174 57.4859 32.1252 56.9188 32.3689L48.6625 35.9127C48.5734 35.9486 48.4375 35.9408 48.4375 35.9221V26.5768Z" fill="#CCCCCC"/>
  <path d="M46.875 43.75C45.2174 43.75 43.6277 44.4085 42.4556 45.5806C41.2835 46.7527 40.625 48.3424 40.625 50C40.625 51.6576 41.2835 53.2473 42.4556 54.4194C43.6277 55.5915 45.2174 56.25 46.875 56.25C48.5326 56.25 50.1223 55.5915 51.2944 54.4194C52.4665 53.2473 53.125 51.6576 53.125 50C53.125 48.3424 52.4665 46.7527 51.2944 45.5806C50.1223 44.4085 48.5326 43.75 46.875 43.75Z" fill="#CCCCCC"/>
</svg>

<p class="pt-2" style="color: #000;font-size: 20px;font-weight: 559;line-height: 16px;letter-spacing: -0.4px;">No automatic payments are set</p>
            
<p class="" style="color: #666;
font-size: 14px;
font-weight: 469;
line-height: 120%; ">These autopay will be link to your stock SIP for automatic transfer of funds to trading account.</p>

<v-btn @click="NoAutomaticPaymentSecond=true ,NoAutomaticPayment=false" class="rounded-xl text-none px-5 elevation-0" width="200px" color="#000">
    <p class="mb-0" style="color: #FFF;
font-size: 14px;
font-weight: 559;
line-height: 20px;
letter-spacing: -0.28px;"> Set Autopay !</p>
</v-btn></div>

<div class="text-center pt-16 mt-16 " v-if="NoAutomaticPaymentSecond" self-align="center" >
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <path d="M90.0719 49.7871C89.5156 48.9418 88.6047 48.4371 87.6375 48.4371H84.3391C83.5156 28.1246 67.0297 12.498 46.8766 12.498C26.1984 12.498 9.375 29.3215 9.375 49.9996C9.375 70.6777 26.1984 87.5012 46.8766 87.5012C56.6688 87.5012 65.9328 83.7512 72.9641 76.9402L70.7906 74.6934C64.3453 80.9371 55.8516 84.3762 46.8766 84.3762C27.9219 84.3762 12.5 68.9543 12.5 49.9996C12.5 31.0449 27.9219 15.623 46.8766 15.623C65.3078 15.623 80.3922 31.2496 81.2125 48.4371H77.9922C77.025 48.4371 76.1141 48.9418 75.5563 49.7871C74.9359 50.7324 74.8281 51.9699 75.2797 53.0199L78.8234 61.2746C79.5609 62.9934 81.0891 64.0605 82.8141 64.0605C84.5391 64.0605 86.0672 62.9918 86.8047 61.2746L90.3484 53.0199C90.8 51.9715 90.6937 50.7324 90.0719 49.7871ZM87.4766 51.7887L83.9328 60.0434C83.4437 61.1793 82.1844 61.1793 81.6953 60.0434L78.1516 51.7887C78.1156 51.7012 78.1266 51.6168 78.1422 51.5621H87.4875C87.5047 51.6168 87.5141 51.7012 87.4766 51.7887Z" fill="#CCCCCC"/>
  <path d="M46.6625 38.5064C47.2172 38.8721 47.875 39.0596 48.5359 39.0596C48.9984 39.0596 49.4625 38.9689 49.8937 38.783L58.15 35.2392C59.8703 34.5033 60.9375 32.9736 60.9375 31.2502C60.9375 29.5267 59.8687 27.9971 58.1516 27.2596L49.8953 23.7158C48.8469 23.2658 47.6078 23.3705 46.6641 23.9924C45.8172 24.5486 45.3125 25.458 45.3125 26.4267V29.7674C34.375 30.5689 26.5625 39.3267 26.5625 50.0002C26.5625 61.2002 35.675 70.3127 46.875 70.3127C58.075 70.3127 67.1875 60.9377 67.1875 50.0002H64.0625C64.0625 59.3752 56.3516 67.1877 46.875 67.1877C37.3984 67.1877 29.6875 59.4767 29.6875 50.0002C29.6875 41.0502 35.9375 33.6846 45.3125 32.8908V36.0721C45.3125 37.0408 45.8172 37.9502 46.6625 38.5064ZM48.4375 26.5768C48.4375 26.558 48.5734 26.5502 48.6625 26.5877L56.9188 30.1314C57.4859 30.3752 57.8125 30.783 57.8125 31.2502C57.8125 31.7174 57.4859 32.1252 56.9188 32.3689L48.6625 35.9127C48.5734 35.9486 48.4375 35.9408 48.4375 35.9221V26.5768Z" fill="#CCCCCC"/>
  <path d="M46.875 43.75C45.2174 43.75 43.6277 44.4085 42.4556 45.5806C41.2835 46.7527 40.625 48.3424 40.625 50C40.625 51.6576 41.2835 53.2473 42.4556 54.4194C43.6277 55.5915 45.2174 56.25 46.875 56.25C48.5326 56.25 50.1223 55.5915 51.2944 54.4194C52.4665 53.2473 53.125 51.6576 53.125 50C53.125 48.3424 52.4665 46.7527 51.2944 45.5806C50.1223 44.4085 48.5326 43.75 46.875 43.75Z" fill="#CCCCCC"/>
</svg>

<p class="pt-2" style="color: #000;font-size: 20px;font-weight: 559;line-height: 16px;letter-spacing: -0.4px;">How it works</p>
            
<p class="" style="color: #666;font-size: 14px;font-weight: 469;line-height: 120%; ">You can use your UPI id and initiate fund transfer using the below steps:</p>
<p class=""><a class="text-decoration-none" style="color: #0037B7;font-size: 14px;font-weight: 559;line-height: 16px;" href="#">- &nbsp;&nbsp; Select your bank account to set up the UPI autopay</a><br>
<a class="text-decoration-none pl-15" style="color: #0037B7;font-size: 14px;font-weight: 559;line-height: 16px;" href="#">- &nbsp;&nbsp; Select the UPI app or enter your UPI ID to set up the autopay</a><br>
<a class="text-decoration-none pl-8" style="color: #0037B7;font-size: 14px;font-weight: 559;line-height: 16px;" href="#">- &nbsp;&nbsp; Enter the autopay amount to continue the payment steps</a><br></p>
<v-divider class="mx-auto my-5" width="80%"></v-divider>
<p style="color: #666;font-size: 10px;font-weight: 469;line-height: 14px;">By Continuing, I agree to with the Disclaimer and T&C of Zebu Trade</p>
<v-btn @click="NoAutomaticPaymentThred=true,NoAutomaticPaymentSecond=false" class="rounded-xl text-none px-5 mb-16" width="200px" color="#000">
    <p class="mb-0" style="color: #FFF;font-size: 14px;font-weight: 559;line-height: 20px;letter-spacing: -0.28px;"> Continue Autopay !</p> 
</v-btn></div>





<div class="text-center pt-16 mt-16 " v-if="NoAutomaticPaymentThred" self-align="center" >
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <path d="M90.0719 49.7871C89.5156 48.9418 88.6047 48.4371 87.6375 48.4371H84.3391C83.5156 28.1246 67.0297 12.498 46.8766 12.498C26.1984 12.498 9.375 29.3215 9.375 49.9996C9.375 70.6777 26.1984 87.5012 46.8766 87.5012C56.6688 87.5012 65.9328 83.7512 72.9641 76.9402L70.7906 74.6934C64.3453 80.9371 55.8516 84.3762 46.8766 84.3762C27.9219 84.3762 12.5 68.9543 12.5 49.9996C12.5 31.0449 27.9219 15.623 46.8766 15.623C65.3078 15.623 80.3922 31.2496 81.2125 48.4371H77.9922C77.025 48.4371 76.1141 48.9418 75.5563 49.7871C74.9359 50.7324 74.8281 51.9699 75.2797 53.0199L78.8234 61.2746C79.5609 62.9934 81.0891 64.0605 82.8141 64.0605C84.5391 64.0605 86.0672 62.9918 86.8047 61.2746L90.3484 53.0199C90.8 51.9715 90.6937 50.7324 90.0719 49.7871ZM87.4766 51.7887L83.9328 60.0434C83.4437 61.1793 82.1844 61.1793 81.6953 60.0434L78.1516 51.7887C78.1156 51.7012 78.1266 51.6168 78.1422 51.5621H87.4875C87.5047 51.6168 87.5141 51.7012 87.4766 51.7887Z" fill="#CCCCCC"/>
  <path d="M46.6625 38.5064C47.2172 38.8721 47.875 39.0596 48.5359 39.0596C48.9984 39.0596 49.4625 38.9689 49.8937 38.783L58.15 35.2392C59.8703 34.5033 60.9375 32.9736 60.9375 31.2502C60.9375 29.5267 59.8687 27.9971 58.1516 27.2596L49.8953 23.7158C48.8469 23.2658 47.6078 23.3705 46.6641 23.9924C45.8172 24.5486 45.3125 25.458 45.3125 26.4267V29.7674C34.375 30.5689 26.5625 39.3267 26.5625 50.0002C26.5625 61.2002 35.675 70.3127 46.875 70.3127C58.075 70.3127 67.1875 60.9377 67.1875 50.0002H64.0625C64.0625 59.3752 56.3516 67.1877 46.875 67.1877C37.3984 67.1877 29.6875 59.4767 29.6875 50.0002C29.6875 41.0502 35.9375 33.6846 45.3125 32.8908V36.0721C45.3125 37.0408 45.8172 37.9502 46.6625 38.5064ZM48.4375 26.5768C48.4375 26.558 48.5734 26.5502 48.6625 26.5877L56.9188 30.1314C57.4859 30.3752 57.8125 30.783 57.8125 31.2502C57.8125 31.7174 57.4859 32.1252 56.9188 32.3689L48.6625 35.9127C48.5734 35.9486 48.4375 35.9408 48.4375 35.9221V26.5768Z" fill="#CCCCCC"/>
  <path d="M46.875 43.75C45.2174 43.75 43.6277 44.4085 42.4556 45.5806C41.2835 46.7527 40.625 48.3424 40.625 50C40.625 51.6576 41.2835 53.2473 42.4556 54.4194C43.6277 55.5915 45.2174 56.25 46.875 56.25C48.5326 56.25 50.1223 55.5915 51.2944 54.4194C52.4665 53.2473 53.125 51.6576 53.125 50C53.125 48.3424 52.4665 46.7527 51.2944 45.5806C50.1223 44.4085 48.5326 43.75 46.875 43.75Z" fill="#CCCCCC"/>
</svg>

<p class="pt-2" style="color: #000;font-size: 20px;font-weight: 559;line-height: 16px;letter-spacing: -0.4px;">Select Bank Account</p>
<v-card  width="414px" class="mx-auto py-1" outlined>
  <v-row no-gutters>
        <v-col cols="11">
            <v-list class="pa-0">
        <v-list-item
         
        >
        
          <v-list-item-avatar>
            <img src="@/assets/rectangleimg.svg" width="" alt="" class="">
          </v-list-item-avatar>
         
          <v-list-item-content> 
            <v-list-item-title >
                
                <P class="mb-0 text-start" style="color: #000;font-size: 14px;font-weight: 559;line-height: 16px;">PUNJAB NATIONAL BANK</P > </v-list-item-title>
            <v-list-item-subtitle ><p class="mb-0 pt-1 text-start" style="color: #666;font-size: 12px;font-weight: 469;line-height: 16px;">A/C No: 45**********2323</p></v-list-item-subtitle>
          </v-list-item-content> 
        </v-list-item>
                </v-list>
                    </v-col>
                    <v-col cols="1" class="mt-3 ">
                      <v-radio
                color="red"
                value="red"
              ></v-radio>
                    </v-col>
                </v-row>
               
                
</v-card>
<v-card  width="414px" class="mx-auto py-1 mt-5" outlined>
  <v-row no-gutters>
        <v-col cols="11">
            <v-list class="pa-0">
        <v-list-item
         
        >
        
          <v-list-item-avatar>
            <img src="@/assets/kotakbank.svg" width="" alt="" class="">
          </v-list-item-avatar>
         
          <v-list-item-content> 
            <v-list-item-title >
                
                <P class="mb-0 text-start" style="color: #000;font-size: 14px;font-weight: 559;line-height: 16px;">PUNJAB NATIONAL BANK</P > </v-list-item-title>
            <v-list-item-subtitle ><p class="mb-0 pt-1 text-start" style="color: #666;font-size: 12px;font-weight: 469;line-height: 16px;">A/C No: 45**********2323</p></v-list-item-subtitle>
          </v-list-item-content> 
        </v-list-item>
                </v-list>
                    </v-col>
                    <v-col cols="1" class="mt-3 ">
                      <v-radio
                color="red"
                value="red"
              ></v-radio>
                    </v-col>
                </v-row>
               
                
</v-card>

<v-btn class="text-none mt-1" text style="color: #0037B7;
font-size: 12px;
font-weight: 559;
line-height: 16px; ">+ Add New Bank Account</v-btn>

<v-divider class="mx-auto mt-2 mb-5" width="80%"></v-divider>
<p style="color: #666;font-size: 10px;font-weight: 469;line-height: 14px;">By Continuing, I agree to with the Disclaimer and T&C of Zebu Trade</p>
<v-btn class="rounded-xl text-none px-5 mb-16 elevation-0" width="200px" color="#000">
    <p class="mb-0" style="color: #FFF;font-size: 14px;font-weight: 559;line-height: 20px;letter-spacing: -0.28px;"> Continue Autopay !</p> 
</v-btn></div>


        </v-card>

      </div>
</div>

</template>

<script>
 
export default {
  data() {
    return {
      NoAutomaticPayment:true,
      NoAutomaticPaymentSecond:false,
      NoAutomaticPaymentThred:false,
    };
   
  },
 
  methods: {
    
  },
};
</script>