
import SectionTitle from "./SectionTitle";
import FeatureContent from "./FeatureContent";

const FeaturesSection = () => {
  return (
    <section id="features">
      <SectionTitle>ویژگی ها</SectionTitle>
      <div className="relative">
        <div className="absolute w-[100%] bg-gradient-to-b from-custome-orange-1 to-circle-color blur-[125px]   left-0 right-0 top-0 bottom-[25%] mx-auto rounded-b-[100%]"></div>
        <div className="relative py-22 px-5 sm:px-12 2lg:px-64">
          <FeatureContent />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
