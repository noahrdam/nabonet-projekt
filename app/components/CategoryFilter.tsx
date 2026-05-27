import { useState } from "react";
import { LayoutGrid, Carrot, Wrench, Pill, CircleHelp } from "lucide-react";

const CATEGORIES = [
  { icon: LayoutGrid, label: "Alle" },
  { icon: Carrot, label: "Mad & Drikke" },
  { icon: Wrench, label: "Værktøj" },
  { icon: Pill, label: "Medicin" },
  { icon: CircleHelp, label: "Andet" },
];

export default function CategoryFilter() {
  const [active, setActive] = useState("Alle");

  return (
    <div className="flex gap-4 overflow-x-auto pb-1 -mx-5 px-5 scrollbar-hide">
      {CATEGORIES.map(({ icon: Icon, label }) => {
        const isActive = active === label;
        return (
          <button
            key={label}
            onClick={() => setActive(label)}
            className="flex flex-col items-center gap-1 flex-shrink-0"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isActive ? "bg-[#98451B] text-white" : "text-[#343434]"
              }`}
            >
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <span className={`text-[8px] font-bold ${isActive ? "text-[#EFEDE4]" : "text-[#343434]"}`}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
