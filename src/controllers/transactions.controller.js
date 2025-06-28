import sql from "../db/index.js";

export async function getTransactionsByUserId(req, res) {
    try {
        const { userId } = req.params;
        const transaction = await sql`
        SELECT * FROM transactions WHERE user_id = ${userId}`;
        if (transaction.length == 0) return res.status(404).json({ message: "user doesn't exits" });

        return res.status(200).json(transaction)
    } catch (error) {
        console.log("Error Getting Transaction", error)
        res.status(500).json({ message: "Internal Server Error" })
    }

}

export async function createTransactions(req, res) {

    try {
        const { user_id, title, category, amount } = req.body;

        if (!title || !user_id || !category || amount == undefined) {
            return res.json({ message: "All fields are required" })
        }

        const transaction = await sql`
        INSERT INTO transactions (user_id,title,amount,category) 
        VALUES (${user_id},${title},${amount},${category}) RETURNING *
        `;

        res.status(201).json(transaction[0])
    } catch (error) {
        console.log("Error Making Transaction", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export async function deleteTransaction(req, res) {
    try {
        const { id } = req.params;
        if (isNaN(parseInt(id))) {
            return res.status(400).json({ message: "" })
        }
        const result = await sql`DELETE FROM transactions WHERE id = ${id} RETURNING *`;

        if (result.length == 0) return res.status(404).json({ message: "Transaction not Found" });

        return res.status(200).json({ message: "Transaction deleted successfully" })

    } catch (error) {
        console.log("Error Deleting Transaction", error)
        res.status(500).json({ message: "Internal Server Error" })
    }
}


export async function getTransactionSummary(req, res) {
    try {

        const { userId } = req.params;


        const balanceResult = await sql`SELECT  COALESCE(SUM(amount),0) AS balance 
        FROM transactions WHERE user_id = ${userId} `

        const incomeResult = await sql`SELECT  COALESCE(SUM(amount),0) AS income 
        FROM transactions WHERE user_id = ${userId} AND amount > 0`

        const expensesResult = await sql`SELECT  COALESCE(SUM(amount),0) AS expenses 
        FROM transactions WHERE user_id = ${userId} AND amount < 0 `

        return res.status(200).json({
            balance: balanceResult[0].balance,
            income: incomeResult[0].income,
            expenses: expensesResult[0].expenses
        })

    } catch (error) {
        console.log("Error Getting Summary")
        return res.status(500).json({ message: "Internal Server Error" })
    }


}