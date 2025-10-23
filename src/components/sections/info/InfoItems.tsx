import { InfoItemsPropsType } from "@/types/InfoTypes";

const InfoItems = ({ info }: InfoItemsPropsType) => {
  const { description, title } = info;
  return (
    <li className="w-52 h-[260px] relative">
      <div className="w-full h-full border border-solid border-white rounded-b-2xl"></div>
      <div className="w-full h-full bg-primary rounded-2xl absolute top-[22px] right-4 flex flex-col justify-center gap-6 text-black px-6 shadow-4xl">
        <h4 className="font-semibold text-base">{title}</h4>
        <p className="font-normal">{description}</p>
      </div>
    </li>
  );
};

export default InfoItems;
