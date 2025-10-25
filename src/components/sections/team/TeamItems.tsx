import { TeamItemsPropsType } from "@/types/TeamTypes";
import Image from "next/image";

const TeamItems = ({ teamMember }: TeamItemsPropsType) => {
  const { avatar, field, name } = teamMember;
  return (
    <li>
      <div className="rounded-t-full rounded-bl-2xl rounded-br-2xl bg-light-primary pb-[18px] pt-22 px-4 relative w-46">
        <Image
          src={avatar}
          alt={name}
          width={120}
          height={120}
          className="absolute -top-12 left-0 right-0 mx-auto"
        />
        <h5 className="font-bold">{name}</h5>
        <span className="mt-1.5 font-semibold block text-center">{field}</span>
      </div>
    </li>
  );
};

export default TeamItems;
