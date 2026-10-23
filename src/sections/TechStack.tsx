import TechCard from "../components/TechCard";

const categories = [
  {
    title: "☁️ Cloud & AWS",
    items: ["AWS", "EC2", "VPC", "IAM", "RDS", "ALB", "Auto Scaling"],
  },
  {
    title: "🏗️ Infrastructure as Code",
    items: ["Terraform", "Infrastructure as Code"],
  },
  {
    title: "🐳 Containers & Orchestration",
    items: ["Docker", "Docker Compose", "Kubernetes", "Minikube", "Helm"],
  },
  {
    title: "⚙️ CI/CD & Automation",
    items: [
      "GitHub Actions",
      "GitLab CI/CD",
      "Self-Hosted Runner",
      "Automated Testing",
      "Helm Lint",
    ],
  },
  {
    title: "🔐 DevSecOps",
    items: [
      "Gitleaks",
      "OSV-Scanner",
      "Trivy",
      "Dependency Scanning",
      "Container Image Scanning",
    ],
  },
  {
    title: "🐍 Backend & APIs",
    items: ["Python", "FastAPI", "Flask", "REST APIs", "JWT", "Microservices"],
  },
  {
    title: "🗄️ Databases & Storage",
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "MinIO"],
  },
  {
    title: "📨 Messaging",
    items: ["RabbitMQ", "Asynchronous Processing"],
  },
  {
    title: "📊 Monitoring & Logging",
    items: ["Prometheus", "Grafana", "Loki", "Grafana Alloy"],
  },
  {
    title: "🐧 Linux & Networking",
    items: [
      "Linux",
      "Bash",
      "Nginx",
      "Reverse Proxy",
      "Load Balancing",
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
    ],
  },
  {
    title: "🤖 AI & Speech Processing",
    items: ["Faster-Whisper", "Ollama", "Speech-to-Text", "AI Text Processing"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-8 py-24 text-white">
      <div className="mb-16 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
          Technical Skills
        </span>

        <h2 className="mt-8 text-5xl font-bold">Tech Stack</h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
          Technologies and tools used to build containerized applications,
          automate CI/CD pipelines, secure container images, and operate
          Kubernetes-based platforms with monitoring and centralized logging.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <TechCard
            key={category.title}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </section>
  );
}
