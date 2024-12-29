import { Pool } from 'pg';
import dotenv from 'dotenv';
import fs from "fs";
import path from "path";

dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.POSTGRES_PORT),
});

const initDb = async () => {
  try {
      const schemaPath = path.resolve(__dirname, "schema.sql");
      const schema = fs.readFileSync(schemaPath, "utf-8");
      await pool.query(schema);
      console.log("Database initialized successfully");
  } catch (error) {
      console.error("Error initializing database:", error);
  } finally {
      await pool.end();
  }
};

export default pool;
