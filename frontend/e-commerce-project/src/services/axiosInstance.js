import axios from "axios";

const axiosInstance = axios.create({
  // ✅ ต้องมี http:// นำหน้าเสมอนะครับคุณมอส
  baseURL: "http://localhost:3000/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔄 Interceptors (ฝั่งขาไป): ดักจับก่อนส่ง Request เพื่อแนบ Token อัตโนมัติ
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ดึง Token ที่เก็บไว้ตอน Login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // แนบเข้า Header ไปทุกรอบ
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 🔄 Interceptors (ฝั่งขากลับ): ดักจับ Response ถ้าหลังบ้านแจ้งว่า Token หมดอายุ (401) ให้สั่งเด้งออกทันที
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // ตัวอย่าง: ถ้า Token หมดอายุ ให้ล้างค่าแล้วสั่งไปหน้า Login
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
