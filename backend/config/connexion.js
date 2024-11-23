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
   .then(() => console.log("Database pool created successfully."))
   .catch((err) => console.error("Error creating database pool:", err))

export default pool
