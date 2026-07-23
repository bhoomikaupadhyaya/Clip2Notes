
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

