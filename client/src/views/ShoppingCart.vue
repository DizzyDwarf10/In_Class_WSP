<script setup lang="ts">
import { useCartStore } from "../stores/cart"

const cartStore = useCartStore()

const updateQuantity = (productId: number, quantity: number | string) => {
    cartStore.updateQuantity(productId, Number(quantity))
}
</script>

<template>
    <h1 class="title is-1">Shopping Cart</h1>
    
    <div v-if="cartStore.items.length === 0" class="notification is-info">
        Your cart is empty
    </div>
    
    <div v-else>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartStore.items" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>${{ item.price.toFixed(2) }}</td>
                    <td>
                        <input
                            class="input is-small quantity-input"
                            type="number"
                            min="1"
                            :value="item.quantity"
                            @input="updateQuantity(item.id, ($event.target as HTMLInputElement).value)"
                        >
                    </td>
                    <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
                    <td>
                        <button class="button is-danger is-small" @click="cartStore.removeItem(item.id)">
                            Remove
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="has-text-weight-bold">Total: ${{ cartStore.total.toFixed(2) }}</p>
    </div>
</template>

<style scoped>
.quantity-input {
    max-width: 4.5rem;
    text-align: center;
}
</style>