import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Feather } from "lucide-react";
import { EASTER_EGG } from "../mock";
import MagazineTopBar from "../components/magazine/MagazineTopBar";

const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

const EasterEggPage = () => {
  const [sealed, setSealed] = useState(true);
  const [combo, setCombo] = useState([]);

  useEffect(() => {
    const onKey = (e) => {
      setCombo((prev) => {
        const next = [...prev, e.key].slice(-konami.length);
        if (next.join(",") === konami.join(",")) {
          setSealed(false);
        }
        return next;
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative min-h-screen paper grain overflow-hidden">
      <MagazineTopBar showBack />
      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-24 md:pt-28 pb-16">
        <Link to="/" className="inline-flex items-center gap-1 smallcaps text-[10px] text-plum/70 hover:text-oxblood">
          <ArrowLeft size={12} /> Back to Cover
        </Link>
        <div className="mt-8 smallcaps text-[10px] text-oxblood">Unlisted · Off The Record</div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display text-4xl md:text-6xl ink-grad leading-[0.95] mt-2"
        >
          {EASTER_EGG.title}
        </motion.h1>
        <div className="rule-thick mt-3 w-14 bg-oxblood" />
        <div className="mt-6 space-y-4 text-ink/90 text-[15px] leading-relaxed">
          {EASTER_EGG.lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              className={i === 0 ? "display-serif italic text-xl text-oxblood" : ""}
            >
              {l}
            </motion.p>
          ))}
        </div>

        <div className="mt-10 border border-plum/30 rounded-sm p-5 bg-cream/40">
          <div className="smallcaps text-[10px] text-plum/70 mb-2 flex items-center gap-2"><Feather size={12} /> Seal of the margin</div>
          <p className="display text-xl text-plum">{EASTER_EGG.stamp}</p>
          {sealed ? (
            <p className="mt-3 text-xs text-plum/70">Whisper the Konami code on your keyboard to break the seal. (↑↑↓↓←→←→ B A)</p>
          ) : (
            <p className="mt-3 display italic text-oxblood text-xl">You broke the seal. Now go make the weird thing.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EasterEggPage;
