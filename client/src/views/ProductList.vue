<script setup lang="ts">
import type { Product } from "@/types"
import { useProductStore } from "../stores/product"
import { useCartStore } from "../stores/cart"
import { onMounted } from "vue"

const productStore = useProductStore()
const cartStore = useCartStore()

onMounted(() => {
    productStore.fetchProducts()
})

const addToCart = (product: Product) => {
    cartStore.addItem(product)
    console.log("Added to cart:", product)
}
</script>

<template>
    <h1 class="title is-1">Product List</h1>

    <div v-if="productStore.loading" class="notification is-info">
        Loading products...
    </div>

    <div v-else-if="productStore.error" class="notification is-danger">
        Error: {{ productStore.error }}
    </div>

    <div v-else class="product-list">
        <div class="columns is-multiline">
            <div v-for="product in productStore.products" :key="product.id" class="column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img :src="product.thumbnail" :alt="product.title">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-5">{{ product.title }}</p>
                                <p class="subtitle is-7">{{ product.brand }} - {{ product.category }}</p>
                                <p class="content is-small">{{ product.description }}</p>
                                <p class="has-text-weight-bold">${{ product.price }}</p>
                                <p class="has-text-grey is-small">Rating: {{ product.rating }}/5 ({{ product.stock }} in stock)</p>
                            </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <button class="card-footer-item button is-primary" @click="addToCart(product)">
                            Add to Cart
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>