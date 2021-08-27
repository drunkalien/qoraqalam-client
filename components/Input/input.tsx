import cn from "classnames";
import { HTMLProps } from "react";
import classes from "./input.module.scss";

type Props = HTMLProps<HTMLInputElement> & {
  label: string;
};

const Input = ({ label, ...inputProps }: Props) => {
  return (
    <div className={cn(classes["input-container"])}>
      <label className={cn(classes.label)} htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input className={cn(classes.input)} {...inputProps} />
    </div>
  );
};

export default Input;
