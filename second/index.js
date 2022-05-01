import { MainGroup, SubGroup } from './tree.js';

var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        MainGroup,
        SubGroup
    },
    computed: {
    },
    methods: {
        haveSubItem (ProdID) {
            return this.SubGroup.items.filter(x => x[1] === ProdID)
        },
        lastSubItem (ProdID) {
            return this.SubGroup.items.filter(x => x[1] === ProdID)
        }
    }
})