import { useState, useEffect, useMemo, useCallback } from "react";
import courses from "../data/courses";
import { COURSES_PER_PAGE } from "../constants/index";

function useDebounce(value, delay = 350) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

const SORTERS = {
  "name-asc":    (a, b) => a.title.localeCompare(b.title),
  "name-desc":   (a, b) => b.title.localeCompare(a.title),
  "rating-desc": (a, b) => b.rating - a.rating,
  "rating-asc":  (a, b) => a.rating - b.rating,
  "default":     (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0),
};

export default function useCourses() {
  const [search, setSearch]       = useState("");
  const [category, setCategory]   = useState("All");
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort]           = useState("default");
  const [page, setPage]           = useState(1);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(false);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, category, minRating, sort]);

  const filtered = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();

    const matches = courses.filter((c) => {
      if (q) {
        const inTitle      = c.title.toLowerCase().includes(q);
        const inInstructor = c.instructor.toLowerCase().includes(q);
        const inCategory   = c.category.toLowerCase().includes(q);
        const inTags       = c.tags?.some((tag) => tag.toLowerCase().includes(q)) ?? false;
        if (!inTitle && !inInstructor && !inCategory && !inTags) return false;
      }
      if (category !== "All" && c.category !== category) return false;
      if (minRating > 0 && c.rating < minRating) return false;
      return true;
    });

    const sorter = SORTERS[sort] ?? SORTERS.default;
    return [...matches].sort(sorter);
  }, [debouncedSearch, category, minRating, sort]);

  const totalPages = Math.ceil(filtered.length / COURSES_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * COURSES_PER_PAGE, page * COURSES_PER_PAGE);

  const hasActiveFilters = debouncedSearch.trim() !== "" || category !== "All" || minRating > 0 || sort !== "default";

  const clearFilters = useCallback(() => {
    setSearch("");
    setCategory("All");
    setMinRating(0);
    setSort("default");
  }, []);

  return {
    search, setSearch,
    category, setCategory,
    minRating, setMinRating,
    sort, setSort,
    page, setPage,
    loading, error,
    filtered, paginated,
    totalPages,
    hasActiveFilters,
    clearFilters,
  };
}
