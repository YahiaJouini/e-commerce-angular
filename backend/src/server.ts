import express from "express"
import pool from "./connexion"
import { productRoutes } from "./routes/product-routes"

pool
   .getConnection()
   .then(() => console.log("Database connected"))
   .catch((err) => console.error("Database connection error:", err))

const app = express()
const port = 3000

productRoutes(app)

app.listen(port, () => {
   console.log(`[server]: Server is running at http://localhost:${port}`)
})
