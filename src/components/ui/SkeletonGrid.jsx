function SkeletonCard() {
  return (
    <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-md">
      <div className="h-48 bg-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <div className="h-3 w-16 bg-slate-100 rounded-full" />
        </div>
        <div className="space-y-1.5">
          <div className="h-4 w-full bg-slate-100 rounded-lg" />
          <div className="h-4 w-3/4 bg-slate-100 rounded-lg" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-slate-100 shrink-0" />
          <div className="space-y-1 flex-1">
            <div className="h-3 w-28 bg-slate-100 rounded" />
            <div className="h-2.5 w-36 bg-slate-100 rounded" />
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="h-3 w-14 bg-slate-100 rounded" />
          <div className="w-px h-3 bg-slate-100" />
          <div className="h-3 w-14 bg-slate-100 rounded" />
          <div className="w-px h-3 bg-slate-100" />
          <div className="h-3 w-16 bg-slate-100 rounded" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-24 bg-slate-100 rounded-md" />
          <div className="h-3 w-16 bg-slate-100 rounded" />
        </div>
        <div className="pt-3 border-t border-slate-100 flex justify-end">
          <div className="h-9 w-28 bg-slate-100 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default function SkeletonGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
}
