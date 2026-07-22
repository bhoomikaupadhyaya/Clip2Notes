

import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

// import { login } from "../services/auth";

function Login() {
  const navigate = useNavigate();

  // -----------------------------
  // States
  // -----------------------------

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  // -----------------------------
  // Validation
  // -----------------------------

  const validateForm = () => {
    let validationErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password =
        "Password should be at least 6 characters";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  // -----------------------------
  // Login Handler
  // -----------------------------

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the highlighted errors.");
      return;
    }

    try {
      setLoading(true);

      /*
      =============================

      BACKEND CONNECTION

      const response = await login({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.data.token
      );

      navigate("/dashboard");

      =============================
      */

      await new Promise((resolve) =>
        setTimeout(resolve, 1800)
      );

      toast.success("Login Successful 🎉");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Invalid Credentials"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ======================================
                 LEFT PANEL
        ======================================= */}

      <motion.div
  initial={{
    opacity: 0,
    x: -80,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  className="relative hidden overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 lg:flex"
>
                  {/* Background Glow */}
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />

          {/* Content */}

          <div className="relative z-10 flex flex-col justify-center px-16">

            <span className="mb-6 w-fit rounded-full bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
              AI Powered Learning Platform
            </span>

            <h1 className="text-6xl font-extrabold leading-tight">

              Learn

              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">

                Smarter

              </span>

              Not Harder.

            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">

              Upload lectures, YouTube videos, tutorials, or meeting
              recordings and instantly generate AI summaries,
              timestamps, quizzes, flashcards, and intelligent chat.

            </p>

            {/* Feature Cards */}

            <div className="mt-14 space-y-5">

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-800/80 p-5 backdrop-blur"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-3xl">
                  🎥
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    Video Upload
                  </h3>

                  <p className="text-sm text-slate-400">
                    Upload lectures and tutorials.
                  </p>

                </div>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-800/80 p-5 backdrop-blur"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-3xl">
                  🤖
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    AI Notes
                  </h3>

                  <p className="text-sm text-slate-400">
                    Smart summaries with key takeaways.
                  </p>

                </div>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-slate-800/80 p-5 backdrop-blur"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-3xl">
                  💬
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    Chat with Video
                  </h3>

                  <p className="text-sm text-slate-400">
                    Ask questions and get AI-powered answers.
                  </p>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* ======================================
                 RIGHT PANEL
        ======================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex items-center justify-center px-8 py-10">
        

          <div className="w-full max-w-md">

            <h2 className="text-4xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="mt-4 text-slate-400">
              Sign in to continue your AI learning journey.
            </p>
                        {/* Login Form */}

            <form
              onSubmit={handleLogin}
              className="mt-10 space-y-6"
            >
              {/* Email */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full rounded-xl border bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 transition focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500/20"
                      : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}

              </div>

              {/* Password */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    className={`w-full rounded-xl border bg-slate-900 px-5 py-4 pr-14 text-white placeholder:text-slate-500 transition focus:ring-2 ${
                      errors.password
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.password}
                  </p>
                )}

              </div>

              {/* Remember Me */}

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-3 text-sm text-slate-300">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                    className="h-4 w-4 rounded border-slate-600 bg-slate-800"
                  />

                  Remember Me

                </label>

                <Link
                  to="#"
                  className="text-sm text-blue-400 transition hover:text-blue-300"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Login Button */}

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                disabled={loading}
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <div className="flex items-center gap-3">

                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>

                    Signing In...

                  </div>
                ) : (
                  "Login"
                )}
              </motion.button>

              {/* Divider */}

              <div className="relative">

                <div className="absolute inset-0 flex items-center">

                  <div className="w-full border-t border-slate-700"></div>

                </div>

                <div className="relative flex justify-center">

                  <span className="bg-slate-950 px-4 text-sm text-slate-500">
                    OR
                  </span>

                </div>

              </div>

              {/* Register */}

              <p className="text-center text-slate-400">

                Don't have an account?

                <Link
                  to="/register"
                  className="ml-2 font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Create Account
                </Link>

              </p>

            </form>
                      </div>

        </motion.div>

      </div>

      {/* Toast Notifications */}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

    </div>
  );
}

export default Login;
