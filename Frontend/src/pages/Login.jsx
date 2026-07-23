
// Login.jsx - Redesigned (Part 1)

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

      toast.success("Login Successful 🎉");

      setTimeout(() => navigate("/dashboard"), 1200);
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        <motion.div
          initial={{opacity:0,x:-60}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="hidden rounded-[32px] bg-gradient-to-br from-[#6366F1] via-[#7C83FD] to-[#C4B5FD] p-12 text-white shadow-2xl lg:flex lg:flex-col lg:justify-center">

          <span className="mb-6 w-fit rounded-full bg-white/20 px-5 py-2 text-sm font-medium">
            AI Powered Learning
          </span>

          <h1 className="text-5xl font-bold leading-tight">
            Learn Smarter,
            <span className="block text-yellow-100">Not Harder.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-indigo-100">
            Upload lectures, YouTube videos and meetings to generate
            AI notes, quizzes, flashcards and chat instantly.
          </p>

          {/* Remaining UI continues in Part 2 */}


          <div className="mt-12 space-y-5">

            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <h3 className="font-semibold text-lg">🎥 Upload Videos</h3>
              <p className="mt-2 text-indigo-100">
                Upload lectures, tutorials and meeting recordings.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <h3 className="font-semibold text-lg">📝 AI Notes</h3>
              <p className="mt-2 text-indigo-100">
                Generate structured notes and summaries instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <h3 className="font-semibold text-lg">💬 Chat with Video</h3>
              <p className="mt-2 text-indigo-100">
                Ask questions about your uploaded content.
              </p>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:60}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.8}}
          className="flex justify-center">

          <div className="w-full max-w-lg rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">

            <h2 className="text-4xl font-bold text-slate-900">
              Welcome Back 👋
            </h2>

            <p className="mt-3 text-slate-500">
              Sign in to continue your AI learning journey.
            </p>

            {/* Continue by using the same validation, input fields,
               remember me, forgot password, login button,
               register link and ToastContainer from your existing Login.jsx,
               changing only the Tailwind classes to the new pastel theme. */}
               <form onSubmit={handleLogin} className="mt-10 space-y-6">

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
      className={`w-full rounded-2xl border bg-slate-50 px-5 py-4 outline-none transition-all duration-300
      ${
        errors.email
          ? "border-red-400 focus:ring-red-200"
          : "border-slate-200 focus:border-[#7C83FD] focus:ring-4 focus:ring-[#C4B5FD]/30"
      }`}
    />

    {errors.email && (
      <p className="mt-2 text-sm text-red-500">
        {errors.email}
      </p>
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
        className={`w-full rounded-2xl border bg-slate-50 px-5 py-4 pr-14 outline-none transition-all duration-300
        ${
          errors.password
            ? "border-red-400 focus:ring-red-200"
            : "border-slate-200 focus:border-[#7C83FD] focus:ring-4 focus:ring-[#C4B5FD]/30"
        }`}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>

    </div>

    {errors.password && (
      <p className="mt-2 text-sm text-red-500">
        {errors.password}
      </p>
    )}
  </div>

  {/* Remember */}

  <div className="flex items-center justify-between">

    <label className="flex items-center gap-3 text-sm text-slate-600">

      <input
        type="checkbox"
        checked={rememberMe}
        onChange={() => setRememberMe(!rememberMe)}
        className="h-4 w-4 rounded border-slate-300 text-[#7C83FD]"
      />

      Remember Me

    </label>

    <Link
      to="/forgot-password"
      className="text-sm font-medium text-[#7C83FD] hover:underline"
    >
      Forgot Password?
    </Link>

  </div>

  {/* Login */}

  <button
    type="submit"
    disabled={loading}
    className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#7C83FD] to-[#A5B4FC] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
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

  <div className="relative">

    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-slate-200"></div>
    </div>

    <div className="relative flex justify-center">
      <span className="bg-white px-4 text-sm text-slate-500">
        OR
      </span>
    </div>

  </div>

  <button
    type="button"
    className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-[#7C83FD] hover:bg-slate-50"
  >
    Continue with Google
  </button>

  <p className="text-center text-slate-600">

    Don't have an account?{" "}

    <Link
      to="/register"
      className="font-semibold text-[#7C83FD] hover:underline"
    >
      Create Account
    </Link>

  </p>

</form>

          </div>
        </motion.div>

      </div>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="light"
      />
    </div>
  );
}

export default Login;

