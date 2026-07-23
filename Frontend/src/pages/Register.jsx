import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { register } from "../services/auth";

function Register() {
  const navigate = useNavigate();

  // ==========================
  // STATES
  // ==========================

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [acceptTerms, setAcceptTerms] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  // ==========================
  // HANDLE INPUT
  // ==========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================
  // PASSWORD STRENGTH
  // ==========================

  const getPasswordStrength = () => {
    const password = formData.password;

    if (!password) return "";

    if (password.length < 6)
      return "Weak";

    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return "Strong";
    }

    return "Medium";
  };

  // ==========================
  // VALIDATION
  // ==========================

  const validateForm = () => {
    let validationErrors = {};

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      validationErrors.fullName =
        "Full Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email =
        "Email is required";
    } else if (
      !emailRegex.test(formData.email)
    ) {
      validationErrors.email =
        "Enter a valid email";
    }

    if (!formData.password) {
      validationErrors.password =
        "Password is required";
    } else if (
      formData.password.length < 6
    ) {
      validationErrors.password =
        "Password should be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword =
        "Confirm Password is required";
    } else if (
      formData.password !==
      formData.confirmPassword
    ) {
      validationErrors.confirmPassword =
        "Passwords do not match";
    }

    if (!acceptTerms) {
      validationErrors.terms =
        "Accept Terms & Conditions";
    }

    setErrors(validationErrors);

    return (
      Object.keys(validationErrors).length ===
      0
    );
  };

  // ==========================
  // REGISTER
  // ==========================

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(
        "Please fix the highlighted fields."
      );
      return;
    }

    try {
      setLoading(true);

      /*
      Backend Integration

      const response = await register(formData);

      navigate("/login");

      */

      await new Promise((resolve) =>
        setTimeout(resolve, 1800)
      );

      toast.success(
        "Account Created Successfully 🎉"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT PANEL */}

        

<motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative hidden overflow-hidden bg-gradient-to-br from-[#6366F1] via-[#7C83FD] to-[#C4B5FD] lg:flex"
>
  {/* Background Blur */}

  <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/20 blur-[140px]" />

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-[140px]" />

  <div className="relative z-10 flex flex-col justify-center px-16 py-20 text-white">

    <span className="mb-6 w-fit rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
      🚀 Join Clip2Notes
    </span>

    <h1 className="text-6xl font-extrabold leading-tight">
      Learn
      <span className="block text-yellow-100">
        Smarter.
      </span>
    </h1>

    <p className="mt-8 max-w-lg text-lg leading-8 text-indigo-100">
      Create your free account and transform YouTube videos,
      lectures and meeting recordings into AI-generated notes,
      quizzes, flashcards and intelligent conversations.
    </p>

    <div className="mt-14 space-y-5">

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur"
      >
        <h3 className="text-lg font-semibold">
          🎥 Upload Videos
        </h3>

        <p className="mt-2 text-indigo-100">
          Upload YouTube videos, lectures and meetings.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur"
      >
        <h3 className="text-lg font-semibold">
          📝 AI Smart Notes
        </h3>

        <p className="mt-2 text-indigo-100">
          Get structured notes, summaries and timestamps instantly.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur"
      >
        <h3 className="text-lg font-semibold">
          💬 Chat with Video
        </h3>

        <p className="mt-2 text-indigo-100">
          Ask questions and receive contextual AI answers.
        </p>
      </motion.div>

    </div>

  </div>

</motion.div>
        {/* ==========================
             RIGHT PANEL
        ========================== */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex items-center justify-center bg-[#F8FAFC] px-8 py-10"
>
  <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

    <div className="mb-8 text-center">

      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-3xl">
        🚀
      </div>

      <h2 className="text-4xl font-bold text-slate-800">
        Create Account
      </h2>

      <p className="mt-3 text-slate-500">
        Join Clip2Notes and unlock AI-powered learning.
      </p>

    </div>
                          {/* ==========================
                    Full Name
              ========================== */}

              
<div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Full Name
  </label>

  <input
    type="text"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    placeholder="Enter your full name"
    className={`w-full rounded-2xl border bg-slate-50 px-5 py-4 text-slate-700 placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 ${
      errors.fullName
        ? "border-red-400 focus:ring-red-100"
        : "border-slate-200 focus:ring-indigo-100"
    }`}
  />

  {errors.fullName && (
    <p className="mt-2 text-sm text-red-500">
      {errors.fullName}
    </p>
  )}

</div>

              {/* ==========================
                      Email
              ========================== */}

<div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Email Address
  </label>

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="you@example.com"
    className={`w-full rounded-2xl border bg-slate-50 px-5 py-4 text-slate-700 placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 ${
      errors.email
        ? "border-red-400 focus:ring-red-100"
        : "border-slate-200 focus:ring-indigo-100"
    }`}
  />

  {errors.email && (
    <p className="mt-2 text-sm text-red-500">
      {errors.email}
    </p>
  )}

</div>

              {/* ==========================
                    Password
              ========================== */}

            

<div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Password
  </label>

  <div className="relative">

    <input
      type={showPassword ? "text" : "password"}
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Create a password"
      className={`w-full rounded-2xl border bg-slate-50 px-5 py-4 pr-14 text-slate-700 placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 ${
        errors.password
          ? "border-red-400 focus:ring-red-100"
          : "border-slate-200 focus:ring-indigo-100"
      }`}
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-indigo-600"
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
              {/* Password Strength */}

            

{formData.password && (

  <div className="rounded-2xl bg-slate-50 p-4">

    <div className="mb-3 flex items-center justify-between">

      <span className="text-sm font-medium text-slate-600">
        Password Strength
      </span>

      <span
        className={`text-sm font-semibold ${
          getPasswordStrength() === "Strong"
            ? "text-green-600"
            : getPasswordStrength() === "Medium"
            ? "text-yellow-600"
            : "text-red-500"
        }`}
      >
        {getPasswordStrength()}
      </span>

    </div>

    <div className="h-2 overflow-hidden rounded-full bg-slate-200">

      <div
        className={`h-full rounded-full transition-all duration-500 ${
          getPasswordStrength() === "Strong"
            ? "w-full bg-green-500"
            : getPasswordStrength() === "Medium"
            ? "w-2/3 bg-yellow-500"
            : "w-1/3 bg-red-500"
        }`}
      />

    </div>

  </div>

)}

              

              {/* ==========================
                  Confirm Password
              ========================== */}

<div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">
    Confirm Password
  </label>

  <div className="relative">

    <input
      type={showConfirmPassword ? "text" : "password"}
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm your password"
      className={`w-full rounded-2xl border bg-slate-50 px-5 py-4 pr-14 text-slate-700 placeholder:text-slate-400 transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 ${
        errors.confirmPassword
          ? "border-red-400 focus:ring-red-100"
          : "border-slate-200 focus:ring-indigo-100"
      }`}
    />

    <button
      type="button"
      onClick={() =>
        setShowConfirmPassword(!showConfirmPassword)
      }
      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-indigo-600"
    >
      {showConfirmPassword ? (
        <FaEyeSlash />
      ) : (
        <FaEye />
      )}
    </button>

  </div>

  {errors.confirmPassword && (
    <p className="mt-2 text-sm text-red-500">
      {errors.confirmPassword}
    </p>
  )}

</div>

              {/* ==========================
                  Terms
              ========================== */}

              

<div>

  <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">

    <input
      type="checkbox"
      checked={acceptTerms}
      onChange={(e) => setAcceptTerms(e.target.checked)}
      className="mt-1 h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
    />

    <span className="text-sm leading-6 text-slate-600">
      I agree to the{" "}
      <span className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-700">
        Terms & Conditions
      </span>{" "}
      and{" "}
      <span className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-700">
        Privacy Policy
      </span>.
    </span>

  </label>

  {errors.terms && (
    <p className="mt-2 text-sm text-red-500">
      {errors.terms}
    </p>
  )}

</div>

              {/* ==========================
                  Register Button
              ========================== */}

              {/* Create Account Button */}

<motion.button
  whileHover={{
    scale: 1.02,
    y: -2,
  }}
  whileTap={{
    scale: 0.98,
  }}
  disabled={loading}
  type="submit"
  className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-400 disabled:cursor-not-allowed disabled:opacity-70"
>
  {loading ? (
    <>
      <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
      Creating Account...
    </>
  ) : (
    <>
      Create Account
      <span className="ml-2 text-xl">→</span>
    </>
  )}
</motion.button>
              {/* Divider */}


<div className="relative py-2">

  <div className="absolute inset-0 flex items-center">

    <div className="w-full border-t border-slate-200"></div>

  </div>

  <div className="relative flex justify-center">

    <span className="bg-white px-5 text-sm font-medium text-slate-400">
      OR
    </span>

  </div>

</div>

{/* Login Link */}

<p className="text-center text-slate-500">

  Already have an account?

  <Link
    to="/login"
    className="ml-2 font-semibold text-indigo-600 transition hover:text-indigo-700"
  >
    Sign In
  </Link>

</p>

      {/* Toast Notifications */}
<ToastContainer
  position="top-right"
  autoClose={2500}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
  toastStyle={{
    borderRadius: "16px",
    fontSize: "14px",
  }}
/>

  </div>        

</motion.div>   

    </div>      

  </div>        

);
}

export default Register;