import cn from "classnames";
import classes from "./input.module.scss";

type PropType = {
  label: "Email" | "Email or Username" | "Password" | "Username";
  type?: "email" | "password" | "text";
};

const Input = ({ label, type = "text", ...inputProps }: PropType) => {
  return (
    <div className={cn(classes["input-container"])}>
      <label className={cn(classes.label)} htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input className={cn(classes.input)} type={type} {...inputProps} />
    </div>
  );
};

export default Input;
