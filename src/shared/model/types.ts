export type ButtonProps = {
  className?: string;
};

export type TypeList = "number" | "text" | "email" | "password";

export type InputProps = {
  type: TypeList;
  placeholder: string;
  className: string;
};

export type ClassNameProps = {
  className?: string;
};
