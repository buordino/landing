import Image from "next/image";
import { ReactNode } from "react"

interface SectionTitlePropsType{
    children:ReactNode
}
const SectionTitle = ({children}: SectionTitlePropsType) => {
  return (
    <div className="flex items-center justify-center gap-3 z-40">
      <div>
        <div className="relative size-[10px]">
          <Image
            alt="img-1"
            src={"/images/small-star-1.png"}
            fill
            className="object-center"
          />
        </div>
        <div className="relative size-4">
          <Image
            alt="img-1"
            src={"/images/small-star-2.png"}
            fill
            className="object-center"
          />
        </div>
      </div>
      <h2 className="text-custome-black font-semibold text-2xl">{children}</h2>
      <div>
        <div className="relative size-[10px] mr-[6.6px]">
          <Image
            alt="img-1"
            src={"/images/small-star-1.png"}
            fill
            className="object-center"
          />
        </div>
        <div className="relative size-4">
          <Image
            alt="img-1"
            src={"/images/small-star-2.png"}
            fill
            className="object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTitle