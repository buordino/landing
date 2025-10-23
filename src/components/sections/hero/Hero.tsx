import Image from "next/image";
import CustomButton from "../../ui/CustomButton";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-row items-start justify-between gap-[60px]">
        <div className="basis-xl space-y-6">
          <h1 className="text-5xl font-bold leading-18 ">
            با <span className="text-light-primary">بـردیـنـو</span>، بازی کن،
            امتیاز
            <br /> بگیر، برنده شو!
          </h1>
          <p className="font-normal text-lg leading-9 text-justify">
            با بردینو هر روز می‌تونی سرگرم بشی، دوستات رو دعوت کنی و توی
            قرعه‌کشی‌های هیجان‌انگیز شرکت کنی. فرقی نداره چند سالته؛ از ۱۰ سال
            تا ۸۰ سال، اینجا همه می‌تونن بازی کنن و برنده بشن!
          </p>
          <CustomButton className="w-44 h-13">بزن بریم!</CustomButton>
        </div>
        <div className="basis-2xs">
          <div className="relative w-full flex flex-row justify-end">
            <div className="w-full h-[490px] absolute left-8 -top-8">
              <Image
                src={"/images/Hero-iPhone-Right.png"}
                alt="iPhone-Image-1"
                fill
                className="object-cover z-10"
              />
            </div>{" "}
            <div className="w-full h-[490px] absolute -left-3 -top-8">
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
