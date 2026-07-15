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
      className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md"
    >
      <div className="flex h-20 items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <Link
          to="/dashboard"
          className="flex items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-bold">

            V

          </div>

          <div>

            <h1 className="text-xl font-bold text-white">

              VideoMind AI

            </h1>

            <p className="text-xs text-slate-400">

              Learn Smarter

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
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          {/* Notification */}

          <button className="relative rounded-xl bg-slate-900 p-3 transition hover:bg-slate-800">

            <FaBell
              className="text-xl text-slate-300"
            />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">

              3

            </span>

          </button>

          {/* User */}

          <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2">

            <FaUserCircle
              size={38}
              className="text-blue-400"
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