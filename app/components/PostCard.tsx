import { ChevronRight } from "lucide-react";

interface PostCardProps {
  title: string;
  body: string;
  author?: string;
  date?: string;
  className?: string;
}

export default function PostCard({ title, body, author, date, className = "" }: PostCardProps) {
  return (
    <div className={`relative flex-shrink-0 w-[340px] h-[140px] bg-[#EFEDE4] rounded-xl shadow-md p-4 ${className}`}>
      {/* Chevron */}
      <ChevronRight
        size={20}
        strokeWidth={1.5}
        className="absolute top-4 right-3 text-[#343434]"
      />

      {/* Title + body */}
      <div className="pr-7">
        <h3 className="text-sm font-bold text-[#343434]">{title}</h3>
        <p className="text-xs font-medium text-[#343434] mt-1.5">{body}</p>
      </div>

      {/* Author + date at bottom */}
      {(author || date) && (
        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
          {author && <span className="text-[10px] font-light text-[#343434]">{author}</span>}
          {date && <span className="text-[10px] font-light text-[#343434]">{date}</span>}
        </div>
      )}
    </div>
  );
}
