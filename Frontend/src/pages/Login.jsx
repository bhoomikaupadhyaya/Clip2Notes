// Login.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the highlighted errors.");
      return;
    }

    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 1800));

      toast.success("Login Successful ");

      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF] box-border font-sans">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 lg:gap-16 px-6 py-12 lg:grid-cols-2">

        {/* Left Panel */}
        
          

           <motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative hidden lg:flex flex-col justify-center overflow-hidden bg-gradient-to-br  from-[#191970] via-[#25258C] to-[#4F46E5] min-h-screen rounded-none "
>
  {/* Background Blur */}

  <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/20 blur-[140px]" />

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-[140px]" />

  <div className="relative z-10 flex flex-col items-center justify-center px-16 py-20 text-white">

      <span className="-translate-x-4 rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
      Join Clip2Notes
    </span>

    <h1 className="text-5xl font-extrabold leading-tight whitespace-nowrap">
  <span className="text-white">Learn </span>
  <span className="text-yellow-100">Smarter.</span>
</h1>

    <p className="mt-24 max-w-lg text-center text-lg leading-8 text-indigo-100">
     Sign in to continue transforming your videos into AI-powered notes, quizzes, flashcards, and intelligent conversations.
    </p>

    <div className="w-[600px] rounded-full border border-white/20 bg-white/10 py-7 px-10 backdrop-blur-xl">

      <motion.div
        whileHover={{ scale: 1.03 }}
       className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur"
      >
        <h3 className="text-lg font-semibold">
          Continue Learning
        </h3>

        <p className="mt-2 max-w-xl text-indigo-100">
          Access your saved notes, summaries, and learning progress instantly.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur"
      >
        <h3 className="text-center text-lg font-semibold">
          AI Workspace


        </h3>

        <p className="mt-2 text-center text-indigo-100">
         Resume your AI-powered notes, quizzes, flashcards, and conversations.
        </p>
      </motion.div>

      
      <motion.div
  whileHover={{ scale: 1.03 }}
  className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur"
>
  <div className="flex flex-col items-center">
    <h3 className="text-lg font-semibold">
      Your Dashboard


    </h3>

    <p className="mt-2 max-w-xl text-center text-indigo-100">
    Manage videos, track progress, and continue where you left off.
    </p>
  </div>
</motion.div>
    </div>

  </div>

</motion.div>

        {/* Right Panel - Login Box */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center w-full"
        >
          {/* Increased padding (p-8 sm:p-12) and strictly contained widths */}
          <div className="w-full max-w-[560px] rounded-[32px] border border-slate-200 bg-white px-10 py-16 sm:px-14 sm:py-20 shadow-2xl">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Welcome Back
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-500">
              Sign in to continue your AI learning journey.
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`w-full box-border rounded-xl border bg-slate-50 px-5 py-3.5 outline-none transition-all duration-300
                  ${
                    errors.email
                      ? "border-red-400 focus:ring-red-200"
                      : "border-slate-200 focus:border-[#7C83FD] focus:ring-4 focus:ring-[#C4B5FD]/30"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className={`w-full box-border rounded-xl border bg-slate-50 px-5 py-3.5 pr-12 outline-none transition-all duration-300
                    ${
                      errors.password
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-200 focus:border-[#7C83FD] focus:ring-4 focus:ring-[#C4B5FD]/30"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-sm text-slate-600 hover:text-slate-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 cursor-pointer rounded border-slate-300 text-[#7C83FD] focus:ring-[#7C83FD]"
                  />
                  Remember Me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#7C83FD] hover:text-[#6366F1] hover:underline transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#7C83FD] to-[#A5B4FC] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Signing In...
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>

              {/* Divider */}
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-xs font-medium tracking-wider text-slate-400">
                    OR
                  </span>
                </div>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-[#7C83FD] hover:bg-slate-50 focus:ring-4 focus:ring-slate-100"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              {/* Register Link */}
              <p className="pt-2 text-center text-sm text-slate-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-[#7C83FD] hover:text-[#6366F1] hover:underline transition-colors"
                >
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={2500} theme="light" />
    </div>
  );
}

export default Login;