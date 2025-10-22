import { GuideItemsPropsType } from "@/types/guidesTypes";

const GuideItems = ({ guide }: GuideItemsPropsType) => {
  return (
    <li className="space-y-3 text-white">
      <div className="flex flex-row items-center gap-2.5">
        {guide.icon} <h3 className="font-bold text-lg">{guide.title}</h3>
      </div>
      {guide.description}
    </li>
  );
};

export default GuideItems;
