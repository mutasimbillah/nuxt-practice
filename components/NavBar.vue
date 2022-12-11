<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Company Logo</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/shop">Shop</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/cart">Cart({{ cart.getTotalItems() }})</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>
<script setup>
import { cartStore } from '../store/cart';
const cart = cartStore();
</script>
<style scoped>

</style>
  