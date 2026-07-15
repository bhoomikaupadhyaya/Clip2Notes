import { motion } from "framer-motion";

function Login() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT PANEL */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 lg:flex"
        >

          {/* Glow */}

          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]" />

          <div className="relative z-10 flex flex-col justify-center px-16">

            <span className="mb-6 w-fit rounded-full bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
              AI Powered Learning
            </span>

            <h1 className="text-6xl font-extrabold leading-tight">

              Learn

              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">

                Smarter

              </span>

              Not Harder.

            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-slate-300">

              Transform lectures, tutorials and meetings into
              structured notes, quizzes, flashcards and AI
              conversations within seconds.

            </p>

          </div>

        </motion.div>

        {/* RIGHT PANEL */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center px-8"
        >

          <div className="w-full max-w-md">

            <h2 className="text-4xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="mt-4 text-slate-400">
              Sign in to continue using VideoMind AI.
            </p>

            {/* Login Form comes here */}

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default Login;