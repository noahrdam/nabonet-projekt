import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  // ── Stand-alone screens (no app shell / no nav) ──────────────────────────
  route("loading", "routes/loading.tsx"),
  route("onboarding", "routes/onboarding.tsx"),
  route("logind", "routes/logind.tsx"),
  route("opret-konto", "routes/opret-konto.tsx"),

  // ── Main app (wrapped in AppShell with responsive nav) ───────────────────
  layout("layouts/app-shell.tsx", [
    index("routes/home.tsx"),

    route("opslagstavle", "routes/opslagstavle.tsx"),
    route("opslagstavle/opret", "routes/opslagstavle.opret.tsx"),

    route("ressources", "routes/ressources.tsx"),
    route("ressources/opret", "routes/ressources.opret.tsx"),
    route("ressources/:id", "routes/ressources.$id.tsx"),

    route("information", "routes/information.tsx"),
    route("information/:id", "routes/information.$id.tsx"),

    route("profil", "routes/profil.tsx"),
    route("profil/nabolag", "routes/profil.nabolag.tsx"),
    route("profil/opslag", "routes/profil.opslag.tsx"),
    route("profil/gemte-guides", "routes/profil.gemte-guides.tsx"),

    route("chat", "routes/chat.tsx"),
    route("chat/:id", "routes/chat.$id.tsx"),
  ]),
] satisfies RouteConfig;
