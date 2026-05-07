import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ page, totalPages, setPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-1.5 mt-16">
      <button
        onClick={() => setPage((p) => p - 1)}
        disabled={page === 1}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-medium text-muted
                   hover:border-brand/30 hover:text-brand hover:bg-brand-50 disabled:opacity-35 disabled:cursor-not-allowed transition-all duration-150"
      >
        <ChevronLeft size={15} />
        Prev
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <motion.button
            key={p}
            onClick={() => setPage(p)}
            whileHover={{ scale: p === page ? 1 : 1.08 }}
            whileTap={{ scale: 0.94 }}
            className={`w-9 h-9 rounded-full text-sm font-semibold transition-all duration-150
              ${p === page
                ? "bg-brand text-white shadow-md shadow-brand/25"
                : "text-muted hover:text-brand hover:bg-brand-50 border border-transparent hover:border-brand/20"
              }`}
          >
            {p}
          </motion.button>
        ))}
      </div>

      <button
        onClick={() => setPage((p) => p + 1)}
        disabled={page === totalPages}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-medium text-muted
                   hover:border-brand/30 hover:text-brand hover:bg-brand-50 disabled:opacity-35 disabled:cursor-not-allowed transition-all duration-150"
      >
        Next
        <ChevronRight size={15} />
      </button>
    </div>
  );
}
