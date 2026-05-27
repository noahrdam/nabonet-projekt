import type { Route } from "./+types/home";
import { Trash2, PencilLine, ChevronRight } from "lucide-react";
import BackButton from "~/components/BackButton";
import PageHeader from "~/components/PageHeader";

export function meta({}: Route.MetaArgs) {
 return [{ title: "Dine opslag – NaboNet" }];
}

const POSTS = [
 { id: 1, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", date: "maj" },
 { id: 2, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", date: "maj" },
 { id: 3, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", date: "maj" },
 { id: 4, title: "HJÆÆÆÆLP", body: "Hjælp lige jesper", date: "maj" },
];

export default function ProfilOpslag() {
 return (
 <div className="relative min-h-screen bg-[#EFEDE4] ">
 {/* Top bar */}
 <div className="flex items-center px-5 pt-10 pb-0">
 <BackButton />
 </div>

 <PageHeader
 title="Dine opslag"
 subtitle="Her finder du dine aktive opslag, hvor du kan redigere eller slette dem."
 />

 <div className="px-5 flex flex-col gap-3">
 {POSTS.map((post) => (
 <div
 key={post.id}
 className="relative bg-[#EFEDE4] rounded-xl shadow-md p-4 h-[140px]"
 >
 {/* Action icons */}
 <div className="absolute top-4 right-3 flex gap-2">
 <button aria-label="Slet" className="text-[#343434]">
 <Trash2 size={18} strokeWidth={1.5} />
 </button>
 <button aria-label="Rediger" className="text-[#343434]">
 <PencilLine size={18} strokeWidth={1.5} />
 </button>
 </div>

 <div className="pr-16">
 <h3 className="text-sm font-bold text-[#343434]">{post.title}</h3>
 <p className="text-xs font-medium text-[#343434] mt-1.5">{post.body}</p>
 </div>

 {/* Date + chevron at bottom */}
 <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
 <ChevronRight size={20} strokeWidth={1.5} className="text-[#343434]" />
 <span className="text-[10px] font-light text-[#343434]">{post.date}</span>
 </div>
 </div>
 ))}
 </div>

 </div>
 );
}
