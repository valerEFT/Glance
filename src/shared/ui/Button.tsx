import { ButtonProps } from "@/shared/model";
import { FC, PropsWithChildren } from "react";

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};
