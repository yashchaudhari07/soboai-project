import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    // VALIDATION
    if (!form.fullname || !form.email || !form.password || !form.confirmPassword) {
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

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // SAVE USER DATA IN LOCAL STORAGE
    localStorage.setItem("user", JSON.stringify({
      fullname: form.fullname,
      email: form.email,
      password: form.password,
    }));

    navigate("/login");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F] px-4">
      <div style={{backgroundImage:'url(https://tse4.mm.bing.net/th/id/OIP.4-ojzu5-IK6fwnR_wTEJQwAAAA?cb=ucfimg2&pid=ImgDet&ucfimg=1&w=159&h=283&c=7&o=7&rm=3)', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className="hidden md:block w-1/2 max-w-lg h-[500px] mr-10 rounded-xl shadow-lg border border-[#2A2A2A]">
      
      </div>
      <div className="w-full max-w-md bg-[#161616] p-8 rounded-xl shadow-lg border border-[#2A2A2A]">
        
        {/* Header */}
        <h2 className="text-white text-3xl font-semibold text-center mb-2">
          Create an account
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Start your journey with SoboAI
        </p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-900/30 border border-red-500 text-red-400 px-4 py-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSignup}>

          {/* Full Name */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg bg-[#0E0E0E] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#7B4CFF]"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Email</label>
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
            <label className="text-gray-300 text-sm mb-1 block">Password</label>

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

          {/* Confirm Password */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">Confirm Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 rounded-lg bg-[#0E0E0E] border border-[#2A2A2A] text-white focus:outline-none focus:border-[#7B4CFF]"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-[#7B4CFF] hover:bg-[#6939E6] transition text-white py-2 rounded-lg font-medium"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="h-px bg-[#2A2A2A] flex-1" />
            <span className="text-gray-400 text-sm">OR</span>
            <div className="h-px bg-[#2A2A2A] flex-1" />
          </div>

          {/* Google Signup */}
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

        {/* Footer Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#7B4CFF] hover:underline" onclick={() => navigate("/login")}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
