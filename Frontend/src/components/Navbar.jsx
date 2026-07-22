import { Link } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg shadow-sm"
    >
     <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link
          to="/dashboard"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-bold">

            

          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#7C83FD] to-[#C4B5FD] text-xl font-bold text-white shadow-md">
  
</div>

<div>
  <h1 className="text-xl font-bold text-slate-800">
    Clip2Notes
  </h1>

  <p className="text-xs text-slate-500">
    Learn Smarter with AI
  </p>
</div>

        </Link>

        {/* Search */}

        <div className="hidden w-full max-w-lg px-8 lg:block">

          <div className="relative">

            <FaSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search videos..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-slate-700 outline-none transition focus:border-[#7C83FD] focus:ring-2 focus:ring-[#C4B5FD]"
            />

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          {/* Notification */}

          <button className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-50">

            <FaBell
              className="text-xl text-slate-600"
            />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">

              

            </span>

          </button>

          {/* User */}

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">

            <FaUserCircle
              size={38}
              className="text-[#7C83FD]"
            />

            <div className="hidden md:block">

              <h3 className="font-semibold">

                Rashmitha

              </h3>

              <p className="text-xs text-slate-400">

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