import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/registerPage";
import MainLayout from "./components/layout/MainLayout.jsx";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import ProductsPage from "./pages/ProductPage.jsx";

function RegisterRouteWrapper() {
  const navigate = useNavigate();
  return (
    <RegisterPage
      isOpen={true} // บังคับเป็น true เพราะเมื่อ URL วิ่งมาที่ /register ปุ๊บ ให้เปิด Modal ทันที
      onClose={() => navigate("/")} // เมื่อกดกากบาท หรือกดพื้นหลังว่างๆ ให้ดีด URL กลับไปหน้าแรก (Modal จะปิดตัวลงอัตโนมัติ)
      onSwitchToLogin={() => navigate("/login")} // ถ้ากดปุ่ม "เข้าสู่ระบบที่นี่" ด้านล่างฟอร์ม ให้เปลี่ยน URL ไปหน้า /login
    />
  );
}

function LoginRouteWrapper() {
  const navigate = useNavigate();
  return (
    <LoginPage
      isOpen={true}
      onClose={() => navigate("/")}
      onSwitchToRegister={() => navigate("/register")} // ถ้ากดปุ่ม "สมัครสมาชิกใหม่" ให้เปลี่ยน URL ไปหน้า /registerแทน
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ครอบหน้าเว็บทั้งหมดด้วย MainLayout */}
        <Route path="/" element={<MainLayout />}>
          {/* หน้าลูก (Child Routes) ทั้งหมดด้านล่างนี้จะแสดงผลข้างใน <Outlet /> ของ MainLayout */}
          <Route index element={<HomePage />} /> {/* หน้าแรกสุด (/) */}
          <Route path="login" element={<LoginRouteWrapper />}></Route>
          <Route path="register" element={<RegisterRouteWrapper />} />
          <Route path="product" element={<ProductsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
