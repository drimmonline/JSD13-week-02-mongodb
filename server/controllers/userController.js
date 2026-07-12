import { request } from "express";
import User from "../models/users.js"; // 💡 อย่าลืมเช็กชื่อไฟล์นี้ในโฟลเดอร์ models ด้วยนะว่าสะกดตรงกันไหม
import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getAllUsers = async (request, response) => {
  try {
    const allUsers = await User.find();
    return response.json(allUsers); // 🎯 ส่งข้อมูลกลับไปหาฝั่งที่เรียกใช้งาน
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `ดึงข้อมูลไม่สำเร็จ: ${err.message}` });
  }
};

// 2. ฟังก์ชันสำหรับดึงข้อมูลผู้ใช้รายคน (GET by ID)
export const getUserById = async (request, response) => {
  try {
    const { id } = request.params;
    const userdata = await User.findOne({ _id: id });

    if (!userdata) {
      return response
        .status(404)
        .json({ msg: `ไม่พบข้อมูลผู้ใช้ที่มี ID: ${userdata}` });
    }
    return response.json(userdata);
  } catch (err) {
    return response.status(500).json({ msg: `ไม่สำเร็จ ${err.message}` });
  }
};

// 3. ฟังก์ชันสำหรับสร้างผู้ใช้ใหม่ (POST)
export const createUser = async (request, response) => {
  try {
    const { password, ...otherData } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const { body } = request;

    const newUser = new User({
      ...otherData,
      password: hashedPassword, // เซฟเฉพาะตัวที่ล็อกรหัสแล้วลง DB
      _id: uuidv4(),
    });
    const savedUser = await newUser.save();
    const userResponse = savedUser.toObject();
    delete userResponse.password;

    return response
      .status(201)
      .json({ msg: "สร้างผู้ใช้สำเร็จ", data: userResponse });
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `สร้างผู้ใช้ไม่สำเร็จ: ${err.message}` });
  }
};

export const updateUserPut = async (request, response) => {
  try {
    const userId = request.params.id; // เปลี่ยนชื่อตรงนี้ให้เป็น userId
    const newData = request.body;

    // ค้นหาและเขียนทับข้อมูลด้วย userId ที่แกะออกมา
    const updatedUser = await User.findOneAndReplace({ _id: userId }, newData, {
      returnDocument: "after",
    });

    if (!updatedUser) {
      return response.status(404).json({ msg: `ไม่พบผู้ใช้ไอดี: ${userId}` });
    }

    return response.json({ msg: "อัปเดตข้อมูลสำเร็จ", data: updatedUser });
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `อัปเดตข้อมูลไม่สำเร็จ: ${err.message}` });
  }
};

// 4. ฟังก์ชันสำหรับอัปเดตข้อมูลแบบ PATCH (แก้ไขเฉพาะบางฟิลด์ - แนะนำตัวนี้สำหรับอัปเดตทั่วไป)
export const updateUserPatch = async (request, response) => {
  try {
    const userId = request.params.id;
    const { profile, ...otherData } = request.body; // แยกส่วน profile ออกมา

    // สร้างออบเจกต์สำหรับสั่ง $set
    let updateFields = { ...otherData };

    // ถ้ามีการส่งข้อมูล profile มาแก้ไข
    if (profile) {
      // วนลูปเอาคีย์ข้างในโปรไฟล์มาแตกรูปแบบเป็น "profile.คีย์" เช่น "profile.name"
      for (const key in profile) {
        updateFields[`profile.${key}`] = profile[key];
      }
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: updateFields }, // ส่งออบเจกต์ที่แตกกระจายฟิลด์แล้วเข้าไป
      { returnDocument: "after" },
    );

    if (!updatedUser) {
      return response.status(404).json({ msg: `ไม่พบผู้ใช้ไอดี: ${userId}` });
    }

    return response.json({ msg: "อัปเดตข้อมูลสำเร็จ", data: updatedUser });
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `อัปเดตไม่สำเร็จ: ${err.message}` });
  }
};

// 6. ฟังก์ชันสำหรับลบผู้ใช้ (DELETE)
export const deleteUser = async (request, response) => {
  try {
    const userId = request.params.id;

    // ค้นหาด้วย _id (String UUID) แล้วลบทิ้งทันที
    const deletedUser = await User.findOneAndDelete({ _id: userId });

    if (!deletedUser) {
      return response
        .status(404)
        .json({ msg: `ไม่พบผู้ใช้ไอดีที่ต้องการลบ: ${userId}` });
    }

    return response.json({
      msg: "ลบข้อมูลผู้ใช้เรียบร้อยแล้ว",
      deletedData: deletedUser,
    });
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `ลบข้อมูลไม่สำเร็จ: ${err.message}` });
  }
};
export const loginUsers = async (request, response) => {
  try {
    const { username, password } = request.body;
    const user = await User.findOne({ username });
    if (!user) {
      return response
        .status(401)
        .json({ msg: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" });
    }
    // 2. ตรวจสอบรหัสผ่าน (เอา password ดิบหน้าบ้าน ไปเทียบกับรหัสที่โดนแฮชใน DB)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return response
        .status(401)
        .json({ msg: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" });
    }
    // 🎯 3. สเตปสำคัญ: ขั้นตอนการสร้าง Token (แจกตั๋ว)
    // เราจะเอาข้อมูลบางส่วน (Payload) มาผูกไว้ในตั๋ว แต่ห้ามใส่รหัสผ่านลงไปเด็ดขาดนะ!
    const tokenPayload = {
      userId: user._id,
      username: user.username,
      account_type: user.account_type, // เผื่อเอาไว้เช็กสิทธิ์ว่าเป็น student หรือ admin ในอนาคต
    };
    const token = jwt.sign(
      tokenPayload,
      "SECRET_KEY_YOUR_MOS_2026", // 🔑 กุญแจลับหลังบ้าน (ห้ามบอกใครเด็ดขาด)
      { expiresIn: "1d" }, // ⏳ ตั้งเวลาหมดอายุของตั๋วใบนี้ เช่น "1d" (1 วัน) หรือ "2h" (2 ชั่วโมง)
    );

    // 4. ส่ง Token กลับไปให้หน้าบ้านเอาไปเก็บไว้ใช้งาน
    return response.json({
      msg: "เข้าสู่ระบบสำเร็จ 🎉",
      accessToken: token, // หน้าบ้านจะก๊อปปี้ก้อนนี้ไปใช้ยิง API เส้นที่ต้องล็อกประตู
    });
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `เกิดข้อผิดพลาดในการล็อกอิน: ${err.message}` });
  }
};
