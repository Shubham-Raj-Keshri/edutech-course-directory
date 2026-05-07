import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import SkeletonGrid from "../ui/SkeletonGrid";
import { EmptyState, ErrorState } from "../ui/EmptyState";
import Pagination from "../ui/Pagination";

export default function FeaturedCourses({ loading, error, paginated, page, totalPages, setPage, hasActiveFilters, clearFilters, totalCount }) {
  return (
    <section id="courses" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand mb-2">
          Course Library
        </p>
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="font-display font-bold text-2xl sm:text-[28px] text-ink tracking-tight leading-tight">
            {hasActiveFilters ? "Search Results" : "All Courses"}
          </h2>
          {!hasActiveFilters && (
            <p className="text-muted text-sm">{totalCount} courses · 7 disciplines</p>
          )}
        </div>
      </div>

      {loading ? (
        <SkeletonGrid count={6} />
      ) : error ? (
        <ErrorState onRetry={() => window.location.reload()} />
      ) : paginated.length === 0 ? (
        <EmptyState onClear={clearFilters} />
      ) : (
        <>
          <motion.div
            key={`page-${page}`}
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {paginated.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </motion.div>
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
    </section>
  );
}
