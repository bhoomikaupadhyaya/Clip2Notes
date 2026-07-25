import { Link } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaVideo,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-6 lg:px-8">
        {/* ================= Logo ================= */}

        <Link
          to="/dashboard"
          className="flex shrink-0 items-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C83FD] via-[#8B8FFF] to-[#C4B5FD] text-white shadow-lg shadow-indigo-200"
          >
            <FaVideo className="text-lg" />
          </motion.div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Clip2Notes
            </h1>

            <p className="text-xs text-slate-500">
              Learn Smarter with AI
            </p>
          </div>
        </Link>

        

        {/* ================= Search ================= */}

{/* ================= Search ================= */}

<div className="hidden flex-1 justify-center px-8 lg:flex">
  <div className="flex h-12 w-full max-w-2xl items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-[#7C83FD] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#C4B5FD]/30">

    <FaSearch
      size={16}
      className="mr-3 shrink-0 text-slate-400"
    />

    <input
      type="text"
      placeholder="Search videos, notes, quizzes..."
      className="h-full flex-1 border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
    />

    <div className="hidden xl:flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500">
      <span>Ctrl</span>
      <span className="rounded bg-slate-100 px-1">K</span>
    </div>

  </div>
</div>

        {/* ================= Right ================= */}

        <div className="flex shrink-0 items-center gap-4">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <FaBell className="text-lg text-slate-600" />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
          </motion.button>

          <motion.div
            whileHover={{ y: -2 }}
            className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <FaUserCircle
              size={40}
              className="text-[#7C83FD]"
            />

            <div className="hidden md:block">
              <h3 className="text-sm font-semibold text-slate-800">
                Rashmitha
              </h3>

              <p className="text-xs text-slate-500">
                Student
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;