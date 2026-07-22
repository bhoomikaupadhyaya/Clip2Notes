import { motion } from "framer-motion";
import {
  FaUpload,
  FaMicrophoneAlt,
  FaBrain,
  FaBookOpen,
  FaComments,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaUpload size={32} />,
    title: "Upload Video",
    description:
      "Upload lectures, YouTube videos, or meeting recordings in just a few clicks.",
  },
  {
    id: "02",
    icon: <FaMicrophoneAlt size={32} />,
    title: "Speech to Text",
    description:
      "Whisper AI converts spoken content into highly accurate transcripts.",
  },
  {
    id: "03",
    icon: <FaBrain size={32} />,
    title: "AI Processing",
    description:
      "The AI understands the transcript, extracts insights, and organizes the information.",
  },
  {
    id: "04",
    icon: <FaBookOpen size={32} />,
    title: "Generate Learning Material",
    description:
      "Receive summaries, timestamps, quizzes, flashcards, and action items instantly.",
  },
  {
    id: "05",
    icon: <FaComments size={32} />,
    title: "Chat with Video",
    description:
      "Ask questions about the video and receive intelligent answers powered by RAG.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-900 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            From Video to Smart Learning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            VideoMind AI simplifies your learning journey by transforming
            lengthy videos into organized knowledge in just a few steps.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 lg:block" />

          <div className="space-y-16">

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >

                {/* Card */}

                <div className="w-full lg:w-5/12">

                  <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">

                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      {step.icon}
                    </div>

                    <h3 className="text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {step.description}
                    </p>

                  </div>

                </div>

                {/* Center Circle */}

                <div className="hidden lg:flex lg:w-2/12 justify-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold">
                    {step.id}
                  </div>

                </div>

                <div className="hidden lg:block lg:w-5/12"></div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;