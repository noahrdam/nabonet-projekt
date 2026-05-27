import type { Route } from "./+types/home";
import PageHeader from "~/components/PageHeader";
import ImageCard from "~/components/ImageCard";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Information – NaboNet" }];
}

const ARTICLES = [
  { id: 1, title: "Artikel 1" },
  { id: 2, title: "Artikel 2" },
  { id: 3, title: "Artikel 3" },
];

export default function Information() {
  return (
    <div className="min-h-screen bg-[#EFEDE4]">
      <PageHeader
        title="Information"
        subtitle="Her finder du vigtig information og guides"
      />

      {/* Search bar */}
      <div className="mx-5 flex rounded-lg overflow-hidden mb-5">
        <input
          type="text"
          placeholder="Søg artikel"
          className="flex-1 h-[41px] bg-[#D9D9D9] px-3 text-xs text-[#343434]"
        />
        <button className="w-20 h-[41px] bg-[#8C957D] text-white text-lg font-bold">
          Søg
        </button>
      </div>

      {/* 1-col on mobile, 2-col on desktop */}
      <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-3">
        {ARTICLES.map((article) => (
          <ImageCard
            key={article.id}
            title={article.title}
            href={`/information/${article.id}`}
          />
        ))}
      </div>
    </div>
  );
}