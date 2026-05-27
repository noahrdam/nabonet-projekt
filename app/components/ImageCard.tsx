import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import type { ReactNode } from "react";

interface ImageCardProps {
  title: string;
  href?: string;
  extra?: ReactNode;
}

export default function ImageCard({ title, href, extra }: ImageCardProps) {
  const inner = (
    <div className="flex items-center gap-4 p-4 bg-[#EFEDE4] rounded-xl shadow-sm w-full h-[144px]">
      {/* Image placeholder */}
      <div className="w-24 h-24 bg-[#D9D9D9] rounded-lg flex-shrink-0" />

      {/* Title + optional extra content */}
      <div className="flex-1 min-w-0">
        <p className="text-lg font-bold text-black leading-tight">{title}</p>
        {extra && <div className="mt-1">{extra}</div>}
      </div>

      {/* Chevron */}
      <ChevronRight size={18} strokeWidth={1.5} className="text-[#343434] flex-shrink-0" />
    </div>
  );

  if (href) {
    return <Link to={href} className="block">{inner}</Link>;
  }
  return inner;
}
