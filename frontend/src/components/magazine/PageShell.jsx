import React, { forwardRef } from "react";

// Forwarded ref wrapper used by react-pageflip for every spread page.
const PageShell = forwardRef(({ number, side = "right", kicker, title, children, dense = false, tone = "cream" }, ref) => {
  const toneClass =
    tone === "plum"
      ? "bg-plum text-cream"
      : tone === "oxblood"
      ? "bg-oxblood text-cream"
      : tone === "dark"
      ? "bg-ink text-cream"
      : "paper text-ink";

  const edgeClass = side === "left" ? "shadow-[inset_-12px_0_24px_-18px_rgba(0,0,0,0.4)]" : "shadow-[inset_12px_0_24px_-18px_rgba(0,0,0,0.4)]";

  return (
    <div ref={ref} className={`relative overflow-hidden ${toneClass} ${edgeClass} grain`}>
      <div className={`relative z-10 h-full w-full ${dense ? "p-6 md:p-8" : "p-8 md:p-12"} flex flex-col`}>
        {(kicker || title) && (
          <div className="mb-6">
            {kicker && <div className="smallcaps text-[10px] md:text-xs opacity-70">{kicker}</div>}
            {title && <h2 className="display text-3xl md:text-5xl leading-[0.95] mt-2">{title}</h2>}
            <div className="rule-thick mt-3 w-16 bg-current" />
          </div>
        )}
        <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
        <div className="mt-4 pt-3 border-t border-current/20 flex items-center justify-between text-[10px] smallcaps opacity-70">
          <span>miscursions · MS · 01</span>
          <span>{number}</span>
        </div>
      </div>
    </div>
  );
});

PageShell.displayName = "PageShell";
export default PageShell;
