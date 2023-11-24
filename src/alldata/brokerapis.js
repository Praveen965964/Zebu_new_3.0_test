
import {
    ordersPageColumns,
    positionsPageColumns,
    fundSummaryColumns,
    holdingColumns,
    closedPositionsColumns,
    exchangeMessages
} from './columns';
<<<<<<< HEAD
import {mynturl} from '../apiUrl.js'
=======
import {mynturl} from '../apiurl.js'
>>>>>>> ce5581ce946afa00fe5ea266c6a94a78cd9fced7
import {userid,usession} from "../alldata/apiConnectionPool.js"
import { logMessage } from '@/utils/helpers';
// var userid = localStorage.getItem('userid');
// var usession = localStorage.getItem('usession');
var actid = localStorage.getItem('actid');

export let BrokerApiIns = null;
export var placedOrder = [];

function callApi(url, request) {
    let requestMethod = "POST";
    // if (!usession)
    //     usession = localStorage.getItem("usession");
    const param = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json"
        },
        body:request
    };
    return promiseTimeout(fetch(mynturl + url, param).then(checkStatus).then(getBody).then(parseBody).then(parseJson).catch(function (apiError) {
        if (!apiError.infoID) {
            const error = new Error("");
            throw error;
        }
    }));
}
function getTransactionType(type) {
    switch (type) {
        case 1:
            return "B";
        case -1:
            return "S";
        default:
            return "B";
    }
}
const priceTypes = {
    1: "LMT",
    2: "MKT",
    3: "SL-MKT",
    4: "SL-LMT",
    "LMT": 1,
    "MKT": 2,
    "SL-MKT": 3,
    "SL-LMT": 4
};
const checkStatus = (response) => {
    if (response.status == 200) {
        return response;
    } else if (response.status != 200) {
        window.postMessageHandler({
            id: "apiError",
            data: {
                error: response.status
            }
        });
        throw response;
    } else {
        const error = new Error("");
        throw error;
    }
}
    ;
const getBody = (response) => {
    return response.text();
}
    ;
const parseBody = (response) => {
    return JSON.parse(response);
}
    ;
const parseJson = (response) => {
    return response;
}
    ;
const promiseTimeout = (promise) => new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
        reject(new Error("Api Timeout"));
    }
        , (15 * 1000));
    promise.then((res) => {
        clearTimeout(timeoutId);
        resolve(res);
    }
        , (err) => {
            clearTimeout(timeoutId);
            reject(err);
        }
    );
}
);
const orderStatus = {
    CANCELED: 1,
    COMPLETE: 2,
    INACTIVE: 3,
    TRIGGER_PENDING: 6,
    REJECTED: 5,
    OPEN: 6,
    "after market order req received": 6,
    "modify after market order req received": 6,
    "trigger pending": 6,
    "cancelled after market order": 1
};

const cashPrimary = {
    "cash":"Cash Margin",
    "payin":"Today PayIn",
    "payout":"Today PayOut",
};

const cashAdditional = {
    "brkcollamt":"Collateral Amount",
    "unclearedcash": "Uncleared Cash",
    "daycash":"Day Cash",
};

const marginUtilized = {
    "marginused":"Margin Used",
    "mtomcurper":"MtoM Percentage",
};

const marginUsed = {
    "cbu":"CAC Buy Used",
    "csc":"CAC Sell Credits",
    "rpnl":"Current Realised PnL",
    "unmtom":"Unrealized MtoM",
    "marprt":"Covered Product margins",
    "span":"Span Used",
    "expo":"Exposure Margin",
    "premium":"Premium Used",
    "varelm":"Var Elm Margin",
    "grexpo":"Gross Exposure",
    "greexpo_d":"Gross Exposure Derivatives",
    "scripbskmar":"Script Basket Margin",
    "addscripbskmrg":"Addn Script Basket Margin",
    "brokerage":"Brokerage",
    "collateral":"Collateral",
    "grcoll":"Uploaded Holding Pre Haircut",
};

const riskLimits = {
    "turnoverlmt":"Turnover Limit",
    "pendordvallmt":"Pending Order Value Limit",
};

const riskIndicator = {
    "turnover":"Turnover",
    "pendordval":"Pending Order Value"
};

const marginBreakup = {
    "rzpnl_e_i":"Curr Realized PNL (Equity Intraday)",
    "rzpnl_e_m":"Curr Realized PNL (Equity Margin)",
    "rzpnl_e_c":"Curr Realized PNL (Equity Cash n Carry)",
    "rzpnl_d_i":"Curr Realized PNL (Derivatives Intraday)",
    "rzpnl_d_m":"Curr Realized PNL (Derivatives Margin)",
    "rzpnl_f_i":"Curr Realized PNL (FX Intraday)",
    "rzpnl_f_m":"Curr Realized PNL (FX Margin)",
    "rzpnl_c_i":"Curr Realized PNL (Commodity Intraday)",
    "rzpnl_c_m":"Curr Realized PNL (Commodity Margin)",
    "uzpnl_e_i":"Curr unrealized MTOM (Equity Intraday)",
    "uzpnl_e_m":"Curr unrealized MTOM (Equity Margin)",
    "uzpnl_d_i":"Curr unrealized PNL (Derivatives Intraday)",
    "uzpnl_d_m":"Curr unrealized PNL (Derivatives Margin)",
    "uzpnl_e_c":"Curr unrealized PNL (Equity Cash n Carry)",
    "uzpnl_f_i":"Curr unrealized PNL (FX Intraday)",
    "uzpnl_f_m":"Curr unrealized PNL (FX Margin)",
    "uzpnl_c_i":"Curr unrealized PNL (Commodity Intraday)",
    "uzpnl_c_m":"Curr unrealized PNL (Commodity Margin)",
    "span_d_i":"Span Margin (Derivative Intraday)",
    "span_d_m":"Span Margin (Derivative Margin)",
    "span_f_i":"Span Margin (FX Intraday)",
    "span_f_m":"Span Margin (FX Margin)",
    "span_c_i":"Span Margin (Commodity Intraday)",
    "span_c_m":"Span Margin (Commodity Margin)",
    "expo_d_i":"Exposure Margin (Derivative Intraday)",
    "expo_d_m":"Exposure Margin (Derivative Margin)",
    "expo_f_i":"Exposure Margin (FX Intraday)",
    "expo_f_m":"Exposure Margin (FX Margin)",
    "expo_c_i":"Exposure Margin (Commodity Intraday)",
    "expo_c_m":"Exposure Margin (Commodity Margin)",
    "premium_d_i":"Option premium (Derivative Intraday)",
    "premium_d_m":"Option premium (Derivative Margin)",
    "premium_f_i":"Option premium (FX Intraday)",
    "premium_f_m":"Option premium (FX Margin)",
    "premium_c_i":"Option premium (Commodity Intraday)",
    "premium_c_m":"Option premium (Commodity Margin)",
    "varelm_e_i":"Var Elm (Equity Intraday)",
    "varelm_e_m":"Var Elm (Equity Margin)",
    "varelm_e_c":"Var Elm (Equity Cash n Carry)",
    "marprt_e_h":"Covered Product margins (Equity High leverage)",
    "marprt_e_b":"Covered Product margins (Equity Bracket Order)",
    "marprt_d_h":"Covered Product margins (Derivative High leverage)",
    "marprt_d_b":"Covered Product margins (Derivative Bracket Order)",
    "marprt_f_h":"Covered Product margins (FX High leverage)",
    "marprt_f_b":"Covered Product margins (FX Bracket Order)",
    "marprt_c_h":"Covered Product margins (Commodity High leverage)",
    "marprt_c_b":"Covered Product margins (Commodity Bracket Order)",
    "scripbskmar_e_i":"Scrip basket margin (Equity Intraday)",
    "scripbskmar_e_m":"Scrip basket margin (Equity Margin)",
    "scripbskmar_e_c":"Scrip basket margin (Equity Cash n Carry)",
    "addscripbskmrg_d_i":"Additional scrip basket margin (Derivative Intraday)",
    "addscripbskmrg_d_m":"Additional scrip basket margin (Derivative Margin)",
    "addscripbskmrg_f_i":"Additional scrip basket margin (FX Intraday)",
    "addscripbskmrg_f_m":"Additional scrip basket margin (FX Margin)",
    "addscripbskmrg_c_i":"Additional scrip basket margin (Commodity Intraday)",
    "addscripbskmrg_c_m":"Additional scrip basket margin (Commodity Margin)",
    "brkage_e_i":"Brokerage (Equity Intraday)",
    "brkage_e_m":"Brokerage (Equity Margin)",
    "brkage_e_c":"Brokerage (Equity CAC)",
    "brkage_e_h":"Brokerage (Equity High Leverage)",
    "brkage_e_b":"Brokerage (Equity Bracket Order)",
    "brkage_d_i":"Brokerage (Derivative Intraday)",
    "brkage_d_m":"Brokerage (Derivative Margin)",
    "brkage_d_h":"Brokerage (Derivative High Leverage)",
    "brkage_d_b":"Brokerage (Derivative Bracket Order)",
    "brkage_f_i":"Brokerage (FX Intraday)",
    "brkage_f_m":"Brokerage (FX Margin)",
    "brkage_f_h":"Brokerage (FX High Leverage)",
    "brkage_f_b":"Brokerage (FX Bracket Order)",
    "brkage_c_i":"Brokerage (Commodity Intraday)",
    "brkage_c_m":"Brokerage (Commodity Margin)",
    "brkage_c_h":"Brokerage (Commodity High Leverage)",
    "brkage_c_b":"Brokerage (Commodity Bracket Order)",
    "peak_mar":"Peak margin used by the client"
};

export class BrokerApi {
    constructor(host, quotesProvider, odinUrl, authToken, odinApiKey, inHouseUrl, userProfile) {
        this._accountManagerData = {
            title: 'Mynt',
            overallPl: 0,
            equityPl: 0,
            todayPl: 0,
            availableFunds:0
        };
        this._positionById = {};
        this._basketLid = {};
        this._positions = [];
        this._holdings = [];
        this._trades = []
        this._nseFundsDetails = [];
        this._mcxFundsDetails = [];
        this._orderById = {};
        this._tradeById = {};
        this._orderTrades = {};
        this._orders = [];
        this._executions = [];
        this._idsCounter = 1;
        this._authToken = authToken
        this.opl=0;
       
        this._quotesProvider = quotesProvider;
        this._host = host;
        this._inHouseUrl = mynturl
        this._watchlists = []
        this._host.setButtonDropdownActions(this._buttonDropdownItems());
        this._accountsMetaInfo = []
        this._preferences = {}
        this._userProfile = userProfile
        this._shouldFetchGTDOrders = false
        const sellBuyButtonsVisibility = this._host.sellBuyButtonsVisibility();
        if (sellBuyButtonsVisibility !== null) {
            sellBuyButtonsVisibility.subscribe(() => {
                this._host.setButtonDropdownActions(this._buttonDropdownItems());
            });
        }
        const domPanelVisibility = this._host.domPanelVisibility();
        if (domPanelVisibility) {
            domPanelVisibility.subscribe(() => {
                this._host.setButtonDropdownActions(this._buttonDropdownItems());
            });
        }
        const orderPanelVisibility = this._host.orderPanelVisibility();
        if (orderPanelVisibility) {
            orderPanelVisibility.subscribe(() => {
                this._host.setButtonDropdownActions(this._buttonDropdownItems());
            });
        }
        this._amChangeDelegate = this._host.factory.createDelegate();
        this._changeHoldingssDelegate = this._host.factory.createDelegate();
        this._changeClosedPositionsDelegate = this._host.factory.createDelegate();
        this._changeFundsDelegate = this._host.factory.createDelegate();
        this._changeCashPrimaryDelegate = this._host.factory.createDelegate();
        this._changeCashAdditionalsDelegate = this._host.factory.createDelegate();
        this._changeMarginUtilizedDelegate = this._host.factory.createDelegate();
        this._changeMarginUsedDelegate = this._host.factory.createDelegate();
        this._changeAdditionalRiskLimitsDelegate = this._host.factory.createDelegate();
        this._changeAdditionalRiskIndicatorsDelegate = this._host.factory.createDelegate();
        this._changeMarginUsedBreakupDelegate = this._host.factory.createDelegate();
        this._changeExchangeMessages = this._host.factory.createDelegate();
        this._tradesChangeDelegate = this._host.factory.createDelegate();
        this._positionChangeDelegate = this._host.factory.createDelegate();
        this._closedPositionChangeDelegate = this._host.factory.createDelegate();
        this._overallPlValue = this._host.factory.createWatchedValue(this._accountManagerData.overallPl);
        this._todayPlValue = this._host.factory.createWatchedValue(this._accountManagerData.todayPl);
        this._equityPlValue = this._host.factory.createWatchedValue(this._accountManagerData.equityPl);
        this._availableFunds = this._host.factory.createWatchedValue(this._accountManagerData.availableFunds);
        this._amChangeDelegate.subscribe(null, (values) => {
            this._overallPlValue.setValue(values.overallPl);
            this._equityPlValue.setValue(values.equityPl);
            this._todayPlValue.setValue(values.todayPl);
            this._availableFunds.setValue(values.availableFunds);
        });
        this._gettingAccountsMetaInfo = this._getAccountsMetaInfo()
        this.init()
        BrokerApiIns = this
    }

    init() {
        try {
    this.closedPositions();
    this.funds();
    this.holdings();
    // this.orders(false);
    // this.positions(null, false);
} catch (error) {
            logMessage("broker error" + error)
        }

    }
    connectionStatus() {
        return 1 ;
    }
    socket_disconnect() {
        this.omsFeed.disconnectSocket()
    }
    socket_initialize() {
        this.omsFeed.setupSocket()
    }
    openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank')
        if (newWindow) newWindow.opener = null
        var aa = setInterval(() => {
            if (newWindow.closed) {
                clearInterval(aa)
            }
        }, 1000)
    }
    
    setOrderProperties(params) {
        if (params.margin == undefined) {
            params.margin = '1'
        }
        if (params.order_type == undefined) {
            if (params.type == 1) {
                params.order_type = '1'
            } else {
                params.order_type = '2'
            }
        }
        return params
    }
    
    getOrderDialogOptions(symbol){
        let fieldValues = []
        if(symbol.includes("NSE")|| symbol.includes("BSE")){
            fieldValues = [
                {
                  text: "IntraDay (MIS)",
                  value: "IntraDay (MIS)",
                },
                {
                  text: "Delivery (CNC)",
                  value: "Delivery (CNC)",
                },
            ]
        }
        else{
            fieldValues = [
                {
                  text: "IntraDay (MIS)",
                  value: "IntraDay (MIS)",
                },
                {
                  text: "Carry Forward (NRML)",
                  value: "Carry Forward (NRML)",
                },
            ]
        }
        const orderDialog = {
            showTotal:true,
            customFields: [
                {
                    inputType: 'ComboBox',
                    id: '2410',
                    title: 'Product Type',
                    items: fieldValues
                }
            ]
        }
        return Promise.resolve(orderDialog);
    }
    async showOrderDialog(order, focus){
        // console.log("Order", order, focus);
        this._host.showOrderDialog(order,focus)
    }
    async holdings(){
        this._holdings=[];
        const holdingsData = ()=>{
            const request = `jData={"uid":"${userid}","actid":"${actid}","prd":"C"}&jKey=${usession}`;
            const response = callApi("Holdings", request);
            return Promise.resolve(response);
        }
        ;
        const tradeList1 = await holdingsData();
        const tradeList = tradeList1;
        if (tradeList && tradeList.length) {
            const chartUnderstoodTradeData = [];
            tradeList.map((TradeData)=>{
                const requiredTrade = formatTrade(TradeData);
                // console.log("Req  Trade", requiredTrade)
                if(requiredTrade.qty != "0"){
                this._subscribeData(requiredTrade.symbol, "HOL" + requiredTrade.id,(last)=>{
                    if (requiredTrade.cprice === last.lp) {
                        return;
                    }
                    requiredTrade.cprice = Number(last.lp);
                    requiredTrade.clseprice = Number(last.prev_close_price);
                    requiredTrade.currVal = Number(parseFloat(requiredTrade.qty * requiredTrade.cprice).toFixed(2));
                    requiredTrade.daypnl = Number(requiredTrade.invested!=0 ? parseFloat((requiredTrade.cprice - requiredTrade.clseprice) * requiredTrade.qty).toFixed(2) :0);
                    requiredTrade.daypc = Number(requiredTrade.invested!=0 ? parseFloat((requiredTrade.daypnl / requiredTrade.currVal) * 100).toFixed(2) : 0);
                    requiredTrade.total = Number(requiredTrade.invested!=0 ? parseFloat(requiredTrade.currVal - requiredTrade.invested).toFixed(2) : 0);
                    // console.log("Total::", requiredTrade.total)
                    requiredTrade.overallpnl = Number(requiredTrade.invested!=0 ? parseFloat(requiredTrade.currVal - requiredTrade.invested).toFixed(2) : 0);
                    requiredTrade.overallpc = Number(requiredTrade.invested!=0 ? (parseFloat((requiredTrade.overallpnl/requiredTrade.invested) * 100).toFixed(2) == Infinity ? 0 : parseFloat((requiredTrade.overallpnl/requiredTrade.invested) * 100).toFixed(2)) : 0);
                    this._changeHoldingssDelegate.fire(requiredTrade);
                    this._recalculateAMData();
                }
                );
                chartUnderstoodTradeData.push(requiredTrade);
                this._holdings.push(requiredTrade);
            }});
            this._changeHoldingssDelegate.fire(chartUnderstoodTradeData);
            return Promise.resolve(chartUnderstoodTradeData);
        }
       
        return Promise.resolve([]);
    }
    async closedPositions(){
        const closedPositionsData = ()=>{
            const request = `jData={"uid":"${userid}","actid":"${actid}"}&jKey=${usession}`;
            const response = callApi("PositionBook", request);
            return Promise.resolve(response);
        }
        ;
        const clPositions = await closedPositionsData();
        if(clPositions.length>0){
        const chartUnderstoodClosedPositionsData = [];
        clPositions.map((PositionData)=>{
                const requiredPosition = formatRequiredPosition(PositionData);
                if(requiredPosition.netQty =="0"){
                    // requiredPosition.overallPl = requiredPosition.totalPl;
                    // this.opl = (requiredPosition.sAvg * requiredPosition.sQty) - (requiredPosition.bAvg * requiredPosition.bQty);
           
                chartUnderstoodClosedPositionsData.push(requiredPosition);
                }
        });
            this._changeClosedPositionsDelegate.fire(chartUnderstoodClosedPositionsData);
            return Promise.resolve(chartUnderstoodClosedPositionsData);
        }
        return Promise.resolve([]);
    }
    async funds(){
        const getMarginData = ()=>{
            const request = `jData={"uid":"${userid}","actid":"${actid}"}&jKey=${usession}`;
            const response = callApi("Limits", request);
            return Promise.resolve(response);
        }
        const marginData = await getMarginData();
        let values = marginData;
        var chartUnderstoodFundsData = [];
        // var chartUnderstoodCashPrimaryFields=[];
        // var chartUnderstoodCashAdditionalFields=[];
        // var chartUnderstoodMarginUtilized=[];
        // var chartUnderstoodMarginUsed=[];
        // var chartUnderstoodAdditionalRiskLimits=[];
        // var chartUnderstoodAdditionalRiskIndicators=[];
        // var chartUnderstoodMarginBreakup=[];
        if (values) {
            var i = 1;
            this._accountManagerData.availableFunds = (Number(values.cash)+Number(values.brkcollamt)+Number(values.payout==null?0:values.payout))-(Number(values.span==null?0:values.span)+Number(values.expo==null?0:values.expo)+Number(values.cbu==null?0:values.cbu)+Number(values.brokerage==null?0:values.brokerage)+Number(values.premium==null?0:values.premium));
            // console.log("Funds", this._accountManagerData.availableFunds)
            for (const [key, value] of Object.entries(values)) {
                let v;
                if(key in cashPrimary){
                    v={
                        'id':i,
                        'details':cashPrimary[key],
                        'all':value
                    }
                }
                else if(key in cashAdditional){
                    v={
                        'id':i,
                        'details':cashAdditional[key],
                        'all':value
                    }
                }
                else if(key in marginUtilized){
                    v={
                        'id':i,
                        'details':marginUtilized[key],
                        'all':value
                    }
                }
                else if(key in marginUsed){
                    v={
                        'id':i,
                        'details':marginUsed[key],
                        'all':value
                    }
                }
                else if(key in riskLimits){
                    v={
                        'id':i,
                        'details':riskLimits[key],
                        'all':value
                    }
                }
                else if(key in riskIndicator){
                    v={
                        'id':i,
                        'details':riskIndicator[key],
                        'all':value
                    }
                }
                else if(key in marginBreakup){
                    v={
                        'id':i,
                        'details':marginBreakup[key],
                        'all':value
                    }
                }
                if(v!=undefined) {
                    chartUnderstoodFundsData.push(v);
                    i=i+1;
                }
                
              }
              this._recalculateAMData();
              this._changeFundsDelegate.fire(chartUnderstoodFundsData);
            // console.log("Funds 1",chartUnderstoodFundsData);
            return Promise.resolve(chartUnderstoodFundsData);
        }
        return Promise.resolve([]);
    }
    async excMessages(){
        const getMessageData = ()=>{
            const request = `jData={"uid":"${userid}"}&jKey=${usession}`;
            const response = callApi("ExchMsg", request);
            return Promise.resolve(response);
        }
        const messageData = await getMessageData();
        const chartUnderstoodExcMessageData = [];
        if (messageData[0].stat == "Ok") {
            var i = 1;
            messageData.map((MessageData)=>{
                const v={
                    'id':i,
                    'time':MessageData.exch_tm,
                    'msg':MessageData.exch_msg,
                    'exch':MessageData.exch
                }
                chartUnderstoodExcMessageData.push(v);
                i=i+1;
            });
            // console.log("Exch MSG::", chartUnderstoodExcMessageData)
        }
        this._changeExchangeMessages.fire(chartUnderstoodExcMessageData);
        return Promise.resolve(chartUnderstoodExcMessageData);
    }
    async placeOrder(preOrder,confirmId) {
        let currentOrder = null;
        // console.log("Place Order",preOrder)
        const handler = async (params)=>{
            if (preOrder.duration)
                ;this._host.activateBottomWidget();
                const symbolData = window._symbolInfoMap[preOrder.symbol]
            if(preOrder.customFields != undefined){
            const pCode = preOrder.customFields['2410'];
            var mySubString = pCode.substring(
                pCode.indexOf("(") + 1, 
                pCode.lastIndexOf(")")
            );
            var tp;
            
            if(mySubString == "CNC"){
                tp = "C";
            }
            else if(mySubString == "NRML"){
                tp = "M"
            }
            else if(mySubString == "MIS"){
                tp = "I"
            }
        }

        if(confirmId=="reverse"){
            mySubString = preOrder.params.s_prdt_ali
            if(mySubString == "CNC"){
                tp = "C";
            }
            else if(mySubString == "NRML"){
                tp = "M"
            }
            else if(mySubString == "MIS"){
                tp = "I"
            }
        }
            let prcType;
            const sym = preOrder.symbol.split(":")[1]
            if(preOrder.duration){
                prcType = preOrder.duration['type']
            }
            const orderPrice = params.limitPrice || params.seenPrice;
            let orderData;
            if(confirmId == "close"){
                orderData = {
                    "uid":userid,
                    "actid":actid,
                    "exch": preOrder.params.exc,
                    "prctyp": "MKT",
                    "prd":preOrder.params.positionParams.prd,
                    "prc": "0",
                    "qty": preOrder.params.exc == "MCX" ? String(preOrder.qty * symbolData.lot_size) : String(preOrder.qty),
                    "ret": "DAY",
                    "tsym": sym,
                    "trantype": getTransactionType(params.side || 1).toUpperCase(),
                };}
            else{
                orderData = {
                "uid":userid,
                "actid":actid,
                "complexty": prcType==undefined ? "regular": prcType,
                "discqty": "0",
                "exch": symbolData.exchange,
                "pCode": tp,
                "prctyp": priceTypes[params.type || 2],
                "prd":tp,
                "prc": String(params.limitPrice) || String(params.stopPrice) || String(params.seenPrice),
                "qty": symbolData.exchange == "MCX" ? String(preOrder.qty * symbolData.lot_size) : String(preOrder.qty),
                "ret": "DAY",
                "symbol_id": symbolData.token,
                "tsym": sym,
                "trantype": getTransactionType(params.side || 1).toUpperCase(),
                "trgprc": params.type == 4 ? String(params.stopPrice) : "0",
            };
        }
            const order = {
                id: `${this._idsCounter++}`,
                duration: params.duration,
                limitPrice: orderPrice,
                profit: 0,
                qty: params.qty,
                side: params.side || 1,
                status: 6,
                stopPrice: params.stopPrice || 0.00,
                symbol: params.symbol,
                type: params.type || 2,
                execution: params.customFields ? params.customFields['2410'] : '',
                takeProfit: params.takeProfit,
                stopLoss: params.stopLoss,
                Total:orderPrice*params.qty,
                isClose: confirmId == "close" ? true : false
            };
            currentOrder = order;
            // console.log("place order ", order)
            const request = `jData=${JSON.stringify(orderData)}&jKey=${usession}`;
            const response = callApi("PlaceOrder", request);
            return Promise.resolve(response);
        }
        ;
        const response = await handler(preOrder);
        if (response.stat == "Ok") {
            currentOrder.id = response.norenordno;
            // placedOrder[currentOrder.id] = currentOrder;
            this._updateOrder(currentOrder);
        }
            this._host.currentAccountUpdate();
        return Promise.resolve("Done");
    }

    async modifyOrder(order) {
            var modifiedOrder={};
            const handler = async (params)=>{
                const syminfo = window._symbolInfoMap[order.symbol]
                let originalOrder = this._orderById[params.id];
                if (originalOrder) {
                    modifiedOrder = {
                        ...originalOrder
                    };
                    modifiedOrder.qty = order.exc == "MCX" ? Number(params.qty) * Number(syminfo.lot_size) :  params.qty;
                    modifiedOrder.stopPrice = params.stopPrice;
                    modifiedOrder.limitPrice = params.limitPrice;
                    modifiedOrder.execution = params.customFields ? params.customFields['2410'] : '';
                
                const sym = order.symbol.split(":")[1]
                
                const orderPrice = params.limitPrice || params.seenPrice;
                const orderData = {
                    "norenordno":originalOrder.id,
                    "uid":userid,
                    "actid":actid,
                    "exch": order.exc,
                    "prctyp": priceTypes[params.type || 2],
                    "prc": String(params.limitPrice) || String(params.stopPrice) || String(params.seenPrice),
                    "qty": order.exc == "MCX" ? String(Number(params.qty) * Number(syminfo.lot_size)) :  String(params.qty),
                    "ret": "DAY",
                    "tsym": sym,
                    "trgprc": String(orderPrice),
                };
                const request = `jData=${JSON.stringify(orderData)}&jKey=${usession}`;
                const response = callApi("ModifyOrder", request);
                return Promise.resolve(response);
                }
            }
            ;
            const res = await handler(order);
            // console.log("Res", res);
            if (res.stat == "Ok") {
                this._updateOrder(modifiedOrder);
                this.orders(true);
            }
        return Promise.resolve("Done");
    }
    editPositionBrackets(positionId, positionBrackets) {
            const handler = (id,brackets)=>{
                const position = this._positionById[id];
                if (position) {
                    const modifiedPosition = {
                        ...position
                    };
                    modifiedPosition.takeProfit = brackets.takeProfit || position.takeProfit || null;
                    modifiedPosition.stopLoss = brackets.stopLoss || position.stopLoss || null;
                    BrokerApiIns._updatePosition(modifiedPosition);
                }
                return Promise.resolve();
            }
            ;
        return handler(positionId, positionBrackets);
    }
    async closePosition(positionId) {
            const position = this._positionById[positionId];
            // console.log("POS", positionId,position,this._positionById)
            const handler = ()=>{
                if(position.qty < 0){
                    position.qty = position.qty*-1;
                }
                this.placeOrder({
                    symbol: position.symbol,
                    side: position.side === -1 ? 1 : -1,
                    type: 2,
                    qty: position.qty,
                    exchange:position.exc,
                    params:position
                  },"close");
                  this.closedPositions();
                return Promise.resolve();
            }
            ;
            return handler();
    }
    async orders(refresh = false) {
        const getOrderbookData = ()=>{
            const request = `jData={"uid":"${userid}"}&jKey=${usession}`;
            const response = callApi("OrderBook", request);
            return Promise.resolve(response);
        }
        ;
        const orderList = await getOrderbookData();
        if (orderList && orderList.length) {
            const chartUnderstoodOrderData = [];
            orderList.map((orderData)=>{
                const requiredOrder = formatRequiredOrder(orderData);
                // if(orderData.status == "OPEN" || orderData.status == "TRIGGER_PENDING")
                // {
                    placedOrder[requiredOrder.id] = requiredOrder;
                // }
                // console.log("Required Order::", requiredOrder)
                // if(placedOrder[requiredOrder.id]){
                //     console.log("Order Details::", placedOrder,requiredOrder)
                //     placedOrder.status = requiredOrder.status;
                //     try{
                //         this._host.showNotification(`Order ${placedOrder[requiredOrder.id].id} is ${requiredOrder.orderParams.status}`,`${placedOrder[requiredOrder.id].qty} ${placedOrder[requiredOrder.id].side == 1 ? "BUY" : "SELL"} for ${requiredOrder.symbol} is ${requiredOrder.orderParams.status}`,placedOrder[requiredOrder.id].status == 5 || placedOrder[requiredOrder.id].status == 1 ? 0 : 1)
                //         // this._updateOrder(placedOrder)
                //     }
                //     catch(e){
                //         console.log("Order Details error", e)
                //     }
                // }
                this._subscribeData(orderData, (last)=>{
                    if (requiredOrder.last === last) {
                        return;
                    }
                    requiredOrder.last = last;
                    if (requiredOrder.price == null) {
                        requiredOrder.price = requiredOrder.last;
                    }
                    this._updateOrderLast(requiredOrder);
                }
                );
                const hasOrderAlready = Boolean(this._orderById[requiredOrder.id]);
                if (!hasOrderAlready) {
                    if (refresh)
                        this._updateOrder(requiredOrder);
                } else {
                    // console.log("Order :",resultData)
                    if (refresh)
                        this._updateOrder(requiredOrder);
                }
                this._orderById[requiredOrder.id] = requiredOrder;
                const existOrderIndex = this._orders.findIndex(item=>item.id == requiredOrder.id);
                if (existOrderIndex !== -1) {
                    this._orders.splice(existOrderIndex, 1);
                }
                this._orders.push(requiredOrder);
                chartUnderstoodOrderData.push(requiredOrder);
            }
            );
            return Promise.resolve(chartUnderstoodOrderData);
        }
        return Promise.resolve(this._orders);
    }
    async positions(resultData = null, refresh = false) {
            logMessage(`${resultData},${refresh}`);
            this._positions = [];
            const getPositionData = ()=>{
                    const request = `jData={"uid":"${userid}","actid":"${actid}"}&jKey=${usession}`;
                    const response = callApi("PositionBook", request);
                    return Promise.resolve(response);
                }
                ;
            
            const positionList = await getPositionData();
            const handler = async() => {
                if (positionList && positionList.length) {
                const chartUnderstoodPositionData = [];
                positionList.map((positionData)=>{
                    const requiredPosition = formatRequiredPosition(positionData);
                    const hasPositionAlready = Boolean(this._positionById[requiredPosition.id]);
                    this._positionById[requiredPosition.id] = requiredPosition;
                    
                    if (hasPositionAlready) {
                        this._unsubscribeData(requiredPosition);
                    }
                    
                        this._subscribeData(requiredPosition, "POS" + requiredPosition.id,(last)=>{
                            
                            if (requiredPosition.last === last.lp) {
                                return;
                            }
                            requiredPosition.last = Number(last.lp);
                            requiredPosition.avgPrice = Number(last.lp);
                            const qty = requiredPosition.exc == 'CDS' | 'MCX' ? requiredPosition.qty * requiredPosition.mul : requiredPosition.qty;
                            requiredPosition.profit = Number((requiredPosition.last - requiredPosition.price) * qty);
                            // requiredPosition.totalPl = requiredPosition.profit;
                            // console.log("REQUIRED POSITION::", requiredPosition,requiredPosition.side === -1 ? -1 : 1,(requiredPosition.last - requiredPosition.price),qty,requiredPosition.profit)
                            if(requiredPosition.netQty == 0){
                                // console.log("OVERALL Pl:", requiredPosition)
                                requiredPosition.overallPl = Number(requiredPosition.totalPl);
                            }
                            this._host.plUpdate(requiredPosition.id, requiredPosition.profit);
                            this._host.positionPartialUpdate(requiredPosition.id, requiredPosition);
                            this._recalculateAMData()
                        }
                        );
                   
                        this._positions.push(requiredPosition);
                    
                    chartUnderstoodPositionData.push(requiredPosition);
                }
                );
                // console.log("POSITION:", chartUnderstoodPositionData)
                this._closedPositionChangeDelegate.fire(chartUnderstoodPositionData);
                return Promise.resolve(chartUnderstoodPositionData);
            }
            // console.log("Positions::::", this._positionById)
            return Promise.resolve(this._positions);
        }
            return await handler();
    }

    // chartContextMenuActions(e, t) {
    //     console.log(t)
    //     var aa = []
    //     aa.push({
    //         text: "Create New Buy Order ..",
    //         checkable: false,
    //         checked: false,
    //         symbolInfo: this.symbolInfo(e.symbol),
    //         checkedStateSource: (function (_) { console.log("Create new buy order checkedStateSource",_) }),
    //         action: (function (_) {
    //             console.log("Create new buy order action",_)
    //         }),
    //         icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.9792 16.6205C19.7396 16.8955 19.3241 16.9285 19.044 16.6948L14.3924 12.8117L14.072 12.5442L13.7516 12.8117L9.10009 16.6947C8.82008 16.9285 8.40456 16.8955 8.16495 16.6205C7.92467 16.3447 7.94981 15.9272 8.22144 15.6822L14.0721 10.4057L19.9227 15.6822C20.1943 15.9272 20.2195 16.3447 19.9792 16.6205ZM18.4032 17.4624C19.1009 18.0448 20.1362 17.9626 20.7332 17.2774C21.3318 16.5902 21.2692 15.55 20.5924 14.9396L14.407 9.36109L14.0721 9.05908L13.7373 9.36109L7.55171 14.9396C6.87492 15.55 6.81229 16.5902 7.41096 17.2774C8.00796 17.9626 9.04326 18.0448 9.74094 17.4624L14.072 13.8468L18.4032 17.4624Z"></path></svg>'
    //     }, {
    //         text: "Create New Sell Order ..",
    //         checkable: false,
    //         checked: false,
    //         symbolInfo: this.symbolInfo(e.symbol),
    //         checkedStateSource: (function (_) { console.log(_) }),
    //         action: (function (_) {
    //             console.log(_)
                
    //         }),
    //         icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.9792 12.2892C19.7396 12.0142 19.3241 11.9812 19.044 12.2149L14.3924 16.098L14.072 16.3655L13.7516 16.098L9.10009 12.2149C8.82008 11.9812 8.40456 12.0142 8.16495 12.2892C7.92467 12.565 7.94981 12.9825 8.22144 13.2275L14.0721 18.504L19.9227 13.2275C20.1943 12.9825 20.2195 12.565 19.9792 12.2892ZM18.4032 11.4472C19.1009 10.8648 20.1362 10.9471 20.7332 11.6323C21.3318 12.3195 21.2692 13.3597 20.5924 13.9701L14.407 19.5486L14.0721 19.8506L13.7373 19.5486L7.55171 13.9701C6.87492 13.3597 6.81229 12.3195 7.41096 11.6323C8.00796 10.9471 9.04326 10.8648 9.74094 11.4473L14.072 15.0628L18.4032 11.4472Z"></path></svg>'
    //     })

    //     return Promise.resolve(aa)
    // }
    chartContextMenuActions(context) {
        // console.log("chartContextMenuActions",context,options);
        return this._host.defaultContextMenuActions(context);
      }
    executions(symbol) {
        return Promise.resolve(this._executions
            .filter((data) => {
                return data.symbol === symbol;
            }));
    }
    async addExecutionWithoutRefresh(execution) {
        return this._quotesProvider.tokenInfo({
            market_segment_id: execution.exchange,
            token: execution.token
        }).then((symbol) => {
            execution.exchange = _marketSegmentId(execution.exchange)
            execution.symbol = symbol.symbol
            this._executions.push(execution)
            this._tradeById[execution.id] = execution
            this._trades.push(execution)
            this._host.executionUpdate(execution)


            this._tradesChangeDelegate.fire(execution)
            return Promise.resolve()
        })
    }
    async previewOrder(order){
        // console.log("PREVIEW ORDER:: ",order);
        const handler = async (params,type)=>{
        if (order.duration)
        ;this._host.activateBottomWidget();
        const symbolData = window._symbolInfoMap[order.symbol]
    if(order.customFields != undefined){
    const pCode = order.customFields['2410'];
    var mySubString = pCode.substring(
        pCode.indexOf("(") + 1, 
        pCode.lastIndexOf(")")
    );
    var tp;
    if(mySubString == "CNC"){
        tp = "C";
    }
    else if(mySubString == "NRML"){
        tp = "M"
    }
    else if(mySubString == "MIS"){
        tp = "I"
    }
}
    const sym = order.symbol.split(":")[1]

    const orderPrice = params.limitPrice || params.seenPrice;
    const stopPrice = params.stopPrice;
    // const limitPrice = params.limitPrice;
    let orderData;
    if(type == "brokerage"){
        orderData = {
            "uid":userid,
            "actid":actid,
            "exch": order.symbol.split(":")[0],
            "prctyp": "MKT",
            "prd":tp,
            "prc": String(orderPrice),
            "qty": order.symbol.split(":")[0] == "MCX" ? String(order.qty * symbolData.lot_size) : String(order.qty),
            "ret": "DAY",
            "tsym": sym,
            "trantype": getTransactionType(params.side || 1).toUpperCase(),
        };
        const getBrokerage = ()=>{
            const request = `jData=${JSON.stringify(orderData)}&jKey=${usession}`;
            const response = callApi("GetBrokerage",request);
            return Promise.resolve(response);
    }
        const brokerage = await getBrokerage();
        // console.log("Res for Brokerage",brokerage);
        return Promise.resolve(brokerage)
    }
        else{
            orderData = {
                "uid":userid,
                "actid":actid,
                "exch": order.symbol.split(":")[0],
                "prd":tp,
                "prc": String(orderPrice),
                "qty": order.symbol.split(":")[0] == "MCX" ? String(order.qty * symbolData.lot_size) : String(order.qty),
                "ret": "DAY",
                "tsym": sym,
                "prctyp":priceTypes[order.type || 2],
                "trgprc":String(stopPrice),
                "trantype": getTransactionType(params.side || 1).toUpperCase(),
            }; 
        }
        const getMargin = ()=>{
            const request = `jData=${JSON.stringify(orderData)}&jKey=${usession}`;
            const response = callApi("GetOrderMargin",request);
            return Promise.resolve(response);
    }
        const margin = await getMargin();
        // console.log("Res for Brokerage",margin);
        return Promise.resolve(margin)
}
        const response = await handler(order,"brokerage");
        const mres = await handler(order,"margin");
        // console.log("Res for Brokerage",response,mres);
        var orderpreviewResult={
            sections:[
                {rows: [{title:"Brokerage",value:response.brkage_amt},
                {title:"Charges & Taxes",value:response.tot_chrg},
                {title:"Required Margin",value:mres.ordermargin},
                {title:"Remarks",value:mres.remarks}]},
            ],
            confirmId:1
        }
        return Promise.resolve(orderpreviewResult);
    }

    removeOrderLids(lids) {
        var new_map = this._basketLid
        Object.keys(new_map).forEach(function (key) {
            // console.log(index)
            if (lids.includes(new_map[key])) {
                new_map[key] = undefined
            }
        })
        this._basketLid = new_map
    }

    reversePosition(positionId) {
        const position = this._positionById[positionId];
        // console.log("Reverse Position::", position)
        if (position.positionParams.s_prdt_ali.toUpperCase() == "MTF" || position.positionParams.s_prdt_ali.toUpperCase() == "CNC") {
            return Promise.reject("Cannot reverse DELIVERY or MTF positions")
        }
        const handler = () => {
            // window.dataLayer.push({
            //     event: 'tv-reversed-position'
            // })
            return this.placeOrder({
                symbol: position.symbol,
                side: position.side === -1 /* Sell */ ? 1 /* Buy */ : -1 /* Sell */,
                type: 2 /* Market */,
                qty: position.qty<0 ? position.qty * -2 : position.qty * 2,
                params:position.positionParams
            },"reverse");
        };
        return handler();
    }
    async cancelOrder(orderId) {
        const order = this._orderById[orderId];
            const handler = ()=>{
                order.status = 1;
                order.reason = "CANCELED"
                this._updateOrder(order);
                this.orders(false);
                return Promise.resolve();
            }
            ;
            const ordercancel = ()=>{
                const cancelrequest = {
                            "uid": userid,
                            "norenordno": order.id
                };
                const request = `jData=${JSON.stringify(cancelrequest)}&jKey=${usession}`;
                const response = callApi("CancelOrder",request);
                return Promise.resolve(response);
        }
        ;
            const ordcancel = await ordercancel();
            logMessage(`Order Cancelled for Order ${ordcancel}`)
            return handler();
    }
    cancelOrders(symbol, side, ordersIds) {
        const closeHandler = () => {
            return Promise.all(ordersIds.map((orderId) => {
                return this.cancelOrder(orderId);
            })).then(() => { });
        };
        return closeHandler();
    }
    possibleOrderStatuses() {
        return [1, 2, 5, 6, ];
    }
    accountManagerInfo() {
        const summaryProps = [{
            // 'All Positions P&L'
            text: 'Positions P&L',
            wValue: this._overallPlValue,
            formatter: 'fixed', // default value
        },
        // {
        //     text: "MTM",
        //     wValue: this._todayPlValue,
        //     formatter: 'fixed', // default value
        // },
        {
            text: 'Holdings P&L',
            wValue: this._equityPlValue,
            formatter: 'fixed', // default value
        },
        {
            text: 'Available Fund',
            wValue: this._availableFunds,
            formatter: 'fixed',
        }
        ];
        return {
            accountTitle: 'Mynt',
            summary: summaryProps,
            possibleOrderStatuses: this.possibleOrderStatuses(),
            // customFormatters: [{
            //     name: 'custom_uppercase',
            //     format: (inputs) => String(inputs.value).toUpperCase(),
            // },
            // {
            //     name: 'custom_integer',
            //     format: (inputs) => parseInt(inputs.value)
            // }
            // ],
            // ordersPage: {
            //     orderColumns: ordersPageColumns
            // },
            orderColumns: ordersPageColumns,
            positionColumns: positionsPageColumns,
            pages: [
                {id:'Holdings',
                title:'Holdings',
                tables:[{
                    id:'HoldingsTable',
                title:'',
                columns:holdingColumns,
                getData: ()=>{
                    return this.holdings()},
                changeDelegate: this._changeHoldingssDelegate
                }]
                },{id:'Closed Positions',
                title:'Closed Positions',
                tables:[{
                    id:'closedPositionsTable',
                title:'',
                columns:closedPositionsColumns,
                getData: ()=>{
                    return this.closedPositions()},
                changeDelegate: this._changeClosedPositionsDelegate
                }]
                },
                {id:'Funds',
                title:'Funds',
                tables:[{
                    id:'FundTable',
                title:'',
                columns:fundSummaryColumns,
                getData: ()=>{
                    return this.funds()},
                changeDelegate: this._changeFundsDelegate
                },
                // {
                //     id:'Cash Additional',
                // title:'Cash Additional',
                // columns:fundSummaryColumns,
                // getData: ()=>{
                //     console.log("ADDITIOANL ",this.chartUnderstoodCashAdditionalFields)
                //     return this.chartUnderstoodCashAdditionalFields},
                // changeDelegate: this._changeCashAdditionalsDelegate
                // },
                // {
                //     id:'Margin Utilized',
                // title:'Margin Utilized',
                // columns:fundSummaryColumns,
                // getData: ()=>{
                //     return this.chartUnderstoodMarginUtilized},
                // changeDelegate: this._changeMarginUtilizedDelegate
                // },
                // {
                //     id:'Margin Used',
                // title:'Margin Used',
                // columns:fundSummaryColumns,
                // getData: ()=>{
                //     return this.chartUnderstoodMarginUsed},
                // changeDelegate: this._changeMarginUsedDelegate
                // },
                // {
                //     id:'Additional Risk Limits',
                // title:'Additional Risk Limits',
                // columns:fundSummaryColumns,
                // getData: ()=>{
                //     return this.chartUnderstoodAdditionalRiskLimits},
                // changeDelegate: this._changeAdditionalRiskLimitsDelegate
                // },
                // {
                //     id:'Additional Risk Indicators',
                // title:'Additional Risk Indicators',
                // columns:fundSummaryColumns,
                // getData: ()=>{
                //     return this.chartUnderstoodAdditionalRiskIndicators},
                // changeDelegate: this._changeAdditionalRiskIndicatorsDelegate
                // },
                // {
                //     id:'Used Margin Breakkup',
                // title:'Used Margin Breakkup',
                // columns:fundSummaryColumns,
                // getData: ()=>{
                //     return this.chartUnderstoodMarginBreakup},
                // changeDelegate: this._changeMarginUsedBreakupDelegate
                // }
            ]
                },
                {id:'Exchange Msg',
                title:'Exchange Msg',
                tables:[{
                    id:'FundsTable',
                title:'',
                columns:exchangeMessages,
                getData: ()=>{
                    return this.excMessages()},
                changeDelegate: this._changeExchangeMessages
                }]
                }
            ],
            contextMenuActions: (contextMenuEvent, activePageActions) => {
                return Promise.resolve(this._bottomContextMenuItems(activePageActions));
            },
        };
    }
    async isTradable(symbol){
        if(symbol != undefined){
        const syminfo = window._symbolInfoMap[symbol]
        let isTradableResult = {};
            isTradableResult = {
                tradable:syminfo.isTradable
        }
        return Promise.resolve(isTradableResult);
    }
    return Promise.resolve(false)
    }
    async symbolInfo(symbol) {
      const syminfo = window._symbolInfoMap[symbol]
      const mintick = await this._host.getSymbolMinTick(symbol);
    //   console.log("MinTick", mintick)
      let pipSize = mintick;
    //   if(syminfo.exchange == "CDS"){
    //     pipSize = pipSize * 10000;
    //   }
    //   else{
    //     pipSize = pipSize * 100;
    //   }
      return {
        qty: { min: syminfo.qty.default,
                    max: Number.MAX_VALUE,
                    step: syminfo.qty.default,
                    default:syminfo.qty.default 
                },
        pipSize: pipSize,
        minTick: pipSize,
        description: "",
      };
    }
    currentAccount() {
        return '1';
    }

    async _getAccountsMetaInfo() {
        var aa = [{
            id: '1',
            name: getUserId(),
        },];
        this._accountsMetaInfo = aa
        return Promise.resolve(aa)
    }
    async accountsMetainfo() {
        var aa = await this._gettingAccountsMetaInfo.then((_) => {
            logMessage(_)
            return Promise.resolve(this._accountsMetaInfo)
        })
        return aa

    }
    _bottomContextMenuItems(activePageActions) {
        const separator = {
            separator: true
        };
        const sellBuyButtonsVisibility = this._host.sellBuyButtonsVisibility();
        if (activePageActions.length) {
            activePageActions.push(separator);
        }
        return activePageActions.concat([{
            text: 'Show Buy/Sell Buttons',
            action: () => {
                if (sellBuyButtonsVisibility) {
                    sellBuyButtonsVisibility.setValue(!sellBuyButtonsVisibility.value());
                }
            },
            checkable: true,
            checked: sellBuyButtonsVisibility !== null && sellBuyButtonsVisibility.value(),
        },
        {
            text: 'Trading Settings...',
            action: () => {
                this._host.showTradingProperties();
            },
        },
        ]);
    }
    _buttonDropdownItems() {
        const defaultActions = this._host.defaultDropdownMenuActions();
        return defaultActions.concat([{
            text: 'Trading Settings...',
            action: () => {
                this._host.showTradingProperties();
            },
        },]);
    }
    _updateOrderLast(order) {
        this._host.orderPartialUpdate(order.id, {
            last: order.last
        });
    }
    async _updateOrder(order) {
        this._host.orderUpdate(order);
    }
    _updatePosition(position) {
        this._host.positionUpdate(position);
    }
    _subscribeData(symbol, id, updateFunction) {
        this._quotesProvider.subscribeTtQuotes([], [symbol], (symbols) => {
            const deltaData = symbols;
            if (deltaData.s !== 'ok' && deltaData.s !== 'success') {
                return;
            }
                if (updateFunction!=undefined){
                updateFunction(deltaData.v);
                }
        }, getDatafeedSubscriptionId(id));
    }
    _unsubscribeData(id) {
        this._quotesProvider.unsubscribeQuotes(getDatafeedSubscriptionId(id));
    }
    _recalculateAMData() {

        let pl = 0;
        let opl = 0;
        let hl = 0;
        this._positions.forEach((position) => {
            pl += (position.profit) || 0;
            opl += (position.overallPl) || 0;
            // console.log("OOOOOOOPL::", pl,opl)
        });
        this._accountManagerData.overallPl = pl+opl;

        // pl = 0;
        // this._positions.forEach((position) => {
        //     pl += (position.totalPl) || 0;
        // });

        // this._accountManagerData.todayPl = pl;

        hl = 0;
        this._holdings.forEach((holding) => {
            hl += Number(holding.total);
            // console.log("PL::", hl)
        })
        // console.log("Called")
        this._accountManagerData.equityPl = hl;
        this._amChangeDelegate.fire(this._accountManagerData);
    }
}
function formatTrade(tradeData) {
    let qty = Number(tradeData.holdqty) + (tradeData.npoadqty ? Number(tradeData.npoadqty) : 0) + (tradeData.btstqty ? Number(tradeData.btstqty) : 0);
    let sqty = Number(tradeData.holdqty) + (tradeData.dpqty ? Number(tradeData.dpqty) : 0) + (tradeData.btstqty ? Number(tradeData.btstqty) : 0)
    if (!tradeData.symbol)
        tradeData.symbol = tradeData.exch_tsym[0].tsym;
    const trade = {
        id: tradeData.exch_tsym[0].token,
        // profit: parseFloat((tradeData.Ltp - tradeData.Price ) * tradeData.Holdqty).toFixed(2),
        qty: qty,
        sqty: sqty,
        exc:tradeData.exch_tsym[0].exch,
        symbol: tradeData.exch_tsym[0].exch+":"+tradeData.exch_tsym[0].tsym,
        dispSym:tradeData.exch_tsym[0].tsym,
        takeProfit: 0,
        stopLoss: 0,
        invested:Number(parseFloat((tradeData.upldprc ? Number(tradeData.upldprc) : 0) * qty).toFixed(2)),
        price: Number(tradeData.upldprc ? tradeData.upldprc : 0),
        clseprice:0,
        daypnl: 0,
        daypc: 0,
        overallpnl: 0,
        overallpc: 0,
        orderParams: tradeData,
        cprice:Number(tradeData.Ltp ? tradeData.Ltp : 0),
        currVal: 0,
        total:0,
        saleableQty:tradeData.dpqty ? tradeData.dpqty : 0
    };
    return trade;
}
function getDatafeedSubscriptionId(id) {
    return `SampleBroker-${id}`;
}

function formatRequiredOrder(orderData) {
    var _a, _b, _c;
    let tqty = orderData.exch == "MCX" ? Number(orderData.fillshares)/Number(orderData.ls) : orderData.fillshares;
    var symdata=orderData.tsym
    if (!orderData.symbol)
        orderData.symbol = orderData.exch+":"+orderData.tsym;
    const order = {
        id: orderData.norenordno,
        duration: orderData.ret,
        limitPrice: parseFloat(orderData.prc == "0.00" ? orderData.rprc : orderData.prc),
        profit: 0,
        qty: Number(orderData.exch == "MCX" ? Number(orderData.qty)/Number(orderData.ls) : orderData.qty),
        symdata:symdata,
        side: orderData.trantype == "B" ? 1 : -1,
        status: orderStatus[orderData.status],
        stopPrice: parseFloat(orderData.trgprc) || 0.00,
        symbol: orderData.exch+":"+orderData.tsym,
        type: priceTypes[orderData.prctyp],
        transType: orderData.trantype == "B" ? "BUY" : "SELL",
        execution: "",
        takeProfit: 0,
        stopLoss: 0,
        dispSym: orderData.tsym,
        updateTime: orderData.norentm ? ((_a = orderData.norentm) !== null && _a !== void 0 ? _a : "--") : "--",
        instrument: (_b = orderData.tsym) !== null && _b !== void 0 ? _b : "--",
        product: orderData.prctyp,
        quantity: orderData.exch == "MCX" ? Number(orderData.qty)/Number(orderData.ls) : orderData.qty,
        filledQty: isNaN(tqty) ? "" : tqty,
        avgPrice:orderData.avgprc == null ? "" : orderData.avgprc,
        exc: (_c = orderData.exch) !== null && _c !== void 0 ? _c : "--",
        reason:orderData.rejreason ? orderData.rejreason : orderData.status,
        orderParams: orderData,
    };
    return order;
}

function formatRequiredPosition(positionData) {
    
    const isBuy = Number(positionData.netqty) >= 0;
    const exc = positionData.exch;
    const bAvg = exc == "CDS" || exc == "BCD" ? (parseFloat(positionData.totbuyavgprc).toFixed(4)) : (parseFloat(positionData.totbuyavgprc).toFixed(2));
    const sAvg = exc == "CDS" || exc == "BCD" ? (parseFloat(positionData.totsellavgprc).toFixed(4)) : (parseFloat(positionData.totsellavgprc).toFixed(2));
    const bavg = !bAvg? 0 : bAvg;
    const savg = !sAvg? 0 : sAvg;
    const pQty = Number(positionData.netqty);
    // const profit = (bavg - sAvg) * pQty;
    const order = {
        id: positionData.s_prdt_ali+":"+exc+":"+positionData.tsym,
        symbol: exc+":"+positionData.tsym,
        qty: pQty,
        bQty:Number(positionData.daybuyqty) + Number(positionData.cfbuyqty),
        sQty:Number(positionData.daysellqty)  + Number(positionData.cfsellqty),
        netQty:Number(positionData.netqty),
        side: isBuy ? 1 : -1,
        avgPrice: Number(positionData.netavgprc),
        price: Number(positionData.netavgprc),
        dispSym: positionData.tsym,
        exc: exc !== null && exc !== void 0 ? exc : "--",
        pType: positionData.s_prdt_ali,
        pQty: pQty,
        last:0,
        totalPl: Number(positionData.rpnl),
        overallPl: 0,
        netavgprc: Number(positionData.netavgprc),
        bAvg:bavg,
        sAvg: savg,
        positionParams: positionData,
        profit:0,
        mul:positionData.mult
    };
    return order;
}

function _marketSegmentId(segment) {

    const dict = {
        "2": "NSE_FO",
        "13": "NSE_CUR",
        "1": "NSE_EQ",
        "5": "MCX_FO",
    }
    return dict[segment.toString()]
}

function getUserId() {
    const queryParams = localStorage.getItem('userid');
    return queryParams;
}