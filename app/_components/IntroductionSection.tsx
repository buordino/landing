import MainContent from "./MainContent";
import PhoneImagesWrraper from "./PhoneImagesWrraper";

const IntroductionSection = () => {
  return (
    <section id="main" className="relative">
      <div className="absolute w-[100%] bg-gradient-to-t from-custome-orange-1 to-circle-color blur-[125px] top-[25%] left-0 right-0 mx-auto bottom-0 rounded-t-[100%]"></div>
      <div className="py-22 px-24 md:px-42 relative ">
        <div className="flex justify-center flex-col 2lg:flex-row items-center 2lg:justify-between gap-10 sm:gap-20">
          <MainContent />
          <PhoneImagesWrraper />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
