import { Outlet } from "react-router";
import BottomNav from "~/components/BottomNav";

/**
 * App shell — wraps all authenticated/main app screens.
 *
 * Mobile  : BottomNav sits fixed at the bottom; content has pb-20 clearance.
 * Desktop : BottomNav becomes a fixed left sidebar (w-20); content shifts right
 *           with ml-20 and is centred at max-w-3xl for readability.
 */
export default function AppShell() {
  return (
    <div className="min-h-screen bg-[#EFEDE4]">
      <BottomNav />

      {/* Sidebar offset (desktop) + bottom-nav clearance (mobile) */}
      <div className="md:ml-20 pb-20 md:pb-0">
        {/* Readable max-width on wide screens */}
        <div className="w-full max-w-3xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
