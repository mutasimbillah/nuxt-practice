import { defineStore } from "pinia";

export const productStore = defineStore({
    id:'tab',
    state: () => ({
        catId : 0,
        products:[],
    }),
    actions:{
    }
});