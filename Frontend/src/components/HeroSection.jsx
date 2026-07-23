import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPlayCircle,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function HeroSection() {
  const features = [
    "Upload Video",
    "Speech to Text",
    "AI Summary",
    "Quiz Generator",
    "Flashcards",
    "Chat with Video",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF2FF]">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#C4B5FD]/40 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#A5B4FC]/40 blur-[150px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-24 lg:flex-row lg:px-8">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <span className="inline-flex rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-600">
            🚀 AI Powered Learning Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Transform Videos
            <span className="block bg-gradient-to-r from-[#7C83FD] to-[#C4B5FD] bg-clip-text text-transparent">
              Into Smart Notes
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Upload YouTube videos, lectures and meeting recordings to
            instantly generate notes, flashcards, quizzes, timestamps
            and AI-powered conversations.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/register"
              className="flex items-center gap-3 rounded-2xl bg-[#7C83FD] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#6366F1]"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-sm transition hover:border-[#7C83FD] hover:shadow-md">
              <FaPlayCircle className="text-[#7C83FD]" />
              Watch Demo
            </button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#7C83FD]">100+</h2>
              <p className="mt-1 text-sm text-slate-500">
                Videos Processed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-500">AI</h2>
              <p className="mt-1 text-sm text-slate-500">
                Smart Notes
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-500">24/7</h2>
              <p className="mt-1 text-sm text-slate-500">
                Learning
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-1 justify-center"
        >
          <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Clip2Notes AI
                </h3>

                <p className="text-sm text-slate-500">
                  Processing Pipeline
                </p>
              </div>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                Live
              </span>
            </div>

            <div className="space-y-4">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-[#7C83FD] hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#7C83FD]" />
                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-green-500">
                    Done
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#7C83FD] to-[#A5B4FC] p-5 text-white">
              <h4 className="text-lg font-bold">
                AI is ready 🚀
              </h4>

              <p className="mt-2 text-sm opacity-90">
                Upload your first video and let Clip2Notes generate
                structured learning material in seconds.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;