# 💸 Wallet API — Backend for Mobile Wallet App

This is the backend REST API for the **Wallet App**, built using **Express.js** and **PostgreSQL**.  
It powers core features such as user authentication, transaction creation, and secure data handling.  
Authentication is handled via **Clerk**, and the API is designed for integration with a React Native mobile frontend.

---

## ⚙️ Features

- 🔐 User Authentication (via Clerk.dev)
- ➕ Add Transaction (income or expense)
- 🧾 Fetch Transactions for Logged-In Users
- 🗃️ PostgreSQL for persistent storage
- 📦 JSON-based RESTful API

---

## 🛠️ Tech Stack

- **Backend Framework**: Express.js (Node.js)
- **Database**: PostgreSQL
- **ORM/Query**: pg (neon)
- **Other**: dotenv, cors, redis(rate-limiting)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/cyxabima/wallet-api
cd wallet-api
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file with:

```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/wallet_db
UPSTASH_REDIS_REST_URL='https://YOUR-UPSTASH-URL'
UPSTASH_REDIS_REST_TOKEN=YOUR TOKEN
```

### 4️⃣ Run the server

```bash
npm run dev
```

API runs at: `http://localhost:5000/api/transactions`

---

## 📮 API Endpoints

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| GET    | `/api/transactions` | Get user transactions    |
| POST   | `/api/transactions` | Create a new transaction |

---

## ✨ Future Enhancements

* Delete/edit transactions
* Category/tagging support
* Monthly summary endpoint
* Auth middleware improvements

---

## 📚 License

This project is open-source and available under the MIT License.

