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
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaHome />,
  },
  {
    title: "Upload",
    path: "/upload",
    icon: <FaUpload />,
  },
  {
    title: "Video Details",
    path: "/video-details",
    icon: <FaVideo />,
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <FaStickyNote />,
  },
  {
    title: "Quiz",
    path: "/quiz",
    icon: <FaQuestionCircle />,
  },
  {
    title: "Flashcards",
    path: "/flashcards",
    icon: <FaLayerGroup />,
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <FaComments />,
  },
  {
    title: "History",
    path: "/history",
    icon: <FaHistory />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaUser />,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-20 hidden h-[calc(100vh-80px)] w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col shadow-sm">

      {/* Navigation */}
<nav className="flex-1 overflow-y-auto px-5 py-6">
  <ul className="space-y-2">
    {menuItems.map((item) => (
      <li key={item.path}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-[#EEF2FF] text-[#6366F1] shadow-sm border border-[#C7D2FE]"
                : "text-slate-600 hover:bg-slate-100 hover:text-[#6366F1]"
            }`
          }
        >
          {/* icon */}
          {/* label */}
        </NavLink>
      </li>
    ))}
  </ul>
</nav>
      
              

                

      {/* Bottom Section */}

      <div className="border-t border-slate-200 p-5">

        <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-slate-600 transition-all duration-200 hover:bg-red-50 hover:text-red-500">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;