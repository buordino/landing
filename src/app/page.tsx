import AppDownloadSection from "@/components/sections/appDownload/AppDownloadSection";
import Guide from "@/components/sections/guide/Guide";
import Hero from "@/components/sections/hero/Hero";
import Info from "@/components/sections/info/Info";
import Team from "@/components/sections/team/Team";

export default function Home() {
  return (
    <div className="mt-7 md:mt-[122px]">
      <Hero />
      <Guide />
      <Info />
      <AppDownloadSection />
      <Team />
    </div>
  );
}
