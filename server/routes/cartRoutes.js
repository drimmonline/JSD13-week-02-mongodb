import express from "express";
import { protectRoute } from "../middlewares/authMiddleware.js";
import {
  addToCart,
  removeFromCart,
  getMyCart,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/", protectRoute, getMyCart); // ดูสินค้าในตะกร้า
cartRouter.post("/", protectRoute, addToCart); // เพิ่ม/บวกจำนวนสินค้า
cartRouter.delete("/", protectRoute, removeFromCart); // ลบสินค้าออกจากตะกร้า

export default cartRouter;
