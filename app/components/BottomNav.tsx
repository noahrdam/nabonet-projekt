import { Link, useLocation } from "react-router";
import { Home, Package, MessageCircle, Info, CircleUserRound } from "lucide-react";

const NAV_ITEMS = [
  { icon: Home, label: "Hjem", path: "/" },
  { icon: Package, label: "Ressourcer", path: "/ressources" },
  { icon: MessageCircle, label: "Chat", path: "/chat" },
  { icon: Info, label: "Information", path: "/information" },
  { icon: CircleUserRound, label: "Profil", path: "/profil" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav
      className={[
        "fixed z-40 bg-[#EFEDE4] flex items-center",
        // Mobile: horizontal bottom bar
        "bottom-0 left-0 right-0 h-16 flex-row justify-around border-t border-gray-200 px-2",
        // Desktop: vertical left sidebar
        "md:top-0 md:bottom-0 md:right-auto md:h-screen md:w-20 md:flex-col md:justify-start md:pt-10 md:gap-1 md:border-r md:border-t-0 md:px-0",
      ].join(" ")}
    >
      {NAV_ITEMS.map(({ icon: Icon, label, path }) => {
        const isActive =
          path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

        return (
          <Link
            key={path}
            to={path}
            aria-label={label}
            className={[
              "flex flex-col items-center justify-center gap-1 rounded-lg transition-colors",
              // Mobile: square touch target
              "w-12 h-12",
              // Desktop: full-width tall item
              "md:w-full md:h-14",
              isActive ? "text-[#98451B]" : "text-[#343434] hover:text-[#98451B]",
            ].join(" ")}
          >
            <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
            {/* Label visible only on desktop sidebar */}
            <span className="hidden md:block text-[10px] font-medium leading-none">
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
