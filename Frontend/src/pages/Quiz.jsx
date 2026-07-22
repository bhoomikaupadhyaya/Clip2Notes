import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "../components/MainLayout";

function Quiz() {

  const questions = [
    {
      question: "Which Hook is used for state management in React?",
      options: [
        "useEffect",
        "useState",
        "useMemo",
        "useRef",
      ],
      answer: "useState",
    },

    {
      question: "Which company developed React?",
      options: [
        "Google",
        "Meta",
        "Microsoft",
        "Netflix",
      ],
      answer: "Meta",
    },

    {
      question: "JSX stands for?",
      options: [
        "Java Syntax XML",
        "JavaScript XML",
        "JavaScript Extension",
        "JSON XML",
      ],
      answer: "JavaScript XML",
    },

    {
      question: "React Components return?",
      options: [
        "JSON",
        "HTML",
        "JSX",
        "CSS",
      ],
      answer: "JSX",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [quizFinished, setQuizFinished] = useState(false);

  const current = questions[currentQuestion];

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  const handleSelect = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;

    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });

    return score;
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizFinished(false);
  };

  return (

    <MainLayout>

      <div className="mx-auto max-w-4xl space-y-8">

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          <h1 className="text-4xl font-bold">

            AI Generated Quiz

          </h1>

          <p className="mt-3 text-slate-400">

            Test your understanding using AI-generated questions.

          </p>

        </motion.div>
                {/* Progress */}

        {!quizFinished && (

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
          >

            <div className="mb-4 flex items-center justify-between">

              <h2 className="text-xl font-semibold">

                Question {currentQuestion + 1} of {questions.length}

              </h2>

              <span className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-400">

                {Math.round(progress)}%

              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-700">

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              />

            </div>

          </motion.div>

        )}

        {/* Quiz Card */}

        {!quizFinished && (

          <motion.div
            key={currentQuestion}
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
          >

            <h2 className="text-3xl font-bold leading-relaxed">

              {current.question}

            </h2>

            {/* Options */}

            <div className="mt-10 space-y-5">

              {current.options.map((option, index) => (

                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() => handleSelect(option)}
                  className={`flex w-full items-center rounded-2xl border p-5 text-left transition ${
                    selectedAnswers[currentQuestion] === option
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-slate-700 bg-slate-800 hover:border-blue-500"
                  }`}
                >

                  <div
                    className={`mr-5 flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                      selectedAnswers[currentQuestion] === option
                        ? "bg-blue-500 text-white"
                        : "bg-slate-700"
                    }`}
                  >

                    {String.fromCharCode(65 + index)}

                  </div>

                  <span className="text-lg">

                    {option}

                  </span>

                </motion.button>

              ))}

            </div>

            {/* Navigation */}

            <div className="mt-10 flex justify-between">

              <button
                disabled={currentQuestion === 0}
                onClick={previousQuestion}
                className="rounded-xl bg-slate-700 px-8 py-3 transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
              >

                Previous

              </button>

              <button
                onClick={nextQuestion}
                className="rounded-xl bg-blue-600 px-8 py-3 transition hover:bg-blue-700"
              >

                {currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next"}

              </button>

            </div>

          </motion.div>

        )}
                {/* Quiz Result */}

        {quizFinished && (

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="rounded-3xl border border-slate-700 bg-slate-900 p-10 text-center"
          >

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-5xl">

              🏆

            </div>

            <h2 className="mt-8 text-4xl font-bold">

              Quiz Completed!

            </h2>

            <p className="mt-4 text-slate-400">

              Here's your performance summary.

            </p>

            {/* Score */}

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

                <h3 className="text-5xl font-bold text-blue-400">

                  {calculateScore()}

                </h3>

                <p className="mt-3 text-slate-400">

                  Correct Answers

                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

                <h3 className="text-5xl font-bold text-purple-400">

                  {questions.length}

                </h3>

                <p className="mt-3 text-slate-400">

                  Total Questions

                </p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6">

                <h3 className="text-5xl font-bold text-green-400">

                  {Math.round(
                    (calculateScore() / questions.length) * 100
                  )}
                  %

                </h3>

                <p className="mt-3 text-slate-400">

                  Accuracy

                </p>

              </div>

            </div>

            {/* Performance Message */}

            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800 p-6">

              {calculateScore() === questions.length ? (

                <h3 className="text-2xl font-bold text-green-400">

                  🎉 Outstanding! Perfect Score!

                </h3>

              ) : calculateScore() >= questions.length * 0.7 ? (

                <h3 className="text-2xl font-bold text-blue-400">

                  👍 Great Job! Keep Learning.

                </h3>

              ) : (

                <h3 className="text-2xl font-bold text-orange-400">

                  📚 Practice More to Improve.

                </h3>

              )}

            </div>

            {/* Action Buttons */}

            <div className="mt-10 flex flex-col justify-center gap-5 md:flex-row">

              <button
                onClick={restartQuiz}
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
              >

                Restart Quiz

              </button>

              <button
                className="rounded-xl bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-700"
              >

                Review Answers

              </button>

            </div>

          </motion.div>

        )}
              </div>

    </MainLayout>

  );
}

export default Quiz;