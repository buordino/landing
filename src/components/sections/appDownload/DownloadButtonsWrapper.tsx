import CustomButton from "@/components/ui/CustomButton";
import DownloadIcon from "@/components/ui/icons/DownloadIcon";
import Image from "next/image";

const DownloadButtonsWrapper = () => {
  return (
    <div className="bg-dark-primary rounded-2xl sm:rounded-[64px] flex flex-col items-center gap-7 sm:gap-[52px] 2xs:pb-8 2xs:pt-6 xs:pb-10 xs:pt-8 sm:pt-10 sm:pb-14 2xs:px-5 xs:px-10 sm:px-14 w-full sm:w-[500px]">
      <CustomButton className="w-full h-[60px] sm:h-[70px] text-white bg-[linear-gradient(92.22deg,#5C74A7_2.19%,#7A8FBF_99.45%)] text-base sm:text-2xl pt-1 sm:pt-0">
        دانلود اپلیکیشن
      </CustomButton>
      <CustomButton className="w-full h-[60px] sm:h-[70px] bg-white text-base sm:text-lg font-light text-black">
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
      <CustomButton className="w-full h-[60px] sm:h-[70px] bg-white text-base sm:text-lg font-light text-black">
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
      <CustomButton className="w-full h-[60px] sm:h-[70px] bg-white text-base sm:text-lg font-light text-black">
        <div className="flex flex-row items-center w-full justify-center gap-3.5 pt-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <DownloadIcon className="fill-white stroke-white size-6" />
          </div>
          <span>دانلود مستقیم</span>
        </div>
      </CustomButton>
    </div>
  );
};

export default DownloadButtonsWrapper;
