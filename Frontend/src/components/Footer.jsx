import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-16 border-t border-slate-200 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Clip2Notes
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Transform YouTube videos, lectures and meetings into
              AI-powered notes, summaries, quizzes, flashcards and
              interactive chats in seconds.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="/" className="hover:text-[#7C83FD] transition">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/dashboard"
                  className="hover:text-[#7C83FD] transition"
                >
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="/upload"
                  className="hover:text-[#7C83FD] transition"
                >
                  Upload
                </a>
              </li>

              <li>
                <a
                  href="/profile"
                  className="hover:text-[#7C83FD] transition"
                >
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-4">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-[#7C83FD] hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-[#7C83FD] hover:text-white"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-[#7C83FD] hover:text-white"
              >
                <FaEnvelope />
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              AI-powered learning platform for students and professionals.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Clip2Notes. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-slate-500">
            Built with
            <FaHeart className="text-pink-500" />
            using React, Vite & AI
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;