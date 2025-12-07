import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // VALIDATION
    if (!form.email || !form.password) {
      setError("Please fill ALL fields.");
      return;
    }

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(form.email)) {
      setError("Enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // CHECK IF USER EXISTS IN LOCAL STORAGE
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("User not found. Please sign up first.");
      return;
    }

    const userData = JSON.parse(storedUser);
    if (userData.email !== form.email || userData.password !== form.password) {
      setError("Invalid email or password.");
      return;
    }

    // LOGIN SUCCESSFUL
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    navigate("/experts");
  };

  return (
    <div className="min-h-screen flex bg-[#0F0F0F]">

      {/* LEFT IMAGE AREA (Editable) */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{
          // 🔥 येथे तू नंतर image देऊ शकतो:
          // backgroundImage: "url('your-login-image-url')"
        }}
      >
        {/* KEEP EMPTY - IMAGE ONLY AREA */}
      </div>

      {/* RIGHT LOGIN CARD */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-md bg-[#161616] p-8 rounded-xl shadow-lg border border-[#2A2A2A]">

          {/* Header */}
          <h2 className="text-white text-3xl font-semibold text-center mb-2">
            Welcome back
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Log in to continue your journey
          </p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-900/30 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm mb-4">
              {error}
            </div>
          )}

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleLogin}>

            {/* Email */}
            <div>
              <label className="text-gray-300 text-sm mb-1 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-[#0E0E0E] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#7B4CFF]"
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-300 text-sm mb-1 block">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 rounded-lg bg-[#0E0E0E] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#7B4CFF]"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#7B4CFF] hover:bg-[#6939E6] transition text-white py-2 rounded-lg font-medium"
            >
              Log In
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="h-px bg-[#2A2A2A] flex-1" />
              <span className="text-gray-400 text-sm">OR</span>
              <div className="h-px bg-[#2A2A2A] flex-1" />
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full border border-[#2A2A2A] bg-[#0E0E0E] hover:bg-[#1A1A1A] transition text-white py-2 rounded-lg flex items-center justify-center gap-3"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-[#7B4CFF] hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
