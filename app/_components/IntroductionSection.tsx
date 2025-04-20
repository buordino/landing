import MainContent from "./MainContent";
import PhoneImagesWrraper from "./PhoneImagesWrraper";

const IntroductionSection = () => {
  return (
    <section id="main">
      <div className="py-22 px-42">
        <div className="flex items-center justify-between gap-10">
          <MainContent />
          <PhoneImagesWrraper />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
