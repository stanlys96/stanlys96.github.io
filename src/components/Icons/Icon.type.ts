import { ComponentPropsWithoutRef } from "react";

export interface ISvgProps extends ComponentPropsWithoutRef<"svg"> {}

export interface IImgProps extends ComponentPropsWithoutRef<"img"> {
  wrapperClass?: string;
}
