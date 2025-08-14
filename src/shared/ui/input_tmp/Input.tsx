import { InputProps } from "@/shared/model";
import { FC } from "react";

export const Input: FC<InputProps> = ({ type, placeholder, className }) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};
