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

  useEffect(() => { setPage(1); }, [debouncedSearch, category, minRating, sort]);

  const filtered = useMemo(() => {
    let result = [...courses];

    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (category !== "All") result = result.filter((c) => c.category === category);
    if (minRating > 0)      result = result.filter((c) => c.rating >= minRating);

    switch (sort) {
      case "name-asc":    result.sort((a, b) => a.title.localeCompare(b.title)); break;
      case "name-desc":   result.sort((a, b) => b.title.localeCompare(a.title)); break;
      case "rating-desc": result.sort((a, b) => b.rating - a.rating); break;
      case "rating-asc":  result.sort((a, b) => a.rating - b.rating); break;
      default:            result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
    }

    return result;
  }, [debouncedSearch, category, minRating, sort]);

  const totalPages = Math.ceil(filtered.length / COURSES_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * COURSES_PER_PAGE, page * COURSES_PER_PAGE);

  const hasActiveFilters = !!debouncedSearch || category !== "All" || minRating > 0 || sort !== "default";

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
