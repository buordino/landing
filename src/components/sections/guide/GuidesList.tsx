import { GuideType } from "@/types/guidesTypes";
import GamePadIcon from "../../ui/icons/GamePadIcon";
import UsersIcon from "../../ui/icons/UsersIcon";
import WalletIcon from "../../ui/icons/WalletIcon";
import GuideItems from "./GuideItems";
import GiftIcon from "@/components/ui/icons/GiftIcon";

const guides: GuideType[] = [
  {
    title: "گردونه و کوییز",
    icon: <GamePadIcon className="stroke-white fill-none w-8 h-8" />,
    description: (
      <p className="text-white font-medium text-base md:text-lg leading-8">
        این بخش از اپ تو میتونی امتیاز بگیری و باهاش توی{" "}
        <span className="text-background">قرعه کشی ها</span> شرکت کنی <br /> با{" "}
        <span className="text-background">بازی کردن</span> امتیاز میگیری و اون
        امیتاز ها تبدیل به <span className="text-background">کوپن</span> میشن
      </p>
    ),
  },
  {
    title: "کیف پول",
    icon: <WalletIcon className="fill-none stroke-white w-8 h-8" />,
    description: (
      <p className="text-white font-medium text-base md:text-lg leading-8">
        اینجا تو <span className="text-background">موجودیتو</span> میبینی و
        میتونی هم <span className="text-background">واریز</span> کنی و هم واریزی
        هاتو ببینی <br /> با واریز کردن میتونی{" "}
        <span className="text-background">کوپن بخری</span> و این راه{" "}
        <span className="text-background">سریع و اسون</span> برای خرید کوپنه
      </p>
    ),
  },
  {
    title: "دعوت دوستان",
    icon: <UsersIcon className="stroke-white fill-none w-8 h-8" />,
    description: (
      <p className="text-white font-medium text-base md:text-lg leading-8">
        میتونی <span className="text-background">دوستاتو</span> دعوت کنی و با
        دعوت کردن هم میتونی جایزه بگیری <br /> دعوتی که انجام بدی و{" "}
        <span className="text-background">اولین واریزشو</span> انجام بده{" "}
        <span className="text-background"> تو </span>
        امتیاز میگیری
      </p>
    ),
  },
  {
    title: "جوایز",
    icon: <GiftIcon className="w-8 h-8 fill-none stroke-white" />,
    description: (
      <p className="text-white font-medium text-base md:text-lg leading-8">
        اینجا <span className="text-background">جایزه</span> هارو میتونی ببینی و
        هرکدوم که خواستی توی <span className="text-background">قرعه کشی</span>{" "}
        شرکت کنی <br /> برای شرکت تو قرعه کشی میتونی کوپن رو{" "}
        <span className="text-background">بخری</span> یا با{" "}
        <span className="text-background">بازی کردن</span> و امتیاز بگیریش
      </p>
    ),
  },
];
const GuidesList = () => {
  return (
    <ul className="space-y-8 md:space-y-13">
      {guides.map((guide, index) => (
        <GuideItems guide={guide} key={index} />
      ))}
    </ul>
  );
};

export default GuidesList;
