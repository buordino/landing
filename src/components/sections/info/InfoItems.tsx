import { InfoItemsPropsType } from "@/types/InfoTypes";

const InfoItems = ({ info }: InfoItemsPropsType) => {
  const { description, title } = info;
  return (
    <li className="2xs:w-full h-40 xs:w-[45%] xs:h-64 sm:w-52 sm:h-[260px] relative">
      <div className="w-full h-full border border-solid border-white rounded-b-2xl"></div>
      <div className="w-full h-full bg-primary rounded-2xl absolute top-2 right-2 sm:top-[22px] sm:right-4 flex flex-col justify-center gap-6 text-black px-6 shadow-4xl">
        <h4 className="font-semibold text-sm md:text-base">{title}</h4>
        <p className="font-normal text-sm md:text-base">{description}</p>
      </div>
    </li>
  );
};

export default InfoItems;
