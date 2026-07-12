// src/services/authService.js
import axiosInstance from "./axiosInstance";

export const authService = {
  // ฟังก์ชันสำหรับเข้าสู่ระบบ
  login: async (credentials) => {
    // credentials จะเป็นก้อนวัตถุ { email, password }
    const response = await axiosInstance.post("/auth/login", credentials);
    return response.data; // ส่งข้อมูลผลลัพธ์กลับไปให้หน้า Page
  },

  // ฟังก์ชันสำหรับสมัครสมาชิก
  register: async (userData) => {
    const response = await axiosInstance.post("/auth/register", userData);
    return response.data;
  },

  // ฟังก์ชันดึงข้อมูลโปรไฟล์ตัวเอง
  getProfile: async () => {
    const response = await axiosInstance.get("/auth/me");
    return response.data;
  },
};
