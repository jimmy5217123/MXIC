import {tab, info, base, detail} from './data.js';

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        dialog: false,
        tab,
        base,
        info,
        detail,
        baseInfomation:[
            {
                key: 'Type',
                col: 6,
                inputWidth: 220,
                info: false
            },
            {
                key: 'Status',
                col: 6,
                inputWidth: 220,
                info: true
            },
            {
                key: 'Sub Type',
                col: 6,
                inputWidth: 220,
                info: false
            },
            {
                key: 'Description',
                col: 6,
                inputWidth: 220,
                info: false
            },
            {
                key: 'Last Claimed TS',
                col: 6,
                inputWidth: 220,
                info: false
            },
            {
                key: 'Count',
                col: 3,
                inputWidth: 80,
                info: false
            },
            {
                key: 'Color',
                col:3,
                inputWidth: 80,
                info: true
            }
        ],
        infomationRouter: 'baseInfo'
    },
    computed: {
        baseInfomationArr () {
            return this.baseInfomation.map(x => {
                const data = this.base[0].data.find(y => y.key === x.key)
                const obj = Object.assign(x, data)
                return obj
            })
        }
    },
    methods: {
    }
})