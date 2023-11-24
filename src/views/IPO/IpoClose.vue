<template>
        <div>
            <v-row class="mt-1">
                <v-col cols="9">
                    <v-card outlined style="border-color: #DDDDDD;" elevation="0" class="pb-2 mr-6 mb-5">
                        <div>
                            <v-card color="#FAFBFF" outlined style="border-bottom: 1px solid #ddd;" elevation="0"
                                class="pa-5 pb-6 ">
                                <div class="d-flex">
                               
                                       <div>
                                        <div> <v-img :src="require('@/assets/imm.svg')" width="75" height="49"
                                                class="ml-3 mt-1"></v-img></div></div>
                                   
                                        <div class="ml-6">
                                        <p class="mb-0 mt-1" style="font-size:19px;font-weight: 609;color:black;line-height: 16px; letter-spacing: -0.8px;">Mankind Pharma Limited IPO
                                            <v-chip class="ml-3"  color="#FFFFFF" x-small label>
                                              <span style="color:#666666;text-transform: uppercase; font-size:8px;font-weight:500;letter-spacing: 0.9px;"> SME Ipo</span> 
                                            </v-chip>
                                            <v-chip class="ml-2"  color="#FFF3F3" x-small label>
                                              <span  class="closered" style="text-transform: uppercase; font-size:10px;font-weight:600;letter-spacing: 0.7px;"> Closed</span> 
                                            </v-chip>
                                        </p>
                                        <p class="mb-0  mt-1" style="font-size: 11px;font-weight: 469;color: #666666;line-height: 16px;">Mankind Pharma Limited develops, manufactures,
                                            and markets pharmaceutical
                                            formulations across <br> various acute and chronic therapeutic areas and several
                                            consumer healthcare products.</p>
                                        </div>
                               
                                        <div class="ml-auto">
                                        <div class="d-flex">
                                            <v-btn class="ma-1 mt-1" width="22px" height="22px" fab dark small elevation="0"
                                            color="#EBEBED" outlined style="border: 1px solid #CCC;">
                                            <v-icon size="14" color="#3E4763">
                                                mdi-bell-outline
                                            </v-icon>
                                        </v-btn>
                                        <v-btn class="ma-1 mt-1" width="22px" height="22px" fab dark small elevation="0"
                                            color="#EBEBED" outlined style="border: 1px solid #CCC;">
                                            <v-icon size="14" color="#3E4763">
                                                mdi-bookmark-outline
                                            </v-icon>
                                        </v-btn>

                                        <div class="">
                                            <v-menu offset-y>
                                                <template v-slot:activator="{ on }">
                                                    <v-btn :ripple="false" id="no-background-hover" v-on="on" icon width="22px" height="22px" fab dark small elevation="0"
                                            color="#EBEBED" > <v-icon
                                                            color="black"
                                                            class=" mt-0 pt-0 " size="20">mdi-dots-vertical</v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-list>
                                                    <v-list-item @click="handleMenuItemClick('Option 1')">
                                                        
                                                        <v-list-item-title>name</v-list-item-title>
                                                    </v-list-item>
                                                    <v-list-item @click="handleMenuItemClick('Option 2')">
                                                       
                                                        <v-list-item-title>logout</v-list-item-title>
                                                    </v-list-item>
                                                </v-list>
                                            </v-menu>
                                        </div>


                                        </div>
                                    </div>

                                        <!--                                         
                                        <v-btn class=" mt-2 ma-0 pa-0" width="30px" height="30px" fab dark small
                                            elevation="0" color="#FAFBFF">
                                            <v-icon size="19" color="#3E4763">
                                                mdi-dots-vertical
                                            </v-icon>
                                        </v-btn> -->
                                
                            </div>
                            </v-card>
                        </div>

                        <v-row no-gutters>
                          
                            <v-col cols="4"  class="pl-8 pt-1 pb-6 mr-10" >
                                <div>
                                    <p class="mb-0 pt-7 seiih" >IPO date</p>
                                    <p class="mb-0 pt-2 maihh">25 Apr 2023 – 27 Apr 2023</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" >Listing date</p>
                                    <p class="mb-0 pt-2 maihh">09 May 2023</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <!-- <div>
                                    <p class="mb-0 pt-6 seiih" >Price range</p>
                                    <p class="mb-0 pt-2 maihh">₹ 1026 – ₹ 1080</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" >Minimum order quantity</p>
                                    <p class="mb-0 pt-2 maihh">13 shares / lot</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div> -->
                                <div>
                                        <p class="mb-0 pt-7 pt-7 seiih" style="color: #666666;">HIGH -
                                            LOW
                                        </p>
                                        <span class="mb-0 mt-1 body-2 back--text font-weight-bold">₹23,45656 </span>
                                        <span class="slidecontainerlist mx-2 my-0 py-0">
                                            <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                            <input type="range" min="50" max="2000" class="sliderlist">
                                        </span>
                                        <span class="mb-0 mt-1 body-2 back--text font-weight-bold"> ₹34,987</span>
                                        <v-divider class="mr-1 mt-2"></v-divider>
                                    </div>
                                    <div>
                                        <p class="mb-0 pt-7 seiih" style="color: #666666;">52
                                            WEEKS
                                            HIGH - 52 WEEKS LOW</p>
                                        <span class="mb-0 mt-1 body-2 back--text font-weight-bold">₹3456 </span>
                                        <span class="slidecontainerlist mx-2 mt-n4">
                                            <!-- <input disabled type="range" min="item.l" max="item.h" v-model="item.lp" class="slider"> -->
                                            <input type="range" min="50" max="2000" class="sliderlist">
                                        </span>
                                        <span class="mb-0 mt-1 body-2 back--text font-weight-bold"> ₹76543 </span>
                                        <v-divider class="mr-1 mt-2"></v-divider>
                          </div>
                            </v-col>
                        </v-row>
                    </v-card>

                    
                    <v-card outlined style="border-color: #DDDDDD;" elevation="0" class="pb-2 pr-5 pl-3 mr-6 mb-5">
                        <p class="mb-0 pl-5 pt-6 headd1">About the company</p>
                        <p class="mb-0 firtex pl-5 pt-5">
                            Incorporated in 1991, Mankind Pharma Limited develops, manufactures, and markets pharmaceutical
                            formulations across various acute and chronic therapeutic areas and several consumer healthcare
                            products.<br><br>

                            In India, the business is active in a number of acute and chronic therapeutic fields, including
                            anti-infectives, cardiovascular, gastrointestinal, anti-diabetic, neuro/CNS,
                            vitamins/minerals/nutrients, and respiratory.<br><br>

                            It has over 36 brands, including Manforce (Rx), Moxikind-CV, Amlokind-AT, Unwanted-Kit,
                            Candiforce, Gudcef, Glimestar-M, Prega News, Dydroboon, Codistar, Nurokind-Gold, Nurokind
                            Plus-RF, Nurokind-LC, Asthakind-DX, Cefakind, Monticope, Telmikind-H, Telmikind, Gudcef-CV, and
                            Unwanted-72, among them.<br><br>

                            Mankind Pharma has one of the largest distribution networks of medical representatives in the
                            Indian pharmaceutical market. Over 80% of doctors in India prescribed their formulations and has
                            been ranked number 4th in terms of domestic sales during the Financial Year 2022.<br><br>

                            The company has earned numerous awards and recognitions and including The Best of Bharat Awards
                            2022 by exchange4media in the year 2022, and Silver Medal from National Awards for Manufacturing
                            Competitiveness Assessment 2021 instituted by International Research Institute for
                            Manufacturing.<br><br>

                            Mankind has a pan-India marketing presence, with a field force of 11,691 medical representatives
                            and 3,561 field managers, as of December 31, 2022. They operate 25 manufacturing facilities
                            across India and had 4,121 manufacturing personnel as of December 31, 2022.<br><br>

                            As of December 31, 2022, the Company had a team of over 600 scientists and a dedicated in-house
                            R&D center with four units located in IMT Manesar, Gurugram, Haryana and Thane,
                            Maharashtra.<br><br>
                        </p>
                    </v-card>


                    
                  
                    <v-card outlined style="border-color: #DDDDDD;" elevation="0" class="pb-2 pl-3 mr-6 mb-5">
                        <p class="mb-0 pl-5 pt-6 headd1">Financial Information</p>
                        <v-simple-table class="mt-5">
                            <template v-slot:default>
                                <thead>
                                    <tr style="background-color: #FAFBFF;">
                                        <th class="text-left tahe1">
                                            Financial Year
                                        </th>
                                        <th class="text-left tahe1">
                                            Total assets (cr)
                                        </th>
                                        <th class="text-left tahe1">
                                            Total revenue (cr)
                                        </th>
                                        <th class="text-left tahe1">
                                            Profit after tax (cr)
                                        </th>
                                        <th class="text-left tahe1">
                                            EBITDA (cr)
                                        </th>
                                        <th class="text-left tahe1">
                                            ROCE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in desserts" :key="item.name">
                                        <td style="font-weight: 550;" class="subhe">{{ item.n1 }}</td>
                                        <td class="black--text sub2">{{ item.n2 }}</td>
                                        <td class="black--text sub2">{{ item.n3 }}</td>
                                        <td class="black--text sub2">{{ item.n4 }}</td>
                                        <td class="black--text sub2">{{ item.n5 }}</td>
                                        <td class="black--text sub2">{{ item.n6 }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>


                    <v-card outlined style="border-color: #DDDDDD;" elevation="0" class="pb-2 pl-3 mr-6 mb-5">
                        <p class="mb-0 pl-5 pt-6 headd1">IPO Details & Schedule</p>
                        <v-row class="pl-5 pb-7" no-gutters>
                            <v-col cols="4">
                                <div>
                                    <p class="mb-0 pt-6 seiih" >IPO date</p>
                                    <p class="mb-0 pt-2 maihh">40,058,844 shares</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Listing date</p>
                                    <p class="mb-0 pt-2 maihh">09 May 2023</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Price range</p>
                                    <p class="mb-0 pt-2 maihh">₹ 1026 – ₹ 1080</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Minimum order quantity</p>
                                    <p class="mb-0 pt-2 maihh">13 shares / lot</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Minimum order quantity</p>
                                    <p class="mb-0 pt-2 maihh">13 shares / lot</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                            </v-col>
                            <v-col cols="4">
                                <div>
                                    <p class="mb-0 pt-6 seiih" >IPO date</p>
                                    <p class="mb-0 pt-2 maihh">40,058,844 shares</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Listing date</p>
                                    <p class="mb-0 pt-2 maihh">09 May 2023</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Price range</p>
                                    <p class="mb-0 pt-2 maihh">₹ 1026 – ₹ 1080</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Minimum order quantity</p>
                                    <p class="mb-0 pt-2 maihh">13 shares / lot</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Minimum order quantity</p>
                                    <p class="mb-0 pt-2 maihh">13 shares / lot</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                            </v-col>
                            <v-col cols="4">
                                <div>
                                    <p class="mb-0 pt-6 seiih" >IPO date</p>
                                    <p class="mb-0 pt-2 maihh">40,058,844 shares</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Listing date</p>
                                    <p class="mb-0 pt-2 maihh">09 May 2023</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Price range</p>
                                    <p class="mb-0 pt-2 maihh">₹ 1026 – ₹ 1080</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Minimum order quantity</p>
                                    <p class="mb-0 pt-2 maihh">13 shares / lot</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                                <div>
                                    <p class="mb-0 pt-6 seiih" style="color: #666666;text-transform: uppercase;">Minimum order quantity</p>
                                    <p class="mb-0 pt-2 maihh">13 shares / lot</p>
                                    <v-divider class="mr-5 mt-2"></v-divider>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>

                    

                </v-col>
                <v-col cols="3">
                    <p class="mb-0  subheaa">Apply for the IPO</p>
                    <p class="mb-0 subcon  pt-3">
                        You can apply for the Mankind Pharma Limited IPO using any supported UPI app by following two steps:
                    </p>
                    <p class=" mb-0 mt-3 blete"><v-icon size="17" class="pr-2"
                            color="#0037B7">mdi-minus</v-icon>Enter your bid on the MYNT app</p>
                    <p class=" mb-0 mt-3 blete" ><v-icon size="17" class="pr-2"
                            color="#0037B7">mdi-minus</v-icon>Accept the UPI mandate </p>
                    <p class="mb-0 subcon  pt-3">
                        On acceptance of the mandate, the bid amount will get blocked in your bank account.
                    </p>
                    <v-divider class="mt-5 "></v-divider>
                   <div class="text-center ml-10 mr-10"><v-btn rounded color="#666"  block style="align-self: center;"
                        class=" mx-auto  white--text elevation-0 mt-5 text-capitalize"><span class="butext">IPO closed</span></v-btn></div> 
                    <p class="mb-0  mt-8 subheaa">Checking Allotment</p>
                    <p class="mb-0 subcon  pt-3">
                        You can check the allotment status for the Mankind Pharma Limited IPO on the <span style="color:#666666;border-bottom-style:   solid; width:fit-content;border-width: 1px;"
                            class="grey--text"> website of the Registrar and Transfer agent.</span> Alternatively, you can also
                        check the allotment status on the <span style="color:#666666;border-bottom-style:  solid; width:fit-content;border-width: 1px;">NSE website.</span> 
                    </p>
                    <p class=" pt-5 blete" style="text-align: center;">Check allotment status</p>
                    <v-divider class="mt-4 "></v-divider>
                </v-col>
            </v-row>
        </div>
</template>


<script>
export default {
    data() {
        return {
            desserts: [
                {
                    n1: 'March 31, 2020',
                    n2: "5,073.29",
                    n3: '5,865.23',
                    n4: '1,056.15',
                    n5: '1448.35',
                    n6: '35.86%',
                },
                {
                    n1: 'March 31, 2020',
                    n2: "5,073.29",
                    n3: '5,865.23',
                    n4: '1,056.15',
                    n5: '1448.35',
                    n6: '35.86%',
                },
                {
                    n1: 'March 31, 2020',
                    n2: "5,073.29",
                    n3: '5,865.23',
                    n4: '1,056.15',
                    n5: '1448.35',
                    n6: '35.86%',
                },
                {
                    n1: 'March 31, 2020',
                    n2: "5,073.29",
                    n3: '5,865.23',
                    n4: '1,056.15',
                    n5: '1448.35',
                    n6: '35.86%',
                },
                {
                    n1: 'March 31, 2020',
                    n2: "5,073.29",
                    n3: '5,865.23',
                    n4: '1,056.15',
                    n5: '1448.35',
                    n6: '35.86%',
                },
                {
                    n1: 'March 31, 2020',
                    n2: "5,073.29",
                    n3: '5,865.23',
                    n4: '1,056.15',
                    n5: '1448.35',
                    n6: '35.86%',
                },
            ],
        }
    },
}
</script>


<style scoped>
.tahe1{
    color: #666;
font-size: 13px;
font-weight: 469;
line-height: 16px;
}
.subhe{
    color: #000;
font-size: 13px;
font-weight: 659;
line-height: 16px; 
}
.sub2{
    color: #000;
font-size: 12px;
font-weight: 469;
line-height: 16px;
}
.subheaa{
    color: #000;
font-size: 16px;
font-weight: 629;
line-height: 16px;
letter-spacing: -0.32px;
}
.subcon{
    color: #666;
font-size: 11px;
font-weight: 469;
line-height: 18px; 
}
.blete{
    color: #0037B7;
font-size: 13px;
font-weight: 639;
line-height: 16px; 
}
.butext{
    color: #FFF;
font-size: 13px;
font-weight: 409;
line-height: 20px; 
letter-spacing: 0.78px;
}

.firtex{
  font-size:11px;
  font-weight:480;
  color: #666;
  line-height: 18px;
}
.seiih{
  color: #666;

font-size: 9px;

font-weight: 469;
line-height: 12px; /* 120% */
letter-spacing: 0.8px;
text-transform: uppercase;
}
.maihh{
  color: #000;

font-size: 13px;

font-weight: 559;
line-height: 16px;
}

.headd1{
  color: #000;

font-size: 19px;

font-weight: 609;
line-height: 16px;
letter-spacing: -0.4px;
}
.slidecontainer {
    width: 60%;
}

.slider {
    -webkit-appearance: none;
    width: 80%;
    height: 3px;
    background: #a3a3a3;
    /* border: 2px solid rgba(222, 226, 235, 1); */
    /* border-radius: 12px; */
    /* outline: none; */
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;

}

.slidecontainerlist {
    width: 60%;
}

.sliderlist {
    -webkit-appearance: none;
    width: 33%;
    height: 3px;
    background: #a3a3a3;
    /* border: 2px solid rgba(222, 226, 235, 1); */
    /* border-radius: 12px; */
    /* outline: none; */
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.sliderlist::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 8px;
    /* background: linear-gradient(0deg, #5c92f7, #4c80e2),
    linear-gradient(0deg, #BDD0F4, #dce8ff); */
    border-radius: 12px;
    background-color: black;
    cursor: pointer;
    border: 1px solid rgb(0, 0, 0)
}

/* .scrolldiv {
    ::-webkit-scrollbar {
        display: none !important;
    }
} */

.postionchange {
    position: absolute !important;
    top: 25px !important;
    left: 170px !important;
    right: 200px
}

.gray-background {
    background-color: #CCCCCC;
    transition: background-color 0.5s ease-in-out;
}

.chrt {
    width: 100%;
    height: 100%;
}

.three-line-legend {
    width: 200px;
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

#no-background-hover::before {
    background-color: transparent !important;
}

.closered{
    color: #FF1717;
font-size: 12px;
font-weight: 659;
line-height: 16px; 

}

</style>