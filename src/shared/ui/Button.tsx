import { ButtonProps } from "@/shared/model";
import { FC, PropsWithChildren } from "react";

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
}) => {
  return <button className={className}>{children}</button>;
};
