export default class SaveLoad {
    constructor(inHouseUrl, auth_token) {
        this._charts = []
        this._studyTemplates = []
        this._drawingTemplates = []
        this._inHouseUrl = inHouseUrl
        this._auth_token = auth_token
        this._getCharts = this._getAllCharts()
        this._getStudyTemplates = this._getAllStudyTemplates()
        this._getDrawingTemplates = this._getAllDrawingTemplates()
    }

    init() {

    }
    getAllCharts() {
        return this._getAllCharts().then((_) => {
            console.log(_)
            return Promise.resolve(this._charts);
        })

    }

    _getAllCharts() {
        return this._inhouseRequest('charts').then((response) => {
            this._charts = (response || [])
            return Promise.resolve()
        })
    }

    removeChart(id) {
        for (var i = 0; i < this._charts.length; ++i) {
            if (this._charts[i].id.toString() === id.toString()) {

                return this._inhouseRequest('charts/' + id.toString(), undefined, undefined, "DELETE").then((_) => {
                    console.log(_)
                    this._charts.splice(i, 1);
                    return Promise.resolve()
                })
            }
        }

        return Promise.reject();
    }

    saveChart(chartData) {
        // if (!chartData.id) {
        //     // chartData.id = Math.random().toString();
        // } else {
        //     this.removeChart(chartData.id);
        // }

        chartData.timestamp = new Date().valueOf();
        return this._inhouseRequest('charts', chartData, undefined, "POST").then((response) => {
            let index = this._charts.indexOf((t) => t.id == chartData.id)
            if (index == -1) {
                window.dataLayer.push({
                    event: 'tv-chart-layout-created'
                })
                this._charts.push(response);
            } else {
                this._charts[index] = response
            }
            return Promise.resolve(response.id);
        })
    }

    getChartContent(id) {
        for (var i = 0; i < this._charts.length; ++i) {
            if (this._charts[i].id === id) {
                return Promise.resolve(this._charts[i].content);
            }
        }

        console.error('error');

        return Promise.reject();
    }

    removeStudyTemplate(studyTemplateInfo) {
        console.error("remove study template", studyTemplateInfo)
        var id = studyTemplateInfo.name.split("|")[0]
        for (var i = 0; i < this._studyTemplates.length; ++i) {
            if (this._studyTemplates[i].id.toString() === id.toString()) {

                return this._inhouseRequest('studyTemplates/' + id.toString(), undefined, undefined, "DELETE").then((_) => {
                    console.log(_)
                    this._studyTemplates.splice(i, 1);
                    return Promise.resolve()
                })
            }
        }

        return Promise.reject();
    }

    getStudyTemplateContent(studyTemplateData) {
        for (var i = 0; i < this._studyTemplates.length; ++i) {
            if (this._studyTemplates[i].name === studyTemplateData.name) {
                return Promise.resolve(this._studyTemplates[i].content);
            }
        }

        return Promise.reject();
    }

    saveStudyTemplate(studyTemplateData) {
        console.error("study template", studyTemplateData)

        studyTemplateData.timestamp = new Date().valueOf();
        studyTemplateData.meta_info = JSON.stringify(studyTemplateData.meta_info)
        return this._inhouseRequest('studyTemplates', studyTemplateData, undefined, "POST").then((response) => {
            response.name = response.id.toString() + "|" + response.name
            this._studyTemplates.push(response);
            return Promise.resolve(response.id);
        })
    }

    getAllStudyTemplates() {
        return this._getStudyTemplates.then((_) => {
            console.log(_)
            return Promise.resolve(this._studyTemplates);
        })

    }

    _getAllStudyTemplates() {
        return this._inhouseRequest('studyTemplates').then((response) => {
            this._studyTemplates = (response.map((aa) => {
                aa.name = aa.id.toString() + "|" + aa.name
                aa.meta_info = JSON.parse(aa.meta_info)
                return aa
            }) || [])
            return Promise.resolve(this._studyTemplates)
        })
    }

    _getAllDrawingTemplates() {
        return this._inhouseRequest('drawingTemplates').then((response) => {
            this._studyTemplates = (response.map((aa) => {
                aa.name = aa.id.toString() + "|" + aa.name
                aa.content = JSON.parse(aa.content)
                return aa
            }) || [])
            return Promise.resolve(this._drawingTemplates)
        })
    }
    removeDrawingTemplate(toolName, templateName) {
        for (var i = 0; i < this._drawingTemplates.length; ++i) {
            if (this._drawingTemplates[i].name === templateName) {
                this._drawingTemplates.splice(i, 1);
                return Promise.resolve();
            }
        }

        return Promise.reject();
    }

    loadDrawingTemplate(toolName, templateName) {
        for (var i = 0; i < this._drawingTemplates.length; ++i) {
            if (this._drawingTemplates[i].name === templateName) {
                return Promise.resolve(this._drawingTemplates[i].content);
            }
        }

        return Promise.reject();
    }

    saveDrawingTemplate(toolName, templateName, content) {
        let studyTemplateData;
        studyTemplateData.meta_info = JSON.stringify(studyTemplateData.meta_info)
        var payload = {
            name: templateName,
            content: JSON.stringify(content)
        }
        return this._inhouseRequest('drawingTemplates', payload, undefined, "POST").then((response) => {
            response.name = response.id.toString() + "|" + response.name
            this._drawingTemplates.push(response);
            return Promise.resolve(response.id);
        })
    }

    getDrawingTemplates() {
        return this._getDrawingTemplates.then((_) => {
            console.log(_)
            return Promise.resolve(this._drawingTemplates.map(function(template) {
                return template.name;
            }));
        })
    }
    async _inhouseRequest(urlPath, body, params, method = "GET") {
        // Send user cookies if the URL is on the same origin as the calling script.
        const options = {};
        var headers = new Headers()
        headers.append("Authorization", "Bearer " + this._auth_token)
        options.headers = headers
        if (body !== undefined && method != "GET") {
            options.body = JSON.stringify(body)
        }
        console.log("URL", this._inHouseUrl, urlPath);
        var url = new URL(`${this._inHouseUrl}${urlPath}`)

        url.search = new URLSearchParams(params).toString();
        options.method = method
        return fetch(url, options)
            .then((response) => {
                return response.text()
            })
            .then((responseTest) => JSON.parse(responseTest))
            .catch((error) => console.log(error));
    }

}

// ### Study Templates

//  1. `getAllStudyTemplates(): Promise<StudyTemplateMetaInfo[]>`

//      A function to get all saved study templates.

//     `StudyTemplateMetaInfo` is an object with the following fields:
//      - `name` - name of the study template.

//  1. `removeStudyTemplate(studyTemplateInfo: StudyTemplateMetaInfo): Promise<void>`

//      A function to remove a study template.

//  1. `saveStudyTemplate(studyTemplateData: StudyTemplateData): Promise<void>`

//      A function to save a study template.

//     `StudyTemplateData` is an object with the following fields:
//      - `name` - name of the study template.
//      - `content` - content of the study template.

//  1. `getStudyTemplateContent(studyTemplateInfo: StudyTemplateMetaInfo): Promise<string>`

//      A function to load a study template from the server.

//  If both `charts_storage_url` and `save_load_adapter` are available  then `save_load_adapter` will be used.

// **IMPORTANT:** All functions should return a `Promise` (or `Promise`-like objects).
// The In-memory example of `save_load_adapter` for testing purposes.

// ```javascript
// save_load_adapter: {
//     charts: [],
//     studyTemplates: [],
//     drawingTemplates: [],
//     getAllCharts: function() {
//         return Promise.resolve(this._charts);
//     },

//     removeChart: function(id) {
//         for (var i = 0; i < this._charts.length; ++i) {
//             if (this._charts[i].id === id) {
//                 this._charts.splice(i, 1);
//                 return Promise.resolve();
//             }
//         }

//         return Promise.reject();
//     },

//     saveChart: function(chartData) {
//         if (!chartData.id) {
//             chartData.id = Math.random().toString();
//         } else {
//             this.removeChart(chartData.id);
//         }

//         chartData.timestamp = new Date().valueOf();

//         this._charts.push(chartData);

//         return Promise.resolve(chartData.id);
//     },

//     getChartContent: function(id) {
//         for (var i = 0; i < this._charts.length; ++i) {
//             if (this._charts[i].id === id) {
//                 return Promise.resolve(this._charts[i].content);
//             }
//         }

//         console.error('error');

//         return Promise.reject();
//     },

//     removeStudyTemplate: function(studyTemplateData) {
//         for (var i = 0; i < this._studyTemplates.length; ++i) {
//             if (this._studyTemplates[i].name === studyTemplateData.name) {
//                 this._studyTemplates.splice(i, 1);
//                 return Promise.resolve();
//             }
//         }

//         return Promise.reject();
//     },

//     getStudyTemplateContent: function(studyTemplateData) {
//         for (var i = 0; i < this._studyTemplates.length; ++i) {
//             if (this._studyTemplates[i].name === studyTemplateData.name) {
//                 return Promise.resolve(this._studyTemplates[i]);
//             }
//         }

//         console.error('st: error');

//         return Promise.reject();
//     },

//     saveStudyTemplate: function(studyTemplateData) {
//         for (var i = 0; i < this._studyTemplates.length; ++i) {
//             if (this._studyTemplates[i].name === studyTemplateData.name) {
//                 this._studyTemplates.splice(i, 1);
//                 break;
//             }
//         }

//         this._studyTemplates.push(studyTemplateData);
//         return Promise.resolve();
//     },

//     getAllStudyTemplates: function() {
//         return Promise.resolve(this._studyTemplates);
//     },

//     removeDrawingTemplate: function (toolName, templateName) {
//         for (var i = 0; i < this._drawingTemplates.length; ++i) {
//             if (this._drawingTemplates[i].name === templateName) {
//                 this._drawingTemplates.splice(i, 1);
//                 return Promise.resolve();
//             }
//         }

//         return Promise.reject();
//     },

//     loadDrawingTemplate: function (toolName, templateName) {
//         for (var i = 0; i < this._drawingTemplates.length; ++i) {
//             if (this._drawingTemplates[i].name === templateName) {
//                 return Promise.resolve(this._drawingTemplates[i].content);
//             }
//         }

//         console.error('drawing: error');

//         return Promise.reject();
//     },

//     saveDrawingTemplate: function (toolName, templateName, content) {
//         for (var i = 0; i < this._drawingTemplates.length; ++i) {
//             if (this._drawingTemplates[i].name === templateName) {
//                 this._drawingTemplates.splice(i, 1);
//                 break;
//             }
//         }

//         this._drawingTemplates.push({ name: templateName, content: content });
//         return Promise.resolve();
//     },

//     getDrawingTemplates: function () {
//         return Promise.resolve(this._drawingTemplates.map(function(template) {
//             return template.name;
//         }));
//     },
// }
// ```