type TechCardProps = {
  title: string;
  items: string[];
};

export default function TechCard({ title, items }: TechCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
      <h3 className="mb-5 text-xl font-bold text-blue-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
