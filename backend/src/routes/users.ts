import { Express } from "express"
import { addUser, getUsers, login } from "../controllers/users"
export const userRoutes = (app: Express) => {
   app.get("/users", getUsers)
   app.post("/create/user", addUser)
   app.post("/login", login)
}
