import type { Route } from "./+types/home";
import { useState } from "react";
import { Trash2, PencilLine } from "lucide-react";
import { Link } from "react-router";
import CategoryFilter from "~/components/CategoryFilter";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ressourcer – NaboNet" }];
}

const RESOURCES = [
  { id: 1, name: "Tun, 4 dåser", category: "Mad & Drikke" },
  { id: 2, name: "Vand, 20 liter", category: "Mad & Drikke" },
  { id: 3, name: "Panodil, 100 piller", category: "Medicin" },
  { id: 4, name: "Ipren, 100 piller", category: "Medicin" },
  { id: 5, name: "Powerbank", category: "Elektronik" },
  { id: 6, name: "Lommelygte", category: "Elektronik" },
];

const CATEGORIES_WITH_RESOURCES = ["Mad & Drikke", "Medicin", "Elektronik"];

export default function Ressources() {
  const [tab, setTab] = useState<"mine" | "alle">("mine");

  return (
    <div className="min-h-screen bg-[#EFEDE4]">
      <div className="h-10" />

      {/* Tabs */}
      <div className="mx-5 flex rounded-lg overflow-hidden border border-[#D9D9D9] mb-4">
        <button
          onClick={() => setTab("mine")}
          className={`flex-1 h-8 text-xs font-medium transition-colors ${
            tab === "mine" ? "bg-[#98451B] text-white" : "bg-[#D9D9D9] text-black"
          }`}
        >
          Mine ressourcer
        </button>
        <button
          onClick={() => setTab("alle")}
          className={`flex-1 h-8 text-xs font-medium transition-colors ${
            tab === "alle" ? "bg-[#98451B] text-white" : "bg-[#8C957D] text-black"
          }`}
        >
          Alle ressourcer
        </button>
      </div>

      {/* Search */}
      <div className="mx-5 flex rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="Søg ressource"
          className="flex-1 h-[41px] bg-[#D9D9D9] px-3 text-xs text-[#343434]"
        />
        <button className="w-20 h-[41px] bg-[#8C957D] text-white text-lg font-bold">
          Søg
        </button>
      </div>

      {/* Category filter */}
      <div className="px-5 mb-4">
        <CategoryFilter />
      </div>

      {/* Resource list — grouped by category, 2-col on desktop */}
      <div className="px-5 flex flex-col gap-6 pb-6">
        {CATEGORIES_WITH_RESOURCES.map((cat) => (
          <div key={cat}>
            <h2 className="text-lg font-bold text-black mb-2">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {RESOURCES.filter((r) => r.category === cat).map((resource) => (
                <Link
                  key={resource.id}
                  to={`/ressources/${resource.id}`}
                  className="flex items-center gap-3 bg-[#EFEDE4] h-[51px] px-3 shadow-sm rounded-lg"
                >
                  <div className="w-[34px] h-[34px] rounded-full bg-[#D9D9D9] flex-shrink-0" />
                  <span className="flex-1 text-lg font-bold text-black truncate">{resource.name}</span>
                  <button aria-label="Slet" className="p-1 text-[#343434]" onClick={(e) => e.preventDefault()}>
                    <Trash2 size={20} strokeWidth={1.5} />
                  </button>
                  <button aria-label="Rediger" className="p-1 text-[#343434]" onClick={(e) => e.preventDefault()}>
                    <PencilLine size={20} strokeWidth={1.5} />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add button */}
      <div className="px-5 pb-6">
        <Link
          to="/ressources/opret"
          className="flex items-center justify-center w-full h-[55px] bg-[#8C957D] text-white text-lg font-bold rounded-xl"
        >
          Tilføj ressource
        </Link>
      </div>
    </div>
  );
}