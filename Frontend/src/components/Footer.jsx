function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 px-6 py-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-sm text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} VideoMind AI. All rights reserved.
        </p>

        <p>
          Built with ❤️ using React, FastAPI & AI
        </p>
      </div>
    </footer>
  );
}

export default Footer;