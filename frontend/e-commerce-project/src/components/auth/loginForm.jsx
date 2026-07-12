import { useForm } from "react-hook-form";

export default function LoginForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* ช่องกรอกอีเมล */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          อีเมล
        </label>
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none placeholder:text-slate-400"
          {...register("email", {
            required: "กรุณากรอกอีเมลของคุณ",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "รูปแบบอีเมลไม่ถูกต้อง",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* ช่องกรอกรหัสผ่าน */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium text-slate-700">
            รหัสผ่าน
          </label>
          <a
            href="#forgot"
            className="text-xs font-medium text-blue-600 hover:underline"
          >
            ลืมรหัสผ่าน?
          </a>
        </div>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none placeholder:text-slate-400"
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

      {/* ปุ่มเข้าสู่ระบบ */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer mt-2"
      >
        เข้าสู่ระบบ
      </button>
    </form>
  );
}
