import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRocket } from "react-icons/fa";

function CTASection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#7C83FD] via-[#8B8FFB] to-[#C4B5FD] px-10 py-20 text-center shadow-xl"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                <FaRocket className="text-3xl text-white" />
              </div>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
              Ready to Transform
              <br />
              Your Learning Experience?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-indigo-100">
              Upload your first lecture, YouTube video, or meeting recording
              and let AI generate smart notes, quizzes, flashcards, and
              interactive conversations within seconds.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                to="/register"
                className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-[#6366F1] shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started
                <FaArrowRight />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >
                Login
              </Link>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="text-3xl font-bold text-white">⚡</h3>
                <p className="mt-2 text-indigo-100">
                  Instant AI Processing
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="text-3xl font-bold text-white">📚</h3>
                <p className="mt-2 text-indigo-100">
                  Smart Notes & Flashcards
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="text-3xl font-bold text-white">🤖</h3>
                <p className="mt-2 text-indigo-100">
                  AI Chat Assistant
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;