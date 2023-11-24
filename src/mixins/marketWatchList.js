import { getCustomWatchlistdata, getWatchlistdata, updateWatchlistApi, removeWatchlistApi, userid, usession } from './apiConnectionPool.js';
import { logMessage } from '../utils/helpers.js'
import {
    BrokerApiIns
} from '../mixins/brokerapis.js'
import { mastersJson } from '../../src/mixins/feedFactory'
import { mynturl } from '../apiUrl.js';

// var userid = localStorage.getItem('userid');
// var usession = localStorage.getItem('usession');
export let _watchlists = {}
export class ChartWatchlists {
    constructor(watchlistObj) {
        this._watchlistObj = watchlistObj
        this._broker = BrokerApiIns
    }

    async updateWatchlist(listId) {
        var list = this._watchlistObj.getAllLists()[listId]
        if (_watchlists[listId] == undefined || Object.keys(_watchlists[listId]).length == 0) {
            _watchlists[listId] = list
            let watachlistAddScripts = ""
            let symbolstoAddList = _watchlists[listId].symbols

            symbolstoAddList.forEach(symbol => {
                if (mastersJson[symbol]) {
                    watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
                }
            })
            await updateWatchlistApi(_watchlists[listId].title, watachlistAddScripts.slice(0, -1))
            return
        }

        if (_watchlists[listId].symbols.length < list.symbols.length) {
            let watachlistAddScripts = ""
            let symbolstoAddList = _watchlists[listId].symbols
            list.symbols.forEach(symbol => {
                if (!symbolstoAddList.includes(symbol)) {
                    watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`

                }
            })
            await updateWatchlistApi(_watchlists[listId].title, watachlistAddScripts.slice(0, -1))
            _watchlists[listId] = list

        } else {

            let watachlistDelScripts = ""
            let symbolstoAddList = _watchlists[listId].symbols
            symbolstoAddList.forEach(symbol => {
                // console.log("mastersJson : ",mastersJson[symbol])
                // console.log("[watchlist] delete : ",symbol,symbol.split(":"))
                if (!list.symbols.includes(symbol)) {
                    watachlistDelScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
                }
            })

            await removeWatchlistApi(_watchlists[listId].title, watachlistDelScripts.slice(0, -1))
            _watchlists[listId] = list
        }
        // console.log("[watchlist] updateWatchlist() : ",this._watchlistObj.getAllLists())
    }

    async addWatchlist(watchlist) {
        // console.log("[watchlist] add : ", watchlist)
        var watchlistSymbols = []
        var watchListResponse = await getWatchlistdata(watchlist.name, false)
        watchListResponse.forEach(response => {
            watchlistSymbols.push(response.n)
        })
        var list = this._watchlistObj.createList(watchlist.name, watchlistSymbols)
        _watchlists[list.id] = { id: list.id, title: watchlist.name, symbols: watchlistSymbols }
        this._watchlistObj.setActiveList(list.id)
        // console.log("[watchlist] addWatchlist() : ", this._watchlistObj.getAllLists())

    }

    async renameWatchlist(listId, oldName, newName) {
        var list = this._watchlistObj.getList(listId)
        let watachlistDelScripts = ""
        let symbolstoDelList = _watchlists[listId].symbols
        symbolstoDelList.forEach(symbol => {
            if (mastersJson[symbol]) {
                watachlistDelScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
            }
        })
        await removeWatchlistApi(_watchlists[listId].title, watachlistDelScripts.slice(0, -1))
        _watchlists[listId].title = newName
        let watachlistAddScripts = ""
        let symbolstoAddList = _watchlists[listId].symbols
        symbolstoAddList.forEach(symbol => {
            if (mastersJson[symbol]) {
                watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
            }
        })
        await updateWatchlistApi(_watchlists[listId].title, watachlistAddScripts.slice(0, -1))
        _watchlists[listId] = list

    }

    async deleteWatchlist(listId) {
        // console.log("[watchlist] _watchlists[listId] ", listId, _watchlists, _watchlists[listId])
        // console.log("[watchlist] _watchlists[listId] : ", _watchlists, listId, _watchlists[listId])
        let watachlistAddScripts = ""
        if (_watchlists[listId]) {
            let symbolstoAddList = _watchlists[listId].symbols
            symbolstoAddList.forEach(symbol => {
                if (_watchlists[listId].symbols.includes(symbol)) {
                    watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
                }
            })
            await removeWatchlistApi(_watchlists[listId].title, watachlistAddScripts.slice(0, -1))
            delete _watchlists[listId]
        }
    }

    async createWatchlist(listId, name, symbols) {
        var list = this._watchlistObj.getAllLists()[listId]
        // logMessage(`"[createWatchlist] list  :: ",${list}`)
        _watchlists[listId] = {}
        if (this._watchlistObj.getAllLists()[listId] != undefined) {
            if ((_watchlists[listId] == undefined || Object.keys(_watchlists[listId]).length == 0) && symbols.length !== 0) {
                _watchlists[listId] = list
                let watachlistAddScripts = ""
                let symbolstoAddList = _watchlists[listId].symbols
                symbolstoAddList.forEach(symbol => {
                    if (mastersJson[symbol]) {
                        watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
                    }
                })
                await updateWatchlistApi(_watchlists[listId].title, watachlistAddScripts.slice(0, -1))
            }
        }
        // console.log("[watchlist] createWatchlist() : ",this._watchlistObj.getAllLists())
    }
    async defidxwatchlist() {
        let idxwl = []
        var idxwatchlist = await getWatchlistdata("", true);
        idxwatchlist.forEach(response => {
            idxwl.push(response.n)
        })
        var list = this._watchlistObj.createList("Indices", idxwl)
        _watchlists[list.id] = { id: list.id, title: "Indices", symbols: idxwl, readonly: true}
        var watchListCheck = this._watchlistObj.getAllLists()
        for (let i in watchListCheck) {
            // console.log("[watchlist] delseg : ",watchListCheck[i].title=="Watchlist"&&watchListCheck[i].symbols.length==0)
            if (watchListCheck[i].title == "Watchlist" && watchListCheck[i].symbols.length == 0) {
                // this.indicesListId=i
                this._watchlistObj.deleteList(i)
                // var list = this._watchlistObj.updateList(i, idxwl)
                // _watchlists[list.id] = { id: list.id, title: "Indices", symbols: idxwl }
            }
        }
    }
    // async customWatchlist() {
    //     let customWList = ['NSE', 'NFO', 'BSE', 'CDS', 'MCX', 'BFO', 'BCD']
    //     let topTypes = ['LTP','LTP','VOLUME','VALUE']
    //     for (let index of customWList) {
    //         for (let i=0; i < topTypes.length; i++){
    //         let idxwl = []
    //         var idxwatchlist = await getCustomWatchlistdata(index,"top",i);
    //         idxwatchlist.forEach(response => {
    //             idxwl.push(response.n)
    //         })
    //         let name;
    //         if(i==0) name = index + " - Top Gainers";
    //         if(i==1) name = index + " - Top Losers";  
    //         if(i==2) name = index + " - Most Active by Volume"
    //         if(i==3) name = index + " - Most Active by Value"
    //         if (idxwl != 0) {
    //             var list = this._watchlistObj.createList(name, idxwl)
    //             _watchlists[list.id] = { id: list.id, title: name, symbols: idxwl, readonly: true}
    //             var watchListCheck = this._watchlistObj.getAllLists()
    //             for (let i in watchListCheck) {
    //                 // console.log("[watchlist] delseg : ",watchListCheck[i].title=="Watchlist"&&watchListCheck[i].symbols.length==0)
    //                 if (watchListCheck[i].title == "Watchlist" && watchListCheck[i].symbols.length == 0) {
    //                     // this.indicesListId=i
    //                     this._watchlistObj.deleteList(i)
    //                     // var list = this._watchlistObj.updateList(i, idxwl)
    //                     // _watchlists[list.id] = { id: list.id, title: "Indices", symbols: idxwl }
    //                 }
    //             }
    //         }
    //     }
    //     }
    // }
    async holdingsWatchlist() {
            let idxwl = []
            var idxwatchlist = await getCustomWatchlistdata("","","i");
            idxwatchlist.forEach(response => {
                idxwl.push(response.n)
            })
            if (idxwl != 0) {
                var list = this._watchlistObj.createList("Holdings", idxwl)
                _watchlists[list.id] = { id: list.id, title: "Holdings", symbols: idxwl, readonly: true}
                var watchListCheck = this._watchlistObj.getAllLists()
                for (let i in watchListCheck) {
                    // console.log("[watchlist] delseg : ",watchListCheck[i].title=="Watchlist"&&watchListCheck[i].symbols.length==0)
                    if (watchListCheck[i].title == "Watchlist" && watchListCheck[i].symbols.length == 0) {
                        // this.indicesListId=i
                        this._watchlistObj.deleteList(i)
                        // var list = this._watchlistObj.updateList(i, idxwl)
                        // _watchlists[list.id] = { id: list.id, title: "Indices", symbols: idxwl }
                    }
                }
            }
            }
        }

export async function getMWValues() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let reqJson = `jData={"uid":"${userid}"}&jKey=${usession}`
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: reqJson
    };

    const response = await fetch(mynturl + "MWList", requestOptions)

    let watchdata = response.json()
    return watchdata
        .catch(error => logMessage(`[getMWValues] ${error}`, 2));
}