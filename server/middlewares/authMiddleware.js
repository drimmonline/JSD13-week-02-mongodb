import jwt from "jsonwebtoken";

export const protectRoute = (request, response, next) => {
  try {
    // ดึง token จาก headers "Authorization: Bearer <TOKEN>"
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return response.status(401).json({ msg: "กรุณาล็อกอินก่อนใช้งานระบบ" });
    }

    const token = authHeader.split(" ")[1];

    // ตรวจสอบความถูกต้องของ Token (ใส่รหัสลับหลังบ้านของคุณมอส)
    const decoded = jwt.verify(token, "SECRET_KEY_YOUR_MOS_2026");

    // ฝังข้อมูลผู้ใช้ลงใน request เผื่อไปใช้ต่อใน controller
    request.user = decoded;

    next(); // 🎯 ผ่านทาง! ยอมให้วิ่งไปทำงานที่ Controller ต่อได้
  } catch (err) {
    return response.status(403).json({ msg: "Token ไม่ถูกต้องหรือหมดอายุ" });
  }
};
