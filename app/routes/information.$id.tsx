import type { Route } from "./+types/home";
import BackButton from "~/components/BackButton";
import ImageCard from "~/components/ImageCard";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Artikel – NaboNet" }];
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function InformationArtikel() {
  return (
    <div className="relative min-h-screen bg-[#EFEDE4] pb-20">
      {/* Top bar */}
      <div className="flex items-center px-5 pt-10 pb-4">
        <BackButton />
      </div>

      {/* Article header card */}
      <div className="px-5 mb-5">
        <ImageCard title="Artikel 1" />
      </div>

      {/* Body text */}
      <div className="px-5 flex flex-col gap-5">
        <p className="text-base text-[#343434] leading-relaxed">{LOREM}</p>
        <p className="text-base text-[#343434] leading-relaxed">{LOREM}</p>
        <p className="text-base text-[#343434] leading-relaxed">{LOREM}</p>
      </div>

    </div>
  );
}
