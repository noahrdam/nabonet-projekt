import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "NaboNet" }];
}

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#EFEDE4] flex flex-col items-center justify-center gap-6">
      {/* Logo placeholder + brand name */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-[237px] h-[272px] bg-[#D9D9D9] rounded-2xl" />
        <h1 className="text-[56px] font-bold text-[#98451B] leading-none">NaboNet</h1>
      </div>

      {/* Tagline */}
      <p className="text-sm font-bold text-[#343434] tracking-widest uppercase">
        Krisefællesskab
      </p>

      {/* Proceed to onboarding */}
      <Link
        to="/onboarding"
        className="mt-4 px-8 h-[55px] bg-[#8C957D] text-white text-lg font-bold rounded-xl flex items-center justify-center"
      >
        Kom i gang
      </Link>
    </div>
  );
}
