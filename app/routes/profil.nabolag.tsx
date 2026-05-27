import type { Route } from "./+types/home";
import { Plus } from "lucide-react";
import BackButton from "~/components/BackButton";
import PageHeader from "~/components/PageHeader";
import ImageCard from "~/components/ImageCard";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Dine nabolag – NaboNet" }];
}

const NEIGHBOURHOODS = [
  { id: 1, title: "Åparken 3" },
  { id: 2, title: "Nøddebovej 60-68" },
  { id: 3, title: "Snebærvej 14-22" },
];

export default function ProfilNabolag() {
  return (
    <div className="min-h-screen bg-[#EFEDE4]">
      <div className="flex items-center px-5 pt-10 pb-0">
        <BackButton />
      </div>

      <PageHeader
        title="Dine nabolag"
        subtitle="Her finder en oversigt over de nabolag du er en del af"
      />

      {/* 1-col mobile, 2-col desktop */}
      <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-3">
        {NEIGHBOURHOODS.map((n) => (
          <ImageCard key={n.id} title={n.title} href={`/profil/nabolag/${n.id}`} />
        ))}

        <ImageCard
          title="Opret ny gruppe"
          extra={
            <div className="w-8 h-8 rounded-full bg-[#D9D9D9] flex items-center justify-center mt-1">
              <Plus size={16} strokeWidth={2} className="text-[#343434]" />
            </div>
          }
        />
      </div>
    </div>
  );
}