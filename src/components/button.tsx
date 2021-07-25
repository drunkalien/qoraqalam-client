import { ReactNode } from "react";

type ButtonProps = {
  color: string;
  variant: string;
  children: ReactNode;
};

const Button = ({ color, children, variant, ...buttonProps }: ButtonProps) => {
  return <button {...buttonProps}>{children}</button>;
};

export default Button;
