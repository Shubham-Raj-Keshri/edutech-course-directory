import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, BookOpen, Bookmark, BookmarkCheck, PlayCircle } from "lucide-react";
import { CategoryBadge, TrendingBadge } from "../ui/Badge";
import { LEVEL_STYLES } from "../../constants/index";

export default function CourseCard({ course, index = 0 }) {
  const [bookmarked, setBookmarked] = useState(false);
  const { title, instructor, instructorRole, duration, category, rating, reviews, image, level, trending, modules, badge, format, cta } = course;
  const levelStyle = LEVEL_STYLES[level] ?? LEVEL_STYLES.Beginner;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay: index * 0.06 }}
      className="group bg-white rounded-3xl border border-border shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        <div className="absolute top-3 left-3">
          {trending ? <TrendingBadge /> : <CategoryBadge category={category} />}
        </div>

        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.88 }}
          onClick={() => setBookmarked(!bookmarked)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-xl backdrop-blur-sm border flex items-center justify-center shadow-sm transition-all duration-200 ${
            bookmarked
              ? "bg-brand border-brand/20 text-white"
              : "bg-white/90 border-white/50 text-muted hover:bg-white hover:text-brand hover:border-brand/25"
          }`}
        >
          {bookmarked ? <BookmarkCheck size={14} strokeWidth={2.5} /> : <Bookmark size={14} strokeWidth={2} />}
        </motion.button>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <PlayCircle size={22} className="text-brand" />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${levelStyle.dot}`} />
          <span className={`text-[11px] font-semibold tracking-wide ${levelStyle.color}`}>{level}</span>
        </div>

        <h3 className="font-display font-bold text-[15px] leading-snug tracking-tight text-ink mb-3 line-clamp-2 group-hover:text-brand transition-colors duration-200">
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-lg bg-brand text-white text-[10px] font-bold flex items-center justify-center shrink-0 select-none">
            {instructor.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-ink truncate leading-tight">{instructor}</p>
            {instructorRole && <p className="text-[10px] text-muted truncate leading-tight">{instructorRole}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-xs text-muted mb-4">
          <span className="flex items-center gap-1">
            <Star size={11} className="text-amber-400 fill-amber-400 shrink-0" />
            <span className="font-semibold text-ink">{rating}</span>
            <span>({reviews >= 1000 ? `${(reviews / 1000).toFixed(1)}k` : reviews})</span>
          </span>
          <span className="w-px h-3 bg-border shrink-0" />
          <span className="flex items-center gap-1">
            <Clock size={11} className="shrink-0" />
            {duration}
          </span>
          <span className="w-px h-3 bg-border shrink-0" />
          <span className="flex items-center gap-1">
            <BookOpen size={11} className="shrink-0" />
            {modules} modules
          </span>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-surface border border-border text-[10px] font-semibold text-muted">
            {badge}
          </span>
          <span className="text-[10px] text-muted">{format}</span>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-end">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand text-white text-xs font-semibold hover:bg-brand-dark hover:shadow-md hover:shadow-brand/20 transition-all duration-200"
          >
            {cta}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
