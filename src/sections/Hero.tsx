import Badge from "../components/Badge";
import ArchitectureDiagram from "../components/ArchitectureDiagram";

const technologies = [
  "Kubernetes",
  "Docker",
  "Helm",
  "AWS",
  "GitHub Actions",
  "Python",
  "Linux",
];

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto max-w-[1600px] px-8">

        <div className="grid grid-cols-1 items-start gap-24 pt-32 pb-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="mb-5 text-xl font-semibold tracking-wide text-blue-400">
              Junior DevOps Engineer
            </p>

            <h1 className="mb-8 text-7xl font-extrabold leading-none">
              Roman Chernukha
            </h1>

            <p className="mb-10 max-w-2xl text-2xl leading-10 text-slate-300">
              Building production-inspired cloud-native platforms with
              Kubernetes, CI/CD, observability and infrastructure automation.
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>

            {/* CURRENTLY */}

            <div className="mt-12 max-w-xl rounded-2xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur">

              <h3 className="mb-6 text-2xl font-bold text-white">
                Currently
              </h3>

              <div className="space-y-5 text-lg text-slate-300">

                <div className="flex items-start gap-4">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>Seeking my first Junior DevOps Engineer role</span>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>Open to relocation within Europe</span>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-emerald-400 text-xl">✓</span>
                  <span>Building production-inspired DevOps projects</span>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">
            <ArchitectureDiagram />
          </div>

        </div>

      </div>
    </section>
  );
}
