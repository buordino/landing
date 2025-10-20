"use client";

import { cn } from "@/lib/utils";
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
      className={cn(
        "bg-primary text-background font-bold rounded-xl text-xl cursor-pointer flex items-center justify-center leading-none",
        className
      )}
    >
      <span className="relative top-[-5px] leading-none">{children}</span>
    </button>
  );
};

export default CustomButton;
