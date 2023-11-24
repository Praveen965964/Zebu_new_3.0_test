new ipo performace code

<template>
        <div>
           
            <v-row>
                <v-col cols="9" class="pr-8">
                    <v-card outlined class="elevation-0 mt-2 ml-2 mb-10">
                        <div class="d-flex pa-4 pt-5">
                            <div>
                                <v-img :src="require('@/assets/taaa.svg')" width="45px" class=""></v-img>
                            </div>
                            <div>
                                <p class="mb-0 ml-3 mt-2 headingnew">IPO Performance 2023</p>
                                <p class="mb-0 pl-3 subbhea mt-1">
                                    Monitor the IPO Performance of Mainline IPO Stocks listed at
                                    BSE and NSE
                                </p>
                            </div>
                            <div class="ml-auto">
                                <v-card color="#F1F3F8" class="elevation-0  mt-1"
                                    style="border-radius: 40px; height: 36px; width: px">
                                    <div class="d-flex">
                                        <span class="mb-0 pl-4 pt-3" style="
                        color: #666666;
                        font-weight: 469;
                        font-size: 12px;
                        line-height: 14px;
                      " color="#666666">{{ number }}</span>
                                        <div class="float-right mt-n1 mr-1">
                                            <v-btn elevation="0" :ripple="false" id="no-background-hover" class="text-end"
                                                icon @click="decrementNumber">
                                                <v-icon class="" size="16" color="#000000">
                                                    mdi-chevron-up
                                                </v-icon></v-btn><br />
                                            <a elevation="0" :ripple="false" id="no-background-hover" class="move" icon
                                                @click="incrementNumber">
                                                <v-icon size="16" class="mb-0 pt-0 mt-n1" color="#000000">
                                                    mdi-chevron-down
                                                </v-icon></a>
                                        </div>
                                    </div>
                                </v-card>
                            </div>

                            <v-text-field prepend-inner-icon="mdi-magnify" v-model="search"
                                class="tophundraedmutual ml-2 mt-1 searchfundlabel"
                                style="max-width: 230px; font-size: 15px" background-color="#F1F3F8" label="Search company"
                                solo rounded flat dense> <template v-slot:label>
                                    <span class="custom-label">Search Company </span>
                                </template>
                            </v-text-field>
                        </div>
                        <v-data-table :headers="headers" :items="dataTableItems1" :search="search" :items-per-page="perpage"
                            hide-default-footer  class="custom-tablee ">
                            <template #item="{ item }">
                                <tr @click="ipoopenpagerouter()">
                                    <td class="mb-0 tabval1 pl-3">
                                        {{ item.yeaa }}
                                    </td>
                                    <td class="mb-0  tabval2">
                                        {{ item.liss }}
                                    </td>
                                    <td class="mb-0 tabval2">
                                        {{ item.iss }}
                                    </td>

                                    <td class="mb-0 posneg">

                                        <span v-if="item.lipe > 0" style="color: green">
                                            {{ item.lipe }}%</span>

                                        <span v-else style="color: red">{{ item.lipe }}%</span>
                                    </td>

                                    <!-- <td class="mb-0 caption green--text font-weight-bold">
                                        {{ item.lipe }}
                                    </td> -->
                                    <td class="mb-0 tabval2">
                                        {{ item.cmp }}
                                    </td>
                                    <td class="mb-0 posneg">

                                        <span v-if="item.curr > 0" style="color: green">
                                            {{ item.curr }}%</span>

                                        <span v-else style="color: red">{{ item.curr }}%</span>
                                    </td>
                                    <!-- <td class="mb-0 caption green--text font-weight-bold">
                                        {{ item.curr }}
                                    </td> -->
                                </tr>
                            </template>
                        </v-data-table>
                        <v-card v-if="showmore2" class="elevation-0 mt-0 text-center" style="outline: 1px solid #e7e7e7">
                            <v-btn color="primary" @click="showmore" class="text-capitalize"  text dense>IPO performance
                                2022  <v-icon>mdi-chevron-down</v-icon>  </v-btn>
                        </v-card>
                        <v-card v-if="showmore23" class="elevation-0 mt-0 text-center" style="outline: 1px solid #e7e7e7">
                            <v-btn color="primary" @click="showmore1" class="text-capitalize" text dense>IPO performance
                                2022  <v-icon>mdi-chevron-up</v-icon>  </v-btn>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
        </div>
</template>

<script>
export default {
    data() {
        return {
            number: 2021,
            search1: "",
            search: "",
            selectedItem: false,
            showmore2: true,
            showmore23: false,
            perpage: 8,

            headers: [
                { text: "2023 listings", value: "yeaa", sortable: false },
                { text: "Listed on", value: "liss", sortable: false },
                { text: "Issue price", value: "iss", sortable: false },
                { text: "Listing (%)", value: "lipe", sortable: false },
                { text: "CMP", value: "cmp", sortable: false },
                { text: "Current gain (%)", value: "curr", sortable: false },
            ],
            dataTableItems1: [
                {
                    yeaa: "Tata Limited",
                    liss: "19th May",
                    iss: "₹1150 - ₹1229",
                    lipe: "7.71",
                    cmp: "₹2147",
                    curr: "31.86",
                },
                {
                    yeaa: "Hcl",
                    liss: "19th May",
                    iss: "₹1150 - ₹1229",
                    lipe: "7.71",
                    cmp: "₹2147",
                    curr: "31.86",
                },
                {
                    yeaa: "Mankind Pharma Limited",
                    liss: "19th May",
                    iss: "₹1150 - ₹1229",
                    lipe: "7.71",
                    cmp: "₹2147",
                    curr: "31.86",
                },
                {
                    yeaa: "Mankind Pharma Limited",
                    liss: "19th May",
                    iss: "₹1150 - ₹1229",
                    lipe: "7.71",
                    cmp: "₹2147",
                    curr: "31.86",
                },
                {
                    yeaa: "Mankind Pharma Limited",
                    liss: "19th May",
                    iss: "₹1150 - ₹1229",
                    lipe: "7.71",
                    cmp: "₹2147",
                    curr: "31.86",
                },
                {
                    yeaa: "Mankind Pharma Limited",
                    liss: "19th May",
                    iss: "₹1150 - ₹1229",
                    lipe: "7.71",
                    cmp: "₹2147",
                    curr: "31.86",
                },
                {
                    yeaa: "Mankind Pharma Limited",
                    liss: "19th May",
                    iss: "₹1150 - ₹1229",
                    lipe: "7.71",
                    cmp: "₹2147",
                    curr: "31.86",
                },
                {
                    yeaa: "Mankind Pharma Limited",
                    liss: "19th May",
                    iss: "₹1150 - ₹1229",
                    lipe: "7.71",
                    cmp: "₹2147",
                    curr: "31.86",
                },
                {
                    yeaa: "Mankind Pharma Limited",
                    liss: "19th May",
                    iss: "₹1150 - ₹1229",
                    lipe: "7.71",
                    cmp: "₹2147",
                    curr: "31.86",
                },
            ],
        };
    },
    methods: {
        ipoopenpagerouter() {
            this.$router.push('ipoopen')
        },
        showmore() {
            this.perpage = this.dataTableItems1.length;
            this.showmore2 = !this.showmore2;
            this.showmore23 = !this.showmore23;
        },
        showmore1() {
            this.perpage = 8;
            this.showmore2 = !this.showmore2;
            this.showmore23 = !this.showmore23;
        },
        incrementNumber() {
            this.number++;
        },
        decrementNumber() {
            if (this.number > 0) {
                this.number--;
            }
        },
    },
};
</script>
<style>
.headingnew {
    /* position: absolute; */
    color: #000;
    font-size: 20px;
    font-weight: 559;
    line-height: 16px;
    letter-spacing: -0.4px;
}

.move {
    position: absolute;
    left: 55px;
    top: 10px;
}

.up {
    position: absolute;
    left: px;
    top: -8px;
}

.subbhea {
    color: #666;
    font-size: 12px;
    font-weight: 469;
    line-height: 16px;
}

.custom-label {
    color: #000;
    font-size: 14px;
    font-weight: 469;
    line-height: 16px;
}

.tabhead {
    color: #999;
    font-size: 13px;
    font-weight: 469;
    line-height: 16px;
}

.tabval1 {
    color: #000;
    font-size: 14px;
    font-weight: 609;
    line-height: 16px;
}

.tabval2 {
    color: #000;
    font-size: 10px;
    font-weight: 469;
    line-height: 16px;
}

.posneg {

    font-size: 10px;
    font-weight: 469;
    line-height: 16px;
}
.custom-tablee th{
   
    font-size: 8px;
    font-weight: 469;
    line-height: 16px;
}
</style>

