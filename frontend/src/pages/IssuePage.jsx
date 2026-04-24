import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import MagazineTopBar from "../components/magazine/MagazineTopBar";
import PageShell from "../components/magazine/PageShell";
import {
  MastheadPage,
  AboutPage,
  SocialsPage,
  EducationPage,
  ExperiencePage,
} from "../components/magazine/pages/PagesPartA";
import {
  ProjectsPage,
  AchievementsPage,
  LeadershipPage,
  BrandStoryPage,
  BackCoverPage,
  OpeningCoverPage,
} from "../components/magazine/pages/PagesPartB";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { toast } from "sonner";

const IssuePage = () => {
  const book = useRef(null);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState({ w: 520, h: 720 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const compute = () => {
      const vw = Math.min(window.innerWidth, 1400);
      const vh = window.innerHeight;
      const isMobile = vw < 820;
      const availableW = vw - (isMobile ? 24 : 96);
      const availableH = vh - 180;
      const pageW = isMobile ? availableW : Math.min(560, availableW / 2);
      const pageH = Math.min(availableH, pageW * 1.38);
      setSize({ w: Math.round(pageW), h: Math.round(pageH) });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  const total = 12; // front + 10 content + back

  const goPrev = () => book.current?.pageFlip()?.flipPrev();
  const goNext = () => book.current?.pageFlip()?.flipNext();

  const handleDownload = () => {
    toast("Resume PDF coming soon.", {
      description: "Misbah's signed-off PDF will live here. For now, flip on.",
    });
  };

  return (
    <div className="relative min-h-screen w-full paper grain overflow-hidden">
      <MagazineTopBar showBack />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-10 pt-20 md:pt-24 pb-10">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="smallcaps text-[10px] text-oxblood">Now Reading</div>
            <h1 className="display text-2xl md:text-4xl text-plum leading-tight">The Special Edition</h1>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={handleDownload} className="btn-editorial ghost">
              <Download size={14} /> Download Resume
            </button>
          </div>
        </div>

        {/* Book */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={goPrev}
            className="hidden md:flex absolute -left-2 z-20 w-10 h-10 rounded-full bg-plum text-cream items-center justify-center hover:bg-oxblood transition-colors duration-200 shadow-editorial"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            className="hidden md:flex absolute -right-2 z-20 w-10 h-10 rounded-full bg-plum text-cream items-center justify-center hover:bg-oxblood transition-colors duration-200 shadow-editorial"
            aria-label="Next page"
          >
            <ChevronRight size={18} />
          </button>

          {ready && (
            <HTMLFlipBook
              ref={book}
              width={size.w}
              height={size.h}
              size="fixed"
              minWidth={280}
              maxWidth={700}
              minHeight={380}
              maxHeight={1000}
              showCover={true}
              mobileScrollSupport={true}
              drawShadow={true}
              flippingTime={900}
              usePortrait={true}
              maxShadowOpacity={0.5}
              className="book-shadow"
              style={{}}
              startPage={0}
              useMouseEvents={true}
              clickEventForward={true}
              swipeDistance={30}
              showPageCorners={true}
              disableFlipByClick={false}
              onFlip={(e) => setPage(e.data)}
            >
              <OpeningCoverPage />
              <MastheadPage />
              <AboutPage />
              <SocialsPage />
              <EducationPage />
              <ExperiencePage />
              <ProjectsPage />
              <AchievementsPage />
              <LeadershipPage />
              <BrandStoryPage />
              <PageShell number="11" kicker="Margin Notes" title="Thank You For Reading" tone="cream">
                <div className="flex flex-col h-full justify-between">
                  <p className="display-serif italic text-2xl md:text-3xl text-plum leading-snug">
                    If you made it here, you are exactly the kind of reader miscursions is for — the ones who finish what they start and still want the footnotes.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="smallcaps text-[10px] text-plum/70">With love,</span>
                    <span className="display italic text-2xl text-oxblood">— Misbah</span>
                  </div>
                </div>
              </PageShell>
              <BackCoverPage />
            </HTMLFlipBook>
          )}
        </div>

        {/* Pager */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={goPrev} className="md:hidden btn-editorial ghost"><ChevronLeft size={14} /> Prev</button>
            <button onClick={goNext} className="md:hidden btn-editorial ghost">Next <ChevronRight size={14} /></button>
          </div>
          <div className="smallcaps text-[10px] text-plum/70 tabular-nums">Page {String(Math.min(page + 1, total)).padStart(2, "0")} / {total}</div>
          <button onClick={handleDownload} className="md:hidden btn-editorial ghost"><Download size={14} /> Resume</button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 text-[10px] smallcaps text-plum/60 border-t border-plum/20 pt-4">
          <span>Tip: swipe on mobile, or drag the page corners on desktop</span>
          <span>miscursions · A collector's edition</span>
        </div>
      </div>
    </div>
  );
};

export default IssuePage;
