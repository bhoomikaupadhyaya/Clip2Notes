import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24">
      {/* Background Blobs */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#C4B5FD]/40 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#A5B4FC]/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#7C83FD] via-[#8B8FFF] to-[#C4B5FD] px-10 py-20 text-center text-white shadow-2xl"
        >
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold">
            🚀 Start Learning Smarter
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-tight lg:text-6xl">
            Turn Every Video Into
            <br />
            AI-Powered Notes
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">
            Upload lectures, YouTube videos or meeting recordings and
            instantly generate summaries, notes, quizzes, flashcards,
            timestamps and interactive AI conversations.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/register"
              className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-[#6366F1] shadow-lg transition duration-300 hover:scale-105"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <button className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
              <FaPlayCircle />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
              <h3 className="text-4xl font-bold">10K+</h3>
              <p className="mt-2 text-white/90">
                Videos Processed
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="mt-2 text-white/90">
                AI Notes Generated
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
              <h3 className="text-4xl font-bold">99%</h3>
              <p className="mt-2 text-white/90">
                AI Accuracy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;