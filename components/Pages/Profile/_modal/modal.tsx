import React, { SyntheticEvent } from "react";
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

// schema of form values
const schema = yup.object().shape({
  email: yup.string().email(),
  username: yup
    .string()
    .min(4, "Foydalanuvchi ismi 4ta belgidan uzun bo'lishi kerak!")
    .max(10, "Foydalanuvchi ismi 10ta belgidan oshmasligi kerak!")
    .lowercase(),
  // avatar: yup.array(),
});

// formvalue types
type Values = {
  email: string;
  username: string;
  avatar: File | File[];
};

const Modal = ({ avatar, setModalState, modalState, email, username }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    getValues,
  } = useForm<Values>({
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
  }, [username]);

  console.log(errors);
  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
    setModalState(!modalState);
  });

  return (
    <div className={cn(classes.backdrop)} onClick={() => setModalState(!modalState)}>
      <motion.form
        className={cn(classes["modal-container"])}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
        exit={{ scale: 0.8, opacity: 0, transition: { type: "spring", duration: 0.3 } }}
        onSubmit={onSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cn(classes["avatar-actions-container"])}>
          <div className={cn(classes["avatar-container"])}>
            <img src={avatar ? avatar : ""} alt="avatar" />
          </div>
          <div className={cn(classes["avatar-actions"])}>
            {/* TODO: fix image upload */}
            <input type="file" id="upload" className={cn(classes.upload)} />
            <label htmlFor="upload" className={cn(classes.file)}>
              Rasm Yuklash
            </label>
            <Button color="pink">{"Rasmni O'chirish"}</Button>
          </div>
        </div>
        <div className={cn(classes["personal-informations"])}>
          <h3 className={cn(classes.heading)}>{"Shaxsiy ma'lumotlar"}</h3>
          <div className={cn(classes.form)}>
            <div className={cn(classes.inputs)}>
              <Input label="Email" type="email" style={errors.email ? { borderColor: "red" } : undefined} {...register("email")} />
              <Input label="Username" type="text" style={errors.username ? { borderColor: "red" } : undefined} {...register("username")} />
            </div>
            <div className={cn(classes.buttons)}>
              <Button
                variant="outline"
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
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default Modal;
