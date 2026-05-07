import { motion } from "framer-motion";
import { SearchX, AlertTriangle, RefreshCw } from "lucide-react";

export function EmptyState({ onClear }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className="flex flex-col items-center justify-center py-20 text-center px-4"
    >
      <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-border flex items-center justify-center mb-4">
        <SearchX size={22} className="text-muted" />
      </div>
      <h3 className="font-display font-bold text-lg text-ink mb-1.5">
        No courses found
      </h3>
      <p className="text-muted text-sm max-w-[280px] leading-relaxed mb-5">
        We couldn't find any matching courses. Try adjusting your search or filters.
      </p>
      <button
        onClick={onClear}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border-strong text-sm font-medium text-ink hover:border-brand/40 hover:text-brand hover:bg-brand-50 active:scale-[0.98] transition-all duration-150"
      >
        Clear all filters
      </button>
    </motion.div>
  );
}

export function ErrorState({ onRetry }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className="flex flex-col items-center justify-center py-20 text-center px-4"
    >
      <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mb-4">
        <AlertTriangle size={22} className="text-red-500" />
      </div>
      <h3 className="font-display font-bold text-lg text-ink mb-1.5">
        Failed to load courses
      </h3>
      <p className="text-muted text-sm max-w-[280px] leading-relaxed mb-5">
        Something went wrong on our end. Please refresh and try again.
      </p>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand text-white text-sm font-semibold hover:bg-brand-dark active:scale-[0.98] transition-all duration-150"
      >
        <RefreshCw size={14} />
        Try again
      </button>
    </motion.div>
  );
}

export default EmptyState;
