import express from "express";
import dotenv from "dotenv";
import { initDB } from "./db/index.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoute from "./routes/transactions.routes.js"
import cors from "cors"

dotenv.config();
const app = express();


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(rateLimiter)
app.use(express.json())
app.use("/api/transactions", transactionsRoute)

const PORT = process.env.PORT || 6000;

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is up and running on PORT:", PORT);
    })
}
)