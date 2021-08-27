import cn from "classnames";
import classes from "./button.module.scss";

const Button = () => {
  return (
    <button className={cn(classes.button)} type="submit">
      Continue
    </button>
  );
};

export default Button;
