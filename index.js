import {tab, info, base, detail} from './data.js';

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        tab,
        base,
        info,
        detail,
        baseInfomation:[
            {
                key: 'Type',
                col: 6
            },
            {
                key: 'Staus',
                col: 6
            },
            {
                key: 'Sub Type',
                col: 6
            },
            {
                key: 'Last Claimed TS',
                col: 6
            },
            {
                key: 'Count',
                col: 3
            },
            {
                key: 'Color',
                col:3
            }
        ]
    },
    computed: {
        baseInfomationArr () {
            return this.base[0].data.filter(x => this.baseInfomation.map(y => y.key).includes(x.key))
        }
    },
    methods: {
    }
})