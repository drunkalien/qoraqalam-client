import cn from "classnames";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "../_login.module.scss";
import { Button, Input } from "components";
import Link from "next/link";
import { AxiosResponse } from "axios";
import { useAPIMutation } from "hooks";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

type FormValues = {
  emailOrUsername: string;
  password: string;
};

const schema = yup.object().shape({
  emailOrUsername: yup.string().required("Email yoki foydalanuvchi ismini kiriting!"),
  password: yup.string().required("Parolni kiriting!"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver<any>(schema),
  });
  const router = useRouter();

  // mutations
  const loginByEmailMutation = useAPIMutation({ url: "auth/loginByEmail" });
  const loginByUserNameMutation = useAPIMutation({
    url: "auth/loginByUsername",
  });

  const onSubmit = handleSubmit(({ emailOrUsername, password }) => {
    let mutation;

    if (emailOrUsername.includes("@")) {
      mutation = loginByEmailMutation;
    } else {
      mutation = loginByUserNameMutation;
    }

    const mutationPromise = mutation.mutateAsync({ emailOrUsername, password });

    toast
      .promise(mutationPromise, {
        loading: "Iltimos kuting...",
        error: (error: AxiosResponse<any>) => error.data?.message || "Muvafaqqiyatsiz urinish",
        success: "Kirish muvafaqqiyatli amalga oshirildi",
      })
      .then((res) => {
        window.localStorage.setItem("token", res.data.doc.token);
        router.push("/");
      })
      .catch(() => {});
  });

  return (
    <div className={cn(classes["form-container"])}>
      <form className={cn(classes.form)} onSubmit={onSubmit}>
        <h1 className={cn(classes["form-heading"])}>Kirish</h1>
        <Input
          label="Email yoki foydalanuvchi ismi"
          type="text"
          placeholder="bu@misol.uz"
          style={errors.emailOrUsername ? { borderColor: "red" } : undefined}
          {...register("emailOrUsername")}
        />
        {errors.emailOrUsername ? <p className={cn(classes["error-msg"])}>{errors.emailOrUsername?.message}</p> : null}

        <Input
          label="Parol"
          placeholder="Parolingizni kiriting"
          type="password"
          style={errors.password ? { borderColor: "red" } : undefined}
          {...register("password")}
        />
        {errors.password ? <p className={cn(classes["error-msg"])}>{errors.password?.message}</p> : null}

        <Button
          isLarge
          color="blue"
          type="submit"
          className="mt-5"
          disabled={loginByEmailMutation.isLoading || loginByUserNameMutation.isLoading}
        >
          Davom etish
        </Button>
        <p className="mt-10 text-center fz-14">
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
