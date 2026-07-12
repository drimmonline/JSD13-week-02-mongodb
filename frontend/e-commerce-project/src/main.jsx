import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/register",
//     element: <RegisterPage />,
//   },
//   {
//     path: "/register",
//     element: <LoginPage />,
//   },
//   // ส่วนของ path และ element เราสามารถเพิ่มมาอีกได้เรื่อย ๆ กรณีที่เรามีหลายเพจ
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
