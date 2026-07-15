import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-28">

      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 px-8 py-16 shadow-2xl"
      >

        <div className="text-center">

          <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Ready to Learn Smarter?
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
            Transform Every
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Video Into Knowledge
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Stop wasting time taking notes manually.
            Upload your lectures, tutorials, or meetings and let
            <span className="font-semibold text-white"> VideoMind AI </span>
            create summaries, quizzes, flashcards, timestamps, and an
            intelligent chat assistant in minutes.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              to="/register"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"
            >
              Get Started Free
              <FaArrowRight />
            </Link>

            <Link
              to="/login"
              className="flex items-center gap-3 rounded-xl border border-slate-600 px-8 py-4 text-lg font-semibold text-white transition hover:border-blue-500 hover:bg-slate-800"
            >
              <FaPlayCircle className="text-blue-400" />
              Explore Dashboard
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div>
              <h3 className="text-4xl font-bold text-blue-400">
                AI
              </h3>
              <p className="mt-2 text-slate-400">
                Powered Learning
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-purple-400">
                Fast
              </h3>
              <p className="mt-2 text-slate-400">
                Smart Processing
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                24/7
              </h3>
              <p className="mt-2 text-slate-400">
                Accessible Anywhere
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default CTASection;