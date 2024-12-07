import { RowDataPacket } from "mysql2"
import { Request, Response } from "express"
import pool from "../connexion"

type User = RowDataPacket & {
   id: number
   name: string
   email: string
   isAdmin: boolean
}

export const getUsers = async (_: Request, res: Response) => {
   try {
      const query = `select * from users`
      const [rows] = await pool.query<User[]>(query)

      res.json(rows)
   } catch (err) {
      console.error("Error fetching users:", err)
      res.status(500).json({ message: "Failed to fetch users" })
   }
}

export const addUser = async (req: Request, res: Response) => {
   try {
      const { email, password } = req.body

      const query = `INSERT INTO users (email, password, isAdmin) VALUES ( ?, ?, ?)`
      await pool.query(query, [email, password, false])
      res.json({ message: "User added successfully" })
   } catch (err: any) {
      res.status(500).json({ message: `Failed to add user ${err?.message}` })
   }
}
export const login = async (req: Request, res: Response) => {
   try {
      const { email, password } = req.body
      const query = `select * from users where email = ? and password = ?`
      const [res2] = await pool.query<User[]>(query, [email, password])

      console.log(res2)
      if (!res2[0]) {
         res.status(401).json({ message: "Invalid email or password" })
         return
      }
      res.json({ message: "Login successful" })
   } catch (err) {
      console.log(err)
   }
}
