import pool from "./connexion.js"

const productTable = `CREATE TABLE product (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    image TEXT NOT NULL, 
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL, 
    category VARCHAR(100) NOT NULL
)`

const usersTable = `CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT false
)`

const main = async () => {
   try {
      await pool.query(productTable)
      console.log("Table created successfully.")
      await pool.query(usersTable)
      console.log("Table created successfully.")
   } catch (err) {
      console.log("Error creating table:", err)
   } finally {
      await pool.end()
      console.log("Database connection closed.")
   }
}
main()
