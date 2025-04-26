import Image from "next/image";
import { DeveloperType } from "./DevelopersList";
import "keen-slider/keen-slider.min.css";

interface DeveloperItemsPropsType {
  developer: DeveloperType;
}
const DeveloperItems = ({ developer }: DeveloperItemsPropsType) => {
  const { caption, img, job, name } = developer;
  return (
    <li
      className={`keen-slider__slide  px-4 pt-2 pb-7 rounded-[35px] border border-solid border-[#B6ADAD] text-custome-black`}
    >
      <div className="flex items-center justify-center">
        <Image
          className="rounded-[100%]"
          src={img}
          alt={`${name}-profile`}
          width={140}
          height={140}
        />
      </div>
      <h2 className="mt-2 text-lg font-semibold">{name}</h2>
      <span className="mt-2">{job}</span>
      <p className="mt-1 font-[100] text-justify">{caption}</p>
    </li>
  );
};

export default DeveloperItems;
