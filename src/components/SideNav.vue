<template>
    <div>
      
 <v-container class="borderlinehide">
      

        <v-navigation-drawer class="white ml-16 pl-7 mt-16 pt-10 pb-16"  app  
     width=""  style="background-color: none;">
     <v-card outlined class="mx-auto mb-10 pb-16"  width="280px">
            <v-list flat>
        <v-list-item >
          <v-list-item-avatar >
            <img src="@/assets/avatarimg.svg" width="36px" alt="" class="" />
          </v-list-item-avatar>

          <v-list-item-content >
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
        <v-divider class="mt-1"></v-divider>
          <v-list-item-group  class="pt-2"    color="#0037B7" 
        v-model="selectedItem"  v-for="k in itemsaaass"
          :key="k"  
       
      >
        <v-list-item dense style="background-color: transparent;"  :to="k.link"
        >
        <v-row>
          <v-col cols="10">
            <v-list-item-icon  >
            
            <img class="" :src="k.icon" :width="k.icon==''? '0px' :'14px'"  > <p class="mb-0" :class="k.icon==''? 'pl-0 pt-1' :'pl-2 pt-1'" style="font-size: 13px;font-weight: 559;line-height: 100%; " v-text="k.text"></p>

           
          </v-list-item-icon>
          </v-col>
          <v-col cols="2" align="end" class="pl-0">
            <v-icon size="18" v-text="k.mdiicon"></v-icon>
          </v-col>
        </v-row>
          
         
          
        </v-list-item>
        <v-divider class="ml-4 mr-4 mt-n1"   :class="k.icon==''? 'd-block' :'d-none'"></v-divider>
       
      </v-list-item-group>
        <!-- <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item> -->
      </v-list>   </v-card>

     
        </v-navigation-drawer>

</v-container>
      </div>
  </template>
  
  <script>
 
  export default {
    data() {
      return {
        signusername: "",
        signinemailname: "",
  
        lsticnmblone: false,
  
        lsticnmbltwo: false,
        lsticnmbltre: false,
        lsticnmblfro: false,
        mblslcItm: 0,
        drawer: false,
        offset: true,
  
        lsticonone: false,
        lsticontwo: false,
        lsticontre: false,
        lsticonfro: false,
        dskslcItm: 0,
        itemsaaass: [
        { text: 'My Account', icon: require('@/assets/Menuicon/account.svg'), },
        { text: 'Profile Details', icon:'', link: '/accountpage' ,mdiicon:'mdi-chevron-right'  },
        { text: 'Bank Accounts Linked',icon:'', link: '/bankaccount' ,mdiicon:'mdi-chevron-right' },
        { text: 'Set Auto Pay', icon: '', link: '/autopay' ,mdiicon:'mdi-chevron-right' },
        { text: 'Margin against stocks', icon:'', link: '/noticationsettings' ,mdiicon:'mdi-chevron-right' },
        { text: 'Manage Funds', icon:require('@/assets/Menuicon/marginFund.svg'),link:'secufund'  },
        { text: 'Securities Funds ', icon:'',link:'managefund' ,mdiicon:'mdi-chevron-right'},
        { text: 'Pricing Plan', icon:require('@/assets/Menuicon/priceingplan.svg'),mdiicon:'mdi-chevron-right' },
        { text: 'Margin Calculator', icon:'' , mdiicon:'mdi-chevron-right' },
        { text: 'Brokerage Calculator', icon:'',  mdiicon:'mdi-chevron-right'},
        { text: 'SIP Calculator', icon:'',mdiicon:'mdi-chevron-right' },
        { text: 'Learn more about Pricing', icon:'',mdiicon:'mdi-chevron-right' },
        { text: 'Settings', icon:require('@/assets/Menuicon/settings.svg'), },
        { text: 'Window Setting', icon:'',mdiicon:'mdi-chevron-right'},
        { text: 'Notification Setting', icon:'',mdiicon:'mdi-chevron-right'},
        { text: 'Account Setting', icon:'',mdiicon:'mdi-chevron-right' },
        
        
      ],
      };
     
    },
    mounted() {
      var decryptedsrtore = localStorage.decryptedstoredname;
      this.signusername = decryptedsrtore;
      console.log("declocalstore mounted", this.signusername);
  
      var declocalsrore = localStorage.decryptedstoredData;
      this.signinemailname = declocalsrore;
      console.log("declocalstore mounted", this.signinemailname);
    },
  
    watch: {
      group() {
        this.drawer = false;
      },
    },
    methods: {
      handleLogout() {
        localStorage.clear();
        this.$router.push("/");
      },
    },
  };
  </script>
  
  <style lang="scss">
.borderlinehide {


.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border  {

  background-color: transparent !important;
}}
  .lstctntit {
    font-weight: 700 !important;
  }
  
  .ctnbtl {
    font-weight: 500 !important;
  }
  
  .trmnucolsl {
    background-color: #f9fbfc !important;
    background-size: 80% !important;
  }
  
  .v-slide-group__prev.v-slide-group__prev--disabled {
    display: none !important;
  }
  
  .v-list--nav .v-list-item:not(:last-child):not(:only-child),
  .v-list--rounded .v-list-item:not(:last-child):not(:only-child) {
    margin-bottom: 4px !important;
  }
  
  .v-data-table .v-data-table__wrapper table thead th {
    z-index: 0 !important;
    background-color: #f9fbfc !important;
    color: #878b93 !important;
    border-color: #eceef2 !important;
  }
  
  .v-data-footer__select {
    display: none;
  }
  
  .v-data-footer__icons-before,
  .v-data-footer__icons-after {
    display: none;
  }
  
  .v-navigation-drawer__content::-webkit-scrollbar {
    width: 5px;
  }
  
  .v-navigation-drawer__content::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  
  .v-navigation-drawer__content::-webkit-scrollbar-thumb {
    background: #c4c4c4;
    border-radius: 10px;
  }
  
  .v-main {
    padding-left: 256px !important;
  }
  
  @media only screen and (max-width: 959px) {
    .appbar {
      position: fixed !important;
      z-index: 1 !important;
    }
  
    .v-main {
      padding-left: 0px !important;
    }
  
    .v-menu__content {
      box-shadow: 0px 8px 16px -4px rgba(22, 34, 51, 0.08) !important;
    }
  }

  // .bordewwwwwwwwwwwwr {

  //   background-color: lightblue !important;
  // }
  </style>