export const holdingColumns = [{
  label: 'Exch',
  property: 'exc'
},{
  label: 'Symbol',
  formatter: 'symbol',
  property: 'dispSym'
},
{
  label: 'Net Qty',
  property: 'qty',
  formatter: 'formatQuantity',
},
{
  label: 'Saleable Qty',
  property: 'sqty',
  formatter: 'formatQuantity',
},
{
  label: 'Buy Avg',
  property: 'price',
  formatter: 'formatPrice',
  sortProp:'price'
},
{
  label: 'LTP',
  property: 'cprice',
  formatter: 'formatPriceForexSup',
  highlightDiff: true,
  sortProp:'cprice'
}, 
{
  label: 'Invested',
  property: 'invested',
  sortProp:'invested',
},
{
  label: 'Current Value',
  property: 'currVal',
  formatter: 'formatPrice',
  sortProp:'currVal'
},
{
  label: 'Day P&L',
  property: 'daypnl',
  sortProp:'daypnl'
  // formatter: 'fixed',
},
{
  label: 'Day %',
  property: 'daypc',
  sortProp:'daypc'
  // formatter: 'fixed',
},
{
  label: 'OverAll P&L',
  property: 'overallpnl',
  sortProp:'overallpnl'
  // formatter: 'fixed',
},
{
  label: 'OverAll %',
  property: 'overallpc',
  sortProp:'overallpc'
  // formatter: 'fixed',
}
];
export const fundSummaryColumns = [
  {
      label: 'Details',
      property: 'details'
  },
  {
      label: 'All',
      property: 'all'
}];
export const ordersPageColumns = [{
  label: 'Time',
  property: 'updateTime',
}, {
  label: 'Exch',
  property: 'exc',
}, {
  label: 'Symbol',
  formatter: 'symbol',
  property: 'symdata',
}, {
  label: 'Status',
  property: 'status',
  formatter: 'status',
  // supportedStatusFilters: [0]
},{
  label: 'Product',
  property: 'product',
}, {
  label: 'Type',
  property: 'side',
  formatter:'side'
}, {
  label: 'Qty',
  property: 'quantity',
},
{
  label: 'Traded Qty',
  property: 'filledQty',
},{
  label: 'Price',
  property: 'limitPrice',
  alignment: 'right',
}, 
{
  label: 'Traded Price',
  property: 'avgPrice',
  alignment: 'right',
}, {
  label: "Reason",
  property: "reason"
},{
  label: "Order Id",
  property: "id"
}];
export const positionsPageColumns = [{
  label: 'Exch',
  property: 'exc',
}, {
  label: 'Symbol',
  formatter: 'symbol',
  property: 'dispSym',
}, {
  label: 'Type',
  property: 'pType',
}, {
  label: 'Qty',
  property: 'pQty',
}, {
  label: 'Avg Price',
  property: 'netavgprc',
  formatter: 'formatPrice',
},{
  label: 'LTP',
  property: 'last',
  formatter: 'formatPriceForexSup',
  highlightDiff: true,
}, {
  label: 'P/L',
  property: 'profit',
  formatter: 'profit',
},
];
export const closedPositionsColumns = [{
  label: 'Exch',
  property: 'exc',
}, {
  label: 'Symbol',
  formatter: 'symbol',
  property: 'dispSym',
}, {
  label: 'Type',
  property: 'pType',
}, {
  label: 'Buy Qty',
  property: 'bQty',
},{
  label: 'Buy Avg',
  property: 'bAvg',
  formatter: 'formatPrice',
},{
  label: 'Sell Qty',
  property: 'sQty',
},  {
  label: 'Sell Avg',
  property: 'sAvg',
  formatter: 'formatPrice',
},{
  label: 'P/L',
  property: 'totalPl',
  formatter: 'profit',
}
];
export const exchangeMessages = [{
  label: 'Time',
  property: 'time',
}, {
  label:"Exchange",
  property:'exch'
},
{
  label: 'Message',
  property: 'msg'
}

];