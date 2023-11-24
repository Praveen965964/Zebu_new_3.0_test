<template>
    <div>
        <v-container>
            <v-dialog    v-model="IpoApplyDialog"  width="630" class="" style="overflow:hidden;">
      <v-card class="pt-5 " style="overflow-y:hidden;border-radius: 12px;border: 1px solid #DEE2EB;background: #FFF;box-shadow: 0px 1px 15px 0px rgba(44, 44, 45, 0.03), 0px 4px 11px 0px rgba(155, 155, 155, 0.02), 0px 5px 4px 0px rgba(154, 154, 156, 0.02);">
       
       <div class="d-flex pb-3 px-5">
        <p class="my-auto fw-600 text-blackColor fs-18px Ls-0-32Px">IPO Application</p>
        <v-btn @click="IpoApplyDialog= false" class="ml-auto" small icon outlined style="border: 1px solid #CCC;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M11.5 4.5L4.5 11.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 4.5L11.5 11.5" stroke="#666666" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></v-btn>
       </div>
       <v-card class="elevation-0 px-5 pb-5" height="520px" style="overflow:scroll">
       <v-card class="elevation-0 pt-3 pb-5 px-5" style="border-radius: 4px;" color="#F1F3F8" >
<div class="d-flex pb-5">
    <p class="mb-0 mb-auto fs-16px fw-600 Ls-0-32Px Lh-16 text-blackColor ">Mankind Pharma Limited IPO</p>
    <v-card class="elevation-0 px-2 ml-2" color="#FFF" height="18px" style="border-radius: 4px;padding-top:3px;padding-bottom:3px">
        <p class="mb-0 text-uppercase text-Greycolor fs-9 Lh-12px Ls-0-9px ">MAIN STREAM</p>
    </v-card>

</div>
<v-row>
    <v-col cols="3">
        <p class="mb-0 fs-14px font-weight-medium Lh-16 text-blackColor ">13</p>
        <p class="mb-0 pt-1 fs-12px text-Greycolor font-weight-regular Ls_006 Lh-16 ">Min. quantity</p>

    </v-col>
    <v-col cols="3" class="">
        <p class="mb-0 fs-14px font-weight-medium text-blackColor Lh-16 ">₹ 1026 – ₹ 1080</p>
        <p class="mb-0 pt-1 fs-12px text-Greycolor font-weight-regular Ls_006 Lh-16 ">Price range</p>

    </v-col>
    <v-col cols="4" class="pl-6">
        <p class="mb-0 fs-14px font-weight-medium text-blackColor Lh-16 ">₹ 120Cr</p>
        <p class="mb-0 pt-1 fs-12px text-Greycolor font-weight-regular Ls_006 Lh-16 ">IPO Size</p>

    </v-col>
</v-row>
       </v-card>
       <v-card class="elevation-0 mt-n2 px-5" color="#FCEFD4" height="22px" style="border-radius: 4px;">
    <p class="py-1 mb-0 Lh-16 fs-12px font-weight-regular text-Greycolor">IPO window is open from 10:00 AM till 05:00 PM on trading days.</p>

</v-card>
<div>
    <p class="pt-5 mb-3 fs-12px fw-600 text-blackColor">Bid - 01<v-btn class="text-capitalize ml-2 pa-2 fs-12px fw-600 text-Redcolor"  text x-small>Delete</v-btn></p>
    <v-row>
        <v-col cols="4" class="pr-0">
                <p class="mb-3 fs-14px text-blackColor fw-600 Lh-16">Number of Quantity</p>
                <v-text-field  hide-details class="fs-14px font-weight-regular text-blackColor" height="36px" width="100%" background-color="#F1F3F8"  solo rounded flat dense > 
              <template v-slot:label>
               <p class="">50</p>
              </template>
            </v-text-field>
        </v-col>
        <v-col cols="4" class="pr-0">
                <p class="mb-3 fs-14px text-blackColor fw-600 Lh-16">Bid Price</p>
                <v-text-field  hide-details class="fs-14px font-weight-regular text-B1B1B1" height="36px" background-color="#F1F3F8"  solo rounded flat dense > 
              <template v-slot:label>
               <p class="LabelclassCustomColorFnt">₹ 1,288.90</p>
              </template>
            </v-text-field>
        </v-col>
        <v-col cols="4" class="my-auto pr-0 pl-4" align="end" >
            <v-checkbox
              v-model="ex4"
           
              color="#000"
              value="red"
              hide-details
            >
        <template v-slot:label>
<p class="mb-0 fs-12px text-Greycolor font-weight-medium Lh-14"> Cut-off price <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M6 8L6 6M6 4H5.995M1.5 6C1.5 3.51472 3.51472 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6C10.5 8.48528 8.48528 10.5 6 10.5C3.51472 10.5 1.5 8.48528 1.5 6Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></p>
        </template></v-checkbox>
        </v-col>
    </v-row>
    <v-divider class="mt-5"></v-divider>
   
    <v-btn small text class="mt-3 pa-2 fs-12px fw-600 Lh-14 text-none text-BLUEcolor">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<g clip-path="url(#clip0_3739_28530)">
<path d="M11.25 5.25H6.75V0.75C6.75 0.3 6.45 0 6 0C5.55 0 5.25 0.3 5.25 0.75V5.25H0.75C0.3 5.25 0 5.55 0 6C0 6.45 0.3 6.75 0.75 6.75H5.25V11.25C5.25 11.7 5.55 12 6 12C6.45 12 6.75 11.7 6.75 11.25V6.75H11.25C11.7 6.75 12 6.45 12 6C12 5.55 11.7 5.25 11.25 5.25Z" fill="#0037B7"/>
</g>
<defs>
<clipPath id="clip0_3739_28530">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
        </svg> <span class="pl-2"> Add another bid</span>
    </v-btn>
    <p class="mb-3 pt-4 fs-14px text-blackColor fw-600 Lh-16">UPI ID (Virtual payment address)</p>
    <v-text-field placeholder="Add UPI ID" hide-details class="fs-14px font-weight-regular text-B1B1B1" height="36px" background-color="#F1F3F8"  solo rounded flat dense > 
              <template v-slot:placeholder>
               <p class="mb-0 ">Add UPI ID</p>
              </template>
            </v-text-field>
            <v-checkbox hide-details class="mb-2">
        <template v-slot:label>
<p class="mb-0 fs-11px text-Greycolor font-weight-regular Lh-16"> I hereby undertake that I have read the Red Herring Prospectus and I am eligible bidder as per the applicable provisions of SEBI (Issue of Capital & Disclosure Agreement, 2009) regulations</p>
        </template></v-checkbox>
        <svg class="" xmlns="http://www.w3.org/2000/svg" width="579" height="2" viewBox="0 0 579 2" fill="none">
<path d="M578 1.5C578.276 1.5 578.5 1.27614 578.5 1C578.5 0.723858 578.276 0.5 578 0.5V1.5ZM0 1.5H1.50521V0.5H0L0 1.5ZM4.51562 1.5H7.52604V0.5H4.51562V1.5ZM10.5365 1.5H13.5469V0.5H10.5365V1.5ZM16.5573 1.5H19.5677V0.5H16.5573V1.5ZM22.5781 1.5H25.5885V0.5H22.5781V1.5ZM28.599 1.5H31.6094V0.5H28.599V1.5ZM34.6198 1.5H37.6302V0.5H34.6198V1.5ZM40.6406 1.5H43.651V0.5H40.6406V1.5ZM46.6615 1.5H49.6719V0.5H46.6615V1.5ZM52.6823 1.5H55.6927V0.5H52.6823V1.5ZM58.7031 1.5H61.7136V0.5H58.7031V1.5ZM64.724 1.5H67.7344V0.5H64.724V1.5ZM70.7448 1.5H73.7552V0.5H70.7448V1.5ZM76.7656 1.5H79.776V0.5H76.7656V1.5ZM82.7865 1.5H85.7969V0.5H82.7865V1.5ZM88.8073 1.5H91.8177V0.5H88.8073V1.5ZM94.8281 1.5H97.8385V0.5H94.8281V1.5ZM100.849 1.5H103.859V0.5H100.849V1.5ZM106.87 1.5H109.88V0.5H106.87V1.5ZM112.891 1.5H115.901V0.5H112.891V1.5ZM118.911 1.5H121.922V0.5H118.911V1.5ZM124.932 1.5H127.943V0.5H124.932V1.5ZM130.953 1.5H133.964V0.5H130.953V1.5ZM136.974 1.5H139.984V0.5H136.974V1.5ZM142.995 1.5H146.005V0.5H142.995V1.5ZM149.016 1.5H152.026V0.5H149.016V1.5ZM155.036 1.5H158.047V0.5H155.036V1.5ZM161.057 1.5H164.068V0.5H161.057V1.5ZM167.078 1.5H170.089V0.5H167.078V1.5ZM173.099 1.5H176.109V0.5L173.099 0.5V1.5ZM179.12 1.5H182.13V0.5H179.12V1.5ZM185.141 1.5H188.151V0.5H185.141V1.5ZM191.162 1.5H194.172V0.5H191.162V1.5ZM197.182 1.5H200.193V0.5H197.182V1.5ZM203.203 1.5H206.214V0.5H203.203V1.5ZM209.224 1.5H212.234V0.5H209.224V1.5ZM215.245 1.5H218.255V0.5H215.245V1.5ZM221.266 1.5H224.276V0.5H221.266V1.5ZM227.287 1.5H230.297V0.5H227.287V1.5ZM233.307 1.5H236.318V0.5H233.307V1.5ZM239.328 1.5H242.339V0.5H239.328V1.5ZM245.349 1.5H248.36V0.5H245.349V1.5ZM251.37 1.5H254.38V0.5H251.37V1.5ZM257.391 1.5H260.401V0.5H257.391V1.5ZM263.412 1.5H266.422V0.5H263.412V1.5ZM269.432 1.5H272.443V0.5H269.432V1.5ZM275.453 1.5H278.464V0.5H275.453V1.5ZM281.474 1.5H284.484V0.5H281.474V1.5ZM287.495 1.5H290.505V0.5L287.495 0.5V1.5ZM293.516 1.5H296.526V0.5H293.516V1.5ZM299.536 1.5H302.547V0.5H299.536V1.5ZM305.557 1.5H308.568V0.5H305.557V1.5ZM311.578 1.5H314.589V0.5H311.578V1.5ZM317.599 1.5H320.609V0.5H317.599V1.5ZM323.62 1.5H326.63V0.5H323.62V1.5ZM329.641 1.5H332.651V0.5H329.641V1.5ZM335.661 1.5H338.672V0.5H335.661V1.5ZM341.682 1.5H344.693V0.5H341.682V1.5ZM347.703 1.5H350.713V0.5H347.703V1.5ZM353.724 1.5H356.734V0.5H353.724V1.5ZM359.745 1.5H362.755V0.5H359.745V1.5ZM365.765 1.5H368.776V0.5H365.765V1.5ZM371.786 1.5H374.797V0.5H371.786V1.5ZM377.807 1.5H380.817V0.5H377.807V1.5ZM383.828 1.5H386.838V0.5H383.828V1.5ZM389.849 1.5H392.859V0.5H389.849V1.5ZM395.869 1.5H398.88V0.5H395.869V1.5ZM401.89 1.5H404.901V0.5H401.89V1.5ZM407.911 1.5H410.922V0.5H407.911V1.5ZM413.932 1.5H416.942V0.5H413.932V1.5ZM419.953 1.5H422.963V0.5H419.953V1.5ZM425.974 1.5H428.984V0.5H425.974V1.5ZM431.994 1.5H435.005V0.5H431.994V1.5ZM438.015 1.5H441.026V0.5H438.015V1.5ZM444.036 1.5H447.046V0.5H444.036V1.5ZM450.057 1.5H453.067V0.5H450.057V1.5ZM456.078 1.5H459.088V0.5H456.078V1.5ZM462.098 1.5H465.109V0.5H462.098V1.5ZM468.119 1.5H471.13V0.5H468.119V1.5ZM474.14 1.5H477.15V0.5H474.14V1.5ZM480.161 1.5H483.171V0.5H480.161V1.5ZM486.182 1.5H489.192V0.5H486.182V1.5ZM492.202 1.5H495.213V0.5H492.202V1.5ZM498.223 1.5H501.234V0.5H498.223V1.5ZM504.244 1.5H507.255V0.5H504.244V1.5ZM510.265 1.5H513.275V0.5H510.265V1.5ZM516.286 1.5H519.296V0.5H516.286V1.5ZM522.307 1.5H525.317V0.5H522.307V1.5ZM528.328 1.5H531.338V0.5H528.328V1.5ZM534.348 1.5H537.359V0.5H534.348V1.5ZM540.369 1.5H543.38V0.5H540.369V1.5ZM546.39 1.5H549.401V0.5H546.39V1.5ZM552.411 1.5H555.422V0.5H552.411V1.5ZM558.432 1.5H561.442V0.5H558.432V1.5ZM564.453 1.5H567.463V0.5H564.453V1.5ZM570.474 1.5H573.484V0.5H570.474V1.5ZM576.495 1.5L578 1.5V0.5H576.495V1.5Z" fill="#D9DBDC"/>
</svg>

<div class="d-flex pt-5">
    <div>
        <p class="mb-0 fs-12px  font-weight-medium text-Greycolor">Required amount to buy 2 Bid</p>
        <p  class="mb-0 fs-16px fw-600 Ls-128px text-282B2F">₹ 4,035.05</p>
    </div>
  <v-btn class="ml-auto text-none Ls-0-112px rounded-pill elevation-0 py-3 px-8 fs-14px font-weight-regular mr-2" color="#F1F3F8">
    Cancel
  </v-btn>
  <v-btn class=" text-none rounded-pill elevation-0 py-3 px-8 fs-14px  Ls-0-112px font-weight-regular white--text" color="#000">
    Continue
  </v-btn>
</div>
</div>

</v-card>
      </v-card>
    </v-dialog>

            <v-card class="elevation-0 mb-3" outlined style="border: 1px solid #DDD;">
                <v-toolbar elevation="0" class="py-1" >
                    <img src="@/assets/IpoMainStraem.svg" />
                    <div class="text-start pl-4">
                        <p class="mb-0 title fw-600 Lh-16 Ls_004 text-blackColor">Main stream IPOs</p>
                        <p class="mb-0 pt-1 caption font-weight-regular text-Greycolor Lh-16 ">Initial public offering a new stock issuance for the first time.</p>
                    </div>
                    <v-spacer></v-spacer>
                    <v-card color="#F1F3F8" class="mdiDownArrowMarginCus elevation-0 rounded-pill  pr-4 pl-4 mr-3" height="38px" >
              <v-row>
                <v-col cols="9" class="text-start pr-0">
                  <p class="mb-0 pt-3 fs-14 font-weight-medium text-666Color Lh-16">{{new Date().getFullYear()}}</p>
                </v-col>
                <v-col cols="3" class="pl-1">
                  <v-btn  height="12px" class="pa-0 rounded-xl mt-2" text style="min-width:7px;">
                    <v-icon class="" size="15" color="#212121"> mdi-chevron-up </v-icon>
                  </v-btn>
                  <v-btn height="10px" class="pa-0 rounded-xl mt-n6 ma-0" text style="min-width:7px;" >
                    <v-icon class="m" size="15" color="#000000"> mdi-chevron-down </v-icon>
                  </v-btn>
                  
                </v-col>
              </v-row>
                   </v-card>
            <v-text-field  hide-details class=" mr-6" height="36px" background-color="#F1F3F8"  solo rounded flat dense style="max-width:216px"> 
              <template v-slot:prepend-inner>
                <img alt="search-icon" class="shrink" src="@/assets/searchicon.svg" width="20px"  height="18px" />
              </template>
              <template v-slot:label>
               <p class="LabelclassCustomColorFnt">Search funds</p>
              </template>
            </v-text-field>
                </v-toolbar>
                <v-data-table class="elevation-0 mt-3 pb-2"  :headers="BondsTableHeaders" :search="search"  :items-per-page="ItemPrePageBond" item-key="id" v-model="selectedRows"    hide-default-footer>
                <template v-slot:footer>
                  <v-divider></v-divider>
                  <div class="text-center mt-2" >
                    <v-btn text  dark small class="text-none" @click="ShowmoreIpos =!ShowmoreIpos">
                      <span class="text-BLUEcolor fs-14px  fw-600 Lh-16" v-if="ShowmoreIpos"> Show More IPOs</span> 
                      <span class="text-BLUEcolor fs-14px  fw-600 Lh-16" v-else>Show closed IPOs</span> 
                    </v-btn>
                  </div>
                </template>
                <template v-slot:body>
      <tbody>
                  <tr  @mouseover="selectItem(d)" @mouseleave="unSelectItem(d-block)" v-for="d in ShowmoreIpos ? 5 : 7" :key="d">
                    <td class="pt-3 pb-6 pr-0">
                      <p class="fs-14px  text-blackColor fw-600  Lh-16 ">Remus Pharmaceuticals Limited</p>
                      <div class="display-flex row pt-1">
                        <v-card  :color="d === selectedItem ? 'white' : '#F1F3F8'"
                          height="18px" width="" class="px-2 py-1 ml-3" elevation="0">
                          <p class=" mb-0 text-center text-666Color fs-9  font-weight-regular Ls-0-9px Lh-12px  text-uppercase"> HSIL </p>
                        </v-card>
                      </div>
                    </td>
                    <td class="pb-6">
                      <p class=" mb-0 fs-13px text-BlackColor font-weight-medium Lh-16">17th — 19th May</p>
                    </td>
                    <td class="pb-6">
                      <p class=" mb-0 fs-13px text-BlackColor font-weight-medium Lh-16" >23rd May</p>
                    </td>
                    <td class="pb-6">
                      <p class="mb-0 fs-13px text-BlackColor font-weight-medium Lh-16">₹ 1150 - ₹ 1229</p>
                    </td>
                    <td class="pb-6"><p class="mb-0 fs-13px text-BlackColor font-weight-medium Lh-16">₹ 1,27,400</p>
                    </td>
                    <td class="pb-6">
                        <v-btn small class="text-capitalize" text dark @click="IpoApplyDialog =true">
                        <p class="mb-0 fs-13 fw-600 text-BLUEcolor Lh-16">Apply</p></v-btn></td>
                  </tr>
      </tbody>
    </template>
              </v-data-table>

            </v-card>

        </v-container>
    </div>
</template>
<script>
export default {
  data() {
    return {
        IpoApplyDialog:false,
      selectedItem: false,
      ShowmoreIpos:true,
      BondsTableHeaders: [
        { text: 'Stock name', align: 'start', sortable: false, value: '', class: "TableHeaderFntColor" },
        { text: 'IPO date',  sortable: false, class: "TableHeaderFntColor" },
        { text: 'Listing date',  sortable: false, class: "TableHeaderFntColor" },
        { text: 'Price range',  sortable: false, class: "TableHeaderFntColor" },
        { text: 'Min. amount',sortable: false, class: "TableHeaderFntColor" },
        { text: '', sortable: false, class: "TableHeaderFntColor" },
      ],
    };
  },
  methods: {
  
    selectItem(item) {
      this.selectedItem = item
    },
    unSelectItem() {
      this.selectedItem = false
    },
  },
  components: {},
}
</script>
<style lang="scss">
.fs-11px {
    font-size:11px !important;

}
.fs-12px {
    font-size:12px !important;

}
.fs-13px {
font-size: 13px !important;
}
.fs-14px {
    font-size:14px !important;
}
.fs-16px {
    font-size:14px !important;
}
.fs-18px {
    font-size:18px !important;
}
.fs-20 {
font-size:20px !important
}
.fs-9 {
    font-size:9px !important
}

.Ls-0-112px {
    letter-spacing: -0.112px !important;
}
.Ls-0-32Px {
    letter-spacing: -0.32px !important;
}
.Ls_004 {
    letter-spacing: -0.4px !important; 
}
.Ls_006 {
    letter-spacing: -0.06px !important; 
}
.Lh-12px {
    line-height: 12px !important;
}
.Lh-14px {
    line-height: 14px !important;
}
.Lh-16 {
    line-height: 16px !important;
}
.Ls-0-9px {
    letter-spacing:  0.9px !important;
}
.Ls-128px {
    letter-spacing: -0.128px;
}
.LabelclassCustomColorFnt {
    color: #000 !important;
    font-size: 14px !important;
    font-weight: 469 !important;
    line-height: 16px !important;
  }
.mdiDownArrowMarginCus {
.mdi-chevron-down::before {
margin:0px !important;
}
 }
 .text-B1B1B1{
    color:#B1B1B1 !important;
}
.text-blackColor{
    color:#000 !important;
}
.text-BLUEcolor{
    color:#0037B7 !important;
}
.text-282B2F{
    color:#282B2F !important;
}
.text-Greycolor {
    color: #666 !important;
}
.text-Redcolor {
    color:#FD2E2E !important;
}
.fw-600 {
font-weight:600 !important;
}



</style>