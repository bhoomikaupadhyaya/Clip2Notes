import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >

          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-300">
            🚀 AI Powered Learning Assistant
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Turn Hours of
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Video Into
            </span>
            Minutes of Learning
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Upload YouTube videos, lectures, or meeting recordings and let
            VideoMind AI generate smart notes, quizzes, flashcards,
            timestamps, and an AI chat experience instantly.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/register"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <button
              className="flex items-center gap-3 rounded-xl border border-slate-700 px-8 py-4 text-lg transition hover:border-blue-500 hover:bg-slate-800"
            >
              <FaPlayCircle className="text-blue-400" />
              Watch Demo
            </button>

          </div>

          <div className="mt-12 flex flex-wrap gap-10">

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                100+
              </h2>
              <p className="text-slate-400">
                Videos Processed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400">
                AI Powered
              </h2>
              <p className="text-slate-400">
                Notes & Quizzes
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-400">
                Fast
              </h2>
              <p className="text-slate-400">
                Smart Summaries
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-1 justify-center"
        >

          <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-2xl">

            <div className="rounded-2xl bg-slate-900 p-5">

              <div className="mb-6 flex items-center justify-between">

                <h3 className="text-xl font-bold">
                  VideoMind AI
                </h3>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                  Processing
                </span>

              </div>

              <div className="space-y-4">

                <div className="rounded-xl bg-slate-800 p-4">
                  🎥 Upload Video
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  🎤 Speech to Text
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  📝 AI Summary
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  ❓ Quiz Generator
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  💬 Chat with Video
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default HeroSection;