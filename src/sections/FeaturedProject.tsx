import FeatureItem from "../components/FeatureItem";

const features = [
  "FastAPI Microservices",
  "Docker Compose",
  "Kubernetes & Minikube",
  "Helm Charts & Deployments",
  "GitHub Actions CI/CD",
  "Gitleaks Secret Scanning",
  "OSV-Scanner Dependency Scanning",
  "Trivy Container Image Scanning",
  "Automated Testing with pytest",
  "RabbitMQ Message Queue",
  "PostgreSQL, Redis & MinIO",
  "Prometheus & Grafana Monitoring",
  "Loki Centralized Logging",
  "Grafana Alloy",
  "Persistent Volumes & Health Probes",
];

export default function FeaturedProject() {
  return (
    <section
      id="project"
      className="mx-auto max-w-[1600px] px-8 py-32 text-white"
    >
      <div className="mb-8">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
          Featured Project
        </span>
      </div>

      <h2 className="mb-6 text-5xl font-bold">
        AI Voice Transcriber
      </h2>

      <p className="mb-6 max-w-4xl text-xl leading-9 text-slate-300">
        A containerized AI platform that converts audio recordings into text
        using Faster-Whisper and processes transcripts with Ollama. Built with
        FastAPI microservices, asynchronous messaging, persistent storage,
        automated testing, security scanning, and local Kubernetes deployment.
      </p>

      <p className="mb-10 max-w-4xl text-lg leading-8 text-slate-400">
        The CI/CD pipeline runs tests and security checks, builds container
        images, and validates the Helm chart. The platform runs locally with
        Docker Compose and Minikube, with monitoring through Prometheus and
        Grafana and centralized logging using Loki and Grafana Alloy.
      </p>

      <div className="mb-14 flex flex-wrap gap-4">
        <a
          href="https://github.com/romanchernukha8-ctrl/ai-voice-transcriber"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
        >
          GitHub Repository
        </a>

        <a
          href="https://github.com/romanchernukha8-ctrl/ai-voice-transcriber/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
        >
          Documentation
        </a>

        <a
          href="https://github.com/romanchernukha8-ctrl"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
        >
          More Projects on GitHub
        </a>

        <span className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 font-semibold text-emerald-400">
          Completed · v1.0
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <FeatureItem key={feature} text={feature} />
        ))}
      </div>
    </section>
  );
}
