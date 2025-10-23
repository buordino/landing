import Guide from "@/components/sections/guide/Guide";
import Hero from "@/components/sections/hero/Hero";
import Info from "@/components/sections/info/Info";

export default function Home() {
  return (
    <div className="mt-[122px]">
      <Hero />
      <Guide />
      <Info />
    </div>
  );
}
