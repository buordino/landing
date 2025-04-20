import MainContent from "./MainContent";
import PhoneImagesWrraper from "./PhoneImagesWrraper";

const IntroductionSection = () => {
  return (
    <section id="main" className="relative">
      {/* <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-orange-300 via-rose-300 to-red-400 opacity-40 blur-2xl z-0"></div> */}
      <div className="py-22 px-42 relative bg-gradient-to-t from-circle-color to-white">
        <div className="flex items-center justify-between gap-20">
          <MainContent />
          <PhoneImagesWrraper />
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
