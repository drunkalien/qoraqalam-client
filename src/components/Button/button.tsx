import { ReactNode } from "react";
import cn from "classnames";
import classes from "./button.module.scss";

type ButtonProps = {
  color: "black" | "white";
  variant: "outline" | "filled";
  children: ReactNode;
};

const Button = ({ color, children, variant, ...buttonProps }: ButtonProps) => {
  return (
    <button
      className={cn(classes.button, classes[color], classes[variant])}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
