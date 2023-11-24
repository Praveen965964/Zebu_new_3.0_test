<template>
    <div>
        <p class="pt-4 mb-1 fs-20 fw-559 Lh-16 Ls-0_4 text-BlackColor">Commodities Categories</p>
       <div class="CommoditsScrollHorizantalHide">
        <div class="OverfLowscroll">
        <div class="d-inline-flex ml-n3 pt-4">
          <v-card class="ml-3 pl-3 py-1 pr-2 " outlined height="" width="162.5px" v-for="(item, index) in 5" :key="index">
            <p class="pt-1 mb-1 fs-14 fw-559 Lh-16 text-BlackColor" >Agriculture</p>
            <v-divider  class="mt-2"  width="24px"  color="#000000" />
            <p class="mt-3 mb-0 fs-12 font-weight-medium  Lh-16 text-666Color" >47 commodities</p>
            <p class="mb-0 fs-12 fw-559 Lh-16 text-GreenColor"> 3 recommended</p>
          </v-card>
        </div>
      </div>
      </div>
      <v-row class="mt-4">
        <v-col cols="12" md="9" class="pr-8">
          <v-card class="" outlined style="border: 1px solid #efeef3;">
<div class="d-flex">
              <v-list class="pl-1">
            <v-list-item class=" pt-0">
               <img src="@/assets/commodities/fuel-electric.svg" alt="FuelEletric-svg">
            <v-list-item-content class="pl-5">
                    <v-list-item-title class="text-start  fs-20 fw-559  Ls-0_4 text-BlackColor">Energy</v-list-item-title>
                    <v-list-item-subtitle class="text-start  fs-12 font-weight-medium Lh-14  text-666Color">Includes crude oil, gasoline, natural gas.
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-text-field class="TextfiledHeightCus ml-auto mt-5 mr-5 " hide-details height="36px" background-color="#F1F3F8"
                label="Search funds" solo rounded flat dense>
                <template v-slot:label>
                  <p class="text-BlackColor fs-14 font-weight-medium Lh-16 pl-1">Search commodities</p>
                </template>
                <template v-slot:prepend-inner>
                  <img alt="" class=" shrink" :src="require('@/assets/commodities/searchicon.svg')" width="20px"
                    height="18px" />
                </template>
              </v-text-field>

</div>
                        <v-data-table  :headers="commoditiesHeader"  :items-per-page="ItemPerPageCommodites" item-key="id"  class="elevation-0 borderIdthcus" hide-default-footer >
                            <template v-slot:[`header.DayHighLow`]="{ header }">
       <v-row class="" no-gutters>
        <v-col cols="8" class="">
          <p class="mb-0 pt-2 ">{{ header.text }}</p>
        </v-col>
        <v-col cols="4" class="ButtonOrMenuRippleNone" align="end">
            <v-menu left offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn  v-bind="attrs" v-on="on"   class="pa-0 float-right" width="fit-content" icon>
                                <v-icon color="black" size="19">mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in CommoditesMenuItems" :key="index">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
        </v-col>
       </v-row>
                            </template>
                            <template v-slot:body>
            <tbody>
                  <tr class="py-5" v-for="d in 10" :key="d">
                    <td class=" pr-0" >
               <p class="mb-0 fs-14 text-BlackColor fw-559 Lh-16">Silverm </p>
                </td>
                    <td class="">
                      <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16">31-Aug-23</p>
                    </td>
                    <td class="">
                      <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16" >1200</p>
                    </td>
                    <td class="">
                      <p class="mb-0 text-BlackColor font-weight-medium fs-13 Lh-16">₹59,290</p>
                    </td>
                    <td class=""><span class="fs-13 text-GreenColor font-weight-medium Lh-16">+90.00</span>
                    </td>
                    <td class=""><span class="fs-13 text-GreenColor font-weight-medium Lh-16">+1.65%</span></td>
                    <td>
                    <v-row no-gutters class="">
                                            <v-col class="" cols="3">
                                                <p class="pt-2 mb-0 text-BlackColor font-weight-medium fs-13 Lh-16" >₹6,232</p>
                                            </v-col>
                                            <v-col class="" cols="5">
                                                <v-slider disabled :ripple="false" class="ml-1 mt-0 pt-0 mb-0 CommoditsCatMessageInpuslotCus" value="50" thumb-color="black" track-color="#D9D9D9" :thumb-size="0" />
                                            </v-col>
                                            <v-col class="pa-" cols="3">
                                                <p class="pl-0 pt-2 mb-0 text-BlackColor font-weight-medium fs-13 Lh-16">₹6,192</p>
                                            </v-col>
                                        </v-row>
                                    </td>
                  </tr>
            </tbody>
                            </template>
                        </v-data-table>              
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="pr-1">
<div class="d-flex">
  <p class="text-BlackColor fs-16 fw-559 Lh-16 Ls-032"  >Filters</p>
  <v-btn text class="pa-1 text-none ml-auto" min-width="fit-content" height="fit-content" ><span class="text-blueColor fs-14 fw-559 Lh-16 Ls-0-28">Reset</span></v-btn>
          <v-menu left offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="pa-0 mr-1" icon v-bind="attrs" v-on="on" max-width="fit-content"  height="fit-content"> 
                <v-icon color="#000000" size="20">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in CommoditesMenuItems" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
</div>
        <v-expansion-panels class="" v-model="ExPansePanelModel" flat multiple>
          <v-expansion-panel class="">
            <v-expansion-panel-header class="pa-0" style="min-height:30px">
              <v-row>
                <v-col class="" cols="9">
                  <p class="mb-0 text-666Color fs-14 font-weight-medium Lh-16" >Expiry date</p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0 ml-n2 Lh-16 fs-14 text-666Color font-weight-medium"><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-divider class="border1Divider"></v-divider>
            <v-expansion-panel-content class="pa-0 mt-4 pl-2">
              <v-checkbox class="rounded-xl pa-0 ma-0 pt-2  checkboxfontlabel" hide-details v-for="(c,i) in CheckBoxItemsCommmodityCat" :key="i" v-model="selected" :value="c">
                <template v-slot:label>
                  <span class="text-BlackColor fs-12 font-weight-medium Lh-14">{{ c }}</span>
                </template>
              </v-checkbox>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="">
            <v-expansion-panel-header class="pa-0">
              <v-row>
                <v-col class="" cols="9">
                    <p class="mb-0 fs-14 Lh-16 font-weight-medium text-BlackColor" >Option Type <svg class="ml-3 mt-n1" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
<circle cx="3" cy="3" r="3" fill="#0037B7"/>
</svg></p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0  ml-n2 text-666Color fs-14 Lh-16 font-weight-medium"><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header><v-divider class="mt-n2"></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="pt-1">
            <v-expansion-panel-header class="pa-0">
              <v-row>
                <v-col class="" cols="9">
                  <p class="mb-0 fs-14 Lh-16 font-weight-medium text-666Color">Sub category</p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0 ml-n2 fs-14 Lh-16 font-weight-medium text-666Color"><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header><v-divider class="mt-n2 border1Divider "></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="pt-1">
            <v-expansion-panel-header class="pa-0">
              <v-row>
                <v-col class="" cols="9">
                  <p class="mb-0 fs-14 Lh-16 font-weight-medium text-666Color" >Dividend type</p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0 ml-n2 fs-14 Lh-16 font-weight-medium text-666Color" ><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-divider class="mt-n2 border1Divider"></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="pt-1">
            <v-expansion-panel-header class="pa-0">
              <v-row>
                <v-col class="" cols="9">
                  <p class="mb-0 fs-14 Lh-16 font-weight-medium text-666Color" >Expense ratio </p>
                </v-col>
                <v-col class="" cols="3">
                  <p class="mb-0 ml-n2 fs-14 Lh-16 font-weight-medium text-666Color" ><span class="pr-1">{{ selected.length }}</span>items</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header><v-divider class="mt-n2 border1Divider"></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="" >
            <v-expansion-panel-header class="pa-0 fs-14 Lh-16 font-weight-medium text-666Color" >Min. purchase amount</v-expansion-panel-header>
            <v-expansion-panel-content class="pa-0">
              <v-range-slider v-model="range" :max="max" :min="min" hide-details class="mt-1" thumb-color="#FF1717" track-color="#FF1717" style="border: #D9D9D9;">
                <template v-slot:prepend>
                  <v-list-item class="pa-0 mt-n5">
                    <v-list-item-content>
                      <v-list-item-title class="text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7">MIN</v-list-item-title>
                      <v-list-item-subtitle class="text-BlackColor fs-13 font-weight-medium Lh-16" >0.0%</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
                <template v-slot:append>
                  <v-list-item class="mt-n3">
                    <v-list-item-content>
                      <v-list-item-title class="text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7" >MAX</v-list-item-title>
                      <v-list-item-subtitle class=" text-BlackColor fs-13 font-weight-medium Lh-16" >3.0%
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-range-slider>
            </v-expansion-panel-content>
            <v-divider class="border1Divider"></v-divider>
          </v-expansion-panel>
          <v-expansion-panel class="pt-0 pb-0 " >
            <v-expansion-panel-header class="pa-0 fs-14 Lh-16 font-weight-medium text-666Color" >AUM</v-expansion-panel-header>
            <v-expansion-panel-content class="pa-0">
              <v-range-slider v-model="range" :max="max" :min="min" hide-details class="mt-1" thumb-color="#FF1717" track-color="#FF1717" style="border: #D9D9D9;">
                <template v-slot:prepend>
                  <v-list-item class="pa-0 mt-n5">
                    <v-list-item-content>
                      <v-list-item-title class="text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7">MIN</v-list-item-title>
                      <v-list-item-subtitle class="text-BlackColor fs-13 font-weight-medium Lh-16" >₹0 Cr</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
                <template v-slot:append>
                  <v-list-item class="mt-n5">
                    <v-list-item-content>
                      <v-list-item-title class="text-666Color fs-9 font-weight-medium Lh-12 Ls-0-7" >MAX</v-list-item-title>
                      <v-list-item-subtitle class=" text-BlackColor fs-13 font-weight-medium Lh-16" >₹100k Cr</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-range-slider>
            </v-expansion-panel-content>
            <v-divider class="border1Divider"></v-divider>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      </v-row>
    </div>
</template>
<script>
export default {
  components: {  },
  data() {
    return {
      ExPansePanelModel:[0],
      selected:[],
      CheckBoxItemsCommmodityCat:[ "August 30, 2023","August 22, 2023","August 17, 2023","August 1, 2023","July 25, 2023" ],
     
     commoditiesHeader: [
          { text: 'Commodities Name', align: 'start',sortable: false,class:"TableHeaderFntColor" ,},
          { text: 'Expiry Date', value: 'ExpiryDate' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Lots.', value: 'Lots' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Last Price', value: 'LastPrice', sortable: false,class:"TableHeaderFntColor" },
          { text: 'Chg', value: 'ch' , sortable: false,class:"TableHeaderFntColor" },
          { text: 'Chg%', value: 'Chgpercentages' , sortable: false, class:"TableHeaderFntColor"},
          { text: 'Day High & Low', value: 'DayHighLow' , sortable: false, class:"TableHeaderFntColor",width:"25%"},
        ],
        CommoditesMenuItems: [{ title: 'Click Me' }, { title: 'Click Me' },{ title: 'Click Me' },{ title: 'Click Me 2' },],
    };
  },
}
</script>
<style lang="scss">
.CommoditsScrollHorizantalHide {
    ::-webkit-scrollbar {
        display: none !important;
    }
}
.checkboxfontlabel {
.v-input--selection-controls__ripple { 
    width: 0px !important;
}
}
.CommoditsCatMessageInpuslotCus {
.v-messages { 
  min-height:0px !important;
}
.v-input__slot {
  margin-bottom:0px !important;
}
}
</style>
