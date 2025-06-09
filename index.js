import express from "express";
import db from "./src/models/index.js";
import userRoutes from "./src/routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(userRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
