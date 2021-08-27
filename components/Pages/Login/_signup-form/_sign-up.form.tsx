import cn from "classnames";
import classes from "./_sign-up.module.scss";
import { Button, Input } from "components";

const Form = () => {
  return (
    <div className={cn(classes["form-container"])}>
      <form className={cn(classes.form)}>
        <h1 className={cn(classes["form-heading"])}>Login</h1>
        <Input label="Email or Username" type="email" />
        <Input label="Password" type="password" />
        <Button isLarge color="blue" type="button" className="mt-5">
          Davom etish
        </Button>
      </form>
    </div>
  );
};

export default Form;
