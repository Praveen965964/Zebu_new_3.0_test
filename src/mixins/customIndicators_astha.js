/* eslint-disable no-unused-vars */
/* eslint-disable no-func-assign */
import { makeApiRequest, userid, usession } from './apiConnectionPool.js';
import { mynturl, myntDCUrl } from "../apiUrl.js";
import Datafeed from "./feedFactory.js";

const lastBarsCache = new Map();
// function mapper(_0x37d9fd, _0x14bf9e) {
//   console.log("pine mapper func :: ",_0x37d9fd,_0x14bf9e)
//   var _0x3e7faf = _0x3e7f();
//   return mapper = function (mapperd9, _0x4a9501) {
//     console.log("pine in return mapperd9 B :: ",mapperd9)
//     mapperd9 = mapperd9 - 474;
//     console.log("pine in return mapperd9 A :: ",mapperd9)
//     var _0x43c91c = _0x3e7faf[mapperd9];
//       console.log("pine mapper return :: ",_0x43c91c)
//     return _0x43c91c;
//   }, mapper(_0x37d9fd, _0x14bf9e);
// }
// (function (_0x3e8269, _0x463639) { // check number from below _0x463639
//   console.log("pine _0x3e8269  _0x463639  :: ",_0x3e8269,_0x463639)
//   var _0x5c5efd = mapper, _0x4fe11a = _0x3e8269(); //_0x3e7f() function asigned to  _0x3e8269
//   console.log("pine before while :: ",_0x4fe11a)
//   var a=true
//   while (a) {
//     try {
//       var _0x13594f = -parseInt(_0x5c5efd(570)) / 1 * (-parseInt(_0x5c5efd(507)) / 2) + parseInt(_0x5c5efd(485)) / 3 + parseInt(_0x5c5efd(504)) / 4 + parseInt(_0x5c5efd(523)) / 5 + parseInt(_0x5c5efd(514)) / 6 * (parseInt(_0x5c5efd(573)) / 7) + parseInt(_0x5c5efd(517)) / 8 * (-parseInt(_0x5c5efd(478)) / 9) + -parseInt(_0x5c5efd(559)) / 10;
//       console.log("pine _0x13594f :: ",_0x13594f,_0x5c5efd(570),-parseInt(_0x5c5efd(570)) ,-parseInt(_0x5c5efd(570)) / 1 )
//       if (_0x13594f === _0x463639) {
//         break;
//       } else {
//         console.log("pine _0x4fe11a  B :: ",_0x4fe11a)
//         _0x4fe11a.push(_0x4fe11a.shift());}
//         console.log("pine _0x4fe11a A :: ",_0x4fe11a)
//     } catch (_0x395ffd) {
//       _0x4fe11a.push(_0x4fe11a.shift());
//       console.log("pine _0x4fe11a Catch :: ",_0x4fe11a)
//     }
//   }
// }(_0x3e7f, 756824));



export var common = {
  setNameAndRequiredField: function (name, indicatorTemplate) {
    var metaInfo = indicatorTemplate.metainfo
    metaInfo['id'] = name + '@tv-basicstudies-1',
      (metaInfo)._metainfoVersion = 51,
      metaInfo.name = name,
      metaInfo['description'] = name,
      metaInfo['shortDescription'] = name,
      metaInfo['is_hidden_study'] = false,
      metaInfo['is_price_study'] = false,
      metaInfo.isCustomIndicator = true,
      metaInfo.format = {
        type: "price",
        precision: 2
      },
      indicatorTemplate.metainfo = metaInfo;
    indicatorTemplate.constructor.prototype.constructor = indicatorTemplate.constructor
    return indicatorTemplate
  }, getDefaultStyle: function (plots) {
    let styleMap = { linestyle: 0, visible: true, linewidth: 2, plottype: "2", trackPrice: false }, defaultStyle = {};
    for (var key in plots) styleMap.color = plots[key], defaultStyle[key] = JSON.parse(JSON.stringify(styleMap));
    return defaultStyle;
  }, getStyle: function (plots) {
    let styleMap = { histogramBase: 1 }, style = {};
    for (var key in plots) styleMap.title = key, style[key] = JSON.parse(JSON.stringify(styleMap));
    return style;
  }, getPlots: function (plots) {
    let plotArray = [];
    for (var plotId in plots) {
      let plotObject = { id: "", type: "line" };
      plotObject.id = plotId, plotArray.push(JSON.parse(JSON.stringify(plotObject)));
    }
    return plotArray;
  }, getDateObject: function (_0x3e644a) {
    const dateArray = new Date(_0x3e644a).toString()["split"](" ");
    var timeArray = dateArray[4]["toString"]().split(":"), month;
    let dateObject = {};
    return dateObject["Year"] = parseInt(dateArray[3]), dateObject["Month"] = (month = dateArray[1], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].indexOf(month) + 1), dateObject["Day"] = parseInt(dateArray[2]), dateObject["Hour"] = parseInt(timeArray[0]), dateObject["Minute"] = parseInt(timeArray[1]), dateObject;
  }, getUnixTimeStamp: function (time) {
    return time = time.Month + "/" + time.Day + "/" + time.Year + " " + time.Hour + ":" + time.Minute + ":00", Date.parse(time);
  }
},
  customIndicator = function () {
    let symbolBars = {};
    let weeklySymbolBars = {};
    function dateMonthYear(date) {
      console.log("pine dateMonthYear :: ", date)
      var dateArray
      return dateArray = new Date(date).toString().split(" "), dateArray[2] + "_" + dateArray[1] + "_" + dateArray[0] + "_" + dateArray[3];
    }
    function weekMonthYear(utcSeconds) {
      var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      var dateArray;
      d.setUTCMilliseconds(utcSeconds);
      var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
      return dateArray = new Date(d.setDate(diff)).toString().split(" "), dateArray[2] + "_" + dateArray[1] + "_" + dateArray[0] + "_" + dateArray[3];
    }
    return {
      getIndicatorTemplates: function (PineJS) {
        let templates = [];
        return templates.push(cpr_weekly.getIndicatorTemplates(PineJS), cpr.getIndicatorTemplates(PineJS)),
          templates.push(ohCL["getIndicatorTemplates"](PineJS)),
          templates.push(boring["getIndicatorTemplates"](PineJS)),
          //  templates.push(anchor["getIndicatorTemplates"](PineJS)),
          Promise.resolve(templates);
      },
      getIndicatorValues: function (symbolInfo) {
        return new Promise((resolve, reject) => {
          var curTime;
          // eslint-disable-next-line no-prototype-builtins
          symbolBars['hasOwnProperty'](symbolInfo['ticker']) && weeklySymbolBars['hasOwnProperty'](symbolInfo['ticker']) ? resolve() : (symbolBars[symbolInfo['ticker']] = null,
            weeklySymbolBars[symbolInfo['ticker']] = null,
            curTime = Math.round((new Date).getTime() / 1000),

            getHistoryData(symbolInfo, "1D", { from: curTime - 15552000, to: curTime }).then(response => {
              symbolBars[symbolInfo["ticker"]] = function (bars) {
                console.log("pine bars getHistoryData ::", bars)
                let timeWiseBars = {};
                try {
                  for (let i = 0; i < bars.length; i++) {
                    var barTime = dateMonthYear(bars[i].time), barOpen = bars[i].open, barHigh = bars[i].high, barLow = bars[i].low, barClose = bars[i].close;
                    let previousDate;
                    previousDate = 0 === i ? NaN : dateMonthYear(bars[i - 1].time), timeWiseBars[barTime] = { open: barOpen, high: barHigh, low: barLow, previousDate: previousDate, close: barClose };
                  }
                } catch (error) {
                  console.log("Error in convertBarsToObject : ", error);
                }
                return timeWiseBars;
              }(response['bars']);
              return getHistoryData(symbolInfo, "1W", { from: curTime - 15552000, to: curTime })
            }).then((response) => {
              resolve(), weeklySymbolBars[symbolInfo["ticker"]] = function (bars) {
                let timeWiseBars = {};
                try {
                  for (let i = 0; i < bars.length; i++) {
                    var barTime = weekMonthYear(bars[i].time), barOpen = bars[i].open, barHigh = bars[i].high, barLow = bars[i].low, barClose = bars[i].close;
                    let previousDate, previousDateUTC;
                    previousDate = 0 === i ? NaN : weekMonthYear(bars[i - 1].time), previousDateUTC = 0 === i ? NaN : bars[i - 1].time, timeWiseBars[barTime] = { open: barOpen, high: barHigh, low: barLow, previousDate: previousDate, previousDateUTC: previousDateUTC, close: barClose };
                  }
                } catch (error) {
                  console.log("Error in convertBarsToObject : ", error);
                }
                return timeWiseBars;
              }(response['bars']);
            })["catch"](function (error) {
              console.log("getIndicatorValues : failed to load all bars", error), resolve();
            }));
        });
      }, getMapping: function () {
        return symbolBars;
      }, getWeeklyMapping: function () {
        return weeklySymbolBars
      }, getDateMonthYear: dateMonthYear,
      getWeekMonthYear: weekMonthYear,
    };
  }(),
  //  boring = {
  //   getIndicatorTemplates: function (PineJS) {
  //     console.log("pine getIndicatorTemplates :: ",common)
  //     return common.setNameAndRequiredField("Boring candle", {
  //       metainfo: { 
  //         defaults: { palettes: { palette_0: { colors: [{ color: "#0000FF" }] } },inputs: { "Candle Range <=": 50 } }, 
  //                   inputs: [{ id: "Candle Range <=", name: "Candle Range <=", type: "integer", isHidden: false, defval: 50, max: 95, min: 5 }],
  //                   plots: [{ id: "plot_0", type: "bar_colorer", palette: "palette_0" }],
  //                   palettes: { palette_0: { colors: [{ name: "Color 0" }], valToIndex: { 100: 0 } } }
  //                 },
  //       constructor: function () {
  //         this.main = function (context, inputCallback) {
  //           var range,perc
  //           return this._context = context, (range = (this._input = inputCallback)(0), function (open, high, low, close, range) {
  //             perc = 100 * Math.abs(open - close) / Math.abs(high - low);
  //             let bool;
  //             return bool = perc <= range, bool;
  //           }(PineJS.Std.open(this._context), PineJS.Std.high(this._context), PineJS.Std.low(this._context), PineJS.Std.close(this._context),range)) ? [100] : [NaN];
  //         };
  //       }
  //     });
  //   }
  // },




  boring = {
    getIndicatorTemplates: function (PineJS) {
      console.log("pine getIndicatorTemplates :: ", common)
      return common.setNameAndRequiredField("PCR Ratio", {
        metainfo: {
          plots: [
            {
                id: 'plot_0',
                type: 'line',
            },
            {
                id: 'plot_1',
                type: 'line',
            },
            // {
            //     id: 'plot_2',
            //     type: 'colorer',
            //     target: 'filledAreaId1',
            //     palette: 'paletteId1',
            // },
        ],

        // filledAreas: [
        //     {
        //         id: 'filledAreaId1',
        //         objAId: 'plot_0',
        //         objBId: 'plot_1',
        //         title: 'Filled area between first and second plot',
        //         type: 'plot_plot',
        //         palette: 'paletteId1',
        //     },
        // ],

        palettes: {
            paletteId1: {
                valToIndex: {
                    0: 0,
                    1: 1,
                },
                colors: {
                    0: {
                        name: 'First color',
                    },
                    1: {
                        name: 'Second color',
                    },
                },
            },
        },
        defaults: {
            // filledAreasStyle: {
            //     filledAreaId1: {
            //         color: 'yellow',
            //         visible: true,
            //         transparency: 40,
            //     },
            // },

            palettes: {
                paletteId1: {
                    colors: {
                        0: {
                            color: 'red',
                            width: 1,
                            style: 0,
                        },
                        1: {
                            color: 'blue',
                            width: 3,
                            style: 1,
                        },
                    },
                },
            },

            styles:
            {
                plot_0: {
                    linestyle: 0,
                    visible: true,
                    linewidth: 1,
                    plottype: 2,
                    trackPrice: true,
                    color: 'blue'
                },
                plot_1: {
                    linestyle: 1,
                    visible: true,
                    linewidth: 2,
                    plottype: 2,
                    trackPrice: true,
                    color: 'red'
                },
            },
            precision: 4,
            inputs: {}
        },
        styles:
        {
            plot_0:
            {
                title: 'First plot',
                histogramBase: 0,
            },
            plot_1:
            {
                title: 'Second plot',
                histogramBase: 0,
            },
        },
        inputs: [],
        format: {
            type: 'price',
            precision: 4,
        },
    },
    constructor:  function() {
        this.main =async  function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            var curTime = Math.round((new Date).getTime() / 1000)
            // let data=await getHistoryData(context.symbol.info,"15",{ from: curTime, to: curTime })
            // console.log("DATA :: ",PineJS.Std.ticker(this._context))
            console.log("DATA :: ",context)
            var value = Math.random() * 200 - 100;
            var colorIndex = value > 0 ? 0 : 1;

            return [0, value, colorIndex];
        }
        }
      });
    }
  },





  smi = function () {
    const plots = {}
    return {
      getIndicatorTemplates: function (PineJS) {
        var indicatorTemplate = {
          metainfo: {
            defaults: {
              //   inputs: {"BB Length": 20, "BB MultFactor": 2.0, "KC Length": 20, "KC MultFactor": 1.5,"Use TrueRange (KC)": true},
              inputs: [
                { id: "BB Length", name: "BB Length", type: "integer", isHidden: false, defval: 20 },
                { id: "BB MultFactor", name: "BB MultFactor", type: "float", isHidden: false, defval: 2.0 },
                { id: "KC Length", name: "KC Length", type: "integer", isHidden: false, defval: 20 },
                { id: "KC MultFactor", name: "KC MultFactor", type: "float", isHidden: false, defval: 1.5 },
                { id: "Use TrueRange (KC)", name: "Use TrueRange (KC)", type: "boolean", isHidden: false, defval: true }]
            }
          }
        }
        return common.setNameAndRequiredField("Squeeze Momentum Indicator", indicatorTemplate);
      }
    }

  },
  cpr = function () {
    const plots = { daily_pivot: "#0000FF", daily_bc: "#0000FF", daily_tc: "#0000FF", daily_s1: "#FF0000", daily_r1: "#008000", daily_s2: "#FF0000", daily_r2: "#008000", daily_s3: "#FF0000", daily_r3: "#008000", daily_s4: "#FF0000", daily_r4: "#008000", previous_day_high: "#FF7F00", previous_day_low: "#FF7F00" };
    return {
      getIndicatorTemplates: function (PineJS) {
        var indicatorTemplate = {
          metainfo: { plots: common.getPlots(plots), defaults: { styles: common['getDefaultStyle'](plots), precision: 2, inputs: {} }, styles: common['getStyle'](plots), inputs: [] }, constructor: function () {
            this.init = function (context, inputCallback) {
              var symbol
              this._context = context, this._input = inputCallback, symbol = PineJS.Std['ticker'](this._context), this._context.new_sym(symbol, PineJS.Std.period(this._context));
            }, this.main = function (context, inputCallback) {
              try {
                this._context = context, this._input = inputCallback, this._context.select_sym(1);
                var time = PineJS.Std.time(this._context);

                if (isNaN(time)) return [NaN];
                var dmyTime = customIndicator.getDateMonthYear(time), symbol = PineJS.Std.ticker(this._context), bar = customIndicator['getMapping']()[symbol][dmyTime];
                var prev_day_high, prev_day_low, prev_day_close, pivot, bottomCPR, s1, r1, s2, r2, s3, r3
                if (!bar) return [NaN];
                var previousDate = bar.previousDate, previousBar = customIndicator['getMapping']()[symbol][previousDate];
                return previousBar ? (prev_day_high = previousBar['high'], prev_day_low = previousBar['low'], prev_day_close = previousBar.close, [pivot = (prev_day_high + prev_day_low + prev_day_close) / 3, bottomCPR = (prev_day_high + prev_day_low) / 2, 2 * pivot - bottomCPR, s1 = 2 * pivot - prev_day_high, r1 = 2 * pivot - prev_day_low, s2 = pivot - prev_day_high + prev_day_low, r2 = pivot + prev_day_high - prev_day_low, s3 = s1 - prev_day_high + prev_day_low, r3 = r1 + prev_day_high - prev_day_low, s3 + s2 - s1, r3 + r2 - r1, prev_day_high, prev_day_low]) : [NaN];
              } catch (error) {
                return console.error("Error in cpr module indicator : ", error), [NaN];
              }
            };
          }
        };
        return common.setNameAndRequiredField("CPR with Daily Pivot levels", indicatorTemplate);
      }
    };
  }(),
  cpr_weekly = function () {
    const plots = { weekly_pivot: "#0000FF", weekly_bc: "#0000FF", weekly_tc: "#0000FF", weekly_s1: "#FF0000", weekly_r1: "#008000", weekly_s2: "#FF0000", weekly_r2: "#008000", weekly_s3: "#FF0000", weekly_r3: "#008000", weekly_s4: "#FF0000", weekly_r4: "#008000", previous_week_high: "#FF7F00", previous_week_low: "#FF7F00" };
    return {
      getIndicatorTemplates: function (PineJS) {
        var indicatorTemplate = {
          metainfo: { plots: common.getPlots(plots), defaults: { styles: common['getDefaultStyle'](plots), precision: 2, inputs: {} }, styles: common['getStyle'](plots), inputs: [] }, constructor: function () {
            this.init = function (context, inputCallback) {
              var symbol
              this._context = context, this._input = inputCallback, symbol = PineJS.Std['ticker'](this._context), this._context.new_sym(symbol, PineJS.Std.period(this._context));
            }, this.main = function (context, inputCallback) {
              try {
                this._context = context, this._input = inputCallback, this._context.select_sym(1);

                var time = PineJS.Std.time(this._context);
                if (isNaN(time)) return [NaN];
                var dmyTime = customIndicator.getWeekMonthYear(time), symbol = PineJS.Std.ticker(this._context), bar = customIndicator['getWeeklyMapping']()[symbol][dmyTime];
                var prev_week_high, prev_week_low, prev_week_close, pivot, bottomCPR, s1, r1, s2, r2, s3, r3
                if (!bar) return [NaN];
                var previousDate = bar.previousDate, previousBar = customIndicator['getWeeklyMapping']()[symbol][previousDate];
                var ret_val = previousBar ? (prev_week_high = previousBar['high'], prev_week_low = previousBar['low'], prev_week_close = previousBar.close, [pivot = (prev_week_high + prev_week_low + prev_week_close) / 3, bottomCPR = (prev_week_high + prev_week_low) / 2, 2 * pivot - bottomCPR, s1 = 2 * pivot - prev_week_high, r1 = 2 * pivot - prev_week_low, s2 = pivot - prev_week_high + prev_week_low, r2 = pivot + prev_week_high - prev_week_low, s3 = s1 - prev_week_high + prev_week_low, r3 = r1 + prev_week_high - prev_week_low, s3 + s2 - s1, r3 + r2 - r1, prev_week_high, prev_week_low]) : [NaN];
                return ret_val
              } catch (error) {
                return console.error("Error in cpr module indicator : ", error), [NaN];
              }
            };
          }
        };
        return common.setNameAndRequiredField("ASH", indicatorTemplate);
      }
    };
  }(),
  ohCL = function () {
    const plots = { previous_day_high: "#4CAF50", previous_day_close: "#2196F3", previous_day_open: "#00BCD4", previous_day_low: "#FF5252" };
    return {
      getIndicatorTemplates: function (PineJS) {
        var indicatorTemplate = {
          metainfo: { plots: common.getPlots(plots), defaults: { styles: common.getDefaultStyle(plots), precision: 2, inputs: {} }, styles: common.getStyle(plots), inputs: [] }, constructor: function () {
            this.init = function (context, inputCallback) {
              var symbol
              this._context = context, this._input = inputCallback, symbol = PineJS.Std.ticker(this._context), this._context.new_sym(symbol, PineJS.Std.period(this._context));
            }, this.main = function (context, inputCallback) {
              try {
                this._context = context, this._input = inputCallback, this._context.select_sym(1);
                var time = PineJS.Std.time(this._context);
                var prev_day_high, prev_day_low, prev_day_close, prev_day_open
                if (isNaN(time)) return [NaN];
                var curDate = customIndicator.getDateMonthYear(time), symbol = PineJS.Std.ticker(this._context), curMapping = customIndicator["getMapping"]()[symbol][curDate];
                if (!curMapping) return [NaN];
                var previousDate = curMapping.previousDate, prevMapping = customIndicator["getMapping"]()[symbol][previousDate];
                return prevMapping ? (prev_day_high = prevMapping.high, prev_day_low = prevMapping.low, prev_day_close = prevMapping.close, prev_day_open = prevMapping.open, [prev_day_high, prev_day_close, prev_day_open, prev_day_low]) : [NaN];
              } catch (error) {
                return console.log("Error ohcl module indicator: ", error), [NaN];
              }
            };
          }
        };
        return common.setNameAndRequiredField("Previous day OHLC", indicatorTemplate);
      }
    };
  }()
//  anchor = function () {
//   const plots = { previous_day_close: "#FF7F00" };
//   let _0x188cf7 = 0, _0x1ae7b8 = 0, _0x483981 = false, _0x7ae044 = "", _0x58da04 = "", _0x1bcb7c = "", _0xa7e4e = { barTime: "", VWAP: "", volume: "" };
//   function resetDefault() {
//     _0x1ae7b8 = 0, _0x188cf7 = 0, _0x483981 = false;
//   }
//   function vwapCalculator(vwapType, volume, barTime) {
//     var _0x1454d6;
//     return _0x1454d6 = barTime, _0xa7e4e["barTime"] === _0x1454d6 && (_0x188cf7 -= _0xa7e4e.VWAP * _0xa7e4e["volume"], _0x1ae7b8 -= _0xa7e4e["volume"]), _0xa7e4e = { VWAP: vwapType, volume: volume, barTime: barTime }, function (_0x5be5e, _0x45e8a2) {
//       return _0x5be5e = _0x5be5e * _0x45e8a2 + _0x188cf7, _0x188cf7 = _0x5be5e, _0x45e8a2 += _0x1ae7b8, (_0x1ae7b8 = _0x45e8a2, _0x5be5e / _0x45e8a2);
//     }(vwapType, volume);
//   }
//   return {
//     getIndicatorTemplates: function (PineJS) {
//       var indicatorTemplate = {
//         metainfo: { plots: common.getPlots(plots), defaults: { styles: common.getDefaultStyle(plots), precision: 2, inputs: { Year: anchorConstants.yearDefault, Day: anchorConstants["dayDefault"], Month: anchorConstants["monthDefault"], Hour: anchorConstants["hourDefault"], Minute: anchorConstants["minuteDefault"], VWAP: anchorConstants.close } }, styles: common.getStyle(plots), inputs: anchorHelper["userInputOptions"]() }, constructor: function () {
//           this.init = function (context, inputCallback) {
//             this._context = context, this._input = inputCallback, this._context.new_sym(PineJS.Std.ticker(this._context), PineJS.Std.period(this._context));
//           }, this.main = function (context, inputCallback) {
//             try {
//               this._context = context, this._input = inputCallback, this._context.select_sym(1);
//               var symbol = PineJS.Std["ticker"](this._context),_0x531cfa,_0x358f87,_0x324700,dateObj,_0x4634c3,_0x2e2769,_0x27a258, period = PineJS.Std.period(this._context), curTime = PineJS.Std.time(this._context);
//               if (isNaN(curTime)) return resetDefault(), [NaN];
//               dateObj = anchorHelper.getInputData(this._input);
//               if (curTime < common.getUnixTimeStamp(dateObj)) return resetDefault(), [NaN];
//               var dateObj2 = common.getDateObject(curTime);
//               _0x531cfa = symbol, _0x358f87 = dateObj, _0x324700 = period, _0x7ae044 && _0x531cfa != _0x7ae044 && resetDefault(), _0x358f87 = JSON.stringify(_0x358f87), _0x58da04 && _0x58da04 != _0x358f87 && resetDefault(), _0x1bcb7c && _0x1bcb7c != _0x324700 && resetDefault(), _0x1bcb7c = _0x324700, _0x58da04 = _0x358f87, _0x7ae044 = _0x531cfa, _0x4634c3 = dateObj, _0x2e2769 = dateObj2, _0x483981 || JSON.stringify(_0x4634c3) == JSON.stringify(_0x2e2769) && (_0x483981 = true);
//               var vwap = function (PineJS, context, input) {
//                 let vwapType = input(5);
//                 return vwapType = vwapType || "close", PineJS.Std[vwapType](context);
//               }(PineJS, this._context, inputCallback), volume = PineJS.Std.volume(this._context);
//               return _0x483981 ? (vwapCalculator(vwap, volume, curTime)) : (resetDefault(), [NaN]);
//             } catch (error) {
//               return console.log("Error in Anchor module indicator : ", error), [NaN];
//             }
//           };
//         }
//       };
//       return common.setNameAndRequiredField("Anchored VWAP", indicatorTemplate);
//     }, resetDefault: resetDefault
//   };
// }(),

//  anchorConstants = { yearDefault: (new Date)["getFullYear"](), monthDefault: (new Date)["getMonth"]() + 1, dayDefault: (new Date)["getDate"](), hourDefault: 9, minuteDefault: 15, close: "close" }, anchorHelper = {
//   userInputOptions: function () {
//     return [
//     { id: "Year", name: "Year", type: "integer", isHidden: false, defval: anchorConstants["yearDefault"], max: 9999, min: 1e3 }, 
//     { id: "Month", name: "Month", type: "integer", isHidden: false, defval: anchorConstants["monthDefault"], max: 12, min: 1 },
//     { id: "Day", name: "Day", type: "integer", isHidden: false, defval: anchorConstants["dayDefault"], max: 31, min: 1 },
//     { id: "Hour", name: "Hour", type: "integer", isHidden: false, defval: anchorConstants["hourDefault"], max: 24, min: 1 },
//     { id: "Minute", name: "Minute", type: "integer", isHidden: false, defval: anchorConstants.minuteDefault, max: 60, min: 0 },
//     { id: "VWAP", name: "VWAP", type: "text", isHidden: false, options: ["close", "open", "high", "low", "hl2", "hlc3", "ohlc4"], defval: anchorConstants["close"] }
//   ];
//   },
//    getInputData: function (input) {
//     let inputMap = {};
//     return inputMap["Year"] = input(0), inputMap.Month = input(1), inputMap.Day = input(2), inputMap.Hour = input(3), inputMap.Minute = input(4), inputMap;
//   }
// };

// function _0x3e7f() {
//   var _0x552e67 = ["Anchored VWAP", "getDefaultStyle", "ticker", "4501200idSQub", "high", "name", "title", "Jun", "Month", "parse", "May", "Day", "hl2", "color", "hlc3", "bar_colorer", "bars", "Error in Anchor module indicator : ", "volume", "hasOwnProperty", "close", "_context", "1369296fAcTtV", "getIndicatorTemplates", "Mar", "79054IpORqR", "@tv-basicstudies-1", "minuteDefault", "getStyle", "new_sym", "barTime", "stringify", "552jPSWaT", "Error in cpr module indicator : ", "is_price_study", "40zbQPkX", "CPR with Pivot levels", "Oct", "log", "Candle Range <=", "getFullYear", "673895KJzTHp", "toString", "Apr", "resolve", "Jan", "Dec", "getMapping", "getUnixTimeStamp", "Previous day OHLC", "text", "#FF0000", "Jul", "round", "VWAP", "is_hidden_study", "integer", "getDate", "open", "#FF7F00", "hourDefault", "description", "dayDefault", "push", "catch", "#FF5252", "init", "main", "Std", "#0000FF", "period", "yearDefault", "Error ohcl module indicator: ", "Hour", "#4CAF50", "Nov", "monthDefault", "22324510opMuAa", "time", "#00BCD4", "Sep", "Year", "userInputOptions", "_input", "#008000", "Boring candle", "split", "Error in convertBarsToObject : ", "1rJboOE", "getMonth", "getPlots", "114765FvwzWD", "Aug", "getBars", "shortDescription", "getDateObject", "Minute", "plot_0", "select_sym", "length", "964971WpGEgY", "low", "getIndicatorValues : failed to load all bars", "setNameAndRequiredField"];
//   _0x3e7f = function () {
//     // console.log("_0x3e7f :: ",_0x3e7f,_0x552e67)
//     return _0x552e67;
//   };
//   return _0x3e7f();
// }

async function getHistoryData(symbolInfo, resolution, periodParams) {
  var data11;
  if (resolution == "1D" || resolution == "1W" || resolution == "1M") {
    var requestOptions = JSON.stringify({ "sym": symbolInfo.name, "from": periodParams.from, "to": periodParams.to })
    data11 = await makeApiRequest(`${myntDCUrl}getdata`, requestOptions);
    if (data11.length > 0) {
      data11 = await data11.map(JSON.parse);
      // data11=JSON.parse(data11)
      // console.log("data11 : ",data11)
    } else {
      console.log("data11 :::::::: ", data11 != [])
      // onHistoryCallback([], { noData: true });
      return;
    }
  } else {
    requestOptions = `jData={"uid":"${userid}","exch":"${symbolInfo['exchange']}","token":"${symbolInfo['base_name']}","st":"${periodParams.from - 320000}","et":"${periodParams.to}","intrv":"${resolution}"}&jKey=${usession}`;
    data11 = await makeApiRequest(`${mynturl}TPSeries`, requestOptions);
  }
  try {
    if (data11.stat == 'Not_Ok' || data11 == []) {
      // onHistoryCallback([], { noData: true });
      return;
    }
    let data = data11.map(d => {
      return { time: parseFloat(d.ssboe), open: parseFloat(d.into), high: parseFloat(d.inth), low: parseFloat(d.intl), close: parseFloat(d.intc), volume: parseFloat(d.intv) ,oi: parseFloat(d.intv)}
    });
    data = data.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
    // console.log("[bar] data : ",data)

    return data
    // onHistoryCallback(bars, { noData: false });

  } catch (error) {
    // onErrorCallback(error);
  }

}