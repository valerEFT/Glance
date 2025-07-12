import React, { FC } from "react";
import { SearchInputProps } from "@/shared/model/types";

export const SearchInput: FC<SearchInputProps> = ({ className }) => {
  return (
    <div>
      <input type="text" className={className} />
    </div>
  );
};
