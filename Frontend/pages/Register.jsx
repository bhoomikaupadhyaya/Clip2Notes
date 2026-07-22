import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

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
          className="relative hidden overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-purple-950 lg:flex"
        ></motion.div>
                  {/* Background Glow */}
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]" />

          {/* Left Content */}

          <div className="relative z-10 flex flex-col justify-center px-16">

            <span className="mb-6 w-fit rounded-full bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-400">
              Join VideoMind AI
            </span>

            <h1 className="text-6xl font-extrabold leading-tight">

              Start Your

              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Learning
              </span>

              Journey.

            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">

              Create your account and unlock AI-powered
              summaries, quizzes, flashcards,
              timestamps, semantic search and
              Chat with Video.

            </p>

            {/* Feature Cards */}

            <div className="mt-14 space-y-5">

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5 backdrop-blur"
              >

                <h3 className="font-semibold text-white">
                  🎯 Personalized Dashboard
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Manage all uploaded videos
                  from one dashboard.
                </p>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5 backdrop-blur"
              >

                <h3 className="font-semibold text-white">
                  🤖 AI Generated Notes
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Instantly generate summaries,
                  quizzes and flashcards.
                </p>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5 backdrop-blur"
              >

                <h3 className="font-semibold text-white">
                  💬 Chat with Video
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Ask questions and receive
                  intelligent answers from your
                  uploaded videos.
                </p>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* ==========================
             RIGHT PANEL
        ========================== */}

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
          className="flex items-center justify-center px-8 py-10"
        >

          <div className="w-full max-w-md">

            <h2 className="text-4xl font-bold">
              Create Account 🚀
            </h2>

            <p className="mt-4 text-slate-400">
              Join VideoMind AI and start
              learning smarter today.
            </p>

            <form
              onSubmit={handleRegister}
              className="mt-10 space-y-6"
            ></form>
                          {/* ==========================
                    Full Name
              ========================== */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full rounded-xl border bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 transition focus:ring-2 ${
                    errors.fullName
                      ? "border-red-500 focus:ring-red-500/20"
                      : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                  }`}
                />

                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.fullName}
                  </p>
                )}

              </div>

              {/* ==========================
                      Email
              ========================== */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
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

              {/* ==========================
                    Password
              ========================== */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create Password"
                    className={`w-full rounded-xl border bg-slate-900 px-5 py-4 pr-14 text-white placeholder:text-slate-500 transition focus:ring-2 ${
                      errors.password
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.password}
                  </p>
                )}

              </div>

              {/* Password Strength */}

              {formData.password && (

                <div>

                  <div className="mb-2 flex justify-between text-sm">

                    <span>Password Strength</span>

                    <span
                      className={`font-semibold ${
                        getPasswordStrength() === "Strong"
                          ? "text-green-400"
                          : getPasswordStrength() ===
                            "Medium"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {getPasswordStrength()}
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-slate-700">

                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        getPasswordStrength() ===
                        "Strong"
                          ? "w-full bg-green-500"
                          : getPasswordStrength() ===
                            "Medium"
                          ? "w-2/3 bg-yellow-500"
                          : "w-1/3 bg-red-500"
                      }`}
                    ></div>

                  </div>

                </div>

              )}

              {/* ==========================
                  Confirm Password
              ========================== */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className={`w-full rounded-xl border bg-slate-900 px-5 py-4 pr-14 text-white placeholder:text-slate-500 transition focus:ring-2 ${
                      errors.confirmPassword
                        ? "border-red-500 focus:ring-red-500/20"
                        : "border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>

                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.confirmPassword}
                  </p>
                )}

              </div>

              {/* ==========================
                  Terms
              ========================== */}

              <label className="flex items-start gap-3 text-sm text-slate-300">

                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) =>
                    setAcceptTerms(
                      e.target.checked
                    )
                  }
                  className="mt-1 h-4 w-4"
                />

                <span>
                  I agree to the
                  <span className="cursor-pointer text-blue-400 hover:text-blue-300">
                    {" "}
                    Terms & Conditions
                  </span>{" "}
                  and
                  <span className="cursor-pointer text-blue-400 hover:text-blue-300">
                    {" "}
                    Privacy Policy
                  </span>
                </span>

              </label>

              {errors.terms && (
                <p className="text-sm text-red-400">
                  {errors.terms}
                </p>
              )}

              {/* ==========================
                  Register Button
              ========================== */}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
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

              <p className="text-center text-slate-400">

                Already have an account?

                <Link
                  to="/login"
                  className="ml-2 font-semibold text-blue-400 hover:text-blue-300"
                >
                  Login
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

export default Register;