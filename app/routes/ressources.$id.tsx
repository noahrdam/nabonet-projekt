import type { Route } from "./+types/home";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import BackButton from "~/components/BackButton";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ressource – NaboNet" }];
}

export default function RessourceDetalje() {
  return (
    <div className="relative min-h-screen bg-[#EFEDE4] pb-20">
      {/* Top bar */}
      <div className="flex items-center px-5 pt-10 pb-4">
        <BackButton />
      </div>

      <div className="px-5 flex flex-col gap-6">
        {/* Title */}
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-[#343434]">4 dåser tun</h1>
          <ChevronRight size={22} strokeWidth={1.5} className="text-[#343434]" />
        </div>

        {/* Divider */}
        <hr className="border-[#D9D9D9]" />

        {/* Description */}
        <div>
          <h2 className="text-lg font-bold text-black mb-1">Beskrivelse</h2>
          <p className="text-lg text-[#343434]">
            Jeg har 4 ekstra tun, som jeg gerne deler med nogen, der mangler.
          </p>
        </div>

        {/* Created by */}
        <div>
          <h2 className="text-lg font-bold text-black mb-2">Oprettet af</h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#D9D9D9] flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-black">Jonathan Lando</p>
              <p className="text-[10px] font-light text-[#343434]">maj</p>
            </div>
          </div>
        </div>

        {/* Send message button */}
        <Link
          to="/chat/1"
          className="flex items-center justify-center w-full h-[55px] bg-[#8C957D] text-white text-lg font-bold rounded-xl"
        >
          Send besked
        </Link>
      </div>

    </div>
  );
}
