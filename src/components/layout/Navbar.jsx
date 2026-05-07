import { useState } from "react";
import { Search, Bell, Menu, X, Zap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../constants/index";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[62px] gap-4">

          <a href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center group-hover:bg-brand-dark transition-colors duration-200">
              <Zap size={15} className="text-white" strokeWidth={2.5} fill="white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-[15px] text-ink tracking-tight leading-none">Frontlines</span>
              <span className="text-[10px] font-semibold text-brand tracking-widest uppercase leading-none mt-0.5">Edutech</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href, active }) => (
              <a
                key={label}
                href={href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  active ? "text-brand bg-brand-50 font-semibold" : "text-muted hover:text-ink hover:bg-surface"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-lg transition-all duration-150 ${
                searchOpen ? "bg-brand-50 text-brand" : "text-muted hover:text-ink hover:bg-surface"
              }`}
            >
              <Search size={18} />
            </button>

            <button className="relative p-2 rounded-lg text-muted hover:text-ink hover:bg-surface transition-all duration-150">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent ring-2 ring-white" />
            </button>

            <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl border border-border hover:border-brand/30 hover:bg-brand-50 transition-all duration-200 ml-1">
              <div className="w-7 h-7 rounded-lg bg-brand text-white text-[11px] font-bold flex items-center justify-center">
                AS
              </div>
              <span className="hidden sm:block text-sm font-medium text-ink">Aarav</span>
              <ChevronDown size={13} className="text-muted hidden sm:block" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-muted hover:text-ink hover:bg-surface transition-colors duration-150 lg:hidden ml-1"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border"
            >
              <div className="py-3 relative">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search courses, topics, instructors..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/40 transition-all"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="lg:hidden border-t border-border bg-white px-4 pb-3 pt-2 space-y-0.5"
          >
            {NAV_LINKS.map(({ label, href, active }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active ? "text-brand bg-brand-50" : "text-muted hover:text-ink hover:bg-surface"
                }`}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
