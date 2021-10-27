import { useState } from "react";
import ReactMarkdown from "react-markdown";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { useAPIMutation } from "hooks";
import toast from "react-hot-toast";

import { Button, Heading } from "components";

import classes from "./editor.module.scss";

const Editor = () => {
  const [article, setArticle] = useState<string>("");
  const [heading, setHeading] = useState("");
  const [preview, setPreview] = useState(false);
  const { register, handleSubmit } = useForm();

  const CreateArticleMutation = useAPIMutation({ url: "articles" });

  const onSubmit = handleSubmit((data) => {
    const mutationPromise = CreateArticleMutation.mutateAsync(data);

    toast
      .promise(mutationPromise, {
        loading: "Kuting...",
        success: "Muvaffaqiyatli",
        error: "Muvaffaqiyatsiz",
      })
      .then(() => {})
      .catch(() => {});
  });

  return !preview ? (
    <form onSubmit={onSubmit}>
      <div className={cn(classes["editor-container"])}>
        <textarea
          id="heading"
          placeholder="Sarlavha"
          className={cn(classes["heading-input"])}
          {...register("title")}
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
        ></textarea>
        <textarea
          id="article"
          placeholder="Maqola Yozing"
          className={cn(classes.editor)}
          {...register("content")}
          onChange={(e) => setArticle(e.target.value)}
          value={article}
        ></textarea>
      </div>
      <div className={cn(classes.buttons)}>
        <Button type="submit">{"Jo'natish"}</Button>
        <Button type="button" color="blue" onClick={() => setPreview(true)}>
          {"Prevyu"}
        </Button>
      </div>
    </form>
  ) : (
    <div className={cn(classes.preview)}>
      <div className={cn(classes["preview-container"])}>
        <Heading>{heading}</Heading>
        <ReactMarkdown className={cn(classes["article-body"])}>{article}</ReactMarkdown>
      </div>
      <Button
        className={cn(classes.back)}
        onClick={() => {
          console.log(article);
          setPreview(false);
        }}
      >
        Qaytish
      </Button>
    </div>
  );
};

export default Editor;
