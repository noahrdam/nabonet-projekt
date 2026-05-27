import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Gå tilbage"
      className="w-7 h-7 flex items-center justify-center text-[#343434]"
    >
      <ArrowLeft size={22} strokeWidth={1.5} />
    </button>
  );
}
