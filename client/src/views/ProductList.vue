<script setup lang="ts">
import { useProductStore } from "../stores/product"
import { onMounted } from "vue"

const productStore = useProductStore()

onMounted(() => {
    productStore.fetchProducts()
})
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
        <div v-for="product in productStore.products" :key="product.id" class="card mb-4">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img :src="product.thumbnail" :alt="product.title">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">{{ product.title }}</p>
                        <p class="subtitle is-6">{{ product.brand }} - {{ product.category }}</p>
                        <p class="content">{{ product.description }}</p>
                        <p class="has-text-weight-bold">${{ product.price }}</p>
                        <p class="has-text-grey">Rating: {{ product.rating }}/5 ({{ product.stock }} in stock)</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>