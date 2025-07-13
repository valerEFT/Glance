import React, { FC } from "react";
import { classNameProps } from "@/shared/model/types";

export const SearchInput: FC<classNameProps> = ({ className }) => {
  return (
    <div>
      <input type="text" className={className} />
    </div>
  );
};
