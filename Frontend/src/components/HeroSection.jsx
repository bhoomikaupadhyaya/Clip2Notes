import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlayCircle, FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF]">
      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#C4B5FD]/40 blur-[140px]" />
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-[#A5B4FC]/40 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center gap-20 px-6 py-24 lg:flex-row lg:px-8">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-flex rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-medium text-[#6366F1]">
            🚀 AI Powered Learning Assistant
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            Turn Hours of
            <span className="block bg-gradient-to-r from-[#7C83FD] to-[#C4B5FD] bg-clip-text text-transparent">
              Video Into
            </span>
            Minutes of Learning
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 lg:mx-0">
            Upload YouTube videos, lectures, or meeting recordings and let
            Clip2Notes generate smart notes, quizzes, flashcards,
            timestamps, and AI-powered conversations instantly.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5 lg:justify-start">
            <Link
              to="/register"
              className="flex items-center gap-2 rounded-2xl bg-[#7C83FD] px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-[#6366F1]"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg text-slate-700 shadow-sm transition hover:border-[#7C83FD] hover:bg-slate-50">
              <FaPlayCircle className="text-[#7C83FD]" />
              Watch Demo
            </button>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-10 lg:justify-start">
            <div>
              <h2 className="text-3xl font-bold text-[#7C83FD]">100+</h2>
              <p className="text-slate-500">Videos Processed</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-500">
                AI Powered
              </h2>
              <p className="text-slate-500">Notes & Quizzes</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-500">Fast</h2>
              <p className="text-slate-500">Smart Summaries</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-1 justify-center"
        >
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800">
                Clip2Notes AI
              </h3>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                Processing
              </span>
            </div>

            <div className="space-y-4">
              {[
                "🎥 Upload Video",
                "🎤 Speech to Text",
                "📝 AI Summary",
                "❓ Quiz Generator",
                "💬 Chat with Video",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#7C83FD] hover:bg-white"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;