import CommentsSection from "./_components/CommentsSection";
import DevelopersSection from "./_components/DevelopersSection";
import FeaturesSection from "./_components/FeaturesSection";
import IntroductionSection from "./_components/IntroductionSection";
import ScrollBtn from "./_components/ScrollBtn";

export default function Home() {
  return (
    <>
    <div>
      <IntroductionSection />
      <FeaturesSection />
      <CommentsSection />
      <DevelopersSection />
    </div>
    <ScrollBtn />
    </>
  );
}
