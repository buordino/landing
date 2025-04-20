"use client";
import { ReactNode } from "react";

interface ButtonPropsType {
  children: ReactNode;
  onClick?: () => void;
}
const Button = ({ children, onClick }: ButtonPropsType) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-sm md:btn-md lg:btn-lg border-none shadow-none text text-[13px] md:text-[15px]  bg-custome-orange-2 text-black rounded-[14.5px] "
    >
      {children}
    </button>
  );
};

export default Button;
