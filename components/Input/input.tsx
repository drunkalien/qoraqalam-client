import cn from "classnames";
import { forwardRef } from "react";
import { HTMLProps } from "react";
import classes from "./input.module.scss";

type Props = HTMLProps<HTMLInputElement> & {
  label: string;
};

const Input = forwardRef<any, Props>(({ label, ...inputProps }, ref) => {
  return (
    <div className={cn(classes["input-container"])}>
      <label className={cn(classes.label)} htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input ref={ref} className={cn(classes.input)} {...inputProps} />
    </div>
  );
});

Input.displayName = "Input";

export default Input;
