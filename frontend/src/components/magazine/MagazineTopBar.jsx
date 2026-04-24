import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, ArrowLeft } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const MagazineTopBar = ({ showBack = false }) => {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-cream/70 dark:bg-plum-700/50 border-b border-plum/15">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <Link to="/" className="flex items-center gap-1 text-xs smallcaps text-plum/80 hover:text-plum">
              <ArrowLeft size={14} /> Cover
            </Link>
          )}
          <Link to="/" className="display text-plum dark:text-cream text-xl tracking-tight">
            miscursions<span className="text-oxblood">.</span>
          </Link>
          <span className="hidden md:inline text-[10px] smallcaps text-plum/60 dark:text-cream/60 border border-plum/30 dark:border-cream/30 rounded-full px-2 py-0.5">
            Misbah Special Edition
          </span>
        </div>
        <nav className="flex items-center gap-4 text-[11px] smallcaps">
          <Link to="/" className={`hover:text-oxblood ${location.pathname === "/" ? "text-oxblood" : "text-plum/80 dark:text-cream/80"}`}>Cover</Link>
          <Link to="/issue" className={`hover:text-oxblood ${location.pathname === "/issue" ? "text-oxblood" : "text-plum/80 dark:text-cream/80"}`}>Issue</Link>
          <button onClick={toggle} className="ml-2 inline-flex items-center gap-1 text-plum/80 dark:text-cream/80 hover:text-oxblood">
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            <span className="hidden md:inline">{theme === "dark" ? "Day" : "Night"}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default MagazineTopBar;
