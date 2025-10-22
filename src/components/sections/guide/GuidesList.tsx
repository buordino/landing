import { GuideType } from "@/types/guidesTypes";
import GamePadIcon from "../../ui/icons/GamePadIcon";
import UsersIcon from "../../ui/icons/UsersIcon";
import WalletIcon from "../../ui/icons/WalletIcon";
import GuideItems from "./GuideItems";

const guides: GuideType[] = [
  {
    title: "گردونه و کوییز",
    icon: <GamePadIcon className="stroke-white fill-none w-8 h-8" />,
    description: (
      <p className="text-white font-medium">
        این بخش از اپ تو میتونی امتیاز بگیری و باهاش توی قرعه کشی ها شرکت کنی با
        بازی کردن امتیاز میگیری و اون امیتاز ها تبدیل به کوپن میشن
      </p>
    ),
  },
  {
    title: "کیف پول",
    icon: <WalletIcon className="fill-none stroke-white w-8 h-8" />,
    description: (
      <p className="text-white font-medium">
        اینجا تو موجودیتو میبینی و میتونی هم واریز کنی و هم واریزی هاتو ببینی با
        واریز کردن میتونی کوپن بخری و این راه سریع و اسون برای خرید کوپنه
      </p>
    ),
  },
  {
    title: "دعوت دوستان",
    icon: <UsersIcon className="stroke-white fill-none w-8 h-8" />,
    description: (
      <p className="text-white font-medium">
        میتونی دوستاتو دعوت کنی و با دعوت کردن هم میتونی جایزه بگیری دعوتی که
        انجام بدی و اولین واریزشو انجام بده تو امتیاز میگیری
      </p>
    ),
  },
];
const GuidesList = () => {
  return (
    <ul className="space-y-16">
      {guides.map((guide, index) => (
        <GuideItems guide={guide} key={index} />
      ))}
    </ul>
  );
};

export default GuidesList;
