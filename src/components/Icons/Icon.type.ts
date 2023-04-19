import { ComponentPropsWithoutRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISvgProps extends ComponentPropsWithoutRef<"svg"> {}

export interface IImgProps extends ComponentPropsWithoutRef<"img"> {
  wrapperClass?: string;
}
