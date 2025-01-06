import express from "express";
import userRoutes from "./controllers/userController";
import { connectDB } from "./data/database/connectionDB";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use("/api", userRoutes);

app.use("/", (req, res) => {
  res.status(200).json({ message: "Tudo pronto 🚀!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
