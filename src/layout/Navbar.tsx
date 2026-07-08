export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <a href="/" className="text-lg font-bold text-white">
          Roman Chernukha
        </a>

        <nav className="hidden gap-8 text-slate-300 md:flex">
          <a href="#project" className="hover:text-white">Project</a>
          <a href="#stack" className="hover:text-white">Stack</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        <a
          href="https://github.com/romanchernukha8-ctrl"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-white hover:border-blue-500"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
