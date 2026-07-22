import { motion } from "framer-motion";
import MainLayout from "../components/MainLayout";
import VideoCard from "../components/VideoCard";

const history = [
  {
    id: 1,
    title: "Introduction to Artificial Intelligence",
    description:
      "Overview of AI concepts including Machine Learning, Deep Learning and NLP.",
    duration: "24 mins",
    date: "Yesterday",
  },
  {
    id: 2,
    title: "React Hooks Explained",
    description:
      "Understanding useState, useEffect, useContext and custom hooks.",
    duration: "38 mins",
    date: "2 days ago",
  },
  {
    id: 3,
    title: "Database Management Systems",
    description:
      "Normalization, SQL Queries, Transactions and ACID properties.",
    duration: "42 mins",
    date: "Last Week",
  },
  {
    id: 4,
    title: "Operating System Basics",
    description:
      "Process scheduling, memory management and synchronization.",
    duration: "35 mins",
    date: "Last Week",
  },
];

function History() {
  return (
    <MainLayout>
      <div className="space-y-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-white">
            Learning History
          </h1>

          <p className="mt-2 text-slate-400">
            Continue learning from your previously uploaded videos.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {history.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}

        </div>

      </div>
    </MainLayout>
  );
}

export default History;