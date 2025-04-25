import Image from "next/image";
import { CommentType } from "./CommentsList";
import "keen-slider/keen-slider.min.css";

interface CommentItemsPropsType {
  commentItems: CommentType;
  number: number;
}
const CommentItems = ({ commentItems, number }: CommentItemsPropsType) => {
  const { avatar, comment, name } = commentItems;
  return (
    <li
      className={`w-[30%] py-6 pl-5 pr-6 rounded-[25px] border border-solid border-custome-orange-1 text-custome-black keen-slider__slide  ${`number-slide${number}`}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <Image
          alt="avatar"
          width={50}
          height={50}
          src={avatar}
          className="rounded-[100%]"
        />
        <span className="font-semibold">{name}</span>
      </div>
      <p className="text-justify leading-[32px]">{comment}</p>
    </li>
  );
};

export default CommentItems;
