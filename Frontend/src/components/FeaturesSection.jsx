import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaBrain,
  FaComments,
  FaClock,
  FaQuestionCircle,
  FaLayerGroup,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt />,
    title: "Smart Notes",
    description:
      "Generate well-structured notes with headings, bullet points, and key takeaways.",
    color: "bg-[#EEF2FF] text-[#6366F1]",
  },
  {
    icon: <FaClock />,
    title: "Timestamps",
    description:
      "Navigate long videos instantly using AI-generated timestamped sections.",
    color: "bg-[#F3E8FF] text-violet-500",
  },
  {
    icon: <FaQuestionCircle />,
    title: "AI Quiz",
    description:
      "Automatically create quizzes to reinforce learning after every video.",
    color: "bg-[#FEF3C7] text-amber-500",
  },
  {
    icon: <FaLayerGroup />,
    title: "Flashcards",
    description:
      "Convert important concepts into interactive flashcards for revision.",
    color: "bg-[#DCFCE7] text-green-600",
  },
  {
    icon: <FaComments />,
    title: "Chat with Video",
    description:
      "Ask questions about your uploaded videos and get contextual AI answers.",
    color: "bg-[#FCE7F3] text-pink-500",
  },
  {
    icon: <FaBrain />,
    title: "AI Insights",
    description:
      "Extract summaries, action items, and important concepts automatically.",
    color: "bg-[#E0F2FE] text-sky-500",
  },
];

function FeaturesSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-semibold text-[#6366F1]">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything You Need to Learn Smarter
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Clip2Notes uses AI to transform long videos into concise notes,
            quizzes, flashcards, and interactive conversations—all in one
            place.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-600">
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