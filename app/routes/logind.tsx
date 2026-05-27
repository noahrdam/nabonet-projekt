import type { Route } from "./+types/home";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router";
import BackButton from "~/components/BackButton";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Log ind – NaboNet" }];
}

export default function Logind() {
  return (
    <div className="relative min-h-screen bg-[#EFEDE4] overflow-hidden">
      {/* Hero image placeholder — bottom 385px (image starts at y=489 in 874px frame) */}
      <div className="absolute bottom-0 left-0 right-0 h-[385px] bg-[#D9D9D9]" />

      {/* Content */}
      <div className="relative px-5">
        {/* Back button at y=66 */}
        <div className="pt-[66px]">
          <BackButton />
        </div>

        {/* Welcome text at y=139 */}
        <p className="mt-[7px] text-2xl font-normal text-[#343434] leading-snug">
          Velkommen til NaboNet
          <br />
          Log ind for at møde dit nabolag
        </p>

        {/* Form fields starting at y=204 */}
        <div className="mt-[9px] flex flex-col gap-0">
          {/* Email field */}
          <div className="h-[87px] flex flex-col justify-between pt-1 pb-1">
            <label className="text-xs text-black">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full h-[55px] bg-white rounded-xl px-4 pr-12 text-sm text-[#343434] outline-none"
                placeholder="din@email.dk"
              />
              <Mail
                size={20}
                strokeWidth={1.5}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#343434]"
              />
            </div>
          </div>

          {/* Password field */}
          <div className="h-[87px] flex flex-col justify-between pt-1 pb-1">
            <label className="text-xs text-black">Kodeord</label>
            <div className="relative">
              <input
                type="password"
                className="w-full h-[55px] bg-white rounded-xl px-4 pr-12 text-sm text-[#343434] outline-none"
                placeholder="••••••••"
              />
              <Lock
                size={20}
                strokeWidth={1.5}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#343434]"
              />
            </div>
          </div>
        </div>

        {/* Login button at y=721 — pushed down to sit on the image */}
        <div className="mt-[319px]">
          <Link
            to="/"
            className="flex items-center justify-center w-full h-[55px] bg-[#8C957D] text-white text-lg font-bold rounded-xl"
          >
            Logind
          </Link>
        </div>
      </div>
    </div>
  );
}
