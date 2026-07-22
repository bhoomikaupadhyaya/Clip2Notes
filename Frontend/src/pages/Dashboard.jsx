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
      color: "bg-blue-500",
      icon: <FaVideo size={28} />,
    },
    {
      title: "Notes",
      value: 128,
      color: "bg-green-500",
      icon: <FaStickyNote size={28} />,
    },
    {
      title: "Flashcards",
      value: 432,
      color: "bg-purple-500",
      icon: <FaLayerGroup size={28} />,
    },
    {
      title: "Quizzes",
      value: 37,
      color: "bg-orange-500",
      icon: <FaQuestionCircle size={28} />,
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

      <div className="space-y-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-4xl font-bold text-white">

            Welcome Back 👋

          </h1>

          <p className="mt-3 text-slate-400">

            Here's an overview of your AI learning workspace.

          </p>

        </motion.div>

        {/* Search */}

        <div className="relative">

          <FaSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search videos..."
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-4 pl-14 pr-6 text-white focus:border-blue-500 outline-none"
          />

        </div>

        {/* Statistics */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >

              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl ${item.color}`}
              >

                {item.icon}

              </div>

              <h3 className="text-3xl font-bold">

                {item.value}

              </h3>

              <p className="mt-2 text-slate-400">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>
                {/* Recent Uploads & Quick Actions */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Recent Uploads */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 lg:col-span-2"
          >

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-2xl font-semibold">
                Recent Uploads
              </h2>

              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300">

                View All

                <FaArrowRight />

              </button>

            </div>

            <div className="space-y-5">

              {recentVideos.map((video, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800 p-5"
                >

                  <div>

                    <h3 className="text-lg font-semibold">

                      {video.title}

                    </h3>

                    <p className="mt-1 text-sm text-slate-400">

                      Duration • {video.duration}

                    </p>

                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      video.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
          >

            <h2 className="mb-8 text-2xl font-semibold">

              Quick Actions

            </h2>

            <div className="space-y-5">

              {quickActions.map((action, index) => (

                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="flex w-full items-center gap-4 rounded-xl border border-slate-700 bg-slate-800 p-5 transition hover:border-blue-500"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-xl">

                    {action.icon}

                  </div>

                  <span className="font-medium">

                    {action.title}

                  </span>

                </motion.button>

              ))}

            </div>

          </motion.div>

        </div>

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
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
        >

          <div className="mb-8 flex items-center justify-between">

            <h2 className="text-2xl font-semibold">

              Recent Activity

            </h2>

            <button className="text-blue-400 hover:text-blue-300">

              View History

            </button>

          </div>

          <div className="space-y-5">

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">

              <h3 className="font-semibold">

                React Complete Course

              </h3>

              <p className="mt-2 text-slate-400">

                AI Summary generated successfully.

              </p>

            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">

              <h3 className="font-semibold">

                Database Systems

              </h3>

              <p className="mt-2 text-slate-400">

                Flashcards generated successfully.

              </p>

            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">

              <h3 className="font-semibold">

                Machine Learning Lecture

              </h3>

              <p className="mt-2 text-slate-400">

                Quiz generated successfully.

              </p>

            </div>

          </div>

        </motion.div>
              </div>

    </MainLayout>

  );
}

export default Dashboard;