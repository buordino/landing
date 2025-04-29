import SectionTitle from "./SectionTitle";
import FeatureContent from "./FeatureContent";

const FeaturesSection = () => {
  return (
    <section id="features" className="dark:bg-custome-black pb-8">
      <SectionTitle>ویژگی ها</SectionTitle>
      <div className="relative">
        <div className="absolute w-[100%] bg-gradient-to-b from-custome-orange-1 to-circle-color blur-[125px]   left-0 right-0 top-0 bottom-[25%] mx-auto rounded-b-[100%]"></div>
        <div className="relative pb-22 pt-18 px-5 sm:px-12 md:px-32">
          <FeatureContent />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
