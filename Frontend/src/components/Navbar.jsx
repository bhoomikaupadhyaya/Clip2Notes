import { Link } from "react-router-dom";
import { FaBell, FaSearch, FaUserCircle, FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/dashboard" className="flex items-center gap-4 shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C83FD] via-[#8B8FFF] to-[#C4B5FD] text-white shadow-lg">
            <FaVideo className="text-lg" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">
              Clip2Notes
            </h1>
            <p className="text-xs text-slate-500">
              Learn Smarter with AI
            </p>
          </div>
        </Link>

        {/* Search */}
        <div className="mx-10 hidden flex-1 lg:block">
          <div className="relative max-w-xl">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search videos, notes, quizzes..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-5 text-sm text-slate-700 transition-all duration-300 outline-none focus:border-[#7C83FD] focus:bg-white focus:ring-4 focus:ring-[#C4B5FD]/30"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <FaBell className="text-lg text-slate-600" />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-md">
            <FaUserCircle size={38} className="text-[#7C83FD]" />

            <div className="hidden md:block">
              <h3 className="text-sm font-semibold text-slate-800">
                Rashmitha
              </h3>

              <p className="text-xs text-slate-500">
                Student
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;