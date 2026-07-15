import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto flex flex-col items-center justify-between gap-6 px-8 py-6 text-sm text-slate-400 md:flex-row">

        {/* Left */}

        <div>

          © {new Date().getFullYear()} VideoMind AI

          <span className="ml-2 text-slate-500">

            All Rights Reserved

          </span>

        </div>

        {/* Center */}

        <div className="text-center">

          Built with

          <span className="mx-2 text-red-500">

            ❤️

          </span>

          using React + Tailwind CSS

        </div>

        {/* Right */}

        <div className="flex gap-5 text-lg">

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:example@gmail.com"
            className="transition hover:text-green-400"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;