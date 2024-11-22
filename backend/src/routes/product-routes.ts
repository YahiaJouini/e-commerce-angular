import { Express } from "express"
import { getProducts } from "../controllers/product"
export const productRoutes = (app: Express) => {
   app.get("/", getProducts)
}
