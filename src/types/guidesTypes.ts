import { ReactNode } from "react";

export type GuideType = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
};

export type GuideItemsPropsType = {
  guide: GuideType;
};
