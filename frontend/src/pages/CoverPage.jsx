import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowRight, Moon, Sun, Sparkles } from "lucide-react";
import { COVER_IMAGES, COVER_LINES, ISSUE_META } from "../mock";
import { useTheme } from "../context/ThemeContext";
import MagazineTopBar from "../components/magazine/MagazineTopBar";
import ReaderCounter from "../components/magazine/ReaderCounter";

const CoverPage = () => {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setIndex((i) => (i + 1) % COVER_IMAGES.length), 4800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden paper grain">
      <MagazineTopBar />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 pt-28 md:pt-24 pb-16">
        <div className="grid grid-cols-12 gap-6">
          {/* Left editorial rail */}
          <aside className="hidden md:flex col-span-2 flex-col gap-8 pt-10">
            <div className="smallcaps text-[11px] text-plum dark:text-cream">{ISSUE_META.issueNumber}</div>
            <div className="text-xs text-plum/70 dark:text-cream/70 leading-relaxed">
              {ISSUE_META.volume}<br />
              {ISSUE_META.date}<br />
              {ISSUE_META.price}
            </div>
            <div className="rule w-10 text-plum dark:text-cream" />
            <ul className="space-y-3 text-[11px] smallcaps text-plum/80 dark:text-cream/80">
              {COVER_LINES.slice(0, 4).map((l) => (
                <li key={l} className="leading-snug">{l}</li>
              ))}
            </ul>
          </aside>

          {/* Main cover column */}
          <section className="col-span-12 md:col-span-7 relative">
            <div className="flex items-end justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="display text-plum dark:text-cream text-3xl md:text-4xl tracking-tight">miscursions</span>
                <span className="smallcaps text-[10px] text-oxblood dark:text-mint/80 border border-oxblood/40 dark:border-mint/40 rounded-full px-2 py-0.5">{ISSUE_META.edition}</span>
              </div>
              <div className="hidden md:flex items-center gap-3 text-[11px] smallcaps text-plum/70 dark:text-cream/70">
                <span>MS · 01</span>
                <span>—</span>
                <span>{ISSUE_META.date}</span>
              </div>
            </div>

            {/* Cover image frame */}
            <div className="relative aspect-[4/5] md:aspect-[4/5] w-full overflow-hidden rounded-[4px] border border-plum/30 book-shadow bg-plum">
              <AnimatePresence mode="sync">
                <motion.img
                  key={index}
                  src={COVER_IMAGES[index]}
                  alt="Misbah Shaikh editorial cover"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1.01 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: "contrast(1.05) saturate(0.95)" }}
                />
              </AnimatePresence>

              {/* Top label strip */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 text-[10px] smallcaps text-cream/90">
                <span>MISCURSIONS · {ISSUE_META.issueNumber}</span>
                <span>A COLLECTOR'S EDITION</span>
              </div>

              {/* Headline overlay */}
              <div className="absolute left-0 right-0 bottom-0 p-5 md:p-8 flex flex-col gap-3">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="display text-cream text-[44px] leading-[0.9] md:text-[92px] md:leading-[0.85] drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
                >
                  Misbah
                  <br />
                  <span className="italic font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>Shaikh</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="smallcaps text-cream/90 text-[11px] md:text-xs"
                >
                  {ISSUE_META.tagline}
                </motion.p>
              </div>

              {/* Barcode + price */}
              <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 text-cream/80">
                <div className="flex items-end gap-[2px] h-8">
                  {Array.from({ length: 22 }).map((_, i) => (
                    <span key={i} style={{ width: (i % 3 === 0 ? 2 : 1) + "px", height: (i % 4 === 0 ? "100%" : "80%"), background: "#F5EFE3" }} />
                  ))}
                </div>
                <span className="text-[9px] josefin tracking-[0.3em]">MS · 2026 · 07</span>
              </div>

              {/* Side teaser */}
              <div className="absolute left-4 top-14 max-w-[180px] md:max-w-[220px]">
                <div className="inline-block px-2 py-1 text-[10px] smallcaps feature-pill">FEATURE</div>
                <p className="mt-2 text-cream display text-lg md:text-2xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  Inside the <span className="italic">Miscursions</span> Manifesto.
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/issue" className="btn-editorial solid-plum">
                <BookOpen size={16} /> Flip the Page
              </Link>
              <Link to="/issue" className="btn-editorial ghost">
                Read Issue <ArrowRight size={14} />
              </Link>
              <button onClick={toggle} className="btn-editorial ghost" aria-label="Toggle dark mode">
                {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />} {theme === "dark" ? "Day Edition" : "Night Edition"}
              </button>
            </div>
          </section>

          {/* Right editorial rail */}
          <aside className="hidden md:flex col-span-3 flex-col gap-4 pt-10">
            <div className="smallcaps text-[11px] text-oxblood dark:text-mint">Inside This Issue</div>
            <div className="rule w-10 text-oxblood dark:text-mint" />
            <ul className="space-y-4">
              {COVER_LINES.map((line, i) => (
                <li key={line} className="group">
                  <div className="flex items-baseline gap-3">
                    <span className="display text-2xl text-plum/40 dark:text-cream/30 group-hover:text-plum dark:group-hover:text-cream transition-colors">{String(i + 1).padStart(2, "0")}</span>
                    <span className="display text-xl md:text-2xl text-ink dark:text-cream leading-tight">{line}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center gap-2 text-plum/70 dark:text-cream/70 text-xs">
              <Sparkles size={14} /> Limited print run. Digital forever.
            </div>
          </aside>
        </div>

        {/* Marquee */}
        <div className="mt-14 border-y border-plum/25 dark:border-cream/25 py-3 overflow-hidden text-plum dark:text-cream">
          <div className="marquee-track smallcaps text-sm">
            {Array.from({ length: 2 }).map((_, k) => (
              <React.Fragment key={k}>
                {COVER_LINES.map((l) => (
                  <span key={l + k} className="px-6 flex items-center gap-6">
                    — {l} <span className="w-1 h-1 rounded-full bg-plum dark:bg-cream" />
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer meta */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs smallcaps text-plum/70 dark:text-cream/70">
          <div>© {new Date().getFullYear()} miscursions · Misbah Shaikh. A self-printed edition of a whole person.</div>
          <ReaderCounter />
        </div>

        {mounted && (
          <Link to="/secret-margin" className="fixed bottom-20 left-4 text-[10px] text-plum/40 dark:text-cream/40 hover:text-plum dark:hover:text-cream smallcaps" title="psst...">
            ·  ·DO NOT CLICK·  ·
          </Link>
        )}
      </div>
    </div>
  );
};

export default CoverPage;
