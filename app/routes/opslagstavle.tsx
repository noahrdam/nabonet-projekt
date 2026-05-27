import type { Route } from "./+types/home";
import { Newspaper, Plus } from "lucide-react";
import { Link } from "react-router";
import PageHeader from "~/components/PageHeader";
import PostCard from "~/components/PostCard";
import CategoryFilter from "~/components/CategoryFilter";
import BackButton from "~/components/BackButton";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Opslagstavle – NaboNet" }];
}

const POSTS = [
  { id: 1, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", author: "Birgitte McPrep", date: "maj" },
  { id: 2, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", author: "Birgitte McPrep", date: "maj" },
  { id: 3, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", author: "Birgitte McPrep", date: "maj" },
  { id: 4, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", author: "Birgitte McPrep", date: "maj" },
];

export default function Opslagstavle() {
  return (
    <div className="relative min-h-screen bg-[#EFEDE4]">
      {/* Decorative background icon */}
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-6 text-[#343434] opacity-[0.06] pointer-events-none select-none">
        <Newspaper size={380} strokeWidth={1} />
      </div>

      {/* Back button */}
      <div className="flex items-center px-5 pt-10 pb-0">
        <BackButton />
      </div>

      <PageHeader
        title="Opslagstavle"
        subtitle="Her finder du opslag fra dine naboer"
      />

      {/* Category filter */}
      <div className="px-5 mb-4">
        <CategoryFilter />
      </div>

      {/* 1-col on mobile, 2-col on desktop */}
      <section className="px-5 grid grid-cols-1 md:grid-cols-2 gap-3 pb-6">
        {POSTS.map((post) => (
          <PostCard key={post.id} {...post} className="w-full" />
        ))}
      </section>

      {/* FAB — create new post */}
      <Link
        to="/opslagstavle/opret"
        aria-label="Opret nyt opslag"
        className="fixed bottom-20 md:bottom-6 right-5 w-10 h-10 bg-[#343434] text-white rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <Plus size={22} strokeWidth={2} />
      </Link>
    </div>
  );
}