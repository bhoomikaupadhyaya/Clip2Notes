import { motion } from "framer-motion";
import {
  FaVideo,
  FaMicrophoneAlt,
  FaRegStickyNote,
  FaClock,
  FaQuestionCircle,
  FaLayerGroup,
  FaComments,
  FaFileExport,
} from "react-icons/fa";

const features = [
  {
    icon: <FaVideo size={34} />,
    title: "Video Upload",
    description:
      "Upload lectures, meetings, or YouTube videos and let AI analyze them automatically.",
  },
  {
    icon: <FaMicrophoneAlt size={34} />,
    title: "Speech to Text",
    description:
      "Accurate transcription powered by Whisper AI with speaker-aware processing.",
  },
  {
    icon: <FaRegStickyNote size={34} />,
    title: "Smart Notes",
    description:
      "Generate structured notes with headings, bullet points, and key takeaways.",
  },
  {
    icon: <FaClock size={34} />,
    title: "Important Timestamps",
    description:
      "Automatically detect important moments and create clickable timestamps.",
  },
  {
    icon: <FaQuestionCircle size={34} />,
    title: "AI Quiz Generator",
    description:
      "Generate MCQs and revision questions instantly from the transcript.",
  },
  {
    icon: <FaLayerGroup size={34} />,
    title: "Flashcards",
    description:
      "Create interactive flashcards for quick revision and better retention.",
  },
  {
    icon: <FaComments size={34} />,
    title: "Chat with Video",
    description:
      "Ask questions about the uploaded video and receive contextual AI answers.",
  },
  {
    icon: <FaFileExport size={34} />,
    title: "Export Notes",
    description:
      "Download summaries and notes as PDF, DOCX, or Markdown for offline use.",
  },
];

function FeaturesSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Powerful AI Features
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Everything You Need to Learn Faster
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            VideoMind AI transforms long videos into structured knowledge.
            Save time, revise smarter, and interact with your learning content.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="group rounded-2xl border border-slate-700 bg-slate-900 p-8 transition-all hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-4 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;