import Image from "next/image";
import { DeveloperType } from "./DevelopersList";

interface DeveloperItemsPropsType {
  developer: DeveloperType;
  number:number
}
const DeveloperItems = ({ developer,number }: DeveloperItemsPropsType) => {
  const { caption, img, job, name } = developer;
  return (
    <li className="w-[30%] px-3 pt-2 pb-7 rounded-[35px] border border-solid border-[#B6ADAD] text-custome-black">
        <div className="flex items-center justify-center">
            <Image src={img} alt={`${name}-profile`} width={140} height={140} />
        </div>
        <h2 className="mt-2 text-lg font-semibold">{name}</h2>
        <span className="mt-2">{job}</span>
        <p className="mt-1 font-[100]">{caption}</p>
    </li>
  );
};

export default DeveloperItems;
