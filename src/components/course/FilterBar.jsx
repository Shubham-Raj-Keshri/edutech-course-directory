import { Search, X } from "lucide-react";
import { CATEGORIES, SORT_OPTIONS, RATINGS } from "../../constants/index";

const chevronSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2.5'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

function NativeSelect({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white border border-border text-ink text-sm rounded-xl px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/40 transition-all duration-150 cursor-pointer appearance-none pr-8 min-w-[140px]"
      style={{ backgroundImage: chevronSvg, backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center" }}
    >
      {options.map((o) => (
        <option key={typeof o === "object" ? o.value : o} value={typeof o === "object" ? o.value : o}>
          {typeof o === "object" ? o.label : o}
        </option>
      ))}
    </select>
  );
}

export default function FilterBar({ search, setSearch, category, setCategory, minRating, setMinRating, sort, setSort, hasActiveFilters, clearFilters }) {
  return (
    <div className="sticky top-[62px] z-40 bg-white/90 backdrop-blur-md border-b border-border/60">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-2.5">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1 max-w-md">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, topics, instructors..."
              className="w-full pl-10 pr-9 py-2.5 text-sm bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/40 transition-all"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition-colors">
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <NativeSelect value={sort} onChange={setSort} options={SORT_OPTIONS} />
            <NativeSelect
              value={minRating}
              onChange={(v) => setMinRating(Number(v))}
              options={RATINGS.map((r) => ({ value: r.value, label: r.label }))}
            />
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border-strong text-sm font-medium text-muted hover:text-brand hover:border-brand/30 hover:bg-brand-50 transition-all duration-150"
              >
                <X size={13} />
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 ${
                category === cat
                  ? "bg-brand text-white border-brand shadow-sm shadow-brand/15"
                  : "bg-white text-muted border-border hover:border-brand/25 hover:text-brand hover:bg-brand-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
