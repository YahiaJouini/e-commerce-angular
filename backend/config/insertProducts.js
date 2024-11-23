import { AllProducts } from "./data.js"
import pool from "./connexion.js"

const main = async () => {
   try {
      const values = AllProducts.map((product) => [
         product.id,
         product.name,
         product.image,
         product.description,
         product.price,
         product.category,
      ])

      const queryString = `
         INSERT INTO product (id, name, image, description, price, category)
         VALUES ?
      `

      const [result] = await pool.query(queryString, [values])
      console.log("Products inserted successfully:", result.affectedRows)
   } catch (err) {
      console.error("Error inserting products:", err)
   } finally {
      await pool.end()
   }
}

main()
