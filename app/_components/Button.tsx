import { ReactNode } from "react";

interface ButtonPropsType {
  children: ReactNode;
}
const Button = ({ children }: ButtonPropsType) => {
  return (
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  bg-custome-orange-2 text-black rounded-[14px] ">
      {children}
    </button>
  );
};

export default Button;
