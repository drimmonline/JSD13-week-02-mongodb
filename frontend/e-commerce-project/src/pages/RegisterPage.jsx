import RegisterForm from "../components/auth/registerForm";
// เปลี่ยนชื่อและรับ Props: isOpen และ onClose สำหรับควบคุมจากภายนอก
export default function RegisterPage({ isOpen, onClose, onSwitchToLogin }) {
  // ถ้าไม่ได้สั่งเปิด ไม่ต้องเรนเดอร์เนื้อหาใดๆ
  if (!isOpen) return null;

  const handleRegisterSubmit = async (formData) => {
    try {
      console.log("ส่งข้อมูลไปหลังบ้าน:", formData);

      alert("สมัครสมาชิกสำเร็จ!");
      onClose(); // ปิด Modal หลังจากลงทะเบียนเรียบร้อย
    } catch (error) {
      console.error("เกิดข้อผิดพลาดระหว่างสมัครสมาชิก:", error);
      alert("สมัครสมาชิกไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    // 1. พื้นหลังโปร่งแสงคลุมทั้งหน้าจอ (z-50 อยู่เหนือทุกอย่าง) พร้อมเอฟเฟกต์เบลอ
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
      {/* 🎯 จุดสำคัญ: แผ่นพื้นหลังดักจับการคลิก ถ้ากดโดนพื้นที่นี้ จะสั่งเรียกฟังก์ชัน onClose ทันที */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* 2. กล่องเนื้อหาฟอร์มสมัครสมาชิก (ตั้งค่าความกว้างสูงสุดไว้ที่ max-w-2xl เพราะฟิลด์เยอะ) */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl border border-slate-100 z-10 my-8 transition-all scale-100">
        {/* ❌ ปุ่มกากบาทมินิมอลสำหรับกดปิดที่มุมขวาบน */}
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

        {/* ส่วนหัวของข้อความต้อนรับ */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">สร้างบัญชีใหม่</h2>
          <p className="text-sm text-slate-500 mt-1">
            กรุณากรอกข้อมูลให้ครบถ้วนเพื่อเริ่มใช้งานร้านค้าของเรา
          </p>
        </div>

        {/* เรียก Component ฟอร์มมาวาง แล้วโยนฟังก์ชันจัดการ API เข้าไป */}
        <RegisterForm onSubmit={handleRegisterSubmit} />

        {/* ส่วนท้ายของหน้าเว็บ */}
        <p className="text-center text-sm text-slate-600 mt-6">
          มีบัญชีอยู่แล้วใช่ไหม?{" "}
          <button
            type="button"
            className="font-medium text-blue-600 hover:underline cursor-pointer"
            onClick={() => {
              onClose();
              if (onSwitchToLogin) onSwitchToLogin(); // ปิดกล่องตัวเอง แล้วสั่งให้โครงสร้างหลักเปิด LoginModal
            }}
          >
            เข้าสู่ระบบที่นี่
          </button>
        </p>
      </div>
    </div>
  );
}
