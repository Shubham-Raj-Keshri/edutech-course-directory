import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-border">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.38,
        }}
      />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-brand-50/60 via-brand-50/10 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-accent/4 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent-line" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-16 sm:pb-14 lg:pt-24 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent/25 text-accent-dark text-xs font-semibold tracking-wide mb-5 sm:mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          New courses added every week
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.07 }}
          className="font-display font-black leading-[0.9] tracking-tightest text-ink mb-5 sm:mb-6"
          style={{ fontSize: "clamp(48px, 8.5vw, 96px)" }}
        >
          BUILD
          <br />
          <span className="text-brand relative inline-block">
            BOLD
            <span className="absolute -bottom-1 left-0 right-0 h-[5px] rounded-full bg-accent/30 pointer-events-none" />
          </span>
          <br />
          SKILLS.
        </motion.h1>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, delay: 0.16 }}
            className="text-muted text-base sm:text-lg leading-[1.7] max-w-[500px]"
          >
            Build production-ready skills with curated learning experiences designed for modern developers and engineering teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 0.24 }}
            className="shrink-0"
          >
            <a
              href="#courses"
              className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-brand text-white text-sm font-semibold hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/20 active:scale-[0.98] transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Browse Courses
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
