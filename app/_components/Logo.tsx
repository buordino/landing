import Image from "next/image";


const Logo = () => {
  return (
    <div className="size-[60px] relative">
      <Image
        alt="Logo"
        fill
        className="object-center"
        src={"/images/icon.png"}
      />
    </div>
  );
};

export default Logo;
