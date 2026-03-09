import express, { Request, Response } from "express"

const PORT = 3000
const SERVER = "localhost"

const app = express()

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World!")
}).get("/suny", (_req: Request, res: Response) => {
    res.send("The best plan of my life!")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://${SERVER}:${PORT}`)
})