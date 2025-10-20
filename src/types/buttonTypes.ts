import { ReactNode } from "react";

export type CustomButtonPropsType = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};
