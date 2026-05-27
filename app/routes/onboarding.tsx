import type { Route } from "./+types/home";
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Velkommen – NaboNet" }];
}

export default function Onboarding() {
  return (
    <div className="relative min-h-screen bg-[#EFEDE4] overflow-hidden">
      {/* Hero image placeholder — fills bottom 385px (matches Figma: image starts at y=489 of 874) */}
      <div className="absolute bottom-0 left-0 right-0 h-[385px] bg-[#D9D9D9]" />

      {/* Content — sits above the hero image in z-order */}
      <div className="relative px-5 pt-[139px] flex flex-col gap-0">

        {/* Welcome text */}
        <p className="text-2xl font-normal text-[#343434] leading-snug mb-0">
          Velkommen til NaboNet
          <br />
          Opret en profil for at møde dit nabolag
        </p>

        {/* Guide preview card — sits from y=229 to y=471 */}
        <div className="mt-[90px] flex flex-col gap-3">
          {/* Section title + nav arrows */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#343434]">Hjælp dine naboer</span>
            <div className="flex gap-2">
              <button aria-label="Forrige">
                <CircleArrowRight
                  size={40}
                  strokeWidth={1.5}
                  className="text-[#343434] rotate-180"
                />
              </button>
              <button aria-label="Næste">
                <CircleArrowRight size={40} strokeWidth={1.5} className="text-[#343434]" />
              </button>
            </div>
          </div>

          {/* Guide card */}
          <div className="relative rounded-[18px] overflow-hidden bg-black h-[198px]">
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#EFEDE4]" />
              ))}
            </div>
          </div>
        </div>

        {/* Buttons — at y=654 and y=721 in the Figma */}
        <div className="flex flex-col gap-4 mt-[116px]">
          <Link
            to="/logind"
            className="flex items-center justify-center w-full h-[55px] bg-[#8C957D] text-white text-lg font-bold rounded-xl"
          >
            Log ind
          </Link>
          <Link
            to="/opret-konto"
            className="flex items-center justify-center w-full h-[55px] bg-[#EFEDE4] text-[#8C957D] text-lg font-bold rounded-xl border border-[#8C957D]"
          >
            Opret konto
          </Link>
        </div>
      </div>
    </div>
  );
}
