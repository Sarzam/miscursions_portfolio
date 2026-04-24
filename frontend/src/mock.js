// Mock data for miscursions — Misbah Shaikh portfolio
// This file will be replaced/augmented by backend integration later.

export const COVER_IMAGES = [
  "/cover/c1.jpeg",
  "/cover/c2.jpeg",
  "/cover/c3.jpeg",
  "/cover/c4.jpeg",
  "/cover/c5.jpeg",
];

export const ISSUE_META = {
  issueNumber: "No. 01",
  volume: "Vol. I",
  edition: "Misbah Special Edition",
  tagline: "Builder. Thinker. Creator.",
  date: "May 2026",
  price: "Priceless",
};

export const COVER_LINES = [
  "Tech Thursdays",
  "Math Mondays",
  "Fashion Fridays",
  "A Home For Young Weirdos",
  "Limited Edition",
  "Engineer, Builder, Founder",
  "Inside: The Miscursions Manifesto",
];

export const ABOUT = {
  headline: "Who is Misbah Shaikh?",
  dek: "Engineer by degree. Builder by instinct. Storyteller by accident.",
  body: "I build systems, brands, ideas, and sometimes chaos. I live where math meets mascara, where routing protocols meet runway posters. I am currently writing software at Cisco, studying Computer Science at NIT Surat, and building miscursions — a home for young weirdos who love more than one thing.",
  facts: [
    { label: "Based in", value: "India" },
    { label: "Currently", value: "Cisco Intern" },
    { label: "School", value: "NIT Surat" },
    { label: "Founder of", value: "miscursions" },
  ],
  pullquote: "I refuse to be one thing. I plan to be all of them well.",
};

export const SOCIALS = [
  { platform: "Instagram", handle: "@miscursions", url: "https://instagram.com/miscursions", icon: "instagram" },
  { platform: "X (Twitter)", handle: "@miscursions", url: "https://x.com/miscursions", icon: "twitter" },
  { platform: "YouTube", handle: "@miscursions", url: "https://youtube.com/@miscursions", icon: "youtube" },
  { platform: "Medium", handle: "@miscursions", url: "https://medium.com/@miscursions", icon: "medium" },
  { platform: "LinkedIn", handle: "Misbah Shaikh", url: "https://linkedin.com/in/misbahsrshaikh", icon: "linkedin" },
  { platform: "GitHub", handle: "misbahshaikh", url: "https://github.com/Sarzam", icon: "github" },
];

export const EDUCATION = [
  {
    school: "National Institute of Technology, Surat",
    degree: "B.Tech, Computer Science & Engineering",
    cgpa: "8.72 / 10",
    period: "2022 — July 2026",
    note: "Dean's List. Chairperson of Nexus. Relentless builder.",
    tag: "ONGOING",
  },
  {
    school: "IBM Quantum",
    degree: "Diploma, Quantum Computing",
    cgpa: "Merit Scholarship Recipient",
    period: "2024",
    note: "Selected for merit scholarship into the IBM Quantum curriculum.",
    tag: "COMPLETED",
  },
];

export const EXPERIENCE = [
  {
    company: "Cisco Systems, Inc.",
    role: "Technical Intern",
    period: "2025 — Present",
    location: "India",
    highlights: [
      "Engineered Python automation frameworks validating routing protocols across 40+ network topologies.",
      "Built SSH + gRPC tooling that cut regression cycles by 38% across two product lines.",
      "Containerized an inventory system improving infrastructure reliability and observability.",
      "Shipped pipelines used daily by engineers in three time zones.",
    ],
    kicker: "THE BIG BREAK",
  },
  {
    company: "Indian Institute of Science, Bangalore",
    role: "Program Mentor",
    period: "Summer 2024",
    location: "Bangalore",
    highlights: [
      "Led a 36-member research cohort exploring Reed–Solomon code optimization.",
      "Drove a 25% improvement in decoding performance against the baseline.",
      "Translated dense research into weekly readable briefings and demos.",
    ],
    kicker: "RESEARCH ON THE RECORD",
  },
];

export const PROJECTS = [
  {
    name: "Ecobin",
    tagline: "The dustbin that reads your trash.",
    description: "A Raspberry Pi-powered smart dustbin using computer vision to segregate waste in real time with 81.6% accuracy. Built to move from intent to infrastructure.",
    stack: ["Raspberry Pi", "Python", "TensorFlow", "OpenCV"],
    stat: "81.6%",
    statLabel: "segregation accuracy",
    image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHJlY3ljbGluZyUyMHN1c3RhaW5hYmlsaXR5JTIwdGVjaHxlbnwwfHx8fDE3NzcwNDIxODJ8MA&ixlib=rb-4.1.0&q=85",
    featureLine: "FEATURED",
  },
  {
    name: "Mudberry Studio",
    tagline: "Pottery, but make it a website worth visiting.",
    description: "A responsive storefront and booking experience for a local pottery studio. Elegant, tactile, and wildly practical — bookings climbed 25% in the first quarter.",
    stack: ["React", "Tailwind", "Node", "Stripe"],
    stat: "+25%",
    statLabel: "studio bookings",
    image: "https://images.pexels.com/photos/28867385/pexels-photo-28867385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    featureLine: "COMMERCE",
  },
  {
    name: "One Shot Attendance",
    tagline: "Roll calls, retired.",
    description: "A facial recognition attendance system for classrooms and events, running lightweight on-device. 91.3% accuracy in uncontrolled lighting.",
    stack: ["Python", "OpenCV", "FaceNet", "FastAPI"],
    stat: "91.3%",
    statLabel: "recognition accuracy",
    image: "https://images.unsplash.com/photo-1776329255945-15212b50cd7f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjByZWNvZ25pdGlvbiUyMGJpb21ldHJpYyUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzc3MDQyMTkzfDA&ixlib=rb-4.1.0&q=85",
    featureLine: "APPLIED AI",
  },
];

export const ACHIEVEMENTS = [
  { title: "Runner-Up, DotSlash 8.0", org: "NIT Surat's flagship hackathon", year: "2024", weight: "Top 2 of 300+ teams" },
  { title: "Semi-Finalist, Google Girl Hackathon", org: "Google", year: "2024", weight: "Top 1% nationwide" },
  { title: "Grand Finalist, Smart India Hackathon", org: "Government of India", year: "2023", weight: "National Grand Final" },
  { title: "PROMYS Scholar", org: "Boston University", year: "2023", weight: "Accepted. Attended. Obsessed." },
];

export const LEADERSHIP = [
  { role: "Chairperson", org: "Nexus, NIT Surat", period: "2024 — Present", copy: "Leading a 60+ member student society bridging industry, research and campus culture." },
  { role: "Media Head", org: "Renesa", period: "2023 — 2024", copy: "Ran the entire brand + content stack for NIT Surat's cultural fest, reaching 40k+ students." },
  { role: "Contributor", org: "Girls Who Code", period: "2022 — Present", copy: "Mentoring the next wave of builders who also happen to love lipstick and linear algebra." },
];

export const BRAND_STORY = {
  title: "A Home For Young Weirdos",
  kicker: "THE MISCURSIONS MANIFESTO",
  paragraphs: [
    "miscursions exists for people who love more than one thing.",
    "For coders who love fashion. For engineers who write poetry. For the mathematician who edits Reels at 2 a.m. For the nerds who refuse to pick one label.",
    "We build a community around the things that refuse to fit: math, tech, fashion, creativity, startups, curiosity, and the small obsessions nobody asked you to have.",
  ],
  closer: "Because loving what you do is a privilege, and loving everything you do is a rebellion.",
  pillars: ["Math", "Tech", "Fashion", "Creativity", "Startups", "Curiosity"],
};

export const BACK_COVER = {
  quote: "Be weird. Be useful. Be unforgettable.",
  cta: "Follow @miscursions",
  portrait: "/cover/c2.jpeg",
};

export const EASTER_EGG = {
  title: "You found the secret page.",
  lines: [
    "Congratulations, reader. You flipped too hard.",
    "This is the margin scribble. The letter to self. The thing that didn't make the issue.",
    "Build stuff that embarrasses last-year-you. Fall in love with things that don't scale. Make the weird thing and ship it on a Thursday.",
    "— M."
  ],
  stamp: "UNOFFICIAL • LIMITED • YOURS"
};
