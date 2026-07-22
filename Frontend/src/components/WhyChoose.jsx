import { motion } from "framer-motion";
import {
  FaClock,
  FaBrain,
  FaBolt,
  FaSearch,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";

const advantages = [
  {
    icon: <FaClock size={30} />,
    title: "Save Hours of Time",
    description:
      "Skip rewatching lengthy videos. Instantly access summaries, notes, and key moments.",
  },
  {
    icon: <FaBrain size={30} />,
    title: "Learn Smarter",
    description:
      "AI identifies important concepts and organizes them into easy-to-understand notes.",
  },
  {
    icon: <FaBolt size={30} />,
    title: "Fast AI Processing",
    description:
      "Generate transcripts, quizzes, flashcards, and summaries within minutes.",
  },
  {
    icon: <FaSearch size={30} />,
    title: "Ask Questions",
    description:
      "Use Chat with Video to find answers instantly without searching through the transcript.",
  },
  {
    icon: <FaGraduationCap size={30} />,
    title: "Perfect for Students",
    description:
      "Designed for lectures, online courses, tutorials, and exam preparation.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Secure & Organized",
    description:
      "Keep all your learning materials organized in one dashboard with secure access.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-slate-950 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
            Why VideoMind AI?
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Built for Modern Learning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            VideoMind AI combines speech recognition, large language models,
            and intelligent search to transform long videos into an interactive
            learning experience.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {advantages.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
              }}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8 transition hover:border-green-500 hover:shadow-xl hover:shadow-green-500/10"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-400">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;