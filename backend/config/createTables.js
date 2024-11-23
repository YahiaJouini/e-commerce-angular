import pool from "./connexion.js"

const createTableString = `CREATE TABLE product (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    image TEXT NOT NULL, 
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL, 
    category VARCHAR(100) NOT NULL
)`

const main = async () => {
   try {
      await pool.query(createTableString)
      console.log("Table created successfully.")
   } catch (err) {
      console.log("Error creating table:", err)
   } finally {
      await pool.end()
      console.log("Database connection closed.")
   }
}
main()
