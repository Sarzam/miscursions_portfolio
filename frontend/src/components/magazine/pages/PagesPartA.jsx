import React, { forwardRef } from "react";
import PageShell from "../PageShell";
import { ABOUT, COVER_LINES, EDUCATION, EXPERIENCE, ISSUE_META, SOCIALS } from "../../../mock";
import { Instagram, Twitter, Youtube, Linkedin, Github, BookOpen, ArrowUpRight, GraduationCap, Atom, Briefcase } from "lucide-react";

const iconFor = (key) => {
  const map = { instagram: Instagram, twitter: Twitter, youtube: Youtube, linkedin: Linkedin, github: Github, medium: BookOpen };
  return map[key] || ArrowUpRight;
};

export const MastheadPage = forwardRef((props, ref) => (
  <PageShell ref={ref} number="02" kicker="Table of Contents" title="The Issue">
    <div className="flex flex-col gap-4">
      {COVER_LINES.map((line, i) => (
        <div key={line} className="flex items-baseline justify-between gap-4 border-b border-plum/20 pb-3 group">
          <div className="flex items-baseline gap-3">
            <span className="display text-2xl text-plum/40">{String(i + 1).padStart(2, "0")}</span>
            <span className="display text-lg md:text-2xl text-ink">{line}</span>
          </div>
          <span className="smallcaps text-[10px] text-plum/60">p. {String((i + 1) * 2).padStart(2, "0")}</span>
        </div>
      ))}
    </div>
    <p className="mt-6 text-xs smallcaps text-plum/60">{ISSUE_META.edition} · {ISSUE_META.date}</p>
  </PageShell>
));
MastheadPage.displayName = "MastheadPage";

export const AboutPage = forwardRef((props, ref) => (
  <PageShell ref={ref} number="03" kicker="Feature · Profile" title={ABOUT.headline}>
    <p className="display-serif text-xl md:text-3xl italic text-oxblood mb-4 leading-tight">{ABOUT.dek}</p>
    <p className="dropcap text-[15px] md:text-base leading-relaxed text-ink">{ABOUT.body}</p>
    <div className="mt-6 grid grid-cols-2 gap-3">
      {ABOUT.facts.map((f) => (
        <div key={f.label} className="border border-plum/25 rounded-sm p-3">
          <div className="smallcaps text-[10px] text-plum/60">{f.label}</div>
          <div className="display text-lg text-ink">{f.value}</div>
        </div>
      ))}
    </div>
    <div className="mt-6 border-l-4 border-oxblood pl-4">
      <p className="display italic text-xl md:text-2xl text-plum leading-snug">“{ABOUT.pullquote}”</p>
    </div>
  </PageShell>
));
AboutPage.displayName = "AboutPage";

export const SocialsPage = forwardRef((props, ref) => (
  <PageShell ref={ref} number="04" kicker="Distribution" title="Where To Find Her" tone="plum">
    <p className="text-cream/80 text-sm md:text-base mb-6 max-w-md">
      She publishes in six places and three tones. Subscribe wherever feels like home.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {SOCIALS.map((s) => {
        const Icon = iconFor(s.icon);
        return (
          <a key={s.platform} href={s.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-sm border border-cream/30 px-4 py-3 hover:bg-cream hover:text-plum transition-colors duration-300">
            <div className="flex items-center gap-3">
              <Icon size={18} />
              <div>
                <div className="display text-lg leading-none">{s.platform}</div>
                <div className="text-[11px] opacity-70 smallcaps">{s.handle}</div>
              </div>
            </div>
            <ArrowUpRight size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        );
      })}
    </div>
    <p className="mt-6 text-[10px] smallcaps text-cream/60">Read widely · Reply often · Repost kindly</p>
  </PageShell>
));
SocialsPage.displayName = "SocialsPage";

export const EducationPage = forwardRef((props, ref) => (
  <PageShell ref={ref} number="05" kicker="Academia" title="The Receipts">
    <div className="flex flex-col gap-5">
      {EDUCATION.map((e, idx) => (
        <article key={e.school} className="relative border border-plum/25 rounded-sm p-5 bg-cream/40">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 smallcaps text-[10px] text-oxblood">
              {idx === 0 ? <GraduationCap size={14} /> : <Atom size={14} />}
              <span>{e.tag}</span>
            </div>
            <span className="smallcaps text-[10px] text-plum/70">{e.period}</span>
          </div>
          <h3 className="display text-2xl md:text-3xl leading-tight text-ink">{e.school}</h3>
          <p className="mt-1 italic text-plum">{e.degree}</p>
          <div className="mt-3 flex items-baseline gap-3">
            <span className="display text-4xl md:text-5xl ink-grad">{e.cgpa.split(" ")[0]}</span>
            <span className="smallcaps text-[10px] text-plum/70">{e.cgpa.includes("/") ? "out of 10.00" : "merit recognition"}</span>
          </div>
          <p className="mt-3 text-sm text-ink/80">{e.note}</p>
        </article>
      ))}
    </div>
  </PageShell>
));
EducationPage.displayName = "EducationPage";

export const ExperiencePage = forwardRef((props, ref) => (
  <PageShell ref={ref} number="06" kicker="Career Pages" title="Where She Worked" tone="oxblood">
    <div className="grid grid-cols-1 gap-4">
      {EXPERIENCE.map((x) => (
        <article key={x.company} className="border border-cream/30 rounded-sm p-4 bg-oxblood/60">
          <div className="flex items-center justify-between">
            <span className="smallcaps text-[10px] text-cream/80">{x.kicker}</span>
            <span className="smallcaps text-[10px] text-cream/80">{x.period} · {x.location}</span>
          </div>
          <h3 className="display text-xl md:text-2xl text-cream leading-tight mt-1.5">{x.company}</h3>
          <p className="italic text-cream/90 mt-0.5 text-sm flex items-center gap-2"><Briefcase size={14} /> {x.role}</p>
          <ul className="mt-2 space-y-1.5 text-[13px] text-cream/90">
            {x.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2 block w-2 h-[1.5px] bg-cream/70 flex-none" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </PageShell>
));
ExperiencePage.displayName = "ExperiencePage";
