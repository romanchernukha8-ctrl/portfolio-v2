type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <span
      className="
      rounded-full
      border
      border-slate-700
      bg-slate-900/70
      px-4
      py-2
      text-sm
      font-medium
      text-slate-300
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-500
      hover:bg-slate-800
      hover:text-white
      hover:shadow-lg
      hover:shadow-blue-500/20
    "
    >
      {text}
    </span>
  );
}
