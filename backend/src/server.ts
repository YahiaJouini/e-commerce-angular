import cors from "cors"
import express from "express"
import { productRoutes } from "./routes/product-routes"

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
