import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCloudUploadAlt,
  FaVideo,
  FaStickyNote,
  FaQuestionCircle,
  FaLayerGroup,
  FaComments,
  FaHistory,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
  { name: "Upload", path: "/upload", icon: <FaCloudUploadAlt /> },
  { name: "Video Details", path: "/video-details", icon: <FaVideo /> },
  { name: "Notes", path: "/notes", icon: <FaStickyNote /> },
  { name: "Quiz", path: "/quiz", icon: <FaQuestionCircle /> },
  { name: "Flashcards", path: "/flashcards", icon: <FaLayerGroup /> },
  { name: "Chat", path: "/chat", icon: <FaComments /> },
  { name: "History", path: "/history", icon: <FaHistory /> },
  { name: "Profile", path: "/profile", icon: <FaUser /> },
];

function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed left-0 top-20 hidden h-[calc(100vh-80px)] w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col"
    >
      <div className="flex-1 overflow-y-auto px-5 py-6">
        <div className="mb-6">
          <p className="px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Navigation
          </p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#7C83FD] to-[#A5B4FC] text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100 hover:text-[#7C83FD]"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>

              <span className="text-sm font-semibold">
                {item.name}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-200 p-5">
        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-50 py-3 font-semibold text-red-500 transition-all duration-300 hover:bg-red-100">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </motion.aside>
  );
}

export default Sidebar;