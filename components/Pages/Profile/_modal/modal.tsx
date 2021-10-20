import React from "react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import cn from "classnames";
import { motion } from "framer-motion";

import { Input } from "components";

import { Button } from "components";

import classes from "./modal.module.scss";

type Props = {
  avatar: string;
  setModalState: Dispatch<SetStateAction<boolean>>;
  modalState: boolean;
  email: string;
  username: string;
};

const schema = yup.object().shape({
  email: yup.string().email(),
  username: yup
    .string()
    .min(4, "Foydalanuvchi ismi 4ta belgidan uzun bo'lishi kerak!")
    .max(10, "Foydalanuvchi ismi 10ta belgidan oshmasligi kerak!")
    .lowercase(),
  avatar: yup.string(),
});

const Modal = ({ avatar, setModalState, modalState, email, username }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    reset({
      ...getValues(),
      email,
      username,
      // avatar,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, username, avatar]);

  console.log(errors);
  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
    setModalState(!modalState);
  });

  return (
    <div className={cn(classes.backdrop)} onClick={() => setModalState(!modalState)}>
      <motion.div
        className={cn(classes["modal-container"])}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
        exit={{ scale: 0.8, opacity: 0, transition: { type: "spring", duration: 0.3 } }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn(classes["avatar-actions-container"])}>
          <div className={cn(classes["avatar-container"])}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={cn(classes["avatar-actions"])}>
            <input type="file" id="upload" className={cn(classes.upload)} />
            <label htmlFor="upload" className={cn(classes.file)} {...register("avatar")}>
              Rasm Yuklash
            </label>
            <Button color="pink">{"Rasmni O'chirish"}</Button>
          </div>
        </div>
        <div className={cn(classes["personal-informations"])}>
          <h3 className={cn(classes.heading)}>{"Shaxsiy ma'lumotlar"}</h3>
          <form action="" className={cn(classes.form)} onSubmit={onSubmit}>
            <div className={cn(classes.inputs)}>
              <Input label="Email" type="email" style={errors.email ? { borderColor: "red" } : undefined} {...register("email")} />
              <Input label="Username" type="text" style={errors.username ? { borderColor: "red" } : undefined} {...register("username")} />
            </div>
            <div className={cn(classes.buttons)}>
              <Button
                color="pink"
                type="button"
                onClick={() => {
                  setModalState(!modalState);
                  console.log("clicked");
                }}
              >
                Bekor Qilish
              </Button>
              <Button color="blue" type="submit">
                Saqlash
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
