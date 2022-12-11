<template>
    <div>
        <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
            role="tablist">
            <li class="nav-item flex-auto text-center" role="presentation" v-for="c in categories">
                <a @click="changeCategory(c.id)" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent 
      hover:bg-green-500
      focus:border-transparent
      active
    " id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                    aria-controls="tabs-homeFill" aria-selected="true">{{ c.name }}</a>
            </li>
        </ul>
    </div>
    <!-- Product Card -->
    <div class="m-5" id="Container">
        <div class="py-6 max-w-[50%]" v-for="p in store.products">
            <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="w-1/3 bg-cover" v-bind:style='{ backgroundImage: `url("${p.feature.original_url}")` }'>

                </div>
                <div class=" w-2/3 p-4">
                    <h1 class="text-gray-900 font-bold text-2xl">{{ p.name }}</h1>
                    <p class="mt-2 text-gray-600 text-sm">{{ p.details }}</p>
                    <div class="flex item-center mt-2">
                        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path
                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path
                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                            <path
                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path
                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path
                                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                    </div>
                    <div class="flex item-center justify-between mt-3">
                        <h1 class="text-gray-700 font-bold text-xl">${{ p.price }}</h1>
                        <button class="px-3 py-2 bg-gray-800 
                        text-white text-xs font-bold uppercase 
                        rounded" @click="cart.addToCart(p)">Add to
                            Card</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of card -->
        <button
            class="text-teal-500 border border-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            Load More
        </button>
    </div>

</template>

<script setup>
import { cartStore } from '../store/cart';
import { productStore } from '../store/tab';
const store = productStore();
const cart = cartStore();
//
const { data: categoryApi } = await useFetch("http://localhost/api/category");
const categories = categoryApi.value.data;
store.catId = categories[0].id;
//
const { data: productApi } = await useFetch(`http://localhost/api/product?include=media&filter[category_id]=${store.catId}`);
store.products = productApi.value.data;

async function changeCategory(id) {
    //console.log(id);
    store.catId = id;
    const { data: productApi } = await useFetch(`http://localhost/api/product?include=media&filter[category_id]=${store.catId}`);
    store.products = productApi.value.data;

}
</script>

<style scoped>

</style>