import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaSearch,
  FaCopy,
  FaFilePdf,
  FaFileWord,
  FaPrint,
} from "react-icons/fa";

import MainLayout from "../components/MainLayout";

function Notes() {

  const [search, setSearch] = useState("");

  const notes = [
    "React is a JavaScript library used to build user interfaces.",
    "JSX allows developers to write HTML inside JavaScript.",
    "Components are reusable building blocks.",
    "Props allow communication between components.",
    "State stores dynamic data inside components.",
    "Hooks simplify state management.",
    "React Router enables page navigation.",
    "API integration fetches backend data.",
    "Lifecycle is managed using Hooks.",
    "Projects combine all concepts together."
  ];

  const filteredNotes = notes.filter((note) =>
    note.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <MainLayout>

      <div className="space-y-10">

        {/* Header */}

        <motion.div
          initial={{
            opacity:0,
            y:-20
          }}
          animate={{
            opacity:1,
            y:0
          }}
        >

          <h1 className="text-4xl font-bold">

            AI Notes

          </h1>

          <p className="mt-3 text-slate-400">

            AI generated structured notes from your uploaded video.

          </p>

        </motion.div>

        {/* Search */}

        <div className="relative">

          <FaSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            type="text"
            placeholder="Search notes..."
            className="w-full rounded-2xl border border-slate-700 bg-slate-900 py-4 pl-14 pr-6 text-white outline-none focus:border-blue-500"
          />

        </div>

        {/* AI Summary */}

        <motion.div
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
        >

          <h2 className="text-2xl font-bold">

            AI Summary

          </h2>

          <p className="mt-6 leading-8 text-slate-300">

            This lecture introduces the fundamentals of React,
            component-based architecture, JSX, Hooks,
            state management and routing.
            The AI extracted the most important concepts,
            reducing hours of video into concise revision notes.

          </p>

        </motion.div>
                {/* Key Points & Detailed Notes */}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Key Points */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
          >

            <h2 className="mb-6 text-2xl font-bold">

              📌 Key Points

            </h2>

            <div className="space-y-5">

              <div className="rounded-xl bg-slate-800 p-4">
                React follows Component-Based Architecture.
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                JSX combines HTML and JavaScript.
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                Hooks manage state and lifecycle.
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                Routing enables SPA navigation.
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                APIs connect frontend with backend.
              </div>

            </div>

          </motion.div>

          {/* Detailed Notes */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-8 lg:col-span-2"
          >

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-2xl font-bold">

                📝 Detailed Notes

              </h2>

              <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-400">

                {filteredNotes.length} Notes

              </span>

            </div>

            <div className="max-h-[520px] space-y-5 overflow-y-auto pr-3">

              {filteredNotes.map((note, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.01,
                  }}
                  className="rounded-xl border border-slate-700 bg-slate-800 p-5"
                >

                  <div className="flex gap-4">

                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold">

                      {index + 1}

                    </div>

                    <div>

                      <h3 className="font-semibold">

                        Note {index + 1}

                      </h3>

                      <p className="mt-2 leading-7 text-slate-300">

                        {note}

                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Export Section */}

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
          className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
        >

          <h2 className="mb-8 text-2xl font-bold">

            Export Notes

          </h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            <button className="flex items-center justify-center gap-3 rounded-xl bg-red-600 py-4 font-semibold transition hover:bg-red-700">

              <FaFilePdf />

              Export PDF

            </button>

            <button className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-700">

              <FaFileWord />

              Export DOCX

            </button>

            <button className="flex items-center justify-center gap-3 rounded-xl bg-green-600 py-4 font-semibold transition hover:bg-green-700">

              <FaCopy />

              Copy Notes

            </button>

            <button className="flex items-center justify-center gap-3 rounded-xl bg-slate-700 py-4 font-semibold transition hover:bg-slate-600">

              <FaPrint />

              Print

            </button>

          </div>

        </motion.div>
                {/* Notes Analytics */}

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
            delay: 0.5,
          }}
        >

          <h2 className="mb-6 text-2xl font-bold">

            Notes Analytics

          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h3 className="text-4xl font-bold text-blue-400">

                {filteredNotes.length}

              </h3>

              <p className="mt-3 text-slate-400">

                Total Notes

              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h3 className="text-4xl font-bold text-green-400">

                12 min

              </h3>

              <p className="mt-3 text-slate-400">

                Reading Time

              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h3 className="text-4xl font-bold text-purple-400">

                96%

              </h3>

              <p className="mt-3 text-slate-400">

                AI Confidence

              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

              <h3 className="text-4xl font-bold text-orange-400">

                18

              </h3>

              <p className="mt-3 text-slate-400">

                Key Topics

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </MainLayout>

  );

}

export default Notes;