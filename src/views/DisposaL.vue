<template>
  <div>
    <v-container class="pa-0">
      <div data-aos="fade-up" class="pos-rlt">
          <v-card class="elevation-0 px-16 py-10 support-main-bg rounded-xl">
              <p class="white--text fs-50 font-weight-bold mb-6">Disposal of Complaints</p>
              <!-- <p class="white--text headline">Disposal of Complaints
              </p> -->
              <div class="d-inline-flex mb-3">
                  <v-btn @click="activePage(i = p)" v-for="(p, b) in complaintitems" :key="b" medium
                      :color="p == pagename ? '#ffffff' : '#dddddd'" class="rounded-pill mr-2 text-none brd-2" outlined>
                      {{ p }}
                  </v-btn>
              </div>
          </v-card>
      </div>
      <div class="px-14 py-16 mb-6">

          <p class="font-weight-bold title">Exchange investor charter Data for month ending May 2023</p>
          <v-card width="100%" class="px-3  price-card-sty elevation-0 rounded-xl overflow-hidden" outlined>
            <v-row>
  <v-col cols="6">
<v-row class="">
  <v-col cols="1" >
<p class="" >SN</p>
  </v-col>
  <v-col cols="2" class=" ">
<p class="">Received from</p>
  </v-col>
  <v-col cols="3" class="">
<p class="">carried forward from previous month</p>
  </v-col>
  <v-col cols="2">
<p class="">Received during the month</p>
  </v-col>
  <v-col cols="2">
<p class="">Total pending</p>
  </v-col>
  <v-col cols="2">
<p>Resolved</p>
  </v-col>
</v-row>
  </v-col>
  <v-col cols="6" class="pl-0">
<v-row>
  <v-col cols="5">
    <p>Pending at the end of the month** (**Should include total complaints pending as on the last day of the month, if any)</p>
  <v-row>
    <v-col cols="6">
      <p>Pending for less than 3 month</p>
    </v-col>
    <v-col cols="6">
      <p>Pending for more than 3 month</p>
    </v-col>
  </v-row>
  </v-col>
  <v-col cols="7">
    <p>Average Resolution time^ (in days) ^Average resolution time is the sum total of time taken to resolve each complaint in the current month divided by total number of complaints resolved in the current month.</p>
  </v-col>
</v-row>
  </v-col>
</v-row>
          </v-card>
          <v-card width="100%" class="price-card-sty elevation-0 rounded-xl overflow-hidden" outlined>



              <tbody>
                  <tr class="text-left">
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">SN</span></th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Received
                              from</span></th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">carried forward
                              from previous
                              month</span>
                      </th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Received during the
                              month</span></th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Total
                              pending</span></th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Resolved</span>
                      </th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Pending at the end
                              of the month**
                              (**Should
                              include total
                              complaints pending as on the last day of the month, if any)</span></th>
                      <th class="px-2 pt-4 va-t brt-b"><span class="font-weight-bold subtitle-1">Average Resolution time^
                              (in days)
                              ^Average
                              resolution
                              time is the sum total of time taken to resolve each complaint in the current month divided
                              by
                              total number of complaints resolved in the current month.</span></th>
                  </tr>
                  <tr class="text-left px-3">
                      <th class="px-2  brt-b"><span class="font-weight-bold subtitle-1"></span></th>
                      <th class="px-2  brt-b"><span class="font-weight-bold subtitle-1"></span></th>
                      <th class="px-2  brt-b"><span class="font-weight-bold subtitle-1"></span></th>
                      <th class="px-2  brt-b"><span class="font-weight-bold subtitle-1"></span></th>
                      <th class="px-2  brt-b"><span class="font-weight-bold subtitle-1"></span></th>
                      <th class="px-2  brt-b"><span class="font-weight-bold subtitle-1"></span></th>
                      <th class="px-2 py-3  brt-b">
                          <v-row>
                              <v-col class="" cols="6"><span class="font-weight-bold subtitle-1">Pending for less
                                      than 3
                                      month</span></v-col>
                              <v-col cols="6">
                                  <span class="font-weight-bold subtitle-1">Pending for more than 3
                                      month</span>
                              </v-col>
                          </v-row>
                      </th>
                      <th class="px-2 brt-b"><span class="font-weight-bold subtitle-1"></span></th>
                  </tr>

                  <tr class="text-center px-3" v-for="(l, j) in pagename == 'TM' ? tmICitems : pagename == 'DP' ? dpICitems : raICitems" :key="j">
                      <th class="px-2 py-3 " :class="tmICitems.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.SN }}</span></th>
                      <th class="px-2 " :class="tmICitems.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.Refrom }}</span></th>
                      <th class="px-2 py-3 " :class="tmICitems.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.carriedfrdpremont
                              }}</span></th>

                      <th class="px-2 py-3 " :class="tmICitems.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.RevedduringMonth
                              }}</span></th>
                      <th class="px-2 py-3 " :class="tmICitems.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.totalpend }}</span>
                      </th>
                      <th class="px-2 py-3 " :class="tmICitems.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.Resolved }}</span></th>

                      <th class="px-2 " :class="tmICitems.length - 1 != j ? 'brt-b' : ''">
                          <v-row>
                              <v-col class="" cols="6"><span class="font-weight-regular txt-444444">{{
                                  l.pendingLesThanMonth }}</span></v-col>
                              <v-col cols="6">
                                  <span class="font-weight-regular txt-444444">{{
                                      l.pendingLesThanMonth }}</span>
                              </v-col>
                          </v-row>
                      </th>
                      <th class="px-2 py-3" :class="tmICitems.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.AvageSolution }}</span></th>
                  </tr>
              </tbody>
          </v-card>

          <p class="font-weight-bold title mt-10">Trend of monthly disposal of complaints</p>
          <v-card class="price-card-sty elevation-0 rounded-xl" outlined>
              <tbody>
                  <tr class="text-left">
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">SN</span></th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Year
                              from</span></th>
                      <th class="px-3 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">carried forward
                              from previous
                              month</span>
                      </th>
                      <th class="px-3 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Received during the
                              month</span></th>
                      <th class="px-3 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Resolved during the
                              Month</span></th>
                      <th class="px-3 pt-4 va-t brt-b"><span class="font-weight-bold subtitle-1">Pending at the end
                              of the Month</span>
                      </th>
                  </tr>

                  <tr class="text-center" :class="l.SN != '4' ? '' : 'd-none'" v-for="(l, j) in pagename == 'TM' ? tmMonthlyDisposal : pagename == 'DP' ? dpMonthlyDisposal : raMonthlyDisposal"
                      :key="j">
                      <th class="px-2 py-3  brt-b"><span class="font-weight-regular txt-444444">{{ l.SN }}</span>
                      </th>
                      <th class="px-2  brt-b"><span class="font-weight-regular txt-444444">{{ l.Year }}</span></th>
                      <th class="px-2 py-3  brt-b"><span class="font-weight-regular txt-444444">{{
                          l.carriedfrdpremont
                      }}</span></th>

                      <th class="px-2 py-3  brt-b"><span class="font-weight-regular txt-444444">{{
                          l.RecvedDuringMonth
                      }}</span></th>
                      <th class="px-2 py-3  brt-b"><span class="font-weight-regular txt-444444">{{
                          l.ReSolveddDuringMonth }}</span>
                      </th>
                      <th class="px-2 py-3 brt-b" :class="tmMonthlyDisposal.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.PendEndMonth }}</span></th>
                  </tr>
                  <tr :class="l.SN == '4' ? '' : 'd-none'" v-for="(l, j) in pagename == 'TM' ? tmMonthlyDisposal : pagename == 'DP' ? dpMonthlyDisposal : raMonthlyDisposal" :key="j"
                      class="text-center">
                      <th colspan="2" class="px-2 py-3 va-t  "><span
                              class="font-weight-regular txt-444444">{{ l.Year }}</span></th>
                      <th class="px-2 py-3 va-t  "><span class="font-weight-regular txt-444444">{{
                          l.carriedfrdpremont }}</span>
                      </th>
                      <th class="px-2 py-3 va-t  "><span class="font-weight-regular txt-444444">{{
                          l.RecvedDuringMonth }}
                          </span></th>
                      <th class="px-2 py-3 va-t "><span class="font-weight-regular txt-444444">{{
                          l.ReSolveddDuringMonth }}
                          </span></th>
                      <th class="px-2 py-3 va-t"><span class="font-weight-regular txt-444444">{{ l.PendEndMonth }}</span>
                      </th>
                  </tr>
              </tbody>
          </v-card>

          <p class="font-weight-bold title mt-10">Trend of annual disposal of complaints</p>
          <v-card class="price-card-sty elevation-0 rounded-xl" outlined>
              <tbody>
                  <tr class="text-left">
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">SN</span></th>
                      <th class="px-8 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Year
                              from</span></th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">carried forward
                              from previous
                              month</span>
                      </th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Received during the
                              month</span></th>
                      <th class="px-2 pt-4 va-t  brt-b"><span class="font-weight-bold subtitle-1">Resolved during the
                              Month</span></th>
                      <th class="px-2 pt-4 va-t brt-b"><span class="font-weight-bold subtitle-1">Pending at the end
                              of the Month</span>
                      </th>
                  </tr>

                  <tr class="text-center" v-for="(l, j) in pagename == 'TM' ? tmAnnualDisposal : pagename == 'DP' ? dpAnnualDisposal : raAnnualDisposal" :key="j">
                      <th class="px-2 py-3 " :class="tmAnnualDisposal.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.SN }}</span></th>
                      <th class="px-2 " :class="tmAnnualDisposal.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.Year }}</span></th>
                      <th class="px-2 py-3 " :class="tmAnnualDisposal.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.carriedfrdpreYear
                              }}</span></th>

                      <th class="px-2 py-3 " :class="tmAnnualDisposal.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.RecvedDuringYear
                              }}</span></th>
                      <th class="px-2 py-3 " :class="tmAnnualDisposal.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.ReSolveddDuringYear }}</span>
                      </th>
                      <th class="px-2 py-3" :class="tmAnnualDisposal.length - 1 != j ? 'brt-b' : ''"><span
                              class="font-weight-regular txt-444444">{{ l.PendEndYear }}</span></th>
                  </tr>
              </tbody>
          </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {

  data: () => ({
      complaintitems: [
          'TM',
          'DP',
          'Research Analyst',
      ],
      pagename: 'TM',
      // Tm
      tmICitems: [
          {
              SN: "1",
              Refrom: "Directly from investor",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: ""
          },
          {
              SN: "2",
              Refrom: "SEBI(Scores)	",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: ""
          },
          {
              SN: "3",
              Refrom: "Stock Exchanges",
              carriedfrdpremont: "2",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "2",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: "2"
          },
          {
              SN: "4",
              Refrom: "Other Sources (if any)",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: ""
          },
          {
              SN: "5",
              Refrom: "Grand Total	",
              carriedfrdpremont: "2",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "2",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: "2"
          },
      ],
      tmMonthlyDisposal: [
          {
              SN: "1",
              Year: "Apr-23",
              carriedfrdpremont: "1",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "1",
              PendEndMonth: "0",
          },
          {
              SN: "2",
              Year: "May-23",
              carriedfrdpremont: "0",
              RecvedDuringMonth: "2",
              ReSolveddDuringMonth: "0",
              PendEndMonth: "2",
          },
          {
              SN: "3",
              Year: "June-23",
              carriedfrdpremont: "2",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "2",
              PendEndMonth: "0",
          },
          {
              SN: "4",
              Year: "Grand Total",
              carriedfrdpremont: "3",
              RecvedDuringMonth: "2",
              ReSolveddDuringMonth: "3",
              PendEndMonth: "2",
          },
      ],
      tmAnnualDisposal: [
          {
              SN: "1",
              Year: "2017-2018",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "2",
              Year: "2018-2019",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "3",
              ReSolveddDuringYear: "2",
              PendEndYear: "1",
          },
          {
              SN: "3",
              Year: "2019-2020",
              carriedfrdpreYear: "1",
              RecvedDuringYear: "15",
              ReSolveddDuringYear: "15",
              PendEndYear: "1",
          },
          {
              SN: "4",
              Year: "2020-2021",
              carriedfrdpreYear: "1",
              RecvedDuringYear: "17",
              ReSolveddDuringYear: "14",
              PendEndYear: "4",
          },
          {
              SN: "5",
              Year: "2021-2022",
              carriedfrdpreYear: "4",
              RecvedDuringYear: "44",
              ReSolveddDuringYear: "44",
              PendEndYear: "4",
          },
          {
              SN: "6",
              Year: "2022-2023",
              carriedfrdpreYear: "4",
              RecvedDuringYear: "23",
              ReSolveddDuringYear: "26",
              PendEndYear: "1",
          },
          {
              SN: "7",
              Year: "2023-2024",
              carriedfrdpreYear: "1",
              RecvedDuringYear: "3",
              ReSolveddDuringYear: "3",
              PendEndYear: "0",
          },
      ],
      // DP
      dpICitems: [
          {
              SN: "1",
              Refrom: "Directly from investor",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: ""
          },
          {
              SN: "2",
              Refrom: "SEBI(Scores)	",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: ""
          },
          {
              SN: "3",
              Refrom: "Stock Exchanges",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: "0"
          },
          {
              SN: "4",
              Refrom: "Other Sources (if any)",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: ""
          },
          {
              SN: "5",
              Refrom: "Grand Total",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: "0"
          },
      ],
      dpMonthlyDisposal: [
          {
              SN: "1",
              Year: "Apr-23",
              carriedfrdpremont: "0",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "0",
              PendEndMonth: "0",
          },
          {
              SN: "2",
              Year: "May-23",
              carriedfrdpremont: "0",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "0",
              PendEndMonth: "0",
          },
          {
              SN: "3",
              Year: "June-23",
              carriedfrdpremont: "0",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "0",
              PendEndMonth: "0",
          },
          {
              SN: "4",
              Year: "Grand Total",
              carriedfrdpremont: "0",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "0",
              PendEndMonth: "0",
          },
      ],
      dpAnnualDisposal: [
          {
              SN: "1",
              Year: "2017-2018",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "2",
              Year: "2018-2019",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "3",
              Year: "2019-2020",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "4",
              Year: "2020-2021",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "5",
              Year: "2021-2022",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "6",
              Year: "2022-2023",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "7",
              Year: "2023-2024",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
      ],

      raICitems: [
          {
              SN: "1",
              Refrom: "Directly from investor",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: ""
          },
          {
              SN: "2",
              Refrom: "SEBI(Scores)	",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: ""
          },
          {
              SN: "3",
              Refrom: "Stock Exchanges",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: "0"
          },
          {
              SN: "4",
              Refrom: "Other Sources (if any)",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: ""
          },
          {
              SN: "5",
              Refrom: "Grand Total",
              carriedfrdpremont: "0",
              RevedduringMonth: "0",
              totalpend: "0",
              Resolved: "0",
              pendingLesThanMonth: "0",
              pendingMoreThanMonth: "0",
              AvageSolution: "0"
          },
      ],
      raMonthlyDisposal: [
          {
              SN: "1",
              Year: "Apr-23",
              carriedfrdpremont: "0",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "0",
              PendEndMonth: "0",
          },
          {
              SN: "2",
              Year: "May-23",
              carriedfrdpremont: "0",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "0",
              PendEndMonth: "0",
          },
          {
              SN: "3",
              Year: "June-23",
              carriedfrdpremont: "0",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "0",
              PendEndMonth: "0",
          },
          {
              SN: "4",
              Year: "Grand Total",
              carriedfrdpremont: "0",
              RecvedDuringMonth: "0",
              ReSolveddDuringMonth: "0",
              PendEndMonth: "0",
          },
      ],
      raAnnualDisposal: [
          {
              SN: "1",
              Year: "2017-2018",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "2",
              Year: "2018-2019",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "3",
              Year: "2019-2020",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "4",
              Year: "2020-2021",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "5",
              Year: "2021-2022",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "6",
              Year: "2022-2023",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
          {
              SN: "7",
              Year: "2023-2024",
              carriedfrdpreYear: "0",
              RecvedDuringYear: "0",
              ReSolveddDuringYear: "0",
              PendEndYear: "0",
          },
      ]

  }),
  methods: {
      activePage(i) {
          this.pagename = i;
      },
  }
}
</script>

<style>
/* @import '../assets/style/style.css'; */
</style>