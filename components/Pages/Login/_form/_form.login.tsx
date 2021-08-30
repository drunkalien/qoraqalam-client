import cn from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "../_login.module.scss";
import { Button, Input } from "components";
import Link from "next/link";

type Data = {
  emailOrUsernam: string;
  password: string;
};

const schema = yup.object().shape({
  emailOrUsername: yup.string().required("Email yoki Usernameni kiriting!"),
  password: yup.string().required("Parolni kiriting!"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function submit(data: Data) {
    console.log(data);
  }

  return (
    <div className={cn(classes["form-container"])}>
      <form className={cn(classes.form)} onSubmit={handleSubmit(submit)}>
        <h1 className={cn(classes["form-heading"])}>Kirish</h1>
        <Input
          label="Email yoki username"
          type="text"
          placeholder="bu@misol.uz"
          style={errors.emailOrUsername ? { borderColor: "red" } : undefined}
          {...register("emailOrUsername")}
        />
        {errors.emailOrUsername ? (
          <p className={cn(classes["error-msg"])}>
            {errors.emailOrUsername?.message}
          </p>
        ) : null}

        <Input
          label="Parol"
          placeholder="Parolingizni kiriting"
          type="password"
          style={errors.password ? { borderColor: "red" } : undefined}
          {...register("password")}
        />
        {errors.password ? (
          <p className={cn(classes["error-msg"])}>{errors.password?.message}</p>
        ) : null}

        <Button isLarge color="blue" type="submit" className="mt-5">
          Davom etish
        </Button>
        <p className="text-center mt-10 fz-14">
          Akkauntingiz yoʻqmi? unda <br />
          <Link href="/signup">
            <a>Roʻyxatdan oʻting</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Form;
