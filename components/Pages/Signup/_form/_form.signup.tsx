import cn from "classnames";
import classes from "../_signup.module.scss";
import { Button, Input } from "components";
import Link from "next/link";

const Form = () => {
  return (
    <div className={cn(classes["form-container"])}>
      <form className={cn(classes.form)}>
        <h1 className={cn(classes["form-heading"])}>Kirish</h1>
        <Input label="Email" type="email" placeholder="bu@misol.uz" />
        <Input label="Username" type="text" placeholder="Usernameni kiriting" />
        <Input
          label="Parol"
          placeholder="Parolingizni kiriting"
          type="password"
        />
        <Button isLarge color="blue" type="button" className="mt-5">
          Davom etish
        </Button>
        <p className="text-center mt-10 fz-14">
          Akkauntingiz bormi? unda <br />
          <Link href="/login">
            <a>Kiring</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Form;
