import { Link, NavLink } from "react-router-dom";
import { FaPlayCircle, FaBars } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white"
        >
          <FaPlayCircle className="text-blue-500 text-3xl" />
          <span>VideoMind AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-slate-300 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-slate-300 hover:text-white transition"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-slate-300 hover:text-white transition"
            }
          >
            History
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold"
                : "text-slate-300 hover:text-white transition"
            }
          >
            Profile
          </NavLink>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="hidden rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-500 hover:bg-slate-800 md:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
          >
            Get Started
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={toggleSidebar}
            className="rounded-lg p-2 text-white hover:bg-slate-800 md:hidden"
          >
            <FaBars size={22} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;