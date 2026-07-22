import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 text-sm text-slate-500 md:flex-row lg:px-8">

        {/* Left */}

        <div>
<span>
         © {new Date().getFullYear()} Clip2Notes

<span className="ml-2 text-slate-400">
  All Rights Reserved
</span>

        </div>

        {/* Center */}

        <div className="text-center">

          Built with

          <span className="mx-2 text-red-500">

            ❤️

          </span>

          Transform Videos into Smart Notes

        </div>

        {/* Right */}

        <div className="flex items-center gap-5 text-xl">

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
            className="text-slate-500 transition hover:text-[#7C83FD]"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:example@gmail.com"
            className="text-slate-500 transition hover:text-[#7C83FD]"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;