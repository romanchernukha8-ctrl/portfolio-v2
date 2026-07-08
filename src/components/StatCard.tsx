type Props = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: Props) {
  return (
    <div
      className="
      rounded-xl
      border
      border-slate-800
      bg-slate-900
      p-5
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-500
      hover:shadow-xl
      hover:shadow-blue-500/10
    "
    >
      <p className="text-4xl font-bold text-blue-400">{value}</p>

      <p className="mt-3 text-slate-400">{label}</p>
    </div>
  );
}
