import { Express } from "express"
import { addUser, getUsers } from "../controllers/users"
export const userRoutes = (app: Express) => {
   app.get("/users", getUsers)
   app.post("/create/user", addUser)
}
