import { getWatchlistdata, updateWatchlistApi, removeWatchlistApi,userid,usession } from './apiConnectionPool.js';
import { logMessage } from '../utils/helpers.js'
import {
    BrokerApiIns
} from '../mixins/brokerapis.js'
import { mastersJson } from '../../src/mixins/feedFactory'
<<<<<<< HEAD
import {mynturl} from '../apiUrl.js';
=======
import {mynturl} from '../apiurl.js';
>>>>>>> ce5581ce946afa00fe5ea266c6a94a78cd9fced7

// var userid = localStorage.getItem('userid');
// var usession = localStorage.getItem('usession');

export class ChartWatchlists {
    constructor(watchlistObj) {
        this._watchlists = {}
        this._watchlistObj = watchlistObj
        this._broker = BrokerApiIns
    }

    async updateWatchlist(listId) {

        var list = this._watchlistObj.getAllLists()[listId]
        if (this._watchlists[listId] == undefined || Object.keys(this._watchlists[listId]).length == 0) {
            this._watchlists[listId] = list
            let watachlistAddScripts = ""
            let symbolstoAddList = this._watchlists[listId].symbols

            symbolstoAddList.forEach(symbol => {
                if (mastersJson[symbol]) {
                    watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
                }
            })
            await updateWatchlistApi(this._watchlists[listId].title, watachlistAddScripts.slice(0, -1))
            return
        }

        if (this._watchlists[listId].symbols.length < list.symbols.length) {
            let watachlistAddScripts = ""
            let symbolstoAddList = this._watchlists[listId].symbols
            list.symbols.forEach(symbol => {
                if (!symbolstoAddList.includes(symbol)) {
                    watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`

                }
            })
            await updateWatchlistApi(this._watchlists[listId].title, watachlistAddScripts.slice(0, -1))
            this._watchlists[listId] = list

        } else {
            
            let watachlistDelScripts = ""
            let symbolstoAddList = this._watchlists[listId].symbols
            symbolstoAddList.forEach(symbol => {
                // console.log("mastersJson : ",mastersJson[symbol])
                // console.log("[watchlist] delete : ",symbol,symbol.split(":"))
                if (!list.symbols.includes(symbol)) {
                    watachlistDelScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
                }
            })

            await removeWatchlistApi(this._watchlists[listId].title, watachlistDelScripts.slice(0, -1))
            this._watchlists[listId] = list
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
        this._watchlists[list.id] = { id: list.id, title: watchlist.name, symbols: watchlistSymbols }
        this._watchlistObj.setActiveList(list.id)
        // console.log("[watchlist] addWatchlist() : ", this._watchlistObj.getAllLists())

    }

    async renameWatchlist(listId, oldName, newName) {
        var list = this._watchlistObj.getList(listId)
        // if (this._watchlists[listId].readonly) {
        //     window.alert("Changes made to default watchlist will not be stored to server")
        //     return
        // }
        let watachlistDelScripts = ""
        let symbolstoDelList = this._watchlists[listId].symbols
        symbolstoDelList.forEach(symbol => {
            if (mastersJson[symbol]) {
                watachlistDelScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
            }
        })
        await removeWatchlistApi(this._watchlists[listId].title, watachlistDelScripts.slice(0, -1))
        this._watchlists[listId].title = newName
        let watachlistAddScripts = ""
        let symbolstoAddList = this._watchlists[listId].symbols
        symbolstoAddList.forEach(symbol => {
            if (mastersJson[symbol]) {
                watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
            }
        })
        await updateWatchlistApi(this._watchlists[listId].title, watachlistAddScripts.slice(0, -1))
        this._watchlists[listId] = list

    }

    async deleteWatchlist(listId) {
        // console.log("[watchlist] this._watchlists[listId] ", listId, this._watchlists, this._watchlists[listId])
        // if (this._watchlists[listId].readonly) {
        //     window.alert("Changes made to default watchlist will not be stored to server")
        //     return
        // }
        // console.log("[watchlist] this._watchlists[listId] : ", this._watchlists, listId, this._watchlists[listId])
        let watachlistAddScripts = ""
        if (this._watchlists[listId]) {
            let symbolstoAddList = this._watchlists[listId].symbols
            symbolstoAddList.forEach(symbol => {
                if (this._watchlists[listId].symbols.includes(symbol)) {
                    watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
                }
            })
            await removeWatchlistApi(this._watchlists[listId].title, watachlistAddScripts.slice(0, -1))
            delete this._watchlists[listId]
        }
    }

    async createWatchlist(listId, name, symbols) {
        var list = this._watchlistObj.getAllLists()[listId]
        // logMessage(`"[createWatchlist] list  :: ",${list}`)
        this._watchlists[listId] = {}
        if (this._watchlistObj.getAllLists()[listId] != undefined) {
            if ((this._watchlists[listId] == undefined || Object.keys(this._watchlists[listId]).length == 0) && symbols.length !== 0) {
                this._watchlists[listId] = list
                let watachlistAddScripts = ""
                let symbolstoAddList = this._watchlists[listId].symbols
                symbolstoAddList.forEach(symbol => {
                    if (mastersJson[symbol]) {
                        watachlistAddScripts += `${symbol.split(":")[0]}|${mastersJson[symbol][0]}#`
                    }
                })
                await updateWatchlistApi(this._watchlists[listId].title, watachlistAddScripts.slice(0, -1))
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
        this._watchlists[list.id] = { id: list.id, title: "Indices", symbols: idxwl }
        var watchListCheck = this._watchlistObj.getAllLists()
        for (let i in watchListCheck) {
            // console.log("[watchlist] delseg : ",watchListCheck[i].title=="Watchlist"&&watchListCheck[i].symbols.length==0)
            if (watchListCheck[i].title == "Watchlist" && watchListCheck[i].symbols.length == 0) {
                // this.indicesListId=i
                this._watchlistObj.deleteList(i)
                // var list = this._watchlistObj.updateList(i, idxwl)
                // this._watchlists[list.id] = { id: list.id, title: "Indices", symbols: idxwl }
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

    const response = await fetch(mynturl+"MWList", requestOptions)

    let watchdata = response.json()
    return watchdata
        .catch(error => logMessage(`[getMWValues] ${error}`, 2));
}