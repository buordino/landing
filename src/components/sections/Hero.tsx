import CustomButton from "../ui/CustomButton";

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
          <CustomButton>بزن بریم!</CustomButton>
        </div>
        <div className="bg-yellow-500 basis-2xs">left</div>
      </div>
    </section>
  );
};

export default Hero;
