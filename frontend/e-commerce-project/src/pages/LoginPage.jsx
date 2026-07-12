import LoginForm from "../components/auth/loginForm";
export default function LoginPage({ isOpen, onClose }) {
  // ถ้าไม่ได้สั่งเปิด Modal ให้คืนค่าว่าง ไม่ต้องเรนเดอร์อะไรออกมา
  if (!isOpen) return null;

  const handleLoginSubmit = async (formData) => {
    try {
      console.log("กำลังส่งข้อมูลล็อกอินเข้า API:", formData);

      // ตัวอย่างจำลองการยิง API จริง:
      // const response = await axios.post('/api/auth/login', formData)
      // if (response.status === 200) {
      //    localStorage.setItem('token', response.data.token)
      //    onClose(); // ล็อกอินสำเร็จให้ปิด Modal อัตโนมัติ
      //    navigate('/dashboard')
      // }

      alert("เข้าสู่ระบบสำเร็จ!");
      onClose(); // ปิด Modal หลังจากกดตกลง
    } catch (error) {
      console.error("ล็อกอินล้มเหลว:", error);
      alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    // 1. พื้นหลังสีดำโปร่งแสง (Overlay) คลุมทั้งหน้าจอ
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      {/* ส่วนดักจับ: ถ้าคนกดพื้นที่ว่างด้านนอก ให้ปิด Modal */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* 2. กล่องการ์ดล็อกอินสีขาว (ตัว Modal กลางจอ) */}
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-slate-100 z-10 transition-all scale-100">
        {/* ❌ ปุ่มกากบาทปิดที่มุมขวาบน */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* ส่วนหัวแสดงการต้อนรับ */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">
            ยินดีต้อนรับกลับมา
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบบัญชีของคุณ
          </p>
        </div>

        {/* แปะ Component ฟอร์มลงไป */}
        <LoginForm onSubmit={handleLoginSubmit} />

        {/* ส่วนท้ายลิงก์สลับไปหน้าสมัครสมาชิก */}
        <p className="text-center text-sm text-slate-600 mt-6">
          ยังไม่มีบัญชีใช่ไหม?{" "}
          <a
            href="/register"
            className="font-medium text-blue-600 hover:underline"
            onClick={onClose} // ปิด Modal เมื่อกดลิ้งค์ข้ามหน้า
          >
            สมัครสมาชิกใหม่
          </a>
        </p>
      </div>
    </div>
  );
}
