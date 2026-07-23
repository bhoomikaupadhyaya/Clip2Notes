import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaBrain,
  FaComments,
  FaClock,
  FaQuestionCircle,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFileAlt />,
    title: "Smart Notes",
    description:
      "Generate beautifully structured notes with headings, bullet points and key takeaways within seconds.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: <FaClock />,
    title: "AI Timestamps",
    description:
      "Jump directly to important topics using automatically generated timestamps.",
    color: "bg-violet-100 text-violet-600",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Quiz Generator",
    description:
      "Create MCQs automatically so you can revise and test your understanding.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: <FaLayerGroup />,
    title: "Flashcards",
    description:
      "Revise faster using AI-generated flashcards from every important topic.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaComments />,
    title: "Chat with Video",
    description:
      "Ask questions about the uploaded video and receive contextual AI answers.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <FaBrain />,
    title: "AI Insights",
    description:
      "Extract summaries, action items, concepts and learning highlights instantly.",
    color: "bg-sky-100 text-sky-600",
  },
];

function FeaturesSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-600">
            Powerful Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Everything You Need
            <span className="block text-[#7C83FD]">
              To Learn Smarter
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Upload a video once and let AI create notes, summaries,
            quizzes, flashcards and intelligent conversations—all from
            a single platform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#7C83FD] hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-2xl ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>

              <button className="mt-8 flex items-center gap-2 font-semibold text-[#7C83FD] transition group-hover:gap-3">
                Learn More
                <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 rounded-[32px] bg-gradient-to-r from-[#7C83FD] via-[#8B8FFF] to-[#C4B5FD] px-10 py-12 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold">
            Learn Faster with AI
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            From long lectures to short tutorials, Clip2Notes converts
            every video into organized learning material in seconds.
          </p>

          <button className="mt-8 rounded-2xl bg-white px-8 py-4 font-semibold text-[#6366F1] transition hover:scale-105">
            Get Started Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesSection;