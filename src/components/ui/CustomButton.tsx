"use client";
import { CustomButtonPropsType } from "@/types/buttonTypes";

const CustomButton = ({
  children,
  className,
  onClick,
}: CustomButtonPropsType) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick?.();
      }}
      className="bg-primary text-background font-bold w-44 h-12 rounded-xl text-xl cursor-pointer flex items-center justify-center"
    >
      <span className="relative top-[-5px] leading-none">{children}</span>
    </button>
  );
};

export default CustomButton;
