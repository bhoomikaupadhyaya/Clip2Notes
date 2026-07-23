import { motion } from "framer-motion";
import {
  FaVideo,
  FaStickyNote,
  FaUsers,
  FaBrain,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaVideo />,
    value: "10K+",
    label: "Videos Processed",
    description: "AI-powered video analysis",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: <FaStickyNote />,
    value: "50K+",
    label: "Notes Generated",
    description: "Structured learning notes",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaUsers />,
    value: "5K+",
    label: "Active Learners",
    description: "Students & Professionals",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <FaBrain />,
    value: "99%",
    label: "AI Accuracy",
    description: "Reliable AI-generated content",
    color: "from-amber-500 to-orange-500",
  },
];

function StatsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-600">
            Trusted by Learners
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Numbers That Speak
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Thousands of learners use Clip2Notes to transform videos into
            structured learning experiences.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 text-center shadow-sm transition hover:shadow-xl"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-2xl text-white shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="mt-8 text-5xl font-extrabold text-slate-800">
                {item.value}
              </h3>

              <h4 className="mt-3 text-xl font-semibold text-slate-700">
                {item.label}
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] bg-gradient-to-r from-[#7C83FD] via-[#8B8FFF] to-[#C4B5FD] p-10 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold">
            AI Learning Made Simple
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-lg opacity-90">
            Convert hours of video into minutes of learning with smart
            notes, flashcards, quizzes and interactive AI chat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;