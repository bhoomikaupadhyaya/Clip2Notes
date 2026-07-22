import { motion } from "framer-motion";
import {
  FaPlayCircle,
  FaClock,
  FaCalendarAlt,
  FaCheckCircle,
  FaStickyNote,
  FaQuestionCircle,
  FaLayerGroup,
  FaComments,
  FaArrowRight,
} from "react-icons/fa";

import MainLayout from "../components/MainLayout";

function VideoDetails() {

  const video = {
    title: "React Complete Course",
    duration: "2 Hours 34 Minutes",
    uploaded: "15 July 2026",
    status: "Processing Complete",
  };

  const actions = [
    {
      title: "AI Notes",
      icon: <FaStickyNote />,
      color: "bg-blue-500",
    },
    {
      title: "Quiz",
      icon: <FaQuestionCircle />,
      color: "bg-orange-500",
    },
    {
      title: "Flashcards",
      icon: <FaLayerGroup />,
      color: "bg-purple-500",
    },
    {
      title: "Chat with Video",
      icon: <FaComments />,
      color: "bg-green-500",
    },
  ];

  return (

    <MainLayout>

      <div className="space-y-10">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <h1 className="text-4xl font-bold">

            Video Details

          </h1>

          <p className="mt-3 text-slate-400">

            View AI generated learning resources
            for your uploaded video.

          </p>

        </motion.div>

        {/* Video Section */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Video Player */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="lg:col-span-2 rounded-3xl border border-slate-700 bg-slate-900 p-8"
          >

            <div className="flex aspect-video items-center justify-center rounded-2xl bg-slate-800">

              <FaPlayCircle
                className="text-blue-500"
                size={90}
              />

            </div>

          </motion.div>

          {/* Video Information */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
          >

            <h2 className="text-2xl font-bold">

              {video.title}

            </h2>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-4">

                <FaClock className="text-blue-400" />

                <span>{video.duration}</span>

              </div>

              <div className="flex items-center gap-4">

                <FaCalendarAlt className="text-green-400" />

                <span>{video.uploaded}</span>

              </div>

              <div className="flex items-center gap-4">

                <FaCheckCircle className="text-purple-400" />

                <span>{video.status}</span>

              </div>

            </div>

          </motion.div>

        </div>
                {/* AI Summary */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
        >

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              AI Summary
            </h2>

            <button className="rounded-lg bg-blue-600 px-5 py-2 transition hover:bg-blue-700">
              Regenerate
            </button>

          </div>

          <p className="mt-6 leading-8 text-slate-300">

            This React course introduces the fundamentals of React.js,
            including components, JSX, props, state management, hooks,
            routing, API integration, and project structure.
            The AI summarizes the most important concepts so learners
            can quickly revise without rewatching the complete video.

          </p>

        </motion.div>

        {/* Quick Actions */}

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
            delay: 0.3,
          }}
        >

          <h2 className="mb-6 text-2xl font-bold">
            AI Learning Tools
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {actions.map((action, index) => (

              <motion.button
                key={index}
                whileHover={{
                  y: -8,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-blue-500"
              >

                <div
                  className={`mb-5 flex h-16 w-16 items-center justify-center rounded-xl ${action.color}`}
                >

                  {action.icon}

                </div>

                <h3 className="text-xl font-semibold">

                  {action.title}

                </h3>

                <div className="mt-5 flex items-center gap-2 text-blue-400">

                  Open

                  <FaArrowRight />

                </div>

              </motion.button>

            ))}

          </div>

        </motion.div>

        {/* Generated Content */}

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Notes Preview */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
          >

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold">

                Notes Preview

              </h2>

              <button className="text-blue-400 hover:text-blue-300">

                View All

              </button>

            </div>

            <ul className="space-y-4 text-slate-300">

              <li>• React Components</li>

              <li>• JSX Fundamentals</li>

              <li>• React Hooks</li>

              <li>• State Management</li>

              <li>• React Router</li>

              <li>• API Calls</li>

            </ul>

          </motion.div>

          {/* Timestamps */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
          >

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold">

                Important Timestamps

              </h2>

              <button className="text-blue-400 hover:text-blue-300">

                View All

              </button>

            </div>

            <div className="space-y-4">

              <div className="rounded-xl bg-slate-800 p-4">

                <span className="font-semibold text-blue-400">

                  00:10:45

                </span>

                <p className="mt-2 text-slate-300">

                  Introduction to Components

                </p>

              </div>

              <div className="rounded-xl bg-slate-800 p-4">

                <span className="font-semibold text-blue-400">

                  00:48:20

                </span>

                <p className="mt-2 text-slate-300">

                  React Hooks Explained

                </p>

              </div>

              <div className="rounded-xl bg-slate-800 p-4">

                <span className="font-semibold text-blue-400">

                  01:32:18

                </span>

                <p className="mt-2 text-slate-300">

                  Building Complete Project

                </p>

              </div>

            </div>

          </motion.div>

        </div>
                {/* AI Analytics */}

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
            delay: 0.6,
          }}
        >

          <h2 className="mb-6 text-2xl font-bold">

            AI Analytics

          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h3 className="text-4xl font-bold text-blue-400">

                128

              </h3>

              <p className="mt-3 text-slate-400">

                Notes Generated

              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h3 className="text-4xl font-bold text-purple-400">

                42

              </h3>

              <p className="mt-3 text-slate-400">

                Flashcards

              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h3 className="text-4xl font-bold text-orange-400">

                20

              </h3>

              <p className="mt-3 text-slate-400">

                Quiz Questions

              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h3 className="text-4xl font-bold text-green-400">

                18

              </h3>

              <p className="mt-3 text-slate-400">

                Key Topics

              </p>

            </div>

          </div>

        </motion.div>

        {/* Generate Resources */}

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
            delay: 0.7,
          }}
          className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
        >

          <h2 className="mb-8 text-2xl font-bold">

            Generate AI Resources

          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <button className="rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-700">

              Generate Notes

            </button>

            <button className="rounded-xl bg-orange-600 py-4 font-semibold transition hover:bg-orange-700">

              Generate Quiz

            </button>

            <button className="rounded-xl bg-purple-600 py-4 font-semibold transition hover:bg-purple-700">

              Generate Flashcards

            </button>

            <button className="rounded-xl bg-green-600 py-4 font-semibold transition hover:bg-green-700">

              Open AI Chat

            </button>

          </div>

        </motion.div>

      </div>

    </MainLayout>

  );

}

export default VideoDetails;