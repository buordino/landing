import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-20 h-20 sm:w-[95px] sm:h-[95px]">
      <Image src={"/svgs/logo.svg"} fill alt="Logo" />
    </div>
  );
};

export default Logo;
