import express from "express";
import users from "./mockUsers.js";
import mockProducts from "./mockProducts.js";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";
import User from "../model/users.js";
//running web server
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// ตัวอย่าง: ถ้าใน Atlas ชื่อฐานข้อมูลว่า jsd_database ให้เติมเข้าไปหลังเครื่องหมาย / แบบนี้ครับ

// สังเกตตรงหลังเครื่องหมาย / ก่อนถึงเครื่องหมาย ?
const mongoURI =
  "mongodb+srv://admin:BuxzeUeC9aQwLWqp@cluster0.x4pwt66.mongodb.net/test?appName=Cluster0";
// 👆 นี่คือชื่อ Database
// const mockData = require("./mockUsers");
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected successfully to MongoDB Atlas! 🎉"))
  .catch((err) => console.error("MongoDB connection error ❌:", err.message));

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

//request
app.get("/api/users", async (request, response) => {
  try {
    const allUsers = await User.find();
    response.json(allUsers);
  } catch (error) {
    response.status(500).json({
      msg: `cannot connect ${error}`,
    });
  }
});

// localhoust:3000/users
//route param users
app.get("/api/users/:id", async (request, response) => {
  try {
    const userFindbyid = request.params.id; // จะรับค่า "5f8f9dc2-9131-4ea1-9a3c-ab207ad2a9ba" มา

    // 💡 เปลี่ยนจาก User.findById(userFindbyid)
    // มาเป็น User.findOne({ _id: userFindbyid }) แทนครับ
    // การเขียนแบบนี้ Mongoose จะไม่บังคับแปลงร่างสตริงของเราให้เป็น ObjectId ครับ
    const userdata = await User.findOne({ _id: userFindbyid });

    if (!userdata) {
      return response.status(404).json({
        msg: `ไม่พบข้อมูลผู้ใช้ที่มี ID: ${userFindbyid}`,
      });
    }

    response.json(userdata);
  } catch (err) {
    response.status(500).json({ msg: `ไม่สำเร็จ ${err.message}` });
  }
});

// localhost:3000/products
//query param
///api/products?filter=product_name&value=ชีทสรุปวิชาคณิตศาสตร์%20ม.ปลาย
app.get("/api/products", (request, response) => {
  console.log(request.query);
  const {
    query: { filter, value },
  } = request;
  //when filter and value are undefind
  if (!filter && !value) return response.json(mockProducts);

  if (filter && value)
    return response.send(
      mockProducts.filter((product) => product[filter].includes(value)),
    );
});
//POST User
app.post("/api/users", async (request, response) => {
  try {
    const { body } = request;

    // สร้างอินสแตนซ์ของ User ขึ้นมาจากข้อมูลฝั่งหน้าบ้านที่ส่งมาทาง body
    // ปล. สำหรับ MongoDB Atlas มันจะสร้างไอดีชนิด ObjectId ให้เราโดยอัตโนมัติ จึงไม่จำเป็นต้องใช้ uuidv4() ครับ
    const newUser = new User({
      _id: uuidv4(),
      ...body,
    });

    // บันทึกข้อมูลลงสู่ระบบคลาวด์
    const savedUser = await newUser.save();

    return response.status(201).json(savedUser);
  } catch (err) {
    response.status(500).json({ msg: `สร้างผู้ใช้ไม่สำเร็จ: ${err.message}` });
  }
});
//PUT user update everyting on user
app.put("/api/users/:id", async (request, response) => {
  try {
    const { body } = request;
    const userFindbyid = request.params.id;

    // ใช้คำสั่ง findByIdAndUpdate เพื่ออัปเดตทันที
    // { new: true } สั่งให้คืนค่า Object ชุดใหม่หลังจากบันทึกแล้วกลับมาแสดงผล
    const updatedUser = await User.findByIdAndUpdate(userFindbyid, body, {
      new: true,
    });

    if (!updatedUser) {
      return response.status(404).json({
        msg: `ไม่พบข้อมูลผู้ใช้ที่มี ID: ${userFindbyid} เพื่อทำการแก้ไข`,
      });
    }

    return response.status(200).json({
      msg: "แก้ไขข้อมูลผู้ใช้บนฐานข้อมูลสำเร็จ",
      data: updatedUser,
    });
  } catch (err) {
    response.status(500).json({ msg: `แก้ไขไม่สำเร็จ: ${err.message}` });
  }
});
// PATCH user update partial field
app.patch("/api/users/:id", (request, response) => {
  try {
    const { body } = request;
    const userFindbyid = request.params.id;

    // หาช่องผู้ใช้เหมือนคำสั่ง PUT
    const userIndex = users.findIndex((user) => user._id === userFindbyid);

    if (userIndex === -1) {
      return response.status(404).json({
        msg: `ไม่พบข้อมูลผู้ใช้ที่มี ID: ${userFindbyid} เพื่อทำการแก้ไขแบบเฉพาะจุด`,
      });
    }

    // จุดต่าง: ค่อยๆ เจาะอัปเดตฟิลด์ซ้อนด้านใน (เช่น จัดการ Object Profile ไม่ให้แตกสลาย)
    const currentUser = users[userIndex];

    const updatedUser = {
      ...currentUser,
      ...body, // เอาข้อมูลที่ส่งมาใหม่ทับตัวเก่า
      // รักษาโครงสร้าง profile ด้านในไม่ให้โดนทับหายไปทั้งหมดถ้าส่งมาแค่ฟิลด์เดียว
      profile: body.profile
        ? { ...currentUser.profile, ...body.profile }
        : currentUser.profile,
      _id: userFindbyid, // ล็อก ID ไว้เหมือนเดิม
    };

    users[userIndex] = updatedUser;

    return response.status(200).json({
      msg: "อัปเดตข้อมูลเฉพาะส่วนสำเร็จ 🎉",
      data: users[userIndex],
    });
  } catch (err) {
    return response
      .status(500)
      .json({ msg: `แก้ไขแบบ PATCH ไม่สำเร็จ: ${err.message}` });
  }
});
