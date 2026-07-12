import Cart from "../models/carts.js";
import { v4 as uuidv4 } from "uuid";

export const addToCart = async (request, response) => {
  try {
    const { product_id, quantity } = request.body;
    const userId = request.user.userId; // แกะไอดีผู้ใช้จาก Token ที่ล็อกอิน

    // 1. ค้นหาดูว่าผู้ใช้คนนี้มีตะกร้าในระบบอยู่แล้วหรือยัง
    let cart = await Cart.findOne({ user_id: userId });

    // 2. ถ้ายังไม่เคยมีตะกร้าเลย (เพิ่งกดชิ้นแรกในชีวิต) ให้สร้างตะกร้าใหม่ให้เขาซะ
    if (!cart) {
      cart = new Cart({
        _id: uuidv4(),
        user_id: userId,
        items: [{ product_id, quantity }],
      });
      await cart.save();
      return response
        .status(201)
        .json({ msg: "เพิ่มสินค้าลงตะกร้าเรียบร้อย", data: cart });
    }

    // 3. ถ้าเขามีตะกร้าอยู่แล้ว -> เช็กว่าในตะกร้ามีสินค้าชิ้นนี้อยู่แล้วหรือยัง
    const itemIndex = cart.items.findIndex(
      (item) => item.product_id === product_id,
    );

    if (itemIndex > -1) {
      // 🟢 มีสินค้าชิ้นนี้อยู่แล้ว: ให้บวกจำนวน (Quantity) เพิ่มเข้าไปจากของเดิม
      cart.items[itemIndex].quantity += quantity;
    } else {
      // 🔵 ยังไม่มีสินค้าชิ้นนี้ในตะกร้า: ให้ push ไอเทมใหม่ลง Array items
      cart.items.push({ product_id, quantity });
    }

    // 4. บันทึกการเปลี่ยนแปลงลงฐานข้อมูล
    await cart.save();
    return response.json({ msg: "อัปเดตตะกร้าสินค้าสำเร็จ 🎉", data: cart });
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `เพิ่มลงตะกร้าไม่สำเร็จ: ${err.message}` });
  }
};

export const getMyCart = async (request, response) => {
  try {
    const userId = request.user.userId;

    // ค้นหาตะกร้าและแตกข้อมูลสินค้าออกมาร่วมร่าง
    const cart = await Cart.findOne({ user_id: userId }).populate(
      "items.product_id",
    );

    if (!cart) {
      return response.json({ items: [] }); // ถ้ายังไม่มีตะกร้า ให้ส่งอาเรย์ว่างกลับไปก่อน
    }

    return response.json(cart);
  } catch (err) {
    return response.status(500).json({ msg: err.message });
  }
};

export const removeFromCart = async (request, response) => {
  try {
    const { product_id } = request.body; // รับไอดีสินค้าที่ต้องการจะลบ
    const userId = request.user.userId; // แกะไอดีผู้ใช้จาก Token (ตัวตรวจประตู)

    // 🎯 ค้นหาตะกร้าของ User คนนี้ แล้วสั่ง $pull เพื่อควัก Object ชิ้นที่มี product_id ตรงกันออกจาก Array items ทันที
    const updatedCart = await Cart.findOneAndUpdate(
      { user_id: userId },
      {
        $pull: { items: { product_id: product_id } },
      },
      { returnDocument: "after" }, // คืนค่าข้อมูลในตะกร้าล่าสุดหลังจากลบแล้วกลับไปให้หน้าบ้าน
    ).populate("items.product_id"); // ดึงข้อมูลรายละเอียดสินค้าตัวที่เหลือมาพ่วงด้วย

    if (!updatedCart) {
      return response
        .status(404)
        .json({ msg: "ไม่พบตะกร้าสินค้าของผู้ใช้รายนี้" });
    }

    return response.json({
      msg: "ลบสินค้าออกจากตะกร้าสำเร็จแล้ว 🗑️",
      data: updatedCart,
    });
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `ไม่สามารถลบสินค้าได้: ${err.message}` });
  }
};
