<template>
    <div>
        <v-snackbar class="pt-6 pr-6" style="z-index: 6 !important;" transition="slide-x-reverse-transition"
            v-model="snackbar" timeout="3000" :value="true" :color="snackbarclr" absolute outlined top right>
            <v-icon class="mr-2" :color="snackbarclr">mdi-alert-outline</v-icon>
            {{ snackmsgbar }}
            <v-icon @click="snackbar = false" class="float-right" :color="snackbarclr">mdi-close-circle</v-icon>
        </v-snackbar>
        <v-container v-if="showdata" class="SsoView pt-16">
            <v-row no-glutters>
                <v-col cols="6">
                    <v-card class="elevation-0 pa-4 mx-auto" width="100%" outlined>
                        <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="addEmail()">
                            <v-row>
                                <v-col cols="10">
                                    <v-text-field outlined dense class="mb-3" v-model="email"
                                        :rules="[v => /.+@.+\..+/.test(v) || 'E-mail must be valid']" label="Email"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-btn type="submit" color="#3B82F6" :disabled="!valid"
                                        class="btnout mb-1 rounded-md elevation-0" block>
                                        <span class="font-weight-bold white--text text-capitalize">Add</span>
                                    </v-btn>
                                </v-col>

                            </v-row>

                        </v-form>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Emails</v-list-item-title>
                            </v-list-item-content>
                            <span>Delete</span>
                        </v-list-item>
                        <v-divider></v-divider>
                        <div v-if="allmails.length > 0">

                            <div v-for="(e, i) in allmails" :key="i">
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ e }}</v-list-item-title>
                                    </v-list-item-content>
                                    <v-btn @click="deleteEmail(e)" icon small class="text-align-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="24" height="24">
                                            <path fill="currentColor" fill-rule="evenodd"
                                                d="M11.5 6a.5.5 0 0 0-.5.5V8h6V6.5a.5.5 0 0 0-.5-.5h-5zM18 8V6.5c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5V8H5.5a.5.5 0 0 0 0 1H7v12.5A2.5 2.5 0 0 0 9.5 24h9a2.5 2.5 0 0 0 2.5-2.5V9h1.5a.5.5 0 0 0 0-1H18zm2 1H8v12.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9zm-8.5 3c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5zm5.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z">
                                            </path>
                                        </svg>
                                    </v-btn>
                                </v-list-item>
                                <v-divider v-if="i != allmails.length - 1"></v-divider>


                            </div>
                        </div>
                        <div v-else>
                            <v-card class="elevation-0 text-center" width="100%">
                                <p class="pa-16">no emails</p>
                            </v-card>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-card class="elevation-0 pa-4 mx-auto" width="100%" outlined>
                        <v-form ref="rform" v-model="rvalid" lazy-validation @submit.prevent="addRest()">
                            <v-row>
                                <v-col cols="7">
                                    <v-text-field outlined dense class="mb-3" v-model="remail"
                                        :rules="[v => /.+@.+\..+/.test(v) || 'E-mail must be valid']" label="Email"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="3" class="pl-0">
                                    <v-text-field label="Branch code" required
                                        oninput="this.value = this.value.toUpperCase()"
                                        :rules="[v => !!v || 'Branch code is required']" v-model="brcode" dense
                                        outlined></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-btn type="submit" color="#3B82F6" :disabled="!rvalid"
                                        class="btnout mb-1 rounded-md elevation-0" block>
                                        <span class="font-weight-bold white--text text-capitalize">Add</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title>Emails</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-content>
                                <v-list-item-title>Branchs</v-list-item-title>
                            </v-list-item-content>
                            <span>Delete</span>
                        </v-list-item>
                        <v-divider></v-divider>
                        <div v-if="allrmails.length > 0">

                            <div v-for="(e, i) in allrmails" :key="i">
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ e.email_id }}</v-list-item-title>
                                    </v-list-item-content>
                                    <!-- <v-tooltip open-delay="400" color="black" right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-list-item-content v-bind="attrs" v-on="on">
                                                <v-list-item-title>{{ e.client_id.length }}</v-list-item-title>
                                            </v-list-item-content>
                                        </template>
                                        <p class="mb-0" v-for="(l, o) in e.client_id" :key="o">
                                            <span>{{ l }}</span>
                                        </p>
                                    </v-tooltip> -->
                                    <v-list-item-content>
                                        <v-select class="mr-4" dense hide-details v-model="e.client_id" :items="e.client_id"
                                            label="" readonly append-icon="" multiple flat solo>
                                            <template v-slot:selection="{ item }">
                                                <v-chip x-small>
                                                    <span>{{ item }}</span>
                                                </v-chip>
                                            </template>
                                        </v-select>
                                    </v-list-item-content>


                                    <v-btn @click="deleteRest(e)" icon small class="text-align-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="24" height="24">
                                            <path fill="currentColor" fill-rule="evenodd"
                                                d="M11.5 6a.5.5 0 0 0-.5.5V8h6V6.5a.5.5 0 0 0-.5-.5h-5zM18 8V6.5c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5V8H5.5a.5.5 0 0 0 0 1H7v12.5A2.5 2.5 0 0 0 9.5 24h9a2.5 2.5 0 0 0 2.5-2.5V9h1.5a.5.5 0 0 0 0-1H18zm2 1H8v12.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9zm-8.5 3c.28 0 .5.22.5.5v7a.5.5 0 0 1-1 0v-7c0-.28.22-.5.5-.5zm5.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z">
                                            </path>
                                        </svg>
                                    </v-btn>
                                </v-list-item>
                                <v-divider v-if="i != allrmails.length - 1"></v-divider>
                            </div>
                        </div>
                        <div v-else>
                            <v-card class="elevation-0 text-center" width="100%">
                                <p class="pa-16">no emails</p>
                            </v-card>
                        </div>
                    </v-card>
                </v-col>
            </v-row>

            <v-dialog class="elevation-0" v-model="dialog" persistent max-width="560px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on"
                        class="white--text text-capitalize font-weight-bold rounded-md elevation-0 mt-3"
                        color="#3B82F6">+Add Toster</v-btn>

                </template>
                <v-card class="elevation-0">
                    <v-card-title>
                        <span class="title font-weight-bold">TOASTER</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="validates()">
                                <v-row>
                                    <v-col cols="6" class="pt-0">
                                        <p class="font-weight-bold subtitle-1 mb-1">Title</p>
                                        <v-text-field outlined dense disabled class="mb-3" v-model="typeone"
                                            :rules="[v => !!v || 'Type is required']" label="Title" required></v-text-field>
                                    </v-col>
                                    <v-col cols="6" class="pt-0">
                                        <p class="font-weight-bold subtitle-1 mb-1">Sub Title</p>
                                        <v-text-field outlined dense class="mb-3" v-model="datanew"
                                            :rules="[v => !!v || 'Data is required']" label="Sub Title" required></v-text-field>
                                    </v-col>

                                </v-row>
                                <v-btn type="submit"
                                    class="white--text text-capitalize font-weight-bold rounded-md elevation-0 mt-3"
                                    :disabled="!valid" color="#3B82F6">submit</v-btn>

                            </v-form>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            Close
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>



            <v-data-table :headers="headers" :items="toatalarrary" :items-per-page="5"
                class="elevation-1">
                <!-- <template v-slot:[`item.val.title`]="{ item }">
                  <span> {{ item.val.title}} </span>
                </template> -->
            </v-data-table>
        </v-container>
    </div>
</template>
  
<script>
import axios from "axios";
import { apiurl } from "../apiUrl.js";

export default {

    data: () => ({
        typeone: "add",
        newcreatechange: [],
        datanew: "",
        dialog: false,
        arrstringyfy: [],
        newchanges: [],
        dataget: [],
        snackbar: false,
        snackbarclr: "default",
        snackmsgbar: "",

        valid: true,
        rvalid: true,
        type: 'view',
        rtype: 'view',

        items: [],

        email: '',
        remail: '',
        brcode: null,
        allmails: [],
        allrmails: [],
        showdata: true,

        headers: [
            {
                text: 'ID',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            { text: 'DATE', value: 'data_dates' },
            { text: 'title', value: 'val.title' },
            { text: 'SUB TITLE', value: 'val.subtitle' },
        ],
        toatalarrary: [],
    }),
    mounted() {

        // const axios = require('axios');
        var axiosthis = this;
        let data = JSON.stringify({
            "type": "view"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://192.168.5.121:5000/toaster_data',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // var newcreatechange=response.data
                let datas = response.data

                for (let c = 0; c < datas.length; c++) {
                    // console.log("responsedataloop", axiosthis.newcreate);
                    let val = JSON.parse(datas[c].data)
                    datas[c]['val'] = val[0]

                    // datas[c]['title'] = val[0].title
                    // datas[c]['subtitle'] = val.subtitle
                    // console.log("responsedataloop", axiosthis.newcreate);
                }
axiosthis.toatalarrary=datas
                console.log("val", datas)


            })
            .catch((error) => {
                console.log(error);
            });


        // var d = new Date();
        // var t = `?t=${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}`;
        // if (window.location.search === t) {
        //     this.showdata = true;
        //     this.setEmail();
        //     this.setRestricted();
        // } else {
        //     this.showdata = false;
        // }

        this.showdata = true;
        this.setRestricted();
        this.setEmail();
    },
    methods: {


        validates() {
            if (this.$refs.form.validate() == true) {
                let arr = [];
                arr.push({
                    title: this.typeone,
                    subtitle: this.datanew
                });


                var arrstringyfy = JSON.stringify(arr);
                // const jsonparse=JSON.parse(arrstringyfy)
                // console.log("jsonparse",jsonparse);


                var axiosthis = this
                let data = JSON.stringify({
                    "type": this.typeone,
                    "data": arrstringyfy
                });

                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://192.168.5.121:5000/toaster_data',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios.request(config)
                    .then((response) => {
                        axiosthis.response = response
                        // console.log("axiosthis.response", axiosthis.response);
                        if (axiosthis.response.data.msg == 'data inserted') {
                            this.dialog = false
                            this.$refs.form.reset();

                        }

                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            // this.$refs.form.validate()
            // const axios = require('axios');


            // if (condition) {

            // }

        },
        setEmail() {
            let data = JSON.stringify({
                "email": this.email,
                "type": this.type,
            });

            let config = {
                method: 'post',
                url: `${apiurl}/witho_check_mail`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            let axiosThis = this;
            axios.request(config)
                .then((response) => {
                    axiosThis.allmails = [];
                    if (response.data.length > 0) {
                        axiosThis.allmails = response.data;
                    } else if (response.data.msg) {
                        axiosThis.snackbar = true;
                        axiosThis.snackbarclr = response.data.msg == "email_inserted" ? 'success' : "#f23645";
                        axiosThis.snackmsgbar = response.data.msg;
                        axiosThis.type = 'view';
                        axiosThis.setEmail();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        setRestricted() {
            let data = JSON.stringify({
                "email": this.remail,
                "type": this.rtype,
                "id": this.brcode
            });

            let config = {
                method: 'post',
                url: `${apiurl}/witho_check_mail1`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            let axiosThis = this;
            axios.request(config)
                .then((response) => {
                    // console.log("response check email", response);
                    axiosThis.allrmails = [];
                    if (response.data.length > 0) {
                        for (let c = 0; c < response.data.length; c++) {
                            response.data[c].client_id = JSON.parse(response.data[c].client_id)
                        }
                        axiosThis.allrmails = response.data;
                        // console.log("axiosThis.allrmails", axiosThis.allrmails)
                    } else if (response.data.msg) {
                        axiosThis.snackbar = true;
                        axiosThis.snackbarclr = response.data.msg == "email_inserted" ? 'success' : "#f23645";
                        axiosThis.snackmsgbar = response.data.msg;
                        axiosThis.rtype = 'view';
                        axiosThis.setRestricted();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        deleteEmail(e) {
            this.email = e;
            this.type = 'delete';
            this.setEmail();
        },
        deleteRest(e) {
            this.remail = e.email_id;
            this.rtype = 'delete';
            this.setRestricted();
        },
        addEmail() {
            if (this.$refs.form.validate() == true) {
                this.type = 'add';
                this.setEmail();
            }
        },
        addRest() {
            if (this.$refs.rform.validate() == true) {
                this.rtype = 'add';
                this.setRestricted();
            }
        }
    }
}
</script>