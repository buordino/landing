import Image from "next/image";

const PhoneImagesWrraper = () => {
  return (
    <div className="basis-[50%]">
      <div className="flex justify-end relative">
        <div className="absolute left-30 top-4 w-[400px] h-[440px] z-[2]">
          <Image
            fill
            className="object-center"
            alt="iPhone-1"
            src={"/images/iPhone-2.png"}
          />
        </div>
        <div className="relative w-[350px] h-[410px]">
          <Image
            fill
            className="object-center"
            alt="iPhone-2"
            src={"/images/iPhone-1.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default PhoneImagesWrraper