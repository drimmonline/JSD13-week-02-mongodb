import { useState } from "react";

export default function Navbar() {
  // สร้าง State สำหรับควบคุมการเปิด-ปิด Dropdown รูปคน
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      {/* ปรับเป็น bg-blue-900 (พื้นหลังสี) และ text-white (ตัวอักษรขาว) */}
      <nav className="bg-blue-900 text-white fixed w-full z-20 top-0 start-0 border-b border-blue-800 mb-10 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* ฝั่งซ้าย: Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Bookstore
            </span>
          </a>

          {/* ปุ่มสำหรับเปิดเมนูบนมือถือ (Mobile Toggle) */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-200 rounded-lg md:hidden hover:bg-blue-800 focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* เมนูตรงกลาง และกลุ่มไอคอนฝั่งขวา */}
          <div
            className="hidden w-full md:flex md:items-center md:space-x-8 md:w-auto"
            id="navbar-default"
          >
            {/* รายการลิงก์เมนูหลัก */}
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 bg-blue-800 md:bg-transparent rounded-lg">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white md:p-0 hover:text-blue-200"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/home"
                  className="block py-2 px-3 text-blue-100 md:p-0 hover:text-white"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-blue-100 md:p-0 hover:text-white"
                >
                  Exam
                </a>
              </li>
            </ul>

            {/* กลุ่มไอคอนฝั่งขวาสุด (ตะกร้า และ โปรไฟล์) */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0 px-3 md:px-0 border-t border-blue-800 md:border-none pt-4 md:pt-0">
              {/* 🛒 1. ไอคอนตะกร้าสินค้า */}
              <a
                href="/cart"
                className="relative p-2 text-blue-100 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                {/* ตัวเลขแจ้งเตือนจำนวนสินค้าในตะกร้า (ถ้ามี) */}
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                  0
                </span>
              </a>

              {/* 👤 2. เมนู Dropdown รูปคน */}
              <div className="relative">
                {/* ปุ่มรูปคนสำหรับกดเปิด/ปิด */}
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-2 text-blue-100 hover:text-white transition-colors focus:outline-none cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </button>

                {/* ตัวกล่อง Dropdown จะแสดงผลเมื่อ isProfileOpen เป็น true */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white py-1 shadow-lg border border-slate-100 z-30">
                    <div className="px-4 py-2 text-xs text-slate-400 border-b border-slate-100">
                      ยินดีต้อนรับ
                    </div>
                    <a
                      href="/login"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Login
                    </a>
                    <a
                      href="/register"
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Register
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
