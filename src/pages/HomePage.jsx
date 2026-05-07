import useCourses from "../hooks/useCourses";
import HeroSection from "../components/course/HeroSection";
import FilterBar from "../components/course/FilterBar";
import FeaturedCourses from "../components/course/FeaturedCourses";

export default function HomePage() {
  const cs = useCourses();

  return (
    <div className="min-h-screen bg-surface">
      <HeroSection />

      <FilterBar
        search={cs.search}       setSearch={cs.setSearch}
        category={cs.category}   setCategory={cs.setCategory}
        minRating={cs.minRating} setMinRating={cs.setMinRating}
        sort={cs.sort}           setSort={cs.setSort}
        hasActiveFilters={cs.hasActiveFilters}
        clearFilters={cs.clearFilters}
      />

      <FeaturedCourses
        loading={cs.loading}
        error={cs.error}
        paginated={cs.paginated}
        page={cs.page}
        totalPages={cs.totalPages}
        setPage={cs.setPage}
        hasActiveFilters={cs.hasActiveFilters}
        clearFilters={cs.clearFilters}
        totalCount={cs.filtered.length}
      />
    </div>
  );
}
