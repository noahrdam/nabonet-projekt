interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="px-5 pt-10 pb-4">
      <h1 className="text-2xl font-bold text-[#343434]">{title}</h1>
      <p className="text-lg text-[#343434] mt-1">{subtitle}</p>
    </div>
  );
}
