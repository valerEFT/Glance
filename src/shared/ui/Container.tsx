import React, { FC, PropsWithChildren } from "react";
import { classNameProps } from "@/shared/model/types";

export const Container: FC<PropsWithChildren<classNameProps>> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};
