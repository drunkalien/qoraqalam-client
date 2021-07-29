import { ReactNode } from "react";

type TextProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  color: "white" | "black";
  children: ReactNode;
};

const Text = ({ size = "sm", color = "black", children }: TextProps) => {
  return <span className={`text ${size} ${color}`}>{children}</span>;
};

export default Text;
