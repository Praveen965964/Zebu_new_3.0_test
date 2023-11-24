<template>
    <div>
        <v-container>
        <p>VISION</p>
        <p>To follow highest standards of ethics and compliances while facilitating the trading byclientsin securities in a fair and transparent manner, so as to contribute in creation of wealthforinvestors.</p>
   <p class="font-weight-bold subtitle-1">MISSION</p>
   <ol type="i">
  <li>To hold securities of investors in dematerialised form and facilitate its transfer, while ensuring safekeeping of securities and protecting interest of investors.</li>
  <li>To establish and maintain a relationship of trust and ethics with the investors.</li>
  <li>To observe highest standard of compliances and transparency.</li>
  <li>To always keep ‘protection of investors’ interest’ as goal while providing service..</li>
</ol>
<p class="font-weight-bold subtitle-1">Services provided to Investors</p>

<ul>
  <li>Execution of trades on behalf of investors.</li>
  <li>Issuance of Contract Notes.</li>
  <li>Issuance of intimations regarding margin due payments.</li>
  <li>Facilitate execution of early pay-in obligation instructions
</li>
  <li>Settlement of client’s funds.
</li>
  <li>Intimation of securities held in Client Unpaid Securities Account (CUSA) Account
</li>
  <li>Issuance of retention statement of funds
</li>
  <li>Risk management systems to mitigate operational and market risk.
</li>
  <li>Facilitate client profile changes in the system as instructed by the client.
</li>
  <li>Information sharing with the client w.r.t. exchange circulars.
</li>
  <li>Redressal of Investor’s grievances.
</li>

</ul>

<p class="font-weight-bold subtitle-1">Rights of Investors</p>

<ul>
  <li><strong>Ask</strong> for and receive information from a firm about the work history and backgroundof the person handling your account, as well as information about the firm itself.</li>
  <li><strong>Receive</strong> complete information about the risks, obligations, and costs of any investment before investing.</li>
  <li><strong>Receive</strong>  recommendations consistent with your financial needs and investment objectives.
</li>
  <li><strong>Receive</strong> a copy of all completed account forms and agreements.
</li>
  <li><strong>Receive</strong> account statements that are accurate and understandable.
</li>
  <li><strong>Understand</strong> the terms and conditions of transactions you undertake.
</li>
  <li><strong>Access</strong> your funds in a timely manner and receive information about any restrictionsor limitations on access.
</li>
  <li><strong>Access</strong> complete information about maintenance or service charges, transactionor redemption fees, and penalties.
</li>
  <li><strong>Discuss</strong> your grievances with compliance officer of the firm and receive prompt attention to and fair consideration of your concerns.
</li>
</ul>
<p class="font-weight-bold subtitle-1">Rights of Investors</p>
<v-data-table
    :headers="headers"
    :items="desserts"
   
    class="elevation-0" hide-default-footer
  ></v-data-table>

  <p>DOs and DON’Ts for Investors</p>
  <p>Grievance Redressal Mechanism</p>
  <p><strong>Level 1 –</strong>Approach the Stock Broker at the designated Investor Grievance e-mail IDof the stock broker. The Stock Broker will strive to redress the grievance immediately, but not later than 30 days of the receipt of the grievance.</p>
<p><strong>Level 2 –</strong> Approach the Stock Exchange using the grievance mechanismmentionedat the website of the respective exchange
</p>    
 <img src="@/assets/InvestorStockBrokers.png" width="100%" alt="" class="">
 <p>Complaints Resolution Process at Stock Exchange explained graphically:</p>
 <v-data-table
    :headers="headers"
    :items="desserts"
   
    class="elevation-0" hide-default-footer
  ></v-data-table>
  <p>Handling of Investor’s claims / complaints in case of default of a Trading Member / Clearing Member (TM/CM)</p>
<p>Default of TM/CM</p>
<p><strong>Level 3 ––</strong>The complaint not redressed at Stock Broker / Stock Exchange level, may belodged with SEBI on SCORES (a web based centralized grievance redressal systemof SEBI) @ <a class="text-decoration-none" href="https://scores.gov.in/scores/Welcome.html">https://scores.gov.in/scores/Welcome.html</a></p>

</v-container>

    </div>
</template>
<script>
export default {
  data() {
    return {
        headers: [
          {
            text: 'S.No',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Activities', value: 'activite' },
          { text: 'Expected Timelines', value: 'expectedtime' },
         
        ],
        desserts: [
          {
            id: '1',
            activite: "KYC entered into KRA System and CKYCR",
            expectedtime: "10 days of account opening",
          },
          {
            id: '2',
            activite: "Client Onboarding",
            expectedtime: "Immediate, but not later than oneweek",
          },
          {
            id: '3',
            activite: "Order execution",
            expectedtime: "Immediate on receipt of order, but not later than the same day",
          },
          {
            id: '4',
            activite: "Allocation of Unique Client Code",
            expectedtime: "Before trading",
          },
          {
            id: '5',
            activite: "Copy of duly completed Client Registration Documents to clients",
            expectedtime: "7 days from the date of upload of Unique Client Code to the Exchange by the trading member",
          },
          {
            id: '6',
            activite: "Issuance of contract notes	",
            expectedtime: "24 hours of execution of trades",
          },
          {
            id: '7',
            activite: "Collection of upfront margin from client	",
            expectedtime: "Before initiation of trade",
          },
          {
            id: '8',
            activite: "Issuance of intimations regarding other margin due payments",
            expectedtime: "At the end of the T day",
          },
          {
            id: '9',
            activite: "Settlement of client funds	",
            expectedtime: "30 days / 90 days for running account settlement (RAS) as per the preference of client.If consent not given for RAS– within 24 hours of pay-out",
          },
          {
            id: '10',
            activite: "‘Statement of Accounts’ for Funds, Securities and Commodities",
            expectedtime: "Weekly basis (Within four trading days of following week)",
          },
          {
            id: '11',
            activite: "Issuance of retention statement of funds/commodities",
            expectedtime: "5 days from the date of settlement",
          },
          {
            id: '12',
            activite: "Issuance of Annual Global Statement",
            expectedtime: "30 days from the end of the financial year",
          },
          {
            id: '13',
            activite: "Investor grievances redressal",
            expectedtime: "30 days from the receipt of the complaint",
          },
        ],



        StockExchangeheader: [
          {
            text: 'S.No',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Type of Activity', value: 'activite' },
          { text: 'Timelines for activity', value: 'expectedtime' },
         
        ],
        StockExchangeItems: [
          {
            id: '1',
            activite: "Receipt of Complaint",
            expectedtime: "Day of complaint (C Day).",
          },
          {
            id: '2',
            activite: "Additional information sought from the investor, if any, and provisionally forwarded to stock broker",
            expectedtime: "C + 7 Working days",
          },
          {
            id: '3',
            activite: "Registration of the complaint and forwarding to the stock broker.",
            expectedtime: "C+8 Working Days i.e. T day.",
          },
          {
            id: '4',
            activite: "Amicable Resolution.",
            expectedtime: "T+15 Working Days",
          },
          {
            id: '5',
            activite: "Refer to Grievance Redressal Committee (GRC), in case of no amicable resolution.",
            expectedtime: "T+16 Working Days.",
          },
          {
            id: '6',
            activite: "Complete resolution process post GRC.",
            expectedtime: "T + 30 Working Days",
          },
          {
            id: '7',
            activite: "In case where the GRC Member requires additional information, GRC order shall be completed within.",
            expectedtime: "T + 45 Working Days",
          },
          {
            id: '8',
            activite: "Implementation of GRC Order.",
            expectedtime: "On receipt of GRC Order, if the order is in favour of the investor, debit the funds of the stock broker. Order for debit is issued immediately or as per the directions given in GRC order.",
          },
          {
            id: '9',
            activite: "In case the stock broker is aggrieved by the GRC order, will provide intention to avail arbitration",
            expectedtime: "Within 7 days from receipt of order",
          },
          {
            id: '10',
            activite: "If intention from stock broker is received and the GRC order amount is upto Rs.20 lakhs",
            expectedtime: "Investor is eligible for interim relief from Investor Protection Fund (IPF).The interim relief will be 50%of the GRC order amount or Rs.2 lakhs whichever is less. The same shall be provided after obtaining an Undertaking from the investor.",
          },
          {
            id: '11',
            activite: "Stock Broker shall file for arbitration",
            expectedtime: "Within 6 months from the date of GRC recommendation",
          },
          {
            id: '12',
            activite: "In case the stock broker does not file for arbitration within 6 months",
            expectedtime: "The GRC order amount shall be released to the investor after adjusting the amount released as interim relief, if any",
          },
        ],

        stockinvester:[
            {
                title:"Following steps are carried out by Stock Exchange for benefit of investor, in case stockbroker defaults:",
                listitems:"<ul><li>Circular is issued to inform about declaration of Stock Broker as Defaulter.</li><li>Information of defaulter stock broker is disseminated on Stock Exchange website.</li><li>Public Notice is issued informing declaration of a stock broker as defaulter and inviting claims within specified period.</li><li>Intimation to clients of defaulter stock brokers via emails and SMS for facilitating lodging of claims within the specified period.</li></ul>"

            },
            {
                title:"Following information is available on Stock Exchange website for information of investors:",
                listitems:"<ul><li>Norms for eligibility of claims for compensation from IPF.</li><li>Claim form for lodging claim against defaulter stock broker</li><li>FAQ on processing of investors’ claims against Defaulter stock broker.</li><li>Provision to check online status of client’s claim.</li>"
            }
        ],

        DosDonts:[
        {
            id: '1',
            Dos: "Read all documents and conditions being agreed before signing the account opening form.",
            Donts: "Do not deal with unregistered stock broker.",
          },
          {
            id: '2',
            Dos: "Receive a copy of KYC, copy of account opening documents and Unique Client Code.	",
            Donts: "Do not forget to strike off blanks in your account opening and KYC.",
          },
          {
            id: '3',
            Dos: "Read the product / operational framework / timelines related to various Trading and Clearing & Settlement processes",
            Donts: "Do not submit an incomplete account opening and KYC form",
          },
          {
            id: '4',
            Dos: "Receive all information about brokerage, fees and other charges levied	",
            Donts: "Do not forget to inform any change in information linkedto trading account and obtain confirmation of updation in the system.",
          },
          {
            id: '5',
            Dos: "Register your mobile number and email ID in your trading, demat and bank accounts to get regular alerts on your transactions",
            Donts: "Do not transfer funds, for the purposes of trading to any one other than a stock broker. No payment should be made in name of employee of stock broker",
          },
          {
            id: '6',
            Dos: "If executed, receive a copy of Power of Attorney. However, Power of Attorney is not a mandatory requirement as per SEBI / Stock Exchanges. Before granting Power of Attorney, carefully examine the scope and implications of powers being granted.",
            Donts: "Do not ignore any emails / SMSs received with regards to trades done, from the Stock Exchange and raise a concern, if discrepancy is observed.",
          },
          {
            id: '7',
            Dos: "Receive contract notes for trades executed, showing transaction price, brokerage, GST and STT etc. as applicable, separately, within 24 hours of execution of trades.",
            Donts: "Do not opt for digital contracts,if not familiar with computers.",
          },
          {
            id: '8',
            Dos: "Receive funds and securities / commodities on time within 24 hours from pay-out.",
            Donts: "Do not share trading password.",
          },
          {
            id: '9',
            Dos: "Verify details of trades, contract notes and statement of account and approach relevant authority for any discrepancies. Verify trade details on the Exchange websites from the trade verification facility provided by the Exchanges.",
            Donts: "Do not fall prey to fixed / guaranteed returns schemes.",
          },
          {
            id: '10',
            Dos: "Receive statement of accounts periodically. If opted for running account settlement, account has to be settled by the stock broker as per the option given by the client (30 or 90 days).",
            Donts: "Do not fall prey to fraudsters sending emails and SMSs luring to trade in stocks / securities promising huge profits.",
          },
          {
            id: '11',
            Dos: "In case of any grievances, approach stock broker or Stock Exchange or SEBI for getting the same resolved within prescribed timelines.",
            Donts: "Do not follow herd mentality for investments. Seek expert and professional advice for your investments.",
          },
        ]
    };
  },

}
</script>
<style>
/* table tr > th,td {
  border: 1px solid #dddddd;
} */
</style>