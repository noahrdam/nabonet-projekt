import type { Route } from "./+types/home";
import { Shield, ChevronRight, CircleArrowRight } from "lucide-react";
import { Link } from "react-router";
import PostCard from "~/components/PostCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NaboNet" },
    { name: "description", content: "Velkommen til dit digitale nabolag" },
  ];
}

const POSTS = [
  { id: 1, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", author: "Birgitte McPrep", date: "maj" },
  { id: 2, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", author: "Birgitte McPrep", date: "maj" },
  { id: 3, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", author: "Birgitte McPrep", date: "maj" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#EFEDE4] overflow-x-hidden">
      {/* Decorative background shield */}
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-6 text-[#343434] opacity-[0.06] pointer-events-none select-none">
        <Shield size={380} strokeWidth={1} />
      </div>

      {/* Header */}
      <header className="relative px-5 pt-10 pb-4">
        <h1 className="text-2xl font-bold text-[#343434]">Hej [Navn],</h1>
        <p className="text-lg text-[#343434]">Velkommen til dit digitale nabolag</p>
      </header>

      {/* Activity Section */}
      <section className="px-5 mt-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-black">Aktivitet i området</h2>
            <span className="bg-[#98451B] text-white text-[11px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center leading-none">
              4
            </span>
          </div>
          <Link to="/opslagstavle" className="flex items-center gap-0.5 text-xs font-medium text-black">
            Alle opslag
            <ChevronRight size={12} strokeWidth={2} />
          </Link>
        </div>

        {/* Mobile: horizontal scroll. Desktop: 2-column grid */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide md:overflow-x-visible md:mx-0 md:px-0 md:grid md:grid-cols-2 md:gap-4">
          {POSTS.map((post) => (
            <PostCard key={post.id} {...post} className="md:w-full" />
          ))}
        </div>
      </section>

      {/* Guides Section */}
      <section className="px-5 mt-6 pb-6">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-lg font-bold text-[#343434] leading-tight max-w-[220px]">
            Sådan bruger du en generator
          </h2>
          <Link to="/information" className="flex items-center gap-0.5 text-xs font-medium text-black shrink-0 mt-1">
            Alle guides
            <ChevronRight size={12} strokeWidth={2} />
          </Link>
        </div>

        {/* Guide card — taller on desktop */}
        <div className="relative rounded-[18px] overflow-hidden bg-black h-[198px] md:h-[260px]">
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#EFEDE4]" />
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-3">
          <button aria-label="Forrige guide">
            <CircleArrowRight size={36} strokeWidth={1.5} className="text-[#343434] rotate-180" />
          </button>
          <button aria-label="Næste guide">
            <CircleArrowRight size={36} strokeWidth={1.5} className="text-[#343434]" />
          </button>
        </div>
      </section>
    </div>
  );
}