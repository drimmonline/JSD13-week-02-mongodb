import Order from "../models/orders.js";
import Cart from "../models/carts.js"; // ตะกร้าสินค้า
import Product from "../models/products.js";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";

export const createOrderFromCart = async (request, response) => {
  try {
    const userId = request.user.userId; // ดึง userId มาจาก Token ของคนที่ล็อกอินอยู่
    const { shipping_address } = request.body;

    // 1. วิ่งไปดูรายการในตะกร้าของ User คนนี้
    const cart = await Cart.findOne({ user_id: userId });
    if (!cart || cart.items.length === 0) {
      return response
        .status(400)
        .json({ msg: "ไม่สามารถสร้างออเดอร์ได้ เนื่องจากไม่มีสินค้าในตะกร้า" });
    }

    let calculatedTotal = 0; // ตัวแปรสำหรับตั้งต้นคำนวณเงินรวม
    const finalOrderDetails = [];

    // 2. ลูปรายการสินค้าในตะกร้า เพื่อดึงราคาจริงมาคำนวณและหักสต็อก
    for (const item of cart.items) {
      const product = await Product.findOne({ _id: item.product_id });

      if (!product) {
        return response
          .status(404)
          .json({ msg: `ไม่พบสินค้าไอดี ${item.product_id} ในระบบ` });
      }
      if (product.stock_quantity < item.quantity) {
        return response
          .status(400)
          .json({ msg: `สินค้า ${product.product_name} ในสต็อกไม่เพียงพอ` });
      }

      // 🎯 คำนวณราคาสินค้ารายชิ้น (ราคาจริงจาก DB คูณกับ จำนวนที่ซื้อ)
      // แปลงค่าเงินเป็น Float ก่อน เพื่อนำมาบวกลบคำนวณใน Node.js ได้ง่าย
      const productPrice = parseFloat(product.product_price.toString());
      const itemTotalPrice = productPrice * item.quantity;

      // เอาไปบวกสะสมรวมในยอดรวมของบิลใบนี้
      calculatedTotal += itemTotalPrice;

      // จัดรูป Object เพื่อเตรียมบันทึกลง order_details
      finalOrderDetails.push({
        product_id: product._id,
        product_name: product.product_name,
        quantity: item.quantity,
        price_at_purchase: mongoose.Types.Decimal128.fromString(
          productPrice.toFixed(2),
        ),
      });

      // หักจำนวนสินค้าออกจากสต็อกในตาราง Product
      product.stock_quantity -= item.quantity;
      await product.save();
    }

    // 3. ประกอบร่างข้อมูลและบันทึกลงตาราง Order
    const newOrder = new Order({
      _id: uuidv4(),
      user_id: userId,
      // 🎯 แปลงยอดรวมคำนวณสุทธิให้เป็น Decimal128 ก่อนบันทึก เพื่อความตรงเป๊ะระดับการเงิน
      total_amount: mongoose.Types.Decimal128.fromString(
        calculatedTotal.toFixed(2),
      ),
      shipping_address: shipping_address,
      order_details: finalOrderDetails,
    });

    const savedOrder = await newOrder.save();

    // 4. ล้างสินค้าออกจากตะกร้าทิ้ง (เพราะย้ายมาอยู่ในบิลออเดอร์แล้ว)
    cart.items = [];
    await cart.save();

    // 📥 5. พ่น JSON กลับไป (นี่ทำหน้าที่เป็น View ส่งให้หน้าบ้าน)
    return response.status(201).json({
      msg: "สร้างใบสั่งซื้อสำเร็จและล้างตะกร้าเรียบร้อยแล้ว 🎉",
      order: savedOrder,
    });
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `เกิดข้อผิดพลาดในการสร้างออเดอร์: ${err.message}` });
  }
};
