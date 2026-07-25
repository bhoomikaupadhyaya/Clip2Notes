import { motion } from "framer-motion";
import {
  FaSearch,
  FaVideo,
  FaFileAlt,
  FaQuestionCircle,
  FaLayerGroup,
} from "react-icons/fa";

import MainLayout from "../components/MainLayout";

function Dashboard() {
  const stats = [
    {
      title: "Videos",
      value: 24,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      icon: <FaVideo />,
    },
    {
      title: "Notes",
      value: 56,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      icon: <FaFileAlt />,
    },
    {
      title: "Quizzes",
      value: 18,
      color: "text-amber-500",
      bg: "bg-amber-100",
      icon: <FaQuestionCircle />,
    },
    {
      title: "Flashcards",
      value: 132,
      color: "text-pink-500",
      bg: "bg-pink-100",
      icon: <FaLayerGroup />,
    },
  ];

  const recentUploads = [
    {
      title: "React Crash Course.mp4",
      date: "Today",
      status: "Completed",
    },
    {
      title: "AI Lecture.mp4",
      date: "Yesterday",
      status: "Processing",
    },
    {
      title: "DBMS Class.mp4",
      date: "2 days ago",
      status: "Completed",
    },
  ];

  const quickActions = [
    "Upload Video",
    "Generate Notes",
    "Create Flashcards",
    "Start Quiz",
  ];

  const activities = [
    "Uploaded React Crash Course",
    "Generated AI Notes",
    "Completed Java Quiz",
    "Created Flashcards",
  ];

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-slate-800">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Here's an overview of your learning progress.
          </p>
        </motion.div>

        {/* Search */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search your videos..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-5 shadow-sm outline-none focus:border-indigo-500"
          />
        </motion.div>

        {/* Statistics */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-800">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </div>

              </div>
            </div>
          ))}
        </motion.div>
                {/* Bottom Section */}

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Recent Uploads */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-semibold text-slate-800">
                Recent Uploads
              </h2>

              <button className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600">
                View All
              </button>

            </div>

            <div className="space-y-4">

              {recentUploads.map((video) => (

                <div
                  key={video.title}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-4 hover:bg-slate-50"
                >

                  <div>

                    <h3 className="font-semibold text-slate-800">
                      {video.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {video.date}
                    </p>

                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      video.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {video.status}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Quick Actions */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >

            <h2 className="mb-6 text-2xl font-semibold text-slate-800">
              Quick Actions
            </h2>

            <div className="space-y-3">

              {quickActions.map((action) => (

                <button
                  key={action}
                  className="w-full rounded-xl bg-indigo-500 px-4 py-3 font-medium text-white transition hover:bg-indigo-600"
                >
                  {action}
                </button>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Recent Activity */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >

          <h2 className="mb-6 text-2xl font-semibold text-slate-800">
            Recent Activity
          </h2>

          <div className="space-y-4">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-none last:pb-0"
              >

                <div className="h-3 w-3 rounded-full bg-indigo-500"></div>

                <p className="text-slate-600">
                  {activity}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;