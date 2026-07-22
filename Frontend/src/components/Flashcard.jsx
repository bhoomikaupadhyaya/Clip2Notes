import { motion } from "framer-motion";
import { useState } from "react";

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer"
    >
      <div className="min-h-[240px] rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition-all duration-300 hover:border-blue-500">

        {!flipped ? (
          <>
            <p className="mb-4 text-xs uppercase tracking-wider text-blue-400">
              Question
            </p>

            <h2 className="text-xl font-semibold text-white">
              {question}
            </h2>

            <div className="mt-10 text-sm text-slate-400">
              Click to reveal answer
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 text-xs uppercase tracking-wider text-green-400">
              Answer
            </p>

            <p className="leading-7 text-slate-200">
              {answer}
            </p>

            <div className="mt-10 text-sm text-slate-400">
              Click again to flip back
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Flashcard;