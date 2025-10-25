import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import DownloadButtonsWrapper from "./DownloadButtonsWrapper";

const AppDownloadSection = () => {
  return (
    <section>
      <div className="mt-[52px]">
        <SectionTitle>چرا بـردیـنـو؟</SectionTitle>
        <div className="mt-[86px] flex flex-row items-center justify-center gap-12">
          <DownloadButtonsWrapper />
          <div className="w-80 h-[450px] relative">
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
