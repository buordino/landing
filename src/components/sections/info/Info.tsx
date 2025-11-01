import SectionTitle from "@/components/ui/SectionTitle";
import InfoItems from "./InfoItems";

const infoItems = [
  {
    title: "شروع آسان با بوردینو",
    description:
      "فقط با چند کلیک ساده ثبت‌نام کن، پروفایلت رو بساز و وارد اپ شو.",
  },
  {
    title: "شانس روزانه‌ات رو امتحان کن",
    description:
      "هر روز می‌تونی توی قرعه‌کشی‌های جذاب شرکت کنی. فقط جایزه‌ای که دوست داری رو انتخاب کن",
  },
  {
    title: "امتیاز بیشتر، شانس بیشتر",
    description:
      "با فعالیت‌های روزانه مثل دعوت دوستان، بازی‌ها یا تکمیل مأموریت‌ها امتیاز بگیر ",
  },
  {
    title: "برنده شو و لذت ببر",
    description:
      "نتایج قرعه‌کشی به‌صورت شفاف و روزانه اعلام میشه. اگه برنده بشی، خیلی سریع می‌تونی جایزه‌ات رو دریافت کنی",
  },
];

const Info = () => {
  return (
    <section>
      <div className="mt-20">
        <SectionTitle>چرا بـردیـنـو؟</SectionTitle>
        <div className="mt-13">
          <p className="font-medium text-base text-justify leading-7 md:leading-normal md:text-lg">
            بوردینو فقط یک قرعه‌کشی نیست؛ یه دنیای سرگرمیه که هر کاری توش انجام
            بدی، شانس تازه‌ای برای بردن بهت می‌ده.
          </p>
          <span className="font-medium text-2xl mt-[18px] block">
            با بـردیـنـو:
          </span>
          <ul className="mt-12 flex flex-row gap-x-2 gap-y-14 sm:gap-14 items-center justify-between sm:justify-center lg:justify-between flex-wrap">
            {infoItems.map((info, index) => (
              <InfoItems key={index} info={info} />
            ))}
          </ul>
          <p className="font-medium leading-7 md:leading-normal text-base md:text-lg mt-10 sm:mt-20">
            پس اگه دنبال راهی ساده، مطمئن و پرهیجان برای امتحان شانس خودت هستی،
            بوردینو انتخاب درست توست!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
