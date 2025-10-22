import { ReactNode } from "react";

type SectionTitlePropsType = {
  children: ReactNode;
};
const SectionTitle = ({ children }: SectionTitlePropsType) => {
  return (
    <div className="flex mx-auto w-52 flex-col gap-2.5">
      <h3 className="text-white text-[28px] font-bold">{children}</h3>
      <div className="flex flex-col gap-2">
        <div className="bg-primary w-12 h-1.5 rounded-full"></div>
        <div className="bg-primary w-22 h-1.5 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
