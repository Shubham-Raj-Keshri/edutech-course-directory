import { CATEGORY_STYLES } from "../../constants/index";

export function CategoryBadge({ category }) {
  const style = CATEGORY_STYLES[category] ?? { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200" };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${style.bg} ${style.text} ${style.border}`}>
      {category}
    </span>
  );
}

export function TrendingBadge() {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-accent-50 text-accent-dark border border-accent/30">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      Trending
    </span>
  );
}
