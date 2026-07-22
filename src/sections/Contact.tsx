import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-8 py-32 text-white"
    >
      <div className="text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
          Contact
        </span>

        <h2 className="mt-8 text-5xl font-bold">
          Let's Build Something Great
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-400">
          I'm currently looking for my first Junior DevOps Engineer
          opportunity. Feel free to reach out if you'd like to discuss
          DevOps, cloud infrastructure or potential collaboration.
        </p>

      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <a
          href="mailto:romanchernukha8@gmail.com"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
        >
          <FaEnvelope className="mb-5 text-4xl text-blue-400" />

          <h3 className="mb-2 text-2xl font-bold">
            Email
          </h3>

          <p className="text-slate-400">
            romanchernukha8@gmail.com
          </p>
        </a>

        <a
          href="https://github.com/romanchernukha8-ctrl"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
        >
          <FaGithub className="mb-5 text-4xl text-blue-400" />

          <h3 className="mb-2 text-2xl font-bold">
            GitHub
          </h3>

          <p className="text-slate-400">
            View my projects
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/roman-chernukha-4052b63ba/"
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
        >
          <FaLinkedin className="mb-5 text-4xl text-blue-400" />

          <h3 className="mb-2 text-2xl font-bold">
            LinkedIn
          </h3>

          <p className="text-slate-400">
            Connect with me
          </p>
        </a>

        <a
          href={`${import.meta.env.BASE_URL}Roman_Chernukha_DevOps_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500"
        >
          <FaFilePdf className="mb-5 text-4xl text-blue-400" />

          <h3 className="mb-2 text-2xl font-bold">
            Resume
          </h3>

          <p className="text-slate-400">
            Download Resume (PDF)
          </p>
        </a>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <FaMapMarkerAlt className="mb-5 text-4xl text-blue-400" />

          <h3 className="mb-2 text-2xl font-bold">
            Location
          </h3>

          <p className="text-slate-400">
            Based in Germany
            <br />
            Open to relocation
          </p>

        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8">

          <h3 className="mb-2 text-2xl font-bold text-emerald-400">
            Open to Work
          </h3>

          <p className="text-slate-300">
            Junior DevOps Engineer
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Open to relocation
          </p>

        </div>

      </div>
    </section>
  );
}
