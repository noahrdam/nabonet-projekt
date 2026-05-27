import type { Route } from "./+types/home";
import BackButton from "~/components/BackButton";

export function meta({}: Route.MetaArgs) {
 return [{ title: "Opret opslag – NaboNet" }];
}

export default function OpslagstavleOpret() {
 return (
 <div className="relative min-h-screen bg-[#EFEDE4] ">
 {/* Top bar */}
 <div className="flex items-center px-5 pt-10 pb-4">
 <BackButton />
 </div>

 {/* Form */}
 <form className="px-5 flex flex-col gap-5">
 <div>
 <label className="block text-lg font-bold text-black mb-1">Titel</label>
 <input
 type="text"
 className="w-full h-[42px] bg-[#EFEDE4] border border-[#D9D9D9] rounded-lg px-3 text-[#343434] text-sm"
 placeholder="Skriv en titel…"
 />
 </div>

 <div>
 <label className="block text-lg font-bold text-black mb-1">Tekst</label>
 <textarea
 rows={6}
 className="w-full bg-[#EFEDE4] border border-[#D9D9D9] rounded-lg px-3 py-2 text-[#343434] text-sm resize-none"
 placeholder="Beskriv dit opslag…"
 />
 </div>

 <div>
 <label className="block text-lg font-bold text-black mb-1">Kategori</label>
 <div className="flex items-center gap-2">
 <input
 type="text"
 className="flex-1 h-[42px] bg-[#EFEDE4] border border-[#D9D9D9] rounded-lg px-3 text-[#343434] text-sm"
 placeholder="Vælg kategori…"
 readOnly
 />
 </div>
 </div>

 <div>
 <label className="block text-lg font-bold text-black mb-1">Nabolag</label>
 <div className="flex items-center gap-2">
 <input
 type="text"
 className="flex-1 h-[42px] bg-[#EFEDE4] border border-[#D9D9D9] rounded-lg px-3 text-[#343434] text-sm"
 placeholder="Vælg nabolag…"
 readOnly
 />
 </div>
 </div>

 <button
 type="submit"
 className="w-[325px] mx-auto h-[55px] bg-[#8C957D] text-white text-lg font-bold rounded-xl mt-2"
 >
 Opret
 </button>
 </form>

 </div>
 );
}
