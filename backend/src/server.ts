import express from "express"
import pool from "./connexion"
import cors from "cors"
import { productRoutes } from "./routes/product-routes"
pool
   .getConnection()
   .then(() => console.log("Database connected"))
   .catch((err: any) => console.error("Database connection error:", err))

const app = express()

// allow all origins
app.use(cors())
// middleware to parse incoming JSON requests
app.use(express.json())

const port = 3000
productRoutes(app)

app.listen(port, () => {
   console.log(`[server]: Server is running at http://localhost:${port}`)
})
