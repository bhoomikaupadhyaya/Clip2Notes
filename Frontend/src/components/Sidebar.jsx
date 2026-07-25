import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCloudUploadAlt,
  FaFileAlt,
  FaQuestionCircle,
  FaLayerGroup,
  FaComments,
  FaHistory,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Upload",
      path: "/upload",
      icon: <FaCloudUploadAlt />,
    },
    {
      name: "Notes",
      path: "/notes",
      icon: <FaFileAlt />,
    },
    {
      name: "Quiz",
      path: "/quiz",
      icon: <FaQuestionCircle />,
    },
    {
      name: "Flashcards",
      path: "/flashcards",
      icon: <FaLayerGroup />,
    },
    {
      name: "Chat",
      path: "/chat",
      icon: <FaComments />,
    },
    {
      name: "History",
      path: "/history",
      icon: <FaHistory />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <aside className="fixed top-20 left-0 h-[calc(100vh-80px)] w-64 bg-white border-r border-slate-200 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-800">
          Clip2Notes
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          AI Learning Assistant
        </p>
      </div>

      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                isActive
                  ? "bg-indigo-500 text-white"
                  : "text-slate-600 hover:bg-slate-100"
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