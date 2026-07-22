import { FaClock, FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function VideoCard({ video }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg transition-all hover:border-blue-500"
    >
      <div className="relative h-48 bg-slate-800 flex items-center justify-center">
        <FaPlayCircle className="text-6xl text-blue-500" />
      </div>

      <div className="p-5">
        <h2 className="text-lg font-semibold text-white">
          {video.title}
        </h2>

        <p className="mt-2 text-sm text-slate-400 line-clamp-2">
          {video.description}
        </p>

        <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <FaClock />
            {video.duration}
          </span>

          <span>{video.date}</span>
        </div>

        <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
          Open
        </button>
      </div>
    </motion.div>
  );
}

export default VideoCard;