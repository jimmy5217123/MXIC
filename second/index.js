import { MainGroup, SubGroup } from './tree.js';

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        MainGroup,
        SubGroup,
        treeArr: []
    },
    computed: {
    },
    methods: {
        tree () {
            const arr = []
            const mainGroupId = [...new Set(this.MainGroup.items.map(x => x[0]))]
            mainGroupId.forEach(x => {
                const childern = this.MainGroup.items.filter(y => y[0] === x).map(z => {
                    return {
                        id: z[1],
                        childern: this.SubGroup.items.filter(item => item[1] === z[1]).map(q => {
                            return {
                                id: q[0],
                                childern: this.SubGroup.items.filter(lastItem => lastItem[1] === q[0]).map(s => {
                                    return {
                                        id: s[0],
                                        childern: [],
                                        show: false
                                    }
                                }),
                                show: false
                            }
                        }),
                        show: false
                    }
                })
                const obj = {
                    id: x,
                    childern,
                    show: false
                }
                arr.push(obj)
            })
            this.treeArr = arr
        }
    },
    created () {
        this.tree()
    }
})