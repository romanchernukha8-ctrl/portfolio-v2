type FeatureItemProps = {
  text: string;
};

export default function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 transition-all duration-300 hover:border-blue-500 hover:bg-slate-800">
      <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>

      <span className="text-slate-200">
        {text}
      </span>
    </div>
  );
}
