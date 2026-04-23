import type { DataListEnvelope, Product } from "../../../server/types"
import { api } from "./myFetch"

export function getProducts() {
    return api<DataListEnvelope<Product>>("/products")
}
