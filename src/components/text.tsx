import { ReactNode } from "react";
import cn from "classnames"

type TextProps = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  color: "white" | "black";
  children: ReactNode;
};

const Text = ({ size = "sm", color = "black", children }: TextProps) => {
  return <span className={cn(`text`, size, color)}>{children}</span>;
};

export default Text;
