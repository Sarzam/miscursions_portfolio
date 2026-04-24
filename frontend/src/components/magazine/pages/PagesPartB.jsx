import React, { forwardRef } from "react";
import PageShell from "../PageShell";
import { PROJECTS, ACHIEVEMENTS, LEADERSHIP, BRAND_STORY, BACK_COVER } from "../../../mock";
import { Trophy, Users, Sparkles, Heart, ArrowUpRight, Star } from "lucide-react";

export const ProjectsPage = forwardRef((props, ref) => (
  <PageShell ref={ref} number="07" kicker="Built By Hand" title="Selected Projects">
    <div className="grid grid-cols-1 gap-5">
      {PROJECTS.map((p) => (
        <article key={p.name} className="grid grid-cols-12 gap-4 border-b border-plum/25 pb-5 last:border-0">
          <div className="col-span-5 aspect-[4/3] overflow-hidden rounded-sm bg-plum/10 border border-plum/20">
            <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover hover:scale-[1.04] duration-700 ease-out" style={{ transitionProperty: "transform" }} />
          </div>
          <div className="col-span-7 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="smallcaps text-[10px] text-oxblood">{p.featureLine}</span>
              <span className="display text-3xl text-plum/50 leading-none">{p.stat}</span>
            </div>
            <h3 className="display text-2xl md:text-3xl text-ink leading-tight mt-1">{p.name}</h3>
            <p className="italic text-plum mt-1 text-sm">{p.tagline}</p>
            <p className="text-sm text-ink/80 mt-2 flex-1">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span key={t} className="text-[10px] smallcaps border border-plum/30 rounded-full px-2 py-0.5 text-plum">{t}</span>
              ))}
            </div>
            <div className="mt-2 smallcaps text-[10px] text-plum/60">{p.statLabel}</div>
          </div>
        </article>
      ))}
    </div>
  </PageShell>
));
ProjectsPage.displayName = "ProjectsPage";

export const AchievementsPage = forwardRef((props, ref) => (
  <PageShell ref={ref} number="08" kicker="Award Spread" title="Trophies & Telegrams" tone="plum">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {ACHIEVEMENTS.map((a, i) => (
        <div key={a.title} className="relative rounded-sm border border-cream/30 p-4 bg-plum/40">
          <div className="absolute -top-3 left-4 bg-cream text-plum text-[10px] smallcaps px-2 py-0.5">#{String(i + 1).padStart(2, "0")}</div>
          <div className="flex items-center gap-2 smallcaps text-[10px] text-cream/70 mt-2">
            <Trophy size={14} /> {a.year}
          </div>
          <h3 className="display text-xl md:text-2xl text-cream leading-tight mt-2">{a.title}</h3>
          <p className="text-cream/80 text-sm mt-1">{a.org}</p>
          <div className="mt-3 inline-flex items-center gap-1 text-[10px] smallcaps text-cream bg-cream/10 border border-cream/30 rounded-full px-2 py-0.5">
            <Star size={10} /> {a.weight}
          </div>
        </div>
      ))}
    </div>
    <p className="mt-4 display italic text-cream/90 text-base">
      “The prizes are nice. The pages that led to them are better.”
    </p>
  </PageShell>
));
AchievementsPage.displayName = "AchievementsPage";

export const LeadershipPage = forwardRef((props, ref) => (
  <PageShell ref={ref} number="09" kicker="Roles She Ran" title="Leading, In Plural">
    <div className="flex flex-col gap-5">
      {LEADERSHIP.map((l) => (
        <article key={l.org} className="grid grid-cols-12 gap-4 border-b border-plum/20 pb-4 last:border-0">
          <div className="col-span-4">
            <div className="smallcaps text-[10px] text-oxblood">{l.period}</div>
            <div className="display text-xl md:text-2xl text-plum leading-tight flex items-center gap-2"><Users size={16} /> {l.role}</div>
            <div className="italic text-plum/80 text-sm">{l.org}</div>
          </div>
          <div className="col-span-8 text-sm text-ink/85 leading-relaxed">{l.copy}</div>
        </article>
      ))}
    </div>
    <div className="mt-6 rounded-sm bg-mint/50 border border-plum/20 p-4 flex items-center gap-3">
      <Heart size={16} className="text-oxblood" />
      <p className="text-sm text-ink">Mentorship is a love language. Every room she runs, she tries to leave weirder than she found it.</p>
    </div>
  </PageShell>
));
LeadershipPage.displayName = "LeadershipPage";

export const BrandStoryPage = forwardRef((props, ref) => (
  <PageShell ref={ref} number="10" kicker={BRAND_STORY.kicker} title={BRAND_STORY.title} tone="oxblood">
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-8 space-y-4 text-cream/90">
        {BRAND_STORY.paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "display-serif text-2xl md:text-3xl italic text-cream" : "text-sm md:text-base leading-relaxed"}>{p}</p>
        ))}
        <p className="display text-xl md:text-2xl text-mint leading-snug pt-2 border-t border-cream/30">
          {BRAND_STORY.closer}
        </p>
      </div>
      <div className="col-span-12 md:col-span-4">
        <div className="smallcaps text-[10px] text-cream/70 mb-3">The Pillars</div>
        <div className="flex flex-wrap gap-2">
          {BRAND_STORY.pillars.map((pill) => (
            <span key={pill} className="display italic text-xl md:text-2xl text-cream border-b border-mint pb-1">{pill}</span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-cream/80 text-xs">
          <Sparkles size={14} /> miscursions is free to read, hard to leave.
        </div>
      </div>
    </div>
  </PageShell>
));
BrandStoryPage.displayName = "BrandStoryPage";

export const BackCoverPage = forwardRef((props, ref) => (
  <div ref={ref} className="relative overflow-hidden bg-ink text-cream grain">
    <img src={BACK_COVER.portrait} alt="Back cover portrait" className="absolute inset-0 h-full w-full object-cover opacity-60" />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
    <div className="relative z-10 h-full w-full p-8 md:p-12 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="smallcaps text-[11px] text-cream/80">Back Cover</span>
        <span className="smallcaps text-[11px] text-cream/80">{"miscursions \u00b7 No. 01"}</span>
      </div>
      <div>
        <p className="display text-4xl md:text-6xl leading-[0.95] text-cream">
          Be weird.
          <br /><span className="text-mint">Be useful.</span>
          <br /><span className="italic">Be unforgettable.</span>
        </p>
        <div className="mt-6 flex items-center justify-between">
          <a href="https://instagram.com/miscursions" target="_blank" rel="noreferrer" className="btn-editorial solid-plum border-cream">
            {BACK_COVER.cta} <ArrowUpRight size={14} />
          </a>
          <span className="smallcaps text-[10px] text-cream/60">End · Fin · To be continued</span>
        </div>
      </div>
    </div>
  </div>
));
BackCoverPage.displayName = "BackCoverPage";

export const OpeningCoverPage = forwardRef((props, ref) => (
  <div ref={ref} className="relative overflow-hidden paper grain">
    <div className="relative z-10 h-full w-full p-10 md:p-14 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="display text-plum text-3xl">miscursions<span className="text-oxblood">.</span></div>
        <div className="smallcaps text-[10px] text-plum/70">No. 01 · Vol. I</div>
      </div>
      <div>
        <div className="smallcaps text-[10px] text-oxblood">A Super Special Edition</div>
        <h1 className="display text-5xl md:text-7xl ink-grad leading-[0.9] mt-2">Open carefully.</h1>
        <p className="display italic text-plum text-2xl md:text-3xl mt-2">You are about to meet a person in full.</p>
      </div>
      <div className="flex items-center justify-between text-[10px] smallcaps text-plum/60">
        <span>Printed on the internet</span>
        <span>Turn the page →</span>
      </div>
    </div>
  </div>
));
OpeningCoverPage.displayName = "OpeningCoverPage";
