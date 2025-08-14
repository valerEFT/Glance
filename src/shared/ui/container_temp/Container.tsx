import React, { FC, PropsWithChildren } from "react";
import { ClassNameProps } from "@/shared/model/types";
import clsx from "clsx";
import styled from "./Container.module.scss";

export const Container: FC<PropsWithChildren<ClassNameProps>> = ({
  children,
  className,
}) => {
  return <div className={clsx(styled.container, className)}>{children}</div>;
};
