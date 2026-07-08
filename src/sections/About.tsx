export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-8 py-24 text-white"
    >
      <div className="grid gap-16 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            About Me
          </span>

          <h2 className="mt-8 mb-8 text-5xl font-bold">
            Passionate about DevOps,
            Automation & Cloud
          </h2>

          <div className="space-y-6 text-lg leading-8 text-slate-400">

            <p>
              I'm a Junior DevOps Engineer passionate about
              building production-inspired cloud-native
              platforms, automating infrastructure and
              continuously improving my DevOps skills
              through hands-on projects.
            </p>

            <p>
              My recent work includes designing and deploying
              Kubernetes-based microservices, building Helm
              charts, implementing CI/CD pipelines,
              monitoring, centralized logging and
              infrastructure automation using modern
              DevOps practices.
            </p>

            <p>
              Before transitioning into IT, I worked for
              more than six years as an Instrumentation &
              Control Systems Technician at a thermal power
              plant. This experience strengthened my
              troubleshooting skills, analytical thinking
              and ability to work with critical industrial
              systems.
            </p>

            <p>
              I'm currently looking for my first Junior
              DevOps Engineer position where I can
              contribute to real production environments
              while continuing to grow.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6 sm:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="mb-4 text-3xl font-bold text-blue-400">
              Kubernetes
            </h3>

            <div className="space-y-2 text-slate-300">
              <p>Microservices</p>
              <p>Helm Charts</p>
              <p>Deployments</p>
              <p>Services & Ingress</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="mb-4 text-3xl font-bold text-blue-400">
              IaC
            </h3>

            <div className="space-y-2 text-slate-300">
              <p>Terraform</p>
              <p>AWS</p>
              <p>Infrastructure as Code</p>
              <p>Automation</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="mb-4 text-3xl font-bold text-blue-400">
              CI/CD
            </h3>

            <div className="space-y-2 text-slate-300">
              <p>GitHub Actions</p>
              <p>GitLab CI</p>
              <p>Deployment Pipelines</p>
              <p>Docker Builds</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="mb-4 text-3xl font-bold text-blue-400">
              Observability
            </h3>

            <div className="space-y-2 text-slate-300">
              <p>Prometheus</p>
              <p>Grafana</p>
              <p>Loki</p>
              <p>Centralized Logging</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
