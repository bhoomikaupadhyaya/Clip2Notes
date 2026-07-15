import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

// import { register } from "../services/auth";

function Register() {

  const navigate = useNavigate();

  // -----------------------------
  // Form States
  // -----------------------------

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

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
        >

          {/* Background Glow */}

          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[140px]" />

          <div className="relative z-10 flex flex-col justify-center px-16">

            <span className="mb-6 w-fit rounded-full bg-purple-500/10 px-5 py-2 text-sm text-purple-400">

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
              timestamps and interactive learning.

            </p>

            {/* Feature Cards */}

            <div className="mt-14 space-y-5">

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5 backdrop-blur"
              >

                <h3 className="font-semibold">
                  🎯 Personalized Dashboard
                </h3>

                <p className="mt-2 text-sm text-slate-400">

                  Track all your uploaded videos
                  and generated notes.

                </p>

              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5 backdrop-blur"
              >

                <h3 className="font-semibold">
                  🚀 AI Powered Study
                </h3>

                <p className="mt-2 text-sm text-slate-400">

                  Generate quizzes,
                  flashcards and summaries
                  automatically.

                </p>

              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT PANEL */}

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

              Join VideoMind AI and start learning smarter.

            </p>

            {/* Register Form Comes Here */}