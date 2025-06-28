import { Router } from "express"
import { createTransactions, deleteTransaction, getTransactionsByUserId, getTransactionSummary } from "../controllers/transactions.controller.js";

const router = Router();

router.get("/:userId", getTransactionsByUserId)
router.post("/", createTransactions)
router.delete("/:id", deleteTransaction)
router.get("/summary/:userId", getTransactionSummary)

export default router