<template>
    <div  id="app">
       <!-- <v-container class="pa-0"> -->
        <v-app-bar class="head-appbar elevation-0  appbarheadercus Autocompletetype  px-md-8"
         height="" style="height:60px;background-color: white;box-shadow: 0px 1px 15px 0px rgba(44, 44, 45, 0.03), 0px 5px 22px 0px rgba(154, 154, 156, 0.02);border-bottom: 1px solid #ECEFF3;;

;
"  app >
       
          <a href="/"> 
            <img src="@/assets/zebu.svg" width="80px" alt="" class=""></a> 
            <div class="d-none d-md-block ">
                     <v-btn to="stock"  text :ripple=false  active-class  class="text-none colortabchange ml-10 pa-0"><span
                      class="ssstextchange d-none d-md-block" style="font-size: 15px;font-weight: 469;line-height: 19px;letter-spacing:0px ;" >Dashboard</span>
                    </v-btn>
                    <v-btn to="positions"  text :ripple="false"   class="text-none colortabchange pa-0 ml-6"><span
                    class="ssstextchange d-none d-md-block" style="font-size: 15px;font-weight: 469;line-height: 19px;letter-spacing:0px ;" >Positions</span>
                    </v-btn>
                    <v-btn  to="orderbook" active-class="dnrSelected"  text :ripple="false"   class="text-none colortabchange pa-0 ml-6"><span
                    class="ssstextchange d-none d-md-block" style="font-size: 15px;font-weight: 469;line-height: 19px;letter-spacing:0px ;" >Orderbook</span>
                </v-btn>
                    <v-btn   :ripple="false" to="portfolio" text class="colortabchange text-none  pa-0 ml-6" >
                <span class="ssstextchange d-none d-md-block"  style="font-size: 15px;font-weight: 469;line-height: 19px;letter-spacing:0px ;">Holdings</span>
                </v-btn>
                    <v-btn   :ripple="false" to="watchlist" text class="colortabchange text-none pa-0 ml-6">
                <span
                    class="ssstextchange d-none d-md-block "  style="font-size: 15px;font-weight: 469;line-height: 19px;letter-spacing:0px ;">Watchlist</span>
                </v-btn>
              </div>
                    <v-spacer></v-spacer>
                   
            <v-autocomplete class="menu-search elevation-0 mr-2 rounded-pill caption HeightCustamaize d-none d-md-block"   no-data-text=""  :search-input.sync="search"   v-model="select"  
            item-text="tsym" item-key="tsym" return-object
            :loading="loading" 
            prepend-inner-icon="mdi-magnify" flat dense solo
            background-color="#F1F3F8" 
            label="Search for stocks, IPO, SGBs and G-Sec"  style="max-width: 360px;height: 36px;"   >
            <!-- <template v-slot:item="{ item }">
          
                 <v-row>
                  <v-col cols="6">
                    <p>{{item.tsym}}</p>
                  </v-col>
                 
                  <v-col cols="6" align="end">
                  <p>xjhdh</p>
                  </v-col>
                 </v-row>
                  </template> -->
<!-- 
                  <template slot="item" slot-scope="{ item }">
        <v-list-tile-content>
            <p class='fullName'>{{item.tsym}} {{item.lastName}}</p>
        
            
        </v-list-tile-content>
    </template> -->
    <!-- <div slot="prepend-item"> -->
      <template v-slot:no-data v-if="aaaaaaaaaaa">
                  <p class="text-center mt-5 font-weight-bold subtitle-2">Type more than 2 letter</p>
                  <p class="text-center  subtitle-2 font-weight-medium ">Eg. for Nifty Type: Nif</p>
        </template>
        <div slot="prepend-item" >
     
     <v-card class="elevation-0 px-2"  v-if="jjjdjdjj">
       <v-chip-group  class="chipcustamaize mt-3"
         mandatory 
         active-class="primary--text"
       >
         <v-chip outlined @click="hhhhhhh=tag"
               
           v-for="tag in tags"
           :key="tag"
         >
         <p class="pt-4" style="color: #666;
font-size: 12px;
font-weight: 469;
line-height: 100%;"> {{ tag }}</p> 
         </v-chip>
       </v-chip-group>
       <v-card class="mb-1 elevation-0" style="height:50vh;overflow-y:scroll">
       <div class="pt-4 px-2" v-if="hhhhhhh=='All'"> 

<div  v-for="f in SearchScriptsList" :key="f">
  
        <v-row no-gutters>
          <v-col cols="8" class="pt-1">
<p class="mb-0" :class="watchLIstAdd ?'' : 'mb-3'" style="color: #666;font-size: 14px;font-weight: 469;line-height: 16px;">{{f.tsym}}</p>
          </v-col>
          <v-col cols="4" class="pa-0" align="end" v-if="watchLIstAdd">
          <v-btn @click="valuechange(f)"  icon class="pa-0" style="min-height:10px"> <img class="" :src="require('@/assets/zebu-stocks/nowstocks.svg')" width="16px" height="16px" /></v-btn> 
          </v-col>
        </v-row>
      </div>
                
       </div>
       <div class="pt-4 px-2" v-if="hhhhhhh=='Equity'"> 
        <div  v-for="f in SearchEquity" :key="f">
        <v-row no-gutters>
          <v-col cols="8" class="pt-1">
<p class="mb-0" :class="watchLIstAdd ?'' : 'mb-3'" style="color: #666;font-size: 14px;font-weight: 469;line-height: 16px;">{{f.tsym}}</p>
          </v-col>
          <v-col cols="4" class="pa-0" align="end" v-if="watchLIstAdd">
          <v-btn @click="valuechange(f)" icon class="pa-0" style="min-height:10px"> <img class="" :src="require('@/assets/zebu-stocks/nowstocks.svg')" width="16px" height="16px" /></v-btn> 
          </v-col>
        </v-row>
      </div>
   <div class="pt-5" v-if="SearchEquity.length<=0">
<p class="text-center font-weight-bold subtitle-1 mb-1" style=""> No Data Available</p>
<p class="text-center font-weight-medium subtitle-2">Try search for diff name</p>
   </div>
       </div>
       <div class="pt-4 px-2" v-if="hhhhhhh=='Currency'"> 
        <div  v-for="f in Searchcurrencies" :key="f">
        <v-row no-gutters>
          <v-col cols="8" class="pt-1">
<p class="mb-0" :class="watchLIstAdd ?'' : 'mb-3'" style="color: #666;font-size: 14px;font-weight: 469;line-height: 16px;">{{f.tsym}}</p>
          </v-col>
          <v-col cols="4" class="pa-0" align="end" v-if="watchLIstAdd">
          <v-btn @click="valuechange(f)" icon class="pa-0" style="min-height:10px"> <img class="" :src="require('@/assets/zebu-stocks/nowstocks.svg')" width="16px" height="16px" /></v-btn> 
          </v-col>
        </v-row>
      </div>
   <div class="pt-5" v-if="Searchcurrencies.length<=0">
<p class="text-center font-weight-bold subtitle-1 mb-1" style=""> No Data Available</p>
<p class="text-center font-weight-medium subtitle-2">Try search for diff name</p>
   </div>
       </div>

       <div class="pt-4 px-2" v-if="hhhhhhh=='F&O'">
        <div  v-for="f in Searchfo" :key="f">
        <v-row no-gutters>
          <v-col cols="8" class="pt-1">
<p class="mb-0" :class="watchLIstAdd ?'' : 'mb-3'" style="color: #666;font-size: 14px;font-weight: 469;line-height: 16px;">{{f.tsym}}</p>
          </v-col>
          <v-col cols="4" class="pa-0" align="end" v-if="watchLIstAdd">
          <v-btn @click="valuechange(f)" icon class="pa-0" style="min-height:10px"> <img class="" :src="require('@/assets/zebu-stocks/nowstocks.svg')" width="16px" height="16px" /></v-btn> 
          </v-col>
        </v-row>
      </div>
   <div class="pt-5" v-if="Searchfo.length<=0">
     <p class="text-center font-weight-bold subtitle-1 mb-1" style=""> No Data Available</p>
<p class="text-center font-weight-medium subtitle-2">Try search for diff name</p>
   </div>
       </div>


       <div class="pt-4 px-2" v-if="hhhhhhh=='Commodity'">
        <div  v-for="f in Searchcommodities" :key="f">
        <v-row no-gutters>
          <v-col cols="8" class="pt-1">
<p class="mb-0" :class="watchLIstAdd ?'' : 'mb-3'"  style="color: #666;font-size: 14px;font-weight: 469;line-height: 16px;">{{f.tsym}}</p>
          </v-col>
          <v-col cols="4" class="pa-0" align="end" v-if="watchLIstAdd">
          <v-btn @click="valuechange(f)" icon class="pa-0" style="min-height:10px"> <img class="" :src="require('@/assets/zebu-stocks/nowstocks.svg')" width="16px" height="16px" /></v-btn> 
          </v-col>
        </v-row>
      </div>
   <div class="pt-5" v-if="Searchcommodities.length<=0">
     <p class="text-center font-weight-bold subtitle-1 mb-1" style=""> No Data Available</p>
<p class="text-center font-weight-medium subtitle-2">Try search for diff name</p>
   </div>
   
       </div>
     </v-card>
       </v-card>
 </div>
            
 

          
          
          </v-autocomplete>
                <v-menu 
                 bottom
                 offset-y
                 >
      <template v-slot:activator="{ on, attrs }"> 
        <v-btn v-bind="attrs"
          v-on="on" height="fit-content" class="pa-2 rounded-xl "   text ripple="false" style="min-width:20px;">
                      
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.8" clip-path="url(#clip0_2807_703)">
    <path d="M15.8332 9.16634V6.66634C15.8332 5.11924 15.2186 3.63551 14.1246 2.54155C13.0307 1.44759 11.5469 0.833008 9.99984 0.833008C8.45274 0.833008 6.96901 1.44759 5.87505 2.54155C4.78109 3.63551 4.1665 5.11924 4.1665 6.66634V9.16634C4.1665 11.9163 1.6665 12.583 1.6665 14.1663C1.6665 15.583 4.9165 16.6663 9.99984 16.6663C15.0832 16.6663 18.3332 15.583 18.3332 14.1663C18.3332 12.583 15.8332 11.9163 15.8332 9.16634Z" stroke="#212121" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
    <path d="M9.99977 18.3333C9.15727 18.3333 8.36561 18.305 7.62061 18.25C7.77943 18.7566 8.09585 19.1994 8.52378 19.5137C8.95171 19.828 9.46881 19.9975 9.99977 19.9975C10.5307 19.9975 11.0478 19.828 11.4758 19.5137C11.9037 19.1994 12.2201 18.7566 12.3789 18.25C11.6339 18.305 10.8423 18.3333 9.99977 18.3333Z" fill="#212121"/>
  </g>
  <defs>
    <clipPath id="clip0_2807_703">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
</v-btn> </template>
<v-card class="pa-3" width="490px"  height="500px" style="overflow-y: scroll;">
 <v-row>
  <v-col cols="10">
    <p class="pl-3 pt-2" style="color: #000;font-size: 16px;font-weight: 559;line-height: 100%;">Notifications</p>

  </v-col>
  <v-col cols="2" class="pa-0">
    <v-btn class="pa-0 ml-5 mt-4" height="fit-content"   icon style="width:fit-content">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_5251_58753)">
    <path d="M9.4375 12.25C10.9908 12.25 12.25 10.9908 12.25 9.4375C12.25 7.8842 10.9908 6.625 9.4375 6.625C7.8842 6.625 6.625 7.8842 6.625 9.4375C6.625 10.9908 7.8842 12.25 9.4375 12.25Z" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.875 10.5625V8.3125L15.4259 7.90413C15.2785 7.32813 15.0524 6.78587 14.7565 6.2875L16.1999 4.267L14.608 2.67625L12.5875 4.1185C12.0891 3.82263 11.5469 3.5965 10.9709 3.44913L10.5625 1H8.3125L7.90413 3.44913C7.32813 3.5965 6.78587 3.82263 6.2875 4.1185L4.267 2.67625L2.67625 4.267L4.1185 6.2875C3.82263 6.78587 3.5965 7.32813 3.44913 7.90413L1 8.3125V10.5625L3.44913 10.9709C3.5965 11.5469 3.82263 12.0891 4.1185 12.5875L2.67625 14.608L4.267 16.1988L6.2875 14.7565C6.78587 15.0524 7.32813 15.2785 7.90413 15.4259L8.3125 17.875H10.5625L10.9709 15.4259C11.5469 15.2785 12.0891 15.0524 12.5875 14.7565L14.608 16.1999L16.1988 14.6091L14.7565 12.5875C15.0524 12.0891 15.2785 11.5469 15.4259 10.9709L17.875 10.5625Z" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_5251_58753">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
</svg></v-btn>
  </v-col>
 </v-row>


  <v-tabs background-color="transparent" class="mt-" color="black" v-model="notificationtab">
                    <v-tab v-for="n in  notificationitem" :key="n" class="text-capitalize "
                        style="font-size: 15px;"><span class="" style="color: #666;
font-size: 14px;
font-weight: 469;
line-height: 16px; 
letter-spacing: -0.28px;">{{ n }} </span> </v-tab>
                </v-tabs>
                <v-divider></v-divider>
                <v-tabs-items v-model="notificationtab">
                  <v-tab-item></v-tab-item>
                  </v-tabs-items>
                  <v-list   
   class="pt-0"
    >
      <v-list-item class="pl-1 pb-2"
      >
        <v-list-item-avatar class="mt-n10" size="" >
          <v-avatar
      color="#F1F3F8DD"
      size="30"
    >
    <img src="@/assets/notification/Group 1000005512.svg" width="12px" alt="" class="">
    </v-avatar>
        </v-list-item-avatar>


        <v-list-item-content>
          <v-list-item-title><v-row class="pt-2">
  <v-col cols="9">
     <p class="mb-0" style="color: rgba(0, 0, 0, 0.85);
font-size: 13px;
font-weight: 559;
line-height: 16px; ">Your Total Stocks Portfolio </p>
  </v-col>
  <v-col cols="3">
     <p class="mb-0" style="color: #999;
font-size: 12px;
font-weight: 469;
line-height: 100%; ">12 min ago</p>
  </v-col>
</v-row></v-list-item-title>

          <v-card color="#F8F9FC" class="mt-2 px-2 pt-2 elevation-0">
            <v-row>
              <v-col cols="6" class="">
<p class="mb-1"><span style="color: #999;font-size: 12px;font-weight: 469;line-height: 100%; ">1D Return </span> <span class="pl-2" style="color: #000;
font-size: 12px;
font-weight: 469;
line-height: 100%;">+₹452</span><span class="pl-2" style="color: #43A833;
font-size: 12px;
font-weight: 469;
line-height: 100%;">(0.07%)</span></p>
<p class="mb-2"><span style="color: #999;font-size: 12px;font-weight: 469;line-height: 100%; ">Current Value </span> <span class="pl-2" style="color: #000;font-size: 12px;font-weight: 469;line-height: 100%;">₹1,56,00.30</span></p>
              </v-col>
              <v-col cols="6" class="" align="end">
<p class="mb-1"><span style="color: #999;font-size: 12px;font-weight: 469;line-height: 100%; ">Total Return</span> <span class="pl-2" style="color: #000;
font-size: 12px;
font-weight: 469;
line-height: 100%;">+₹452</span><span class="pl-2" style="color: #43A833;
font-size: 12px;
font-weight: 469;
line-height: 100%;">(0.07%)</span></p>
<p class="mb-2"><span style="color: #999;font-size: 12px;font-weight: 469;line-height: 100%; ">Total Invested </span> <span class="pl-2" style="color: #000;font-size: 12px;font-weight: 469;line-height: 100%;">₹1,56,00.30</span></p>
              </v-col>
            </v-row>
          </v-card>
          
        </v-list-item-content>
       
      </v-list-item>
      <v-divider class=""></v-divider>
                  </v-list>


                  <v-list   v-for="folder in folders"
        :key="folder.title" class="pt-0"
    >
      <v-list-item class="pl-1 pb-2 "
      
      >
        <v-list-item-avatar size="" >
          <v-avatar
      color="#F1F3F8DD"
      size="30"
    >
    <img alt="" class="shrink " :src="folder.imageone" width="12px" height="12px" />
    </v-avatar>
        </v-list-item-avatar>


        <v-list-item-content>
          <v-list-item-title><v-row>
  <v-col cols="9">
     <p class="mb-1" style="color: rgba(0, 0, 0, 0.85);
font-size: 13px;
font-weight: 559;
line-height: 16px; ">{{folder.title}}</p>
  </v-col>
  <v-col cols="3">
     <p class="mb-0" style="color: #999;
font-size: 12px;
font-weight: 469;
line-height: 100%; ">{{folder.Min}}</p>
  </v-col>
</v-row></v-list-item-title>

          <v-list-item-subtitle ><p class="mb-0" style="color: #999;
font-size: 12px;
font-weight: 469;
line-height: 100%; ">{{folder.subtitle}}</p></v-list-item-subtitle>
          
        </v-list-item-content>
       
        <!-- <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action> -->
      
      </v-list-item>
      <v-divider class=""></v-divider>
    </v-list>
   
<div class="text-center">
      
    <v-btn text color="primary" dark class="ma-2 text-none " >
                                        <span class="seemorelessfontsize"
                                            style="color: #0037B7;font-size: 14px;font-weight:559;line-height:16px;letter-spacing:0px">Show More</span> 
                                    </v-btn></div>
</v-card>

                 </v-menu>
     <v-btn height="fit-content" class="pa-2 rounded-xl"   text ripple="false" style="min-width:20px;">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.8" clip-path="url(#clip0_2807_707)">
    <path d="M1.6665 4.16602H18.3332" stroke="#212121" stroke-width="2" stroke-miterlimit="10"/>
    <path d="M18.3332 19.1663H1.6665V4.16634L4.99984 0.833008H14.9998L18.3332 4.16634V19.1663Z" stroke="#212121" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
    <path d="M14.1663 8.33301C14.1663 10.6663 12.333 12.4997 9.99967 12.4997C7.66634 12.4997 5.83301 10.6663 5.83301 8.33301" stroke="#212121" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
  </g>
  <defs>
    <clipPath id="clip0_2807_707">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
         </svg>
</v-btn>
<v-btn height="fit-content" class="pa-2 rounded-xl"   text ripple="false" style="min-width:20px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.8" clip-path="url(#clip0_2807_712)">
    <path d="M5.00016 2.5H2.50016C1.57933 2.5 0.833496 3.24583 0.833496 4.16667C0.833496 5.0875 1.57933 5.83333 2.50016 5.83333" stroke="#212121" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
    <path d="M5 5.83301V0.833008H16.6667V5.83301" stroke="#212121" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
    <path d="M19.1668 5.83268H2.50016C1.57933 5.83268 0.833496 5.08685 0.833496 4.16602V16.666C0.833496 18.0468 1.95266 19.166 3.3335 19.166H19.1668V5.83268Z" stroke="#212121" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
    <path d="M14.1667 14.1663C15.0871 14.1663 15.8333 13.4201 15.8333 12.4997C15.8333 11.5792 15.0871 10.833 14.1667 10.833C13.2462 10.833 12.5 11.5792 12.5 12.4997C12.5 13.4201 13.2462 14.1663 14.1667 14.1663Z" stroke="#212121" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
  </g>
  <defs>
    <clipPath id="clip0_2807_712">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>
</v-btn>
<v-menu
      open-on-hover
      bottom
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn  v-bind="attrs"
          v-on="on" height="fit-content" class="pa-2 rounded-xl"   text ripple="false" style="min-width:36px;">
    <img src="@/assets/avatarimg.svg" width="36px" alt="" class="">
</v-btn> 
      </template>

      <v-list class="px-2">
        <v-list-item
         
        >
          <v-list-item-avatar>
            <img src="@/assets/avatarimg.svg" width="36px" alt="" class="" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="color: #000;
font-size: 14px;
font-weight: 559;
line-height: 16px;">Megha Rajput</v-list-item-title>
            <v-list-item-subtitle class="pt-1" style="color: #666;
font-size: 11px;
font-weight: 469;
line-height: 100%;">User ID 2A509MR</v-list-item-subtitle>
          </v-list-item-content>

        </v-list-item>
          <v-list-item-group 
        
        color="primary"
      >
        <v-list-item dense @click="iteminfoclickaaacvffsd(k)"  
          v-for="k in itemsaaass"
          :key="k.text"  :to="k.link"
        >

          <v-list-item-icon>
            <!-- <v-icon v-text="k.icon"></v-icon> -->
            <img class="" :src="k.icon" width="14px" >
            <v-list-item-title class="pl-2 pa-0 pt-n16" v-text="k.text"></v-list-item-title>
          </v-list-item-icon><br>
         
        </v-list-item>
      </v-list-item-group>
      </v-list>
    </v-menu>
</v-app-bar>
<!-- </v-container> -->

  <div class="d-none d-md-block">
          <div class="sec-four pt-16 d-inline-flex ">
              <v-card class="rounded-0 pl-4 elevation-0 pt-2" color="#000000" width="165px">
                  <v-card class="elevation-0 rounded-0" color="transparent" width="100%">
                      <img class="pl-7" width="100%" src="@/assets/indices&stock.svg">
                  </v-card>
              </v-card>
              <v-card class="rounded-0 px-4 elevation-0" color="#000000" style="max-width:100%">
                  <div class="wrapper">
                      <div class="secfour-scroll " style="max-width:100%">
                          <div class="d-inline-flex" v-for="f in appbarindex" :key="f.text">
                              <v-badge left overlap dot color="#999999" class="barbadge">
                                  <v-list-item style="width: 190px;">
                                      <v-list-item-content class="pb-0">
                                          <v-list-item-title class="caption text-none white--text font-weight-bold">{{ f.name
                                          }}</v-list-item-title>
                                          <v-list-item-subtitle style="color: #999999;" class="caption font-weight-medium">{{
                                              f.price }}</v-list-item-subtitle>
                                      </v-list-item-content>
                                      <v-list-item-content class="text-right pb-1">
                                          <v-list-item-title
                                              :style="`color:${f.per > 0 ? '#43A833' : f.per < 0 ? '#FF1717' : '#999999'} ;`">{{
                                                  f.per > 0 ? '+' : '' }}{{ f.per }}%</v-list-item-title>
                                          <v-list-item-subtitle style="color: #999999;" class="caption font-weight-medium">vol
                                              {{ f.vol / 100000 }}K</v-list-item-subtitle>
                                      </v-list-item-content>
                                  </v-list-item>
                              </v-badge>
                          </div>
                          <div class="d-inline-flex" v-for="f in appbarindex" :key="f.name">
                              <v-badge left overlap dot color="#999999" class="barbadge">
                                  <v-list-item style="width: 190px;">
                                      <v-list-item-content class="pb-0">
                                          <v-list-item-title class="caption text-none white--text font-weight-bold">{{ f.name
                                          }}</v-list-item-title>
                                          <v-list-item-subtitle style="color: #999999;" class="caption font-weight-medium">{{
                                              f.price }}</v-list-item-subtitle>
                                      </v-list-item-content>
                                      <v-list-item-content class="text-right pb-1">
                                          <v-list-item-title
                                              :style="`color:${f.per > 0 ? '#43A833' : f.per < 0 ? '#FF1717' : '#999999'} ;`">{{
                                                  f.per > 0 ? '+' : '' }}{{ f.per }}%</v-list-item-title>
                                          <v-list-item-subtitle style="color: #999999;" class="caption font-weight-medium">vol
                                              {{ f.vol / 100000 }}K</v-list-item-subtitle>
                                      </v-list-item-content>
                                  </v-list-item>
                              </v-badge>
                          </div>
                      </div>
                  </div>
              </v-card>
          </div>
        </div>

    
    </div>
</template>
<script>
import axios from 'axios'
import { api } from '../apiUrl.js'
import { Userid1 } from '../apiUrl.js'
import { Usersession } from '../apiUrl.js'

export default {
    data: () => ({

     
      aaaaaaaaaaa:true,
      $hostname:'',
      SearchNoData:true,
      SearchScriptsList: [],
      Searchcommodities:[],
      SearchEquity:[],
      Searchcurrencies:[],
      Searchfo:[],
      hhhhhhh:['All'],
      noDatacheck:true,
      jjjdjdjj:false,
       tags: [
        'All',
        'Equity',
        'F&O',
        'Currency',
        'Commodity',
      ],
       
        watchLIstAdd:false,
      
        // Itemdata:true,
        search:"",
       
        notificationtab:null,
      folders: [
      {
       imageone: require('@/assets/notification/Group 1000005512.svg'),
       subtitle: 'Money could not be added to zebu balance. Please again',
          title: 'Add Money Failed', Min:"12 min ago"
      },
      {
       imageone: require('@/assets/notification/Group 1000005512.svg'),
       subtitle: 'You have successfully deposit the money to your demat account. ',
          title: 'Money Deposit to Zebu Account', Min:"4 days ago"
      },
      {
         imageone: require('@/assets/notification/Group 1000005512.svg'),
         subtitle: "Bank of Baroda Stocks Live Updates: Bank of Baroda's Stock Price Drops by 0.59% Today, but 1-Year Returns Remain Strong at 64.23%",
         title: 'Bank of Baroda is in News', Min:"4 days ago"
      },
      {
         imageone: require('@/assets/notification/Group 1000005512.svg'),
         subtitle: "You have successfully withdraw the money to your demat account. ",
         title: 'Money Withdraw to Zebu Account', Min:"4 days ago"
      },
      {
         imageone: require('@/assets/notification/Group 1000005512.svg'),
         subtitle: "Bank of Baroda Stocks Live Updates: Bank of Baroda's Stock Price Drops by 0.59% Today, but 1-Year Returns Remain Strong at 64.23%",
         title: 'Bank of Baroda is in News', Min:"4 days ago"
      },
    
      ],
        itemsaaass: [
        { text: 'My Account', icon: require('@/assets/Menuicon/account.svg'), link:"/accountpage" },
        { text: 'Manage Funds', icon:require('@/assets/Menuicon/managefund.svg'),},
        { text: 'Pricing Plan', icon:require('@/assets/Menuicon/pricingplan.svg'), },
        { text: 'Review Orders', icon: require('@/assets/Menuicon/revieorder.svg'), },
        { text: 'Manage Price Alerts', icon:require('@/assets/Menuicon/managepricealert.svg'),},
        { text: 'Help & Support', icon:require('@/assets/Menuicon/Helpandsupport.svg'), },
        { text: 'Setting', icon:require('@/assets/Menuicon/setting.svg'), },
        { text: 'Logout', icon:require('@/assets/Menuicon/logout.svg'), },
      ],
      notificationitem: [ 'All', 'Portfolio' , 'Transactions','News'],
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
        appbarindex: [
            { name: 'Nifty 50', per: 0.39, price: '₹17,398.05', vol: 2450000, status: true },
            { name: 'Nifty Bank', per: -0.19, price: '₹17,398.05', vol: 160000, status: true },
            { name: 'HDFC Bank', per: 0.18, price: '₹17,398.05', vol: 1450000, status: true },
            { name: 'Sun Pharma', per: -0.05, price: '₹17,398.05', vol: 2350000, status: true },
            { name: 'Adani Ent', per: 0.21, price: '₹17,398.05', vol: 35000, status: true },
            { name: 'ITC', per: 0.29, price: '₹17,398.05', vol: 770000, status: true },
            { name: 'HUL', per: 0.19, price: '₹17,398.05', vol: 650000, status: true },
        ],
        select:"",ffffffffffff:"",
    }),
    watch: {
    search(val) {
      console.log("Search Carat chaeck", val);
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    querySelections(v) {
      console.log("queryselection cheeck", v.length);
      if (v.length > 2) {
        var axiosthis = this;
        let data = JSON.stringify({
          "userId": Userid1,
          "searchText": v,
          "session": Usersession
        });
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${api}/SearchScrip`,
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        };
        axios.request(config)
          .then((response) => {
            console.log("responsestoredata",response)
            if (response.data.stat=="Ok") {
                this.jjjdjdjj=true
                this.loading = false
                this.aaaaaaaaaaa=false
                var responsestoredata = response.data.values
            axiosthis.SearchScriptsList=[]
            axiosthis.Searchcurrencies=[]
            axiosthis.Searchcommodities=[]
            axiosthis.Searchfo=[]
            axiosthis.SearchEquity=[]
            axiosthis.SearchScriptsList = responsestoredata
            for (let k = 0; k < axiosthis.SearchScriptsList.length; k++) {
              if (axiosthis.SearchScriptsList[k].instname=='FUTCUR' || axiosthis.SearchScriptsList[k].instname=='FUTIRC' || axiosthis.SearchScriptsList[k].instname=='FUTIRT' || axiosthis.SearchScriptsList[k].instname=='OPTCUR' || axiosthis.SearchScriptsList[k].instname=='OPTIRC' ) {
                axiosthis.Searchcurrencies.push(axiosthis.SearchScriptsList[k])
      console.log(axiosthis.Searchcurrencies,"axiosthis.Curency");
              }
            else if (axiosthis.SearchScriptsList[k].instname=='AUCSO' || axiosthis.SearchScriptsList[k].instname=='COM' || axiosthis.SearchScriptsList[k].instname=='FUTCOM' || axiosthis.SearchScriptsList[k].instname=='FUTIDX' || axiosthis.SearchScriptsList[k].instname=='OPTFUT' ) {
              axiosthis.Searchcommodities.push(axiosthis.SearchScriptsList[k])
      console.log(axiosthis.Searchcommodities,"axiosthis.Searchcommodities");
              }
              else if (axiosthis.SearchScriptsList[k].instname =="FUTSTK" || axiosthis.SearchScriptsList[k].instname=='OPTIDX' || axiosthis.SearchScriptsList[k].instname=='OPTSTK' ) {
                axiosthis.Searchfo.push(axiosthis.SearchScriptsList[k])
      console.log(axiosthis.Searchfo,"axiosthis.Searchfo");
              }
              else {
                axiosthis.SearchEquity.push(axiosthis.SearchScriptsList[k]);
              }
console.log("SearchEquity",this.SearchEquity);
            }
        

            
            let path=window.location.pathname;
            console.log(path,"mmmmmmmmmmmmmm");
if (path=='/watchlist') {
  this.watchLIstAdd=true
}
}


else if(response.data.stat== "Not_Ok") {
  this.aaaaaaaaaaa=true
  this.jjjdjdjj=false
}
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false
          })
      }
 
  else {
    this.aaaaaaaaaaa=true
    this.jjjdjdjj=false
  }
  
    },
    mwListAdd() {
      var axiosthis = this;
      let data = JSON.stringify({
        "userId": Userid1,
        "session": Usersession
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/MWList`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log("response firstinitial", response);
          axiosthis.MarketWatchList = response.data.values
          let n = response.data.values[0]
          axiosthis.bbbg = n;

          axiosthis.radiobuttonclickchange(n);

          // this.
          // console.log(axiosthis.MarketWatchList,"Market index");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    radiobuttonclickchange(g) {
      console.log("radiobutton check", g)
      this.jddhhd = g
      console.log("mmmmmmmm", this.jddhhd)


      // var axiosthis = this;
      let data = JSON.stringify({
        "userId": Userid1,
        "wlname": g,
        "session": Usersession
      });
      console.log("datadatadata", data);
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/MarketWatch`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log("responseccheck", response);



        })
        .catch((error) => {
          console.log(error);
        });

    },

    valuechange (f) {
      console.log("eeee", this.$hostname);
      var tokenstore = f.token
      var exchstore = f.exch

      console.log("tokenstore", tokenstore);
      console.log("exchstore", exchstore);
      let data = JSON.stringify({
        "userId": Userid1,
        "wlname": this.$hostname,
        "scripToken": `${exchstore}|${tokenstore}`,
        "add_delete_MW": "AddMultiScripsToMW",
        "session": Usersession
      });
      console.log(data, "log data check");
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${api}/AddDeleteMW`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      var axiosthis = this;
      axios.request(config)
        .then((response) => {
          console.log("response", response);
if (response.data.stat=="Ok") {
  self.location.reload() 
}
          if (response.data) {
            let n = axiosthis.bbbg
            axiosthis.radiobuttonclickchange(n);
          }
        })
        .catch((error) => {
          console.log(error);
        });




    },

    searchData() {
      console.log(this.ffffffffffff,"check check")
    }
  },

  mounted(){
    this.mwListAdd()

   
  }

}
</script>
<style lang="scss">
.Autocompletetype {
  .v-autocomplete.v-select.v-input--is-focused input {
    text-transform:Uppercase !important;
  }
  }
.v-autocomplete__content {
max-height:65vh !important;
overflow: hidden !important;
// text-transform:uppercase !important;
}
// }
.dnrSelected {
    color: red !important;
}
.appbarheadercus {
.v-input .v-label {
    font-size: 14px !important;
    font-weight: 469 !important;
    color: #000000 !important;
}
}
.colortabchange.v-btn:before {
  opacity: 0 !important;
}
.v-btn--active { 
 .ssstextchange {
    color:#0037B7 !important;
    background-color: white !important;
 }   
}
.barbadge .v-badge__badge {
    position: absolute !important;
    top: 16px !important;
    margin-right: 4px;
}
.wrapper {
    max-width: 100% !important; 
    overflow: hidden !important;
}
.secfour-scroll {
    white-space: nowrap !important;
    overflow: hidden;
    display: inline-block !important;
    animation: secfour-scroll 24s linear infinite;
}
.secfour-scroll p {
    padding-top: 3px;
    color: white;
    display: inline-block;
}
@keyframes secfour-scroll {
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-50%, 0, 0);
    }
}
</style>