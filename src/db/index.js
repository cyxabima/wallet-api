import { neon } from "@neondatabase/serverless"
import "dotenv/config"

const sql = neon(process.env.DATABASE_URI)

export default sql

export async function initDB() {
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id  VARCHAR(255) NOT NULL ,
            title VARCHAR(255) NOT NULL ,
            category  VARCHAR(255) NOT NULL ,
            amount DECIMAL(10,2) NOT NULL,
            cerated_at DATE NOT NULL  DEFAULT CURRENT_DATE
        )`;

        console.log("Database Initialized Successfully.")
    } catch (error) {
        console.log("Error Initializing DB :: ", error)
        process.exit(1)
    }
}


