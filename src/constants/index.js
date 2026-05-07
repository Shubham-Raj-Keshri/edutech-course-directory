export const CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Data Science",
  "Design",
  "DevOps",
  "Cloud",
  "Security",
];

export const SORT_OPTIONS = [
  { value: "default",      label: "Featured First" },
  { value: "name-asc",     label: "Name A–Z" },
  { value: "name-desc",    label: "Name Z–A" },
  { value: "rating-desc",  label: "Highest Rated" },
  { value: "rating-asc",   label: "Lowest Rated" },
];

export const RATINGS = [
  { value: 0,   label: "Any Rating" },
  { value: 4.5, label: "4.5 & above" },
  { value: 4.7, label: "4.7 & above" },
  { value: 4.8, label: "4.8 & above" },
];

export const COURSES_PER_PAGE = 6;

export const CATEGORY_STYLES = {
  Frontend:       { bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-200" },
  Backend:        { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Data Science": { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-200" },
  Design:         { bg: "bg-pink-50",    text: "text-pink-700",    border: "border-pink-200" },
  DevOps:         { bg: "bg-orange-50",  text: "text-orange-700",  border: "border-orange-200" },
  Cloud:          { bg: "bg-sky-50",     text: "text-sky-700",     border: "border-sky-200" },
  Security:       { bg: "bg-red-50",     text: "text-red-700",     border: "border-red-200" },
};

export const LEVEL_STYLES = {
  Beginner:     { color: "text-emerald-600", dot: "bg-emerald-400" },
  Intermediate: { color: "text-amber-600",   dot: "bg-amber-400" },
  Advanced:     { color: "text-brand",       dot: "bg-brand" },
};

export const NAV_LINKS = [
  { label: "Dashboard",  href: "#" },
  { label: "Courses",    href: "#courses", active: true },
  { label: "Categories", href: "#" },
  { label: "Insights",   href: "#" },
  { label: "Favorites",  href: "#" },
  { label: "Settings",   href: "#" },
];
