
// export var userid = localStorage.getItem('userid');
// export var usession = localStorage.getItem('usession');
<<<<<<< HEAD
import {mynturl ,clientid ,session} from '../apiUrl.js'

// import axios from "axios";
export var userid = clientid;
export var usession = session;
=======
import {mynturl} from '../apiurl.js'
// import axios from "axios";
export var userid = "ZP00211";
export var usession = "6f7e22b65136a3fbd3fae868dea04fbc96ed30626d35fffa9839ecc2bd1090e5";
>>>>>>> ce5581ce946afa00fe5ea266c6a94a78cd9fced7
var watchlistapi = mynturl+"MarketWatch"

export async function makeApiRequest(path, request) {
    try {
    //     let greekconfig = {
    //         method: "post",
    //         url:path,  
    //         headers: {
    //           "Content-Type": "application/json",
    //          },
        
    //     data: request,
    //   };

    //   axios(greekconfig)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: myHeaders,
            body: request
        };
        const response = await fetch(path, requestOptions);
        // console.log("response : ",response)
        // if (!response.ok) {
            return response.json();
        // }
      
       

    } catch (error) {
        throw new Error(`zebull symbols request error: ${error.status}`);
    }
}

export async function fetchfromZebullAPI(path, requestOptions) {
    try {
        const response = await fetch(path, requestOptions);
        let resp=response.json();
        return resp
    } catch (error) {
        throw new Error(`zebull fetch request error: ${error.status}`);
    }
}

export async function getWatchlistdata(watchlistID,index) {
    var dataArr = []
   
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let watchlistName = `jData={"uid":"${userid}","wlname":"${watchlistID}"}&jKey=${usession}`
    let indexwl = `jData={"uid":"${userid}","exch":"NSE"}&jKey=${usession}`
    var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: index==true ? indexwl:watchlistName
    };

    var response= index==true ? await fetchfromZebullAPI(mynturl+"GetIndexList", requestOptions) : await fetchfromZebullAPI(watchlistapi, requestOptions)
        if (response.values[0] !== "No Market Watch") {
            
            for (let scripts in response.values) {
                let script = response.values[scripts]
                var quote = {
                    s: 'ok',
                    n: index==true ? `NSE:${script.idxname.toUpperCase()}` : `${script.exch}:${script.tsym.toUpperCase()}`,
                    v: {
                        ch: "",
                        chp: "",
                        short_name: index==true ? script.idxname.toUpperCase() : script.tsym.toUpperCase(),
                        exchange: index==true ? "NSE" : script.exch,
                        description: index==true ? script.idxname.toUpperCase() : script.tsym.toUpperCase(),
                        lp: "",
                        ask: "",
                        ask_qty: "",
                        bid: "",
                        bid_qty: "",
                        open_price: "",
                        high_price: "",
                        low_price: "",
                        prev_close_price: "",
                        volume: ""
                    }
                }
                dataArr.push(quote)
            }
        }
    return dataArr
}

export async function updateWatchlistApi(watchlistTitle,watchlistSymbols) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let watchlistData = `jData={"uid":"${userid}","wlname":"${watchlistTitle}","scrips":"${watchlistSymbols}"}&jKey=${usession}`
    var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: watchlistData
    };
    var response=await fetchfromZebullAPI(mynturl+"AddMultiScripsToMW", requestOptions)
    return response
}


export async function removeWatchlistApi(watchlistTitle,watchlistSymbols) { 
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let watchlistData = `jData={"uid":"${userid}","wlname":"${watchlistTitle}","scrips":"${watchlistSymbols}"}&jKey=${usession}`
    var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
        body: watchlistData
    };

    var response=await fetchfromZebullAPI(mynturl+"DeleteMultiMWScrips", requestOptions)
    return response
}
