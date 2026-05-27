import type { Route } from "./+types/home";
import BackButton from "~/components/BackButton";
import ImageCard from "~/components/ImageCard";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Gemte guides – NaboNet" }];
}

const SAVED_GUIDES = [
  { id: 1, title: "Artikel 1" },
  { id: 2, title: "Artikel 2" },
  { id: 3, title: "Artikel 3" },
];

export default function ProfilGemteGuides() {
  return (
    <div className="min-h-screen bg-[#EFEDE4]">
      <div className="flex items-center px-5 pt-10 pb-4">
        <BackButton />
      </div>

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

      {/* 1-col mobile, 2-col desktop */}
      <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-3">
        {SAVED_GUIDES.map((guide) => (
          <ImageCard
            key={guide.id}
            title={guide.title}
            href={`/information/${guide.id}`}
          />
        ))}
      </div>
    </div>
  );
}