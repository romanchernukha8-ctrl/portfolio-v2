import TechCard from "../components/TechCard";

const categories = [
  {
    title: "☁️ Cloud",
    items: ["AWS", "EC2", "VPC", "IAM", "RDS", "ALB", "Auto Scaling"],
  },
  {
    title: "🏗️ Infrastructure as Code",
    items: ["Terraform", "Infrastructure as Code"],
  },
  {
    title: "🐳 Containers",
    items: ["Docker", "Docker Compose", "Kubernetes", "Helm"],
  },
  {
    title: "⚙️ CI/CD",
    items: [
      "GitHub Actions",
      "GitLab CI/CD",
      "Self-Hosted Runner",
      "GitHub Releases",
    ],
  },
  {
    title: "🐍 Backend",
    items: [
      "Python",
      "FastAPI",
      "Flask",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "🗄️ Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Redis",
    ],
  },
  {
    title: "📨 Messaging",
    items: ["RabbitMQ"],
  },
  {
    title: "📊 Monitoring",
    items: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Promtail",
    ],
  },
  {
    title: "🌐 Infrastructure",
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
    title: "🤖 AI",
    items: [
      "Ollama",
      "SerpAPI",
      "AI Document Processing",
      "Microservices",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-7xl px-8 py-24 text-white"
    >
      <div className="mb-16 text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
          Professional Skills
        </span>

        <h2 className="mt-8 text-5xl font-bold">
          Tech Stack
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
          Technologies and tools I use to build cloud-native applications,
          automate infrastructure and deploy production-inspired platforms.
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
