import { motion } from "framer-motion";
import MainLayout from "../components/MainLayout";
import Flashcard from "../components/Flashcard";

const flashcards = [
  {
    question: "What is Artificial Intelligence?",
    answer:
      "Artificial Intelligence is the simulation of human intelligence by machines that can learn, reason and make decisions."
  },
  {
    question: "What is Machine Learning?",
    answer:
      "Machine Learning is a branch of AI that enables computers to learn from data without explicit programming."
  },
  {
    question: "What is Deep Learning?",
    answer:
      "Deep Learning uses multi-layer neural networks to recognize patterns and solve complex problems."
  },
  {
    question: "What is NLP?",
    answer:
      "Natural Language Processing enables computers to understand and generate human language."
  },
  {
    question: "What is Computer Vision?",
    answer:
      "Computer Vision enables computers to interpret and analyze images and videos."
  },
  {
    question: "What is Generative AI?",
    answer:
      "Generative AI creates new content such as text, images, code and videos using trained AI models."
  }
];

function Flashcards() {
  return (
    <MainLayout>
      <div className="space-y-8">

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-white">
            AI Flashcards
          </h1>

          <p className="mt-2 text-slate-400">
            Review concepts quickly using interactive flashcards generated from
            your uploaded video.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {flashcards.map((card, index) => (
            <Flashcard
              key={index}
              question={card.question}
              answer={card.answer}
            />
          ))}

        </div>

      </div>
    </MainLayout>
  );
}

export default Flashcards;