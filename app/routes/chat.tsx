import type { Route } from "./+types/home";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
 return [{ title: "Chat – NaboNet" }];
}

const CONVERSATIONS = [
 { id: 1, name: "Jens Ole Larsen", time: "tirsdag, 9:45", verified: true },
 { id: 2, name: "Micheal Wedel", time: "onsdag, 7:15", verified: true },
 { id: 3, name: "Susanne Jakobsen", time: "onsdag, 20:56", verified: true },
 { id: 4, name: "Lisa Damsgaard", time: "20 min siden", verified: true },
 { id: 5, name: "Per Thomsen", time: "tirsdag, 19:32", verified: false },
];

export default function Chat() {
 return (
 <div className="relative min-h-screen bg-[#EFEDE4] ">
 {/* Header spacer */}
 <div className="h-10" />

 {/* Search bar */}
 <div className="mx-5 mb-4 flex rounded-lg overflow-hidden">
 <input
 type="text"
 placeholder="Søg efter personer i dine nabolag"
 className="flex-1 h-[41px] bg-[#D9D9D9] px-3 text-xs text-[#343434]"
 />
 </div>

 {/* Conversation list */}
 <div className="flex flex-col">
 {CONVERSATIONS.map((conv) => (
 <Link
 key={conv.id}
 to={`/chat/${conv.id}`}
 className="flex items-center gap-3 px-5 h-[92px] bg-[#8C957D]"
 >
 {/* Avatar */}
 <div className="w-20 h-20 rounded-full bg-[#D9D9D9] flex-shrink-0" />

 {/* Name + verified */}
 <div className="flex-1 min-w-0">
 <div className="flex items-center gap-1">
 <span className="text-xl font-normal text-black truncate">{conv.name}</span>
 {conv.verified && (
 <ShieldCheck size={16} strokeWidth={1.5} className="text-[#343434] flex-shrink-0" />
 )}
 </div>
 </div>

 {/* Timestamp */}
 <span className="text-[10px] text-[#757575] flex-shrink-0">{conv.time}</span>
 </Link>
 ))}
 </div>

 </div>
 );
}
