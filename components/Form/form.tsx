import cn from "classnames";
import classes from "./form.module.scss";
import Input from "./Input";
import Button from "./FormButton/button";

const Form = () => {
  return (
    <div className={cn(classes["form-container"])}>
      <form className={cn(classes.form)}>
        <h1 className={cn(classes["form-heading"])}>Login</h1>
        <Input label="Email or Username" type="email" />
        <Input label="Password" type="password" />
        <Button />
      </form>
    </div>
  );
};

export default Form;
