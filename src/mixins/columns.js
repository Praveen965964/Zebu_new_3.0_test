export const holdingColumns = [{
    id: 'Exch',
    label: 'Exch',
    dataFields: ['exc']
},{
    id: 'Symbol',
    label: 'Symbol',
    formatter: 'symbol',
    dataFields: ['dispSym']
},
{
    id: 'Net Qty',
    label: 'Net Qty',
    dataFields: ['qty'],
    formatter: 'formatQuantity',
},
{
    id: 'Saleable Qty',
    label: 'Saleable Qty',
    dataFields: ['sqty'],
    formatter: 'formatQuantity',
},
{
    id: 'Buy Avg',
    label: 'Buy Avg',
    dataFields: ['price'],
    formatter: 'formatPrice',
    sortProp:'price'
},
{
    id: 'LTP',
    label: 'LTP',
    dataFields: ['cprice'],
    formatter: 'formatPriceForexSup',
    highlightDiff: true,
    sortProp:'cprice'
}, 
{
    id: 'Invested',
    label: 'Invested',
    dataFields: ['invested'],
    sortProp:'invested',
},
{
    id: 'Current Value',
    label: 'Current Value',
    dataFields: ['currVal'],
    formatter: 'formatPrice',
    sortProp:'currVal'
},
{
    id: 'Day P&L',
    label: 'Day P&L',
    dataFields: ['daypnl'],
    sortProp:'daypnl'
    // formatter: 'fixed',
},
{
    id: 'Day %',
    label: 'Day %',
    dataFields: ['daypc'],
    sortProp:'daypc'
    // formatter: 'fixed',
},
{
    id: 'OverAll P&L',
    label: 'OverAll P&L',
    dataFields: ['overallpnl'],
    sortProp:'overallpnl'
    // formatter: 'fixed',
},
{
    id: 'OverAll %',
    label: 'OverAll %',
    dataFields: ['overallpc'],
    sortProp:'overallpc'
    // formatter: 'fixed',
}
];
export const fundSummaryColumns = [
    {
        id: 'Details',
        label: 'Details',
        dataFields: ['details']
    },
    {
        id: 'All',
        label: 'All',
        dataFields: ['all']
}];
export const ordersPageColumns = [{
    id: 'Time',
    label: 'Time',
    dataFields: ['updateTime'],
}, {
    id: 'Exch',
    label: 'Exch',
    dataFields: ['exc'],
}, {
    id: 'Symbol',
    label: 'Symbol',
    formatter: 'symbol',
    dataFields: ['symdata'],
}, {
    id: 'Status',
    label: 'Status',
    dataFields: ['status'],
    formatter: 'status',
    // supportedStatusFilters: [0]
},
{
    id: 'Order Type',
    label: 'Order Type',
    dataFields:['ordType'],
},

{
    id: 'Product',
    label: 'Product',
    dataFields: ['product'],
}, {
    id: 'Type',
    label: 'Type',
    dataFields: ['side'],
    formatter:'side'
}, {
    id: 'Qty',
    label: 'Qty',
    dataFields: ['quantity'],
},
{
    id: 'Traded Qty',
    label: 'Traded Qty',
    dataFields: ['filledQty'],
},{
    id: 'Price',
    label: 'Price',
    dataFields: ['limitPrice'],
    alignment: 'right',
}, 
{
    id: 'Traded Price',
    label: 'Traded Price',
    dataFields: ['avgPrice'],
    alignment: 'right',
}, {
    id: "Reason",
    label: "Reason",
    dataFields: ["reason"]
},{
    id: "Order Id",
    label: "Order Id",
    dataFields: ["id"]
}];
export const positionsPageColumns = [{
    id: 'Exch',
    label: 'Exch',
    dataFields: ['exc'],
}, {
    id: 'Symbol',
    label: 'Symbol',
    formatter: 'symbol',
    dataFields: ['dispSym'],
}, {
    id: 'Type',
    label: 'Type',
    dataFields: ['pType'],
}, {
    id: 'Qty',
    label: 'Qty',
    dataFields: ['pQty'],
}, {
    id: 'Avg Price',
    label: 'Avg Price',
    dataFields: ['netavgprc'],
    formatter: 'formatPrice',
},{
    id: 'LTP',
    label: 'LTP',
    dataFields: ['last'],
    formatter: 'formatPriceForexSup',
    highlightDiff: true,
}, {
    id: 'P/L',
    label: 'P/L',
    dataFields: ['pospnl'],
    formatter: 'profit',
},
];
export const closedPositionsColumns = [{
    id: 'Exch',
    label: 'Exch',
    dataFields: ['exc'],
}, {
    id: 'Symbol',
    label: 'Symbol',
    formatter: 'symbol',
    dataFields: ['dispSym'],
}, {
    id: 'Type',
    label: 'Type',
    dataFields: ['pType'],
}, {
    id: 'Buy Qty',
    label: 'Buy Qty',
    dataFields: ['bQty'],
},{
    id: 'Buy Avg',
    label: 'Buy Avg',
    dataFields: ['bAvg'],
    formatter: 'formatPrice',
},{
    id: 'Sell Qty',
    label: 'Sell Qty',
    dataFields: ['sQty'],
},  {
    id: 'Sell Avg',
    label: 'Sell Avg',
    dataFields: ['sAvg'],
    formatter: 'formatPrice',
},{
    id: 'P/L',
    label: 'P/L',
    dataFields: ['totalPl'],
    formatter: 'profit',
}
];
export const exchangeMessages = [{
    id: 'Time',
    label: 'Time',
    dataFields: ['time'],
}, {
    id:"From",
    label:"From",
    dataFields:['exch']
},
{
    id: 'Message',
    label: 'Message',
    dataFields: ['msg']
}

];

// export const holdingColumns = [{
//     label: 'Exch',
//     property: 'exc'
// },{
//     label: 'Symbol',
//     formatter: 'symbol',
//     property: 'dispSym'
// },
// {
//     label: 'Net Qty',
//     property: 'qty',
//     formatter: 'formatQuantity',
// },
// {
//     label: 'Saleable Qty',
//     property: 'sqty',
//     formatter: 'formatQuantity',
// },
// {
//     label: 'Buy Avg',
//     property: 'price',
//     formatter: 'formatPrice',
//     sortProp:'price'
// },
// {
//     label: 'LTP',
//     property: 'cprice',
//     formatter: 'formatPriceForexSup',
//     highlightDiff: true,
//     sortProp:'cprice'
// }, 
// {
//     label: 'Invested',
//     property: 'invested',
//     sortProp:'invested',
// },
// {
//     label: 'Current Value',
//     property: 'currVal',
//     formatter: 'formatPrice',
//     sortProp:'currVal'
// },
// {
//     label: 'Day P&L',
//     property: 'daypnl',
//     sortProp:'daypnl'
//     // formatter: 'fixed',
// },
// {
//     label: 'Day %',
//     property: 'daypc',
//     sortProp:'daypc'
//     // formatter: 'fixed',
// },
// {
//     label: 'OverAll P&L',
//     property: 'overallpnl',
//     sortProp:'overallpnl'
//     // formatter: 'fixed',
// },
// {
//     label: 'OverAll %',
//     property: 'overallpc',
//     sortProp:'overallpc'
//     // formatter: 'fixed',
// }
// ];
// export const fundSummaryColumns = [
//     {
//         label: 'Details',
//         property: 'details'
//     },
//     {
//         label: 'All',
//         property: 'all'
// }];
// export const ordersPageColumns = [{
//     label: 'Time',
//     property: 'updateTime',
// }, {
//     label: 'Exch',
//     property: 'exc',
// }, {
//     label: 'Symbol',
//     formatter: 'symbol',
//     property: 'symdata',
// }, {
//     label: 'Status',
//     property: 'status',
//     formatter: 'status',
//     // supportedStatusFilters: [0]
// },{
//     label: 'Product',
//     property: 'product',
// }, {
//     label: 'Type',
//     property: 'side',
//     formatter:'side'
// }, {
//     label: 'Qty',
//     property: 'quantity',
// },
// {
//     label: 'Traded Qty',
//     property: 'filledQty',
// },{
//     label: 'Price',
//     property: 'limitPrice',
//     alignment: 'right',
// }, 
// {
//     label: 'Traded Price',
//     property: 'avgPrice',
//     alignment: 'right',
// }, {
//     label: "Reason",
//     property: "reason"
// },{
//     label: "Order Id",
//     property: "id"
// }];
// export const positionsPageColumns = [{
//     label: 'Exch',
//     property: 'exc',
// }, {
//     label: 'Symbol',
//     formatter: 'symbol',
//     property: 'dispSym',
// }, {
//     label: 'Type',
//     property: 'pType',
// }, {
//     label: 'Qty',
//     property: 'pQty',
// }, {
//     label: 'Avg Price',
//     property: 'netavgprc',
//     formatter: 'formatPrice',
// },{
//     label: 'LTP',
//     property: 'last',
//     formatter: 'formatPriceForexSup',
//     highlightDiff: true,
// }, {
//     label: 'P/L',
//     property: 'profit',
//     formatter: 'profit',
// },
// ];
// export const closedPositionsColumns = [{
//     label: 'Exch',
//     property: 'exc',
// }, {
//     label: 'Symbol',
//     formatter: 'symbol',
//     property: 'dispSym',
// }, {
//     label: 'Type',
//     property: 'pType',
// }, {
//     label: 'Buy Qty',
//     property: 'bQty',
// },{
//     label: 'Buy Avg',
//     property: 'bAvg',
//     formatter: 'formatPrice',
// },{
//     label: 'Sell Qty',
//     property: 'sQty',
// },  {
//     label: 'Sell Avg',
//     property: 'sAvg',
//     formatter: 'formatPrice',
// },{
//     label: 'P/L',
//     property: 'totalPl',
//     formatter: 'profit',
// }
// ];
// export const exchangeMessages = [{
//     label: 'Time',
//     property: 'time',
// }, {
//     label:"Exchange",
//     property:'exch'
// },
// {
//     label: 'Message',
//     property: 'msg'
// }

// ];