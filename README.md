# Frontlines Edutech — Course Directory

A premium EdTech course directory built with React, Vite, and Tailwind CSS. Inspired by the editorial design language of Linear, Vercel, and Stripe — focused on typography, spacing, and UX restraint over feature density.

<img width="1919" height="885" alt="image" src="https://github.com/user-attachments/assets/966c120b-de02-4c61-bf94-848d201f3516" />
<img width="1918" height="873" alt="image" src="https://github.com/user-attachments/assets/302a2ccf-0f80-4f2d-9a0e-d7c0b2321de7" />
<img width="1912" height="859" alt="image" src="https://github.com/user-attachments/assets/08edb5b9-9bc9-43d3-909b-6601831baf85" />
<img width="1910" height="880" alt="image" src="https://github.com/user-attachments/assets/d3a1fa3d-b425-4703-abc0-52d083cb910f" />
## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| HTTP | Axios (ready for API integration) |
| Fonts | Satoshi (headings) · Inter (body) |
| Data | Static JSON — `src/data/courses.js` |

## Features

- **Editorial hero** — oversized Satoshi typography with dot-grid texture and blur blobs
- **Sticky filter bar** — search, category pills, sort, rating with backdrop blur
- **Course grid** — 6 per page, stagger animation, image zoom on hover, bookmark toggle
- **Skeleton loading** — shimmer skeleton cards matching exact card structure
- **Empty state** — human-written copy with clear-filters action
- **Error state** — friendly error UI with retry button
- **Pagination** — prev/next + page numbers, disabled states, animated hover
- **Fully responsive** — tested at 375px, 425px, 768px, 1024px, 1440px
- **Debounced search** — 350ms debounce, searches title + instructor + category + tags

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

Runs at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── course/
│   │   ├── CourseCard.jsx       # Card with bookmark, hover, CTA
│   │   ├── FeaturedCourses.jsx  # Grid section with all states
│   │   ├── FilterBar.jsx        # Sticky search + filters
│   │   └── HeroSection.jsx      # Editorial hero banner
│   ├── layout/
│   │   ├── Navbar.jsx           # Sticky nav with mobile menu
│   │   └── Footer.jsx           # Footer with newsletter
│   └── ui/
│       ├── Badge.jsx            # CategoryBadge, TrendingBadge
│       ├── EmptyState.jsx       # Empty + Error states
│       ├── Pagination.jsx       # Page controls
│       └── SkeletonGrid.jsx     # Loading skeleton
├── constants/
│   └── index.js                 # Categories, sort options, styles
├── data/
│   └── courses.js               # 18 static courses
├── hooks/
│   └── useCourses.js            # Filter, sort, paginate logic
└── pages/
    └── HomePage.jsx             # Page composition
```

## Design Decisions

- **Satoshi** for headings — same font used by Linear and Framer, more editorial than Poppins
- **No prices or student counts** — replaced with `modules`, `badge`, `format` for a platform feel over marketplace feel
- **Single badge per card** — trending takes priority over category to reduce visual noise
- **Per-course CTA labels** — "Start Learning", "View Course", "Join Cohort", "Explore Path" vary by course type
- **Sticky filter bar** at `top-[62px]` — sits directly below the navbar, always accessible
- **Error state** wired to `useCourses` — ready for real API integration

## Deployment

```bash
npm run build
# Deploy the dist/ folder to Vercel, Netlify, or any static host
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

Built with care. Designed for developers.
