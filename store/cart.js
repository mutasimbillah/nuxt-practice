import { defineStore } from "pinia";

export const cartStore = defineStore({
    id:'cart',
    state: () => ({
        total: 0.00,
        totalItems:0,
        itemIds : [],
        products:[],
    }),
    actions:{
        getCartTotal(){
            return this.total;
        },
        getTotalItems(){
            return this.totalItems;
        },
        addToCart(product){
             const isExist = this.itemIds.includes(product.id);
             
            if(!isExist){
                this.itemIds.push(product.id);
                product.quantity = 1;
                this.products.push(product);
                this.totalItems ++;
            }else{

               let cartProduct = this.products.find(obj => {
                      return obj.id === product.id
                });
                cartProduct.quantity +=1;
                this.products.push(cartProduct);
                this.totalItems ++;
            }
            console.log(product);
        }
    }
});