import cn from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "../_signup.module.scss";
import { Button, Input } from "components";
import Link from "next/link";
import axios from "axios";

type Data = {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
};

const schema = yup.object().shape({
  email: yup.string().email("Noto'g'ri email!").required("Email majburiy!"),
  username: yup
    .string()
    .min(4, "Username 4ta belgidan uzun bo'lishi kerak!")
    .max(10, "Username 10ta belgidan oshmasligi kerak!")
    .lowercase()
    .required("Username majburiy!"),
  password: yup.string().min(8, "Parol kamida 8ta belgi bo'lishi kerak"),
  passwordConfirm: yup.string().oneOf([yup.ref("password"), "Parollar mos kelmadi!"]),
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
    axios
      .post("http://localhost:5000/api/v1/auth/signup", data)
      .then((response) => {
        window.localStorage.setItem("token", response.data.doc.token);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={cn(classes["form-container"])}>
      <form className={cn(classes.form)} onSubmit={handleSubmit(submit)}>
        <h1 className={cn(classes["form-heading"])}>Roʻyxatdan oʻtish</h1>
        <Input
          label="Email"
          type="text"
          placeholder="bu@misol.uz"
          style={errors.email ? { borderColor: "red" } : undefined}
          {...register("email")}
        />
        {errors.email ? <p className={cn(classes["error-msg"])}>{errors.email?.message}</p> : null}

        <Input
          label="Username"
          type="text"
          placeholder="Usernameni kiriting"
          style={errors.username ? { borderColor: "red" } : undefined}
          {...register("username")}
        />
        {errors.username ? <p className={cn(classes["error-msg"])}>{errors.username?.message}</p> : null}

        <Input
          label="Parol"
          placeholder="Parolingizni kiriting"
          type="password"
          style={errors.password ? { borderColor: "red" } : undefined}
          {...register("password")}
        />
        {errors.password ? <p className={cn(classes["error-msg"])}>{errors.password?.message}</p> : null}

        <Input
          label="Parolni tasdiqlash"
          placeholder="Parolingzni kiriting"
          type="password"
          style={errors.passwordConfirm ? { borderColor: "red" } : undefined}
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm ? <p className={cn(classes["error-msg"])}>{"Parollar mos kelmadi!"}</p> : null}

        <Button isLarge color="blue" type="submit" className="mt-5">
          Davom etish
        </Button>
        <p className="mt-10 text-center fz-14">
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
