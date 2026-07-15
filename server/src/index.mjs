import express from "express";
import mongoose from "mongoose";
import userRouter from "../routes/userRoutes.js";
import productRouter from "../routes/productRoutes.js";
import cartRouter from "../routes/cartRoutes.js";
import orderRouter from "../routes/orderRoutes.js";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
//running web server
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const mongoURI =
  "mongodb+srv://admin:BuxzeUeC9aQwLWqp@cluster0.x4pwt66.mongodb.net/test?appName=Cluster0";

app.use(
  cors({
    origin: "http://localhost:5173", // อนุญาตเฉพาะพอร์ตหน้าบ้านของ Vite เท่านั้น
    credentials: true,
  }),
);
app.use(helmet());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // ในเวลา 15 นาที
  limit: 100, // จำกัดให้แต่ละ IP ยิงเข้ามาได้ไม่เกิน 100 ครั้ง
  message: { msg: "คุณยิงคำขอมากเกินไป กรุณาลองใหม่ในอีก 15 นาที" },
});

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected successfully to MongoDB Atlas! 🎉"))
  .catch((err) => console.error("MongoDB connection error ❌:", err.message));

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
app.use("/api", limiter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
