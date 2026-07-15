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
    <aside className="fixed left-0 top-20 hidden h-[calc(100vh-80px)] w-64 border-r border-slate-800 bg-slate-950 lg:flex lg:flex-col">

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">

        <ul className="space-y-2">

          {menuItems.map((item) => (

            <li key={item.path}>

              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >

                <span className="text-lg">

                  {item.icon}

                </span>

                <span>

                  {item.title}

                </span>

              </NavLink>

            </li>

          ))}

        </ul>

      </nav>

      {/* Bottom Section */}

      <div className="border-t border-slate-800 p-4">

        <button className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-red-600 hover:text-white">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;