import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import classes from "./button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "black" | "white" | "blue" | "pink";
  variant?: "outline" | "filled";
  isLarge?: boolean;
  className?: string;
  children: ReactNode;
};

const Button = ({ color = "black", children, variant = "filled", isLarge = false, className, ...buttonProps }: Props) => {
  return (
    <button
      className={cn(className, classes.button, classes[color], classes[variant], {
        [classes.large]: isLarge,
      })}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
