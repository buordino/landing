import CommentsSection from "./_components/CommentsSection";
import FeaturesSection from "./_components/FeaturesSection";
import IntroductionSection from "./_components/IntroductionSection";

export default function Home() {
  return (
    <div>
      <IntroductionSection />
      <FeaturesSection />
      <CommentsSection />
    </div>
  );
}
