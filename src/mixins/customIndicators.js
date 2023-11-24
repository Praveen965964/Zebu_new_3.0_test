/* eslint-disable no-unused-vars */
/* eslint-disable no-func-assign */
import { makeApiRequest, userid, usession } from './apiConnectionPool.js';
import { mynturl, myntDCUrl } from "../apiUrl.js";
import Datafeed from "./feedFactory.js";

const lastBarsCache = new Map();
var dayWiseDataMap = {};

export var common = {
  setNameAndRequiredField: function (name, indicatorTemplate) {
    var metaInfo = indicatorTemplate.metainfo
    metaInfo['id'] = name + '@tv-basicstudies-1',
      (metaInfo)._metainfoVersion = 51,
      metaInfo.name = name,
      metaInfo['description'] = name,
      metaInfo['shortDescription'] = name,
      metaInfo['is_hidden_study'] = false,
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
      // console.log("pine dateMonthYear :: ", date)
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
        // return templates.push(
          // cpr_weekly.getIndicatorTemplates(PineJS), 
          templates.push(cpr['getIndicatorTemplates'](PineJS)),
          templates.push(ohCL["getIndicatorTemplates"](PineJS)),
          templates.push(boring["getIndicatorTemplates"](PineJS))
          //  templates.push(anchor["getIndicatorTemplates"](PineJS)),
          return Promise.resolve(templates);
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
      // console.log("pine getIndicatorTemplates :: ", common)
      return common.setNameAndRequiredField("open Interest", {
        metainfo: {
          _metainfoVersion: 51,
          id: 'Open Interest',
          description: 'Open Interest',
          shortDescription: 'Open Interest',
          is_hidden_study: false,
          is_price_study: false,
          isCustomIndicator: true,
          format: {
            type: 'price',
            precision: 1,
          },
          plots: [
            {
              id: 'plot_0',
              type: 'line',
            },
            {
              id: 'OI_MA',
              type: 'line',
            }
          ],
          defaults:{
            styles:{
              'plot_0':{
                linestyle: 0,
                visible: true,
                linewidth: 1,
                plottype: 0,
                trackPrice: false,
                color: 'blue'
              },
              'OI_MA':{
                linestyle: 0,
                visible: true,
                linewidth: 1,
                plottype: 0,
                trackPrice: false,
                color: 'black'
              }
            },
            precision: 1,
            inputs: {
              length:20,
              ma:'SMA'
            }
          },
          styles:{
            'plot_0':{
            title: 'OI Line',
            histogramBase: 0,
            },
            'OI_MA':{
              title: 'OI MA',
              histogramBase: 0,
            }
          },
          'inputs': [
            {
              id:"length",
              name: "MA Length",
              type: "integer",
              isHidden: false,
              defval: 20,
              min: 1,
              max: 200,	
            },
            {
              id: "ma", name: "MA Type", type: "text", defval: 'SMA', options: ['SMA', 'EMA'], optionsTitles: {
                'SMA': 'SMA',
                'EMA': 'EMA'
              }
            }
          ],
        },
        constructor: function() {

          this.init = function(context, inputCallback) {
            this._context = context;
            this._input = inputCallback;

            var symbol = PineJS.Std.ticker(this._context);
            var period = PineJS.Std.period(this._context);
            // console.log("period :: ",period)
            this._context.new_sym(symbol+"$OISYMBOL",period);
          };

          this.main = function(context, inputCallback) {
            // console.log("this.main context :: ",context)
            this._context = context;
            this._input = inputCallback;
            this._context.select_sym(1);
            let length = this._input(0);
            let type = this._input(1);
            let OI = PineJS.Std.close(this._context);
            // console.log("this.main OI :: ",OI)
            let OISeries = context.new_var(PineJS.Std.close(this._context));
            // console.log("this.main OISeries :: ",PineJS.Std.close(this._context),OISeries)
            let MA;
            if(type == 'SMA'){
              MA = PineJS.Std.sma(OISeries, length, this._context);
            }else {
              MA =  PineJS.Std.ema(OISeries, length, this._context);
            }
            if(isNaN(OI) || OI == 0){
              return 
            }
            return [OI,MA]
          };
        }
      });
    }
  },

  cpr = {
    getIndicatorTemplates: function (PineJS) {
      // console.log("pine getIndicatorTemplates :: ", common)
      return common.setNameAndRequiredField("CPR with Pivot Level Daily", {
        metainfo: {
          _metainfoVersion: 51,
          id: 'CPRwithPivotLevelDaily@tv-basicstudies-1',
          description: 'CPR with Pivot Level Daily',
          shortDescription: 'CPR with Pivot Level Daily',
          is_hidden_study: false,
          is_price_study: true,
          isCustomIndicator: true,
          format: {
            type: 'price',
            precision: 2,
          },

          plots: [{ id: 'daily_pivot', type: 'line' }, { id: 'high', type: 'line' }, { id: 'low', type: 'line' },
          { id: 'daily_bc', type: 'line' }, { id: 'daily_tc', type: 'line' },
          { id: 'daily_s1', type: 'line' }, { id: 'daily_r1', type: 'line' }, { id: 'daily_s2', type: 'line' },
          { id: 'daily_r2', type: 'line' }, { id: 'daily_s3', type: 'line' }, { id: 'daily_r3', type: 'line' },
          { id: 'daily_s4', type: 'line' }, { id: 'daily_r4', type: 'line' }],
          defaults: {
            styles: {
              daily_pivot: {
                linestyle: 0,
                visible: true,
                linewidth: 3,
                plottype: 6,
                trackPrice: false,
                color: '#F8AF85'
              },
              daily_bc: {
                linestyle: 0,
                visible: true,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#9C50E4'
              },
              daily_tc: {
                linestyle: 0,
                visible: true,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#91A9F1'
              },
              high: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#6cac6e'
              },
              low: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#eb2d2d'
              },
              daily_s1: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#FF0000'
              },
              daily_r1: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#008000'
              },
              daily_s2: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#FF0000'
              },
              daily_r2: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#008000'
              },
              daily_s3: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#FF0000'
              },
              daily_r3: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#008000'
              },
              daily_s4: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#FF0000'
              },
              daily_r4: {
                linestyle: 0,
                visible: false,
                linewidth: 3,
                plottype: 6,

                // Show price line?
                trackPrice: false,

                // Plot color
                color: '#008000'
              },

            },
            precision: 2,
            inputs: {}
          },
          styles: {
            daily_pivot: {
              title: 'Daily Central Pivot',
              histogramBase: 1,
            }, high: {
              title: 'Prev Day High',
              histogramBase: 1,
            }, low: {
              title: 'Prev Day Low',
              histogramBase: 1,
            }, daily_bc: {
              title: 'Daily Bottom Pivot',
              histogramBase: 1,
            }, daily_tc: {
              title: 'Daily Top Pivot',
              histogramBase: 1,
            }, daily_s1: {
              title: 'Daily S1',
              histogramBase: 1,
            }, daily_r1: {
              title: 'Daily R1',
              histogramBase: 1,
            }, daily_s2: {
              title: 'Daily S2',
              histogramBase: 1,
            }, daily_r2: {
              title: 'Daily R2',
              histogramBase: 1,
            }, daily_s3: {
              title: 'Daily S3',
              histogramBase: 1,
            }, daily_r3: {
              title: 'Daily R3',
              histogramBase: 1,
            }, daily_s4: {
              title: 'Daily S4',
              histogramBase: 1,
            }, daily_r4: {
              title: 'Daily R4',
              histogramBase: 1,
            }
          },
          'inputs': [],
        },

        constructor: function () {
          this.init = async function (context, inputCallback) {
            this._context = context;
            this._input = inputCallback;
            var symbol = PineJS.Std.ticker(this._context);
            var period = PineJS.Std.period(this._context);
            period = period[period.length -1];
            // let isOption = this._context.symbol['info']['Inst'].includes('OPT');
            // let isCur = this._context.symbol['info']['SEGMENT'] == 'C';
            // initilizeCPRData(context.ctx_index)
              await this._context.new_sym(symbol + "$OISYMBOL", period);
          };

          this.main = function (context, inputCallback) {
            try {
              // print("Context",context)
              // console.log("this.main context :: ",context)
              this._context = context;
              this._input = inputCallback;

              this._context.select_sym(0);

              let barTime = PineJS.Std.time(this._context);
              // print("BarTime", barTime)
              if (isNaN(barTime)) return
              let dayDiff = (new Date().getTime() - barTime) / (1000 * 3600 * 24);
              if(dayDiff > 30) return;
              let tempObj = {};
              try {
                let dateTime = customeMapDateFormatter(barTime);

                let symbol = this._context.symbol.ticker;
                symbol = symbol.split(':')[1];
                symbol = symbol.includes("$OISYMBOL") ? symbol.replace("$OISYMBOL","") : symbol;

                if (!dayWiseDataMap[symbol]) return NaN;
                
                if (!dayWiseDataMap[symbol][dateTime]) {
                  let lastItem = dayWiseDataMap[symbol].dataArray[0];
                  tempObj.prevData = {
                    open: lastItem.open,
                    close: lastItem.close,
                    high: lastItem.high,
                    low: lastItem.low,
                  };
                }


                let data = dayWiseDataMap[symbol][dateTime] ? dayWiseDataMap[symbol][dateTime] : tempObj;
                if (!data.prevData) return NaN;
                let prev_day_high = data.prevData.high;

                let prev_day_low = data.prevData.low;

                let prev_day_close = data.prevData.close;

                let daily_pivot = (prev_day_high + prev_day_low + prev_day_close) / 3;
                let daily_bc = (prev_day_high + prev_day_low) / 2;
                let daily_tc = 2 * daily_pivot - daily_bc;
                let daily_r1 = 2 * daily_pivot - prev_day_low;
                let daily_r2 = daily_pivot + prev_day_high - prev_day_low;
                let daily_r3 = daily_r1 + prev_day_high - prev_day_low;
                let daily_r4 = daily_r3 + daily_r2 - daily_r1;
                let daily_s1 = 2 * daily_pivot - prev_day_high;
                let daily_s2 = daily_pivot - prev_day_high + prev_day_low;
                let daily_s3 = daily_s1 - prev_day_high + prev_day_low;
                let daily_s4 = daily_s3 + daily_s2 - daily_s1;
                return [daily_pivot, prev_day_high, prev_day_low, daily_bc, daily_tc, daily_s1, daily_r1, daily_s2,
                  daily_r2, daily_s3, daily_r3, daily_s4, daily_r4]
              } catch (e) {
                console.error("catch 1",e)
                return [NaN]
              }

            } catch (e) {
              console.error("catch 2",e)
              return [NaN]
            }

            // return [NaN]

          };
        }
  })}},



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
  // cpr = function () {
  //   const plots = { daily_pivot: "#0000FF", daily_bc: "#0000FF", daily_tc: "#0000FF", daily_s1: "#FF0000", daily_r1: "#008000", daily_s2: "#FF0000", daily_r2: "#008000", daily_s3: "#FF0000", daily_r3: "#008000", daily_s4: "#FF0000", daily_r4: "#008000", previous_day_high: "#FF7F00", previous_day_low: "#FF7F00" };
  //   return {
  //     getIndicatorTemplates: function (PineJS) {
  //       var indicatorTemplate = {
  //         metainfo: { plots: common.getPlots(plots), defaults: { styles: common['getDefaultStyle'](plots), precision: 2, inputs: {} }, styles: common['getStyle'](plots), inputs: [] }, constructor: function () {
  //           this.init = function (context, inputCallback) {
  //             var symbol
  //             this._context = context, this._input = inputCallback, symbol = PineJS.Std['ticker'](this._context), this._context.new_sym(symbol, PineJS.Std.period(this._context));
  //           }, this.main = function (context, inputCallback) {
  //             try {
  //               this._context = context, this._input = inputCallback, this._context.select_sym(1);
  //               var time = PineJS.Std.time(this._context);

  //               if (isNaN(time)) return [NaN];
  //               var dmyTime = customIndicator.getDateMonthYear(time), symbol = PineJS.Std.ticker(this._context), bar = customIndicator['getMapping']()[symbol][dmyTime];
  //               var prev_day_high, prev_day_low, prev_day_close, pivot, bottomCPR, s1, r1, s2, r2, s3, r3
  //               if (!bar) return [NaN];
  //               var previousDate = bar.previousDate, previousBar = customIndicator['getMapping']()[symbol][previousDate];
  //               return previousBar ? (prev_day_high = previousBar['high'], prev_day_low = previousBar['low'], prev_day_close = previousBar.close, [pivot = (prev_day_high + prev_day_low + prev_day_close) / 3, bottomCPR = (prev_day_high + prev_day_low) / 2, 2 * pivot - bottomCPR, s1 = 2 * pivot - prev_day_high, r1 = 2 * pivot - prev_day_low, s2 = pivot - prev_day_high + prev_day_low, r2 = pivot + prev_day_high - prev_day_low, s3 = s1 - prev_day_high + prev_day_low, r3 = r1 + prev_day_high - prev_day_low, s3 + s2 - s1, r3 + r2 - r1, prev_day_high, prev_day_low]) : [NaN];
  //             } catch (error) {
  //               return console.error("Error in cpr module indicator : ", error), [NaN];
  //             }
  //           };
  //         }
  //       };
  //       return common.setNameAndRequiredField("CPR with Daily Pivot levels", indicatorTemplate);
  //     }
  //   };
  // }(),
  // cpr_weekly = function () {
  //   const plots = { weekly_pivot: "#0000FF", weekly_bc: "#0000FF", weekly_tc: "#0000FF", weekly_s1: "#FF0000", weekly_r1: "#008000", weekly_s2: "#FF0000", weekly_r2: "#008000", weekly_s3: "#FF0000", weekly_r3: "#008000", weekly_s4: "#FF0000", weekly_r4: "#008000", previous_week_high: "#FF7F00", previous_week_low: "#FF7F00" };
  //   return {
  //     getIndicatorTemplates: function (PineJS) {
  //       var indicatorTemplate = {
  //         metainfo: { plots: common.getPlots(plots), defaults: { styles: common['getDefaultStyle'](plots), precision: 2, inputs: {} }, styles: common['getStyle'](plots), inputs: [] }, constructor: function () {
  //           this.init = function (context, inputCallback) {
  //             var symbol
  //             this._context = context, this._input = inputCallback, symbol = PineJS.Std['ticker'](this._context), this._context.new_sym(symbol, PineJS.Std.period(this._context));
  //           }, this.main = function (context, inputCallback) {
  //             try {
  //               this._context = context, this._input = inputCallback, this._context.select_sym(1);

  //               var time = PineJS.Std.time(this._context);
  //               if (isNaN(time)) return [NaN];
  //               var dmyTime = customIndicator.getWeekMonthYear(time), symbol = PineJS.Std.ticker(this._context), bar = customIndicator['getWeeklyMapping']()[symbol][dmyTime];
  //               var prev_week_high, prev_week_low, prev_week_close, pivot, bottomCPR, s1, r1, s2, r2, s3, r3
  //               if (!bar) return [NaN];
  //               var previousDate = bar.previousDate, previousBar = customIndicator['getWeeklyMapping']()[symbol][previousDate];
  //               var ret_val = previousBar ? (prev_week_high = previousBar['high'], prev_week_low = previousBar['low'], prev_week_close = previousBar.close, [pivot = (prev_week_high + prev_week_low + prev_week_close) / 3, bottomCPR = (prev_week_high + prev_week_low) / 2, 2 * pivot - bottomCPR, s1 = 2 * pivot - prev_week_high, r1 = 2 * pivot - prev_week_low, s2 = pivot - prev_week_high + prev_week_low, r2 = pivot + prev_week_high - prev_week_low, s3 = s1 - prev_week_high + prev_week_low, r3 = r1 + prev_week_high - prev_week_low, s3 + s2 - s1, r3 + r2 - r1, prev_week_high, prev_week_low]) : [NaN];
  //               return ret_val
  //             } catch (error) {
  //               return console.error("Error in cpr module indicator : ", error), [NaN];
  //             }
  //           };
  //         }
  //       };
  //       return common.setNameAndRequiredField("ASH", indicatorTemplate);
  //     }
  //   };
  // }(),
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
    var requestOptions = JSON.stringify({ "sym": symbolInfo.name, "from": periodParams.from, "to": periodParams.to })
    data11 = await makeApiRequest(`${myntDCUrl}getdata`, requestOptions);
    if (data11.length > 0) {
      data11 = await data11.map(JSON.parse);
      // data11=JSON.parse(data11)
      // console.log("data11 : ",data11)
    } else {
      // console.log("data11 :::::::: ", data11 != [])
      // onHistoryCallback([], { noData: true });
      return;
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

function customeMapDateFormatter(date) {
  date = new Date(date);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  // console.log("return" ,month + "/" + day + "/" + year)
  return month + "/" + day + "/" + year;
}

export async function getcprData(symbolInfo,periodParams){
  let symName = symbolInfo.exchange+":"+symbolInfo.base_name
  symName = symName.includes("$OISYMBOL")?symName.replace("$OISYMBOL",""):symName;
  symName = symName.includes(" ")?symName.replace(" ","%20"):symName;
  symName = symName.includes("&")?symName.replace("&","%26"):symName;
  let requestOptions = `jData={"sym":"${symName}","from":"${periodParams.from - 31556926}","to":"${periodParams.to}"}&jKey=${usession}`
  let data11 = await makeApiRequest(`${mynturl}EODChartData`, requestOptions);
  if(data11.length>0){
        data11 = await data11.map(JSON.parse);
        mapCPRData(data11,symbolInfo.name)
  }
  else{
    Promise.resolve("Failed to fetch data");
  }

}



function mapCPRData(data, symbol) {
  symbol = symbol.split(':')[1];
  symbol = symbol.includes("$OISYMBOL") ? symbol.replace("$OISYMBOL","") : symbol;
  let tempArray1 = [];
  let currTime = new Date().getTime();

  //Day Wise mapping
  try {
    if (!dayWiseDataMap[symbol]) {
      dayWiseDataMap[symbol] = {};
      dayWiseDataMap[symbol]["dataArray"] = [];
    } else {
      tempArray1 = dayWiseDataMap[symbol]["dataArray"];
    }
    for (let x = 0; x < data.length; x++) {
      let dayDiff = (currTime - data[x]['time']) / (1000 * 3600 * 24);
      if(dayDiff > 30) continue;
      let tempObj = data[x];
      let dateTime = customeMapDateFormatter(data[x]['time']);
      if (!dayWiseDataMap[symbol][dateTime]) {
        dayWiseDataMap[symbol][dateTime] = {
          open: Number(tempObj['into']),
          high: Number(tempObj['inth']),
          low: Number(tempObj['intl']),
          close: Number(tempObj['intc']),
          time: tempObj['time'],
          volume: Number(tempObj['intv']),
          dateTime: dateTime,
          date: new Date(dateTime)
        };
        tempArray1.push(dayWiseDataMap[symbol][dateTime]);
        
      } else {
        dayWiseDataMap[symbol][dateTime]['high'] = Math.max(dayWiseDataMap[symbol][dateTime]['high'], Number(tempObj['inth']));
        dayWiseDataMap[symbol][dateTime]['low'] = Math.min(dayWiseDataMap[symbol][dateTime]['low'], Number(tempObj['intl']));
        dayWiseDataMap[symbol][dateTime]['close'] = Number(tempObj['intc']);
        dayWiseDataMap[symbol][dateTime]['volume'] += Number(tempObj['intv']) * 1;
        tempArray1.filter(data => {
          if (data.dateTime == dateTime) {
            data.high = dayWiseDataMap[symbol][dateTime]['high'];
            data.low = dayWiseDataMap[symbol][dateTime]['low'];
            data.close = dayWiseDataMap[symbol][dateTime]['close'];
            data.volume = dayWiseDataMap[symbol][dateTime]['volume'];
          }
        });
      }
    }
    tempArray1 = tempArray1.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });

    for (let y = 1; y < tempArray1.length; y++) {
      let time = tempArray1[y]['dateTime'];
      dayWiseDataMap[symbol][time]["prevData"] = {
        open: tempArray1[y - 1]["open"],
        high: tempArray1[y - 1]["high"],
        low: tempArray1[y - 1]["low"],
        close: tempArray1[y - 1]["close"],
        volume: tempArray1[y - 1]["volume"],
      };
    }
    dayWiseDataMap[symbol]["dataArray"] = tempArray1.reverse();
  } catch (e) {
    console.error(e);
  }

  //upto here

}