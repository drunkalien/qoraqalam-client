import { ReactNode } from "react";
import cn from "classnames";
import classes from "./Text.module.scss";

type Props = {
  size?: "14" | "16" | "22";
  color?: "white" | "black";
  bold?: boolean;
  italic?: boolean;
  children: ReactNode;
};

const Text = ({
  size = "22",
  color = "black",
  bold = false,
  italic = false,
  children,
}: Props) => {
  return (
    <span
      style={{ fontSize: size + "px" }}
      className={cn(classes.text, classes[color], {
        ["bold"]: bold,
        ["italic"]: italic,
      })}
    >
      {children} {" "}
    </span>
  );
};

export default Text;
