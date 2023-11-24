/* eslint-disable no-extra-boolean-cast */
// import Vue from "vue";
// import Cryptojs from "crypto-js";
// Vue.use(Cryptojs);
import {webSocketURL,source} from '../apiUrl.js'
import { logMessage } from '../utils/helpers.js'
import { userid,usession } from '../mixins/apiConnectionPool'
import { BrokerApiIns } from "../mixins/brokerapis.js";
const moment = require('moment');
var connectionStatus = false
const channelToSubscription = new Map();
const singleQuoteMap = new Map();
const guidToSubscription = new Map();

var socketPreResponse = new Map()
var socket=null
// const prelog = []

const tokenid = `${userid}_${source}`
const userId = userid
export var titleIndex={
    indexLP:"",
    changePer:""
}
var hb = {
    t: "h",
};
    // do some stuff
    window.setInterval(function(){
        send(JSON.stringify(hb))
    }, 5000);


function establishSocketConnection(){
    socket = new WebSocket(webSocketURL);
    socket.onopen = function () {
        connectionRequest(tokenid, userId)
    }
    socket.onmessage = function (msg) {
        var responseFeed = JSON.parse(msg.data);
    
        if (!!responseFeed.t && responseFeed.t == 'ck' && responseFeed.s == 'OK') {
            connectionStatus = true
            
        } else if (!!responseFeed.t && responseFeed.t == 'ck' && responseFeed.s == 'NOT_OK') {
            logMessage("!==========[Socket Session Invalid]============!")
        }
        if (responseFeed.t) {
            ProcessPacketString(responseFeed)
        }
    
    }
    socket.onclose = function (event) {
        socket.close()
        logMessage(`[socket] onclose:: ${event}`, 1);
        // var params = {
        //     title: 'Alert',
        //     body: 'Websocket have been disconnected, Please refresh the Webpage',
        //     callback: (res) => {
        //         if (res) {
        //             logMessage(res)
        //             location.reload()
        //         }
        //     },
        // };
        // window.tvWidget.showNoticeDialog(params);
    };
    socket.onerror = function (event) {
        logMessage(`[socket] Error: ${event} type ${event.type}`, 2);
        socket.onclose()
    };
}
establishSocketConnection()



async function connectionRequest(tokenid, userId) {
    var initCon = {
        susertoken: usession,
        t: "c",
        actid: userId,
        uid: userId,
        source: source
    }
    var ordcon = {
        t: "o",
        actid:userId,
    }
    send(JSON.stringify(initCon));
    setTimeout(() => {
        send(JSON.stringify(ordcon));
      }, 2000);
    
}

async function send(msg) {
    if (!!socket.readyState && socket.readyState == 1) {
        try {
            socket.send(msg);
        } catch (err) {
            console.error("socket send error : ",err);
        }
    } else if (!!socket.readyState && socket.readyState == 0) {
        setTimeout(() => { socket.send(msg); }, 900);

    }else if (!!socket.readyState && socket.readyState == 3) {
        establishSocketConnection()
        setTimeout(() => {socket.send(msg)}, 1000);
    }else {
        console.log("[socket send] else:: ",socket)
        logMessage("[socket send] socket connection is undefined", 2)
    }
}

async function establishConnection(payload) {
    if (connectionStatus == false) {
        await connectionRequest(tokenid, userId);
    }
    await send(JSON.stringify(payload));
}


export function closeConnection() {
    socket.close()
    channelToSubscription.clear();
    singleQuoteMap.clear();
    guidToSubscription.clear();
}


export async function websocketSubscription(payload) {
    if (connectionStatus) {
        var channel = ''; //BSE|1#NSE|26017#NSE|26040#NSE|26009#NSE|26000#

        channel += `${payload}`

        if (channel != '' && !!channel) {
            var tempChannel = channel.substring(0, channel.length - 1)
            var tempUniqueArray = tempChannel.split('#')
            var uniqueChannel = ''
            const uniqueArray = new Set(tempUniqueArray);
            uniqueArray.forEach(element => {
                uniqueChannel += element + '#'
            })
            let json = {
                k: uniqueChannel.substring(0, uniqueChannel.length - 1),
                t: 'd'
            };
            await establishConnection(json);
        }
    }
}

export async function websocketUnsubscriptionChain(payload) {
    if (connectionStatus) {
        var channel = '';

        channel += `${payload}`

        if (channel != '' && !!channel) {
            var tempChannel = channel.substring(0, channel.length - 1)
            var tempUniqueArray = tempChannel.split('#')
            var uniqueChannel = ''
            const uniqueArray = new Set(tempUniqueArray);
            uniqueArray.forEach(element => {
                uniqueChannel += element + '#'
            })
            let json = {
                k: uniqueChannel.substring(0, uniqueChannel.length - 1),
                t: 'ud'
            };
            await establishConnection(json);
        }
    }
}
export function subscribeOnStream(
    symbols,
    resolution,
    onRealtimeCallback,
    subscribeUID,
    onResetCacheNeededCallback,
    lastDailyBar,
    type) {

    if (type == 'depth') {
        // console.log("[depth] subscribeOnStream : ", symbols, type, subscribeUID)
        _subscribeDepth(symbols[0], onRealtimeCallback, subscribeUID)
    }
    if (type == 'quotes' || type == 'tt-quotes') {
        _subscribeQuotes(symbols, onRealtimeCallback, subscribeUID, type)

    } else if (type == 'bar') {
      
        _subscribeBars(symbols, onRealtimeCallback, subscribeUID, lastDailyBar, resolution)
    } else if (type == 'single-quotes') {
        _subscribeSingleQuotes(symbols, onRealtimeCallback, subscribeUID)
    }
}

export function unsubscribeFromStream(listenerGuid) {
    // console.log("[unsubscribe] listenerGuid : ",listenerGuid,guidToSubscription)
    
    let channelString = guidToSubscription.get(listenerGuid);
    let subscriptionItem = channelToSubscription.get(channelString)
    if (subscriptionItem) {
        subscriptionItem.handlers = subscriptionItem.handlers.filter(function (handler) {
            return handler.id != listenerGuid;
        })
        if (typeof subscriptionItem.handlers !== undefined && subscriptionItem.handlers.length == 0) {
            websocketSubscription(channelString)
            channelToSubscription.delete(channelString)
        }
    }
}

export function unsubscribeQuotesfromStream(listenerGuid) {
    // console.log("[unsubscribe] listenerGuid : ",listenerGuid,guidToSubscription)
    
    let channelString = guidToSubscription.get(listenerGuid);
    let subscriptionItem = channelToSubscription.get(channelString)
    if (subscriptionItem) {
        subscriptionItem.handlers = subscriptionItem.handlers.filter(function (handler) {
            return handler.id != listenerGuid;
        })
        if (typeof subscriptionItem.handlers !== undefined && subscriptionItem.handlers.length == 0) {
            websocketSubscription(channelString)
            channelToSubscription.delete(channelString)
        }
    }
}


function _subscribeQuotes(symbols, onRealtimeCallback, subscribeUID, type) {
    symbols.forEach(function set(symbol) {
        let channelString = `${symbol.exchange}|${symbol.token}#`
        _setChannelMap(symbol, channelString, onRealtimeCallback, subscribeUID, type)
        websocketSubscription(channelString)
    })
}

function _subscribeDepth(symbol, onRealtimeCallback, subscribeUID) {
    var channelString = `${symbol.exchange}|${symbol.token}#`
    // console.log("[depth] _subscribeDepth : ", channelString, symbol,)
    _setChannelMap(symbol, channelString, onRealtimeCallback, subscribeUID, 'depth')
    websocketSubscription(channelString)
}

function _subscribeBars(symbols, onRealtimeCallback, subscribeUID, lastDailyBar, resolution) {
    // console.log("bar called  :: ",symbols,lastDailyBar,resolution)//includes("$OISYMBOL")
    symbols.forEach(function set(symbol) {
        let type="bar"
        let channelString = `${symbol.exchange}|${symbol.token}#`
        if(symbol.name.includes("$OISYMBOL")){
            type="oisymbol"
        }

        _setChannelMap(symbol, channelString, onRealtimeCallback, subscribeUID, type, resolution, lastDailyBar)
        websocketSubscription(channelString)
    })
}
function _subscribeSingleQuotes(symbols, onRealtimeCallback, subscribeUID) {
    symbols.forEach(function set(symbol) {
        let channelString = `${symbol.exchange}|${symbol.token}#`
        let existing = singleQuoteMap.get(subscribeUID)
        if (existing) {
            existing[`${symbol.exchange}|${symbol.token}#`] = {
                quote: {}
            }
        } else {
            singleQuoteMap.set(subscribeUID, new Object())
            singleQuoteMap.get(subscribeUID)[`${symbol.exchange}|${symbol.token}#`] = {
                quote: {},
                symbol: symbol.name
            }
        }
        _setChannelMap(symbol, channelString, onRealtimeCallback, subscribeUID, 'single-quotes')
        websocketSubscription(channelString)
    })

}

function _setChannelMap(symbol, channelString, onRealtimeCallback, subscribeUID, type, resolution, lastDailyBar) {
    let subscriptionItem = channelToSubscription.get(channelString);
    let handler = {
        id: subscribeUID,
        callback: onRealtimeCallback,
    };
    if (subscriptionItem) {
        var index = subscriptionItem.handlers.findIndex(ob => {
            return ob.id == subscribeUID
        })
        if (index == -1) {
            subscriptionItem.handlers.push({
                handler: handler,
                type: type,
                resolution: resolution,
                lastDailyBar: lastDailyBar,
                symbol: symbol.name,
                id: subscribeUID
            });
        } else {
            subscriptionItem.handlers[index] = {
                handler: handler,
                type: type,
                resolution: resolution,
                lastDailyBar: lastDailyBar,
                symbol: symbol.name,
                id: subscribeUID
            }
        }
    } else {
        subscriptionItem = {
            handlers: [{
                handler: handler,
                type: type,
                resolution: resolution,
                lastDailyBar: lastDailyBar,
                symbol: symbol.name,
                id: subscribeUID
            }],
        };
        channelToSubscription.set(channelString, subscriptionItem);
    }
    guidToSubscription.set(subscribeUID, channelString)
    if (!guidToSubscription.has(subscribeUID)) {
        console.error("guid fail")
    }
}

function ProcessPacketString(responseFeed) {
    try {
      if (responseFeed.t == "am" && responseFeed.dmsg) {
        // console.log("Alert Triggered")
        var params = {
            title: 'Alert',
            body: responseFeed.dmsg,
            callback: (res) => {
                if (res) {
                    logMessage(res)
                }
            },
        };
        window.tvWidget.showNoticeDialog(params);
      }
      else if (responseFeed.t == "om"){
        // if(responseFeed.norenordno == placedOrder[responseFeed.norenordno])
        if(responseFeed.status == "COMPLETE"){
        BrokerApiIns._host.showNotification(`Order ${responseFeed.tsym} is ${responseFeed.status}`,`${responseFeed.fillshares} ${responseFeed.trantype == "B" ? "BUY" : "SELL"} for ${responseFeed.tsym} is ${responseFeed.status}`,responseFeed.status == "COMPLETE" ? 1 : 0)
        BrokerApiIns._host.currentAccountUpdate();
        }
        else if(responseFeed.status == "REJECTED"){
            BrokerApiIns._host.showNotification(`Order ${responseFeed.tsym} is ${responseFeed.status}`,`${responseFeed.trantype == "B" ? "BUY" : "SELL"} for ${responseFeed.tsym} is ${responseFeed.status}`,responseFeed.status == "COMPLETE" ? 1 : 0)
            BrokerApiIns._host.currentAccountUpdate();
        }
      }
        else if (responseFeed.t === "dk") {

            var depth = {
                snapshot: true,
                asks: [
                    { price: parseFloat(responseFeed["sp1"]) ? parseFloat(responseFeed["sp1"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["sq1"]) ? parseInt(responseFeed["sq1"]) : 0 },
                    { price: parseFloat(responseFeed["sp2"]) ? parseFloat(responseFeed["sp2"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["sq2"]) ? parseInt(responseFeed["sq2"]) : 0 },
                    { price: parseFloat(responseFeed["sp3"]) ? parseFloat(responseFeed["sp3"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["sq3"]) ? parseInt(responseFeed["sq3"]) : 0 },
                    { price: parseFloat(responseFeed["sp4"]) ? parseFloat(responseFeed["sp4"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["sq4"]) ? parseInt(responseFeed["sq4"]) : 0 },
                    { price: parseFloat(responseFeed["sp5"]) ? parseFloat(responseFeed["sp5"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["sq5"]) ? parseInt(responseFeed["sq5"]) : 0 }
                ],
                bids: [
                    { price: parseFloat(responseFeed["bp5"]) ? parseFloat(responseFeed["bp5"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["bq5"]) ? parseInt(responseFeed["bq5"]) : 0 },
                    { price: parseFloat(responseFeed["bp4"]) ? parseFloat(responseFeed["bp4"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["bq4"]) ? parseInt(responseFeed["bq4"]) : 0 },
                    { price: parseFloat(responseFeed["bp3"]) ? parseFloat(responseFeed["bp3"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["bq3"]) ? parseInt(responseFeed["bq3"]) : 0 },
                    { price: parseFloat(responseFeed["bp2"]) ? parseFloat(responseFeed["bp2"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["bq2"]) ? parseInt(responseFeed["bq2"]) : 0 },
                    { price: parseFloat(responseFeed["bp1"]) ? parseFloat(responseFeed["bp1"]) : parseFloat(responseFeed["lp"]), volume: parseInt(responseFeed["bq1"]) ? parseInt(responseFeed["bq1"]) : 0 }
                ]
            }
            var tradeTime
            let preQuote = {
                ch: parseFloat(responseFeed["lp"]) ? (parseFloat(responseFeed["lp"]) - parseFloat(responseFeed["c"])) : 0,
                chp: parseFloat(responseFeed["pc"]) ? parseFloat(responseFeed["pc"]) : 0,
                lp: responseFeed["lp"] ? parseFloat(responseFeed["lp"]) : 0,
                open_price: responseFeed["o"] ? parseFloat(responseFeed["o"]) : 0,
                high_price: responseFeed["h"] ? parseFloat(responseFeed["h"]) : 0,
                low_price: responseFeed["l"] ? parseFloat(responseFeed["l"]) : 0,
                prev_close_price: responseFeed["c"] ? parseFloat(responseFeed["c"]) : 0,
                volume: responseFeed["v"] ? parseInt(responseFeed["v"]) : 0,
                firstVolume: responseFeed["v"] ? parseInt(responseFeed["v"]) : 0,
                token: responseFeed["tk"],
                exchange: responseFeed["e"],
                market_segment_id: responseFeed["e"],
                description: responseFeed["ts"],
                short_name: responseFeed["ts"],
                oi:  responseFeed["oi"]?responseFeed["oi"]:0,
                toi: responseFeed["toi"]?responseFeed["toi"]:0,
                poi: responseFeed["poi"]?responseFeed["poi"]:0,
                ask: parseFloat(responseFeed["sp1"]) ? parseFloat(responseFeed["sp1"]) : parseFloat(responseFeed["lp"]),
                ask_qty: parseInt(responseFeed["sq1"]) ? parseInt(responseFeed["sq1"]) : 0,
                bid: parseFloat(responseFeed["bp1"]) ? parseFloat(responseFeed["bp1"]) : parseFloat(responseFeed["lp"]),
                bid_qty: parseInt(responseFeed["bq1"]) ? parseInt(responseFeed["bq1"]) : 0,
                depth: depth
            }

            tradeTime = Number(responseFeed["ft"]) * 1000
            if (!socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`)) {
                socketPreResponse.set(`${responseFeed["e"]}|${responseFeed["tk"]}#`, preQuote)
            }

        }
        else if (responseFeed.t === "df") {

            tradeTime = Number(responseFeed["ft"]) * 1000
            if ("lp" in responseFeed) {
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp = responseFeed["lp"];
            }
            if ("o" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).open_price = parseFloat(responseFeed["o"]);
            if ("h" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).high_price = parseFloat(responseFeed["h"]);
            if ("l" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).low_price = parseFloat(responseFeed["l"]);
            if ("c" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).prev_close_price = parseFloat(responseFeed["c"]);
            if ("v" in responseFeed) {
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).volume += parseInt(responseFeed["v"]) - Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).firstVolume);
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).firstVolume = parseInt(responseFeed['v'])
                // console.log(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).short_name,"Volume",socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).volume,"first volume",socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).firstVolume)
            }
            if ("pc" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).chp = parseFloat(responseFeed["pc"])
            
            if ("oi" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi = parseFloat(responseFeed["oi"])
            if ("toi" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).toi = parseFloat(responseFeed["toi"])
            if ("poi" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).poi = parseFloat(responseFeed["poi"])

            socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).ch = (socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp) - (socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).prev_close_price)

            if ("sp1" in responseFeed) {
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[0].price = parseFloat(responseFeed["sp1"]);
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).ask = parseFloat(responseFeed["sp1"]);
            }
            if ("sq1" in responseFeed) {
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[0].volume = parseInt(responseFeed["sq1"]);
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).ask_qty = parseInt(responseFeed["sq1"]);
            }
            if ("sp2" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[1].price = parseFloat(responseFeed["sp2"]);
            if ("sq2" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[1].volume = parseInt(responseFeed["sq2"]);
            if ("sp3" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[2].price = parseFloat(responseFeed["sp3"]);
            if ("sq3" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[2].volume = parseInt(responseFeed["sq3"]);
            if ("sp4" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[3].price = parseFloat(responseFeed["sp4"]);
            if ("sq4" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[3].volume = parseInt(responseFeed["sq4"]);
            if ("sp5" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[4].price = parseFloat(responseFeed["sp5"]);
            if ("sq5" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks[4].volume = parseInt(responseFeed["sq5"]);

            if ("bp1" in responseFeed) {
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[4].price = parseFloat(responseFeed["bp1"]);
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).bid = parseFloat(responseFeed["bp1"]);
            }
            if ("bq1" in responseFeed) {
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[4].volume = parseInt(responseFeed["bq1"]);
                socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).bid_qty = parseInt(responseFeed["bq1"]);
            }
            if ("bp2" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[3].price = parseFloat(responseFeed["bp2"]);
            if ("bq2" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[3].volume = parseInt(responseFeed["bq2"]);
            if ("bp3" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[2].price = parseFloat(responseFeed["bp3"]);
            if ("bq3" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[2].volume = parseInt(responseFeed["bq3"]);
            if ("bp4" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[1].price = parseFloat(responseFeed["bp4"]);
            if ("bq4" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[1].volume = parseInt(responseFeed["bq4"]);
            if ("bp5" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[0].price = parseFloat(responseFeed["bp5"]);
            if ("bq5" in responseFeed) socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids[0].volume = parseInt(responseFeed["bq5"]);

        }
        let channelString = `${responseFeed["e"]}|${responseFeed["tk"]}#`
        let subscriptionItem = channelToSubscription.get(channelString);

        if (subscriptionItem === undefined) {
            return;
        }
        if (subscriptionItem.handlers === undefined) {
            return;
        }
        subscriptionItem.handlers.forEach(function callHandler(handler) {
            if (handler.type == 'quotes') {
                let quote = {
                    s: 'ok',
                    n: handler.symbol,
                    v: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`)
                }
                try {
                    handler.handler.callback([quote])
                } catch (err) {
                    console.info(err)
                }

            } else if (handler.type == 'tt-quotes') {
                let quote = {
                    s: 'success',
                    n: handler.symbol,
                    v: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`)
                }
                try {
                    handler.handler.callback(quote)
                } catch (err) {
                    console.info(err)
                }
            } else if (handler.type == 'bar') {
                // console.log("handler.symbol : ",handler.symbol)
                document.title=`${socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp}@${handler.symbol.split(":")[1]} ${socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).chp<0?'▼':'▲'} (${socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).chp}%)`
                const lastDailyBar = handler.lastDailyBar;
                const resolution = handler.resolution;
                let nextDailyBarTime
                if (resolution == '1' || resolution == 1) {
                    nextDailyBarTime = getNextMinBarTime(lastDailyBar != null ? lastDailyBar.time : null);
                } else if (resolution == '1D') {
                    tradeTime = Date.now();  //that day start 
                    // tradeTime = moment(tradeTime).startOf('day').toDate().getTime() + 19800000  //that day start 
                    nextDailyBarTime = getNextDailyBarTime(lastDailyBar != null ? lastDailyBar.time : null);
                } else if (resolution == '1M') {
                    tradeTime = moment(tradeTime).startOf('month').toDate().getTime() + 19800000
                    nextDailyBarTime = getNextMonthBarTime(lastDailyBar != null ? lastDailyBar.time : null);
                }
                let bar;
                // console.log("[bar] nextDailyBarTime : ",nextDailyBarTime,typeof nextDailyBarTime,tradeTime,typeof tradeTime,"\ncondition: ",tradeTime >= nextDailyBarTime)
                if (tradeTime >= nextDailyBarTime) {
                    // console.log("lastDailyBar  tradeTime>nextDailyBarTime TRUE : ",resolution,tradeTime,nextDailyBarTime)
                    if (resolution == '1D') {
                        // console.log("Calling 1")
                        // console.log("lastDailyBar  tradeTime>nextDailyBarTime TRUE IF 1D: ",tradeTime,nextDailyBarTime)
                        bar = {
                            time: nextDailyBarTime,
                            open: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).open_price),
                            high: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).high_price),
                            low: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).low_price),
                            close: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp),
                            volume: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).volume)
                        };
                    } else {
                        // console.log("Calling 2")
                        socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).volume = 0;
                        // console.log("lastDailyBar  tradeTime>nextDailyBarTime TRUE ELSE 1D: ",tradeTime,nextDailyBarTime)
                        bar = {
                            time: nextDailyBarTime,
                            open: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp),
                            high: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp),
                            low: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp),
                            close: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp),
                            volume: 0,
                        };
                        
                    }
                } else {
                    if (resolution == '1D') {
                        // console.log("Calling 3")
                        // console.log("lastDailyBar  tradeTime>nextDailyBarTime FALSE IF 1D: ",tradeTime,nextDailyBarTime)
                        bar = {
                            ...lastDailyBar,
                            high: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).high_price),
                            low: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).low_price),
                            close: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp),
                            volume: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).volume)
                        };
                    } else {
                        // console.log("Calling 4")
                        // console.log("lastDailyBar  tradeTime>nextDailyBarTime FALSE ELSE 1D: ",tradeTime,nextDailyBarTime)
                        bar = {
                            ...lastDailyBar,
                            high: Math.max((lastDailyBar != null ? lastDailyBar.high : 0), socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp),
                            low: Math.min(lastDailyBar != null ? lastDailyBar.low : 0, socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp),
                            close: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).lp),
                            volume: Number(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).volume),
                        };
                    }
                    // console.log("Assigning bar", bar)
                }
                // console.log("Bar", bar)
                handler.handler.callback(bar)

                handler.lastDailyBar = bar;
            } 
            else if (handler.type == 'oisymbol') {
                const lastDailyBar = handler.lastDailyBar;
                const resolution = handler.resolution;
                let nextDailyBarTime
                if (resolution == '1' || resolution == 1) {
                    nextDailyBarTime = getNextMinBarTime(lastDailyBar != null ? lastDailyBar.time : null);
                } else if (resolution == '1D') {
                    tradeTime = moment(tradeTime).startOf('day').toDate().getTime() + 19800000 
                    nextDailyBarTime = getNextDailyBarTime(lastDailyBar != null ? lastDailyBar.time : null);
                } else if (resolution == '1M') {
                    tradeTime = moment(tradeTime).startOf('month').toDate().getTime() + 19800000
                    nextDailyBarTime = getNextMonthBarTime(lastDailyBar != null ? lastDailyBar.time : null);
                }
                let bar;
                 if (tradeTime >= nextDailyBarTime) {
                    if (resolution == '1D') {
                         bar = {
                            time: nextDailyBarTime,
                            open: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).open_price,
                            high: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).high_price,
                            low: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).low_price,
                            close: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi,
                            volume: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).volume
                        };
                    } else {
                        // console.log("lastDailyBar  tradeTime>nextDailyBarTime TRUE ELSE 1D: ",tradeTime,nextDailyBarTime)
                        bar = {
                            time: nextDailyBarTime,
                            open: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi,
                            high: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi,
                            low: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi,
                            close: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi,
                        };
                    }
                } else {
                    if (resolution == '1D') {
                        // console.log("lastDailyBar  tradeTime>nextDailyBarTime FALSE IF 1D: ",tradeTime,nextDailyBarTime)
                        bar = {
                            ...lastDailyBar,
                            high: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).high_price,
                            low: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).low_price,
                            close: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi,
                            volume: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).volume
                        };
                    } else {
                        // console.log("lastDailyBar  tradeTime>nextDailyBarTime FALSE ELSE 1D: ",tradeTime,nextDailyBarTime)
                        bar = {
                            ...lastDailyBar,
                            high: Math.max((lastDailyBar != null ? lastDailyBar.high : 0), socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi),
                            low: Math.min(lastDailyBar != null ? lastDailyBar.low : 0, socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi),
                            close: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).oi,
                        };
                    }
                }
                handler.handler.callback(bar)

                handler.lastDailyBar = bar;
            }
            else if (handler.type == 'single-quotes') {
                let quote = {
                    s: 'success',
                    n: handler.symbol,
                    v: socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`)
                }
                let mapper = singleQuoteMap.get(handler.id)
                if (mapper) {
                    let all = true
                    let callbackResp = []
                    mapper[`${responseFeed["e"]}|${responseFeed["tk"]}#`].quote = quote
                    for (const [, value] of Object.entries(mapper)) {
                        if (Object.keys(value.quote).length === 0) {
                            all = false
                        } else {
                            callbackResp.push({
                                "s": "ok",
                                "n": value.quote.n,
                                "v": {
                                    "ch": value.quote.v.ch,
                                    "chp": value.quote.v.chp,
                                    "short_name": value.quote.n,
                                    "exchange": value.quote.v.exchange,
                                    "description": value.quote.n,
                                    "lp": value.quote.v.lp,
                                    "ask": value.quote.v.ask || 0,
                                    "bid": value.quote.v.bid || 0,
                                    "open_price": value.quote.v.open_price,
                                    "high_price": value.quote.v.high_price,
                                    "low_price": value.quote.v.low_price,
                                    "prev_close_price": value.quote.v.prev_close_price,
                                    "volume": value.quote.v.volume,

                                }
                            })
                        }
                    }
                    if (all) {
                        handler.handler.callback(callbackResp)
                        singleQuoteMap.delete(handler.handler.id)
                        unsubscribeFromStream(handler.handler.id)
                    }
                }
            } else if (handler.type == 'depth') {
                // console.log("[depth] depth List: ", socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`))
                // socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks = socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.asks.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
                // socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids = socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth.bids.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
                handler.handler.callback(socketPreResponse.get(`${responseFeed["e"]}|${responseFeed["tk"]}#`).depth)
            }
           
        });

    } catch (e) {
        // console.log("ERROR : ", e)
    }

}


function getNextDailyBarTime(barTime) {
    var new_date = moment(barTime).add('1', 'd').startOf('day').toDate()
    return new_date.getTime() + 19800000;
    // return (barTime - (barTime % 86400))+ 19800000
}

function getNextMonthBarTime(barTime) {
    var new_date = moment(barTime).add('1', 'M').startOf('month').toDate()
    return new_date.getTime();
    // return (barTime - (barTime % 31556926))+ 19800000
}

function getNextMinBarTime(barTime) {
    // console.log("[bar] bartime :",barTime)
    const date = new Date(barTime);
    const curTime = moment();
    var duration = moment.duration(curTime.diff(date)).asMinutes();
    // console.log(barTime,"[bar] duration :",duration," diff : ",curTime.diff(date)," duration > 1 :",duration > 1,"  return : ",curTime.startOf('minute').toDate())
    if (duration > 1) {
        return curTime.startOf('minute').toDate().getTime() //.getTime();
    } else {
        var new_date = moment(date).add('1', 'm').startOf('minute').toDate()
        return new_date.getTime();
    }
}

