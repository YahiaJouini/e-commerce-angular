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
      const { email, name, password } = req.body

      const query = `insert into users values (?, ?, ?,?)`
      await pool.query(query, [email, name, password, false])
      res.json({ message: "User added successfully" })
   } catch (err: any) {
      res.status(500).json({ message: `Failed to add user ${err?.message}` })
   }
}
