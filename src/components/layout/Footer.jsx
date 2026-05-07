import { Zap, ArrowRight, ExternalLink } from "lucide-react";

function SocialIcon({ label, href, letter }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-8 h-8 rounded-lg border border-border text-muted hover:text-brand hover:border-brand/30 hover:bg-brand-50 flex items-center justify-center text-[11px] font-bold transition-all duration-150"
    >
      {letter}
    </a>
  );
}

const FOOTER_LINKS = {
  Product:  ["Courses", "Categories", "Instructors", "Pricing", "Enterprise"],
  Company:  ["About", "Blog", "Careers", "Press", "Partners"],
  Support:  ["Help Center", "Contact", "Privacy", "Terms", "Cookie Policy"],
};

const SOCIALS = [
  { label: "Twitter",  href: "#", letter: "𝕏" },
  { label: "GitHub",   href: "#", letter: "GH" },
  { label: "LinkedIn", href: "#", letter: "in" },
  { label: "YouTube",  href: "#", letter: "▶" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">

          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
                <Zap size={15} className="text-white" strokeWidth={2.5} fill="white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-[15px] text-ink tracking-tight leading-none">Frontlines</span>
                <span className="text-[10px] font-semibold text-brand tracking-widest uppercase leading-none mt-0.5">Edutech</span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-6 max-w-[260px]">
              At Frontlines Edutech, we help you gain real-world skills through industry-focused learning. With expert trainers and practical training, you're prepared to shine in the tech world.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-semibold text-ink mb-2.5">Get weekly course updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Shubamkeshri@gmail.com."
                  className="flex-1 min-w-0 px-3.5 py-2 text-sm bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/40 transition-all"
                />
                <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand text-white text-sm font-semibold hover:bg-brand-dark active:scale-[0.97] transition-all duration-150 shrink-0">
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-[11px] font-bold tracking-widest uppercase text-ink mb-4">{group}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted hover:text-brand transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/60 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted order-2 sm:order-1">
            © 2026 Frontlines Edutech. All rights reserved.
          </p>

          {/* Status badge */}
          <div className="flex items-center gap-1.5 order-1 sm:order-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-muted">Platform Status: Operational</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-1.5 order-3">
            {SOCIALS.map((s) => <SocialIcon key={s.label} {...s} />)}
          </div>
        </div>
      </div>
    </footer>
  );
}
