import {
  Globe,
  Shield,
  Monitor,
  Cpu,
} from "lucide-react";

import {
  SiKubernetes,
  SiRabbitmq,
  SiPostgresql,
  SiRedis,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

function Node({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex h-16 w-40 flex-col items-center justify-center rounded-xl border border-slate-700 bg-slate-950 transition-all hover:border-blue-500">
      <div className="mb-1 text-2xl text-blue-400">
        {icon}
      </div>

      <span className="text-xs font-semibold text-center">
        {title}
      </span>
    </div>
  );
}

function Line() {
  return (
    <div className="h-4 w-[2px] bg-blue-600 rounded-full" />
  );
}

export default function ArchitectureDiagram() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex flex-col items-center">

        <Node
          icon={<Globe size={24} />}
          title="Internet"
        />

        <Line />

        <Node
          icon={<SiKubernetes size={24} />}
          title="Ingress"
        />

        <Line />

        <Node
          icon={<Monitor size={24} />}
          title="Frontend"
        />

        <Line />

        <Node
          icon={<Shield size={24} />}
          title="API Gateway"
        />

        <div className="mt-5 flex items-start justify-center gap-8">

          <Node
            icon={<Shield size={24} />}
            title="Auth Service"
          />

          <div className="flex flex-col items-center">

            <Node
              icon={<SiRabbitmq size={24} />}
              title="RabbitMQ"
            />

            <Line />

            <Node
              icon={<Cpu size={24} />}
              title="AI Worker"
            />

          </div>

        </div>

        <div className="mt-5 grid grid-cols-3 gap-4">
                    <Node
            icon={<SiPostgresql size={24} />}
            title="PostgreSQL"
          />

          <Node
            icon={<SiRedis size={24} />}
            title="Redis"
          />

          <Node
            icon={<Cpu size={24} />}
            title="Ollama"
          />

        </div>

        <div className="my-6 h-px w-full bg-slate-700" />

        <div className="grid w-full grid-cols-2 gap-6">

          <div className="flex flex-col items-center gap-2">

            <Node
              icon={<SiPrometheus size={24} />}
              title="Prometheus"
            />

            <span className="text-blue-500 text-xl">↓</span>

            <Node
              icon={<SiGrafana size={24} />}
              title="Grafana"
            />

          </div>

          <div className="flex flex-col items-center gap-2">

            <Node
              icon={<Monitor size={24} />}
              title="Promtail"
            />

            <span className="text-blue-500 text-xl">↓</span>

            <Node
              icon={<Monitor size={24} />}
              title="Loki"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

