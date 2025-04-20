import Image from "next/image";

const PhoneImagesWrraper = () => {
  return (
    <div className="basis-full 2lg:basis-[50%]">
      <div className="flex justify-end relative">
        <div className="absolute left-20 sm:left-30 top-4 w-[190px] h-[250px] sm:w-[380px] sm:h-[440px] z-[2]">
          <Image
            fill
            className="object-center"
            alt="iPhone-1"
            src={"/images/iPhone-2.png"}
          />
        </div>
        <div className="relative w-[200px] h-[240px] sm:w-[350px] sm:h-[410px]">
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