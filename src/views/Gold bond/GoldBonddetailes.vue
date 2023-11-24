<template>
  <div class="mt-sm-3 mt-4">
    <v-row class="">
      <v-col cols="12" md="9" class="pr-md-8 pr-3 pl-0 pl-sm-3 ">
        <v-card class="border1" elevation="0" rounded-lg outlined>
          <v-card color="#FAFBFF" elevation="0" class="pl-sm-6 pl-8 pr-4 pr-sm-6 mt pb-5 pt-6">
            <v-row>
              <v-col cols="7" sm="6">
                <p class="MobviewFontSize mb-sm-3 mb-2 text-BlackColor fs-20 fw-559 Lh-16 Ls-0_4">Indiabulls Housing
                  Finance Ltd</p>
                <div class="d-flex">
                  <v-chip class=" pt-0 mt-0 text-666Color fs-9 backColorWhite Lh-12 font-weight-medium" label
                    x-small>SECURED</v-chip>
                  <v-chip label x-small class="ml-2 text-666Color fs-9 backColorWhite Lh-12 font-weight-medium">REGULAR
                    INCOME </v-chip>
                </div>
              </v-col>
              <v-col cols="5" sm="6" align="end">
                <div class="d-flex  float-right">
                  <div class="mr-9">
                    <p class="mb-2 text-666Color fs-10 font-weight-medium Lh-12 Ls-0-8">MIN.INVEST.</p>
                    <p class="mb-0 text-BlackColor fs-14 font-weight-medium Lh-16">₹ 1,00,411</p>
                  </div>
                  <div class="mr-5">
                    <p class="mb-2 text-right text-666Color fs-10 font-weight-medium Lh-12 Ls-0-8">YIELD </p>
                    <p class=" mb-0 text-GreenColor fs-14 font-weight-medium Lh-16"> 13.8% </p>
                  </div>
                  <v-btn class="ml-3" width="25" height="25" fab dark elevation="0" color="#EBEBED" outlined>
                    <v-icon size="15" color="#3E4763"> mdi-bell-outline </v-icon>
                  </v-btn>
                  <v-btn class="ml-2" fab dark width="25" height="25" elevation="0" color="#EBEBED" outlined>
                    <v-icon size="15" color="#3E4763">mdi-bookmark-outline </v-icon>
                  </v-btn>
                  <v-btn class="" fab dark width="25" height="25" elevation="0" color="#fafbff" outlined>
                    <v-icon size="20" color="#3E4763"> mdi-dots-vertical </v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <p class="pt-5 pl-5 fs-16 fw-559 Lh-16 Ls-032">Spot Price Chart</p>
          <v-divider class="mt-sm-2"></v-divider>

          <div class=" pt-7">
            <div class="pl-sm-6 pr-sm-0 pl-7 pr-7">
              <v-row>
                <v-col cols="12" sm="3">
                  <p class="mb-2 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8">FACE VALUE</p>
                  <p class="mb-2 font-weight-medium fs-14 text-BlackColor Lh-16">₹1,000</p>
                  <v-divider></v-divider>
                  <p class="mb-2 pt-5 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8">COUPON RATE % </p>
                  <p class="mb-2 font-weight-medium fs-14 text-BlackColor Lh-16">80,15,650</p>
                  <v-divider></v-divider>
                  <p class="mb-0 pt-4 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8">HIGH - LOW</p>
                  <div class="d-flex">
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">₹1,348.95</p>
                    <v-slider disabled :ripple="false" class="mb-auto mt-0 pt-0 mb-0" value="50" thumb-color="black"
                      track-color="#D9D9D9" :thumb-size="0" />
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">1,322.65</p>
                  </div>
                  <v-divider></v-divider>
                  <p class="mb-0 pt-4 font-weight-medium fs-10 text-666Color Lh-12 Ls-0-8">52 WEEKS HIGH - 52 WEEKS LOW
                  </p>
                  <div class="d-flex">
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">₹1,348.95</p>
                    <v-slider disabled :ripple="false" class="mb-auto mt-0 pt-0 mb-0" value="50" thumb-color="black"
                      track-color="#D9D9D9" :thumb-size="0" />
                    <p class="mb-0 pt-2 font-weight-medium text-BlackColor fs-12 Lh-16">1,322.65</p>
                  </div>
                  <v-divider class="mb-sm-0 mb-4"></v-divider>
                </v-col>
              </v-row>
            </div>
            <v-divider class="mt-10"></v-divider>
            <div class="pt-6 pb-5 ">
              <v-row>
                <v-col cols="5">
                  <p class="mb-0 pl-5 fw-559 text-BlackColor fs-20 Lh-16 Ls-0_4">Similar Bonds</p>
                </v-col>
                <v-col class="pr-8 pt-2" cols="7" align="end">
                  <v-btn text class="text-none pa-0" height="fit-content" max-width="fit-content" to="StckOptinchain">
                    <p class="mb-0 fw-559 text-blueColor fs-14 Lh-16">See all bonds</p>
                  </v-btn>
                </v-col>
              </v-row>
              <div>

                <div>
                </div>
              </div>
            </div>
            <div class="FOOverFlowScrollHide">
              <div class="mr-1" style="overflow:scroll">
                <div class="" style="display:inline-flex">
                  <v-card class="elevation-0 rounded-lg ml-5 mb-5 border2" width="244px" v-for="k in 16" :key="k">
                    <v-card class="py-3 elevation-0 pl-4" color="#FAFBFF">
                      <p class="mb-0 fs-14 fw-559 text-BlackColor Lh-16">Housing & Urban Develop.</p>
                    </v-card>
                    <div class="d-flex px-4 py-2">
                      <p class="mb-0 text-999Color fs-13 font-weight-medium Lh-16">LTP</p>
                      <p class="mb-0 pl-3 text-BlackColor fs-13 font-weight-medium Lh-16">₹1,234</p>
                      <p class="mb-0 ml-auto text-999Color fs-13 font-weight-medium Lh-16">Chg%</p>
                      <p class="mb-0 pl-3 text-GreenColor fs-13 font-weight-medium Lh-16">+2.2%</p>
                    </div>
                    <v-divider></v-divider>
                    <div class="d-flex px-4 py-2">
                      <p class="mb-0 text-999Color fs-13 font-weight-medium Lh-16">High</p>
                      <p class="mb-0 pl-3 text-BlackColor fs-13 font-weight-medium Lh-16">₹1,234</p>
                      <p class="mb-0 ml-auto text-999Color fs-13 font-weight-medium Lh-16">Low</p>
                      <p class="mb-0 pl- text-GreenColor fs-13 font-weight-medium Lh-16">+2.2%</p>
                    </div>
                  </v-card>
                </div>
              </div>
            </div>
          </div>


        </v-card>
        <v-card class="elevation-0 mt-5 px-4 py-5" outlined>
          <p class="mb-5 text-BlackColor fs-20 fw-559 Lh-16 Ls-0_4 ">About Indiabulls Housing Finance Ltd</p>
          <p class="mb-0 text-666Color fs-12 font-weight-medium Lh-18">
            Indiabulls Housing Finance Ltd. (IBHFL) is India’s third largest housing finance company, regulated by the
            Reserve Bank of India (RBI). IBHFL is rated ‘AA’ by leading rating agencies including CRISIL, ICRA and CARE
            Ratings and at ‘AA+” by Brickwork Ratings. The company has a balance sheet size of ₹ 0.70 trillion as on 31
            March, 2023. The company has serviced more than 1.4 million happy customers<br><br>
            It is has a strong nationwide presence and continues to reach out further with eHome Loans - India’s first
            completely online home loan fulfilment platform.<br><br>
            BHFL offers quick, convenient and competitively priced home loans in the affordable housing segment. The
            company’s primary goal is to ensure a superior home buying experience to its customers and to make housing
            finance more affordable and viable by contributing to the ecosystem
          </p>
          <div class="mt-8">
            <v-row v-for="k in  GoldBondDetailes" :key="k">
              <v-col cols="4">
                <p class="mb-2 text-666Color fs-10 font-weight-medium Lh-12 Ls-0-8 text-uppercase">{{ k.ColHeaderOne }}</p>
                <p class="mb-2 text-BlackColor fs-14 font-weight-medium Lh-16">{{ k.valOne }}</p>
                <v-divider></v-divider>

              </v-col>
              <v-col cols="4">
                <p class="mb-2 text-666Color fs-10 font-weight-medium Lh-12 Ls-0-8 text-uppercase">{{ k.ColHeaderTwo }}</p>
                <p class="mb-2 text-BlackColor fs-14 font-weight-medium Lh-16">{{ k.valTwo }}</p>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="4">
                <p class="mb-2 text-666Color fs-10 font-weight-medium Lh-12 Ls-0-8 text-uppercase">{{ k.ColHeaderThree }}
                </p>
                <p class="mb-2 text-BlackColor fs-14 font-weight-medium Lh-16">{{ k.valThree }}</p>
                <v-divider></v-divider>
              </v-col>
            </v-row>
          </div>
        </v-card>

        <v-card outlined class="mt-6 pt-4">
          <p class="mb-6 pl-4 pt-3  text-BlackColor fs-20 fw-559 Lh-16 Ls-0_4">Other Bonds Issued by company</p>
          <v-data-table :headers="BondsDeatailsHeader" :items="OtherBondsItems" :items-per-page="OtherBondsItemPerpage"
            item-key="id" v-model="selectedRows" class="elevation-0 border1Top" hide-default-footer>
            <template v-slot:body>
              <tbody>
                <tr @mouseover="selectItem(d)" @mouseleave="unSelectItem(d)" v-for="d in 5" :key="d">
                  <td class=" pr-0" style="width:340px;">
                    <p class="mb-0 fs-14 text-BlackColor fw-559 Lh-16">Indiabulls Housing Finance Ltd 8.9%</p>
                  </td>
                  <td class="">
                    <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16">06 Sep, 2023</p>
                  </td>
                  <td class="">
                    <p class=" mb-0 fs-13 text-BlackColor font-weight-medium Lh-16">8.22% </p>
                  </td>
                  <td class="">
                    <p class="mb-0 text-BlackColor font-weight-medium fs-13 Lh-16">₹1977.01</p>
                  </td>
                  <td class=""><span class="fs-13 text-BlackColor font-weight-medium Lh-16">₹1000</span>
                  </td>
                  <td class=""><span class="fs-13 text-BlackColor font-weight-medium Lh-16">3y 2m 7d</span></td>
                </tr>
              </tbody>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" class="">
        <div class="">
          <v-card class="border1 py-3 px-3" outlined rounded-lg elevation="0">
            <p class="fs-16 fw-559 Lh-16 Ls-032 text-BlackColor">Investment Calculator</p>
            <p class="mb-0 fs-12 font-weight-medium Lh-14 text-666Color">Investment type</p>
            <v-radio-group class="pa-0 ma-0 pt-2 mb-5" v-model="BondsRadiobtn" color="black" dense row mandatory>
              <v-radio class="" color="black" v-bind:checked="active === 0" value="Delivery">
                <template v-slot:label>
                  <p class="mb-0 fs-13 text-Color3E4 font-weight-medium Lh-16"> Delivery</p>
                </template></v-radio>
              <v-radio color="black" value="Intraday">
                <template v-slot:label>
                  <p class="mb-0 fs-13 text-Color3E4 font-weight-medium Lh-16"> Intraday</p>
                </template></v-radio>
            </v-radio-group>
            <v-row>
              <v-col cols="6" class="">
                <p class="mb-3 text-BlackColor fs-13 fw-559 Lh-16">Quantity</p>
                <v-text-field class="TextFiledCustmazHei textFiedColorChange  ml-0 pl-0 mt-1 pa-0 centered-input"
                  hide-spin-buttons v-model="BondsQtyTxtFledModel" :step="BondsQtyTxtFledModel"
                  :value="BondsQtyTxtFledModel" type="number" background-color="#F1F3F8" solo rounded flat dense :min="1">
                  <template v-slot:prepend-inner>
                    <v-btn class="ml-0 pl-0 backColorWhite" width="18px" height="18px" elevation="0" small outlined
                      v-if="BondsQtyTxtFledModel > 1" fab dark @click="BondsQtyTxtFledModel--">
                      <v-icon size="13" color="#000">mdi-minus</v-icon>
                    </v-btn>
                  </template>
                  <template v-slot:append>
                    <v-btn class="mr-2 backColorWhite" width="18px" height="18px" elevation="0" small outlined fab dark
                      @click="BondsQtyTxtFledModel++">
                      <v-icon size="13" color="#000">mdi-plus</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="6" class="">
                <p class="mb-3 text-BlackColor fs-13 fw-559 Lh-16">Price</p>
                <v-text-field class="ml-0 pl-0 mt-1 pa-0 TextFiledCustmazHei textFiedColorChange" hide-spin-buttons
                  type="number" background-color="#F1F3F8" solo rounded flat dense>
                  <template v-slot:label>
                    <p class="text-BlackColor fs-13 fw-559">₹ 1,288.90</p>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <p class="fs-12 text-666Color font-weight-medium Lh-14 pt-4 mb-1">Order type</p>
            <v-chip-group class="ChipSlideNextIconHide" mandatory active-class="BondOrdersChipActive" next-icon=""
              prev-icon="">
              <v-chip v-for="b in BondOrderChip" class="rounded-pill backColorF1F3 elevation-0" :key="b"> <span
                  class="fs-12 font-weight-medium Lh-16">{{ b }}</span> </v-chip>
            </v-chip-group>
            <p class="mb-3 pt-4 text-BlackColor fs-13 fw-559 Lh-16">Trigger price</p>
            <v-text-field class="ml-0 pl-0 mt-1 pa-0 TextFiledCustmazHei textFiedColorChange" hide-spin-buttons
              type="number" background-color="#F1F3F8" solo rounded flat>
              <template v-slot:label>
                <p class="mb-0 text-BlackColor fs-13 fw-559">₹ 1,288.90</p>
              </template>
            </v-text-field>
            <p class=" fs-10 font-weight-medium Lh-14 text-666Color mt-n3">Your order wil executed after a stock crosses
              this trigger price set for you</p>
            <p class="pt-3 text-center mb-0  fs-20 font-weight-medium text-GreenColor">₹ 10,31,566</p>
            <p class=" text-center  fs-12 font-weight-medium Lh-20 text-666Color">Required amount to buy 34 qty bonds</p>
            <v-btn color="#000" width="100%"
              class="text-capitalize fs-14 fw-559 Lh-20 Ls-0-28 text-WhiteColor elevation-0 rounded-pill">Start Investing
              Now!</v-btn>
          </v-card>
          <v-toolbar class="mt-4 Bondstoolbar-contant pb-2" elevation="0" color="white">
            <v-toolbar-title class="text-BlackColor fs-16 fw-559 Ls-032">Indiabulls Housing in news</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu left offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" :ripple="false" class="ButtonAlignMent pr-1" plain icon>
                  <v-icon class="" color="black">mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, index) in itemsmenu" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-card class="elevation-0 mb-6" v-for="bn in GbDeatilesNews" :key="bn.title">
            <v-card class=" elevation-0">
              <div class="">
                <p class="pl-2 mb-1 fs-14 text-BlackColor font-weight-medium Lh-18"
                  style="border-left: 2.5px solid #0037B7;">{{ bn.title }}<br><span
                    class="fs-10 text-999Color Lh-12 font-weight-medium">22 May, 2023</span>
                </p>
              </div>
            </v-card>
          </v-card>
          <div class="text-center mb-15 mb-sm-0 ">
            <v-btn class="text-none" justify-center text @click="readmore()">
              <img class="Read_News" src="@/assets/BondsImgs/ReadOtherNews.svg" width="14px" height="14px" />
              <p class="pl-1 mb-0 text-blueColor fs-14 fw-559 Lh-16">Read other news </p>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemsmenu: [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }],
      BondOrderChip: ["Market", "Limit", "SL Limit", "SL Mkt"],
      BondsRadiobtn: null,
      BondsQtyTxtFledModel: 1,
      BondsDeatailsHeader: [
        { text: 'Month', align: 'start', sortable: false, class: "TableHeaderFntColor" },
        { text: 'Last traded on', value: 'ExpiryDate', sortable: false, class: "TableHeaderFntColor" },
        { text: 'Yield.', value: 'Lots', sortable: false, class: "TableHeaderFntColor" },
        { text: 'LTP', value: 'LastPrice', sortable: false, class: "TableHeaderFntColor" },
        { text: 'Face Value', value: 'ch', sortable: false, class: "TableHeaderFntColor" },
        { text: 'Maturity Time', value: 'Chgpercentage', sortable: false, class: "TableHeaderFntColor" },
      ],
      GbDeatilesNews: [
        {
          title: "INR Strengthens Against USD, Dollar Index Slides; March USD/INR Levels?",
          subtitle: "22 May, 2023",
        },
        {
          title: "HDFC’s exit from corporate bond market brings cheer to smaller issuers",
          subtitle: "22 May, 2023",
        },
        {
          title: "Bank bond issuance may fall to Rs 90,000 crore in FY24, says ICRA",
          subtitle: "22 May, 2023",
        },
        {
          title: "Corporate bond issuances nosedive in April on low requirement of funds",
          subtitle: "22 May, 2023",
        },
        {
          title: "Are corporate green bonds losing sheen? Issuances halve since 2022 due",
          subtitle: "22 May, 2023",
        },
        {
          title: "3 Stocks to Buy Now That Are Yielding 3.5% to 8.8%",
          subtitle: "22 May, 2023",
        },

      ],
      GoldBondDetailes: [
        { ColHeaderOne: "Net worth", ColHeaderTwo: "Maturity date", ColHeaderThree: "TAx Status", valOne: "38.885 Cr", valTwo: "24-Sep-2026", valThree: "Taxable" },
        { ColHeaderOne: "Nature of bond", ColHeaderTwo: "Coupon Frequency", ColHeaderThree: "CREDIT RATING", valOne: "Secured", valTwo: "Yearly", valThree: "CARE AAA / BWR AAA STABLE" },
      ],
    };
  },
};
</script>
<style lang="scss">
.ChipSlideNextIconHide {
  .v-slide-group__next {
    flex: 0 !important;
    min-width: 0px !important;
  }
}

.BondOrdersChipActive {
  color: #FFF !important;
  background-color: #000000 !important;
  font-size: 13px !important;
  height: 20px !important;
}

.textFiedColorChange input {
  color: #000 !important;
  font-size: 13px !important;
  font-weight: 469 !important;
  line-height: 100% !important;
}

.TextFiledCustmazHei {
  .v-input__slot {
    min-height: 34px !important;
  }
}

.FOOverFlowScrollHide {
  ::-webkit-scrollbar {
    display: none !important;
  }
}

.Bondstoolbar-contant {
  .v-toolbar__content {
    padding: 0px !important;
  }
}</style>