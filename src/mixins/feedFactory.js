/* eslint-disable */
import { makeApiRequest ,userid,usession} from './apiConnectionPool.js';
import { subscribeOnStream, unsubscribeFromStream ,websocketUnsubscriptionChain} from './webSocketstream.js';
// import { logMessage } from '../utils/helpers.js';
import { mynturl,myntDCUrl } from "../apiUrl.js";
import {getcprData} from "./customIndicators.js"

export var mastersJson;

// await makeApiRequest('https://be.mynt.in/Masters', '');
// export var json = await makeApiRequest('https://be.mynt.in/Masters','');

// var userid = localStorage.getItem('userid');
// var usession = localStorage.getItem('usession');
// var actid = localStorage.getItem('actid');

const lastBarsCache = new Map();
window._symbolInfoMap = {}

const configurationData = {
    supported_resolutions: ["1", "3", "5", "10", "15", "30", "45", "60", "120", "180", "240", "1D", "1W", "1M"],
    exchanges: [
                {"value": "ALL","name":"All exchange"},
                {"value": "NSE","name": "NSE"},
                {"value": "BSE","name": "BSE",},
                {"value": "MCX","name": "MCX",}
            ],
    symbols_types: [
        { name: "All", value: "" },
        { name: "Equity", value: "STOCK" },
        { name: "F&O", value: "F&O" },
        { name: "Currency", value: "CURR" },
        { name: "Commodity", value: "COMM" },
    ],
    "supports_search": true,
    "supports_group_request": false,
    "supports_marks": false,
    "supports_timescale_marks": true,
    "supports_time": true
};

export default {
    async onReady(callback){
        // console.log("[onReady] Initiated ")
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          await fetch("https://be.mynt.in/Masters", requestOptions)
            .then(response => response.json())
            .then(result => {
                mastersJson = result
                // console.log("API RES:",result)
            })
            .catch(error => console.log('error', error));
        setTimeout(() => callback(configurationData));
    },
    async searchSymbols(userInput, exchange, symbolType, onResultReadyCallback) {
        const symbols = await getAllSymbols(userInput, exchange, symbolType);
        onResultReadyCallback(symbols);
    },

    async getQuotes(symbols, onDataCallback, onErrorCallback) {
        var symbolInfos = {}
        symbols.forEach(symbol => {
            function resolvedata(symbolInfo) {
                symbolInfos[symbol] = symbolInfo
                if (Object.keys(symbolInfos).length == symbols.length) {
                    subscribeOnStream(Object.values(symbolInfos),
                        undefined,
                        onDataCallback,
                        Date.now().toString(),
                        undefined,
                        undefined, 'single-quotes')
                }
            }
            this.resolveSymbol(symbol, resolvedata, onErrorCallback)
        });
    },

    async subscribeQuotes(symbols, fastSymbols, onRealtimeCallback, listenerGuid) {
        if (fastSymbols == null) {
            fastSymbols = symbols
        }
        var symbolInfos = {}
        symbols.forEach(symbol => {
            function resolvedata(symbolInfo) {
                symbolInfos[symbol] = symbolInfo
                if (Object.keys(symbolInfos).length == symbols.length) {
                    subscribeOnStream(Object.values(symbolInfos),
                        undefined,
                        onRealtimeCallback,
                        listenerGuid,
                        undefined,
                        undefined, 'quotes')
                }
            }
            this.resolveSymbol(symbol, resolvedata,(res)=>{
                logMessage(`resolveSymbol error : ${res} `)
            })
        });
    },
    async unsubscribeQuotes(listenerGUID) {
        // console.log("[chain] unsubscribeQuotes 1:",listenerGUID)
        unsubscribeFromStream(listenerGUID)
    },

    subscribeQuotesChain(tokens,onRealtimeCallback,listenerGuid ){
        var promises = tokens.map((token)=> {
            // console.log("=========== : ",token)
                return Promise.resolve({
                    name:`${token.exch}:${token.tsym.toUpperCase()}` ,
                    exchange:token.exch,
                    token:token.token
                })   
            
        })
        Promise.all(promises).then((SymbolInfo)=>{
            subscribeOnStream(SymbolInfo,
                undefined,
                onRealtimeCallback,
                listenerGuid,
                undefined,
                undefined,'quotes')
        })
            
    },
    unsubscribeQuotesChain(symbolList) {
        // console.log("[chain] unsubscribeQuotes 2:",listenerGuid)
        websocketUnsubscriptionChain(symbolList)
    },
    subscribeQuotesScreener(tokens,onRealtimeCallback,listenerGuid ){
        var promises = tokens.map((token)=> {
            // console.log("=========== : ",token)
                return Promise.resolve({
                    name:`${token.exch}:${token.tsym.toUpperCase()}` ,
                    exchange:token.exch,
                    token:token.token
                })   
            
        })
        Promise.all(promises).then((SymbolInfo)=>{
            subscribeOnStream(SymbolInfo,
                undefined,
                onRealtimeCallback,
                listenerGuid,
                undefined,
                undefined,'quotes')
        })
            
    },
    unsubscribeQuotesScreener(symbolList) {
        // console.log("[chain] unsubscribeQuotes 2:",listenerGuid)
        websocketUnsubscriptionChain(symbolList)
    },
    async resolveSymbol(symbolName, onSymbolResolvedCallback, ErrorCallback) {
        let oisymbol=false
        if (_symbolInfoMap[symbolName] != undefined) {
            setTimeout(() => onSymbolResolvedCallback(_symbolInfoMap[symbolName]));
            return Promise.resolve(_symbolInfoMap[symbolName])
        }
        var symbolItem;
        if(symbolName.includes("$OISYMBOL")){
            symbolName=symbolName.replace("$OISYMBOL", "")
            oisymbol=true
        }
        let symbols = mastersJson[`${symbolName.toUpperCase()}`];
        symbolItem = symbols
        if (symbolItem == undefined) {
            ErrorCallback('cannot resolve symbol');
            return Promise.reject('cannot resolve symbol');
        }
        if(oisymbol){
            symbolName=symbolName+"$OISYMBOL"
        }

        var ex = symbolName.split(":")[0];
        var typ;
        if (ex == "NSE" || ex == "BSE") {
            typ = "stock"
        }
        else if (ex == "NFO") {
            typ = "index"
        }

        const symbolInfo = {
            token: symbolItem[0],
            ticker: symbolName,
            name: symbolName,
            base_name: symbolItem[4] == "IDX" ? symbolItem[1] : symbolName.split(":")[1],
            pro_name: symbolName,
            full_name: symbolName,
            description: symbolName,
            tick_size: String(symbolItem[2]),
            type: symbolName.includes("FUT") ? "futures" : symbolItem[4] == "IDX" ? "index" : symbolName.includes("NSE" || "BSE") ? "stock" : "undefined",
            session: symbolName.split(":")[0] == "MCX" ? "0900-2330" : symbolName.split(":")[0] == "CDS" ? "0900-1700" : "0915-1530",
            timezone: "Asia/Kolkata",
            exchange: symbolName.split(":")[0],
            minmov: symbolName.split(":")[0] == "CDS" ? symbolItem[2] * 10000 : symbolItem[2] * 100,
            pricescale: symbolName.split(":")[0] == "CDS" ? 10000 : 100,
            has_intraday: true,
            has_daily: true,
            // has_daily: symbolItem[4] == "IDX" ? false : true,
            visible_plots_set: symbolItem[4] == "IDX" ? "ohlc" : "ohlcv",
            has_weekly_and_monthly: false,
            lot_size: String(symbolItem[3]),
            isTradable: symbolItem[4] != "IDX" ? true : false,
            qty: {
                step: String(symbolName.split(":")[0] == "MCX" ? 1 : symbolItem[3]),
                default: String(symbolName.split(":")[0] == "MCX" ? 1 : symbolItem[3]),
            },
            supported_resolutions: ["1", "3", "5", "10", "15", "30", "45", "60", "120", "180", "240", "1D", "1W", "1M"],
            volume_precision: 1,
            data_status: 'streaming',
            intraday_multipliers: ["1", "15", "45", "60" ],
            daily_multipliers:["1"],
            weekly_multipliers:["1"],
            monthly_multipliers:["1"],
            supports_timescale_marks:true
        };
        _symbolInfoMap[symbolName] = symbolInfo
        setTimeout(() => onSymbolResolvedCallback(symbolInfo));
        return Promise.resolve(_symbolInfoMap[symbolName])
    },
    subscribeDepth(symbolInfo, callback) {
        this.resolveSymbol(symbolInfo, (response) => {
            subscribeOnStream([response],
                undefined,
                callback,
                "DOM" + Date.now().toString(),
                undefined,
                undefined, 'depth')
        },(res)=>{
            logMessage(`resolveSymbol error : ${res} `)
        })
    },
    unsubscribeDepth(subscriberUID) {
        unsubscribeFromStream(subscriberUID)
    },
    async getBars(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) {
        let oisymbol=false
        // console.log("DID YOU IO resolution :",symbolInfo,resolution,periodParams)
        if(symbolInfo.name.includes("$OISYMBOL")){
            oisymbol=true
        }
        let requestOptions
        var data11
        // let consym = "";
        if(resolution=="1D" || resolution=="1W" || resolution=="1M"){
            // if(symbolInfo.isTradable != true){
            //     let symnamearr = symbolInfo.base_name.split(" ")
            //     for (let i in symnamearr){
            //         let firstletter = symnamearr[i].charAt(0) + symnamearr[i].substring(1).toLowerCase()
            //         consym += firstletter + " "
            //     }
            //     consym = symbolInfo['exchange']+":"+consym.substring(0, consym.length-1)
            // }
            // requestOptions = `jData={"uid":"${userid}","exch":"${symbolInfo['exchange']}","token":"${symbolInfo['base_name']}","st":"${periodParams.from - 320000}","et":"${periodParams.to}","intrv":"${resolution}"}&jKey=${usession}`;
            // requestOptions = JSON.stringify({"sym":consym,"from":periodParams.from,"to":periodParams.to})
            let symName;
            // console.log("sym , " ,symbolInfo.type)
            if(symbolInfo.type == 'index'){
                symName = symbolInfo.exchange+":"+symbolInfo.base_name
            }
            else{
                symName = symbolInfo.name;
            }
            symName = symName.includes("$OISYMBOL")?symName.replace("$OISYMBOL",""):symName;
            symName = symName.includes(" ")?symName.replace(" ","%20"):symName;
            symName = symName.includes("&")?symName.replace("&","%26"):symName;
            requestOptions = JSON.stringify({"sym":symName,"from":periodParams.from,"to":periodParams.to})
            data11 = await makeApiRequest(`${myntDCUrl}getdata`, requestOptions);
            if(data11.length>0){
                 data11 = await data11.map(JSON.parse);
                // data11=JSON.parse(data11)
                // console.log("data11 : ",data11)
            }else{
                // console.log("data11 :::::::: ",data11!=[])
                onHistoryCallback([], { noData: true });
                return;
            }
            
        }else{
            let symName;
            symName = symbolInfo['base_name'].includes("$OISYMBOL")?symbolInfo['base_name'].replace("$OISYMBOL",""):symbolInfo['base_name'];
            symName = symName.includes("&")?symName.replace("&","%26"):symName;
            requestOptions = `jData={"uid":"${userid}","exch":"${symbolInfo['exchange']}","token":"${symName}","st":"${periodParams.from - 320000}","et":"${periodParams.to}","intrv":"${resolution}"}&jKey=${usession}`;
            data11 = await makeApiRequest(`${mynturl}TPSeries`, requestOptions);
        }
        try {
            if (data11.stat == 'Not_Ok' || data11 == []) {
                onHistoryCallback([], { noData: true });
                return;
            }
            let data = data11.map(d => {
                return { time: parseFloat(d.ssboe), open: parseFloat(d.into), high: parseFloat(d.inth), low: parseFloat(d.intl), close: parseFloat(d.intc), volume: parseFloat(d.intv), oi: parseFloat(d.oi) }
            });
            data = data.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
            // console.log("[bar] data : ",data)
            var bars = [];
            if(oisymbol){
                data.forEach(bar => {
                    bars = [...bars, {
                        time: bar.time * 1000,
                        low: bar.low,
                        high: bar.high,
                        open: bar.open,
                        volume: bar.volume,
                        close: bar.oi,
                        oi:bar.oi
                    }];
                });
                // console.log("bars :: ",bars)
            }else{
                data.forEach(bar => {
                    bars = [...bars, {
                        time: bar.time * 1000,
                        low: bar.low,
                        high: bar.high,
                        open: bar.open,
                        volume: bar.volume,
                        close: bar.close,
                        oi:bar.oi
                    }];
                });
            }


            // console.log("[bar] data : ",bars)
            if (periodParams.firstDataRequest) {
                lastBarsCache.set(symbolInfo.name, {
                    ...bars[bars.length - 1],
                });
            }
            await getcprData(symbolInfo,periodParams);
            onHistoryCallback(bars, { noData: false });
        } catch (error) {
            onErrorCallback(error);
        }
    },
    async getTimescaleMarks(symbolInfo, from, to, onDataCallback, resolution){
        // console.log("GET MARKS::", symbolInfo,from, to, onDataCallback, resolution);
        let symbnam="";
        if(symbolInfo.base_name.includes("-")){
            symbnam = symbolInfo.base_name.split("-")[0]
        }
        else{
            symbnam=symbolInfo.base_name
        }
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
          };
          
          await fetch(`https://be.mynt.in/CorporateActions?symbol=${symbnam}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // const res = JSON.parse(result)
                if(result.data !="symbol not found"){
                // console.log("API res", result, typeof(result))
                let resca = [];
                for(let i=0; i<result.data.length;i++){
                    resca.push({
                        id:result.data[i]['time'],
                        time:result.data[i]['time'],
                        color:"red",
                        label:"E",
                        tooltip:result.data[i]['tooltip'],
                    })
                }
                // console.log("API RES", resca)
                onDataCallback(resca)
            }
            })
            .catch(error => console.log('error', error));
    },
    subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) {
        // console.log("did call me :: ",symbolInfo,resolution)
        subscribeOnStream(
            [symbolInfo],
            resolution,
            onRealtimeCallback,
            subscriberUID,
            onResetCacheNeededCallback,
            lastBarsCache.get(symbolInfo.name), 'bar'
        );
    },
    unsubscribeBars(subscriberUID) {
        unsubscribeFromStream(subscriberUID);
    },

    subscribeTtQuotes(symbols, fastSymbols, onRealtimeCallback, listenerGuid) {

        if (fastSymbols == null) {
            fastSymbols = symbols
        }

        let allSym = [...new Set(fastSymbols.concat(symbols))]
        var symbolInfos = {}
        allSym.forEach(symbol => {
            this.resolveSymbol(symbol.symbol != undefined ? symbol.symbol : symbol, (symbolInfo) => {
                symbolInfos[symbol] = symbolInfo
                if (Object.keys(symbolInfos).length == allSym.length) {
                    subscribeOnStream(Object.values(symbolInfos),
                        undefined,
                        onRealtimeCallback,
                        listenerGuid,
                        undefined,
                        undefined, 'tt-quotes')
                }
            },(res)=>{
                logMessage(`resolveSymbol error : ${res} `)
            })
        });
    },
}

async function getAllSymbols(searchInput, exchange, symbolType) {
    var exch=""
    var filterList=[]
    // console.log("[search] getAllSymbols :",searchInput, exchange, symbolType)
    if (searchInput.includes(":")) {
        searchInput = searchInput.split(":")[1];
    }
    switch (exchange) {
        case "NSE":
            switch (symbolType) {
                case "STOCK":
                    exch="NSE"
                    filterList=["NSE"]
                    break;
                case "F&O":
                    exch="NFO"
                    filterList=["NFO"]
                    break;
                case "CURR":
                    exch="CDS"
                    filterList=["CDS"]
                    break;
                case "COMM":
                    exch="NCOM"
                    filterList=["NCOM"]
                    break;
                default:
                    exch=""
                    filterList=["NSE","NFO","CDS","NCOM"]
                    break;
            }
            break;

        case "BSE":
            switch (symbolType) {
                case "STOCK":
                    exch="BSE"
                    filterList=["BSE"]
                    break;
                case "F&O":
                    exch="BFO"
                    filterList=["BFO"]
                    break;
                case "CURR":
                    exch="BCD"
                    filterList=["BCD"]
                    break;
                case "COMM":
                    exch="BCOM"
                    filterList=["BCOM"]
                    break;
                default:
                    exch=""
                    filterList=["BSE","BFO","BCD","BCOM"]
                    break;
            }
            break;

        case "MCX":
            switch (symbolType) {
                case "STOCK":
                    filterList=[]
                    break;
                case "F&O":
                    filterList=[]
                    break;
                case "CURR":
                    filterList=[]
                    break;
                case "COMM":
                    filterList=["MCX"]
                    break;
                default:
                    exch=""
                    filterList=["MCX"]
                    break;
            }
            exch="MCX"
            break;
            case "ALL":
                switch (symbolType) {
                    case "STOCK":
                        filterList=["NSE","BSE"]
                        break;
                    case "F&O":
                        filterList=["NFO","BFO"]
                        break;
                    case "CURR":
                        filterList=["CDS","BCD"]
                        break;
                    case "COMM":
                        filterList=["NCOM","BCOM","MCX"]
                        break;
                    default:
                        filterList=["NSE","NFO","CDS","NCOM","BSE","BFO","BCD","BCOM","MCX"]
                        break;
                }
                exch=""
                break;
        default:
              exch=""  
            break;
    }
    // console.log("exch",exch,typeof exch,filterList)
    var request = `jData={"uid":"${userid}","stext":"${searchInput}"}&jKey=${usession}`;
    if (exch) {
        request = `jData={"uid":"${userid}","stext":"${searchInput}","exch":"${exch}"}&jKey=${usession}`;
    }
    const allSymbols = await makeApiRequest(mynturl+"SearchScrip", request);
    if (allSymbols.stat == "Not_Ok") {
        return []
    }
    let searchSymbols = allSymbols.values.map(value => {
        let scriptDescription = ""
        let symboltype = value.instname == "OPTIDX" ? "Option" : value.instname == "FUTIDX" ? "Future" : value.instname == "OPTSTK" ? "Option" : value.instname == "FUTSTK" ? "Future" : value.instname == "COM" ? "Commodity" : value.instname == "FUTCUR" ? "Future" : value.instname == "OPTCUR" ? "Option" : value.instname == "UNDIND" ? "Index" : value.instname == "FUTCOM" ? "Future" : value.instname == "OPTFUT" ? "Option" : "Stock";
        if (value.instname == "OPTIDX" || value.instname == "OPTSTK" || value.instname == "OPTCUR" || value.instname == "OPTFUT") {
            let matchval = value.tsym.match(/(\d{1,2})[a-zA-Z]{3}(\d{2,4})?/g)
            if(matchval){
                let scriptList = value.tsym.split(matchval[0])
                scriptDescription = `${scriptList[0]}  ${matchval[0].replace(/(..)(...)(..)/, "$1-$2-$3")}  ${scriptList[1].substring(0, 1)}E  ${scriptList[1].substring(1)}  ${value.hasOwnProperty('weekly') ? `(week ${value.weekly.substring(1)})` : ""}`;
            }
        }
        if (value.instname == "FUTIDX" || value.instname == "FUTSTK" || value.instname == "FUTCUR" || value.instname == "FUTCOM") {
            let matchval = value.tsym.match(/(\d{1,2})[a-zA-Z]{3}(\d{2,4})?/g)
            if(matchval){
                let scriptList = value.tsym.split(matchval[0])
                scriptDescription = `${scriptList[0]}  ${matchval[0].replace(/(..)(...)(..)/, "$1-$2-$3")}  ${scriptList[1].substring(0, 1) == "F" ? "FUT" : "FUT"}  ${scriptList[1].substring(1)}`;
            }
        }
        return {
            exchanges: value.exch,
            symbols_types: symboltype,
            symbol: value.exch + ":" + value.tsym.toUpperCase(),
            full_name: value.cname,
            description: scriptDescription ? scriptDescription : value.cname,
            exchange: value.exch,
            ticker: value.exch + ":" + value.tsym.toUpperCase(),
            type: symboltype,
        };
    }).filter((result)=>{
        return filterList.includes(result.exchanges)
    })
    // console.log("searchSymbols :",searchSymbols)
    return searchSymbols

}


