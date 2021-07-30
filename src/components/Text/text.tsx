import { ReactNode } from "react";
import cn from "classnames";
import classes from "./Text.module.scss";

type TextProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "white" | "black";
  children: ReactNode;
};

const Text = ({ size = "sm", color = "black", children }: TextProps) => {
  return (
    <span className={cn(classes.text, classes[size], classes[color])}>
      {children}
    </span>
  );
};

export default Text;
