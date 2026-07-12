import { useForm } from "react-hook-form";

export default function RegisterForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      name: "",
      lastname: "",
      phonenumber: "",
      address: "",
      dob: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* ส่วนของบัญชีผู้ใช้ (2 คอลัมน์) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Username
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            {...register("username", { required: "กรุณากรอก Username" })}
          />
          {errors.username && (
            <p className="mt-1 text-xs text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            {...register("email", {
              required: "กรุณากรอก Email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "รูปแบบ Email ไม่ถูกต้อง",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* รหัสผ่าน */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Password
        </label>
        <input
          type="password"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          {...register("password", {
            required: "กรุณากรอกรหัสผ่าน",
            minLength: {
              value: 6,
              message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร",
            },
          })}
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <hr className="border-slate-100 my-2" />

      {/* ข้อมูลส่วนตัว */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            ชื่อ
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            {...register("name", { required: "กรุณากรอกชื่อจริง" })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            นามสกุล
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            {...register("lastname", { required: "กรุณากรอกนามสกุล" })}
          />
          {errors.lastname && (
            <p className="mt-1 text-xs text-red-500">
              {errors.lastname.message}
            </p>
          )}
        </div>
      </div>

      {/* เบอร์โทรศัพท์ และ วันเกิด */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            เบอร์โทรศัพท์
          </label>
          <input
            type="tel"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            {...register("phonenumber", {
              required: "กรุณากรอกเบอร์โทรศัพท์",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก",
              },
            })}
          />
          {errors.phonenumber && (
            <p className="mt-1 text-xs text-red-500">
              {errors.phonenumber.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            วัน/เดือน/ปี เกิด (DOB)
          </label>
          <input
            type="date"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            {...register("dob", { required: "กรุณาเลือกวันเกิด" })}
          />
          {errors.dob && (
            <p className="mt-1 text-xs text-red-500">{errors.dob.message}</p>
          )}
        </div>
      </div>

      {/* ที่อยู่ */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          ที่อยู่
        </label>
        <textarea
          rows="3"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          {...register("address", {
            required: "กรุณากรอกที่อยู่สำหรับจัดส่งสินค้า",
          })}
        ></textarea>
        {errors.address && (
          <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/* ปุ่มส่งข้อมูล */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer mt-4"
      >
        ลงทะเบียนสมาชิก
      </button>
    </form>
  );
}
