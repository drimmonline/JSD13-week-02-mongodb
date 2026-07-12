import express from "express";
import { createOrderFromCart } from "../controllers/orderController.js";
import { protectRoute } from "../middlewares/authMiddleware.js"; // มิดเดิลแวร์ตรวจ Token

const orderRouter = express.Router();

// ล็อกประตูไว้ ต้องแนบ Token ล็อกอินมาด้วยเสมอ
orderRouter.post("/checkout", protectRoute, createOrderFromCart);

export default orderRouter;
