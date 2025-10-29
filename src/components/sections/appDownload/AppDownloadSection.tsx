import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import DownloadButtonsWrapper from "./DownloadButtonsWrapper";

const AppDownloadSection = () => {
  return (
    <section>
      <div className="mt-0 sm:mt-[52px]">
        <div className="hidden sm:block">
          <SectionTitle>چرا بـردیـنـو؟</SectionTitle>
        </div>
        <div className="mt-7 sm:mt-[86px] flex flex-row items-center justify-center gap-12">
          <DownloadButtonsWrapper />
          <div className="w-80 h-[450px] relative hidden md:block">
            <Image
              src={"/images/Hero-iPhone-Right.png"}
              alt="iPhone-Image-1"
              fill
              className="object-cover z-10"
            />
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
