import { defineStore } from "pinia"
import { ref, computed } from "vue"
import type { Product } from "@/types"
import { useRouter } from "vue-router"

export const useCartStore = defineStore("cart", () => {
    const items = ref<(Product & { quantity: number })[]>([])

    const total = computed(() => {
        return items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    })

    const addItem = (product: Product) => {
        const existingItem = items.value.find(item => item.id === product.id)
        if (existingItem) {
            existingItem.quantity++
        } else {
            items.value.push({ ...product, quantity: 1 })
        }
    }

    return { items, total, addItem }
})

export const useCartView = () => {
    const router = useRouter()
    const cartStore = useCartStore()

    const viewCart = () => {
        router.push("/cart")
    }

    return { viewCart }
}