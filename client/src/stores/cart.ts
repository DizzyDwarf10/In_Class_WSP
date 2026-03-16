import { defineStore } from "pinia"
import { ref, computed } from "vue"
import type { Product } from "@/types"
import { useRouter } from "vue-router"

export const useCartStore = defineStore("cart", () => {
    const items = ref<(Product & { quantity: number })[]>([])

    const totalQuantity = computed(() => {
        return items.value.reduce((sum, item) => sum + item.quantity, 0)
    })

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

    const removeItem = (productId: number) => {
        items.value = items.value.filter(item => item.id !== productId)
    }

    const updateQuantity = (productId: number, quantity: number) => {
        const item = items.value.find(cartItem => cartItem.id === productId)
        if (!item) {
            return
        }

        const nextQuantity = Number.isFinite(quantity) ? Math.floor(quantity) : item.quantity

        if (nextQuantity <= 0) {
            removeItem(productId)
            return
        }

        item.quantity = nextQuantity
    }

    return { items, total, totalQuantity, addItem, removeItem, updateQuantity }
})

export const useCartView = () => {
    const router = useRouter()

    const viewCart = () => {
        router.push("/cart")
    }

    return { viewCart }
}