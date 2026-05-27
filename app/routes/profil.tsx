import type { Route } from "./+types/home";
import { ChevronRight, ShieldCheck, UserRound, Settings } from "lucide-react";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
 return [{ title: "Profil – NaboNet" }];
}

const MENU_ITEMS = [
 { label: "Mine nabolag", href: "/profil/nabolag" },
 { label: "Mine opslag", href: "/profil/opslag" },
 { label: "Gemte guides", href: "/profil/gemte-guides" },
];

export default function Profil() {
 return (
 <div className="relative min-h-screen bg-[#EFEDE4] overflow-hidden ">
 {/* Decorative background user icon */}
 <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-6 text-[#343434] opacity-[0.06] pointer-events-none select-none">
 <UserRound size={380} strokeWidth={1} />
 </div>

 {/* Settings button */}
 <div className="absolute top-10 right-5">
 <button aria-label="Indstillinger" className="text-[#343434]">
 <Settings size={24} strokeWidth={1.5} />
 </button>
 </div>

 {/* Avatar + name */}
 <div className="flex flex-col items-center pt-16 pb-6 gap-3">
 <div className="w-[164px] h-[164px] rounded-full bg-[#D9D9D9]" />
 <div className="flex items-center gap-2">
 <span className="text-2xl font-bold text-[#343434]">Birgitte McPrep</span>
 <ShieldCheck size={22} strokeWidth={1.5} className="text-[#343434]" />
 </div>
 </div>

 {/* Menu items */}
 <div className="px-5 flex flex-col gap-px">
 {MENU_ITEMS.map(({ label, href }) => (
 <Link
 key={href}
 to={href}
 className="flex items-center justify-between h-11 py-2"
 >
 <span className="text-lg font-bold text-[#343434]">{label}</span>
 <ChevronRight size={18} strokeWidth={1.5} className="text-[#343434]" />
 </Link>
 ))}
 </div>

 {/* Log out button */}
 <div className="px-5 mt-6">
 <button className="w-full h-[55px] bg-[#98451B] text-white text-lg font-bold rounded-xl">
 Log ud
 </button>
 </div>

 </div>
 );
}
