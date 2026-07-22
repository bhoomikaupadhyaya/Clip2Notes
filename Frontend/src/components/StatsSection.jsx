import { motion } from "framer-motion";
import {
  FaVideo,
  FaBookOpen,
  FaBrain,
  FaUsers,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaVideo />,
    value: "100+",
    label: "Videos Processed",
    color: "bg-[#EEF2FF] text-[#6366F1]",
  },
  {
    icon: <FaBookOpen />,
    value: "500+",
    label: "Notes Generated",
    color: "bg-[#DCFCE7] text-green-600",
  },
  {
    icon: <FaBrain />,
    value: "AI Powered",
    label: "Smart Learning",
    color: "bg-[#F3E8FF] text-violet-500",
  },
  {
    icon: <FaUsers />,
    value: "24/7",
    label: "Available Anytime",
    color: "bg-[#FCE7F3] text-pink-500",
  },
];

function StatsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-[#EEF2FF] px-5 py-2 text-sm font-semibold text-[#6366F1]">
            Platform Highlights
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Built to Make Learning Faster
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            From AI-powered notes to interactive quizzes and flashcards,
            Clip2Notes helps students save time and retain knowledge more
            effectively.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl ${stat.color}`}
              >
                {stat.icon}
              </div>

              <h3 className="text-3xl font-bold text-slate-900">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;