import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import db from "./src/models/index.js";
import userRoutes from "./src/routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// Pindahkan cors() ke sini, sebelum routes
app.use(
  cors({
    origin: "http://localhost:5173", // izinkan hanya frontend kamu
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(userRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
