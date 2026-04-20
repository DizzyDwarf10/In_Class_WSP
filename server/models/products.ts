import type { Product } from "../types"
import { PagingRequest } from "../types/dataEnvelopes"

type ItemType = Product

const data: { items: ItemType[] } = {
    items: [
        {
            id: 1,
            title: "Classic Backpack",
            description: "Durable backpack for school and daily use.",
            category: "accessories",
            price: 39.99,
            tags: ["school", "travel"],
            brand: "TrailLine",
            reviews: [],
            images: ["https://dummyjson.com/image/300x300?text=Backpack"],
            thumbnail: "https://dummyjson.com/image/150x150?text=Backpack",
        },
        {
            id: 2,
            title: "Wireless Headphones",
            description: "Comfortable over-ear headphones with rich sound.",
            category: "electronics",
            price: 89.5,
            tags: ["audio", "wireless"],
            brand: "SoundPeak",
            reviews: [],
            images: ["https://dummyjson.com/image/300x300?text=Headphones"],
            thumbnail: "https://dummyjson.com/image/150x150?text=Headphones",
        },
        {
            id: 3,
            title: "Insulated Bottle",
            description: "Stainless steel bottle that keeps drinks cold all day.",
            category: "home",
            price: 24.0,
            tags: ["kitchen", "outdoor"],
            brand: "HydroMate",
            reviews: [],
            images: ["https://dummyjson.com/image/300x300?text=Bottle"],
            thumbnail: "https://dummyjson.com/image/150x150?text=Bottle",
        },
    ],
}

export function getAll(params: PagingRequest) {
    let list = data.items as ItemType[]
    const count = list.length

    if (params?.search) {
        const search = params.search.toLowerCase()
        list = list.filter((item) =>
            `${item.title} ${item.description}`.toLowerCase().includes(search),
        )
    }
    if (params?.sortBy) {
        list = list.sortBy(params.sortBy as keyof ItemType, params.descending)
    }

    const page = params?.page || 1
    const pageSize = params?.pageSize || 10
    const start = (page - 1) * pageSize
    list = list.slice(start, start + pageSize)

    return { list, count }
}

export function get(id: number): ItemType {
    const item = data.items.find((item) => item.id === id)
    if (!item) {
        const error = { status: 404, message: "Product not found" }
        throw error
    }
    return item
}