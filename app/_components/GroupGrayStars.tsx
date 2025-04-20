import Image from "next/image";

const GroupGrayStars = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-[20px] h-[20px]">
        <Image
          alt="star-1"
          className="object-cover"
          fill
          src={"/images/star-group-1.png"}
        />
      </div>
      <div className="relative w-[40px] h-[40px]">
        <Image
          alt="star-2"
          className="object-cover"
          fill
          src={"/images/star-group-2.png"}
        />
      </div>
    </div>
  );
};

export default GroupGrayStars;
