import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUpload,
  FaVideo,
  FaStickyNote,
  FaQuestionCircle,
  FaLayerGroup,
  FaComments,
  FaHistory,
  FaUser,
  FaPlayCircle,
} from "react-icons/fa";

function Sidebar({ isOpen }) {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Upload", icon: <FaUpload />, path: "/upload" },
    { name: "Video Details", icon: <FaVideo />, path: "/video/1" },
    { name: "Notes", icon: <FaStickyNote />, path: "/notes/1" },
    { name: "Quiz", icon: <FaQuestionCircle />, path: "/quiz/1" },
    { name: "Flashcards", icon: <FaLayerGroup />, path: "/flashcards/1" },
    { name: "Chat", icon: <FaComments />, path: "/chat/1" },
    { name: "History", icon: <FaHistory />, path: "/history" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen w-64 bg-slate-800 border-r border-slate-700 transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-slate-700">
        <div className="flex items-center gap-2">
          <FaPlayCircle className="text-blue-500 text-3xl" />
          <h1 className="text-xl font-bold text-white">
            VideoMind AI
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `mb-2 flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;