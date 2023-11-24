<template>
  <div>
    <v-row class="mt-2">
      <v-col cols="12" md="9" class="pr-8 bbbbbbbbb">
        <v-card class=" pt-1 border1 elevation-0 " >
          <v-toolbar class="px-2 mb-2 " elevation="0" color="white">
            <img class="" :src="require('@/assets/FO/RelienceIndustries.svg')" width="38px" />
            <div class="pl-4">
              <p class="mb-0 text-BlackColor  fs-20 fw-559 Lh-16 Ls-0_4">Reliance Industries Ltd</p>
              <p class="mb-0 mt-1 text-start text-666Color  fs-12 font-weight-regular Lh-16 ">Option Chain</p>
            </div>
            <v-spacer></v-spacer>
            <v-card color="#F1F3F8" class="elevation-0 pr-3 pl-4 mt-1 mr-6 rounded-pill" height="34px" width="151px">
              <v-row>
                <v-col cols="9" class="text-start pr-0">
                  <p class="mb-0 pt-3 text-666Color fs-12 font-weight-regular Lh-14">Expiry<span class="text-BlackColor font-weight-bold pl-2" >30 Aug</span></p>
                </v-col>
                <v-col cols="3">
                  <v-btn text class="pa-0 mt-1" style="min-width:fit-content;height:fit-content"><v-icon class="" size="14"
                      color="#000000">mdi-chevron-up</v-icon></v-btn><br>
                  <v-btn text class="pa-0 mt-n7" style="min-width:fit-content;height:fit-content"><v-icon size="14"
                      class="mb-0 pt-0" color="#000000">mdi-chevron-down</v-icon></v-btn>
                </v-col>
              </v-row>
            </v-card>
            <span class="text-666Color fs-12 font-weight-regular Lh-16 ">Quick Basket</span>
                      <label class="LabelSwitchBtn ml-2 mr-3">
                        <input type="checkbox"  v-model="isActive" />
                        <span class="SwitchSliderChange round"></span>
                      </label>
          </v-toolbar>
          <v-data-table :headers="StocksOptionChainHead"   class="elevation-0"
            hide-default-footer >
            <template v-slot:body>
            <tbody>
            
                  <tr @mouseover="selectItem(d)" @mouseleave="unSelectItem(d)" v-for="d in 7" :key="d">
                    <td class="py-3 text-end">
                      <p class=" mb-0 text-BlackColor fs-13 fw-559 Lh-16"> 945</p>
                      <p class="pl-6 mb-0 pt-1 text-GreenColor fs-12 font-weight-medium Lh-16">+22.09%</p>
                    </td>
                    <td class="py-3 text-end">
                      <p class="pl-6 mb-0 text-BlackColor fs-13 fw-559 Lh-16">₹41.10</p>
                      <p class="pl-6 mb-0 pt-1  text-RedColor fs-12 font-weight-medium Lh-16" > -₹146.55 (53.50%)</p>
                    </td>
                      <td class="my-auto text-end" >
                      <p class="mb-0 text-BlackColor fs-14 fw-559 Lh-16">₹5,000.00</p>
                      </td>
                    <td class="py-3 text-end " >
                      <p class="pl-6 mb-0 text-BlackColor fs-13 fw-559 Lh-16">₹41.10</p>
                      <p class="pl-6 mb-0 pt-1  text-RedColor fs-12 font-weight-medium Lh-16" > -₹146.55 (53.50%)</p>
                    </td>
                    <td class="py-3 text-end pr-10" >
                    <p class=" mb-0 text-BlackColor fs-13 fw-559 Lh-16"> 945 </p>
                      <p class="pl-6 mb-0 pt-1 text-GreenColor fs-12 font-weight-medium Lh-16">+22.09%</p>
                    </td>
                  </tr>
            </tbody>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" class="pr-1">
        <v-card outlined class="pl-5 pr-4 pb-6 pt-10">
          <div class="text-center">
            <img src="@/assets/FO/CompleteFandOonboarding.svg" />
          <p class="text-BlackColor fs-16 fw-559 Lh-16 Ls-032 pt-6" >Complete F&O Onboarding</p>
          <p class="mb-7 text-666Color fs-12 font-weight-regular Lh-18 Ls-0_06" >And unlock  single-tap access to any contract through exclusive F&O features like option chain, open interest analysis  etc.</p>
          <v-btn color="#000" class="py-2 px-5 text-capitalize fs-14 font-weight-regular Lh-20 Ls-0-28 text-WhiteColor elevation-0 rounded-pill" width="100%">Complete F&O Onboarding</v-btn>
            </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      StocksOptionChainHead:[
      { text: 'OI lots', align: 'end',sortable: false,class:"TableHeaderFntColor"},
          { text: 'Call Price',align: 'end', sortable: false,class:"TableHeaderFntColor",width:"20%"},
          { text: 'Strike price',align: 'end',  sortable: false,class:"TableHeaderFntColor" },
          { text: 'Put Price', align: 'end',sortable: false,class:"TableHeaderFntColor" },
          { text: 'OI lots', align: 'end', sortable: false,class:"TableHeaderFntColor PaddingRightCus" },
      ]
    };
  },
}
</script>
<style lang="scss">
.PaddingRightCus {
  padding-right:40px !important;
}
.bbbbbbbbb{
.LabelSwitchBtn {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 24px;
}
.LabelSwitchBtn input {
  opacity: 0;
  width: 0;
  height: 0;
}

.SwitchSliderChange {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F1F3F8 !important;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.SwitchSliderChange:before {
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
input:checked + .SwitchSliderChange:before {
  -webkit-transform: translateX(19px);
  -ms-transform: translateX(19px);
  transform: translateX(19px);
}
.SwitchSliderChange.round {
  border-radius: 30px;
}

.SwitchSliderChange.round:before {
  border-radius: 40%;
}}
</style>