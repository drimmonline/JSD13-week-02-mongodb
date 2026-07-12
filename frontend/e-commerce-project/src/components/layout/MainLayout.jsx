import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/registerPage";

export default function MainLayout() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* 1. แปะ Navbar ไว้บนสุด มันจะอยู่ถาวรไม่ว่าเปลี่ยนไปหน้าไหน */}
      <Navbar />

      {/* 2. พื้นที่เนื้อหาหลักของแต่ละหน้าจะมาโผล่ตรง <Outlet /> นี้ */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <LoginPage isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterPage
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onSwitchToLogin={() => setIsLoginOpen(true)} // ถ้ากดเข้าสู่ระบบในกล่องสมัครสมาชิก ให้สลับมาเปิดกล่องล็อกอิน
      />
      {/* (แถม) ถ้ามี Footer ก็แปะไว้ตรงนี้ได้เลย */}
    </div>
  );
}
