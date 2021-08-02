import { ReactNode } from "react";
import cn from "classnames";
import classes from "./Text.module.scss";

type Props = {
  size?: "14" | "16" | "22";
  color?: "white" | "black" | "gray";
  bold?: boolean;
  italic?: boolean;
  children: ReactNode;
  className?: string;
	lineHeight?: number | string;
};

const Text = ({
  size = "22",
  color = "black",
  bold = false,
  italic = false,
  children,
  className,
	lineHeight
}: Props) => {
  return (
    <span
      style={{ fontSize: size + "px", lineHeight: lineHeight }}
      className={cn(className, classes.text, classes[color], {
        ["bold"]: bold,
        ["italic"]: italic,
      })}
    >
      {children}
    </span>
  );
};

export default Text;
