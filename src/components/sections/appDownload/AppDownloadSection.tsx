import CustomButton from "@/components/ui/CustomButton";
import DownloadIcon from "@/components/ui/icons/DownloadIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

const AppDownloadSection = () => {
  return (
    <section>
      <div className="mt-[52px]">
        <SectionTitle>چرا بـردیـنـو؟</SectionTitle>
        <div className="mt-[86px] flex flex-row items-center justify-center gap-12">
          <div className="bg-dark-primary rounded-[64px] flex flex-col items-center gap-[52px] pt-10 pb-14 px-14 w-[500px]">
            <CustomButton className="w-full h-[70px] text-white bg-[linear-gradient(92.22deg,#5C74A7_2.19%,#7A8FBF_99.45%)] text-2xl">
              دانلود اپلیکیشن
            </CustomButton>
            <CustomButton className="w-full h-[70px] bg-white text-lg font-light text-black">
              <div className="flex flex-row items-center w-full justify-center gap-3.5 pt-2">
                <Image
                  src={"/images/Play-Store.png"}
                  alt="Play-Store"
                  width={40}
                  height={40}
                />
                <span>دانلود از google play</span>
              </div>
            </CustomButton>{" "}
            <CustomButton className="w-full h-[70px] bg-white text-lg font-light text-black">
              <div className="flex flex-row items-center w-full justify-center gap-3.5 pt-2">
                <Image
                  src={"/images/Miket.png"}
                  alt="Play-Store"
                  width={40}
                  height={40}
                />
                <span>دانلود از مایکت</span>
              </div>
            </CustomButton>
            <CustomButton className="w-full h-[70px] bg-white text-lg font-light text-black">
              <div className="flex flex-row items-center w-full justify-center gap-3.5 pt-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <DownloadIcon className="fill-white stroke-white size-6" />
                </div>
                <span>دانلود مستقیم</span>
              </div>
            </CustomButton>
          </div>
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
