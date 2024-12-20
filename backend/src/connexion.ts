import mysql from "mysql2"

const pool = mysql
   .createPool({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "angular-ecommerce",
   })
   .promise()

pool
   .getConnection()
   .then(() => console.log("Database connected"))
   .catch((err: any) => console.error("Database connection error:", err))
export default pool
