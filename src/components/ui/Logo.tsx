import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-[95px] h-[95px]">
      <Image src={"/svgs/logo.svg"} fill alt="Logo" />
    </div>
  );
};

export default Logo;
