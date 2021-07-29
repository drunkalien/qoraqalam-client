import { ReactNode } from "react";

import classes from "./button.module.css";

type ButtonProps = {
  color: "primary" | "secondary";
  variant: "outline" | "";
  children: ReactNode;
};

const Button = ({ color, children, variant, ...buttonProps }: ButtonProps) => {
  return (
    <button
      className={`${classes.button} ${classes[color]} ${classes[variant]}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
