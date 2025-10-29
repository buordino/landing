import Image from "next/image";
import CustomButton from "../../ui/CustomButton";

const Hero = () => {
  return (
    <section>
      <div className="flex items-center flex-col lg:flex-row lg:items-start lg:justify-between gap-2 lg:gap-[60px] mb-2">
        <div className="basis-full lg:basis-xl space-y-4 md:space-y-6">
          <h1 className="text-xl md:text-5xl font-bold leading-normal md:leading-18">
            با <span className="text-light-primary">بـردیـنـو</span>، بازی کن،
            امتیاز
            <br className="hidden md:block" /> بگیر، برنده شو!
          </h1>
          <p className="font-normal text-base  md:text-lg pl-8 leading-9 md:text-justify">
            با بردینو هر روز می‌تونی سرگرم بشی، دوستات رو دعوت کنی و توی
            قرعه‌کشی‌های هیجان‌انگیز شرکت کنی. فرقی نداره چند سالته؛ از ۱۰ سال
            تا ۸۰ سال، اینجا همه می‌تونن بازی کنن و برنده بشن!
          </p>
          <CustomButton className="bg-light-primary md:bg-primary w-40 h-12 text-lg md:w-44 md:h-13 md:text-xl">
            بزن بریم!
          </CustomButton>
        </div>
        <div className="basis-full lg:basis-2xs">
          <div className="relative w-full flex flex-row lg:justify-end">
            <div className="w-80 h-80 lg:w-full lg:h-[490px] mb-[5rem] -mr-2.5 lg:mr-0 lg:absolute lg:left-8 lg:-top-8">
              <Image
                src={"/images/Hero-iPhone-Right.png"}
                alt="iPhone-Image-1"
                fill
                className="object-cover z-10"
              />
            </div>{" "}
            <div className="w-full h-80 lg:w-full lg:h-[490px] lg:absolute lg:-left-3 lg:-top-8">
              <Image
                src={"/images/Hero-iPhone-Left.png"}
                alt="iPhone-Image-1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
