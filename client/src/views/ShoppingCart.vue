<script setup lang="ts">
import { useCartStore } from "../stores/cart"

const cartStore = useCartStore()

const removeItem = (productId: number) => {
    const index = cartStore.items.findIndex(item => item.id === productId)
    if (index > -1) {
        cartStore.items.splice(index, 1)
    }
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
                    <td>{{ item.quantity }}</td>
                    <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
                    <td>
                        <button class="button is-danger is-small" @click="removeItem(item.id)">
                            Remove
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p class="has-text-weight-bold">Total: ${{ cartStore.total.toFixed(2) }}</p>
    </div>
</template>

<style scoped></style>