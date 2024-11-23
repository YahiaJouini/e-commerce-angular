import { Request, Response } from "express"
import { RowDataPacket } from "mysql2"
import pool from "../connexion"

type Product = RowDataPacket & {
   id: number
   libelle: string
   prix: number
   qte: number
   des: string
   image: string
   promo: 0 | 1
}

const getProducts = async (_: Request, res: Response) => {
   try {
      const [rows] = await pool.query<Product[]>("SELECT * FROM product")
      res.json(rows)
   } catch (error) {
      console.error("Error fetching products:", error)
      res.status(500).json({ message: "Failed to fetch products" })
   }
}

export { getProducts }
