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

           <form className="mt-10 space-y-6">

  {/* Email */}

  <div>

    <label className="mb-2 block text-sm font-medium text-slate-300">
      Email Address
    </label>

    <input
      type="email"
      placeholder="Enter your email"
      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
    />

  </div>

  {/* Password */}

  <div>

    <label className="mb-2 block text-sm font-medium text-slate-300">
      Password
    </label>

    <div className="relative">

      <input
        type="password"
        placeholder="Enter your password"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 pr-14 text-white placeholder:text-slate-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      />

      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
      >
        👁
      </button>

    </div>

  </div>

  {/* Remember Me */}

  <div className="flex items-center justify-between">

    <label className="flex items-center gap-3 text-sm text-slate-300">

      <input
        type="checkbox"
        className="h-4 w-4 rounded border-slate-600 bg-slate-800"
      />

      Remember Me

    </label>

    <button
      type="button"
      className="text-sm text-blue-400 transition hover:text-blue-300"
    >
      Forgot Password?
    </button>

  </div>

  {/* Login Button */}

  <button
    type="submit"
    className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold transition hover:bg-blue-700"
  >
    Login
  </button>

  {/* Divider */}

  <div className="relative py-2">

    <div className="absolute inset-0 flex items-center">

      <div className="w-full border-t border-slate-700"></div>

    </div>

    <div className="relative flex justify-center">

      <span className="bg-slate-950 px-4 text-sm text-slate-500">
        OR
      </span>

    </div>

  </div>

  {/* Register */}

  <p className="text-center text-slate-400">

    Don't have an account?

    <a
      href="/register"
      className="ml-2 font-semibold text-blue-400 hover:text-blue-300"
    >
      Create Account
    </a>

  </p>

</form>

          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default Login;