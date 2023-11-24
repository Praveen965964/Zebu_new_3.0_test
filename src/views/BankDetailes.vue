<template>
    <div>
        <v-container>
           <div class="px-16 mx-16 mt-16"> 
            <div class="mx-16 px-2">
            <p class="" style="color: #000;font-family: Tenon;font-size: 20px;font-style: normal;font-weight: 500;line-height: 20px;
letter-spacing: -0.4px;">Details of Bank Account(s)</p>
<p class="" style="color: #444;font-family: Tenon;font-size: 16px;font-style: normal;font-weight: 400;line-height: 28px;">“Investors are requested to note that Stock broker Zebu Share and Wealth Managements Private Limited is permitted to receive/pay money from/to investor through designated bank accounts only named as client bank accounts. Stock broker Zebu Share and Wealth Managements Private Limited is also required to disclose these client bank accounts to Stock Exchange. Hence, you are requested to use following client bank accounts only for the purpose of dealings in your trading account with us. The details of these client bank accounts are also displayed by Stock Exchanges on their website under “Know/ Locate your Stock Broker” or “Membership → Notice Board → Member & AP Details”.</p>
           
<v-row>
    <v-col cols="6" v-for="AccountDetaile  in AccountDetailes" :key="AccountDetaile" >
       <v-card class="px-6 py-4 mb-4 elevation-" width="95%" style="border-radius: 16px;
border: 1px solid #F2F2F2;
background: #FFF;
box-shadow: 0px 1px 2px 1px rgba(116, 116, 116, 0.20);">
        <p style="font-family: Tenon;font-size: 20px;font-style: normal;font-weight: 500;line-height: 20px; letter-spacing: -0.4px;">{{ AccountDetaile.Bankname }}</p>
    <p class="mb-0" style="color: #444;font-family: Tenon;font-size: 16px;font-style: normal;font-weight: 700;line-height: 20px;">{{AccountDetaile.AccountnumText  }}</p> 
    <p style="color: #444;font-family: Tenon;font-size: 16px;font-style: normal;font-weight: 400;line-height: 20px;">{{AccountDetaile.AccountNumber  }}</p> 
    <p class="mb-0" style="color: #444;font-family: Tenon;font-size: 16px;font-style: normal;font-weight: 700;line-height: 20px;">{{AccountDetaile.IFSCCodeText  }}</p>
    <p class="mb-0" style="color: #444;font-family: Tenon;font-size: 16px;font-style: normal;font-weight: 400;line-height: 20px;">{{AccountDetaile.IFSCCodeNumber  }}</p>
    </v-card>
    </v-col>
   
</v-row>

</div></div>
        </v-container>
    </div>
</template>

<script>

export default {
    data: () => ({
        AccountDetailes: [
            {
                Bankname: "HDFC Bank Limited",
                AccountnumText: "Account number",
                AccountNumber: "02320340000361",
                IFSCCodeText: "IFSC code",
                IFSCCodeNumber:"HDFC0000232"
            },
            {
                Bankname: "ICICI Bank Limited",
                AccountnumText: "Account number",
                AccountNumber: "000905033988",
                IFSCCodeText: "IFSC code",
                IFSCCodeNumber:"ICIC0000009"
            },
            {
                Bankname: "AXIS Bank Limited",
                AccountnumText: "Account number",
                AccountNumber: "922020058095051",
                IFSCCodeText: "IFSC code",
                IFSCCodeNumber:"UTIB0000006"
            },
            {
                Bankname: "IDFC first Bank Limited",
                AccountnumText: "Account number",
                AccountNumber: "922020058095051",
                IFSCCodeText: "IFSC code",
                IFSCCodeNumber:"IDFC0000006"
            },


         

        ],


    }),
   

  
}
</script>