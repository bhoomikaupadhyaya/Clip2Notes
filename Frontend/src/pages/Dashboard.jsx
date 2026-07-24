import { motion } from "framer-motion";
import {
  FaVideo,
  FaStickyNote,
  FaLayerGroup,
  FaQuestionCircle,
  FaUpload,
  FaComments,
  FaHistory,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";

import MainLayout from "../components/MainLayout";

function Dashboard() {

  const stats = [
    {
      title: "Videos",
      value: 24,
      color: "bg-indigo-100 text-indigo-600",
      icon: <FaVideo size={26} />,
    },
    {
      title: "Notes",
      value: 128,
      color: "bg-green-100 text-green-600",
      icon: <FaStickyNote size={26} />,
    },
    {
      title: "Flashcards",
      value: 432,
      color: "bg-violet-100 text-violet-600",
      icon: <FaLayerGroup size={26} />,
    },
    {
      title: "Quizzes",
      value: 37,
      color: "bg-orange-100 text-orange-600",
      icon: <FaQuestionCircle size={26} />,
    },
  ];

  const recentVideos = [
    {
      title: "React Complete Course",
      duration: "2h 30m",
      status: "Completed",
    },
    {
      title: "Operating Systems",
      duration: "1h 48m",
      status: "Completed",
    },
    {
      title: "AI Meeting Recording",
      duration: "55 mins",
      status: "Processing",
    },
  ];

  const quickActions = [
    {
      title: "Upload Video",
      icon: <FaUpload />,
    },
    {
      title: "Chat with Video",
      icon: <FaComments />,
    },
    {
      title: "View History",
      icon: <FaHistory />,
    },
  ];

  return (

    <MainLayout>

      <div className="space-y-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
        >

          <div>

            <h1 className="text-4xl font-bold text-slate-800">

              Welcome Back 👋

            </h1>

            <p className="mt-3 text-slate-500">

              Here's an overview of your AI learning workspace.

            </p>

          </div>

          <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-5 text-white shadow-lg">

            <p className="text-sm opacity-90">

              Today's Progress

            </p>

            <h2 className="mt-1 text-3xl font-bold">

              75%

            </h2>

          </div>

        </motion.div>

        {/* Search */}

        <div className="relative">

          <FaSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search videos, notes, quizzes..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-14 pr-6 text-slate-700 shadow-sm transition-all duration-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100"
          />

        </div>

        {/* Statistics */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.25,
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >

              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
              >

                {item.icon}

              </div>

              <h2 className="text-3xl font-bold text-slate-800">

                {item.value}

              </h2>

              <p className="mt-2 text-slate-500">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

        {/* Recent Uploads & Quick Actions */}
                {/* Recent Uploads & Quick Actions */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Recent Uploads */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2"
          >

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold text-slate-800">
                  Recent Uploads
                </h2>

                <p className="mt-1 text-slate-500">
                  Continue learning from your latest videos.
                </p>

              </div>

              <button className="flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-2 font-medium text-indigo-600 transition hover:bg-indigo-100">

                View All

                <FaArrowRight />

              </button>

            </div>

            <div className="space-y-4">

              {recentVideos.map((video, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-300 hover:bg-white hover:shadow-md"
                >

                  <div>

                    <h3 className="text-lg font-semibold text-slate-800">

                      {video.title}

                    </h3>

                    <p className="mt-1 text-sm text-slate-500">

                      Duration • {video.duration}

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

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Quick Actions */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >

            <h2 className="text-2xl font-bold text-slate-800">

              Quick Actions

            </h2>

            <p className="mt-2 text-slate-500">

              Access your most-used features.

            </p>

            <div className="mt-6 space-y-4">

              {quickActions.map((action, index) => (

                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-xl text-indigo-600">

                    {action.icon}

                  </div>

                  <span className="font-semibold text-slate-700">

                    {action.title}

                  </span>

                </motion.button>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Recent Activity */}
                {/* Recent Activity */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-slate-800">
                Recent Activity
              </h2>

              <p className="mt-1 text-slate-500">
                Latest AI-generated content and learning updates.
              </p>

            </div>

            <button className="rounded-xl bg-indigo-50 px-4 py-2 font-medium text-indigo-600 transition hover:bg-indigo-100">

              View History

            </button>

          </div>

          <div className="space-y-4">

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-300 hover:bg-white"
            >

              <h3 className="font-semibold text-slate-800">
                React Complete Course
              </h3>

              <p className="mt-2 text-slate-500">
                AI Summary generated successfully.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-300 hover:bg-white"
            >

              <h3 className="font-semibold text-slate-800">
                Database Systems
              </h3>

              <p className="mt-2 text-slate-500">
                Flashcards generated successfully.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-indigo-300 hover:bg-white"
            >

              <h3 className="font-semibold text-slate-800">
                Machine Learning Lecture
              </h3>

              <p className="mt-2 text-slate-500">
                Quiz generated successfully.
              </p>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </MainLayout>

  );
}

export default Dashboard;