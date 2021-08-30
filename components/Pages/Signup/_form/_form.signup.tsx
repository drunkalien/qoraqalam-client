import cn from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "../_signup.module.scss";
import { Button, Input } from "components";
import Link from "next/link";
import { useState, useEffect } from "react";

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
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), "Parollar mos kelmadi!"]),
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
          label="Email"
          type="email"
          placeholder="bu@misol.uz"
          style={errors.email ? { borderColor: "red" } : undefined}
          {...register("email")}
        />
        <p className={cn(classes["error-msg"])}>
          {errors.email ? errors.email?.message : null}
        </p>

        <Input
          label="Username"
          type="text"
          placeholder="Usernameni kiriting"
          style={errors.username ? { borderColor: "red" } : undefined}
          {...register("username")}
        />
        <p className={cn(classes["error-msg"])}>
          {errors.username ? errors.username?.message : null}
        </p>

        <Input
          label="Parol"
          placeholder="Parolingizni kiriting"
          type="password"
          style={errors.password ? { borderColor: "red" } : undefined}
          {...register("password")}
        />
        <p className={cn(classes["error-msg"])}>
          {errors.password ? errors.password?.message : null}
        </p>

        <Input
          label="Parolni tasdiqlash"
          placeholder="Parolingzni kiriting"
          type="password"
          style={errors.passwordConfirm ? { borderColor: "red" } : undefined}
          {...register("passwordConfirm")}
        />
        <p className={cn(classes["error-msg"])}>
          {errors.passwordConfirm ? "Parollar mos kelmadi!" : null}
        </p>

        <Button isLarge color="blue" type="submit" className="mt-5">
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
