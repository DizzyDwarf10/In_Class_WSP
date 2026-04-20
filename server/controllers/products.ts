import { Router } from "express"
import { getAll, get } from "../models/products"
import { Product, DataEnvelope, DataListEnvelope } from "../types"

const app = Router()

app.get("/", (req, res) => {
    const { list, count } = getAll(req.query)
    const response: DataListEnvelope<Product> = {
        data: list,
        isSuccess: true,
        total: count,
    }
    res.send(response)
}).get("/:id", (req, res) => {
    const { id } = req.params
    const response: DataEnvelope<Product> = {
        data: get(Number(id)),
        isSuccess: true,
    }
    res.send(response)
})

export default app