import FeatureItem from "../components/FeatureItem";

const features = [
  "Kubernetes Microservices",
  "Helm Charts & Deployments",
  "GitHub Actions CI/CD",
  "JWT Authentication",
  "RabbitMQ Messaging",
  "PostgreSQL Storage",
  "Redis Caching",
  "Ollama AI Integration",
  "Prometheus Monitoring",
  "Grafana Dashboards",
  "Loki Centralized Logging",
  "Production-inspired Architecture",
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
        AI File Analysis Platform
      </h2>

      <p className="mb-10 max-w-4xl text-xl leading-9 text-slate-400">
        Production-inspired AI document processing platform built with
        Kubernetes-based microservices, asynchronous messaging,
        observability and infrastructure automation. Designed to
        demonstrate modern DevOps practices, scalable architecture and
        cloud-native deployment workflows.
      </p>

      <div className="mb-14 flex flex-wrap gap-4">

        <a
          href="https://github.com/romanchernukha8-ctrl/ai-file-analysis-platform"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
        >
          GitHub Repository
        </a>

        <a
          href="https://github.com/romanchernukha8-ctrl/ai-file-analysis-platform/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
        >
          Documentation
        </a>

        <a
          href="https://www.linkedin.com/posts/roman-chernukha-4052b63ba_devops-kubernetes-helm-activity-7479606282975420416-c0uS"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
        >
          LinkedIn Release
        </a>

        <span className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 font-semibold text-emerald-400">
          Version 1.0
        </span>

      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <FeatureItem
            key={feature}
            text={feature}
          />
        ))}
      </div>

    </section>
  );
}
